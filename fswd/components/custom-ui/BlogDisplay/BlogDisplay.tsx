"use client";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function BlogDisplay(props) {
  const [posts, setPosts] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("posts").select("*");
      setPosts(data);
    };
    getData();
    console.log(" Data:" + posts);
  }, []);
  console.log(" Data:" + posts);
  console.log(posts);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const blogPosts = posts ? posts : [];

  // const DummyBlogPosts = [
  //   {
  //     id: 1,
  //     title: "Unlocking the Power of Cloud Computing for Your Business",
  //     excerpt:
  //       "Discover how cloud computing can revolutionize your business operations and unlock new opportunities for growth and efficiency.",
  //     author: "John Doe",
  //     publish_date: "2023-05-15",
  //     category: "Cloud Computing",
  //     tags: ["cloud", "technology", "business"],
  //     content:
  //       "Cloud computing has become a game-changer in the world of business, offering a wide range of benefits that can transform the way organizations operate. In this blog post, we'll explore the power of cloud computing and how it can unlock new opportunities for your business...",
  //     image: "/placeholder.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "Mastering Cybersecurity: Protecting Your Business from Threats",
  //     excerpt:
  //       "Learn effective strategies and best practices to safeguard your business from the ever-evolving landscape of cyber threats.",
  //     author: "Jane Smith",
  //     publish_date: "2023-04-20",
  //     category: "Cybersecurity",
  //     tags: ["security", "technology", "risk-management"],
  //     content:
  //       "In today's digital landscape, cybersecurity has become a critical concern for businesses of all sizes. Cyber threats are constantly evolving, and organizations must stay vigilant to protect their valuable data, systems, and reputation. In this blog post, we'll explore the essential strategies and best practices for mastering cybersecurity and safeguarding your business...",
  //     image: "/placeholder.svg",
  //   },
  //   {
  //     id: 3,
  //     title: "Driving Digital Transformation: Strategies for Success",
  //     excerpt:
  //       "Discover proven approaches to successfully navigate the challenges of digital transformation and position your business for long-term growth.",
  //     author: "Michael Johnson",
  //     publish_date: "2023-03-10",
  //     category: "Digital Transformation",
  //     tags: ["digital-transformation", "technology", "strategy"],
  //     content:
  //       "In today's rapidly evolving business landscape, digital transformation has become a crucial driver of success. Companies that embrace the power of technology and digital solutions are poised to gain a competitive edge, improve operational efficiency, and better serve their customers. In this blog post, we'll explore the key strategies and best practices for driving successful digital transformation within your organization...",
  //     image: "/placeholder.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Leveraging Data Analytics for Informed Decision-Making",
  //     excerpt:
  //       "Discover how data analytics can empower your business to make data-driven decisions and gain a competitive advantage.",
  //     author: "Sarah Lee",
  //     publish_date: "2023-02-25",
  //     category: "Data Analytics",
  //     tags: ["data", "analytics", "decision-making"],
  //     content:
  //       "In the age of information, data has become a valuable asset for businesses of all sizes. By harnessing the power of data analytics, organizations can gain valuable insights, make informed decisions, and drive strategic growth. In this blog post, we'll explore the transformative potential of data analytics and how it can empower your business to achieve its goals...",
  //     image: "/placeholder.svg",
  //   },
  // ];
  const filteredPosts = useMemo(() => {
    return blogPosts?.filter((post) => {
      if (
        selectedCategories?.length > 0 &&
        !selectedCategories?.includes(post?.category)
      ) {
        return false;
      }
      if (
        selectedTags?.length > 0 &&
        !selectedTags?.every((tag) => post?.tags?.includes(tag))
      ) {
        return false;
      }
      return true;
    });
  }, [selectedCategories, selectedTags, blogPosts]);
  const handleCategorySelect = (category) => {
    if (selectedCategories?.includes(category)) {
      setSelectedCategories(
        selectedCategories?.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleTagSelect = (tag) => {
    if (selectedTags?.includes(tag)) {
      setSelectedTags(selectedTags?.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 md:py-16 lg:py-20 min-h-[100dvh]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
            Our Latest Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our latest blog posts and stay up-to-date with the latest
            trends and insights in the IT consulting industry.
          </p>
        </div>
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <h3 className="text-gray-900 dark:text-gray-100 font-medium">
                Categories:
              </h3>
              <div className="flex items-center space-x-4 flex-wrap">
                <button
                  className={`px-4 py-2 rounded-md transition-colors border border-gray-300 dark:border-gray-700 ${
                    selectedCategories?.length === 0
                      ? "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                      : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setSelectedCategories([])}
                >
                  All
                </button>
                {[
                  "Cloud Computing",
                  "Cybersecurity",
                  "Digital Transformation",
                  "Data Analytics",
                ]?.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-md transition-colors border border-gray-300 dark:border-gray-700 ${
                      selectedCategories?.includes(category)
                        ? "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                        : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <h3 className="text-gray-900 dark:text-gray-100 font-medium">
                Tags:
              </h3>
              <div className="flex items-center space-x-4 flex-wrap">
                <button
                  className={`px-4 py-2 rounded-md transition-colors border border-gray-300 dark:border-gray-700 ${
                    selectedTags?.length === 0
                      ? "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                      : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setSelectedTags([])}
                >
                  All Tags
                </button>
                {[
                  "cloud",
                  "technology",
                  "business",
                  "security",
                  "risk-management",
                  "digital-transformation",
                  "strategy",
                  "data",
                  "analytics",
                  "decision-making",
                ]?.map((tag) => (
                  <button
                    key={tag}
                    className={`px-4 py-2 rounded-md transition-colors border border-gray-300 dark:border-gray-700 ${
                      selectedTags?.includes(tag)
                        ? "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                        : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleTagSelect(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {filteredPosts?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {filteredPosts?.map((post) => (
                <div
                  key={post?.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={post?.image ? post?.image : "/placeholder.svg"}
                    alt={post?.title}
                    width={640}
                    height={360}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {post?.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post?.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <div>{post?.author}</div>
                      <div>{post?.publish_date}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post?.category && (
                        <div className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-600 dark:text-gray-400">
                          {post?.category}
                        </div>
                      )}
                      {post?.tags?.map((tag) => (
                        <div
                          key={tag}
                          className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-600 dark:text-gray-400"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No blog posts found for the selected category/tags.
              </p>
            </div>
          )}
        </div>
        {props?.IsSignedIn ? (
          <Link
            href="/protected/ProtectedBlogWriting"
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
            prefetch={false}
          >
            Write A Blog <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/login"
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
            prefetch={false}
          >
            Sign In To Write A Blog <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
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
