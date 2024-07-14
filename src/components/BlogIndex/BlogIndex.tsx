import * as React from "react";
import { Link } from "gatsby";
import formatDate from "date-fns/format";
import { BiLinkExternal } from "react-icons/bi";
import * as styles from "./BlogIndex.module.scss";

interface BlogPost {
  slug: string;
  title: string;
  date: Date;
}
interface ExternalArticle {
  title: string;
  url: string;
  date: Date;
}

function BlogPostLink(props: { post: BlogPost }) {
  return (
    <Link to={props.post.slug} itemProp="url">
      <h3 className={styles.title}>
        <span itemProp="headline">{props.post.title}</span>
        <time className={styles.date}>
          {formatDate(props.post.date, "yyyy/MM/dd")}
        </time>
      </h3>
    </Link>
  );
}

function ExternalArticleLink(props: { article: ExternalArticle }) {
  const url = new URL(props.article.url);

  return (
    <a
      href={props.article.url}
      itemProp="url"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${props.article.title} on ${url.host}`}
    >
      <h3 className={styles.title}>
        <span className={styles.headline} itemProp="headline">
          {props.article.title}
          <small className={styles.externalSiteHost}>
            ({url.host})<BiLinkExternal />
          </small>
        </span>
        <time
          dateTime={props.article.date.toISOString()}
          className={styles.date}
        >
          {formatDate(props.article.date, "yyyy/MM/dd")}
        </time>
      </h3>
    </a>
  );
}

export interface BlogIndexProps {
  blogPosts: BlogPost[];
  externalArticles: ExternalArticle[];
}
function BlogIndex(props: BlogIndexProps) {
  const items: Array<BlogPost | ExternalArticle> = [
    ...props.blogPosts,
    ...props.externalArticles,
  ].sort((a, b) => b.date.getTime() - a.date.getTime());
  return (
    <ol className={styles.postList}>
      {items.map((post) => {
        const key = "slug" in post ? post.slug : post.url;
        return (
          <li key={key} className={styles.listItem}>
            <article itemScope itemType="http://schema.org/Article">
              {"slug" in post ? (
                <BlogPostLink post={post} />
              ) : (
                <ExternalArticleLink article={post} />
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
}

export default BlogIndex;
