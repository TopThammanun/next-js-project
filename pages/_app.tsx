import '@/styles/globals.css'
import Head from 'next/head';
//Use React Query
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
//Config Tailwind and MaterialUI
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/config/materialUI/theme";
import Nprogress from '@/components/Nprogress';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app'
import InjectTailwind from '@/pages/InjectTailwind';
import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ClerkProvider>
          <InjectTailwind>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>next-js-project</title>
            </Head>
            <Nprogress>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Nprogress>
          </InjectTailwind>
        </ClerkProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
