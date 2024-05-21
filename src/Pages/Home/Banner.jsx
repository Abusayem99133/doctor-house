import img1 from "../../assets/image/Dr.Rizvana.jpg";
// import img2 from "../../assets/image/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD-removebg-preview.png";
import img3 from "../../assets/image/images (11).jpeg";
import banner from "../../assets/image/green-wave-abstract-background-free-vector.jpg";
const Banner = () => {
  return (
    <div className=" ">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex items-center justify-between gap-16 text-white ">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Your Best Medical <br /> Help Center
            </h1>
            <p className="mb-5 max-w-md">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-orange-400 text-white">
              All Service
            </button>
          </div>
          <div className="mr-32">
            <div className="">
              {/* <img className=" relative mt z-10" src={img2} alt="" /> */}
              <img className="left-32 relative z-10 mt-32" src={img1} alt="" />
            </div>
            <img className="absolute top-[210px] " src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
