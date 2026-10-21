import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import "./BlogPreview.css";

// `posts` is prepared at build time in src/pages/index.astro:
// [{ slug, title, description, date, minutes, tags, cover: { src, width, height, alt } }]
const BlogPreview = ({ posts = [] }) => {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="blog-preview bg-white py-[60px] px-[30px] max-md:py-[40px] max-md:px-[20px]">
      <div className="max-w-[1140px] mx-auto">
        <SectionHeading label="BLOG" title="Son Yazılar" />

        <ul className="blog-preview-grid">
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`} className="blog-preview-card">
                {post.cover && (
                  <div className="blog-preview-media">
                    <img
                      src={post.cover.src}
                      alt={post.cover.alt}
                      width={post.cover.width}
                      height={post.cover.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="blog-preview-body">
                  {post.tags.length > 0 && <span className="blog-preview-tags">{post.tags.join(" · ")}</span>}
                  <h3 className="blog-preview-title">{post.title}</h3>
                  <p className="blog-preview-desc">{post.description}</p>
                  <span className="blog-preview-meta">
                    {post.date} · {post.minutes} dk okuma
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="blog-preview-more">
          <a href="/blog" className="blog-preview-btn">
            Tüm yazılar <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
