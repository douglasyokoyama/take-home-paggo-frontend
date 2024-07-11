"use client";
import ErrorMessage from "@/components/error-message";
import ProgressIndicator from "@/components/progress-indicator";
import SuccessMessage from "@/components/success-message";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { uploadInvoice } from "@/app/api/invoices";

const UploadInvoice = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    setError("");

    try {
      await uploadInvoice(formData);

      setSuccess(true);
    } catch (error) {
      setError("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange}></Input>
      <div className="flex justify-end">
        <Button onClick={handleUpload} disabled={uploading} className="my-4">
          {uploading ? <ProgressIndicator /> : <span> Upload </span>}
        </Button>
      </div>
      <Separator />
      {success && <SuccessMessage />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default UploadInvoice;
