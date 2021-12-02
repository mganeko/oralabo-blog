
# oralabo blog

oralabo が提供するアプリについてのブログです。

このブログは  [gh640/nextjs-blog-example-ja](https://github.com/gh640/nextjs-blog-example-ja)(MITライセンス)を利用して作成しています。

## LICENSE / ライセンス

- ブログの次のコンテンツは複製、再利用を禁止します
  - content/posts/*
  - public/images/*
- それ以外のブログ生成のコードは、フォーク元の[gh640/nextjs-blog-example-ja](https://github.com/gh640/nextjs-blog-example-ja)と同じく、MITライセンスです

- all blog contents are not allowed to copy/reuse.
  - content/posts/*
  - public/images/*
- other source code are MIT license, as well as [gh640/nextjs-blog-example-ja](https://github.com/gh640/nextjs-blog-example-ja)

## 使用ライブラリ

[gh640/nextjs-blog-example-ja](https://github.com/gh640/nextjs-blog-example-ja)と同じく、以下の NPM パッケージを使用しています。

- `next`
- `react`
- `react-dom`
- `remark`
- `remark-html`
- `remark-prism`
- `gray-matter`

Next.js を利用するために必要な `next` `react` `react-dom` の 3 つと、 frontmatter 付きの Markdown の HTML への変換に有用な `remark` `remark-html` `gray-matter` を使っています。
追加で、シンタックスハイライトに Prism.js を利用するための `remark-prism` を使っています。

自動テストには以下のパッケージを使用しています。

- `@babel/core`
- `@babel/preset-env`
- `@babel/preset-react`
- `babel-jest`
- `identity-obj-proxy`
- `jest`
- `react-test-renderer`

## TODO

- [x] image の左のマージン
- [x] about ページ
- [x] about ページへのリンク
- [x] favicon.icoを変更
- [x] 記事分割 -> アンカーと目次
- [x] プライバシーポリシー