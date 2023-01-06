import * as React from "react";
import { Link } from "gatsby";
import formatDate from "date-fns/format";
import * as styles from "./BlogIndex.module.scss";

interface Post {
  slug: string;
  title: string;
  date: Date;
}
export interface BlogIndexProps {
  posts: Post[];
}
function BlogIndex(props: BlogIndexProps) {
  return (
    <ol className={styles.postList}>
      {props.posts.map((post) => (
        <li key={post.slug} className={styles.listItem}>
          <article itemScope itemType="http://schema.org/Article">
            <Link to={post.slug} itemProp="url">
              <h3 className={styles.title} itemProp="headline">
                {post.title}
              </h3>
              <span className={styles.date}>
                {formatDate(post.date, "yyyy/MM/dd")}
              </span>
            </Link>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default BlogIndex;
