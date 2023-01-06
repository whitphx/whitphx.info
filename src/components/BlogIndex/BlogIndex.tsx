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
              <h3 className={styles.title}>
                <span itemProp="headline">{post.title}</span>
                <small className={styles.date}>
                  {formatDate(post.date, "yyyy/MM/dd")}
                </small>
              </h3>
            </Link>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default BlogIndex;
