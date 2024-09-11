import React, { ChangeEvent, useState } from "react";
import { Controller, useController } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Stack,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { FaTrash } from "react-icons/fa6";

const FilesFieldDynamic = ({
  slug = "",
  type = "",
  label = "",
  control,
  className = "",
  startDecorator,
  endDecorator,
}: any) => {
  const handleDelete = (field: any, indexToDelete: number) => {
    const filteredArray = field.value.filter(
      (_: any, i: number) => i !== indexToDelete
    );
    field.onChange(filteredArray);
  };

  return (
    <Controller
      name={slug}
      control={control}
      render={({ field, fieldState }) => {
        field.value = field.value || [];
        return (
          <FormControl
            error={!!fieldState.error}
            className="input-form-control"
            sx={{ marginTop: "0.5rem" }}
            style={{ width: "100%" }}
          >
            <FormLabel sx={{ marginBottom: "0.4rem" }}>{label}</FormLabel>
            <input
              type="file"
              accept="application/pdf,application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/*"
              onChange={(e: any) => {
                const selectedFiles = e.target.files;
                field.onChange([...field.value, ...selectedFiles]);
              }}
              multiple
              style={{ display: "none" }}
              id={`${slug}-input`}
            />
            <label htmlFor={`${slug}-input`}>
              <Button
                fullWidth
                variant="outlined"
                component="span"
                sx={{
                  borderRadius: "50px",
                  color: "rgba(0, 0, 0, 0.49)",
                  minHeight: "3.375rem",
                  borderStyle: "dashed",
                }}
              >
                Upload Files
              </Button>
            </label>
            <Stack direction={"row"}>
              {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </Stack>
            <List>
              {field.value.map((file: File, index: number) => {
                const threeDots = file?.name?.length > 10 ? "..." : "";
                let shortFileName = file?.name.slice(0, 15) + threeDots;
                return (
                  <ListItem key={index} dir="ltr">
                    <ListItemText
                      primary={shortFileName}
                      sx={{ fontSize: "0.8rem" }}
                    />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(field, index)}
                    >
                      <FaTrash />
                    </IconButton>
                  </ListItem>
                );
              })}
            </List>
          </FormControl>
        );
      }}
    ></Controller>
  );
};

export default FilesFieldDynamic;
