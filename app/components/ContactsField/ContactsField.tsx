import "./ContactsField.css";
import { TextField } from "@mui/material";

const ContactsField = ({
  width,
  height,
  title,
  placeholder,
  isOptional,
}: any) => {
  return (
    <div className={`contact-field-component`}>
      <h5>{title}</h5>
      {title == "Message" ? (
        <textarea
          placeholder={placeholder}
          style={{ width: width, height: height }}
        />
      ) : (
        <input
          placeholder={placeholder}
          style={{
            width: width,
            height: height,
          }}
        />
      )}
      {isOptional && <p className="contact-optional">optional</p>}
    </div>
  );
};

export default ContactsField;
