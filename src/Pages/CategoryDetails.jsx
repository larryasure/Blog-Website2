import React from "react";
import { Link, useParams } from "react-router-dom";
import { containerVariants, itemVariants } from "../Data/Motion";
import { motion } from "framer-motion";
import { categories } from "../Data/Category";
import { posts } from "../Data/SamplePosts";

export default function CategoryDetails() {
  const { slug } = useParams();
  const category = categories.find((cat) => cat.slug === slug);

  const filteredPosts = posts.filter((post) => post.categorySlug === slug);

  if (!category) {
    return (
      <div className="flex items-center min-h-screen justify-center py-5">
        <h1 className="text-xl font-semibold">Category Not found</h1>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="bg-gray-50 px-8 mb-8 py-5"
      >
        <div className="mb-10">
          <span
            className={`${category.color} text-white text-md px-3 py-1 rounded-full inline-block mb-3`}
          >
            {category.name}
          </span>

          <h1 className="text-3xl font-semibold mb-3">  {filteredPosts.length} {category.name} Posts</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>
        {filteredPosts.length === 0 ? (
          <p>No posts in this category yet.</p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all block"
                >
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-semibold group-hover:text-blue-600 transition">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
