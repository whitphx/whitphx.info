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
interface ExternalContent {
  title: string;
  url: string;
  date: Date;
  type: string | null;
}

const CONTENT_TYPE_EMOJI_MAP: Record<string, string> = {
  article: "📖",
  video: "🎥",
  podcast: "🎙️",
  presentation: "🖼️",
} as const;

function BlogPostLink(props: { post: BlogPost }) {
  return (
    <Link to={props.post.slug} itemProp="url">
      <h3 className={styles.title}>
        <span itemProp="headline" className={styles.headline}>
          {props.post.title}
        </span>
        <span className={styles.subData}>
          <span className={styles.emoji}>
            {CONTENT_TYPE_EMOJI_MAP["article"]}
          </span>
          <time
            className={styles.date}
            dateTime={props.post.date.toISOString()}
          >
            {formatDate(props.post.date, "yyyy/MM/dd")}
          </time>
        </span>
      </h3>
    </Link>
  );
}

function ExternalContentLink(props: { content: ExternalContent }) {
  const url = new URL(props.content.url);
  const subEmoji =
    (props.content.type && CONTENT_TYPE_EMOJI_MAP[props.content.type]) ??
    CONTENT_TYPE_EMOJI_MAP["article"];

  return (
    <a
      href={props.content.url}
      itemProp="url"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${props.content.title} on ${url.host}`}
    >
      <h3 className={styles.title}>
        <span className={styles.headline} itemProp="headline">
          {props.content.title}
          <small className={styles.externalSiteHost}>
            ({url.host})<BiLinkExternal />
          </small>
        </span>
        <span className={styles.subData}>
          <span className={styles.emoji}>{subEmoji}</span>
          <time
            dateTime={props.content.date.toISOString()}
            className={styles.date}
          >
            {formatDate(props.content.date, "yyyy/MM/dd")}
          </time>
        </span>
      </h3>
    </a>
  );
}

export interface BlogIndexProps {
  blogPosts: BlogPost[];
  externalContents: ExternalContent[];
}
function BlogIndex(props: BlogIndexProps) {
  const items: Array<BlogPost | ExternalContent> = [
    ...props.blogPosts,
    ...props.externalContents,
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
                <ExternalContentLink content={post} />
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
}

export default BlogIndex;
