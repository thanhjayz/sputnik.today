import { signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";
/*
export const signIn = async (provider) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};
export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};
*/
export const register = async (provider) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};