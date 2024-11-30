import type {Metadata} from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export const metadata: Metadata = {
	title: "bloodnighttw",
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
		<SpeedInsights />
		</body>
		</html>
	);
}
