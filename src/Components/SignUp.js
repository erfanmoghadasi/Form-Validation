import React, { useEffect, useState } from "react";
import { validate } from "./validate";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  return (
    <div>
      <div>
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Password :</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Config Password :</label>
        <input
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>I accept terms of privacy policy :</label>
        <input
          type="checkbox"
          name="isAccepted"
          value={data.isAccepted}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default SignUp;
