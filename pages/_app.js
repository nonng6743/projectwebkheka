import '../styles/globals.css'
import '../styles/main.scss';
import { wrapper} from '../src/redux/store'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
