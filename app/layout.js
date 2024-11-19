import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
	title: "cy - Starter",
	description:
		"Next.js - Supabase - Shadcn/ui - TailwindCSS - Starter Template",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
