import '@/styles/globals.css'
import { DataProvider } from '@/context/data-context'

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}
