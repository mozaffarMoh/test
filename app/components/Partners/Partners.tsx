import "./Partners.css";
import partnersImage from "../../assets/images/services/partners.png";
import Image from "next/image";
const Partners = () => {
  const details = [
    {
      title: "Agreement between xyz and ourwebsite",
      image: partnersImage,
    },
    {
      title: "Agreement between xyz and ourwebsite",
      image: partnersImage,
    },
    {
      title: "Agreement between xyz and ourwebsite",
      image: partnersImage,
    },
  ];
  return (
    <div className="partners-container" id="partners">
      <div className="partners flexCenterColumn">
        <div className="partners-title">
          <h1>Partners</h1>
          <div className="title-description">
            <p>
              With lots of unique blocks, you can easily build a page easily
              without any coding.
            </p>
          </div>
        </div>
        <div className="partners-details-items flexCenter">
          {details.map((item: any) => {
            return (
              <div className="partners-details-item flexStartColumnItemsCenter">
                <Image src={item.image} alt="partnersImage" />
                <hr  style={{width : '50%'}}/>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
