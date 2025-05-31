import Link from 'next/link'
import Layouts from "../../components/layouts"


export default function NotFound() {
    return (
        <section className="main-body-bg">
        <Layouts page="404" bgColor="inherit">
            <div className="">
                <Link href="/">
                    <h1>Sorry, page does not exist.</h1>
                </Link>
            </div>
        </Layouts>
        </section>
    )
}