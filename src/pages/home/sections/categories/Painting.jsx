import FetchData from "../../../../api/fetchData";
import BlogCard from "../../../../components/BlogCard";

function Painting() {
  const { data: blogs, loading } = FetchData("blogs");

  if (loading) {
    <div>loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-6 gap-5">
        {blogs.map((x, index) => (
          <BlogCard
            key={index}
            id={x.id}
            blogTitle={x.blogTitle}
            nameOfWriter={x.nameOfWriter}
            description={x.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Painting;
