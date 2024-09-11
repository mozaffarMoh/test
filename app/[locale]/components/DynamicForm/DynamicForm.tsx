"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  FilesFieldDynamic,
  PhoneField,
  SelectFieldDynamic,
  TextFieldDynamic,
} from "./FormFields";
import { useForm } from "react-hook-form";
import { Schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import MultiSelectDynamic from "./FormFields/MultiSelectFieldDynamic";
import CheckboxFieldDynamic from "./FormFields/CheckboxFieldDynamic";
import { ClosedEyeSVG } from "../../assets/icons";
import axios from "axios";
import { formDataJSON } from "../../constant/formDataJSON";
import { useEffect } from "react";

const formArray = [
  { id: 1, slug: "name", label: "Name", type: "text", isRequired: false },
  { id: 2, slug: "age", label: "Age", type: "number", isRequired: false },
  {
    id: 3,
    slug: "email",
    label: "Email",
    type: "text",
    isRequired: false,
  },
  {
    id: 3,
    slug: "password",
    label: "Password",
    type: "text",
    endDecorator: <ClosedEyeSVG />,
    isRequired: false,
  },
  {
    id: 3,
    slug: "confirm_password",
    label: "Confirm Password",
    type: "text",
    endDecorator: <ClosedEyeSVG />,
    isRequired: false,
  },
  {
    id: 4,
    slug: "phone",
    label: "Phone Number",
    type: "phone",
    isRequired: false,
  },
  {
    id: 5,
    slug: "country",
    label: "Country",
    type: "select",
    fieldData: [
      { name: "Jordan", value: "jordan" },
      { name: "Syria", value: "syria" },
      { name: "Egypt", value: "egypt" },
    ],
    isRequired: false,
  },
  {
    id: 6,
    slug: "hobbies",
    label: "Hobbies (Multi-Select)",
    type: "multi-select",
    fieldData: [
      { name: "Football", value: "football" },
      { name: "Swimming", value: "swimming" },
      { name: "Running", value: "running" },
    ],
    isRequired: false,
  },
  {
    id: 7,
    slug: "is-interset",
    label: "Is Interset ?",
    type: "checkbox",
    isRequired: false,
  },
  {
    id: 8,
    slug: "description",
    label: "Description",
    type: "textarea",
    isRequired: false,
  },
  {
    id: 9,
    slug: "certifications",
    label: "Certifications",
    type: "files",
    isRequired: false,
  },
];
//const apiArray = Object.values(formDataJSON.children[1].inputs);

const DynamicForm = () => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(Schema(formArray)),
  });

  useEffect(() => {
    console.log(formArray);
  }, []);

  const onClick = (data: any) => {
    console.log(data);

    /*     const formData = new FormData();
    formData.append("form_field_id", "12");
    formData.append("form_submit_id", "12");
    data.certifications
      ? data.certifications.forEach((item: any) => {
          formData.append("media[]", item);
        })
      : null;

    axios
      .post(
        "https://theplatform.merwas.app/api/form/formSubmitMedia1",
        formData,
        {
          headers: {
            Accept: "application/json",
            Language: "en",
            Token: "z9abe71334aea8236dwell811077c7cb768f7e816290f1",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      }); */
  };

  return (
    <Stack alignItems={"center"} gap={2}>
      <Typography color={"#44f4f4"}>Dynamic Form</Typography>
      <form onSubmit={handleSubmit(onClick)} style={{ width: "100%" }}>
        <Stack gap={2} alignItems={"flex-start"}>
          {formArray.map((item: any) => {
            const props = {
              slug: item.slug,
              label: item.label,
              type: item.type,
              startDecorator: item.startDecorator,
              endDecorator: item.endDecorator,
              control,
            };
            if (item.type === "multi-select") {
              return (
                <MultiSelectDynamic
                  key={item.id}
                  fieldData={item.fieldData}
                  {...props}
                />
              );
            } else if (item.type === "select") {
              return (
                <SelectFieldDynamic
                  key={item.id}
                  fieldData={item.fieldData}
                  {...props}
                />
              );
            } else if (item.type === "phone") {
              return <PhoneField key={item.id} {...props} />;
            } else if (item.type === "files") {
              return <FilesFieldDynamic key={item.id} {...props} />;
            } else if (item.type === "checkbox") {
              return <CheckboxFieldDynamic key={item.id} {...props} />;
            } else {
              return <TextFieldDynamic key={item.id} {...props} />;
            }
          })}
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>{" "}
        </Stack>
      </form>
    </Stack>
  );
};

export default DynamicForm;
