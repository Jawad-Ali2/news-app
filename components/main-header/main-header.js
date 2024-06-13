import Image from "next/image";
import logoImg from "@/assets/logo.jpg";
import Link from "next/link";
export default function MainHeader() {
  return (
    <header id="main-header">
      <Image src={logoImg.src} width={1024} height={1024} id="logo" />

      <ul>
        <li>
          <Link href={"/"}>Home</Link>
          <Link href={"/news"}>News</Link>
        </li>
      </ul>
    </header>
  );
}
