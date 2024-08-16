"use client";

import DoctorList from "@/app/_components/DoctorList";
import { getDoctorByCategory } from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";

const ShowDoctorByCategory = ({ params }) => {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    doctorsByCategory();
  }, []);
  const doctorsByCategory = () => {
    getDoctorByCategory(params.cname).then((res) => {
      setDoctorList(res.data.data);
    });
  };
  return (
    <div>
      <DoctorList
        heading={decodeURIComponent(params.cname)}
        doctorList={doctorList}
      />
    </div>
  );
};

export default ShowDoctorByCategory;
