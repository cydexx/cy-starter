import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Header } from "@/components/Header"

export const metadata = {
	title: "cy - Starter",
	description:
		"Next.js - Supabase - Shadcn/ui - TailwindCSS - Starter Template",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
