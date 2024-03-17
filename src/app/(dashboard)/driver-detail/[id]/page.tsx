import { ArrowLeftIcon, MoreVertical } from "lucide-react";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ALL_ORDER_DUMMY, ORDER_COLUMN } from "@/constants";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <div className="inline-flex  gap-5 mb-5">
        <div>
          <Link href={`/drivers`}>
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">Informasi Driver</div>
        </div>
      </div>

      <Tabs defaultValue="detail">
        <TabsList className="mb-6">
          <TabsTrigger value="detail">Detail</TabsTrigger>
          <TabsTrigger value="edit-data">Edit Data</TabsTrigger>
        </TabsList>
        <TabsContent value="detail">
          <div className="flex flex-row justify-between mb-7">
            <div className="w-fit p-7 rounded-lg bg-slate-100">
              <div className="flex flex-row justify-between mb-4">
                <p className="font-semibold">Tedy Syach</p>
                <Badge variant="default">Active</Badge>
              </div>
              {/* Image Profile */}
              <div className="w-64 h-24 bg-white rounded-lg mb-6"></div>
              <div className="flex flex-row justify-between text-sm font-medium">
                <div>
                  <p>NIK</p>
                  <p>Phone</p>
                  <p>Address</p>
                </div>
                <div>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className="text-right">
                  <p>1234567890</p>
                  <p>081234567890</p>
                  <p>Jl. Raya Ciputat</p>
                </div>
              </div>
              <Button size="sm" variant="destructive" className="mt-2 w-full">
                Disable Driver
              </Button>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 h-fit w-[32%]">
              <p className="mb-4 text-lg">Total Pengiriman</p>
              <div className="rounded-lg bg-white p-4">
                <p>10</p>
              </div>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 h-fit w-[32%]">
              <p className="mb-4 text-lg">Total Komisi</p>
              <div className="rounded-lg bg-white p-4 flex flex-row">
                <p>Rp.</p>
                <p>50,000,-</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold bg-blue-600 text-white p-4 rounded-lg">
              Delivery History
            </h3>
            <Separator />
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow className="bg-[#232323] hover:bg-[#232323]">
                  {ORDER_COLUMN.map((column, index) => (
                    <TableHead key={index} className="text-white">
                      {column}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {ALL_ORDER_DUMMY.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{order.orderId}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "Di Kemas"
                            ? "secondary"
                            : order.status === "Dalam Perjalanan"
                            ? "outline"
                            : order.status === "Selesai"
                            ? "default"
                            : "default"
                        }
                        className={
                          order.status === "Di Kemas"
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="edit-data">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
