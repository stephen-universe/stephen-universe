import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"


export default function NotFound() {
    return (
        <section className="main-body-bg">
        <Layout page="404" bgColor="inherit">
            <div className="">
                <Link to="/">
                    <h1>Sorry, page does not exist.</h1>
                </Link>
            </div>
        </Layout>
        </section>
    )
}