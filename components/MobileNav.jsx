import { RiGooglePlayFill } from "react-icons/ri";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Link href="https://play.google.com/store/apps/details?id=com.mahmoud.hagagg&pcampaignid=web_share">
     <RiGooglePlayFill
    scale={30}
    size={25}
    />
   </Link>
  );
};

export default MobileNav;
