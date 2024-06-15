import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import NavBar from "@/components/custom-ui/NavBar/NavBar";
import Hero from "@/components/custom-ui/Hero/Hero";
import AboutUs from "@/components/custom-ui/AboutUs/AboutUs";
import ServicesProvided from "@/components/custom-ui/ServicesProvided/ServicesProvided";
import BlogDisplay from "@/components/custom-ui/BlogDisplay/BlogDisplay";
import CareerDisplay from "@/components/custom-ui/CareersDisplay/CareersDisplay";
import MyFooter from "@/components/custom-ui/Footer/MyFooter";
import ContactUs from "@/components/custom-ui/ContactUs/ContactUs";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
        <NavBar />
        <Hero />
        <AboutUs />
        <ServicesProvided />
        <BlogDisplay IsSignedIn={true} />
        <CareerDisplay />
        <ContactUs />
        <MyFooter />
      </div>
    </>
  );
}
