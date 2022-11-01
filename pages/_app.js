import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>LykaMove </title>
          <meta name="robots" content="noindex, follow" />
          <meta name="description" content />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/plugins/feature.css" />
          <link rel="stylesheet" href="assets/css/vendor/slick.css" />
          <link rel="stylesheet" href="assets/css/vendor/slick-theme.css" />
          <link rel="stylesheet" href="assets/css/vendor/lightbox.css" />
          <link rel="stylesheet" href="assets/css/vendor/fontawesome.css" />
          <link rel="stylesheet" href="assets/css/vendor/odometer.css" />
          <link rel="stylesheet" href="assets/css/style.css?v=77254447" />
        </div>
      </Head>

      <Component {...pageProps} />

      <Script strategy="lazyOnload" src="assets/js/vendor/jquery.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/modernizer.min.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/bootstrap.min.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/avoid-console.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/feather.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/slick.min.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/video.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/masonry.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/lightbox.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/particles.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/backtotop.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/odometer.js" />
      <Script strategy="lazyOnload" src="assets/js/vendor/jquery-appear.js" />
      <Script
        strategy="lazyOnload"
        src="assets/js/vendor/jquery-one-page-nav.js"
      />
      <Script strategy="lazyOnload" src="assets/js/vendor/wow.js" />
    </>
  );
}

export default MyApp;
