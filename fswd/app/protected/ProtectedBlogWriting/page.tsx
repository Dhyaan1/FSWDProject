import BlogWrite from "@/components/custom-ui/BlogWrite/BlogWrite";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  return (
    <>
      <BlogWrite />
    </>
  );
}
