import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneCallback } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="mt-32">
      <div className=" md:flex justify-between items-center bg-green-950 p-16">
        <div className="text-white space-y-4">
          <h2 className="text-3xl font-bold">Contact With Us</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <div className=" text-white  flex items-center gap-3">
            <MdOutlinePhoneCallback /> +88 01750141414
          </div>
          <div className=" text-white flex items-center gap-3">
            <CiLocationOn />
            Dhanmondi, Dhaka, Bangladesh
          </div>
        </div>
        <div className=" ml-8 mt-4 md:mt-0 lg:mt-0">
          <div className=" space-x-3 space-y-4">
            <input
              className="input input-bordered  max-w-xs  "
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="input input-bordered  max-w-xs "
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="input input-bordered  max-w-xs"
              type="text"
              name="mobile"
              placeholder="Mobile Number"
            />
            <input
              className="input input-bordered  max-w-xs "
              type="text"
              name="doctor"
              placeholder="Doctor Name"
            />
            <input
              className="input input-bordered  max-w-xs"
              type="text"
              name="date"
              placeholder="Date"
            />
            <input
              className="input input-bordered  max-w-xs"
              type="text"
              name="time"
              placeholder="Time"
            />
            <button className="btn bg-orange-400 w-full mt-4">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
