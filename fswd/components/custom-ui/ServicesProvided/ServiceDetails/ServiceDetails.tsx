import React from "react";

export default function ServiceDetails() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Services In Action
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
                    We help you develop a comprehensive IT strategy that aligns
                    with your business goals and objectives. Our consultants
                    work closely with you to understand your unique challenges
                    and opportunities, and then craft a tailored plan to
                    leverage technology for maximum impact. From defining your
                    technology roadmap to aligning IT initiatives with your
                    overall business strategy, we ensure your IT investments
                    support your long-term growth.
                  </p>
                  <ul className="list-disc pl-4 text-gray-500 dark:text-gray-400">
                    <li>Comprehensive IT assessment and gap analysis</li>
                    <li>Alignment of IT strategy with business objectives</li>
                    <li>Technology roadmapping and implementation planning</li>
                    <li>
                      Continuous optimization and adaptation to changing needs
                    </li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold">Case Study: Acme Corp</h4>
                    <div className="flex gap-4">
                      <img
                        src="/placeholder.svg"
                        width={200}
                        height={150}
                        alt="Acme Corp Case Study"
                        className="rounded-lg object-cover"
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Acme Corp, a rapidly growing e-commerce company, came to
                        us with the challenge of aligning their IT
                        infrastructure and systems to support their ambitious
                        expansion plans. Our team conducted a thorough
                        assessment of their existing technology landscape and
                        worked closely with their leadership to develop a
                        comprehensive IT strategy that would enable them to
                        scale efficiently and securely. We helped them implement
                        a cloud-based infrastructure, streamline their
                        e-commerce platform, and automate key business
                        processes. As a result, Acme Corp was able to expand
                        into new markets, improve customer experience, and
                        achieve a 25% increase in operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Software Development</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team of experienced developers can build custom software
                    solutions to meet your unique business needs. Whether you
                    require a web application, mobile app, or enterprise-level
                    system, we have the expertise to deliver high-quality,
                    scalable, and user-friendly solutions that drive tangible
                    business results. From initial requirements gathering to
                    deployment and ongoing maintenance, we guide you through
                    every step of the software development lifecycle.
                  </p>
                  <ul className="list-disc pl-4 text-gray-500 dark:text-gray-400">
                    <li>
                      Custom software development for web, mobile, and
                      enterprise applications
                    </li>
                    <li>
                      Agile development methodologies for faster time-to-market
                    </li>
                    <li>
                      Seamless integration with existing systems and
                      infrastructure
                    </li>
                    <li>Comprehensive testing and quality assurance</li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold">
                      Case Study: Globex Corporation
                    </h4>
                    <div className="flex gap-4">
                      <img
                        src="/placeholder.svg"
                        width={200}
                        height={150}
                        alt="Globex Corporation Case Study"
                        className="rounded-lg object-cover"
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Globex Corporation, a leading manufacturing
                        conglomerate, approached us to develop a custom
                        enterprise resource planning (ERP) system to streamline
                        their operations across multiple business units. Our
                        team worked closely with Globex's stakeholders to
                        understand their unique requirements and pain points,
                        and then designed and built a highly scalable and
                        user-friendly ERP solution. The new system enabled
                        Globex to centralize data management, automate key
                        business processes, and gain real-time visibility into
                        their operations. As a result, Globex experienced a 35%
                        improvement in operational efficiency and a 20%
                        reduction in administrative costs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Cloud Migration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We help you seamlessly migrate your infrastructure to the
                    cloud, ensuring optimal performance and security. Our cloud
                    experts work with you to assess your current IT environment,
                    identify the right cloud solutions, and develop a
                    comprehensive migration plan. We handle the entire process,
                    from infrastructure design and data migration to user
                    training and ongoing support, so you can focus on your core
                    business activities.
                  </p>
                  <ul className="list-disc pl-4 text-gray-500 dark:text-gray-400">
                    <li>Cloud infrastructure assessment and planning</li>
                    <li>Secure and efficient data migration to the cloud</li>
                    <li>
                      Optimization of cloud-based applications and services
                    </li>
                    <li>Ongoing cloud management and support</li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold">Case Study: Startup X</h4>
                    <div className="flex gap-4">
                      <img
                        src="/placeholder.svg"
                        width={200}
                        height={150}
                        alt="Startup X Case Study"
                        className="rounded-lg object-cover"
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Startup X, a fast-growing technology company, needed to
                        migrate their on-premises infrastructure to the cloud to
                        support their rapid expansion and enable greater
                        scalability and flexibility. Our team worked closely
                        with Startup X's IT team to develop a comprehensive
                        cloud migration strategy, leveraging a mix of public
                        cloud services and private cloud infrastructure. We
                        carefully planned and executed the data migration
                        process, ensuring minimal downtime and seamless
                        integration with their existing applications. The new
                        cloud-based infrastructure allowed Startup X to scale
                        their operations quickly, reduce IT maintenance costs by
                        30%, and improve overall system performance and
                        reliability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Managed Services</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our managed IT services provide 24/7 support and
                    maintenance, freeing up your team to focus on core business
                    activities. From network and server management to
                    cybersecurity and helpdesk support, our experts ensure your
                    IT infrastructure is running smoothly and securely. We
                    proactively monitor your systems, implement best practices,
                    and provide regular reporting to ensure your technology
                    investments are delivering maximum value.
                  </p>
                  <ul className="list-disc pl-4 text-gray-500 dark:text-gray-400">
                    <li>Comprehensive IT infrastructure management</li>
                    <li>Proactive monitoring and maintenance</li>
                    <li>Cybersecurity and compliance solutions</li>
                    <li>Helpdesk and end-user support</li>
                  </ul>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold">
                      Case Study: Acme Retail
                    </h4>
                    <div className="flex gap-4">
                      <img
                        src="/placeholder.svg"
                        width={200}
                        height={150}
                        alt="Acme Retail Case Study"
                        className="rounded-lg object-cover"
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Acme Retail, a growing retail chain, was struggling to
                        manage their IT infrastructure and support their
                        distributed workforce. They partnered with us to
                        implement our managed IT services solution. Our team
                        took over the day-to-day management of their network,
                        servers, and end-user devices, freeing up their internal
                        IT staff to focus on more strategic initiatives. We also
                        implemented robust cybersecurity measures, including
                        advanced threat detection and incident response
                        capabilities. As a result, Acme Retail experienced a 40%
                        reduction in IT-related downtime, a 25% improvement in
                        employee productivity, and a significant enhancement in
                        their overall data security posture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Services"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </>
  );
}
