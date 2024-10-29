'useClient';
import Link from "next/link";
import {
    RiYoutubeFill,
    RiFacebookFill,
    RiInstagramFill,
    RiWhatsappFill,
    RiTelegramFill,
  } from "react-icons/ri";
 
 const icons=[
    {
      path:'https://www.facebook.com/mahmoudhaggagphysics/',
      name:<RiFacebookFill/>  
    },
    {
        path:'https://t.me/physics2024_3sec',
        name:<RiTelegramFill/>  
      },
      {
        path:'https://www.youtube.com/@mahmoudhagagphysics',
        name:<RiYoutubeFill/>  
      },
      {
        path:'whatsapp://send?phone=+201111147027&text=السلام عليكم',
        name:<RiWhatsappFill/>  
      },
 ]; 
const Social=({containerStyles,iconStyles})=>{
    return(
        <div className={`${containerStyles}`}>{
          icons.map((icon,index)=>{
            return <Link href={icon.path} key={index}><div
            className={`${iconStyles}`}
            >{icon.name}</div></Link>
          })  
        }</div>
    )
    }
    
    export default Social;