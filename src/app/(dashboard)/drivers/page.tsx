"use client";

import ActionButton from "@/components/action-button";
import { Badge } from "@/components/ui/badge";
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
import { DRIVER_DUMMY, DRIVER_LIST_COLUMN } from "@/constants/index";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderActionButton from "@/components/order-button";

export default function Page() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get("/api/drivers");

        // Axios automatically throws an error for non-2xx responses, so no need for response.ok check

        const data = response.data; // Update this line
        console.log(data.drivers);
        setDrivers(data.drivers);
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
        <div className="text-lg font-semibold">Driver List</div>
        <div className="text-gray-400">
          All the information about your driver is listed below.
        </div>
      </div>
      <Tabs defaultValue="active" className="w-full">
        <div className="flex justify-between items-center">
          <TabsList className="mb-8">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="unactive">UnActive</TabsTrigger>
          </TabsList>
          <div className="flex gap-4">
            <Input className="h-9" placeholder="Cari Disini" />
            <Button size="sm" variant="default" className="mb-5">
              <FaArrowDownShortWide />
            </Button>
          </div>
        </div>
        <TabsContent value="active">
          <Separator />
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow className="bg-[#232323] hover:bg-[#232323]">
                {DRIVER_LIST_COLUMN.map((column, index) => (
                  <TableHead key={index} className="text-white">
                    {column}
                  </TableHead>
                ))}
                <TableHead className="text-right text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver: any, index) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.fullName}</TableCell>
                  <TableCell>{driver.licenseNumber}</TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>{driver.operationalArea}</TableCell>
                  <TableCell>
                    <Badge>{driver.driver.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="outline">
                      <OrderActionButton
                        url={`/driver-detail/${driver.id}`}
                        status={driver.driver.statuss}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="unactive">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
