import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import AuthButton from "@/components/AuthButton";

export default function NavBar() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <>
      <header className="z-[50] sm:max-h-[72px] bg-gray-800 sm:top-0 sm:sticky text-white px-4 lg:px-6 py-4 flex items-center justify-between flex-wrap max-lg:justify-end max-lg:gap-4">
        <Link
          href="#ServiceOverall"
          className="flex items-center gap-2"
          prefetch={false}
        >
          <BriefcaseIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Azayd IT Consultancy</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-6">
            <Link href="#BlogView" className="hover:underline" prefetch={false}>
              Blogs
            </Link>
            <Link href="#Services" className="hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#AboutUs" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link
              href="#ContactUs"
              className="hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </header>
    </>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
