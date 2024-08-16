import CategoryList from "./_components/CategoryList";

const layout = ({ children }) => {
  return (
    <div className="flex gap-[5%]">
      <div className="w-[20%]">
        <CategoryList />
      </div>
      <div className="w-[75%]">{children}</div>
    </div>
  );
};

export default layout;
