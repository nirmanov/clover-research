import behance from "@/public/images/social-behance.svg";
import dribble from "@/public/images/social-dribble.svg";
import hh from "@/public/images/social-hh.svg";
import hubr from "@/public/images/social-hubr.svg";
import vc_ru from "@/public/images/social-vc.ru.svg";
import vk from "@/public/images/social-vk.svg";
import Link from "next/link";
import Image from "next/image";

const SocialLinks: React.FC = () => {
  const iconsData = [
    { iconUrl: behance, name: "behance", link: "/" },
    { iconUrl: dribble, name: "dribble", link: "/" },
    { iconUrl: hh, name: "hh", link: "/" },
    { iconUrl: hubr, name: "hubr", link: "/" },
    { iconUrl: vc_ru, name: "vc_ru", link: "/" },
    { iconUrl: vk, name: "vk", link: "/" },
  ];

  return (
    <>
      {iconsData.map((iconData, index) => (
        <li key={index}>
          <Link href={iconData.link}>
            <Image src={iconData.iconUrl} alt={iconData.name} />
          </Link>
        </li>
      ))}
    </>
  );
};

export default SocialLinks;
