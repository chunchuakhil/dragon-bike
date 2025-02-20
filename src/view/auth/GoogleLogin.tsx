"use client";
import firebase_app from "@/firebase/firebaseConfig";
import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { appRouter } from "@/routes/routes";
import { Button } from "@mantine/core";

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(firebase_app);
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unSubscribe();
  }, []);

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
