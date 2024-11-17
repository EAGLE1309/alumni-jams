import Navbar from "@/components/navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
