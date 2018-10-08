# Part4 第9章 React Native入門＆徹底活用 サンプルコード

「Part4 第9章 React Native入門＆徹底活用 サンプルコード」で解説しているソースコードのサンプルコードを公開しています。

## ディレクトリ構造

```
├── README.md
├── images
├── NewProject
└── ReactNativeChat
```

Directory | Description
:-------: | -----------
images | サンプルアプリケーション開発で使用する画像を格納しています
NewProject | p172 「React Native 事始め」で解説しているサンプルコードのプロジェクトです
ReactNativeChat | p181「サンプルアプリケーションの実装で学ぶReact  Native」で解説しているサンプルコードのプロジェクトです

## Android Studio のバージョンについて

執筆時点（2018年3月）の最新バージョンは、`3.1` です。
現在（2018年5月8日）の最新バージョンは、`3.1.2` です。
バージョン `3.1.2` の Android Studio で9章のサンプルコードは問題なく動作します。


## サンプルアプリケーションの実行方法

p171 「React Nativeのインストール」を参考に、React Native の開発環境を用意してください。
その後、ディレクトリ `NewProject` もしくは、`ReactNativeChat` に移動してから、下記のコマンドを実行してください。

### iOSで実行
```bash
npm i
react-native run-ios
```

### Androidで実行
```bash
npm i
react-native run-android
```

`react-native run-android` を実行する前に、p173「Android  Studioをセットアップした方は...」以降を参考にAVDを起動するか、実機をPCに接続してください。