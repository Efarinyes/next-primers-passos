import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";


export default function PricingPage() {
  return (
    <MainLayout>
        <h1> Princig Page </h1>
        <h1 className={ 'title '}>
        Anar a <Link href='/'>Home Page</Link>
        </h1>
        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing.jsx</code>
        </p>
    </MainLayout>
  )
}
