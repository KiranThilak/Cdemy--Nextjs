import {allBlogs} from "../../.contentlayer/generated";
import BlogCoverSection from "../components/BlogHome/BlogCoverSection";
import RecentPosts from "../components/BlogHome/RecentPosts";


export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <BlogCoverSection blogs={allBlogs} />
    <RecentPosts blogs={allBlogs} />

    </main>
  )
}
