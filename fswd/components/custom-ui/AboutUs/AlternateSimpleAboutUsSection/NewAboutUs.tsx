import { ScaleWhenVisible } from "../../FramerMotionCustomComponents/FramerWrappers";

export default function NewAboutUs() {
  return (
    <>
      <section id="History-Values" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                History and Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Story
              </h2>
              <ScaleWhenVisible delay={0.5}>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Azayad IT Consultancy was founded in 2010 with the mission of
                  helping businesses of all sizes navigate the ever-evolving
                  world of technology. Over the past decade, we've grown to
                  become a trusted partner for hundreds of clients, providing
                  expert guidance and innovative solutions to help them achieve
                  their goals.
                </p>
              </ScaleWhenVisible>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <ScaleWhenVisible delay={0.2}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Mission</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  To empower our clients with the technology and expertise they
                  need to thrive in the digital age.
                </p>
              </div>
            </ScaleWhenVisible>
            <ScaleWhenVisible delay={0.4}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Vision</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  To be the leading IT consultancy, driving innovation and
                  digital transformation for businesses of all sizes.
                </p>
              </div>
            </ScaleWhenVisible>
            <ScaleWhenVisible delay={0.6}>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Values</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Integrity, Collaboration, Continuous Improvement, and
                  Exceptional Service.
                </p>
              </div>
            </ScaleWhenVisible>
          </div>
        </div>
      </section>
    </>
  );
}
