import "./ServicesDetails.css";
import Image from "next/image";
import services1Image from "../../assets/images/services/services1.png";
import services2Image from "../../assets/images/services/services2.png";
import services3Image from "../../assets/images/services/services3.png";

const ServicesDetails = ({ count }: any) => {
  const isCountOdd = count == 1 || count == 3;
  const isCountEven = count == 2 || count == 4;
  const checkCount = (value: string) => {
    if (isCountOdd) {
      if (value == "background") return "#3F485E";
      if (count == 1) {
        if (value == "margin") return "0px 0px 0px 50px";
        if (value == "border") return "0px 0px 0px 100px";
      }
      if (count == 3) {
        if (value == "margin") return "0px 50px 0px 0px";
        if (value == "border") return "0px 100px 0px 0px";
      }
    }
    if (isCountEven) {
      if (value == "order") return 1;
      if (value == "background") return "white";
    }
  };
  return (
    <div
      className="services-details flexCenter"
      style={{
        borderRadius: checkCount("border"),
        margin: checkCount("margin"),
        background: checkCount("background"),
      }}
    >
      <div className="services-image" style={{ order: checkCount("order") }}>
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
        <h1 className={`${isCountOdd ? "title-red" : "title-black"}`}>
          {isCountOdd ? "Coworking Spaces" : "Mentoring and Training"}
        </h1>
        <p className={`${isCountOdd ? "title-white" : "title-black"}`}>
          Increase Your Productivity in Inspirational Workspaces. Our coworking
          spaces are more than just workplaces - they are hubs for innovation
          and collaboration. Choose from diverse options, including open
          workspaces, private offices, and fully-equipped meeting rooms. Immerse
          yourself in a dynamic environment designed to stimulate creativity and
          enhance productivity
        </p>
      </div>
    </div>
  );
};

export default ServicesDetails;
