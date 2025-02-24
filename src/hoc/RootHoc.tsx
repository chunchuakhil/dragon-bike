"use client";
import CollapseDesktopAppShell from "@/components/CollapseDesktopAppShell";
import firebase_app from "@/firebase/firebaseConfig";
import { appRouter } from "@/routes/routes";
import {
  IAuthState,
  loginAction,
  logoutAction,
} from "@/store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Flex, MantineProvider } from "@mantine/core";
import { getAuth } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const RootHoc = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const auth = getAuth(firebase_app);

  const isLogin = useAppSelector((store) => store.authReducer.value.isAuth);
  const [isAuthResolved, setIsAuthResolved] = useState(false);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          loginAction({
            isAuth: true,
            uid: user.uid,
            userImage: user.photoURL,
            userName: user.displayName,
          } as IAuthState)
        );
      } else {
        dispatch(logoutAction());
      }
      setIsAuthResolved(true); // Auth state is now resolved
    });

    return () => unSubscribe();
  }, [dispatch, auth]);

  useEffect(() => {
    if (isAuthResolved) {
      if (!isLogin && pathname !== appRouter.gotoLoginPage) {
        router.replace(appRouter.gotoLoginPage);
      } else if (isLogin && pathname === appRouter.gotoLoginPage) {
        router.replace(appRouter.gotoLandingPage);
      }
    }
  }, [isAuthResolved, isLogin, pathname, router]);

  if (!isAuthResolved) {
    return null; // Prevent rendering until Firebase auth is resolved
  }

  return (
    <MantineProvider theme={{}}>
      <CollapseDesktopAppShell>
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
        >
          {children}
        </Flex>
      </CollapseDesktopAppShell>
    </MantineProvider>
  );
};

export default RootHoc;
