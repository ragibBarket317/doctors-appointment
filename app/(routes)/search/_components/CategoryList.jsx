"use client";

import { getCategory } from "@/app/_utils/GlobalApi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  const pathName = params.split("/")[2];

  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    getCategory().then((res) => {
      console.log(res?.data?.data);
      setCategoryList(res?.data?.data);
    });
  };

  return (
    <div>
      <Command className="mt-5 h-screen">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup>
            {categoryList.length > 0
              ? categoryList.map((item, index) => (
                  <Link key={index} href={`${item?.attributes?.Name}`}>
                    <CommandItem
                      className={`mt-4 text-[16px] cursor-pointer ${
                        decodeURIComponent(pathName) === item?.attributes?.Name
                          ? "bg-blue-100"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={item?.attributes?.Icon?.data?.attributes?.url}
                          alt="icon"
                          width={25}
                          height={25}
                        />
                        <p className="text-primary">{item?.attributes?.Name}</p>
                      </div>
                    </CommandItem>
                  </Link>
                ))
              : [1, 2, 3, 4, 5, 6].map((item, index) => (
                  <CommandItem key={index} className="mt-4">
                    <div className="bg-slate-200 h-12 w-full animate-pulse rounded-md"></div>
                  </CommandItem>
                ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
