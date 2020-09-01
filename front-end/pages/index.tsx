// import Layout from '../components/Layout'
import Link from 'next/link'
import { DatePicker } from 'antd';
import { Button } from 'antd';
const IndexPage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <div>
      <DatePicker />
      <Button type="dashed">Button</Button>
    </div>
  </div>
)
export default IndexPage
