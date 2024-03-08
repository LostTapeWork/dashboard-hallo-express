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
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href={`/drivers`}>
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">Tedy Syach</div>
          <div className="bg-blue-600 p-1 text-sm rounded-sm text-white text-center">
            Active
          </div>
        </div>
      </div>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="history">delivery history</TabsTrigger>
          <TabsTrigger value="account">Information</TabsTrigger>
          <TabsTrigger value="password">account information</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="">
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
                  <TableHead className="text-right text-white">
                    Action
                  </TableHead>
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
                    <TableCell className="text-right">
                      <Button size="icon" variant="outline">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="account">
          <div className="w-[38%] h-44 bg-slate-800 p-3 rounded-md flex flex-col gap-3">
            <div className="w-full bg-white p-2 rounded-md flex justify-between items-center">
              <p className="text-sm">Tedy Syach</p>
              <p className="text-sm text-white bg-blue-500 py-1 px-2 rounded-sm">
                Active
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 h-24 bg-white rounded-lg"></div>
              <div className="text-white">
                <div>
                  NIK : <span>1234567890</span>
                </div>
                <div>
                  Full Name : <span>Tedy Syach</span>
                </div>
                <div>
                  Address : <span>Jl. Raya Ciputat</span>
                </div>
                <div>
                  Phone : <span>081234567890</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
