import SEO from "@/components/SEO";
import CategorySection from "@/features/home/components/CategorySection";
import HeroSection from "@/features/home/components/HeroSection";
import ProductSection from "@/features/home/components/ProductSection";

export default function Home() {
    return (
        <>  
            <SEO pageTitle={"WebManza"} pageDescription={"this is a ecommerce platform"}/>
            {/* <h1>In the name of Allah</h1> */}
            <HeroSection />
            <CategorySection />
            <ProductSection />
        </>
    );
}
