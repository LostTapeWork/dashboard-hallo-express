"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const navCreateJob = () => router.push("/create-drivers");
  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div>
        <div>Hallo Express</div>
        <div className="font-semibold">Dashboard</div>
      </div>
      <div>
        <Button onClick={navCreateJob} className="py-3 px-6">
          <PlusIcon className="mr-2 w-4 h-4" />
          Daftar Drivers
        </Button>
      </div>
    </div>
  );
}
