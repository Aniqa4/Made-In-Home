import BlogCard from "../../../../components/BlogCard";

function AllCategories() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default AllCategories;
