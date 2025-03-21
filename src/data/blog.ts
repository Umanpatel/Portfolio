import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  readingTime?: string;
}

interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

const POSTS_DIR = path.join(process.cwd(), "content/");

const prettyCodeOptions = {
  theme: "github-dark",
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
};

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const result = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypePrettyCode, prettyCodeOptions)
      .use(rehypeStringify)
      .process(content);

    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      content: result.toString(),
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(page = 1, limit = 10): Promise<{
  posts: BlogPostMetadata[];
  total: number;
  hasMore: boolean;
}> {
  try {
    const files = fs.readdirSync(POSTS_DIR);
    const posts: BlogPostMetadata[] = [];

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue;

      const fileContent = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data } = matter(fileContent);
      const slug = file.replace(".mdx", "");

      posts.push({
        slug,
        title: data.title,
        date: data.date,
        summary: data.summary,
      });
    }

    // Sort posts by date in descending order
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedPosts = posts.slice(start, end);

    return {
      posts: paginatedPosts,
      total: posts.length,
      hasMore: end < posts.length,
    };
  } catch (error) {
    console.error("Error loading posts:", error);
    return {
      posts: [],
      total: 0,
      hasMore: false,
    };
  }
}

export async function getBlogPosts(page = 1, limit = 10) {
  const { posts, total, hasMore } = await getAllPosts(page, limit);
  const postsWithContent = await Promise.all(
    posts.map(async (post) => {
      const fullPost = await getPost(post.slug);
      return fullPost;
    })
  );

  return {
    posts: postsWithContent.filter((post): post is BlogPost => post !== null),
    total,
    hasMore,
  };
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}