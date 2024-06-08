import React from "react";

export default function CompanyHistory() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Company History
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Trusted IT Consultants Since 2010
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Acme IT Consultancy was founded in 2010 with the mission to
                  provide expert technology solutions to businesses of all
                  sizes. Over the past decade, we've grown to become a trusted
                  partner for hundreds of clients, helping them navigate the
                  ever-evolving digital landscape and achieve their strategic
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
