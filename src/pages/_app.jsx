import { wrapper } from "@/redux/store";
import RootLayout from "@/layout";
import "@/styles/globals.scss";

const App = ({ Component, pageProps}) => {
    return (
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
    );
}

export default wrapper.withRedux(App);