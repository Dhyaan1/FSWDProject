import React from "react";

export default function MissionVisionValues() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Mission, Vision, Values
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Guiding Principles
                </h2>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-xl font-bold">Mission</h3>
                    <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">
                      To empower our clients with innovative technology
                      solutions that drive business growth and success.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Vision</h3>
                    <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">
                      To be the premier IT consultancy, renowned for our
                      exceptional service, technical expertise, and unwavering
                      commitment to our clients.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Values</h3>
                    <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">
                      Integrity, Innovation, Collaboration, Continuous
                      Improvement, and Client-Centricity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
