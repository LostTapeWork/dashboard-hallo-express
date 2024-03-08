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
import {
  ORDER_COLUMN,
  ALL_ORDER_DUMMY,
  SELESAI_ORDER_DUMMY,
  DALAMPERJALANAN_ORDER_DUMMY,
  DIKEMAS_ORDER_DUMMY,
  READYTODELIVER_ORDER_DUMMY,
} from "@/constants/index";
import { MoreVertical } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div>
      <div className="my-5">
        <div className="text-lg font-semibold">Order List</div>
        <div className="text-gray-400">
          All the information about your order is listed below.
        </div>
      </div>

      <Tabs defaultValue="semua">
        <div className="flex justify-between items-center">
          <TabsList className="mb-8">
            <TabsTrigger value="semua">All</TabsTrigger>
            <TabsTrigger value="dikemas">Packaged</TabsTrigger>
            <TabsTrigger value="pickup">Ready to send</TabsTrigger>
            <TabsTrigger value="dikirim">in delivery</TabsTrigger>
            <TabsTrigger value="selesai">finished</TabsTrigger>
          </TabsList>
          <div className="flex gap-4">
            <Input className="h-9" placeholder="Cari Disini" />
            <Button size="sm" variant="default" className="mb-5">
              <FaArrowDownShortWide />
            </Button>
          </div>
        </div>
        <TabsContent value="semua">
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
                <TableHead className="text-right text-white">Action</TableHead>
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
                        order.status === "Packaged"
                          ? "secondary"
                          : order.status === "In Delivery"
                          ? "outline"
                          : order.status === "Ready To Deliver"
                          ? "destructive"
                          : order.status === "Finished"
                          ? "default"
                          : "default"
                      }
                      className={
                        order.status === "Packaged"
                          ? "bg-yellow-100"
                          : order.status === "In Delivery"
                          ? "border-blue-500"
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
                      disabled={order.status === "Packaged"}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="dikemas">
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
                <TableHead className="text-right text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DIKEMAS_ORDER_DUMMY.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Packaged"
                          ? "secondary"
                          : order.status === "In Delivery"
                          ? "outline"
                          : order.status === "Ready To Deliver"
                          ? "destructive"
                          : order.status === "Finished"
                          ? "default"
                          : "default"
                      }
                      className={
                        order.status === "Packaged"
                          ? "bg-yellow-100"
                          : order.status === "In Delivery"
                          ? "border-blue-500"
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
                    <Button size="icon" variant="outline" disabled>
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="pickup">
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
                <TableHead className="text-right text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {READYTODELIVER_ORDER_DUMMY.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Packaged"
                          ? "secondary"
                          : order.status === "In Delivery"
                          ? "outline"
                          : order.status === "Ready To Deliver"
                          ? "destructive"
                          : order.status === "Finished"
                          ? "default"
                          : "default"
                      }
                      className={
                        order.status === "Packaged"
                          ? "bg-yellow-100"
                          : order.status === "In Delivery"
                          ? "border-blue-500"
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
                    <Button size="icon" variant="outline">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="dikirim">
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
                <TableHead className="text-right text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DALAMPERJALANAN_ORDER_DUMMY.map((order, index) => (
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
                  <TableCell className="text-right">
                    <Button size="icon" variant="outline">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="selesai">
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
                <TableHead className="text-right text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SELESAI_ORDER_DUMMY.map((order, index) => (
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
                          ? "bg-[#232323]"
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
                    <Button size="icon" variant="outline">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
