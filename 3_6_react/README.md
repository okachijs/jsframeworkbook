# 第6章 React 入門 & 徹底活用サンプルコード

「第6章 React 入門 & 徹底活用」で解説しているソースコードのサンプルコードを公開しています。

## Directory Structures

ディレクトリ構造は以下のとおりです。

```
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── Routes.tsx
│   ├── client.ts
│   ├── components
│   └── containers
├── src_making
│   ├── v0.1
│   ├── v0.2
│   ├── v0.3
│   ├── v0.4
│   ├── v0.5
│   └── v0.9
├── tsconfig.json
├── tslint.json
└── webpack.config.js
```

Directory | Description
:-------: | -----------
src | 完成後のアプリケーションのソースコードです
src_making | 完成前のアプリケーションのソースコードです
src_making/v0.1 | p83「チャンネル一覧 Component の実装」
src_making/v0.2 | p85「Routing設定 Component の実装」
src_making/v0.3 | p88「メッセージフィード Component の実装」
src_making/v0.4 | p94「メッセージフォーム Component の実装」
src_making/v0.5 | p99「Component間の連携」
src_making/v0.9 | v0.5 までの内容をまとめたもの

## npm Commands

`webpack-dev-server` を起動するには以下のコマンドを実行します。

```bash
npm run start
```

アプリケーションをビルドするには以下のコマンドを実行します。

```bash
npm run build
```
