"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  console.log(user);
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact us",
      path: "/contact",
    },
  ];
  return (
    <div className="border-b-2 py-4">
      <div className="w-[85%] mx-auto">
        <div className="flex items-center gap-10 justify-between">
          <h1 className="text-2xl font-extrabold ">
            <span className="text-primary">Doctor</span>Appointment
          </h1>
          <ul className="md:flex gap-6 hidden">
            {menu.map((item, index) => (
              <Link key={index} href={item.path}>
                <li className="hover:text-primary hover:cursor-pointer hover:scale-105 transition-all ease-in-out">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

          {user ? (
            <Popover>
              <PopoverTrigger>
                <Image
                  src={user?.picture}
                  alt="user"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent className="w-44">
                <ul className="flex flex-col gap-2">
                  <li className="cursor-pointer hover:bg-blue-50">Profile</li>
                  <li className="cursor-pointer hover:bg-blue-50">
                    My Booking
                  </li>
                  <li className="cursor-pointer hover:bg-blue-50">
                    <LogoutLink>Logout</LogoutLink>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          ) : (
            <LoginLink>
              <Button>Get Started</Button>
            </LoginLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
