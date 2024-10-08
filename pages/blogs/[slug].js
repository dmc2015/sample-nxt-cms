import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Head from 'next/head';

export default function Blog({ frontmatter, markdown }) {
  return (
    <div>
      <Head>
        {/* Ensure that the title is a single string */}
        <title>{`Demo Blog | ${frontmatter.title}`}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'));
  const frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInBlogs = fs.readdirSync('./content/blogs');

  const paths = filesInBlogs.map(file => {
    const filename = file.slice(0, file.indexOf('.'));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
