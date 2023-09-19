import { wrapper } from "@/redux/app/store";
import RootLayout from "@/layout";
import { MantineProvider } from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { theme } from "@/utils/theme";
import { useRouter } from "next/router";
import Preloader from "@/components/Preloader";
import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  {
    /* <h1>In the name of Allah</h1> */
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Fragment>
          <MantineProvider withCSSVariables withNormalizeCSS theme={theme}>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </MantineProvider>
        </Fragment>
      )}
    </>
  );
};

export default wrapper.withRedux(App);
