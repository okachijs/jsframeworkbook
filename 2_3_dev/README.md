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

npm インストール

```
npm i
```

developmentモードでビルドする

```
npm run build:dev
```

productionモードでビルドする

```
npm run build:prd
```

webpack-dev-serverを起動する

```
npm run start
```
