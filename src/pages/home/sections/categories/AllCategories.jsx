import BlogCard from "../../../../components/BlogCard";
import FetchData from "../../../../api/fetchData";
import Loader from "../../../../components/Loader";

function AllCategories() {
  const { data: blogs, loading } = FetchData("blogs");

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
}

export default AllCategories;
