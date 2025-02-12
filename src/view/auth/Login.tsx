"use client";

import { appRouter } from "@/routes/routes";
import { loginAction } from "@/store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Button } from "@mantine/core";
import { redirect } from "next/navigation";
import React from "react";

const Login = () => {
  const isLogin = useAppSelector((state) => state.authReducer.value.isAuth);
  const dispatch = useAppDispatch();
  const loginHandler = () => {
    dispatch(loginAction(true));
  };
  if (isLogin) {
    redirect(appRouter.gotoLandingPage);
  }
  return (
    <div>
      <Button onClick={loginHandler}>Fake Login</Button>
    </div>
  );
};

export default Login;
