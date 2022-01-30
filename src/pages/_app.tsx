import * as plurals from 'make-plural/plurals'
import * as gtag from '../functions/matomo'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import "../styles/App.css";
import Head from "next/head";
import Script from "next/script"

function MyApp({
  Component,
  pageProps
}) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }     
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }     
  }, [router.events])



  useEffect(() => {
    async function load(locale) {
      i18n.loadLocaleData(locale, { plurals: plurals[locale.split('_')[0]] })
          
      // Load fallback messages
      const { messages } = await import(`@lingui/loader!./../../locale/${locale}.json?raw-lingui`)
      i18n.load(locale, messages);
      i18n.activate(locale);
    }   
          
    load(router.locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.locale])



  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"></link>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />

      <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
        <Component {...pageProps}  />
      </I18nProvider>
    </>
  );
}

export default MyApp;
