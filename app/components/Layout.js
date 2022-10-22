import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Navbar />
      <div className='mt-5'>{children}</div>
    </div>
  );
};

export default Layout;
