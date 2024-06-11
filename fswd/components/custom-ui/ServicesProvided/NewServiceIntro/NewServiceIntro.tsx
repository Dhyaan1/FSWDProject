import Link from "next/link";
import {
  SlideDownWhenVisible,
  SlideUpWhenVisible,
} from "../../FramerMotionCustomComponents/FramerWrappers";

export default function NewServiceIntro() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div
                id="Services"
                className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
              >
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How We Can Help
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Azayad IT Consultancy offers a wide range of services to help
                businesses of all sizes achieve their technology goals. Whether
                you need help with cloud migration, cybersecurity, or enterprise
                software implementation, our team of experts is here to guide
                you every step of the way.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <SlideDownWhenVisible delay={0.2}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Cloud Migration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We help businesses seamlessly migrate their infrastructure and
                  applications to the cloud, ensuring maximum uptime and
                  security.
                </p>
              </div>
            </SlideDownWhenVisible>
            <SlideDownWhenVisible delay={0.4}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Cybersecurity</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team of security experts provides comprehensive solutions
                  to protect your business from cyber threats and ensure
                  compliance with industry regulations.
                </p>
              </div>
            </SlideDownWhenVisible>
            <SlideDownWhenVisible delay={0.6}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Enterprise Software</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We help businesses select, implement, and optimize
                  enterprise-level software solutions to streamline operations
                  and drive productivity.
                </p>
              </div>
            </SlideDownWhenVisible>
            <SlideUpWhenVisible delay={0.8}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Digital Transformation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our consultants work with you to develop a comprehensive
                  digital transformation strategy, leveraging the latest
                  technologies to help your business stay ahead of the curve.
                </p>
              </div>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible delay={1}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">IT Strategy</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We help businesses align their technology investments with
                  their overall business goals, ensuring that IT supports and
                  enables growth.
                </p>
              </div>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible delay={1.2}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Managed IT Services</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team of IT experts provides comprehensive managed
                  services, including helpdesk support, network management, and
                  infrastructure maintenance, to keep your business running
                  smoothly.
                </p>
              </div>
            </SlideUpWhenVisible>
            <Link
              href="/Services"
              target="_blank"
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
              prefetch={false}
            >
              Learn More About Our Services{" "}
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
