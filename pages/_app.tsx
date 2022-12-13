import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore, { store } from "../redux/store";
import Refresher from "../components/Refresher";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ChakraProvider>
          <QueryClientProvider client={queryClient}>
            <Refresher>
              <Component {...pageProps} />
            </Refresher>
          </QueryClientProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
