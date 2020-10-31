import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import  '../styles/components/header.css'
import  '../styles/components/buttons.css'
import  '../styles/components/footer.css'
import '../styles/components/blogCard.css';
import '../styles/components/buttonWhatsapp.css';

import  '../styles/colors.css'
import '../styles/components/video.css';
import '../styles/fonts.css';
import '../styles/illustrations.css';

import '../styles/pages/index.css';
import '../styles/pages/about.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}