import Link from 'next/link'
import dynamic from 'next/dynamic';

const Layouts = dynamic(() => import("../../components/layouts"), { ssr: false });


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