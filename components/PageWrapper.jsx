import { useRouter } from "next/router"
import AboutS from "./AboutS"
import Footer from "./Footer"
import MainNav from "./MainNav"

const PageWrapper = (props) => {
    const router = useRouter()

    return (
        <main>
            <MainNav color={router.pathname === "/" ? "#191919" : "#000"} />
            {props.children}
            {
                router.pathname !== "/checkout" &&
                <AboutS />
            }
            <Footer />
        </main>
    )
}

export default PageWrapper