import { ImageResponse } from "next/og";
import "./globals.css";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                alt="View bloodnighttw's full-sized avatar"
                src="https://avatars.githubusercontent.com/u/44264182?s=460&u=b59e580f37ab7e6a3979ab8a6df1f12ba6588069&v=1"
                className="h-8 w-8"
                loading="eager"
            />
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        },
    );
}
