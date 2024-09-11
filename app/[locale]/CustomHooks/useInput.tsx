import { useState } from "react";

const useInput = ({ domObj, name }: any) => {
  const [form, setForm] = useState(null);

  const { value } = domObj;
  setForm((prevObj: any) => {
    return { ...prevObj, name: value };
  });
  return [form, setForm];
};

export default useInput;
