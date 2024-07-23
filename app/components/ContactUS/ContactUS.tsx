import "./ContactUS.css";
import Image from "next/image";
import { Box, Button, TextField } from "@mui/material";
import locationImage from "../../assets/images/contact/location.png";
import phoneImage from "../../assets/images/contact/phone.png";
import alarmImage from "../../assets/images/contact/alarm-clock.png";
import editImage from "../../assets/images/contact/edit.png";
import shareImage from "../../assets/images/contact/share.png";
import socialImage from "../../assets/images/contact/social.png";
import mapsImage from "../../assets/images/contact/maps.png";
import ContactsField from "../ContactsField/ContactsField";

const ContactUS = () => {
  const details = [
    {
      title: "Find Us",
      icon: locationImage,
      dataType: "text",
      data: "2301 AMMAN . JORDAN",
    },
    {
      title: "Phone",
      icon: phoneImage,
      dataType: "array",
      data: ["+ (06) 111-1111", "+ (06) 111-1111"],
    },
    {
      title: "Working Hours",
      icon: alarmImage,
      dataType: "array",
      data: ["Mon-Fri: 8 AM - 5 PM", "Sat-Sun: 8 AM - 2 PM"],
    },
    {
      title: "Write to Us",
      icon: editImage,
      dataType: "array",
      data: ["info@ourwebsite.com", "courses@ourwebsite.com"],
    },
    {
      title: "Follow Us",
      icon: shareImage,
      dataType: "image",
      data: socialImage,
    },
  ];
  return (
    <div className="contact-container" id="contact-us">
      <div className="contact flexCenterColumn">
        <div className="contact-title">
          <h1>ContactUS</h1>
          <div className="title-description">
            <p>
              With lots of unique blocks, you can easily build a page easily
              without any coding.
            </p>
          </div>
          <h2>Get in touch today!</h2>
        </div>
        <div className="contact-actions flexCenter">
          <div className="contact-details flexStartColumn">
            <h1>Contact Details</h1>
            <div className="contact-details-items flexStart">
              {details.map((item: any, i: number) => {
                return (
                  <div key={i} className="contact-details-item flexStart">
                    <div className="icon-section flexStartColumn">
                      <Image src={item.icon} alt="contactDetailsIcon" />
                    </div>
                    <div className="details-section flexStartColumn">
                      <h5>{item.title}</h5>
                      {item.dataType == "image" && (
                        <Image src={item.data} alt="contactData" />
                      )}
                      {item.dataType == "array" && (
                        <div className="data-array">
                          {item.data.map((text: any, i: number) => {
                            return <p key={i}>{text}</p>;
                          })}{" "}
                        </div>
                      )}
                      {item.dataType == "text" && <p>{item.data}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="contact-fields flexStartColumn">
            <h1>Have A Question ?</h1>
            <ContactsField
              title={"Types"}
              width={"100%"}
              height={"50px"}
              placeholder={"Complain"}
            />
            <Box width={"100%"} className="flexBetween">
              <ContactsField
                title={"Name"}
                width={"100%"}
                height={"50px"}
                placeholder={"Name"}
                isOptional={true}
              />
              <ContactsField
                title={"Email"}
                width={"100%"}
                height={"50px"}
                placeholder={"Email"}
              />
            </Box>
            <ContactsField
              title={"Message"}
              width={"100%"}
              height={"170px"}
              placeholder={"Content"}
            />
            <Button variant="contained">SEND</Button>
          </div>
        </div>
        <div className="contact-map flexCenter">
          <Image src={mapsImage} alt="mapImage" />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
