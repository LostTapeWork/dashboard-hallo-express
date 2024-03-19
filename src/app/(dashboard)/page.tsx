import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DRIVER_DUMMY,
  DRIVER_LIST_COLUMN,
  DRIVER_TOP_COLUMN,
  DRIVER_TOP_DUMMY,
} from "@/constants";
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
import ActionButton from "@/components/action-button";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-stretch gap-3 mb-10">
        <Card className="w-full h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Siap DiKirim</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-blue-400 text-white p-4 text-lg text-center font-semibold rounded-md">
              42
            </div>
          </CardContent>
        </Card>
        <Card className="w-full h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Dalam Perjalanan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-blue-400 text-white p-4 text-lg text-center font-semibold rounded-md">
              42
            </div>
          </CardContent>
        </Card>
        <Card className="w-full h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Selesai</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-blue-400 text-white p-4 text-lg text-center font-semibold rounded-md">
              42
            </div>
          </CardContent>
        </Card>
        <div className="w-4"></div>
        <Card className="w-full h-fit bg-blue-400">
          <CardHeader>
            <CardTitle className="text-lg text-white">Drivers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-white p-4 text-lg text-center font-semibold rounded-md">
              42
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-row gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Top Drivers</CardTitle>
            <CardDescription>Drivers dengan performa terbaik</CardDescription>
          </CardHeader>
          <CardContent>
            <Separator />
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow className="bg-[#232323] hover:bg-[#232323]">
                  {DRIVER_TOP_COLUMN.map((column, index) => (
                    <TableHead key={index} className="text-white">
                      {column}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {DRIVER_TOP_DUMMY.map((driver, index) => (
                  <TableRow key={index}>
                    <TableCell>{driver.fullName}</TableCell>
                    <TableCell>{driver.operationalArea}</TableCell>
                    <TableCell>{driver.totalOrder}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
