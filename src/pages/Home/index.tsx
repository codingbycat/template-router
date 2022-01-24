import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="">
      HomePage
      <Outlet />
    </div>
  );
};

export default Home;
