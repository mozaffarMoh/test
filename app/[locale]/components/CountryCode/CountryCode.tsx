import PhoneInput from "react-phone-input-2";
import { Stack, TextField } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import "./CountryCode.css";

interface CountryCodeProps {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}

const formatPhoneNumber = (phone: string) => {
  if (!phone) {
    return "+962";
  } else {
    return phone.startsWith("+") ? phone : `+${phone}`;
  }
};


const CountryCode = ({ phone, setPhone }: CountryCodeProps) => {
  return (
    <Stack width={300}>
      <PhoneInput
        country={"jo"}
        value={formatPhoneNumber(phone)}
        onChange={(phone) => setPhone(formatPhoneNumber(phone))}
        inputStyle={{ display: "none" }} // Hide the original input field
        // You can use custom styling for various internal elements
        containerStyle={{
          width: "fit-content",
          height: "fit-content",
          top: 27,
          border: "none",
          zIndex: 2,
        }}
        buttonStyle={{
          border: "none",
          background: "white",
          borderRadius: "50px",
          paddingLeft: "10px", // Example for padding inside the button
        }}
        searchStyle={{
          borderRadius: "50px",
        }}
      />
      <TextField
        value={formatPhoneNumber(phone)}
        onChange={(e) => setPhone(e.target.value)}
        label="Phone Number"
        variant="outlined"
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "50px",
            paddingLeft: "35px",
            paddingRight: "0.8rem", // Ensure the text does not hit the border
          },
          "& .MuiInputLabel-root": {
            marginLeft: "35px", // Add margin to the left of the label
          },
          "& .MuiInputLabel-shrink": {
            marginLeft: "0px", // Margin for the floating label
          },
        }}
      />
    </Stack>
  );
};

export default CountryCode;
