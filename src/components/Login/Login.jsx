import React from "react";
import LoginForm from "./LoginForm";
import icon from "/assets/Group 72.png";
const Login = () => {
  return (
    <>
      <section className="login grid grid-cols-1 lg:grid-cols-2">
        <div className="loginImg flex flex-col md:flex-row   items-start  text-3xl md:text-5xl space-y-3 md:space-y-0 md:space-x-3">
          <div className=" flex items-center mt-[3%] ml-[5%] gap-2">
            <img src={icon} className="w-12 h-12 md:w-15 md:h-15 items-start" />
            <span className="text-white text-[18px] text-center md:mt-0">
              Synthesia.Ai
            </span>
          </div>
        </div>

        <div>
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Login;
