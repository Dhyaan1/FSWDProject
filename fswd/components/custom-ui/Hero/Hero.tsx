import Link from "next/link";

export default function Hero() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your IT with Our Consultancy Services
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Our team of experienced IT consultants provides tailored
                  solutions to help your business thrive in the digital age.
                  From strategy to implementation, we're here to guide you every
                  step of the way.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#00b894] dark:text-gray-950 dark:hover:bg-[#00b894]/90 dark:focus-visible:ring-[#00b894]"
                    href="#ContactUs"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#00b894] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#00b894]/10 hover:text-[#00b894] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b894] disabled:pointer-events-none disabled:opacity-50 dark:border-[#00b894] dark:hover:bg-[#00b894]/10 dark:hover:text-[#00b894] dark:focus-visible:ring-[#00b894]"
                    href="#AboutUs"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="space-y-4" id="ServiceOverall">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive IT Solutions for Your Business
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our team of experts provides a wide range of IT consultancy
                  services to help your business thrive in the digital age.
                </p>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">IT Strategy</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We help you develop a comprehensive IT strategy that
                      aligns with your business goals and objectives.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Software Development</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our team of experienced developers can build custom
                      software solutions to meet your unique business needs.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Cloud Migration</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We help you seamlessly migrate your infrastructure to the
                      cloud, ensuring optimal performance and security.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Managed Services</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our managed IT services provide 24/7 support and
                      maintenance, freeing up your team to focus on core
                      business activities.
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="Services"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Trusted by Businesses of All Sizes
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our IT consultancy services are designed to help your business
                  thrive in the digital age. Here's what sets us apart:
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    Industry-Leading Expertise
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our team of consultants has decades of experience in the IT
                    industry, ensuring we deliver innovative and effective
                    solutions.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Tailored Solutions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We take the time to understand your unique business needs
                    and develop custom solutions to help you achieve your goals.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Client-Centric Approach</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our focus is on building long-term partnerships with our
                    clients, ensuring we provide exceptional service and
                    support.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Innovative Solutions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We stay ahead of the curve, leveraging the latest
                    technologies and industry best practices to deliver
                    cutting-edge solutions.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Proven Track Record</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    With a long history of successful projects, we have a proven
                    track record of delivering results for our clients.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Scalable Solutions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our solutions are designed to scale with your business,
                    ensuring you have the IT infrastructure to support your
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-950">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from some of the businesses we've had the pleasure of
                  working with.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    “The IT consultancy services provided by this company have
                    been invaluable to our business. Their expertise and
                    innovative solutions have helped us streamline our
                    operations and stay ahead of the competition.”
                  </blockquote>
                  <div>
                    <div className="font-semibold">Jane Doe</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CEO, Azayad Inc
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    “Working with this IT consultancy has been a game-changer
                    for our business. Their team's responsiveness and attention
                    to detail have been exceptional, and we've seen a
                    significant improvement in our overall IT infrastructure and
                    efficiency.”
                  </blockquote>
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CTO, Globex Corporation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
