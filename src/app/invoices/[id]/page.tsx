import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { InvoiceDetail } from "../_components/invoice-detail";

export default function Page({
  params: { id: id },
}: {
  params: { id: string };
}) {
  return (
    <main className="flex items-center justify-center py-12">
      <Card className={cn("w-[580px]")}>
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Link href="/">
              <ChevronLeft size={32}/>
            </Link>
            Invoice Details
          </CardTitle>
        </CardHeader>
        <CardContent className="px-12">
          <InvoiceDetail id={id}></InvoiceDetail>
        </CardContent>
      </Card>
    </main>
  );
}
