import Image from "next/image";
import mailIcon from "../assets/mail.svg";
import twitterIcon from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";
import linkedinIcon from "../assets/linkedin.svg";
import youtubeIcon from "../assets/youtube.svg";
import bgImage from "../assets/footer-design.png";
import copyright from "../assets/copyright.svg";
import location from "../assets/location.svg";

const Footer = () => {
  return (
    <footer className="bg-[#D3E9FD] text-[#333] py-12 relative flex-shrink-0 mt-[49px]">
      {/* Top Right Background Image */}
      <div className="absolute top-0 right-0 w-1/4 h-50 hidden lg:block">
        <Image src={bgImage} alt="Background Decorative" layout="fill" objectFit="cover" />
      </div>

      {/* Desktop View (Four-Column Layout) */}
      <div className="container mx-auto flex flex-col lg:items-start md:items-center lg:flex-row justify-between gap-10 px-6 lg:px-[80px] hidden md:flex">
        {/* Left Column (Logo and Links) */}
        <div className="mb-8 lg:mb-20">
          <div className="text-[26px] font-semibold leading-[36px] py-0 lg:text-left" style={{ fontFamily: 'DM Sans' }}>
            <span className="text-[#133682]">Health</span>
            <span className="text-[#FD2621]">Mudraa</span>
          </div>
        </div>

        <div className=" mt-[20px]">
          <div className="flex flex-col items-center gap-2 ">
            <a href="#" className="text-[#005EFF] underline text-[16px] font-normal leading-[24px] tracking-[0.5px]" style={{ fontFamily: 'DM Sans' }}>Top 10 Hospitals</a>
            <a href="#" className="text-[#005EFF] underline text-[16px] font-normal leading-[24px] tracking-[0.5px]" style={{ fontFamily: 'DM Sans' }}>Top 10 Doctors</a>
            <a href="#" className="text-[#242424] text-[16px] font-normal leading-[24px] tracking-[0.5px]" style={{ fontFamily: 'DM Sans' }}>Most chosen Treatment</a>
          </div>
        </div>

        {/* Middle Column (Services Links) */}
        <div className="flex flex-col gap-2 text-center lg:text-left text-[#242424] text-[14px] font-normal leading-[21px] tracking-[0.5px]" style={{ fontFamily: 'DM Sans' }}>
          <h3 className="text-xl font-bold text-[#333] text-[23px]">Services</h3>
          <a href="/" className="hover:underline">Home</a>
          <a href="/doctors" className="hover:underline">Find A Doctor</a>
          <a href="/plans" className="hover:underline">Plans</a>
          <a href="/hospitals" className="hover:underline">Add Your Hospital/Clinic</a>
        </div>

        {/* Right Column (Links) */}
        <div className="flex flex-col gap-2 text-center lg:text-left text-[#242424] text-[14px] font-normal leading-[21px] tracking-[0.5px] mt-6 lg:mt-0" style={{ fontFamily: 'DM Sans' }}>
          <h3 className="text-xl font-bold text-[#333] text-[23px]">Link</h3>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/PrivacyPolicy" className="hover:underline">Privacy Policy</a>
          <a href="/Career" className="hover:underline">Career</a>
          <a href="/refundpolicy" className="hover:underline">Refund Policy</a>
          <a href="/termofuse" className="hover:underline">Terms of use</a>
        </div>
      </div>

      {/* Mobile and Small Tablet View */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6 md:hidden">
        <div className="text-2xl font-bold text-center mb-6">
          <span className="text-[#133682]">Health</span>
          <span className="text-[#FD2621]">Mudraa</span>
        </div>

        {/* Services and Legal side by side */}
        <div className="flex flex-wrap justify-between w-full gap-6 ">
          {/* Services Column */}
          <div className="flex flex-col items-start ml-14 gap-3">
            <h3 className="text-xl font-semibold text-[#333] text-[28px]">Services</h3>
            <a href="/plans" className="text-[#005EFF] underline">Our Plans</a>
            <a href="/upcomingfeatures" className="text-[#005EFF] underline">Upcoming Features</a>
            <a href="/doctor/login" className="text-[#005EFF] underline">Doctor Login</a>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col items-start mr-14 gap-3">
            <h3 className="text-xl font-semibold text-[#333] text-[28px]">Legal</h3>
            <a href="/termsandconditions" className="text-[#333] hover:underline">Terms And Conditions</a>
            <a href="/privacypolicy" className="text-[#333] hover:underline">Privacy Policy</a>
            <a href="/refundpolicy" className="text-[#333] hover:underline">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* Contact Us Section (Visible on All Screens) */}
      <div className="mt-16 flex flex-col items-center text-center" style={{ fontFamily: 'DM Sans' }}>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p className="flex flex-col md:flex-row items-center text-base mb-4">
          <Image src={location} alt="location" width={21} height={21} />
          <span className="text-[14px] font-normal leading-[21px] tracking-[0.5px] md:ml-2">
            #2594/1, 3rd Floor, 15th Cross, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
          </span>
          <a href="https://www.google.com/search?q=health+mudraa+pvt+ltd&rlz=1C1ONGR_en-GBIN1105IN1106&oq=health+mudraa+pvt+ltd&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQLhivARjHARiABDIGCAIQIxgnMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIEMgoIBRAAGKIEGIkFMgoIBhAAGIAEGKIEMgYIBxBFGD3SAQkxNzg1OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8 " target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">
            Google link
          </a>
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-24 md:gap-28 lg:gap-36 xl:gap-44 mb-6 py-6">

          {/* Display 6th icon only on medium screens and larger */}
          <a href="healthmudraa@gmail.com" className="hidden md:inline text-[#133682]">
            <Image src={mailIcon} alt="mailIcon" width={24} height={24} />
          </a>


          <a href="https://x.com/i/flow/login?redirect_after_login=%2FHealthMudraa" className="text-[#133682]">
            <Image src={twitterIcon} alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/healthmudraa/" className="text-[#133682]">
            <Image src={instagram} alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/healthmudraa/" className="text-[#133682]">
            <Image src={facebookIcon} alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/company/healthmudraa/posts/?feedView=all" className="text-[#133682]">
            <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://www.youtube.com/@healthmudraa" className="text-[#133682]">
            <Image src={youtubeIcon} alt="YouTube" width={24} height={24} />
          </a>
        </div>


        {/* Copyright Section */}
        <p className="flex items-center gap-2 text-[18px] text-[#0A2540]/50 font-normal leading-normal border-t border-gray-300 ">
          <Image src={copyright} alt="Copyright" width={24} height={24} />
          <span style={{ fontFamily: 'Montserrat' }}>HealthMudraa, All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
