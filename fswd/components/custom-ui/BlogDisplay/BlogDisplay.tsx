"use client";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { AnimatePresence } from "framer-motion";
import BlogContentShowModal from "../BlogContentShowModal/BlogContentShowModal";

export default function BlogDisplay(props) {
  const [posts, setPosts] = useState<any[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("posts").select("*");
      setPosts(data);
    };
    getData();
  }, []);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const blogPosts = posts ? posts : [];

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
  const handlePostClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 md:py-16 lg:py-20 min-h-[100dvh]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2
            id="BlogView"
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2"
          >
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
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer"
                  onClick={() => handlePostClick(post)}
                >
                  <img
                    loading="lazy"
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
      <AnimatePresence>
        {showModal && (
          <BlogContentShowModal
            handleClose={() => handleModalClose()}
            SelectedPostData={selectedPost}
          />
        )}
      </AnimatePresence>
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
