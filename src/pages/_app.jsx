import { wrapper } from "@/redux/store";
import RootLayout from "@/layout";
import "@/styles/globals.css";
import { Provider } from "react-redux";

const App = ({ Component, pageProps, ...rest}) => {
    const { store } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </Provider>
    );
}

export default App;