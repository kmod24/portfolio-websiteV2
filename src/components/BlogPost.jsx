import { useParams } from "react-router-dom";
import { posts } from "../blogData";

export const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found.</p>;

  return (
    <section className="blogs">
      <div>
        <p className="blog-caption blog-post">{post.title}</p>
        <p className="blog-date">{post.date}</p>
        <p className="blog-content">
          {post.content}
        </p>
      </div>
    </section>
  );
};
