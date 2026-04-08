/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMagnifyingGlass,
  FaRegCalendar,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa6";

const BlogsSection = ({ blogsData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = [
    "All",
    ...new Set(blogsData.map((blog) => blog.category)),
  ];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const displayBlogs = filteredBlogs.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1536px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDE: Blog Grid */}
          <div className="lg:w-[75%]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {displayBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                    className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-indigo-100 transition-all duration-500"
                  >
                    {/* Image Section */}
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-indigo-600 text-[9px] font-black uppercase tracking-widest rounded-full shadow-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3 text-slate-400 text-[9px] font-bold uppercase tracking-widest font-inter">
                        <span className="flex items-center gap-1.5 font-bold">
                          <FaRegCalendar className="text-indigo-500" />{" "}
                          {blog.date}
                        </span>
                        <span>•</span>
                        <span>{blog.readTime || "6 min"}</span>
                      </div>

                      <h3 className="text-lg font-black text-slate-900 font-grotesk leading-tight tracking-tight mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2 h-12">
                        {blog.title}
                      </h3>

                      <p className="text-slate-500 font-inter text-xs line-clamp-2 mb-6 leading-relaxed opacity-80">
                        {blog.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-50">
                        <div className="flex items-center gap-2">
                          <img
                            src={blog.author.image}
                            className="w-7 h-7 rounded-full object-cover ring-2 ring-indigo-50"
                            alt=""
                          />
                          <span className="text-slate-900 text-[9px] font-black uppercase tracking-wider">
                            {blog.author.name}
                          </span>
                        </div>

                        {/* Premium Read More with Underline Slide Effect */}
                        <button className="cursor-pointer relative flex items-center gap-1.5 text-indigo-600 font-black text-[9px] uppercase tracking-widest group/link py-1 overflow-hidden">
                          <span className="relative z-10">Read More</span>
                          <FaChevronRight
                            size={8}
                            className="relative z-10 group-hover/link:translate-x-1 transition-transform"
                          />
                          {/* Animated Underline */}
                          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 origin-left"></span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Show More Button */}
            {visibleCount < filteredBlogs.length && (
              <div className="mt-16 text-center">
                <button
                  onClick={handleShowMore}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-slate-950 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-200"
                >
                  <FaPlus size={10} /> Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Sidebar */}
          <aside className="lg:w-[25%]">
            <div className="sticky top-28 space-y-8">
              {/* Search */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <h4 className="text-slate-900 font-black font-grotesk uppercase tracking-widest text-[10px] mb-4">
                  Discovery
                </h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search topics..."
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs font-inter focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all"
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(9);
                    }}
                  />
                  <FaMagnifyingGlass
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    size={12}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="text-slate-900 font-black font-grotesk uppercase tracking-widest text-[10px] mb-6 border-b border-slate-50 pb-3">
                  Categories Library
                </h4>
                <div className="flex flex-col gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setVisibleCount(9);
                      }}
                      className={`flex items-center justify-between py-2.5 px-4 rounded-xl transition-all duration-300 font-inter text-[11px] font-bold ${activeCategory === cat ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "text-slate-500 hover:bg-indigo-50"}`}
                    >
                      {cat}
                      <span
                        className={`text-[8px] px-1.5 py-0.5 rounded-md ${activeCategory === cat ? "bg-white/20" : "bg-slate-100"}`}
                      >
                        {cat === "All"
                          ? blogsData.length
                          : blogsData.filter((b) => b.category === cat).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
