import img1 from "../../assets/image/pexels-shvetsa-3902881.jpg";
import img2 from "../../assets/image/Dr.Rizvana.jpg";
import img3 from "../../assets/image/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg";

import { FaStar } from "react-icons/fa";
import { CiDollar, CiLocationOn, CiShop } from "react-icons/ci";

const ExpertDoctors = () => {
  return (
    <div className="mt-12 ">
      <h2 className="text-3xl text-center font-bold ">Our Expert Doctors</h2>
      <p className="text-center my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, vitae.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title">Karyen Anderson</h2>
            <span>BTP-Senior Physiotherapist</span>

            <div className="text-yellow-400 text-2xl flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <hr />
            <div>
              <p className="flex items-center gap-3">
                <CiLocationOn />
                Dhanmondi,Dhaka,Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <CiShop />
                Available On Mon,22 December
              </p>
            </div>
            <p className="flex items-center gap-3">
              <CiDollar />
              $15
            </p>
            <div className=" mx-auto">
              <button className="btn btn-outline border border-orange-400 text-orange-400 border-b-4">
                View Profile
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title">Karyen Anderson</h2>
            <span>BTP-Senior Physiotherapist</span>

            <div className="text-yellow-400 text-2xl flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <hr />
            <div>
              <p className="flex items-center gap-3">
                <CiLocationOn />
                Dhanmondi,Dhaka,Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <CiShop />
                Available On Mon,22 December
              </p>
            </div>
            <p className="flex items-center gap-3">
              <CiDollar />
              $15
            </p>
            <div className=" mx-auto">
              <button className="btn btn-outline border border-orange-400 text-orange-400 border-b-4">
                View Profile
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title">Karyen Anderson</h2>
            <span>BTP-Senior Physiotherapist</span>

            <div className="text-yellow-400 text-2xl flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <hr />
            <div>
              <p className="flex items-center gap-3">
                <CiLocationOn />
                Dhanmondi,Dhaka,Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <CiShop />
                Available On Mon,22 December
              </p>
            </div>
            <p className="flex items-center gap-3">
              <CiDollar />
              $15
            </p>
            <div className=" mx-auto">
              <button className="btn btn-outline border border-orange-400 text-orange-400 border-b-4">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDoctors;
