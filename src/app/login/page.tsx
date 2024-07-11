"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const handleLogin = async () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/callback`;
  };

  return (
    <main className="flex justify-center py-12">
      <Card className="w-[200px] h-[250px]">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <Separator className="w-[70%] m-auto"/>
        <CardContent className="flex items-center justify-center h-48">
          <Button onClick={handleLogin}>Google Login</Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default Page;
