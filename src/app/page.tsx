import { appRouter } from "@/routes/routes";
import { redirect } from "next/navigation";

const page = () => {
  redirect(appRouter.gotoLandingPage);

  return null;
};

export default page;
