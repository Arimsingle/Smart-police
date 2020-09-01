import { AppProps } from 'next/app'
import 'antd/dist/antd.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}
export default App;