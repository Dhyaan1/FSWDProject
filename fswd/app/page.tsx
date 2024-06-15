import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AboutUs from "@/components/custom-ui/AboutUs/AboutUs";
import BlogDisplay from "@/components/custom-ui/BlogDisplay/BlogDisplay";
import CareerDisplay from "@/components/custom-ui/CareersDisplay/CareersDisplay";
import ContactUs from "@/components/custom-ui/ContactUs/ContactUs";
import MyFooter from "@/components/custom-ui/Footer/MyFooter";
import Hero from "@/components/custom-ui/Hero/Hero";
import NavBar from "@/components/custom-ui/NavBar/NavBar";
import ServicesProvided from "@/components/custom-ui/ServicesProvided/ServicesProvided";

export default async function page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/protected");
  }
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
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
