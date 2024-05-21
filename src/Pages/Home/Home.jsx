import Banner from "./Banner";
import ContactUs from "./ContactUs";
import ExpertDoctors from "./ExpertDoctors";
import OurPatients from "./OurPatients";
import OurService from "./OurService";
import Status from "./Status";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <OurService></OurService>
      </div>
      <div>
        <Status></Status>
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
