import "./Hero.css";
import finalLogo from "../../assets/images/Hero/final.png";
import card1Image from "../../assets/images/Hero/card1.png";
import card2Image from "../../assets/images/Hero/card2.png";
import card3Image from "../../assets/images/Hero/card3.png";
import card4Image from "../../assets/images/Hero/card4.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";

const Hero = () => {
  const cards = [
    {
      title: "Coworking Spaces",
      description:
        "Inspiring Work Environments Designed for Technological Innovation",
      image: card1Image,
    },
    {
      title: "Mentoring and Training",
      description: "Gain Insights from Industry Experts to Boost Your Success",
      image: card2Image,
    },
    {
      title: "Access to Funding and Markets",
      description: "Unlock Financing Opportunities and Expand Your Impact",
      image: card3Image,
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with like-minded technology enthusiasts and industry leaders",
      image: card4Image,
    },
  ];

  return (
    <div className="hero" id="home">
      <div className="hero-start">
        <div className="hero-start-text">
          <h1>
            Welcome to The <span>OurWebsite</span> Your Platform for Launching
            Towards Technological Success!
          </h1>
        </div>
      </div>
      <div className="hero-cards flexCenterColumn">
        <div className="hero-cards-text">
          <p>
            At The OurWebsite, we are dedicated to helping you excel in the
            world of technology. Our services are specifically designed to meet
            your needs
          </p>
        </div>
        <div className="hero-cards-items flexCenter">
          {cards.map((item: any, i: number) => {
            return (
              <div key={i} className="hero-cards-item flexCenterColumn">
                <Image src={item.image} alt="cardImage" />
                <div className="hero-cards-item-text flexEndColumn">
                  <div className="title">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>{" "}
                  </div>
                  <div className="learn-more flexCenter">
                    <p>Learn more</p>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hero-final flexCenter">
        <div className="hero-final-container flexCenter">
          <div className="hero-final-image flexCenter">
            <Image src={finalLogo} alt="finalLogo" />
            <IoPlayCircleOutline size={60} color="white" cursor={"pointer"} />
          </div>
          <div className="hero-final-text flexStartColumn">
            <h4>
              <span>OurWebsite</span> Your Gateway to Technological Excellence
              Get a quick glimpse into thedynamic environment at The OurWebsite
              and the benefits that await you
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
