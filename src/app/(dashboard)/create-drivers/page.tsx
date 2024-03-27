"use client";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { driverSchema } from "@/lib/create-driver-schema";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FieldInput from "@/components/field-input";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function Page() {
  const route = useRouter();
  const driverForm = useForm<z.infer<typeof driverSchema>>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      username: "",
      password: "",
      daop: "",
      platNomer: "",
      nik: "",
      fullName: "",
      alamat: "",
      tempatLahir: "",
      tanggalLahir: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof driverSchema>) => {
    await fetch("/api/drivers/auth/register", {
      method: "POST",
      body: JSON.stringify(values),
    });

    route.push("/drivers");
  };

  return (
    <div>
      <div className="inline-flex gap-2 cursor-pointer hover:text-primary">
        <FaRegArrowAltCircleLeft className="w-6 h-6" />
        <span className="text-2xl font-semibold">Driver Registration</span>
      </div>

      <div className="my-5">
        <div className="text-lg font-semibold">Driver Information</div>
        <div className="text-gray-400">
          Please fill in the information below to continue
        </div>
      </div>

      <Separator />

      <Form {...driverForm}>
        <form
          onSubmit={driverForm.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          <FieldInput title="Username" subtitle="Username use for Login">
            <FormField
              control={driverForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. tedy_syach"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    at least 3 characters long
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <FieldInput title="Password" subtitle="Password use for Login">
            <FormField
              control={driverForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. TedySyach123"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    at least 8 characters long
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <FieldInput title="Phone Number" subtitle="Phone number of driver">
            <FormField
              control={driverForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. 08******"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    at least 12 characters long
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <FieldInput
            title="Operational Area"
            subtitle="Operational area of the driver"
          >
            <FormField
              control={driverForm.control}
              name="daop"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Select operational area " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Tasikmalaya">Tasikmalaya</SelectItem>
                      <SelectItem value="Bandung">Bandung</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-blue-500">
                    The operational area of the driver
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Vehicle license plate"
            subtitle="Valid Vehicle license plate"
          >
            <FormField
              control={driverForm.control}
              name="platNomer"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. Z 1234 AF"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    at least 7 characters long
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <FieldInput title="NIK" subtitle="NIK is required for validation">
            <FormField
              control={driverForm.control}
              name="nik"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. 0**************"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    at least 16 characters long
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <FieldInput
            title="Full Name"
            subtitle="Full Name should match the one on the KTP"
          >
            <FormField
              control={driverForm.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. Tedy Syach"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    *Required
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <FieldInput
            title="Address"
            subtitle="Address should match the one on the KTP"
          >
            <FormField
              control={driverForm.control}
              name="alamat"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. Lingkungan Cipaku RT 01 RW 02"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    *Required
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <FieldInput
            title="Place of birth"
            subtitle="Place of birth should match the one on the KTP"
          >
            <FormField
              control={driverForm.control}
              name="tempatLahir"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g. Cikunir"
                      {...field}
                      className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    *Required
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <FieldInput
            title="Date of birth"
            subtitle="Date of birth should match the one on the KTP"
          >
            <FormField
              control={driverForm.control}
              name="tanggalLahir"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="e.g. Cikunir"
                      {...field}
                      // className="w-[450px]"
                    />
                  </FormControl>
                  <FormDescription className="text-blue-500">
                    *Required
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </FieldInput>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 text-white bg-primary rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
