# 3章「フロントエンドJavaScript開発のための環境構築」のサンプルコード

3章「フロントエンドJavaScript開発のための環境構築」で解説しているソースコードのサンプルコードを公開しています。

## ディレクトリ構成

```
.
├── dist
│   ├── css
│   │   └── style.css
│   └── js
│       └── bundle.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── css
│   │   └── style.css
│   └── js
│       ├── app.js
│       └── hello.js
└── webpack.config.js
```

## 実行方法

2_3_dev ディレクトリに移動しnpm インストールする

```
npm i
```

development モードでビルドする

```
npm run build:dev
```

production モードでビルドする

```
npm run build:prd
```

webpack-dev-server を起動する

```
npm run start
```
