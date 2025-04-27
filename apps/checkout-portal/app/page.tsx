import { MERCHAND_PORTAL_URL } from "@/lib/conts";
import { redirect } from "next/navigation";

const page = () => {
  redirect(MERCHAND_PORTAL_URL);
};

export default page;
