import React from 'react'
import { Link } from 'react-router-dom'
import { itemVariants } from '../Data/Motion'
import { motion } from 'framer-motion'

export default function BlogCard({post}) {
  return (
    <>
     <motion.div  variants={itemVariants} >
              <Link
                to={`/blogs/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="overflow-hidden rounded-t-2xl ">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-40 w-full object-cover object-bottom group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 ">
                  <span
                    className={`${post.categoryColor}  text-white text-[16px] px-3 py-1 rounded-full inline-block mb-3`}
                  >
                    {post.category}
                  </span>

                  <h2 className="text-xl font-semibold group-hover:text-blue-600 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
    </>
  )
}
