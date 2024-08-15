"use client";

import { useEffect, useState } from "react";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import { getDoctorList } from "./_utils/GlobalApi";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);
  const getDoctors = () => {
    getDoctorList().then((res) => {
      console.log(res);
      setDoctorList(res?.data?.data);
    });
  };
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />
    </div>
  );
}
