import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Services = () => {
  return (
    <Fragment>
      <div>
        <div className="text-6xl flex justify-center items-center py-10">
          <h1>Our Web3 Services</h1>
        </div>
        <div className="px-20 text-2xl">
          <Link to="advisory">
            <div>Advisory & Consultancy</div>
          </Link>
          <div>Web Development</div>
          <div>NFT Art Designing</div>
          <div>Collaborations Management</div>
          <div>Community Management</div>
          <div>Moderation</div>
          <div>Marketing</div>
          <div>Copywriting</div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Services;
