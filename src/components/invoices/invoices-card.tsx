import { InvoicesList } from "@/app/invoices/_components/invoices-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function InvoicesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <CardDescription>
          Here you can follow the invoices uploaded.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <InvoicesList></InvoicesList>
      </CardContent>
    </Card>
  );
}
