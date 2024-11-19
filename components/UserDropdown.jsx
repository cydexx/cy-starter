import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "@/utils/actions/auth"
import { getUser } from "@/utils/actions/user"

export async function UserDropdown() {
	const user = await getUser()

	if (!user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="focus:outline-none">
				<Avatar>
					<AvatarFallback>
						{user?.email?.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel>
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">
							Account
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user?.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<form action={signOut}>
					<DropdownMenuItem asChild>
						<button className="w-full cursor-pointer">
							Log out
						</button>
					</DropdownMenuItem>
				</form>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
