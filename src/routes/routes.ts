const protectedRoutes = {
  gotoProfilePage: "/auth/profile",
};
export const appRouter = {
  gotoLandingPage: "/Landing",
  gotoBikeDetailsPage: "/details",
  gotoLoginPage: "/login",
  gotoProfilePage: protectedRoutes.gotoProfilePage,
};
