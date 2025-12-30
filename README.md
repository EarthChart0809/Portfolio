# EarthChart's Portfolio
ポートフォリオサイト（HTML / CSS / JavaScript）です。梅（ume）をモチーフにしたオープニングアニメーションや、自作プロジェクト紹介をまとめた作品集です。
https://earthchart0809.github.io/Portfolio/


## 概要
高専・部活動で取り組んだ作品を公開するために作成。オープニングは「和」の雰囲気でサイト訪問者の印象を強めるために実装しました。学校・部活での経験（OpenCV、Raspberry Pi、Pygame、Qt 等）を分かりやすく提示している。


## 主要機能・特徴
- オープニングアニメーション
  - SVG と CSS アニメーション、JSで線・花びら・文字の出現を制御（opening.js / opening.css）。
- 花びらの降下アニメーション（画面全体に流れる演出）（animation.js / main.css）。
- プロジェクト紹介ページ（複数ページ切替、APNGプレビュー、スクリーンショット）。
- レスポンシブ対応（desktop / tablet / mobile）。
- 作品ごとの詳細（使用技術、所要時間、デモ画像、GitHubリンク）。


## 使用した技術スタック
- 言語: HTML5, CSS3, JavaScript（ES6）
- 外部ライブラリ / サービス:
  - FontAwesome（アイコン）
  - Google Fonts / Typekit（フォント読み込み）
- 画像・アニメ素材: repository 内の image/ フォルダ
- （個別プロジェクトで使用）Python / Pygame, Three.js, Qt, OpenCV, Raspberry Pi 等


## 技術的に注力した点 / チャレンジ
- SVGを動的に生成して線を引くことで、中心から放射状の装飾を柔軟に制御。
- 文字の出現や花びらの出現タイミングをJSでシーケンス制御し、印象的なフェードインを実現。
- APNG をホバーで表示するUIにより、静止画だけでなくアニメーションを見せられるように実装。
- レスポンシブ調整（opening のサイズや center 要素の位置）をCSSメディアクエリで最適化。


## ファイル構成
- index.html — メインページ（opening + portfolio）
- main.css, opening.css, responsive.css — スタイル
- opening.js, animation.js, page_switching.js — スクリプト
- image/ — スクリーンショット・アイコン・背景画像（例: portfolio-picture.png, ステージ2.png, DotEditor_animation.png）
- README.md — このファイル


## ライセンス / 著作権
- © 2025 Kamei Ryo  
- 画像・ドット絵等の素材の再利用は作者に確認してください。


## 連絡先
- GitHub: https://github.com/EarthChart0809  
- Email: rs23039k@st.omu.ac.jp