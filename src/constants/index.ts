import { time } from "console";

const DRIVER_LIST_COLUMN: string[] = [
  "Full Name",
  "Vehicle license plate",
  "Operational Area",
  "Status",
];
const DRIVER_TOP_COLUMN: string[] = [
  "Full Name",
  "operational Area",
  "Total Order",
];

const DRIVER_TOP_DUMMY = [
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
  {
    fullName: "Tedy Syach",
    operationalArea: "Kabupaten Tasikmlaya",
    totalOrder: 10,
  },
];

const DRIVER_DUMMY = [
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "Active",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
  {
    fullName: "Tedy Syach",
    plateNumber: "B 1234 ABC",
    operationalArea: "Kabupaten Tasikmlaya",
    status: "UnActive",
  },
];

const ORDER_COLUMN: string[] = [
  "Order ID",
  "Customer",
  "Status",
  "Driver",
  "Date",
  "Time",
];

const ALL_ORDER_DUMMY = [
  {
    orderId: "123456",
    customer: "Tedy Syach",
    status: "In Delivery",
    driver: "Tedy Syach",
    date: "12/12/2021",
    time: "12:00",
  },
  {
    orderId: "123457",
    customer: "Tedy Syach",
    status: "Packaged",
    driver: "Proses",
    date: "12/12/2021",
    time: "12:00",
  },
  {
    orderId: "123458",
    customer: "Tedy Syach",
    status: "Ready To Deliver",
    driver: "Assign Driver",
    date: "12/12/2021",
    time: "12:00",
  },
  {
    orderId: "123458",
    customer: "Tedy Syach",
    status: "Finished",
    driver: "Tedy Syach",
    date: "12/12/2021",
    time: "12:00",
  },
];

const DIKEMAS_ORDER_DUMMY = [
  {
    orderId: "123457",
    customer: "Tedy Syach",
    status: "Packaged",
    driver: "Proses",
    date: "12/12/2021",
    time: "12:00",
  },
];

const READYTODELIVER_ORDER_DUMMY = [
  {
    orderId: "123458",
    customer: "Tedy Syach",
    status: "Ready To Deliver",
    driver: "Assign Driver",
    date: "12/12/2021",
    time: "12:00",
  },
];

const DALAMPERJALANAN_ORDER_DUMMY = [
  {
    orderId: "123456",
    customer: "Tedy Syach",
    status: "Dikirim",
    driver: "Tedy Syach",
    date: "12/12/2021",
    time: "12:00",
  },
];

const SELESAI_ORDER_DUMMY = [
  {
    orderId: "123458",
    customer: "Tedy Syach",
    status: "Selesai",
    driver: "Tedy Syach",
    date: "12/12/2021",
    time: "12:00",
  },
];
export {
  DRIVER_LIST_COLUMN,
  DRIVER_DUMMY,
  ORDER_COLUMN,
  ALL_ORDER_DUMMY,
  DIKEMAS_ORDER_DUMMY,
  READYTODELIVER_ORDER_DUMMY,
  DALAMPERJALANAN_ORDER_DUMMY,
  SELESAI_ORDER_DUMMY,
  DRIVER_TOP_COLUMN,
  DRIVER_TOP_DUMMY,
};
