import ShowDoctorByCategory from "../_components/ShowDoctorByCategory";

const page = ({ params }) => {
  return (
    <div>
      <ShowDoctorByCategory params={params} />
    </div>
  );
};

export default page;
