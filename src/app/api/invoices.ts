"use server";
import { getToken } from "./auth";

export const uploadInvoice = async function (formData: FormData) {
  try {
    const token = await getToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/invoices/upload`,
      {
        method: "POST",
        body: formData,
        credentials: "include",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      }
    );
    if (res && res.status === 200) {
      return res.json();
    } else {
      console.error("Request failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getInvoice = async function (id: number) {
  try {
    const token = await getToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/invoices/${id}`,
      {
        method: "GET",
        credentials: "include",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      }
    );
    if (res && res.status === 200) {
      return res.json();
    } else {
      console.error("Request failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getInvoices = async function () {
  try {
    const token = await getToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/invoices`,
      {
        method: "GET",
        credentials: "include",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      }
    );
    if (res && res.status === 200) {
      return res.json();
    } else {
      console.error("Request failed");
    }
  } catch (error) {
    console.log(error);
  }
};