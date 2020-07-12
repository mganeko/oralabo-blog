import fs from "fs"

import Head from "next/head"
import Link from "next/link"

import Layout from "../components/Layout"
import { listContentFiles, readContentFiles, readContentFile } from "../lib/contentLoader"

export default function Home(props) {
  const { posts } = props
  return (
    <Layout title="">
      {posts.map((post) => <div
        key={post.slug}
        className="post-teaser"
      >
        <h2><Link href="/posts/[id]" as={`/posts/${post.slug}`}><a>{post.title}</a></Link></h2>
        <div><span>{post.published}</span></div>
        <div></div>
      </div>)}

      <style jsx>{`
        .post-teaser {
          margin-bottom: 2em;
        }

        .post-teaser h2 a {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      posts: await readContentFiles({ fs })
    }
  }
}
