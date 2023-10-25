import type { AppProps } from 'next/app'
import { AuthProvider, useAuth } from '../contexts/auth.context'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </>
  )
}