import docLogo from "../assets/image/images__2_-removebg-preview.png";
const Footer = () => {
  return (
    <div>
      <footer className="p-6 bg-slate-200 ">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="space-y-2">
            <div className="flex item-center">
              <img className="w-20" src={docLogo} alt="" />
              <h2 className="text-4xl ">
                <span className="text-orange-400 mr-1">Doc</span>House
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              delectus error quisquam ipsam, maiores fuga
            </p>

            <button className="btn btn-outline border-orange-600 text-orange-500">
              Appointment
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold">Quick Links</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <a rel="noopener noreferrer" href="#">
                About
              </a>
              <a rel="noopener noreferrer" href="#">
                Service
              </a>
              <a rel="noopener noreferrer" href="#">
                Doctors
              </a>
              <a rel="noopener noreferrer" href="#">
                Departments
              </a>
              <a rel="noopener noreferrer" href="#">
                Online Payment
              </a>
              <a rel="noopener noreferrer" href="#">
                Contact Us
              </a>
              <a rel="noopener noreferrer" href="#">
                My Account
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold">Doc House Services</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <a rel="noopener noreferrer" href="#">
                Pediatric Clinic
              </a>
              <a rel="noopener noreferrer" href="#">
                Diagnosis Clinic
              </a>
              <a rel="noopener noreferrer" href="#">
                Cardiac Clinic
              </a>
              <a rel="noopener noreferrer" href="#">
                Laboratory Analysis
              </a>
              <a rel="noopener noreferrer" href="#">
                Gynecological Clinic
              </a>
              <a rel="noopener noreferrer" href="#">
                Personal Counseling
              </a>
              <a rel="noopener noreferrer" href="#">
                Dental Clinic
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold">Working Hours</h2>
            <div className="flex flex-col space-y-2 text-sm ">
              <a rel="noopener noreferrer" href="#">
                Monday - 10am to 7 pm
              </a>
              <a rel="noopener noreferrer" href="#">
                Tuesday - 10 an to 7 pm
              </a>
              <a rel="noopener noreferrer" href="#">
                Wednesday - 10 am to 7 pm
              </a>
              <a rel="noopener noreferrer" href="#">
                Thursday - 10 am to 7 pm
              </a>
              <a rel="noopener noreferrer" href="#">
                Friday - 10 am to 7 pm
              </a>
              <a rel="noopener noreferrer" href="#">
                Saturday - 10 am to 7 pm
              </a>
              <a rel="noopener noreferrer" href="#">
                Sunday - 10 am to 7 pm
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="">
            © Copyright 2024. All Rights reserved by Doc House Ltd.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
