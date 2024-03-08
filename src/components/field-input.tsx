import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface FieldInputProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function FieldInput({
  children,
  title,
  subtitle,
}: FieldInputProps) {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400 w-80 ">
            <i>{subtitle}</i>
          </div>
        </div>
        {children}
      </div>

      <Separator />
    </>
  );
}
