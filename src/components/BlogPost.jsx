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
        <div className="blog-content">
      {post.content.split("\n\n").map((para, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: para.trim() }} />
      ))}
    </div>
      </div>
    </section>
  );
};
