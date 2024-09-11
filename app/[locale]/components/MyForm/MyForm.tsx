import React, { useState } from "react";
import * as yup from "yup";

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

const MyForm: React.FC = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await validationSchema.validate(values, { abortEarly: false });
      console.log("Form data is valid:", values);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const formErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            formErrors[error.path] = error.message;
          }
        });
        setErrors(formErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <div>{errors.email}</div>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
