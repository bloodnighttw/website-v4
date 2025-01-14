// original source: https://stackoverflow.com/questions/76931178/nextjs-if-router-back-has-no-history-to-route-to-route-to-home

import { useSessionStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DEFAULT_INITIAL_PAGE_PARAM = "___lander";

type UseBackOptions = {
    // example: you are on home page. does not make much sense to provide a back button (depends on your app)
    // visiting a route in this array will disable the back button
    // optional, default is []
    cantBackAfterPaths?: string[];

    // in case you have multiple instances of this hook, and to avoid confilcts with other keys in your app
    // optional, default is ""
    storageKeyPrefix?: string;

    // optional, default is "___lander", to avoid conflicts with other query params in your app
    initialPageParam?: string;
};

const useBack = ({
    cantBackAfterPaths = [],
    storageKeyPrefix = "",
    initialPageParam = DEFAULT_INITIAL_PAGE_PARAM,
}: UseBackOptions = {}) => {
    const [canGoBack, setCanGoBack] = useState(false);
    const [navigating, setNavigating] = useState(false);

    const [initialPageQueryWasAdded, setInitialPageQueryWasAdded] =
        useSessionStorage(`${storageKeyPrefix}queryAdded`, false);

    const pathname = usePathname();
    const { back, replace } = useRouter();
    const searchParams = useSearchParams();

    const [initialPath] = useSessionStorage(
        `${storageKeyPrefix}initialPath`,
        pathname,
    );

    // Add query param on first visit
    useEffect(() => {
        const isInitialPageParamPresent = searchParams.has(initialPageParam);

        if (
            !isInitialPageParamPresent &&
            pathname === initialPath &&
            !initialPageQueryWasAdded
        ) {
            const newSearchParams = new URLSearchParams(
                searchParams.toString(),
            );
            newSearchParams.set(initialPageParam, "true");

            // Preserve existing query parameters while adding our new one
            replace(`${pathname}?${newSearchParams.toString()}`);

            setInitialPageQueryWasAdded(true);
        }
    }, [
        initialPageParam,
        initialPath,
        pathname,
        initialPageQueryWasAdded,
        replace,
        searchParams,
        setInitialPageQueryWasAdded,
    ]);

    useEffect(() => {
        const isCantBackPath = cantBackAfterPaths.includes(pathname);
        const isInitialPageParamPresent = searchParams.has(initialPageParam);
        const isInitialPath = pathname === initialPath;

        // Can't go back if:
        // 1. Current path is in cantBackAfterPaths, OR
        // 2. We're on initial path AND the initial page param is present
        setCanGoBack(
            !(isCantBackPath || (isInitialPath && isInitialPageParamPresent)),
        );
    }, [
        cantBackAfterPaths,
        initialPageParam,
        initialPath,
        pathname,
        searchParams,
    ]);

    // listen navigation changes
    useEffect(() => {
        setNavigating(false);
    }, [pathname]);

    const handleBack = () => {
        setNavigating(true);
        back();
    };

    return {
        canGoBack: !navigating && canGoBack,
        back: handleBack,
    };
};

export default useBack;
