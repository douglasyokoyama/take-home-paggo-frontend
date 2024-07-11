"use server";
import { cookies } from "next/headers";

export async function getToken(): Promise<string> {
  return cookies().get("token")?.value || "";
};
