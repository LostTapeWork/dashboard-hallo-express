import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";

export default function TableCustome({
  data,
  column,
}: {
  data: [
    {
      orderId: string;
      customer: string;
      status: string;
      driver: string;
      date: string;
      time: string;
    }
  ];
  column: [];
}) {
  return (
    <>
      <Separator />
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-[#232323] hover:bg-[#232323]">
            {column.map((column, index) => (
              <TableHead key={index} className="text-white">
                {column}
              </TableHead>
            ))}
            <TableHead className="text-right text-white">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "Dikemas"
                      ? "secondary"
                      : order.status === "Dalam Perjalanan"
                      ? "outline"
                      : order.status === "Selesai"
                      ? "default"
                      : "default"
                  }
                  className={
                    order.status === "Dikemas"
                      ? "bg-yellow-100"
                      : order.status === "Dalam Perjalanan"
                      ? "border-blue-500"
                      : order.status === "Selesai"
                      ? "bg-green-500"
                      : "default"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>{order.driver}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.time}</TableCell>
              <TableCell className="text-right">
                <Button
                  size="icon"
                  variant="outline"
                  disabled={order.status === "Dikemas"}
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
