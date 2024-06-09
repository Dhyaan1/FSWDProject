import { createClient } from "@/utils/supabase/server";
import { SubmitButton } from "@/app/login/submit-button";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default function BlogWrite() {
  const publishPost = async (formData: FormData) => {
    "use server";

    const Title = formData.get("title") as string;
    const Author = formData.get("author") as string;
    const Excerpt = formData.get("excerpt") as string;
    const Content = formData.get("content") as string;
    const Tags = Array.from(formData.getAll("tags")) as string[];
    const Category = formData.get("category") as string;
    const Image = formData.get("image") as File;
    const ImageName = `blog_${Date.now() + Image.name}`;

    const supabase = createClient();

    const { data: storageData, error: storageError } = await supabase.storage
      .from("blog")
      .upload(ImageName, Image, {
        cacheControl: "3600",
        upsert: false,
      });
    const { data: URLData } = supabase.storage
      .from("blog")
      .getPublicUrl(ImageName);

    const { error: insertError } = await supabase.from("posts").insert([
      {
        title: Title,
        author: Author,
        excerpt: Excerpt,
        content: Content,
        category: Category,
        tags: Tags,
        image: URLData.publicUrl,
      },
    ]);

    revalidatePath("/protected/ProtectedBlogWriting");
    if (insertError) {
      console.error("Error publishing post:", insertError.message);
      return;
    } else if (storageError) {
      console.error("Error uploading image:", storageError.message);
      return;
    }

    return redirect("/protected#BlogView");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <Link
        href="/protected"
        className="absolute left-0 top-0 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Write a New Blog Post
          </h1>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
            Share your expertise and insights with our audience.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="title"
                type="text"
                required
                name="title"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="author"
              >
                Author
              </label>
              <input
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="author"
                type="text"
                required
                name="author"
              />
            </div>
            <div className="sm:col-span-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="excerpt"
              >
                Excerpt
              </label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="excerpt"
                rows={3}
                required
                name="excerpt"
              />
            </div>
            <div className="sm:col-span-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="content"
              >
                Content
              </label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="content"
                rows={8}
                required
                name="content"
              />
            </div>
            <div className="sm:col-span-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="tags"
              >
                Category
              </label>
              <select
                id="category"
                required
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Digital Transformation">
                  Digital Transformation
                </option>
                <option value="Data Analytics">Data Analytics</option>
              </select>
            </div>
            <div className="sm:col-span-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="tags"
              >
                Tags(For PC: Select multiple tags by holding Ctrl/Cmd)
              </label>
              <select
                id="tags"
                multiple
                required
                name="tags"
                className="h-48 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="cloud">Cloud</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="security">Security</option>
                <option value="risk-management">Risk Management</option>
                <option value="digital-transformation">
                  Digital Transformation
                </option>
                <option value="strategy">Strategy</option>
                <option value="data">Data</option>
                <option value="analytics">Analytics</option>
                <option value="decision-making">Decision Making</option>
              </select>
            </div>
            <div className="sm:col-span-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="image"
              >
                Featured Image
              </label>
              <div className="flex items-center space-x-3">
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="image"
                  type="file"
                  required
                  name="image"
                  accept="image/png, image/jpeg, image/gif"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <SubmitButton
              formAction={publishPost}
              className="bg-[#00b894] text-white rounded-md px-4 py-2 text-foreground mb-2"
              pendingText="Publishing..."
            >
              Publish
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
