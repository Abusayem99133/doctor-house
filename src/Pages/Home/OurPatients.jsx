import { FaQuoteLeft } from "react-icons/fa";
import imgLogo from "../../assets/image/images.png";
import imgLogo2 from "../../assets/image/images (1).png";
const OurPatients = () => {
  return (
    <div className="mt-32">
      <h2 className="text-center font-bold text-3xl">
        What Our patients Says{" "}
      </h2>
      <p className="text-center my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nobis
        similique cumque.
      </p>
      <div className="flex gap-4 mt-12">
        <div className="border-2 p-6 rounded-xl">
          <div className="flex gap-4 ">
            <img className="rounded-full w-12" src={imgLogo} alt="" />
            <div>
              <h4>Joe Doe</h4>
              <p>Businessman</p>
            </div>
            <div className="text-orange-200">
              <FaQuoteLeft />
              <FaQuoteLeft />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            explicabo, accusantium necessitatibus nobis dolores eligendi culpa
            illum perspiciatis pariatur quod.
          </p>
        </div>
        <div className="border-2 p-6 rounded-xl">
          <div className="flex gap-4 ">
            <img className="rounded-full  w-12" src={imgLogo2} alt="" />
            <div>
              <h4>Joe Doe</h4>
              <p>Businessman</p>
            </div>
            <div className="text-orange-200">
              <FaQuoteLeft />
              <FaQuoteLeft />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            explicabo, accusantium necessitatibus nobis dolores eligendi culpa
            illum perspiciatis pariatur quod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPatients;
