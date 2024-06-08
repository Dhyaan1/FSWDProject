import Link from "next/link";

export default function ServiceIntro() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Tailored IT Solutions for Your Business
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of experts specializes in a wide range of IT services
                to help your business thrive in the digital age. From strategic
                consulting to managed IT services, we've got you covered.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Strategic Consulting</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our strategic consulting services help you align your technology
                with your business goals, ensuring long-term success.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
                prefetch={false}
              >
                Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">IT Infrastructure</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We design, implement, and manage robust IT infrastructures
                tailored to your business needs.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
                prefetch={false}
              >
                Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Managed IT Services</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our managed IT services provide comprehensive support and
                maintenance to ensure your systems are always running smoothly.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
                prefetch={false}
              >
                Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Cybersecurity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our cybersecurity experts protect your business from evolving
                threats, ensuring the safety of your data and systems.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
                prefetch={false}
              >
                Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Cloud Solutions</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We help you leverage the power of the cloud to improve
                efficiency, scalability, and cost-effectiveness.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
                prefetch={false}
              >
                Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Digital Transformation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our digital transformation services help you modernize your
                business and stay ahead of the competition.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
                prefetch={false}
              >
                Learn More <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
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
