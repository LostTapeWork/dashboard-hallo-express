"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
import { useRouter } from "next/navigation";
import ActionButton from "@/components/action-button";
import OrderActionButton from "@/components/order-button";
import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

export default function Page() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get("/api/orders");

        // Axios automatically throws an error for non-2xx responses, so no need for response.ok check

        const data = response.data; // Update this line
        console.log(data.data);
        setOrders(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []); // Empty dependency array to run once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

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
                <TableHead className="text-white">Kode Transaksi</TableHead>
                <TableHead className="text-white">Pelanggan</TableHead>
                <TableHead className="text-white">Total Pembayaran</TableHead>
                <TableHead className="text-white">Tanggal Transaksi</TableHead>
                <TableHead className="text-white">Waktu Transaksi</TableHead>
                <TableHead className="text-white">Metode Pembayaran</TableHead>
                <TableHead className="text-white">Driver</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-right text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order: any, index: number) => (
                <TableRow key={order.posTransaksiId}>
                  <TableCell className="text-xs">
                    {order.kodeTransaksi.length > 10
                      ? `${order.kodeTransaksi.substring(0, 10)}...`
                      : order.kodeTransaksi}
                  </TableCell>
                  <TableCell className="text-xs">
                    {order.namaPelanggan}
                  </TableCell>
                  <TableCell className="text-xs">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(order.totalPembayaran)}
                  </TableCell>
                  <TableCell className="text-xs">
                    {order.tanggalTransaksi.split(" ")[0]}{" "}
                  </TableCell>
                  <TableCell className="text-xs">
                    {order.tanggalTransaksi.split(" ")[1]}{" "}
                  </TableCell>

                  <TableCell className="text-xs">
                    {/* {order.jenisPembayaranOnline} */}
                    <Badge variant="outline">COD</Badge>
                  </TableCell>
                  <TableCell className="text-xs">
                    {order.nama_driver ? order.nama_driver : "Assign Driver"}
                  </TableCell>
                  <TableCell>
                    <Badge>{order.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="outline">
                      <OrderActionButton
                        url={`/order-detail/${order.posTransaksiId}`}
                        status={order.status}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center gap-3 justify-end mt-4">
            <p>1</p>
            <Button size="sm" variant="default">
              Next
            </Button>
          </div>
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
