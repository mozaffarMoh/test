import { Controller } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";
import { usePathname } from "next/navigation";

function SelectFieldDynamic({
  slug = "",
  label = "",
  control,
  className = "",
  fieldData = [],
  startDecorator,
  endDecorator,
}: any) {
  const pathname = usePathname();
  let isArabic = pathname.startsWith("/ar");
  return (
    <Controller
      name={slug}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <TextField
            style={{ width: "100%" }}
            label={label}
            select
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
            onChange={(e) => {
              field.onChange([e.target.value]);
            }}
            variant="outlined"
            className={className}
            InputLabelProps={{
              sx: {
                right: isArabic ? 25 : "",
                left: isArabic ? "auto" : "",
                transformOrigin: isArabic ? "top right" : "",
                textAlign: isArabic ? "right" : "left",
              },
            }}
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "50px",
                paddingLeft: "0.8rem",
              },
              "& .MuiFormHelperText-root": {
                textAlign: isArabic ? "right" : "left", // Align helper text to the right
              },
              "& .MuiOutlinedInput-notchedOutline legend": {
                textAlign: isArabic ? "right" : "left",
              },
              "& .MuiSvgIcon-root": {
                position: "absolute",
                right: isArabic ? "auto" : "0.5rem", // Position to the left if not Arabic
                left: isArabic ? "0.5rem" : "auto", // Position to the right if Arabic
              },
            }}
          >
            {fieldData?.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    />
  );
}

export default SelectFieldDynamic;
