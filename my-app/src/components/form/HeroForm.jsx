import React from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import "./HeroForm.css";

const HeroForm = () => {
  return (
    <form>
      <p>Search</p>
      <MyInput />
      <MyButton type="submit">Find</MyButton>
      <MyButton>Reset</MyButton>
    </form>
  );
};

export default HeroForm;
