"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function ActionButton({ url }: { url: string }) {
  const router = useRouter();
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => {
        router.push(url);
      }}
    >
      <MoreVertical className="w-4 h-4" />
    </Button>
  );
}
