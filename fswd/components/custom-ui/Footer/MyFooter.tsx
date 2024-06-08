import Link from "next/link";

export default function MyFooter() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-50 p-6 md:py-12 w-full dark:bg-gray-950 dark:text-gray-50">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link className="hover:underline underline-offset-4" href="#">
              About Us
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Our Team
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Careers
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Services</h3>
            <Link className="hover:underline underline-offset-4" href="#">
              IT Strategy
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Software Development
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Cloud Migration
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Managed Services
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link className="hover:underline underline-offset-4" href="#">
              Blog
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Case Studies
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              Documentation
            </Link>
            <Link className="hover:underline underline-offset-4" href="#">
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
          </div>
        </div>
      </footer>
    </>
  );
}
