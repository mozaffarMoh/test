"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const MyFormik: React.FC = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const [form, setForm] = useState(null);
  console.log("value is : ", form);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values: any) => {
        setForm(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyFormik;
