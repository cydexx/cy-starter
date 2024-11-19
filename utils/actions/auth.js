"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { createClient } from "@/utils/supabase/server"

export async function signIn(formData) {
	const supabase = createClient()

	const { error } = await supabase.auth.signInWithPassword({
		email: formData.get("email"),
		password: formData.get("password"),
	})

	if (error) {
		return { error: error.message }
	}

	revalidatePath("/", "layout")
	redirect("/")
}

export async function signUp(formData) {
	const supabase = createClient()

	const { error } = await supabase.auth.signUp({
		email: formData.get("email"),
		password: formData.get("password"),
		options: {
			emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
		},
	})

	if (error) {
		return { error: error.message }
	}

	revalidatePath("/", "layout")
	redirect("/auth/verify")
}

export async function signOut() {
	const supabase = createClient()

	const { error } = await supabase.auth.signOut()

	if (error) {
		return { error: error.message }
	}

	revalidatePath("/", "layout")
	redirect("/login")
}
