import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Bloodnighttw's personal website and blog",
};

export default function RootLayout({
    children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className="bg-stone-900">
		{children}
		</body>
		</html>
	);
}
