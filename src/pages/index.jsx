import SEO from "@/components/SEO";
import BannerSection from "@/features/home/components/BannerSection";
import CategorySection from "@/features/home/components/CategorySection";
import HeroSection from "@/features/home/components/HeroSection";
import ProductsSection from "@/features/home/components/productsSection/ProductsSection";
import ShippingService from "@/features/home/components/ShippingService";
import SpecialProducts from "@/features/home/components/SpecialProducts";
import { useGetThemeDataMutation } from "@/redux/features/themeData/themeDataApi";
import { useEffect } from "react";

export default function Home() {
    const [getThemeData, result] = useGetThemeDataMutation();

    useEffect(() =>{
        getThemeData();
    }, [getThemeData])

    // console.log("home result", result);
    return (
        <>  
            {/* <h1>In the name of Allah</h1> */}
            <SEO pageTitle="Bookshop Studio" pageDescription={"this is a ecommerce platform"}/>
            <HeroSection />
            <CategorySection />
            <SpecialProducts />
            <BannerSection />
            <ProductsSection />
            <ShippingService />
        </>
    );
}
