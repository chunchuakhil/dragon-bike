import GoogleLogin from "@/view/auth/GoogleLogin";
import Login from "@/view/auth/Login";
import React from "react";

const page = () => {
  return (
    <div>
      Fake Login page
      <Login />
      <GoogleLogin />
    </div>
  );
};

export default page;
