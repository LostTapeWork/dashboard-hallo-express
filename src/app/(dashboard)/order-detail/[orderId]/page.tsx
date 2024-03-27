import { Badge } from "@/components/ui/badge";
import { ALL_ORDER_DUMMY } from "@/constants";

export default function Page({ params }: { params: any }) {
  return (
    <div className="border border-slate-200 p-6 rounded-lg flex justify-between">
      {/* Costumer Name : {ALL_ORDER_DUMMY[params.orderId].customer} */}
      <div className="w-[20%]">
        <p className="text-xs mb-1 font-semibold">Costumer Name :</p>
        {/* <p className="text-md">{ALL_ORDER_DUMMY[params.orderId].customer}</p> */}
      </div>
      <div className="w-[20%]">
        <p className="text-xs mb-1 font-semibold">Tanggal Transaksi :</p>
        {/* <p className="text-md">{ALL_ORDER_DUMMY[params.orderId].date}</p> */}
      </div>
      <div className="w-[20%]">
        <p className="text-xs mb-1 font-semibold">Waktu Transaksi :</p>
        {/* <p className="text-md">{ALL_ORDER_DUMMY[params.orderId].time}</p> */}
      </div>
      <div className="w-[20%]">
        <p className="text-xs mb-1 font-semibold">Status :</p>
        <Badge>
          {/* <p className="text-md">{ALL_ORDER_DUMMY[params.orderId].status}</p> */}
        </Badge>
      </div>
    </div>
  );
}
