import {
  FlipYWhenVisible,
  RotateWhenVisible,
} from "../../FramerMotionCustomComponents/FramerWrappers";

export default function TeamProfiles() {
  return (
    <>
      <section
        id="team"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div id="MeetTheTeam" className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Experts
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of experienced consultants, developers, and
                technologists are dedicated to delivering customized solutions
                that drive tangible business results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-4">
              <div className="flex flex-col items-center">
                <RotateWhenVisible delay={0.2}>
                  <img
                    loading="lazy"
                    src="/StockOfficePics/guy1.jpg"
                    width="150"
                    height="150"
                    alt="John Doe"
                    className="rounded-full w-36 h-36 object-cover"
                  />
                </RotateWhenVisible>
                <FlipYWhenVisible delay={0.2}>
                  <div className="text-center space-y-1 mt-4">
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CEO and Founder
                    </p>
                  </div>
                </FlipYWhenVisible>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                John Doe is the CEO and Founder of IT Consultancy Services. With
                over 15 years of experience in the IT industry, he leads the
                company's strategic vision and oversees the delivery of
                innovative solutions to our clients.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col items-center">
                <RotateWhenVisible delay={0.4}>
                  <img
                    loading="lazy"
                    src="/StockOfficePics/girl1.jpg"
                    width="150"
                    height="150"
                    alt="Jane Smith"
                    className="rounded-full w-36 h-36 object-cover"
                  />
                </RotateWhenVisible>
                <FlipYWhenVisible delay={0.4}>
                  <div className="text-center space-y-1 mt-4">
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Chief Technology Officer
                    </p>
                  </div>
                </FlipYWhenVisible>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jane Smith is the Chief Technology Officer at IT Consultancy
                Services. With a deep understanding of emerging technologies and
                a passion for innovation, she leads the development of
                cutting-edge solutions for our clients.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col items-center">
                <RotateWhenVisible delay={0.6}>
                  <img
                    loading="lazy"
                    src="/StockOfficePics/guy2.jpg"
                    width="150"
                    height="150"
                    alt="Michael Johnson"
                    className="rounded-full w-36 h-36 object-cover"
                  />
                </RotateWhenVisible>
                <FlipYWhenVisible delay={0.6}>
                  <div className="text-center space-y-1 mt-4">
                    <h3 className="text-lg font-bold">Michael Johnson</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Head of Consulting
                    </p>
                  </div>
                </FlipYWhenVisible>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Michael Johnson is the Head of Consulting at IT Consultancy
                Services. With over a decade of experience in the IT consulting
                industry, he leads a team of experts who provide strategic
                guidance and tailored solutions to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
