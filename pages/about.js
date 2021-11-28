
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout title="">
      <div>oralabo のブログです。</div>
      <div>React.jsを使ったブログのサンプル <a href="https://github.com/gh640/nextjs-blog-example-ja">gh640/nextjs-blog-example-ja</a>（MITライセンス）を利用しています</div>
      <div>
       また、以下の NPM パッケージを使用しています。
       <ul>
         <li>next</li>
         <li>react</li>
         <li>`react-dom`</li>
         <li>`remark`</li>
         <li>`remark-html`</li>
         <li>`remark-prism`</li>
         <li>gray-matter`</li>
       </ul>
      </div>
    </Layout>)
}

export default About
