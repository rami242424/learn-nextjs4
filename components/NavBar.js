// client side render
// 브라우저가 자바스크립트를 가져와서 client-side의 자바스크립트가 모든 ui를 만든다.
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar(){
    // location에 관한 정보를 얻을 수 있는 코드 (즉 pathname을 알수 있다.)
    const router = useRouter();
    // console.log(router);
    return(
        <nav className={styles.nav}>
            <Link legacyBehavior href="/">
                <a style={{ color : router.pathname === "/" ? "red" : "green"}}>Home</a>
            </Link>
            <Link legacyBehavior href="/about">
                <a style={{ color : router.pathname === "/about" ? "red" : "green"}}>About</a>
            </Link>
        </nav>
    );
}