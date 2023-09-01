import '@/styles/globals.css'
import Head from 'next/head';
//Use React Query
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
//Config Tailwind and MaterialUI
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/config/materialUI/theme";
import Nprogress from '@/components/Nprogress';
import InjectTailwind from '@/pages/InjectTailwind';
import { ReactElement } from 'react';
import { ClerkProvider } from '@clerk/nextjs'
import { AppPropsWithLayout } from '@/types/layout/AppPropsWithLayout';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

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
              {getLayout(<Component {...pageProps} />)}
            </Nprogress>
          </InjectTailwind>
        </ClerkProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
