import doctor from "../../assets/image/pexels-cottonbro-5722162.jpg";
import gastrology from "../../assets/image/images.jpeg";
const OurService = () => {
  return (
    <div>
      <div className=" md:flex justify-between mt-32 gap-16">
        <div>
          <img className="rounded-2xl" src={doctor} alt="" />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className=" mt-4 ">
            <button className="btn bg-orange-500">Cavity Protection</button>
            <button className="btn bg-orange-500">Cosmetic Dentist </button>
            <br />
            <button className="btn bg-orange-500">Oral Surgery</button>
          </div>
          <img src={gastrology} alt="" />
          <h2 className="text-3xl mt-4 mb-4 font-bold">
            Electro Gastrology Therapy
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error{" "}
          </p>
          <p className="mt-4 mb-4">
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <button className="btn btn-outline border-orange-400 text-orange-400">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurService;
