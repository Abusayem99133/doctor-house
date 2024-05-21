import { CiClock2, CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneCallback } from "react-icons/md";

const Status = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
      <div className="bg-green-950 flex items-center  rounded-xl justify-around">
        <div className="text-3xl text-white font-bold">
          <CiClock2 />
        </div>
        <div className="text-white">
          <h4 className="font-bold text-2xl">Opening Hours</h4>
          <p>open 9.00am to 5.00pm</p>
          <span>Everyday</span>
        </div>
      </div>
      <div className="bg-orange-400 flex items-center rounded-xl p-6 justify-around">
        <div className="text-3xl text-white font-bold">
          <CiLocationOn />
        </div>
        <div className="text-white">
          <h4 className="font-bold text-2xl">Our Locations</h4>
          <p>Dhanmondi 17, Dhaka </p>
          <span>-1200,Bangladesh</span>
        </div>
      </div>
      <div className="bg-green-950 flex items-center rounded-xl p-6 justify-around">
        <div className="text-3xl text-white font-bold">
          <MdOutlinePhoneCallback />
        </div>
        <div className="text-white">
          <h4>Opening Hours</h4>
          <p>open 9.00am to 5.00pm</p>
          <span>Everyday</span>
        </div>
      </div>
    </div>
  );
};

export default Status;
