"use client";
import { Separator } from "@/components/ui/separator";
import { columns } from "./invoices-columns";
import { DataTable } from "./invoices-data-table";
import { useEffect, useState } from "react";
import { Invoice } from "@/app/interfaces/invoice";
import { getInvoices } from "@/app/api/invoices";

export function InvoicesList() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getInvoices();
        setData(result || []);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <DataTable columns={columns} data={data} />
      <Separator></Separator>
    </>
  );
}
