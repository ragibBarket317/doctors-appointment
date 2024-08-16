"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCategory } from "../_utils/GlobalApi";
const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState([]);
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
    <div className="mb-8">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-4xl font-bold tracking-wide">
          Search <span className="text-primary">Doctors</span>
        </h2>
        <p className="text-xl text-gray-500">
          Search your Doctor and Book Appointment in one click
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
          <Input type="text" placeholder="Search..." />
          <Button type="submit">
            <Search size={20} className="mr-2" />
            Search
          </Button>
        </div>
      </div>
      {/* display list of category */}
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6">
        {categoryList.length > 0
          ? categoryList?.map(
              (item, index) =>
                index < 6 && (
                  <Link
                    href={`/search/${item?.attributes?.Name}`}
                    key={index}
                    className="flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 cursor-pointer hover:scale-110 transition-all ease-in-out"
                  >
                    <Image
                      src={item?.attributes?.Icon?.data?.attributes?.url}
                      alt="icon"
                      width={50}
                      height={50}
                    />
                    <label className="text-primary text-sm font-semibold">
                      {item?.attributes?.Name}
                    </label>
                  </Link>
                )
            )
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[130px] w-[150px] bg-slate-200 m-2 rounded-lg animate-pulse "
              ></div>
            ))}
      </div>
    </div>
  );
};

export default CategorySearch;
