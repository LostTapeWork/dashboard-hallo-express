"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { LuHome } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiBuildingLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { BsPersonSquare } from "react-icons/bs";
import { PiPersonSimpleBikeDuotone } from "react-icons/pi";
import { LuPackage } from "react-icons/lu";
import { MdOutlineDirectionsBike } from "react-icons/md";

interface SideBarProps {}

const LinksDashboard = [
  { name: "Home", href: "/", icon: LuHome },
  { name: "Drivers", href: "/drivers", icon: MdOutlineDirectionsBike },
  { name: "Orders", href: "/orders", icon: LuPackage },
];

const LinksSetting = [
  { name: "Settings", href: "/settings", icon: IoSettingsOutline },
  { name: "Logout", href: "/logout", icon: RiLogoutCircleRLine },
];

export default function SideBar(SideBarProps: SideBarProps) {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <>
      <div className="lg:pb-12 lg:min-h-screen">
        <div className="space-y-4 py-4 ">
          <div className="px-3 flex lg:flex-col flex-row  lg:items-start  ">
            <div className="h-20 bg-[#232323] lg:w-full rounded-lg mb-3 items-end flex px-3 py-2 text-white">
              Hallo Express
            </div>
            <h2 className="mb-2 px-4 text-lg font-semibold hidden lg:block">
              Dashboard
            </h2>
            <div className="space-y-1  flex lg:flex-col flex-row lg:w-full ">
              {LinksDashboard.map((link) => {
                return (
                  <Button
                    key={link.name}
                    variant={"ghost"}
                    onClick={() => {
                      router.push(link.href);
                    }}
                    className={clsx(
                      "w-full justify-start text-black hover:text-primary",
                      {
                        "text-primary bg-sky-100": pathName === link.href,
                      }
                    )}
                  >
                    <link.icon className="mr-2 text-lg" />
                    {link.name}
                  </Button>
                );
              })}
            </div>
            <h2 className="mb-2 mt-10 px-4 text-lg font-semibold hidden lg:block">
              Settings
            </h2>
            <div className="space-y-1 flex flex-row lg:flex-col  lg:w-full">
              {LinksSetting.map((link) => {
                return (
                  <Button
                    key={link.name}
                    variant={"ghost"}
                    className={clsx(
                      "w-full justify-start text-black hover:text-primary",
                      {
                        "text-primary bg-sky-100": pathName === link.href,
                        "hover:text-red-400 text-red-400 hover:bg-red-100":
                          link.name === "Logout",
                      }
                    )}
                  >
                    <link.icon className="mr-2 text-lg" />
                    {link.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
