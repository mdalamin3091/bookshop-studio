import Head from "next/head";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

const SEO = ({ pageTitle = "Bookshop Studio", pageDescription = "This is a ecommerce platform" }) => {
    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <html lang="en" className={`${roboto.className} font-sans`} />
        </Head>
    )
};

export default SEO;
