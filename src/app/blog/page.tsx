import { BlogPosts } from "../components/posts"

export default function Page() {
  return (
    <section className="flex justify-center">
      <div className="mt-8">
      <h1 className="text-2xl mb-8 tracking-tighter font-medium">Our Posts</h1>
      <BlogPosts />
      </div>
    </section>
  )
}
