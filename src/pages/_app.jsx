import { wrapper } from "@/redux/app/store";
import RootLayout from "@/layout";
import { MantineProvider } from "@mantine/core";
import SEO from "@/components/SEO";
import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <SEO />
            <MantineProvider
                withCSSVariables
                withNormalizeCSS
                theme={{
                    colors:{
                        primaryColors:["#ff5900"]
                    },
                    components: {
                        Container: {
                            defaultProps: {
                                sizes: {
                                    sm: 576,
                                    md: 768,
                                    lg: 992,
                                    xl: 1400,
                                },
                            },
                        },
                    },
                }}
            >
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            </MantineProvider>
        </>
    );
};

export default wrapper.withRedux(App);
