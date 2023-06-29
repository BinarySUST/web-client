// template css
import '@/public/assets/css/vendor/bootstrap.min.css'
import '@/public/assets/css/vendor/slick.css'
import '@/public/assets/css/vendor/slick-theme.css'
import '@/public/assets/css/plugins/sal.css'
import '@/public/assets/css/plugins/feather.css'
import '@/public/assets/css/plugins/fontawesome.min.css'
import '@/public/assets/css/plugins/euclid-circulara.css'
import '@/public/assets/css/plugins/swiper.css'
import '@/public/assets/css/plugins/magnify.css'
import '@/public/assets/css/plugins/odometer.css'
import '@/public/assets/css/plugins/animation.css'
import '@/public/assets/css/plugins/bootstrap-select.min.css'
import '@/public/assets/css/plugins/jquery-ui.css'
import '@/public/assets/css/plugins/magnigy-popup.min.css'
import '@/public/assets/css/plugins/plyr.css'
import '@/public/assets/css/style.css'
// global css
import '@/styles/globals.css';

import Script from 'next/script';
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import BackToTop from '@/components/BackToTop'
import MobileMenu from '@/components/Header/MobileMenu'

export const metadata = {
  title: 'Binary SUST',
  description: 'Technology for real life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='rbt-header-sticky'>
        <Header />
        <MobileMenu />

        {children}

        <Footer />
        <BackToTop />

        {/* <!-- Modernizer JS --> */}
        <Script src="assets/js/vendor/modernizr.min.js" />
        {/* <!-- jQuery JS --> */}
        <Script src="assets/js/vendor/jquery.js"></Script>
        {/* <!-- Bootstrap JS --> */}
        <Script src="assets/js/vendor/bootstrap.min.js"></Script>
        {/* <!-- sal.js --> */}
        <Script src="assets/js/vendor/sal.js"></Script>
        <Script src="assets/js/vendor/swiper.js"></Script>
        <Script src="assets/js/vendor/magnify.min.js"></Script>
        <Script src="assets/js/vendor/jquery-appear.js"></Script>
        <Script src="assets/js/vendor/odometer.js"></Script>
        <Script src="assets/js/vendor/backtotop.js"></Script>
        <Script src="assets/js/vendor/isotop.js"></Script>
        <Script src="assets/js/vendor/imageloaded.js"></Script>

        <Script src="assets/js/vendor/wow.js"></Script>
        <Script src="assets/js/vendor/waypoint.min.js"></Script>
        {/* <Script src="assets/js/vendor/easypie.js"></Script> */}
        <Script src="assets/js/vendor/text-type.js"></Script>
        <Script src="assets/js/vendor/jquery-one-page-nav.js"></Script>
        <Script src="assets/js/vendor/bootstrap-select.min.js"></Script>
        <Script src="assets/js/vendor/jquery-ui.js"></Script>
        <Script src="assets/js/vendor/magnify-popup.min.js"></Script>
        <Script src="assets/js/vendor/paralax-scroll.js"></Script>
        <Script src="assets/js/vendor/paralax.min.js"></Script>
        <Script src="assets/js/vendor/countdown.js"></Script>
        {/* <Script src="assets/js/vendor/plyr.js"></Script> */}
        {/* <!-- Main JS --> */}
        <Script src="assets/js/main.js"></Script>
      </body>
    </html>
  )
}
