import InvoicesCard from "@/components/invoices/invoices-card";
import UploadInvoiceCard from "@/components/invoices/upload-invoice-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-12">
      <Tabs defaultValue="upload" className="w-full max-w-[800px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <UploadInvoiceCard />
        </TabsContent>
        <TabsContent value="invoices">
          <InvoicesCard />
        </TabsContent>
      </Tabs>
    </main>
  );
}
