import Link from "next/link";

export default function MyFooter() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-50 p-6 md:py-12 w-full dark:bg-gray-950 dark:text-gray-50">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link
              className="hover:underline underline-offset-4"
              href="#AboutUs"
            >
              About Us
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#MeetTheTeam"
            >
              Our Team
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#Careers"
            >
              Careers
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#BlogView"
            >
              Blogs/News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Services</h3>
            <Link
              className="hover:underline underline-offset-4"
              href="#Services"
            >
              IT Strategy
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#Services"
            >
              Software Development
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#Services"
            >
              Cloud Migration
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#Services"
            >
              Managed Services
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link
              className="hover:underline underline-offset-4"
              href="#BlogView"
            >
              Blog
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="/OurServicesInAction"
              target="_blank"
            >
              Case Studies
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="https://github.com/Dhyaan1/FSWDProject"
              target="_blank"
            >
              Documentation
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="https://github.com/Dhyaan1/FSWDProject"
              target="_blank"
            >
              FAQs
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
