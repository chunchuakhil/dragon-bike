"use client";
import firebase_app from "@/firebase/firebaseConfig";
import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { appRouter } from "@/routes/routes";
import { Button } from "@mantine/core";

const GoogleLogin = () => {
  const router = useRouter();

  const signInWithGoogle = async () => {
    const auth = getAuth(firebase_app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);

      router.push(appRouter.gotoLandingPage);
    } catch (error) {
      console.error("Signin error", error);
    }
  };
  return (
    <div>
      <Button onClick={signInWithGoogle}>Login with Google</Button>
    </div>
  );
};

export default GoogleLogin;
