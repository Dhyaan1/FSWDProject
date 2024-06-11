import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import {
  FadeInWhenVisible,
  SlideRightWhenVisible,
} from "../FramerMotionCustomComponents/FramerWrappers";

export default function CareerDisplay() {
  return (
    <div
      id="Careers"
      className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join Our Team
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We're always on the lookout for talented individuals to join our
              growing team of IT consultants. Check out our current job openings
              and see if you have what it takes to be a part of our success
              story.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Job Openings
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FadeInWhenVisible delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Senior Software Engineer</CardTitle>
                    <CardDescription>
                      We're looking for an experienced software engineer to join
                      our team and help us build cutting-edge solutions for our
                      clients. You'll be responsible for designing and
                      implementing complex software systems, as well as
                      mentoring junior developers. Strong experience with
                      React.js, Node.js, and cloud technologies is a must.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href="#HowToApply"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    >
                      Apply Now
                    </Link>
                  </CardFooter>
                </Card>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Manager</CardTitle>
                    <CardDescription>
                      We're seeking an experienced project manager to lead our
                      client engagements. You'll be responsible for coordinating
                      cross-functional teams, managing project timelines and
                      budgets, and ensuring successful delivery of our IT
                      consulting services. Strong communication and
                      problem-solving skills are a must.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href="#HowToApply"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Apply Now
                    </Link>
                  </CardFooter>
                </Card>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.6}>
                <Card>
                  <CardHeader>
                    <CardTitle>Business Analyst</CardTitle>
                    <CardDescription>
                      We're seeking a talented business analyst to join our team
                      and help our clients identify their technology needs and
                      develop effective solutions. You'll be responsible for
                      conducting market research, gathering requirements, and
                      creating detailed business cases. Strong analytical and
                      communication skills are a must.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href="#HowToApply"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Apply Now
                    </Link>
                  </CardFooter>
                </Card>
              </FadeInWhenVisible>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Company Culture
            </h3>
            <div className="mt-6 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 grid gap-6">
              <SlideRightWhenVisible delay={0.2}>
                <div className="flex items-start gap-4">
                  <WalletIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Competitive Compensation</h4>
                    <p>
                      We offer competitive salaries and bonuses to attract and
                      retain top talent.
                    </p>
                  </div>
                </div>
              </SlideRightWhenVisible>
              <SlideRightWhenVisible delay={0.4}>
                <div className="flex items-start gap-4">
                  <ShieldCheckIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Comprehensive Benefits</h4>
                    <p>
                      Our comprehensive health insurance and retirement plans
                      ensure your well-being.
                    </p>
                  </div>
                </div>
              </SlideRightWhenVisible>
              <SlideRightWhenVisible delay={0.6}>
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Professional Development</h4>
                    <p>
                      We invest in your growth by providing access to
                      industry-leading training and conferences.
                    </p>
                  </div>
                </div>
              </SlideRightWhenVisible>
              <SlideRightWhenVisible delay={0.8}>
                <div className="flex items-start gap-4">
                  <UsersIcon className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Collaborative Culture</h4>
                    <p>
                      We believe in fostering a supportive and empowering work
                      environment where everyone can thrive.
                    </p>
                  </div>
                </div>
              </SlideRightWhenVisible>
            </div>
          </div>
          <div>
            <h3
              id="HowToApply"
              className="text-2xl font-bold tracking-tighter sm:text-3xl"
            >
              How to Apply
            </h3>
            <p className="mt-6 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              To apply for any of our open positions, please send your resume
              and a cover letter to{" "}
              <span className="font-medium text-gray-900 underline underline-offset-4 dark:text-gray-50">
                careers@company.com
              </span>
              . In your cover letter, please be sure to highlight your relevant
              skills and experience, as well as your interest in the role and
              our company. We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
