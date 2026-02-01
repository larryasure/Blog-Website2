import { useParams } from "react-router-dom";
import { posts } from "../Data/SamplePosts";
import { motion } from "framer-motion";

export default function BlogDetails() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Post not found 😢</p>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[60vh] overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto px-6 py-12"
      >
        <span
          className={`${post.categoryColor} text-white text-xs px-3 py-1 rounded-full inline-block mb-4`}
        >
          {post.category}
        </span>

        <h1 className="text-4xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="text-gray-700 leading-relaxed space-y-4">
          {post.content}
        </div>
      </motion.div>
    </article>
  );
}
