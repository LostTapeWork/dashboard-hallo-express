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

export default function Page() {
  return (
    <div>
      <div className="my-5">
        <div className="text-lg font-semibold">Driver List</div>
        <div className="text-gray-400">
          All the information about your driver is listed below.
        </div>
      </div>
      <Tabs defaultValue="semua" className="w-full">
        <div className="flex justify-between items-center">
          <TabsList className="mb-8">
            <TabsTrigger value="semua">Semua</TabsTrigger>
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
        <TabsContent value="semua">
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
              {DRIVER_DUMMY.map((driver, index) => (
                <TableRow key={index}>
                  <TableCell>{driver.fullName}</TableCell>
                  <TableCell>{driver.plateNumber}</TableCell>
                  <TableCell>{driver.operationalArea}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        driver.status === "Active"
                          ? "bg-blue-500"
                          : driver.status === "UnActive"
                          ? "bg-red-500"
                          : "default"
                      }
                    >
                      {driver.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <ActionButton url={`/driver-detail/${index}`} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="active">Change your password here.</TabsContent>
        <TabsContent value="unactive">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
