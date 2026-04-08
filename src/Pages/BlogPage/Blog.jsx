import React from 'react';
import PageHeader from '../../Components/Shared/OtherPages/OtherPageHeader/PageHeader';

import { blogsData } from './BlogsData';
import BlogsSection from '../../Components/BlogPagesComponet/TrendingBlogs/BlogsSection';
const BlogPage = () => {

 const blogStats = [
    { label: "Articles", value: "500+" },
    { label: "Expert Authors", value: "999+" }
  ];

  return (
    <section className="min-h-screen">
      <PageHeader 
        watermark="BLOGS"
        titleFirstLine="Exploring"
        titleSecondLine="The Future Of"
        titleThirdLine="Tech & Data."
        subtitle="Deep dives into software architecture, high-end UI/UX trends, and the strategic engineering that powers modern digital industry leaders."
        stats={blogStats}
      />
      
    



     <BlogsSection blogsData={blogsData}  />
    </section>
  );
};

export default BlogPage;