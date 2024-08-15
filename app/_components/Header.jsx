import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
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
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
