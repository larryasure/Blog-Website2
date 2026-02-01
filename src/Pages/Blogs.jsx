import React from "react";
import { posts } from "../Data/SamplePosts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { containerVariants, itemVariants } from "../Data/Motion";
import BlogCard from "../Components/BlogCard";

export default function Blogs() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="min-h-screen px-8 py-5 bg-gray-50 "
      >
        <h1 className="text-3xl mb-8 font-semibold ">All Posts</h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {posts.map((post, ) => (
           <BlogCard key={post.id} post={post}/>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
