import fs from "fs"

import Head from "next/head"
import Link from "next/link"

import Layout from "../../components/Layout"
import Pager from "../../components/Pager"
import { listContentFiles, readContentFiles, readContentFile } from "../../lib/contentLoader"

const COUNT_PER_PAGE = 10

export default function Archive(props) {
  const { posts, page, total, perPage } = props
  return (
    <Layout title="アーカイブ">
      {posts.map((post) => <div
        key={post.slug}
        className="post-teaser"
      >
        <h2><Link href="/posts/[id]" as={`/posts/${post.slug}`}><a>{post.title}</a></Link></h2>
        <div><span>{post.published}</span></div>
      </div>)}

      <Pager
        page={page} total={total} perPage={perPage}
        href="/archive/[page]"
        asCallback={(page) => `/archive/${page}`}
      />

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
  const page = parseInt(params.page, 10)
  const end = COUNT_PER_PAGE * page
  const start = end - COUNT_PER_PAGE
  const posts = await readContentFiles({ fs })

  return {
    props: {
      posts: posts.slice(start, end),
      page,
      total: posts.length,
      perPage: COUNT_PER_PAGE,
    }
  }
}

export async function getStaticPaths() {
  const posts = await listContentFiles({ fs })
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
  const paths = pages.map((page) => ({
    params: { page: `${page}` }
  }))

  return { paths: paths, fallback: false }
}

/**
 * ユーティリティ: 1 から指定された整数までを格納した Array を返す
 */
function range(stop) {
  if (typeof stop !== 'number') {
    throw `Invalid types [${a}, ${stop}].`
  }

  if (stop < 1) {
    throw `Invalid range [${a}, ${stop}].`
  }

  return Array.from(iterator(stop))

  function* iterator(max) {
    let n = 1;
    while (true) {
      yield n
      if (n >= max) {
        break
      }

      n++
    }
  }
}
