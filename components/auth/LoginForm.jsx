"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "@/utils/actions/auth"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters.",
	}),
})

export function LoginForm() {
	const { toast } = useToast()
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	async function onSubmit(data) {
		const formData = new FormData()
		formData.append("email", data.email)
		formData.append("password", data.password)

		const result = await signIn(formData)

		if (result?.error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: result.error,
			})
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="name@example.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="w-full" type="submit">
					Sign In
				</Button>
			</form>
		</Form>
	)
}
