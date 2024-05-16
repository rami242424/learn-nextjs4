import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    // location에 관한 정보를 얻을 수 있는 코드 (즉 pathname을 알수 있다.)
    const router = useRouter();
    // console.log(router);
    return(
        <nav>
            <Link legacyBehavior href="/">
                <a style={{ color : router.pathname === "/" ? "red" : "green"}}>Home</a>
            </Link>
            <Link legacyBehavior href="/about">
                <a style={{ color : router.pathname === "/about" ? "red" : "green"}}>About</a>
            </Link>
        </nav>
    );
}