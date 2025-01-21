import { Element, Root as HRoot } from "hast";
import { visit } from "unist-util-visit";
import { selectAll } from "unist-util-select";

// The html tag name that we want to filter
// Order by the depth of the value we want to filter
const TableOfContentFilter = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Mapping = new Map(
    TableOfContentFilter.map((value, index) => [
        value,
        index + 1 /* depth == 0 mean root, we don't create root here */,
    ]),
);

// TOC, a.k.a Table of Content, is a tree structure that represents the table of content in the html.
// The TOCNode is the node of the TOC tree.
interface TOCNode {
    // id of the element
    // if the id is null, it means the element is a container, and we don't need to generate a link nor an id for it
    id?: string;
    sectionTitle: string | "root";
    children: TOCNode[];
    depth: number;
}

interface FilteredContent {
    title: Element;
    id: string;
    depth: number;
}

interface TextNode {
    type: "text";
    value: string;
}

// Create the TOCNode tree from the array of FilteredContent
export function generateTOC(ast: HRoot) {
    const headings: FilteredContent[] = [];

    visit(ast, "element", (node) => {
        if (node.tagName && Mapping.has(node.tagName) && node.properties.id) {
            headings.push({
                title: node,
                id: node.properties.id as string,
                depth: Mapping.get(node.tagName)!,
            });
        }
    });

    // we insert a root node into the stack to prevent the stack from being empty
    // ( which will cause stackPeek return undefined and
    // collectSameDepthOnTopAsChild will throw an error since we defined root node as a dummy node)
    // the root node is a dummy node

    const stack: TOCNode[] = [
        {
            children: [],
            sectionTitle: "root",
            depth: 0,
        },
    ];

    // get the top of the stack
    const stackPeek = () => stack.at(-1);

    // collect the same depth node on top of the stack ( we will remove from the stack)
    const collectSameDepthOnTopAsChild = () => {
        const temp = [stack.pop()!];
        while (temp[0].depth === stackPeek()?.depth) {
            temp.push(stack.pop()!);
        }

        // that depth of the tree is continuous
        while (temp[0].depth !== stackPeek()!.depth + 1) {
            stack.push({
                children: [],
                sectionTitle: "",
                depth: stackPeek()!.depth + 1,
            });
        }

        stackPeek()!.children.push(...temp.reverse());
    };

    // iterate over the array of FilteredContent, then put it into the stack
    // if the depth of the node is less than the top of the stack, we will collect the same depth node on top of the stack
    // then push the node into the children of the top stack element
    for (const node of headings) {
        if (node.depth < stackPeek()!.depth) {
            do {
                collectSameDepthOnTopAsChild();
            } while (node.depth < stackPeek()!.depth);
        }

        const textNodes = selectAll("text", node.title) as TextNode[];
        const selectionText = textNodes.map((node) => node.value).join("");

        stack.push({
            id: node.id,
            children: [],
            sectionTitle: selectionText,
            depth: node.depth,
        });
    }

    // currently, the stack is having an array of TOCNode
    // we will need to merge the array of TOCNode into a single root TOCNode
    while (stack.length > 1) {
        collectSameDepthOnTopAsChild();
    }

    return stack[0];
}

interface HastTOCProps {
    ast: HRoot;
}

export default function HastTOC({ ast }: HastTOCProps) {
    const node = generateTOC(ast);

    const liTree = (node: TOCNode) => {
        const a = node.id ? (
            <a href={`#${node.id}`}>
                <div>{node.sectionTitle}</div>
            </a>
        ) : (
            <span>{node.sectionTitle}</span>
        );

        // leaf node
        if (node.children.length === 0) {
            return <li>{a}</li>;
        }

        const children = node.children.map(liTree);

        return (
            <li>
                {a}
                <ul>{children}</ul>
            </li>
        );
    };

    // we will need to convert the TOCNode into a list
    const children = node.children.map(liTree);

    // create the ol element on the top of the children ( which is the list of li element)
    return <ol className="toc">{children}</ol>;
}
