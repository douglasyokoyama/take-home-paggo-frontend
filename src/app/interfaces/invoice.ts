export interface Invoice {
  id: number;
  status: string;
  created_at: string;
  file_name: string;
  summary?: { label: string; value: string }[];
}
