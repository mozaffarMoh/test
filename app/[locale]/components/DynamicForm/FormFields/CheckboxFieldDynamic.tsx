import { Controller, useController } from "react-hook-form";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  TextField,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";

function CheckboxFieldDynamic({
  slug = "",
  label = "",
  control,
  className = "",
  startDecorator,
  endDecorator,
}: any) {
  const pathname = usePathname();
  let isArabic = pathname.startsWith("/ar");

  return (
    <Controller
      name={slug}
      control={control}
      defaultValue={false}
      render={({ field, fieldState }) => {
        return (
          <FormControl
            error={!!fieldState.error}
            className="input-form-control"
            sx={{ display: "flex", alignItems: "flex-start" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                  checked={field.value}
                  sx={{
                    color: "CaptionText",
                    "&.Mui-checked": {
                      color: "orange",
                    },
                    marginLeft: !isArabic ? "10px" : "",
                  }}
                />
              }
              label={<span style={{ fontSize: "15px" }}>{label}</span>}
              labelPlacement="end"
            />
            {fieldState.error && (
              <FormHelperText sx={{ margin: isArabic ? "0px 30px" : "" }}>
                {fieldState.error.message}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    ></Controller>
  );
}

export default CheckboxFieldDynamic;
