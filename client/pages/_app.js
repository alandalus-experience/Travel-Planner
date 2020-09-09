// Redux modules
import {wrapper} from '../redux/store';

// Global styles
import '../styles/globals.scss'

const App = ({Component, pageProps}) => {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(App);
