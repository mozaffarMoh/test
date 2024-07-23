import ServicesDetails from "../ServicesDetails/ServicesDetails";
import "./Services.css";

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
      <ServicesDetails count={1} />
      <ServicesDetails count={2} />
      <ServicesDetails count={3} />
      <ServicesDetails count={4} />
    </div>
  );
};

export default Services;
