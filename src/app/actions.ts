"use server";

import { cookies, headers } from "next/headers";

export async function getCookie(key: string) {
  console.log(headers().getSetCookie())

  return cookies().get(key);
}

export async function createCookie(data: {
  name: string;
  value: string;
  [key: string]: any;
}) {
  cookies().set(data);
}
