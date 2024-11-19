import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { UserDropdown } from "./UserDropdown"

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center justify-center">
				<div className="flex flex-1 items-center justify-between ">
					<Link href="/" className="flex items-center space-x-2">
						<span className="font-bold">cy-starter</span>
					</Link>
					<nav className="flex items-center space-x-2">
						<ModeToggle />
						<UserDropdown />
					</nav>
				</div>
			</div>
		</header>
	)
}
