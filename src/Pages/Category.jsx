import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../Data/Category";
import { containerVariants, itemVariants } from "../Data/Motion";

export default function Category() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="min-h-screen px-8 py-5 bg-gray-50 "
      >
        <h1 className="text-3xl font-semibold mb-8 ">All Categories</h1>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 grid-cols-2 gap-8 "
          variants={containerVariants}
        >
          {categories.map((cat) =>
            <motion.div key={cat.id} variants={itemVariants}>
              <Link to={`/category/${cat.slug}`}  className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white">
                

               <div className="relative h-40">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <span
                    className={`${cat.color} text-white text-md px-3 py-1 rounded-full`}
                  >
                    {cat.name}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-600 text-md truncate">
                  {cat.description}
                </p>
              </div>
              </Link>
              
          </motion.div> )}
        </motion.div>
      </motion.div>
    </>
  );
}
