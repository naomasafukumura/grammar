# Real Grammar - 英語フラッシュカード

MasaEnglish の文法教材。フラッシュカード形式で英語の文法を学習できる静的サイト。

## デプロイ先

- Vercel: https://flashcardoutput.vercel.app
- リポジトリ: https://github.com/naomasafukumura/grammar

## 構成

- 全10章（文型・副詞・時制・助動詞・疑問文・to不定詞・接続詞・that・疑問詞+SV・関係代名詞）
- 各章にフラッシュカード（日本語→英語）+ 音声再生
- 各章にテスト機能（名前入力 → 20問ランダム出題 → 回答確認・修正 → GASへ結果送信）
- テスト途中離脱の復元機能（localStorage）

## テスト結果の送信先

- GAS Web App: `https://script.google.com/macros/s/AKfycby22oH6WDDAV1HkhLEixncUDVV213t17F-nLLPiCopBKf9kYsDkLbxYnqjCULPr7cKm/exec`
- 送信データ: 名前、タイムスタンプ、テストタイトル、全回答（ユーザー回答・正解・日本語文）
- `mode: 'no-cors'` で送信（レスポンス読み取り不可、送信成功はfetchエラーなしで判定）

## ファイル構成

```
index.html                  # トップページ（章一覧）
manual.html                 # マニュアル
listening.html              # 聞き流し機能
js/
  transition.js             # フラッシュカードデータ（JSON埋め込み）+ 共通ロジック
  test-persistence.js       # テスト途中復元機能（localStorage）
audio/
  chapter1/ ~ chapter10/    # 各章の音声ファイル（mp3）
test-1.html ~ test-10.html  # 各章のテスト
test-5-part1.html等         # 問題数が多い章は前半・後半に分割
random_chpater*.html        # 章別ランダム学習
*.html                      # 各文法項目のフラッシュカード
```

## 修正履歴

### 2026-03-13: Vercel化対応
- `test-persistence.js`: fetchに `mode: 'no-cors'` を追加（CORS エラー修正）
  - 元のHTML内の `submitResults` は `mode: 'no-cors'` あり
  - `test-persistence.js` の上書き版に `mode: 'no-cors'` が抜けていた
  - これがないとVercel上でGASへの送信がCORSポリシーで100%失敗する
- `test-.html`: 空のテストページを削除（data-chapter-id が空、問題0問）

## 既知の注意点

- `transition.js` は約400KB（全フラッシュカードデータをJSON文字列として埋め込み）
- 音声ファイル合計約54MB
- `allTitlesData` 配列末尾に `"TRUE"`, `"FALSE"`, `""` 等のゴミデータあり（CSV由来、動作には影響なし）
- `random_chpater*.html` のファイル名に typo あり（chpater → chapter）。リンクも同じtypoなので動作に影響なし
