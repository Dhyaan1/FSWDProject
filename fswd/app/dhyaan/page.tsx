import AboutUs from "@/components/custom-ui/AboutUs/AboutUs";
import BlogDisplay from "@/components/custom-ui/BlogDisplay/BlogDisplay";
import CareerDisplay from "@/components/custom-ui/CareersDisplay/CareersDisplay";
import ContactUs from "@/components/custom-ui/ContactUs/ContactUs";
import MyFooter from "@/components/custom-ui/Footer/MyFooter";
import Hero from "@/components/custom-ui/Hero/Hero";
import NavBar from "@/components/custom-ui/NavBar/NavBar";
import ServicesProvided from "@/components/custom-ui/ServicesProvided/ServicesProvided";

export default function page() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <NavBar />
        <Hero />
        <AboutUs />
        <ServicesProvided />
        <BlogDisplay IsSignedIn={false} />
        <CareerDisplay />
        <ContactUs />
        <MyFooter />
      </div>
    </>
  );
}
