import Image from "next/image";
import logoImg from "@/assets/logo.jpg";
import Link from "next/link";
export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={"/"}>News App</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={"/news"}>News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
