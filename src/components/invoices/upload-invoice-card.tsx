import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UploadInvoice from "./upload-invoice";

export default function UploadInvoiceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Invoice</CardTitle>
        <CardDescription>Upload new invoice to extract data.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <UploadInvoice></UploadInvoice>
      </CardContent>
    </Card>
  );
}
