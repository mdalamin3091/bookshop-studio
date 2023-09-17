import {
    getProductByCategory,
    getProductDetails
} from "@/redux/features/products/productApi";
import {
    useGetThemeDataQuery,
    getThemeData,
} from "@/redux/features/themeData/themeDataApi";
import ProductsSection from "@/features/home/components/productsSection/ProductsSection";
import CategorySection from "@/features/home/components/CategorySection";
import ShippingService from "@/features/home/components/ShippingService";
import SpecialProducts from "@/features/home/components/SpecialProducts";
import BannerSection from "@/features/home/components/BannerSection";
import HeroSection from "@/features/home/components/HeroSection";
import { getRunningQueriesThunk } from "@/redux/app/api/apiSlice";
import { wrapper } from "@/redux/app/store";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setThemeInfo } from "@/redux/features/themeData/themeDataSlice";

export default function Home() {
    const { data, isSuccess } = useGetThemeDataQuery(undefined);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(isSuccess && data){
            dispatch(setThemeInfo(data))
        }
    }, [data, dispatch, isSuccess])
    
    return (
        <>
            {/* <h1>In the name of Allah</h1> */}
            <SEO
                pageTitle="Bookshop Studio"
                pageDescription={"this is a ecommerce platform"}
            />
            <HeroSection />
            <CategorySection />
            <SpecialProducts />
            <BannerSection />
            <ProductsSection />
            <ShippingService />
        </>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        store.dispatch(getThemeData.initiate());
        store.dispatch(getProductByCategory.initiate());
        store.dispatch(getProductDetails.initiate());

        await Promise.all(store.dispatch(getRunningQueriesThunk()));
        return {
            props: {},
        };
    }
);
