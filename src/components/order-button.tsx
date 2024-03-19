"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function OrderActionButton({
  url,
  status,
}: {
  url: string;
  status: string;
}) {
  const router = useRouter();
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => {
        router.push(url);
      }}
      disabled={status === "In Delivery" || status === "Packaged"}
    >
      <MoreVertical className="w-4 h-4" />
    </Button>
  );
}
