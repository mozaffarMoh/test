import Image from "next/image";
import "./Services.css";
import services1Image from "../../assets/images/services/services1.png";
import services2Image from "../../assets/images/services/services2.png";
import services3Image from "../../assets/images/services/services3.png";

const Services = () => {
  return (
    <div className="services flexCenterColumn" id="services">
      <div className="services-title">
        <h1>Services</h1>
        <div className="title-description">
          <p>
            With lots of unique blocks, you can easily build a page easily
            without any coding.
          </p>
        </div>
      </div>
      <div className="services-details flexCenter">
        <div className="services-image">
          <div className="images-container flexStartItemsStart">
            <Image
              src={services1Image}
              alt="servicesImage"
              className="services1Image"
            />
            <Image
              src={services2Image}
              alt="servicesImage"
              className="services2Image"
            />
            <Image
              src={services3Image}
              alt="servicesImage"
              className="services3Image"
            />
          </div>
        </div>
        <div className="services-text flexStartColumn">
          <h1>Coworking Spaces</h1>
          <p>
            Increase Your Productivity in Inspirational Workspaces. Our
            coworking spaces are more than just workplaces - they are hubs for
            innovation and collaboration. Choose from diverse options, including
            open workspaces, private offices, and fully-equipped meeting rooms.
            Immerse yourself in a dynamic environment designed to stimulate
            creativity and enhance productivity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
