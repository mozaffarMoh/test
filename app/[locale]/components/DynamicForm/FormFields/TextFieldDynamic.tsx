import { Controller } from "react-hook-form";
import { InputAdornment, TextField } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OpenEyeSVG } from "@/app/[locale]/assets/icons";

function TextFieldDynamic({
  slug = "",
  type = "",
  label = "",
  control,
  className = "",
  startDecorator,
  endDecorator,
}: any) {
  const pathname = usePathname();
  let isArabic = pathname.startsWith("/ar");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const checkType = () => {
    if (type == "number") {
      return type;
    } else if (
      (slug == "password" || slug == "confirm_password") &&
      !showPassword
    ) {
      return "password";
    } else {
      return "text";
    }
  };

  const checkIconsClickable = () => {
    if (slug == "password" || slug == "confirm_password") {
      return "pointer";
    } else {
      return "";
    }
  };

  const handleShowPassword = () => {
    if (slug == "password" || slug == "confirm_password") {
      setShowPassword(!showPassword);
    }
  };
  return (
    <Controller
      name={slug}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <TextField
            fullWidth
            onChange={(e) => {
              field.onChange(e);
            }}
            InputProps={{
              startAdornment: startDecorator ? (
                <InputAdornment position="end">{startDecorator}</InputAdornment>
              ) : null,
              endAdornment: endDecorator ? (
                <InputAdornment
                  position={isArabic ? "end" : "start"}
                  sx={{ cursor: checkIconsClickable() }}
                  onClick={handleShowPassword}
                >
                  {!showPassword ? endDecorator : <OpenEyeSVG />}
                </InputAdornment>
              ) : null,
            }}
            label={label}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            variant="outlined"
            multiline={type == "textarea" ? true : false}
            rows={type == "textarea" ? 6 : 1}
            type={checkType()}
            className={className}
            InputLabelProps={{
              shrink: Boolean(field.value || isFocused),
              sx: {
                right: isArabic ? 30 : "",
                left: isArabic ? "auto" : "",
                transformOrigin: isArabic ? "top right" : "",
                textAlign: isArabic ? "right" : "left",
              },
            }}
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: type == "textarea" ? "10px" : "50px",
                paddingLeft: "0.8rem",
                paddingRight: "0.8rem",
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
        );
      }}
    />
  );
}

export default TextFieldDynamic;
