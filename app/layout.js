import "./globals.css"

export const metadata = {
	title: "cy - Starter",
	description:
		"Next.js - Supabase - Shadcn/ui - TailwindCSS - Starter Template",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
