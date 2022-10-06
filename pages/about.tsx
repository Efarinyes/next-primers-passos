
import Link from "next/link";
import { DarckLayout } from "../components/layouts/DarckLayout";
import { MainLayout } from "../components/layouts/MainLayout";


export default function AboutPage() {
    return (
        <>
            <h1> About Page </h1>
            <h1 className={'title'}>
                Anar a <Link href="/">Home Page</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.js</code>
            </p>
        </>
    )
}
AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarckLayout>
                {page}
            </DarckLayout>
        </MainLayout>
    )
}