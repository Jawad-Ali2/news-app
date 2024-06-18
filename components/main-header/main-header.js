import Link from "next/link";
import HeaderLinks from "./header-links";
export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={"/"}>News App</Link>
      </div>
      <nav>
        <ul>
          <li>
            <HeaderLinks href={"/news"}>News</HeaderLinks>
          </li>
          <li>
            <HeaderLinks href={"/archive"}>Archive</HeaderLinks>
          </li>
        </ul>
      </nav>
    </header>
  );
}
