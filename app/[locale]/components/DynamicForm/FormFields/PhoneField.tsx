import PhoneInput from "react-phone-input-2";
import { Stack, TextField } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import { Controller } from "react-hook-form";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PhoneField = ({
  slug = "",
  type = "",
  label = "",
  control,
  className = "",
  startDecorator,
  endDecorator,
}: any) => {
  const pathname = usePathname();
  let isArabic = pathname.startsWith("/ar");
  const [isFocused, setIsFocused] = useState(false);
  const formatPhoneNumber = (phone: string) => {
    if (!phone) {
      return "+962";
    } else {
      return phone.startsWith("+") ? phone : `+${phone}`;
    }
  };
  return (
    <Controller
      name={slug}
      control={control}
      render={({ field, fieldState }) => {
        const { value, onChange } = field;

        const [countryCode, setCountryCode] = useState("+962");

        const isCountryCodeOnly = (phone: string) => {
          return phone === countryCode;
        };

        const handleChange = (phone: any, countryData: any) => {
          onChange(formatPhoneNumber(phone));
          setCountryCode(`+${countryData.dialCode}`); // Update country code when the user changes country
        };

        return (
          <Stack width={"100%"}>
            <PhoneInput
              country={"jo"}
              onlyCountries={["jo", "us", "gb", "ae"]} // Example of multiple countries
              value={formatPhoneNumber(value || "")}
              onChange={(phone: any, countryData: any) =>
                handleChange(phone, countryData)
              }
              inputStyle={{ display: "none" }}
              containerStyle={{
                width: "fit-content",
                height: "fit-content",
                top: 27,
                border: "none",
                zIndex: 2,
              }}
              dropdownStyle={{
                right: isArabic ? 0 : "auto",
                left: !isArabic ? 0 : "auto",
              }}
              buttonStyle={{
                direction: "ltr",
                border: "none",
                background: "white",
                borderRadius: "50px",
                paddingLeft: "10px",
                marginRight: 10,
              }}
              searchStyle={{
                borderRadius: "50px",
              }}
            />
            <TextField
              value={formatPhoneNumber(value || "")}
              onChange={(e) => onChange(e.target.value)}
              label={label}
              variant="outlined"
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : ""}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              InputLabelProps={{
                shrink:
                  Boolean(field.value && !isCountryCodeOnly(field.value)) ||
                  isFocused,
                sx: {
                  right: isArabic ? 30 : "",
                  left: isArabic ? "auto" : "",
                  transformOrigin: isArabic ? "top right" : "",
                  textAlign: isArabic ? "right" : "left",
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "50px",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                },
                "& .MuiInputLabel-root": {
                  marginX: "90px", // Add margin to the left of the label
                },
                "& .MuiFormHelperText-root": {
                  textAlign: isArabic ? "right" : "left",
                },
                "& .MuiOutlinedInput-notchedOutline legend": {
                  textAlign: isArabic ? "right" : "left",
                },
                "& .MuiFormLabel-root": {
                  marginRight: startDecorator && isArabic ? 4.5 : "",
                  marginLeft: startDecorator && !isArabic ? 4.5 : "",
                  "&.MuiInputLabel-shrink": {
                    color: "initial",
                    marginRight: 0,
                    marginLeft: 0,
                  },
                },
              }}
            />
          </Stack>
        );
      }}
    ></Controller>
  );
};

export default PhoneField;
