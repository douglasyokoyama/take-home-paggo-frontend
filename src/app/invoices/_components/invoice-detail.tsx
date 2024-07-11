"use client";
import { getInvoice } from "@/app/api/invoices";
import { Invoice } from "@/app/interfaces/invoice";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export function InvoiceDetail(props: { id: number }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Invoice>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getInvoice(props.id);
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [props.id]);

  if (isLoading) return <div>Loading...</div>;

  function TextInfo(props: { label: string; value: string | undefined }) {
    return (
      <div className="flex gap-2">
        <span className="font-bold">{props.label}:</span>
        <span className="text-gray-700">{props.value}</span>
      </div>
    );
  }

  function TextSummary(props: { label: string; value: string }) {
    return (
      <div className="flex flex-col mt-2">
        <span className="font-bold text-sm">{props.label}</span>
        <span className="text-gray-700 text-sm">{props.value}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <TextInfo label="Status" value={data?.status} />
      <TextInfo label="Uploaded" value={data?.created_at} />
      <TextInfo label="File" value={data?.file_name} />
      <Separator className="my-2" />
      <h2 className="font-bold text-lg mt-2">Summary</h2>
      <Separator />
      <div className="max-h-[35vh] overflow-auto">
        {data?.summary?.map((s) => (
          <>
            <TextSummary
              key={s.label + s.value}
              label={s.label}
              value={s.value}
            />
            <Separator />
          </>
        ))}
      </div>
      <Separator />
    </div>
  );
}
