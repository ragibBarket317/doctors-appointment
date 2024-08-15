import Image from "next/image";

const DoctorList = ({ doctorList }) => {
  return (
    <div className="mt-5 mb-14">
      <h2 className="font-bold text-xl">Popular Doctors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-5">
        {doctorList.length > 0
          ? doctorList?.map((doctor, index) => (
              <div key={index} className="border-[1px] rounded-lg p-3">
                <Image
                  src={doctor?.attributes?.image?.data?.attributes?.url}
                  alt="doctor"
                  width={500}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-lg"
                />
                <div className="flex flex-col items-baseline mt-4 gap-2">
                  <h2 className="text-[12px] bg-blue-50 p-1 rounded-full px-2 text-primary">
                    {doctor?.attributes?.categories?.data[0]?.attributes?.Name}
                  </h2>
                  <h2 className="font-bold">{doctor?.attributes?.Name}</h2>
                  <h2 className="text-primary text-sm">
                    {doctor?.attributes?.Year_of_Experience} Years
                  </h2>
                  <h2 className="text-gray-500">
                    {doctor?.attributes?.Address}
                  </h2>

                  <h2 className="p-2 px-3 border-[1px] border-primary w-[95%] rounded-full text-center text-primary text-[14px] cursor-pointer hover:bg-primary hover:text-white">
                    Book Now
                  </h2>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default DoctorList;
