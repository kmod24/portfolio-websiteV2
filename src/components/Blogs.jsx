import { Link } from "react-router-dom";
import { posts } from "../blogData";

export const Blogs = () => {
  return (
    <section className="blogs">
      {posts.map((post) => (
        <Link to={`/blogs/${post.slug}`} className="visit-arrow">
            <div className="blogs-box" key={post.slug} >
          <p className="blog-caption">{post.title}</p>
          <p className="blog-date">{post.date}</p>
          <p className="blog-description">{post.summary}</p>
        </div>

        </Link>
        
      ))}
    </section>
  );
};
