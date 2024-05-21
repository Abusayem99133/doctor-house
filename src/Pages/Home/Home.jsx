import Banner from "./Banner";
import ContactUs from "./ContactUs";
import ExpertDoctors from "./ExpertDoctors";
import OurPatients from "./OurPatients";
import OurService from "./OurService";

const Home = () => {
  return (
    <div>
      <h2 className="text-4xl text-orange-500">This is Home</h2>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <OurService></OurService>
      </div>
      <div>
        <OurPatients></OurPatients>
      </div>
      <div>
        <ExpertDoctors></ExpertDoctors>
      </div>
      <div>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
