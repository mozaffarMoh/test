import "./About.css";
import aboutImage from "../../assets/images/About/aboutImage.png";
import icon1 from "../../assets/images/About/icon1.png";
import icon2 from "../../assets/images/About/icon2.png";
import icon3 from "../../assets/images/About/icon3.png";
import icon4 from "../../assets/images/About/icon4.png";
import Image from "next/image";

const About = () => {
  const details = [
    {
      title: "Fostering Collaboration",
      description:
        "Encouraging synergy among different entities in the technology ecosystem, includingstartups,freelancers,compaes, academia, and government",
      image: icon1,
    },
    {
      title: "Promoting Innovation",
      description:
        "By providing support and guidance/training, the center aims to cultivate an environment where new ideas and innovative solutions can thrive",
      image: icon2,
    },
    {
      title: " Mission Statement",
      description:
        "A technological revolution in East amman through fostering innovation, collaboration, education, and community growth",
      image: icon3,
    },
    {
      title: "Vision Statement",
      description:
        "Establishing a leading technological hub as a catalyst for technological advancement and social development in East amman",
      image: icon4,
    },
  ];
  return (
    <div className="about flexCenterColumn" id="about">
      <div className="about-title">
        <h1>About Us</h1>
        <div className="title-description">
          <p>
            With lots of unique blocks, you can easily build a page easily
            without any coding.
          </p>
        </div>
      </div>
      <div className="about-details flexCenter">
        <div className="about-details-text">
          <h1>OurWebsite</h1>
          <h3>We offer more than just a workspace</h3>
          <div className="details-items flexStart">
            {details.map((item: any, i: number) => {
              return (
                <div key={i} className="details-item flexCenterItemsStart">
                  <div className="details-item-image flexStartColumn">
                    <Image src={item.image} alt="cardImage" />
                  </div>
                  <div className="details-item-text ">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="about-details-image flexEndColumn">
          <Image src={aboutImage} alt="aboutLogo" />
        </div>
      </div>
    </div>
  );
};

export default About;
