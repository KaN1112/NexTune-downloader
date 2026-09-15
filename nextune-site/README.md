# NexTune ダウンロードサイト

NexTune正式リリース向けの1ページ静的サイトです。HTML・CSS・Vanilla JavaScriptのみを使用しています。ビルド、npm、外部フォント、CDNは不要です。既存サイトのコードは使用せず、新規作成しています。

## ファイル構成

```text
nextune-site/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
├─ .gitignore
├─ .nojekyll
├─ assets/
│  ├─ icons/
│  │  ├─ nextune-icon.png
│  │  ├─ favicon.ico
│  │  ├─ favicon-32x32.png
│  │  ├─ apple-touch-icon.png
│  │  ├─ icon-192.png
│  │  └─ icon-512.png
│  └─ og/
│     └─ nextune-og.png
└─ downloads/
   └─ README.md
```

## ローカルでの確認

`index.html`をダブルクリックしてブラウザーで開いてください。ネット接続やローカルサーバーは不要です。メニューとFAQも直接開いた状態で動作します。JavaScript無効時もナビゲーションとFAQは利用できます。

## 公開前に必要な作業

### 1. 正式なexeを配置

正式なセットアップファイルをdownloads/へ配置してください。

配置先は `downloads/NexTune_1.0.0_x64-setup.exe` です。ダミー・空ファイルは作成していません。未配置の状態では「Download for Windows」からダウンロードできません。サイト上部のボタンはページ内のDownloadセクションに移動します。

### 2. リンクの公開状態を確認

次のリンクはご指定のURLをそのまま設定しています。作成環境では外部取得に失敗したため、リンク先の存在・一般公開状態は確認できていません。公開前にログアウト状態で開いてください。

- https://github.com/KaN1112/nextune-app
- https://github.com/KaN1112/nextune-app/blob/main/CODE_SIGNING_POLICY.md
- https://github.com/KaN1112/nextune-app/blob/main/SECURITY.md

## GitHubへのアップロード

1. サイト用の新しいGitHubリポジトリを作成します。GitHub Freeでの公開はPublicリポジトリを使用してください。
2. `nextune-site`フォルダの**中身**をリポジトリ直下へアップロードします。`index.html`が直下にある状態にしてください。
3. `assets`、`downloads`、`.gitignore`、`.nojekyll`も含めてコミットします。ZIPそのものをアップロードしてもサイトにはなりません。
4. 大きなexeがブラウザーのアップロード上限を超える場合はGitクライアントを使用してください。GitHubのファイル上限を超える配布物はGitHub Releasesなどへの配置とリンク変更が別途必要です。

## GitHub Pagesで公開

1. リポジトリの **Settings → Pages** を開きます。
2. **Build and deployment → Source → Deploy from a branch** を選びます。
3. Branchを **main**、フォルダを **/(root)** にして **Save** を押します。
4. 公開処理が完了したら、Pages設定に表示されたURLでサイトを開きます。
5. アイコン・メニュー・FAQと、実際のセットアップファイルのダウンロードを確認します。

想定URLは `https://ユーザー名.github.io/リポジトリ名/` です。サイト内ファイル参照はすべて相対パスなので、リポジトリ名のサブディレクトリでも動作します。`.nojekyll`はJekyllによる処理を避けるためのファイルです。

公式手順: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## バージョン変更

`index.html`内の `VERSION` コメント付近を編集します。

1. `id="release-version"` の `1.0.0` を新バージョンに変更。
2. 直前のダウンロードリンク `href="downloads/NexTune_1.0.0_x64-setup.exe"` を実際のファイル名に変更。
3. 対応するexeを`downloads/`へ配置。
4. `downloads/README.md`のファイル名も更新。

バージョンはJavaScriptによる自動取得ではなくHTML内に明示しています。

## favicon・アイコンの変更

同梱アイコンは提供された`NexTune-icon-assets.zip`の正式素材です。再デザインはしていません。ヘッダー・Hero・Download・Footerでは同じ正式アイコンの192px版を使用しています。

- `nextune-icon.png`: 提供されたマスターPNG
- `favicon.ico`: 提供されたICO
- `favicon-32x32.png`: 32×32
- `apple-touch-icon.png`: 180×180
- `icon-192.png`: 192×192
- `icon-512.png`: 512×512

交換時は同じデザインから各サイズを書き出して、同名ファイルを置き換えてください。ブラウザーが古いfaviconを保持する場合はキャッシュを消して確認してください。OG画像も同じアイコンで更新します。

## OGP / Twitter Card

共有用画像は`assets/og/nextune-og.png`（1200×630）です。提供アイコンをそのまま使用し、サイトと同じコピーを配置しています。

ご指定の「相対パスのみ」に合わせ、`og:image`と`twitter:image`も相対パスです。ただしSNSクローラーでは絶対URLが必要になるため、**SNS共有画像の表示はこの状態では保証できません**。公開URL確定後、SNS対応を優先する場合は、この2つのcontentだけを公開先の完全なHTTPS URLへ変更し、`og:url`も公開ページURLで追加してください。ページのCSS・画像・JavaScript・exeリンクは相対パスのままにします。公開後のSNS側の確認は未実施です。

## コード署名

公開画面に「署名済み」「SmartScreen警告が出ない」という断定はありません。`index.html`のDownload内に、コメントアウトした`Code signing`セクションを用意しています。SignPath Foundationの正式承認と、配布するexeの署名完了を確認してからコメントを解除してください。将来のクレジット文は指定どおり記載済みです。

## 確認結果

- Microsoft Edge（Chromium）で1920 / 1440 / 1366 / 1024 / 768 / 430 / 390pxを確認。横スクロール、右方向の要素のはみ出し、画像の読み込み失敗なし。
- PC・スマートフォンのページ全体を画像で確認。
- スマホメニューの開閉、Escapeによる閉鎖、ページ内リンク選択時の閉鎖を確認。
- FAQ全4項目のEnter・Space操作と開閉、動きを減らす設定での動作を確認。
- `index.html`の直接表示、ローカルHTTPのサブディレクトリ表示、JavaScript無効時のFAQを確認。
- 390px・文字サイズ200%で横スクロールなし。
- JavaScript構文チェックとブラウザー実行時エラーの確認を実施。エラーなし。
- ローカル参照先で未存在なのは、未提供の正式exeのみ。内部リンク先と各アイコン・OG画像を確認。

公開作業、実exeの動作検証、SNSでのカード表示確認は含みません。
