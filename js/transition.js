// const fs = require('fs');
const flashcard_data_json = `
[
    {
        "number": "1",
        "english_sentence": "I sleep early.",
        "japanese_translation": "早く寝る。",
        "title": "第一文型",
        "audio_folder_name": "pattern1",
        "chapter": "chapter1"
    },
    {
        "number": "2",
        "english_sentence": "I eat a lot.",
        "japanese_translation": "僕はたくさん食べるよ。",
        "title": "第一文型",
        "audio_folder_name": "pattern1",
        "chapter": "chapter1"
    },
    {
        "number": "3",
        "english_sentence": "I wake up at 7.",
        "japanese_translation": "7時に起きるよ。",
        "title": "第一文型",
        "audio_folder_name": "pattern1",
        "chapter": "chapter1"
    },
    {
        "number": "4",
        "english_sentence": "I drive on weekends.",
        "japanese_translation": "週末はドライブするよ。",
        "title": "第一文型",
        "audio_folder_name": "pattern1",
        "chapter": "chapter1"
    },
    {
        "number": "5",
        "english_sentence": "I work a lot.",
        "japanese_translation": "たくさん働いているよ。",
        "title": "第一文型",
        "audio_folder_name": "pattern1",
        "chapter": "chapter1"
    },
    {
        "number": "6",
        "english_sentence": "I travel every year.",
        "japanese_translation": "毎年旅行するよ。",
        "title": "第一文型",
        "audio_folder_name": "pattern1",
        "chapter": "chapter1"
    },
    {
        "number": "7",
        "english_sentence": "I walk every morning.",
        "japanese_translation": "毎朝歩くよ。",
        "title": "第一文型",
        "audio_folder_name": "pattern1",
        "chapter": "chapter1"
    },
    {
        "number": "8",
        "english_sentence": "I sleep a lot.",
        "japanese_translation": "たくさん寝てるよ。",
        "title": "第一文型",
        "audio_folder_name": "pattern1",
        "chapter": "chapter1"
    },
    {
        "number": "1",
        "english_sentence": "I am tired.",
        "japanese_translation": "疲れたよ。",
        "title": "第二文型",
        "audio_folder_name": "pattern2",
        "chapter": "chapter1"
    },
    {
        "number": "2",
        "english_sentence": "I am sad.",
        "japanese_translation": "悲しいよ。",
        "title": "第二文型",
        "audio_folder_name": "pattern2",
        "chapter": "chapter1"
    },
    {
        "number": "3",
        "english_sentence": "You look happy.",
        "japanese_translation": "嬉しそうだね。",
        "title": "第二文型",
        "audio_folder_name": "pattern2",
        "chapter": "chapter1"
    },
    {
        "number": "4",
        "english_sentence": "You look busy.",
        "japanese_translation": "忙しそうだね。",
        "title": "第二文型",
        "audio_folder_name": "pattern2",
        "chapter": "chapter1"
    },
    {
        "number": "5",
        "english_sentence": "She is angry.",
        "japanese_translation": "彼女は怒ってるよ。",
        "title": "第二文型",
        "audio_folder_name": "pattern2",
        "chapter": "chapter1"
    },
    {
        "number": "6",
        "english_sentence": "He is kind.",
        "japanese_translation": "彼は優しいよ。",
        "title": "第二文型",
        "audio_folder_name": "pattern2",
        "chapter": "chapter1"
    },
    {
        "number": "7",
        "english_sentence": "That sounds good.",
        "japanese_translation": "それ、いいね。",
        "title": "第二文型",
        "audio_folder_name": "pattern2",
        "chapter": "chapter1"
    },
    {
        "number": "8",
        "english_sentence": "That sounds exciting.",
        "japanese_translation": "それ、ワクワクするね。",
        "title": "第二文型",
        "audio_folder_name": "pattern2",
        "chapter": "chapter1"
    },
    {
        "number": "1",
        "english_sentence": "I like snacks.",
        "japanese_translation": "お菓子が好き。",
        "title": "第三文型",
        "audio_folder_name": "pattern3",
        "chapter": "chapter1"
    },
    {
        "number": "2",
        "english_sentence": "I like cats.",
        "japanese_translation": "猫が好きなんだ。",
        "title": "第三文型",
        "audio_folder_name": "pattern3",
        "chapter": "chapter1"
    },
    {
        "number": "3",
        "english_sentence": "I read books.",
        "japanese_translation": "本読むよ。",
        "title": "第三文型",
        "audio_folder_name": "pattern3",
        "chapter": "chapter1"
    },
    {
        "number": "4",
        "english_sentence": "I need coffee.",
        "japanese_translation": "コーヒーが必要だよ。",
        "title": "第三文型",
        "audio_folder_name": "pattern3",
        "chapter": "chapter1"
    },
    {
        "number": "5",
        "english_sentence": "I love music.",
        "japanese_translation": "音楽が大好きなんだ。",
        "title": "第三文型",
        "audio_folder_name": "pattern3",
        "chapter": "chapter1"
    },
    {
        "number": "6",
        "english_sentence": "I bake cakes.",
        "japanese_translation": "ケーキ焼くよ。",
        "title": "第三文型",
        "audio_folder_name": "pattern3",
        "chapter": "chapter1"
    },
    {
        "number": "7",
        "english_sentence": "I have two brothers.",
        "japanese_translation": "兄弟が2人いるよ。",
        "title": "第三文型",
        "audio_folder_name": "pattern3",
        "chapter": "chapter1"
    },
    {
        "number": "8",
        "english_sentence": "I have kids.",
        "japanese_translation": "子どもがいるよ。",
        "title": "第三文型",
        "audio_folder_name": "pattern3",
        "chapter": "chapter1"
    },
    {
        "number": "1",
        "english_sentence": "Close the window.",
        "japanese_translation": "窓閉めてー。",
        "title": "命令文",
        "audio_folder_name": "order",
        "chapter": "chapter1"
    },
    {
        "number": "2",
        "english_sentence": "Wash your hands.",
        "japanese_translation": "手洗って。",
        "title": "命令文",
        "audio_folder_name": "order",
        "chapter": "chapter1"
    },
    {
        "number": "3",
        "english_sentence": "Call me later.",
        "japanese_translation": "あとで電話してね。",
        "title": "命令文",
        "audio_folder_name": "order",
        "chapter": "chapter1"
    },
    {
        "number": "4",
        "english_sentence": "Try this soup!",
        "japanese_translation": "このスープ食べてみて！",
        "title": "命令文",
        "audio_folder_name": "order",
        "chapter": "chapter1"
    },
    {
        "number": "5",
        "english_sentence": "Use this towel.",
        "japanese_translation": "このタオル使って。",
        "title": "命令文",
        "audio_folder_name": "order",
        "chapter": "chapter1"
    },
    {
        "number": "6",
        "english_sentence": "Clean your room.",
        "japanese_translation": "部屋片付けてね。",
        "title": "命令文",
        "audio_folder_name": "order",
        "chapter": "chapter1"
    },
    {
        "number": "7",
        "english_sentence": "Turn off the TV.",
        "japanese_translation": "テレビ消してー。",
        "title": "命令文",
        "audio_folder_name": "order",
        "chapter": "chapter1"
    },
    {
        "number": "8",
        "english_sentence": "Take off your shoes.",
        "japanese_translation": "靴を脱いで。",
        "title": "命令文",
        "audio_folder_name": "order",
        "chapter": "chapter1"
    },
    {
        "number": "1",
        "english_sentence": "I get up at six every day.",
        "japanese_translation": "毎日6時に起きるよ。",
        "title": "時間を表す副詞",
        "audio_folder_name": "timeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "I sleep early.",
        "japanese_translation": "私は早めに寝るんだ。",
        "title": "時間を表す副詞",
        "audio_folder_name": "timeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "I go shopping on weekends.",
        "japanese_translation": "週末は買い物にいくよ。",
        "title": "時間を表す副詞",
        "audio_folder_name": "timeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "I go for a walk in the morning.",
        "japanese_translation": "朝は散歩に行くんだ。",
        "title": "時間を表す副詞",
        "audio_folder_name": "timeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "I clean in the evening every day.",
        "japanese_translation": "毎日夕方に掃除をするよ。",
        "title": "時間を表す副詞",
        "audio_folder_name": "timeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "I woke up at 7 this morning.",
        "japanese_translation": "今朝7時に起きたよ。",
        "title": "時間を表す副詞",
        "audio_folder_name": "timeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "I read books at night.",
        "japanese_translation": "夜に本を読むんだ。",
        "title": "時間を表す副詞",
        "audio_folder_name": "timeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "I drink coffee every morning.",
        "japanese_translation": "毎朝コーヒー飲むよ。",
        "title": "時間を表す副詞",
        "audio_folder_name": "timeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "I sleep here.",
        "japanese_translation": "ここで寝てるんだ。",
        "title": "場所を表す副詞",
        "audio_folder_name": "placeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "I buy groceries at the supermarket.",
        "japanese_translation": "あのスーパーで買い物をするんだ。",
        "title": "場所を表す副詞",
        "audio_folder_name": "placeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "You can find the bathroom upstairs.",
        "japanese_translation": "トイレは上の階にあります。",
        "title": "場所を表す副詞",
        "audio_folder_name": "placeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "I had a test at university today.",
        "japanese_translation": "今日大学でテストがあった。",
        "title": "場所を表す副詞",
        "audio_folder_name": "placeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "I love the cake there.",
        "japanese_translation": "あそこのケーキ大好きなの。",
        "title": "場所を表す副詞",
        "audio_folder_name": "placeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "I study English in the living room.",
        "japanese_translation": "リビングで英語を勉強しているんだ。",
        "title": "場所を表す副詞",
        "audio_folder_name": "placeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "I often drink coffee at this cafe.",
        "japanese_translation": "このカフェでよくコーヒー飲んでるんだ。",
        "title": "場所を表す副詞",
        "audio_folder_name": "placeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "Let's meet at Shinjuku station.",
        "japanese_translation": "新宿駅で会おうよ！",
        "title": "場所を表す副詞",
        "audio_folder_name": "placeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "Thanks a lot.",
        "japanese_translation": "ほんとありがと。",
        "title": "どれくらいを表す副詞",
        "audio_folder_name": "muchAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "I eat a little.",
        "japanese_translation": "少食なんだ。",
        "title": "どれくらいを表す副詞",
        "audio_folder_name": "muchAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "I sleep a lot.",
        "japanese_translation": "睡眠はたくさん取るよ。",
        "title": "どれくらいを表す副詞",
        "audio_folder_name": "muchAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "I speak English a little bit.",
        "japanese_translation": "ほんの少し英語が話せます。",
        "title": "どれくらいを表す副詞",
        "audio_folder_name": "muchAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "I talk a lot.",
        "japanese_translation": "私はおしゃべりだよ。",
        "title": "どれくらいを表す副詞",
        "audio_folder_name": "muchAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "I drink a little.",
        "japanese_translation": "お酒はちょっとだけ飲むよ。",
        "title": "どれくらいを表す副詞",
        "audio_folder_name": "muchAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "I read a lot of books every day.",
        "japanese_translation": "毎日たくさん本を読むよ。",
        "title": "どれくらいを表す副詞",
        "audio_folder_name": "muchAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "I drink a little coffee.",
        "japanese_translation": "コーヒーはちょっとだけ飲むよ。",
        "title": "どれくらいを表す副詞",
        "audio_folder_name": "muchAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "I eat quickly.",
        "japanese_translation": "食べるのは早いよ。",
        "title": "どのようにを表す副詞",
        "audio_folder_name": "howAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "I eat slowly.",
        "japanese_translation": "食べるの遅いんだよね。",
        "title": "どのようにを表す副詞",
        "audio_folder_name": "howAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "I walk slowly.",
        "japanese_translation": "歩くのゆっくりなんだよね。",
        "title": "どのようにを表す副詞",
        "audio_folder_name": "howAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "You walk fast.",
        "japanese_translation": "歩くの速いね！",
        "title": "どのようにを表す副詞",
        "audio_folder_name": "howAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "I studied hard last night.",
        "japanese_translation": "昨日の夜めっちゃ勉強したんだ。",
        "title": "どのようにを表す副詞",
        "audio_folder_name": "howAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "I slept well.",
        "japanese_translation": "よく寝れたよ。",
        "title": "どのようにを表す副詞",
        "audio_folder_name": "howAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "I made up with my husband peacefully.",
        "japanese_translation": "旦那と平和に仲直りした。",
        "title": "どのようにを表す副詞",
        "audio_folder_name": "howAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "Please speak out loud.",
        "japanese_translation": "はっきりと話してください。",
        "title": "どのようにを表す副詞",
        "audio_folder_name": "howAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "I studied hard at home last night.",
        "japanese_translation": "昨夜、家で一生懸命勉強した。",
        "title": "副詞を置く順番",
        "audio_folder_name": "orderAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "I worked late in the office yesterday.",
        "japanese_translation": "昨日、オフィスで遅くまで仕事をした。",
        "title": "副詞を置く順番",
        "audio_folder_name": "orderAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "I often shop at the mall.",
        "japanese_translation": "よくそのモールで買い物をする。",
        "title": "副詞を置く順番",
        "audio_folder_name": "orderAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "I shopped a lot at the grocery store today.",
        "japanese_translation": "今日、スーパーでたくさん買い物をした。",
        "title": "副詞を置く順番",
        "audio_folder_name": "orderAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "She cried a lot in her room last night.",
        "japanese_translation": "昨夜彼女は部屋ですごく泣いていた。",
        "title": "副詞を置く順番",
        "audio_folder_name": "orderAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "I studied hard in the library yesterday.",
        "japanese_translation": "昨日、図書館で一生懸命勉強した。",
        "title": "副詞を置く順番",
        "audio_folder_name": "orderAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "I watched a movie with my family last weekend.",
        "japanese_translation": "先週末、家族と映画を観た。",
        "title": "副詞を置く順番",
        "audio_folder_name": "orderAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "I played video games with my brother all day.",
        "japanese_translation": "一日中、弟とビデオゲームをした。",
        "title": "副詞を置く順番",
        "audio_folder_name": "orderAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "I usually cook.",
        "japanese_translation": "普段は料理するよ。",
        "title": "頻度を表す副詞",
        "audio_folder_name": "frequencyAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "I sometimes take a walk.",
        "japanese_translation": "たまに散歩するよ。",
        "title": "頻度を表す副詞",
        "audio_folder_name": "frequencyAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "I often make mistakes.",
        "japanese_translation": "よくミスしちゃうんだよね。",
        "title": "頻度を表す副詞",
        "audio_folder_name": "frequencyAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "I occasionally go back to my hometown.",
        "japanese_translation": "時々実家に帰るよ。",
        "title": "頻度を表す副詞",
        "audio_folder_name": "frequencyAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "I rarely take a rest.",
        "japanese_translation": "めったに休まないよ。",
        "title": "頻度を表す副詞",
        "audio_folder_name": "frequencyAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "He usually eats breakfast at home.",
        "japanese_translation": "彼はだいたい家で朝ごはんを食べるよ。",
        "title": "頻度を表す副詞",
        "audio_folder_name": "frequencyAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "I sometimes speak English to my kids.",
        "japanese_translation": "たまに子供達に英語で話すよ。",
        "title": "頻度を表す副詞",
        "audio_folder_name": "frequencyAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "I never drink coffee.",
        "japanese_translation": "コーヒーは絶対飲まないよ。",
        "title": "頻度を表す副詞",
        "audio_folder_name": "frequencyAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "I'm really hungry.",
        "japanese_translation": "めっちゃお腹すいた。",
        "title": "強調を表す副詞 (形容詞修飾)",
        "audio_folder_name": "emphasis1Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "This dress is too tight.",
        "japanese_translation": "このドレス、きつすぎる。",
        "title": "強調を表す副詞 (形容詞修飾)",
        "audio_folder_name": "emphasis1Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "That's completely fine.",
        "japanese_translation": "全然だいじょうぶだよ。",
        "title": "強調を表す副詞 (形容詞修飾)",
        "audio_folder_name": "emphasis1Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "The coffee is very strong.",
        "japanese_translation": "このコーヒー、すごく濃いね。",
        "title": "強調を表す副詞 (形容詞修飾)",
        "audio_folder_name": "emphasis1Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "It's too late.",
        "japanese_translation": "遅すぎるよ。",
        "title": "強調を表す副詞 (形容詞修飾)",
        "audio_folder_name": "emphasis1Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "This song is really catchy.",
        "japanese_translation": "この曲、めっちゃ頭に残るね。",
        "title": "強調を表す副詞 (形容詞修飾)",
        "audio_folder_name": "emphasis1Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "Her story was so funny.",
        "japanese_translation": "彼女の話、めっちゃおもしろかった。",
        "title": "強調を表す副詞 (形容詞修飾)",
        "audio_folder_name": "emphasis1Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "She was so angry.",
        "japanese_translation": "彼女はすごく怒ってた。",
        "title": "強調を表す副詞 (形容詞修飾)",
        "audio_folder_name": "emphasis1Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "I really like this cake.",
        "japanese_translation": "このケーキ、めっちゃ好き。",
        "title": "強調を表す副詞 (動詞修飾)",
        "audio_folder_name": "emphasis2Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "I really enjoyed it.",
        "japanese_translation": "すごく楽しかったよ。",
        "title": "強調を表す副詞 (動詞修飾)",
        "audio_folder_name": "emphasis2Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "You should definitely go to Okinawa.",
        "japanese_translation": "絶対に沖縄行ったほうがいいよ。",
        "title": "強調を表す副詞 (動詞修飾)",
        "audio_folder_name": "emphasis2Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "She absolutely loves coffee.",
        "japanese_translation": "彼女、コーヒーが大〜好きなのよ。",
        "title": "強調を表す副詞 (動詞修飾)",
        "audio_folder_name": "emphasis2Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "I completely forgot about it.",
        "japanese_translation": "それ、完全にわすれてた。",
        "title": "強調を表す副詞 (動詞修飾)",
        "audio_folder_name": "emphasis2Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "I completely understood.",
        "japanese_translation": "完全に理解した。",
        "title": "強調を表す副詞 (動詞修飾)",
        "audio_folder_name": "emphasis2Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "I totally get it.",
        "japanese_translation": "すんごいわかるよ。",
        "title": "強調を表す副詞 (動詞修飾)",
        "audio_folder_name": "emphasis2Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "I totally agree with you.",
        "japanese_translation": "完全に君に同意だよ。",
        "title": "強調を表す副詞 (動詞修飾)",
        "audio_folder_name": "emphasis2Adverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "Actually, I went to Nagoya last month.",
        "japanese_translation": "実は名古屋に先月行ったの。",
        "title": "態度を表す副詞",
        "audio_folder_name": "attitudeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "2",
        "english_sentence": "Honestly, I don't like studying.",
        "japanese_translation": "正直、勉強は嫌いだ。",
        "title": "態度を表す副詞",
        "audio_folder_name": "attitudeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "3",
        "english_sentence": "Fortunately, I have good neighbors.",
        "japanese_translation": "ありがたいことに、ご近所さんがいい人ばかりなんだ。",
        "title": "態度を表す副詞",
        "audio_folder_name": "attitudeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "4",
        "english_sentence": "Surprisingly, he passed the exam.",
        "japanese_translation": "驚くかもしれないけど、彼ね、試験受かったんだよ！",
        "title": "態度を表す副詞",
        "audio_folder_name": "attitudeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "5",
        "english_sentence": "Normally, I take a lesson once a week.",
        "japanese_translation": "普段は週に一回レッスンを受けるよ。",
        "title": "態度を表す副詞",
        "audio_folder_name": "attitudeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "6",
        "english_sentence": "Fortunately, I didn't get hurt.",
        "japanese_translation": "幸いなことに、怪我はしなかった。",
        "title": "態度を表す副詞",
        "audio_folder_name": "attitudeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "7",
        "english_sentence": "Unfortunately, I already have plans tomorrow.",
        "japanese_translation": "残念なことに、明日はもう予定が入っている。",
        "title": "態度を表す副詞",
        "audio_folder_name": "attitudeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "8",
        "english_sentence": "For me, I prefer homemade food.",
        "japanese_translation": "私的には、手作りのごはんの方がいいな。",
        "title": "態度を表す副詞",
        "audio_folder_name": "attitudeAdverb",
        "chapter": "chapter2"
    },
    {
        "number": "1",
        "english_sentence": "I eat rice every day.",
        "japanese_translation": "毎日ごはん食べるよ。",
        "title": "現在形(一般動詞)",
        "audio_folder_name": "generalVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I drink coffee in the morning.",
        "japanese_translation": "朝はコーヒー飲むよ。",
        "title": "現在形(一般動詞)",
        "audio_folder_name": "generalVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I watch TV at night.",
        "japanese_translation": "夜はテレビ見るよ。",
        "title": "現在形(一般動詞)",
        "audio_folder_name": "generalVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I sometimes read books.",
        "japanese_translation": "たまに本読むよ。",
        "title": "現在形(一般動詞)",
        "audio_folder_name": "generalVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I love Korean TV shows.",
        "japanese_translation": "韓国ドラマが大好きです。",
        "title": "現在形(一般動詞)",
        "audio_folder_name": "generalVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I buy groceries on weekends.",
        "japanese_translation": "週末に食料品を買うよ。",
        "title": "現在形(一般動詞)",
        "audio_folder_name": "generalVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I don't study English at night.",
        "japanese_translation": "夜は英語は勉強しないよ。",
        "title": "現在形(一般動詞)",
        "audio_folder_name": "generalVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I don't understand the question.",
        "japanese_translation": "その質問が理解できません。",
        "title": "現在形(一般動詞)",
        "audio_folder_name": "generalVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I'm always busy.",
        "japanese_translation": "私は、いつも忙しい。",
        "title": "現在形(be動詞)",
        "audio_folder_name": "beVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I'm not hungry now.",
        "japanese_translation": "今はお腹すいてないかな。",
        "title": "現在形(be動詞)",
        "audio_folder_name": "beVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I'm good at sports.",
        "japanese_translation": "スポーツが得意だよ。",
        "title": "現在形(be動詞)",
        "audio_folder_name": "beVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I'm normally at home on weekends.",
        "japanese_translation": "週末はだいたい家にいるよ。",
        "title": "現在形(be動詞)",
        "audio_folder_name": "beVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I'm not interested in that movie.",
        "japanese_translation": "その映画にはあんまり興味ないよ。",
        "title": "現在形(be動詞)",
        "audio_folder_name": "beVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I'm excited about the trip.",
        "japanese_translation": "旅行が楽しみだよ。",
        "title": "現在形(be動詞)",
        "audio_folder_name": "beVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "You're good at singing!",
        "japanese_translation": "歌を歌うのが上手だね。",
        "title": "現在形(be動詞)",
        "audio_folder_name": "beVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "You're good at cooking.",
        "japanese_translation": "あなたは料理は得意だよね。",
        "title": "現在形(be動詞)",
        "audio_folder_name": "beVerbPresentTense",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I was really tired last night.",
        "japanese_translation": "昨日の夜はめっちゃ疲れてたよ。",
        "title": "過去形(be動詞)",
        "audio_folder_name": "beVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I was not hungry in the morning.",
        "japanese_translation": "朝はお腹すいてなかったんだよね。",
        "title": "過去形(be動詞)",
        "audio_folder_name": "beVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I was happy with the result.",
        "japanese_translation": "結果には満足してたよ。",
        "title": "過去形(be動詞)",
        "audio_folder_name": "beVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I was good at sports.",
        "japanese_translation": "運動は得意だったよ。",
        "title": "過去形(be動詞)",
        "audio_folder_name": "beVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I was busy all day today.",
        "japanese_translation": "今日は一日中バタバタしてたよ。",
        "title": "過去形(be動詞)",
        "audio_folder_name": "beVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I was surprised by the news.",
        "japanese_translation": "そのニュースにはびっくりしたよ。",
        "title": "過去形(be動詞)",
        "audio_folder_name": "beVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "He was so kind.",
        "japanese_translation": "彼はすごく親切だったよ。",
        "title": "過去形(be動詞)",
        "audio_folder_name": "beVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "My daughter was a bit angry this morning.",
        "japanese_translation": "娘が今朝ちょっと怒っていた。",
        "title": "過去形(be動詞)",
        "audio_folder_name": "beVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I ate too much last night.",
        "japanese_translation": "昨日の夜、食べすぎたよ。",
        "title": "過去形(一般動詞)",
        "audio_folder_name": "generalVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I didn't drink coffee this morning.",
        "japanese_translation": "今朝はコーヒー飲まなかったよ。",
        "title": "過去形(一般動詞)",
        "audio_folder_name": "generalVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I watched a movie with my family last night.",
        "japanese_translation": "昨夜、家族と映画見たよ。",
        "title": "過去形(一般動詞)",
        "audio_folder_name": "generalVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I read the book a long time ago.",
        "japanese_translation": "その本、だいぶ前に読んだよ。",
        "title": "過去形(一般動詞)",
        "audio_folder_name": "generalVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I cleaned the kitchen after dinner.",
        "japanese_translation": "晩ごはんの後にキッチン掃除したよ。",
        "title": "過去形(一般動詞)",
        "audio_folder_name": "generalVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I didn't buy anything at the store.",
        "japanese_translation": "お店では何も買わなかったよ。",
        "title": "過去形(一般動詞)",
        "audio_folder_name": "generalVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I did the laundry yesterday.",
        "japanese_translation": "昨日は洗濯したよ。",
        "title": "過去形(一般動詞)",
        "audio_folder_name": "generalVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I bought some vegetables and eggs.",
        "japanese_translation": "野菜と卵を買ったよ。",
        "title": "過去形(一般動詞)",
        "audio_folder_name": "generalVerbPastTense",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I am eating lunch.",
        "japanese_translation": "今お昼ごはん食べてるよ。",
        "title": "現在進行形(肯定文)",
        "audio_folder_name": "affirmativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I am drinking coffee.",
        "japanese_translation": "今コーヒー飲んでるよ。",
        "title": "現在進行形(肯定文)",
        "audio_folder_name": "affirmativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I am watching TV.",
        "japanese_translation": "今テレビ見てるよ。",
        "title": "現在進行形(肯定文)",
        "audio_folder_name": "affirmativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I am reading a book.",
        "japanese_translation": "今本読んでるよ。",
        "title": "現在進行形(肯定文)",
        "audio_folder_name": "affirmativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I am cleaning the kitchen.",
        "japanese_translation": "今キッチン掃除してるよ。",
        "title": "現在進行形(肯定文)",
        "audio_folder_name": "affirmativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I am buying groceries.",
        "japanese_translation": "今食料品買ってるよ。",
        "title": "現在進行形(肯定文)",
        "audio_folder_name": "affirmativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I am cooking dinner.",
        "japanese_translation": "今晩ごはん作ってるよ。",
        "title": "現在進行形(肯定文)",
        "audio_folder_name": "affirmativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I am washing the dishes.",
        "japanese_translation": "今お皿洗ってるよ。",
        "title": "現在進行形(肯定文)",
        "audio_folder_name": "affirmativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I'm not wearing that shirt right now.",
        "japanese_translation": "今そのシャツは着てないよ。",
        "title": "現在進行形(否定文)",
        "audio_folder_name": "negativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I'm not watching TV right now.",
        "japanese_translation": "今はテレビ見てないよ。",
        "title": "現在進行形(否定文)",
        "audio_folder_name": "negativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I'm not feeling good.",
        "japanese_translation": "気分が良くないんだよね。",
        "title": "現在進行形(否定文)",
        "audio_folder_name": "negativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I'm not lying!",
        "japanese_translation": "嘘ついてないよ！",
        "title": "現在進行形(否定文)",
        "audio_folder_name": "negativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I'm not talking about that.",
        "japanese_translation": "その話してるんじゃないよ。",
        "title": "現在進行形(否定文)",
        "audio_folder_name": "negativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I'm not sleeping.",
        "japanese_translation": "寝てないよ！",
        "title": "現在進行形(否定文)",
        "audio_folder_name": "negativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I'm not crying.",
        "japanese_translation": "泣いてないよ。",
        "title": "現在進行形(否定文)",
        "audio_folder_name": "negativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I'm not doing anything now.",
        "japanese_translation": "今は何もしてないよ。",
        "title": "現在進行形(否定文)",
        "audio_folder_name": "negativeSentenceContinuousTense",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I'll make some tea.",
        "japanese_translation": "お茶いれるね。",
        "title": "willの肯定文",
        "audio_folder_name": "affirmativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I'll call her later.",
        "japanese_translation": "あとで彼女に電話するよ。",
        "title": "willの肯定文",
        "audio_folder_name": "affirmativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I'll do the dishes.",
        "japanese_translation": "お皿洗っとくね。",
        "title": "willの肯定文",
        "audio_folder_name": "affirmativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I'll take out the trash.",
        "japanese_translation": "ゴミ出しとくね。",
        "title": "willの肯定文",
        "audio_folder_name": "affirmativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I'll go shopping now.",
        "japanese_translation": "今から買い物行ってくるね。",
        "title": "willの肯定文",
        "audio_folder_name": "affirmativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I'll clean the room later.",
        "japanese_translation": "あとで部屋を掃除するよ。",
        "title": "willの肯定文",
        "audio_folder_name": "affirmativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I'll answer the door.",
        "japanese_translation": "私が玄関出るよ。",
        "title": "willの肯定文",
        "audio_folder_name": "affirmativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I'll wait for you here.",
        "japanese_translation": "ここで待ってるね。",
        "title": "willの肯定文",
        "audio_folder_name": "affirmativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I won't forgive him.",
        "japanese_translation": "彼のことは許さないよ。",
        "title": "willの否定文",
        "audio_folder_name": "negativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I won't talk to him anymore.",
        "japanese_translation": "彼とはもう話さないよ。",
        "title": "willの否定文",
        "audio_folder_name": "negativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I won't forget this time.",
        "japanese_translation": "今回は忘れないから。",
        "title": "willの否定文",
        "audio_folder_name": "negativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I won't go there again.",
        "japanese_translation": "もうそこには行かないよ。",
        "title": "willの否定文",
        "audio_folder_name": "negativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I won't buy it again.",
        "japanese_translation": "もうそれは買わないよ。",
        "title": "willの否定文",
        "audio_folder_name": "negativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I won't say it twice.",
        "japanese_translation": "同じことは2回言わないよ。",
        "title": "willの否定文",
        "audio_folder_name": "negativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I won't be late again.",
        "japanese_translation": "もう遅刻しないよ。",
        "title": "willの否定文",
        "audio_folder_name": "negativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I won't let you down.",
        "japanese_translation": "君のことがっかりはさせないよ。",
        "title": "willの否定文",
        "audio_folder_name": "negativeSentenceWill",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I'm gonna visit my parents next week.",
        "japanese_translation": "来週、実家に行くつもりなんだ。",
        "title": "gonnaの肯定文",
        "audio_folder_name": "gonnapositive",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I'm gonna clean the balcony this weekend.",
        "japanese_translation": "今週末にベランダ掃除するよ。",
        "title": "gonnaの肯定文",
        "audio_folder_name": "gonnapositive",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I'm gonna see my friend tomorrow.",
        "japanese_translation": "明日、友達に会うんだ。",
        "title": "gonnaの肯定文",
        "audio_folder_name": "gonnapositive",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I'm gonna go to the dentist on Friday.",
        "japanese_translation": "金曜日に歯医者行く予定だよ。",
        "title": "gonnaの肯定文",
        "audio_folder_name": "gonnapositive",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I'm gonna buy a new microwave next month.",
        "japanese_translation": "来月、新しい電子レンジ買うつもり。",
        "title": "gonnaの肯定文",
        "audio_folder_name": "gonnapositive",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I'm gonna get a haircut next Saturday.",
        "japanese_translation": "来週の土曜に髪切りに行くよ。",
        "title": "gonnaの肯定文",
        "audio_folder_name": "gonnapositive",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I'm gonna bake a cake for his birthday.",
        "japanese_translation": "彼の誕生日にケーキ焼こうと思ってるよ。",
        "title": "gonnaの肯定文",
        "audio_folder_name": "gonnapositive",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I'm gonna take the kids to the zoo on Sunday.",
        "japanese_translation": "日曜日に子どもたちを動物園に連れてくよ。",
        "title": "gonnaの肯定文",
        "audio_folder_name": "gonnapositive",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I'm not gonna cook tonight.",
        "japanese_translation": "今夜はごはん作らないよ。",
        "title": "gonnaの否定文",
        "audio_folder_name": "gonnanegative",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I'm not gonna buy the bag.",
        "japanese_translation": "そのバッグは買わないよ。",
        "title": "gonnaの否定文",
        "audio_folder_name": "gonnanegative",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I'm not gonna go out today.",
        "japanese_translation": "今日は出かけないよ。",
        "title": "gonnaの否定文",
        "audio_folder_name": "gonnanegative",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I'm not gonna go there.",
        "japanese_translation": "そこには行かないよ。",
        "title": "gonnaの否定文",
        "audio_folder_name": "gonnanegative",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I'm not gonna say sorry this time.",
        "japanese_translation": "今回は謝らないよ。",
        "title": "gonnaの否定文",
        "audio_folder_name": "gonnanegative",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I'm not gonna wake up early tomorrow.",
        "japanese_translation": "明日は早起きしないよ。",
        "title": "gonnaの否定文",
        "audio_folder_name": "gonnanegative",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I'm not gonna watch that drama anymore.",
        "japanese_translation": "あのドラマ、もう見ないよ。",
        "title": "gonnaの否定文",
        "audio_folder_name": "gonnanegative",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I'm not gonna lie to you.",
        "japanese_translation": "君に嘘はつかないよ。",
        "title": "gonnaの否定文",
        "audio_folder_name": "gonnanegative",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I've just arrived at the hotel.",
        "japanese_translation": "ちょうどホテルに着いたよ。",
        "title": "現在完了形肯定文",
        "audio_folder_name": "havepositive",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I've just had lunch.",
        "japanese_translation": "ちょうどお昼ごはん食べたとこ。",
        "title": "現在完了形肯定文",
        "audio_folder_name": "havepositive",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I've just talked to my mom.",
        "japanese_translation": "ちょうどお母さんと話したとこだよ。",
        "title": "現在完了形肯定文",
        "audio_folder_name": "havepositive",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I've just taken a shower.",
        "japanese_translation": "今シャワー浴びたばっかりだよ。",
        "title": "現在完了形肯定文",
        "audio_folder_name": "havepositive",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I've watched the movie before.",
        "japanese_translation": "その映画、前に見たことあるよ。",
        "title": "現在完了形肯定文",
        "audio_folder_name": "havepositive",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I've met her before.",
        "japanese_translation": "彼女には以前に会ったことあるよ。",
        "title": "現在完了形肯定文",
        "audio_folder_name": "havepositive",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I've tried the restaurant before.",
        "japanese_translation": "そのレストラン行ったことあるよ。",
        "title": "現在完了形肯定文",
        "audio_folder_name": "havepositive",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I've cooked this dish many times.",
        "japanese_translation": "この料理、何回も作ったことあるよ。",
        "title": "現在完了形肯定文",
        "audio_folder_name": "havepositive",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I haven't made dinner yet.",
        "japanese_translation": "まだ晩ごはん作ってないよ。",
        "title": "現在完了形否定文",
        "audio_folder_name": "havenegative",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I haven't done the laundry today.",
        "japanese_translation": "今日はまだ洗濯してないよ。",
        "title": "現在完了形否定文",
        "audio_folder_name": "havenegative",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I haven't replied to her message.",
        "japanese_translation": "まだ彼女のメッセージに返事してないよ。",
        "title": "現在完了形否定文",
        "audio_folder_name": "havenegative",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I haven't taken a shower yet.",
        "japanese_translation": "まだシャワー浴びてないよ。",
        "title": "現在完了形否定文",
        "audio_folder_name": "havenegative",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I've never been to Kyoto.",
        "japanese_translation": "京都に行ったことないんだ。",
        "title": "現在完了形否定文",
        "audio_folder_name": "havenegative",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I've never attended a live concert.",
        "japanese_translation": "ライブに行ったことないんだ。",
        "title": "現在完了形否定文",
        "audio_folder_name": "havenegative",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I've never dyed my hair.",
        "japanese_translation": "髪を染めたことないんだ。",
        "title": "現在完了形否定文",
        "audio_folder_name": "havenegative",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I've never made bread from scratch.",
        "japanese_translation": "パンを一から作ったことないんだ。",
        "title": "現在完了形否定文",
        "audio_folder_name": "havenegative",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I've been cleaning the house since morning.",
        "japanese_translation": "朝からずっと家の掃除してるよ。",
        "title": "現在完了進行形肯定文",
        "audio_folder_name": "havebeenpositive",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I've been cooking since 5 p.m.",
        "japanese_translation": "夕方5時からずっと料理してるよ。",
        "title": "現在完了進行形肯定文",
        "audio_folder_name": "havebeenpositive",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I've been waiting for the delivery since noon.",
        "japanese_translation": "お昼からずっと配達を待ってるの。",
        "title": "現在完了進行形肯定文",
        "audio_folder_name": "havebeenpositive",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I've been helping my son with homework.",
        "japanese_translation": "息子の宿題をずっと手伝ってるよ。",
        "title": "現在完了進行形肯定文",
        "audio_folder_name": "havebeenpositive",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I've been watching the drama all day.",
        "japanese_translation": "あのドラマ、今日ずっと見てるの。",
        "title": "現在完了進行形肯定文",
        "audio_folder_name": "havebeenpositive",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I've been looking for my keys.",
        "japanese_translation": "鍵をずっと探してるんだよね。",
        "title": "現在完了進行形肯定文",
        "audio_folder_name": "havebeenpositive",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I've been organizing the closet since morning.",
        "japanese_translation": "朝からクローゼット片付けてるよ。",
        "title": "現在完了進行形肯定文",
        "audio_folder_name": "havebeenpositive",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I've been thinking about dinner.",
        "japanese_translation": "夜ご飯についてずっと考えてるの。",
        "title": "現在完了進行形肯定文",
        "audio_folder_name": "havebeenpositive",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I haven't been sleeping well lately.",
        "japanese_translation": "最近あんまりよく寝れてないんだ。",
        "title": "現在完了進行形否定文",
        "audio_folder_name": "havebeennegative",
        "chapter": "chapter3"
    },
    {
        "number": "2",
        "english_sentence": "I haven't been eating much these days.",
        "japanese_translation": "最近あんまり食べてないんだよね。",
        "title": "現在完了進行形否定文",
        "audio_folder_name": "havebeennegative",
        "chapter": "chapter3"
    },
    {
        "number": "3",
        "english_sentence": "I haven't been exercising at all.",
        "japanese_translation": "全然運動してないんだよね。",
        "title": "現在完了進行形否定文",
        "audio_folder_name": "havebeennegative",
        "chapter": "chapter3"
    },
    {
        "number": "4",
        "english_sentence": "I haven't been feeling great recently.",
        "japanese_translation": "最近あんまり調子よくないんだ。",
        "title": "現在完了進行形否定文",
        "audio_folder_name": "havebeennegative",
        "chapter": "chapter3"
    },
    {
        "number": "5",
        "english_sentence": "I haven't been watching TV lately.",
        "japanese_translation": "最近テレビ見てないんだよね。",
        "title": "現在完了進行形否定文",
        "audio_folder_name": "havebeennegative",
        "chapter": "chapter3"
    },
    {
        "number": "6",
        "english_sentence": "I haven't been studying English recently.",
        "japanese_translation": "最近英語の勉強してないんだよね。",
        "title": "現在完了進行形否定文",
        "audio_folder_name": "havebeennegative",
        "chapter": "chapter3"
    },
    {
        "number": "7",
        "english_sentence": "I haven't been going out much.",
        "japanese_translation": "あんまり外出してないんだよね。",
        "title": "現在完了進行形否定文",
        "audio_folder_name": "havebeennegative",
        "chapter": "chapter3"
    },
    {
        "number": "8",
        "english_sentence": "I haven't been spending much time with my family.",
        "japanese_translation": "家族と過ごす時間、最近あんまりとれてないんだ。",
        "title": "現在完了進行形否定文",
        "audio_folder_name": "havebeennegative",
        "chapter": "chapter3"
    },
    {
        "number": "1",
        "english_sentence": "I can understand easy English.",
        "japanese_translation": "簡単な英語ならわかるよ。",
        "title": "can",
        "audio_folder_name": "can",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I can read short English sentences.",
        "japanese_translation": "短い英語の文なら読めるよ。",
        "title": "can",
        "audio_folder_name": "can",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I can follow slow conversations.",
        "japanese_translation": "ゆっくりなら会話についていけるよ。",
        "title": "can",
        "audio_folder_name": "can",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I can introduce myself in English.",
        "japanese_translation": "英語で自己紹介できるよ。",
        "title": "can",
        "audio_folder_name": "can",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "I can cook dinner tonight.",
        "japanese_translation": "今夜は私がご飯作れるよ。",
        "title": "can",
        "audio_folder_name": "can",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "I can lend you some money.",
        "japanese_translation": "お金貸してあげられるよ。",
        "title": "can",
        "audio_folder_name": "can",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "I can carry that for you.",
        "japanese_translation": "それ持ってあげるよ。",
        "title": "can",
        "audio_folder_name": "can",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "I can help you with the laundry.",
        "japanese_translation": "洗濯手伝ってあげられるよ。",
        "title": "can",
        "audio_folder_name": "can",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I can't do that.",
        "japanese_translation": "それはできないよ。",
        "title": "can't",
        "audio_folder_name": "cant",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I can't sleep well here.",
        "japanese_translation": "ここではよく眠れないよ。",
        "title": "can't",
        "audio_folder_name": "cant",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I can't drive on the highway.",
        "japanese_translation": "高速道路は運転できないよ。",
        "title": "can't",
        "audio_folder_name": "cant",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I can't find my keys.",
        "japanese_translation": "鍵が見つからない〜！",
        "title": "can't",
        "audio_folder_name": "cant",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "I can't hear you clearly.",
        "japanese_translation": "あなたの声がはっきり聞こえない。",
        "title": "can't",
        "audio_folder_name": "cant",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "I can't remember his name.",
        "japanese_translation": "彼の名前が思い出せない。",
        "title": "can't",
        "audio_folder_name": "cant",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "She can't eat spicy food.",
        "japanese_translation": "彼女は辛いものは食べられないよ。",
        "title": "can't",
        "audio_folder_name": "cant",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "You can't carry this alone.",
        "japanese_translation": "これ一人じゃ運べないよ。",
        "title": "can't",
        "audio_folder_name": "cant",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I could run fast before.",
        "japanese_translation": "前は早く走れた。",
        "title": "could",
        "audio_folder_name": "could",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I could swim when I was a child.",
        "japanese_translation": "子どもの頃は泳げたよ。",
        "title": "could",
        "audio_folder_name": "could",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I could play the piano when I was younger.",
        "japanese_translation": "若い頃はピアノが弾けたよ。",
        "title": "could",
        "audio_folder_name": "could",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I could run fast when I was a kid.",
        "japanese_translation": "子どもの頃は速く走れたよ。",
        "title": "could",
        "audio_folder_name": "could",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "I couldn't wake up early today.",
        "japanese_translation": "朝早く起きれなかった。",
        "title": "could",
        "audio_folder_name": "could",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "I couldn't understand your question.",
        "japanese_translation": "質問が理解できませんでした。",
        "title": "could",
        "audio_folder_name": "could",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "I couldn't remember his name.",
        "japanese_translation": "彼の名前が思い出せなかったんだよね。",
        "title": "could",
        "audio_folder_name": "could",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "She couldn't make it.",
        "japanese_translation": "彼女は来られなかった。",
        "title": "could",
        "audio_folder_name": "could",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "Can you say that again?",
        "japanese_translation": "もう一度言ってもらえる？",
        "title": "Can you / could you?",
        "audio_folder_name": "canyoucouldyou",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "Can you help me?",
        "japanese_translation": "手伝ってもらえない？",
        "title": "Can you / could you?",
        "audio_folder_name": "canyoucouldyou",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "Can you hear me clearly?",
        "japanese_translation": "私の声、良く聞こえる？",
        "title": "Can you / could you?",
        "audio_folder_name": "canyoucouldyou",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "Can you do it?",
        "japanese_translation": "できそう？",
        "title": "Can you / could you?",
        "audio_folder_name": "canyoucouldyou",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "Could you speak more slowly?",
        "japanese_translation": "もっとゆっくり話していただけますか？",
        "title": "Can you / could you?",
        "audio_folder_name": "canyoucouldyou",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "Could you do me a favor?",
        "japanese_translation": "お願いをしてもいいですか？",
        "title": "Can you / could you?",
        "audio_folder_name": "canyoucouldyou",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "Could you help me with the dishes?",
        "japanese_translation": "お皿洗いを手伝っていただけますか？",
        "title": "Can you / could you?",
        "audio_folder_name": "canyoucouldyou",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "Could you pass me the salt?",
        "japanese_translation": "塩を取っていただけますか？",
        "title": "Can you / could you?",
        "audio_folder_name": "canyoucouldyou",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "Can I ask you something?",
        "japanese_translation": "ちょっと聞いてもいい？",
        "title": "Can I / Could I?",
        "audio_folder_name": "canicoldi",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "Can I turn on the TV?",
        "japanese_translation": "テレビつけていい？",
        "title": "Can I / Could I?",
        "audio_folder_name": "canicoldi",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "Can I borrow your pen?",
        "japanese_translation": "君のペン借りてもいい？",
        "title": "Can I / Could I?",
        "audio_folder_name": "canicoldi",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "Can I try this on?",
        "japanese_translation": "これ試着してもいい？",
        "title": "Can I / Could I?",
        "audio_folder_name": "canicoldi",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "Could I try this on?",
        "japanese_translation": "これ試着してもいいですか？",
        "title": "Can I / Could I?",
        "audio_folder_name": "canicoldi",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "Could I change my order?",
        "japanese_translation": "注文を変更してもいいですか？",
        "title": "Can I / Could I?",
        "audio_folder_name": "canicoldi",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "Could I have a glass of water?",
        "japanese_translation": "お水を一杯いただけますか？",
        "title": "Can I / Could I?",
        "audio_folder_name": "canicoldi",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "Could I use the bathroom?",
        "japanese_translation": "トイレ使ってもいいですか？",
        "title": "Can I / Could I?",
        "audio_folder_name": "canicoldi",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I would buy this one.",
        "japanese_translation": "私だったらこれ買うよ。",
        "title": "would",
        "audio_folder_name": "would",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I would call her first.",
        "japanese_translation": "私ならまず彼女に電話する。",
        "title": "would",
        "audio_folder_name": "would",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I would go by train.",
        "japanese_translation": "私なら電車で行くかな。",
        "title": "would",
        "audio_folder_name": "would",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I wouldn't go there alone.",
        "japanese_translation": "私ならそこには一人で行かないよ。",
        "title": "would",
        "audio_folder_name": "would",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "She would say yes.",
        "japanese_translation": "彼女は「はい」って言うと思う。",
        "title": "would",
        "audio_folder_name": "would",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "He wouldn't eat that dish.",
        "japanese_translation": "彼ならその料理は食べないよ。",
        "title": "would",
        "audio_folder_name": "would",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "She wouldn't wear those shoes.",
        "japanese_translation": "彼女ならその靴は履かないよ。",
        "title": "would",
        "audio_folder_name": "would",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "She said she would cook dinner tonight.",
        "japanese_translation": "彼女が今夜の晩ごはん作るって言ってたよ。",
        "title": "would",
        "audio_folder_name": "would",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I might go shopping later.",
        "japanese_translation": "後で買い物に行くかも。",
        "title": "might",
        "audio_folder_name": "might",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I might need a jacket.",
        "japanese_translation": "ジャケットが必要かも。",
        "title": "might",
        "audio_folder_name": "might",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I might have a cold.",
        "japanese_translation": "風邪ひいたかも。",
        "title": "might",
        "audio_folder_name": "might",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I might call you tonight.",
        "japanese_translation": "今夜あなたに電話するかも。",
        "title": "might",
        "audio_folder_name": "might",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "I might change the plan.",
        "japanese_translation": "予定を変えるかも。",
        "title": "might",
        "audio_folder_name": "might",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "I might be late.",
        "japanese_translation": "遅れちゃうかも。",
        "title": "might",
        "audio_folder_name": "might",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "She might be angry.",
        "japanese_translation": "彼女怒ってるかも。",
        "title": "might",
        "audio_folder_name": "might",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "He might be busy today.",
        "japanese_translation": "彼、今日は忙しいかも。",
        "title": "might",
        "audio_folder_name": "might",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I should go to bed earlier.",
        "japanese_translation": "もっと早く寝たほうがいいよね。",
        "title": "should",
        "audio_folder_name": "should",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I should clean the fridge.",
        "japanese_translation": "私は冷蔵庫を掃除したほうがいいよな。",
        "title": "should",
        "audio_folder_name": "should",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I should eat more vegetables.",
        "japanese_translation": "もっと野菜を食べたほうがいいよな。",
        "title": "should",
        "audio_folder_name": "should",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I shouldn't eat too much.",
        "japanese_translation": "私は食べすぎないほうがいいよね。",
        "title": "should",
        "audio_folder_name": "should",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "I shouldn't stay up late.",
        "japanese_translation": "私は夜更かししないほうがいいよね。",
        "title": "should",
        "audio_folder_name": "should",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "You should get some rest.",
        "japanese_translation": "少し休んだほうがいいよ。",
        "title": "should",
        "audio_folder_name": "should",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "You should exercise more.",
        "japanese_translation": "もっと運動した方がいいよ。",
        "title": "should",
        "audio_folder_name": "should",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "You shouldn't skip breakfast.",
        "japanese_translation": "朝ごはんを抜かないほうがいいよ。",
        "title": "should",
        "audio_folder_name": "should",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I must finish this today.",
        "japanese_translation": "今日中にこれを終わらせなきゃ。",
        "title": "must",
        "audio_folder_name": "must",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I must clean the kitchen.",
        "japanese_translation": "キッチンを掃除しなきゃ。",
        "title": "must",
        "audio_folder_name": "must",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I must buy some milk.",
        "japanese_translation": "牛乳を買わなきゃ。",
        "title": "must",
        "audio_folder_name": "must",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "You must take off your shoes here.",
        "japanese_translation": "ここでは靴を脱がないとだめだよ。",
        "title": "must",
        "audio_folder_name": "must",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "You must turn off your phone in here.",
        "japanese_translation": "この中では携帯の電源を切らないとダメだよ。",
        "title": "must",
        "audio_folder_name": "must",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "You mustn't tell anyone about this.",
        "japanese_translation": "このこと誰にも言っちゃダメだよ。",
        "title": "must",
        "audio_folder_name": "must",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "You mustn't be late.",
        "japanese_translation": "遅刻しちゃダメだよ。",
        "title": "must",
        "audio_folder_name": "must",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "You mustn't run in here.",
        "japanese_translation": "この中では走っちゃダメだよ。",
        "title": "must",
        "audio_folder_name": "must",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I could've helped you if you had told me.",
        "japanese_translation": "言ってくれれば手伝えたのに。",
        "title": "could've",
        "audio_folder_name": "couldhave",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I could've made a lunchbox if you had told me.",
        "japanese_translation": "言ってくれればお弁当作ったのに。",
        "title": "could've",
        "audio_folder_name": "couldhave",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I could've picked you up if you had told me.",
        "japanese_translation": "言ってくれれば迎えに行けたのに。",
        "title": "could've",
        "audio_folder_name": "couldhave",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I could've bought it if you had told me.",
        "japanese_translation": "言ってくれれば買ったのに。",
        "title": "could've",
        "audio_folder_name": "couldhave",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "I could've brought it if you had told me.",
        "japanese_translation": "言ってくれれば持ってこれたのに。",
        "title": "could've",
        "audio_folder_name": "couldhave",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "I could've come earlier if you had told me.",
        "japanese_translation": "言ってくれればもっと早く来れたのに。",
        "title": "could've",
        "audio_folder_name": "couldhave",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "You could've told me earlier.",
        "japanese_translation": "もっと早く言ってくれればよかったのに。",
        "title": "could've",
        "audio_folder_name": "couldhave",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "You could've invited me.",
        "japanese_translation": "誘ってくれればよかったのに。",
        "title": "could've",
        "audio_folder_name": "couldhave",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I should've slept earlier.",
        "japanese_translation": "もっと早く寝ればよかった。",
        "title": "should've",
        "audio_folder_name": "shouldhave",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I should've brought an umbrella.",
        "japanese_translation": "傘を持ってくればよかった。",
        "title": "should've",
        "audio_folder_name": "shouldhave",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I should've saved more money.",
        "japanese_translation": "もっとお金を貯めておけばよかった。",
        "title": "should've",
        "audio_folder_name": "shouldhave",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I should've apologized sooner.",
        "japanese_translation": "もっと早く謝ればよかった。",
        "title": "should've",
        "audio_folder_name": "shouldhave",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "I shouldn't have said that.",
        "japanese_translation": "あんなこと言わなければよかった。",
        "title": "should've",
        "audio_folder_name": "shouldhave",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "I shouldn't have broken up.",
        "japanese_translation": "別れなければよかった。",
        "title": "should've",
        "audio_folder_name": "shouldhave",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "I shouldn't have eaten so much.",
        "japanese_translation": "食べすぎなければよかった。",
        "title": "should've",
        "audio_folder_name": "shouldhave",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "I shouldn't have stayed up so late.",
        "japanese_translation": "夜更かししなければよかった。",
        "title": "should've",
        "audio_folder_name": "shouldhave",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I must've forgotten my keys.",
        "japanese_translation": "鍵忘れたに違いないわ",
        "title": "must've",
        "audio_folder_name": "musthave",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I must've left my phone at home.",
        "japanese_translation": "スマホ、家に忘れてきちゃったに違いない",
        "title": "must've",
        "audio_folder_name": "musthave",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "You must've had a great time.",
        "japanese_translation": "絶対楽しかったでしょ！",
        "title": "must've",
        "audio_folder_name": "musthave",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "You must've been so tired.",
        "japanese_translation": "すごく疲れてたでしょう",
        "title": "must've",
        "audio_folder_name": "musthave",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "You must've been surprised.",
        "japanese_translation": "絶対驚いたでしょう。",
        "title": "must've",
        "audio_folder_name": "musthave",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "You must've been hungry.",
        "japanese_translation": "絶対お腹すいてたでしょう。",
        "title": "must've",
        "audio_folder_name": "musthave",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "You must've been so nervous.",
        "japanese_translation": "めっちゃ緊張したでしょう",
        "title": "must've",
        "audio_folder_name": "musthave",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "You must've been worried.",
        "japanese_translation": "心配だったでしょう。",
        "title": "must've",
        "audio_folder_name": "musthave",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "I might've left my key at home.",
        "japanese_translation": "鍵を家に忘れちゃったかも。",
        "title": "might've",
        "audio_folder_name": "mighthave",
        "chapter": "chapter4"
    },
    {
        "number": "2",
        "english_sentence": "I might've left my wallet.",
        "japanese_translation": "財布忘れたかも。",
        "title": "might've",
        "audio_folder_name": "mighthave",
        "chapter": "chapter4"
    },
    {
        "number": "3",
        "english_sentence": "I might've taken the wrong train.",
        "japanese_translation": "間違った電車乗っちゃったかも！",
        "title": "might've",
        "audio_folder_name": "mighthave",
        "chapter": "chapter4"
    },
    {
        "number": "4",
        "english_sentence": "I might've dropped my phone.",
        "japanese_translation": "携帯落としちゃったかも。",
        "title": "might've",
        "audio_folder_name": "mighthave",
        "chapter": "chapter4"
    },
    {
        "number": "5",
        "english_sentence": "I might've bought the wrong item.",
        "japanese_translation": "違うものを買っちゃったかも。",
        "title": "might've",
        "audio_folder_name": "mighthave",
        "chapter": "chapter4"
    },
    {
        "number": "6",
        "english_sentence": "I might've lost my ticket.",
        "japanese_translation": "チケット失くしちゃったかも。",
        "title": "might've",
        "audio_folder_name": "mighthave",
        "chapter": "chapter4"
    },
    {
        "number": "7",
        "english_sentence": "I might've taken the wrong road.",
        "japanese_translation": "道間違えちゃったかも。",
        "title": "might've",
        "audio_folder_name": "mighthave",
        "chapter": "chapter4"
    },
    {
        "number": "8",
        "english_sentence": "He might've taken the wrong bus.",
        "japanese_translation": "彼は違うバスに乗っちゃったのかも。",
        "title": "might've",
        "audio_folder_name": "mighthave",
        "chapter": "chapter4"
    },
    {
        "number": "1",
        "english_sentence": "You like tea?",
        "japanese_translation": "お茶好き？",
        "title": "現在形の疑問文",
        "audio_folder_name": "PresentTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "You cook every day?",
        "japanese_translation": "毎日料理する？",
        "title": "現在形の疑問文",
        "audio_folder_name": "PresentTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "You need help?",
        "japanese_translation": "助けいる？",
        "title": "現在形の疑問文",
        "audio_folder_name": "PresentTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "You often watch dramas?",
        "japanese_translation": "よくドラマとか見たりする？",
        "title": "現在形の疑問文",
        "audio_folder_name": "PresentTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "You exercise in the morning?",
        "japanese_translation": "朝に運動したりする？",
        "title": "現在形の疑問文",
        "audio_folder_name": "PresentTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "You use this app?",
        "japanese_translation": "このアプリ使ってる？",
        "title": "現在形の疑問文",
        "audio_folder_name": "PresentTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "You always wake up early?",
        "japanese_translation": "いつも早起きしてるの？",
        "title": "現在形の疑問文",
        "audio_folder_name": "PresentTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "You work in Nakano?",
        "japanese_translation": "中野で働いてるの？",
        "title": "現在形の疑問文",
        "audio_folder_name": "PresentTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "You're cooking dinner?",
        "japanese_translation": "晩ごはん作ってるの？",
        "title": "現在進行形の疑問文",
        "audio_folder_name": "AffirmativeTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "You're still working?",
        "japanese_translation": "まだ仕事してるの？",
        "title": "現在進行形の疑問文",
        "audio_folder_name": "AffirmativeTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "You are waiting for someone?",
        "japanese_translation": "誰か待ってるの？",
        "title": "現在進行形の疑問文",
        "audio_folder_name": "AffirmativeTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "You are looking for something?",
        "japanese_translation": "何か探してるの？",
        "title": "現在進行形の疑問文",
        "audio_folder_name": "AffirmativeTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "You're leaving soon?",
        "japanese_translation": "もうすぐ出かけるの？",
        "title": "現在進行形の疑問文",
        "audio_folder_name": "AffirmativeTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "You're going shopping?",
        "japanese_translation": "買い物に行くの？",
        "title": "現在進行形の疑問文",
        "audio_folder_name": "AffirmativeTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "You're going to the university today?",
        "japanese_translation": "今日は大学に行くの？",
        "title": "現在進行形の疑問文",
        "audio_folder_name": "AffirmativeTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "You're coming back home today?",
        "japanese_translation": "今日は家に帰って来るの？",
        "title": "現在進行形の疑問文",
        "audio_folder_name": "AffirmativeTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "You ate breakfast?",
        "japanese_translation": "朝ごはん食べたの？",
        "title": "過去形の疑問文",
        "audio_folder_name": "PastTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "You went shopping?",
        "japanese_translation": "買い物行ったの？",
        "title": "過去形の疑問文",
        "audio_folder_name": "PastTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "You saw that movie?",
        "japanese_translation": "あの映画見たの？",
        "title": "過去形の疑問文",
        "audio_folder_name": "PastTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "You finished your work?",
        "japanese_translation": "仕事終わったの？",
        "title": "過去形の疑問文",
        "audio_folder_name": "PastTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "You met her yesterday?",
        "japanese_translation": "昨日彼女に会ったの？",
        "title": "過去形の疑問文",
        "audio_folder_name": "PastTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "You cleaned your room?",
        "japanese_translation": "部屋掃除したの？",
        "title": "過去形の疑問文",
        "audio_folder_name": "PastTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "You bought something?",
        "japanese_translation": "何か買ったの？",
        "title": "過去形の疑問文",
        "audio_folder_name": "PastTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "You slept well last night?",
        "japanese_translation": "昨夜よく眠れた？",
        "title": "過去形の疑問文",
        "audio_folder_name": "PastTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "You're gonna buy a new phone?",
        "japanese_translation": "新しいスマホ買うの？",
        "title": "未来形の疑問文",
        "audio_folder_name": "FutureTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "You're gonna wake up early tomorrow?",
        "japanese_translation": "明日早起きするの？",
        "title": "未来形の疑問文",
        "audio_folder_name": "FutureTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "You're gonna visit your parents this weekend?",
        "japanese_translation": "今週末、両親に会いに行くの？",
        "title": "未来形の疑問文",
        "audio_folder_name": "FutureTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "You're gonna go to the gym tomorrow?",
        "japanese_translation": "明日ジム行くの？",
        "title": "未来形の疑問文",
        "audio_folder_name": "FutureTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "You're gonna take a day off next week?",
        "japanese_translation": "来週休み取るの？",
        "title": "未来形の疑問文",
        "audio_folder_name": "FutureTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "You're gonna buy it?",
        "japanese_translation": "それ買うの？",
        "title": "未来形の疑問文",
        "audio_folder_name": "FutureTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "You're gonna skip lunch?",
        "japanese_translation": "お昼ごはん抜くの？",
        "title": "未来形の疑問文",
        "audio_folder_name": "FutureTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "You're gonna go out in this rain?",
        "japanese_translation": "こんな雨の中出かけるの？",
        "title": "未来形の疑問文",
        "audio_folder_name": "FutureTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "You've cleaned the kitchen?",
        "japanese_translation": "もうキッチン掃除したの？",
        "title": "現在完了の疑問文",
        "audio_folder_name": "HaveTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "You've packed your bag?",
        "japanese_translation": "もうカバン準備したの？",
        "title": "現在完了の疑問文",
        "audio_folder_name": "HaveTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "You've finished reading that book?",
        "japanese_translation": "もうその本読み終わったの？",
        "title": "現在完了の疑問文",
        "audio_folder_name": "HaveTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "You've done the laundry?",
        "japanese_translation": "もう洗濯したの？",
        "title": "現在完了の疑問文",
        "audio_folder_name": "HaveTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Have you ever been to Kyoto?",
        "japanese_translation": "京都に行ったことある？",
        "title": "現在完了の疑問文",
        "audio_folder_name": "HaveTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Have you ever ridden a horse?",
        "japanese_translation": "馬に乗ったことある？",
        "title": "現在完了の疑問文",
        "audio_folder_name": "HaveTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Have you ever spoken English with a native speaker?",
        "japanese_translation": "ネイティブの人と英語で話したことある？",
        "title": "現在完了の疑問文",
        "audio_folder_name": "HaveTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Have you ever seen Mount Fuji in person?",
        "japanese_translation": "富士山を実際に見たことある？",
        "title": "現在完了の疑問文",
        "audio_folder_name": "HaveTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "You've been working all day?",
        "japanese_translation": "一日中働いてるの？",
        "title": "現在完了進行形の疑問文",
        "audio_folder_name": "HaveBeenTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "You've been studying English for years?",
        "japanese_translation": "何年も英語を勉強してるの？",
        "title": "現在完了進行形の疑問文",
        "audio_folder_name": "HaveBeenTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "You've been waiting for me for a long time?",
        "japanese_translation": "ずっと私のこと待ってくれてたの？",
        "title": "現在完了進行形の疑問文",
        "audio_folder_name": "HaveBeenTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "You've been feeling sick since this morning?",
        "japanese_translation": "今朝からずっと体調悪いの？",
        "title": "現在完了進行形の疑問文",
        "audio_folder_name": "HaveBeenTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "You've been watching that drama all day?",
        "japanese_translation": "一日中そのドラマ見てるの？",
        "title": "現在完了進行形の疑問文",
        "audio_folder_name": "HaveBeenTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "You've been thinking about him?",
        "japanese_translation": "ずっと彼のこと考えてるの？",
        "title": "現在完了進行形の疑問文",
        "audio_folder_name": "HaveBeenTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "You've been slacking off on studying English lately?",
        "japanese_translation": "最近ずっと英語の勉強サボってるの？",
        "title": "現在完了進行形の疑問文",
        "audio_folder_name": "HaveBeenTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "You've been living here for 10 years?",
        "japanese_translation": "10年間ここに住んでいるの？",
        "title": "現在完了進行形の疑問文",
        "audio_folder_name": "HaveBeenTenseQuestion",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "What's your plan for tomorrow?",
        "japanese_translation": "明日の予定は？",
        "title": "Whatを使った疑問文1/2",
        "audio_folder_name": "Questionwhat1",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "What is your favorite food?",
        "japanese_translation": "好きな食べ物はなに？",
        "title": "Whatを使った疑問文1/2",
        "audio_folder_name": "Questionwhat1",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "What are you making for dinner?",
        "japanese_translation": "夜ご飯何作ってるの？",
        "title": "Whatを使った疑問文1/2",
        "audio_folder_name": "Questionwhat1",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "What are you looking for?",
        "japanese_translation": "何探してるの？",
        "title": "Whatを使った疑問文1/2",
        "audio_folder_name": "Questionwhat1",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "What are you watching on TV?",
        "japanese_translation": "今テレビで何見てるの？",
        "title": "Whatを使った疑問文1/2",
        "audio_folder_name": "Questionwhat1",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "What do you usually cook for lunch?",
        "japanese_translation": "普段お昼ごはん何作るの？",
        "title": "Whatを使った疑問文1/2",
        "audio_folder_name": "Questionwhat1",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "What do you want for dessert?",
        "japanese_translation": "デザート何がいい？",
        "title": "Whatを使った疑問文1/2",
        "audio_folder_name": "Questionwhat1",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "What time do you finish your work?",
        "japanese_translation": "仕事は何時に終わるの？",
        "title": "Whatを使った疑問文1/2",
        "audio_folder_name": "Questionwhat1",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "What did you do yesterday?",
        "japanese_translation": "昨日は何したの？",
        "title": "Whatを使った疑問文2/2",
        "audio_folder_name": "Questionwhat2",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "What did you buy at the store?",
        "japanese_translation": "お店で何買ったの？",
        "title": "Whatを使った疑問文2/2",
        "audio_folder_name": "Questionwhat2",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "What are you gonna cook tonight?",
        "japanese_translation": "今夜何を作るの？",
        "title": "Whatを使った疑問文2/2",
        "audio_folder_name": "Questionwhat2",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "What are you gonna say to him?",
        "japanese_translation": "彼に何て言うの？",
        "title": "Whatを使った疑問文2/2",
        "audio_folder_name": "Questionwhat2",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "What were you talking about?",
        "japanese_translation": "何の話をしてたの？",
        "title": "Whatを使った疑問文2/2",
        "audio_folder_name": "Questionwhat2",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "What kind of coffee do you like?",
        "japanese_translation": "どんなコーヒーが好き？",
        "title": "Whatを使った疑問文2/2",
        "audio_folder_name": "Questionwhat2",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "What kind of music do you listen to?",
        "japanese_translation": "どんな音楽を聴くの？",
        "title": "Whatを使った疑問文2/2",
        "audio_folder_name": "Questionwhat2",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "What kind of bag are you gonna buy?",
        "japanese_translation": "どんな感じのバッグを買うつもりなの？",
        "title": "Whatを使った疑問文2/2",
        "audio_folder_name": "Questionwhat2",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "When is your day off?",
        "japanese_translation": "休みの日はいつなの？",
        "title": "Whenを使った疑問文1/2",
        "audio_folder_name": "Questionwhen1",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "When is the sports festival?",
        "japanese_translation": "運動会っていつ？",
        "title": "Whenを使った疑問文1/2",
        "audio_folder_name": "Questionwhen1",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "When are you going to bed?",
        "japanese_translation": "いつ寝るつもり？",
        "title": "Whenを使った疑問文1/2",
        "audio_folder_name": "Questionwhen1",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "When are you going?",
        "japanese_translation": "いつ行くの？",
        "title": "Whenを使った疑問文1/2",
        "audio_folder_name": "Questionwhen1",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "When did you start studying English?",
        "japanese_translation": "いつ英語を勉強し始めたの？",
        "title": "Whenを使った疑問文1/2",
        "audio_folder_name": "Questionwhen1",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "When did you go there?",
        "japanese_translation": "いつそこに行ったの？",
        "title": "Whenを使った疑問文1/2",
        "audio_folder_name": "Questionwhen1",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "When did you talk to her last?",
        "japanese_translation": "最後に彼女と話したのはいつ？",
        "title": "Whenを使った疑問文1/2",
        "audio_folder_name": "Questionwhen1",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "When did you move here?",
        "japanese_translation": "いつここに引っ越してきたの？",
        "title": "Whenを使った疑問文1/2",
        "audio_folder_name": "Questionwhen1",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "When are you gonna start cooking?",
        "japanese_translation": "いつ料理を始めるの？",
        "title": "Whenを使った疑問文2/2",
        "audio_folder_name": "Questionwhen2",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "When are you gonna call him?",
        "japanese_translation": "いつ彼に電話するの？",
        "title": "Whenを使った疑問文2/2",
        "audio_folder_name": "Questionwhen2",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "When is she gonna be home?",
        "japanese_translation": "彼女はいつ家に帰るの？",
        "title": "Whenを使った疑問文2/2",
        "audio_folder_name": "Questionwhen2",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "When are you gonna fix the light?",
        "japanese_translation": "いつ電気直すの？",
        "title": "Whenを使った疑問文2/2",
        "audio_folder_name": "Questionwhen2",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Since when have you been drinking coffee?",
        "japanese_translation": "いつからコーヒー飲むようになったの？",
        "title": "Whenを使った疑問文2/2",
        "audio_folder_name": "Questionwhen2",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Since when have you been living in Shinjuku?",
        "japanese_translation": "いつから新宿に住んでるの？",
        "title": "Whenを使った疑問文2/2",
        "audio_folder_name": "Questionwhen2",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Since when have you been going to the gym?",
        "japanese_translation": "いつからジムに行くようになったの？",
        "title": "Whenを使った疑問文2/2",
        "audio_folder_name": "Questionwhen2",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Since when have you been waking up so early?",
        "japanese_translation": "いつからそんなに早起きしてるの？",
        "title": "Whenを使った疑問文2/2",
        "audio_folder_name": "Questionwhen2",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "Where is my wallet?",
        "japanese_translation": "私の財布どこ？",
        "title": "whereを使った疑問文1/2",
        "audio_folder_name": "Questionwhere1",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "Where is the TV remote?",
        "japanese_translation": "テレビのリモコンどこ？",
        "title": "whereを使った疑問文1/2",
        "audio_folder_name": "Questionwhere1",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "Where is the nearest supermarket?",
        "japanese_translation": "一番近いスーパーはどこ？",
        "title": "whereを使った疑問文1/2",
        "audio_folder_name": "Questionwhere1",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "Where are you going?",
        "japanese_translation": "どこ行くの？",
        "title": "whereを使った疑問文1/2",
        "audio_folder_name": "Questionwhere1",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Where are you staying?",
        "japanese_translation": "どこに泊まるの？",
        "title": "whereを使った疑問文1/2",
        "audio_folder_name": "Questionwhere1",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Where do you buy groceries?",
        "japanese_translation": "食材ってどこで買ってるの？",
        "title": "whereを使った疑問文1/2",
        "audio_folder_name": "Questionwhere1",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Where do you get a haircut?",
        "japanese_translation": "どこで髪は切ってるの？",
        "title": "whereを使った疑問文1/2",
        "audio_folder_name": "Questionwhere1",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Where does she work?",
        "japanese_translation": "彼女はどこで働いてるの？",
        "title": "whereを使った疑問文1/2",
        "audio_folder_name": "Questionwhere1",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "Where were you this morning?",
        "japanese_translation": "今朝どこにいたの？",
        "title": "whereを使った疑問文2/2",
        "audio_folder_name": "Questionwhere2",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "Where were you last night?",
        "japanese_translation": "昨夜どこにいたの？",
        "title": "whereを使った疑問文2/2",
        "audio_folder_name": "Questionwhere2",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "Where was the event held?",
        "japanese_translation": "イベントはどこで開催されたの？",
        "title": "whereを使った疑問文2/2",
        "audio_folder_name": "Questionwhere2",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "Where did you buy this bag?",
        "japanese_translation": "このバッグどこで買ったの？",
        "title": "whereを使った疑問文2/2",
        "audio_folder_name": "Questionwhere2",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Where did you eat lunch?",
        "japanese_translation": "どこでお昼を食べたの？",
        "title": "whereを使った疑問文2/2",
        "audio_folder_name": "Questionwhere2",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Where did you meet her?",
        "japanese_translation": "どこで彼女に会ったの？",
        "title": "whereを使った疑問文2/2",
        "audio_folder_name": "Questionwhere2",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Where are you gonna go this weekend?",
        "japanese_translation": "今週末どこに行くの？",
        "title": "whereを使った疑問文2/2",
        "audio_folder_name": "Questionwhere2",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Where are you gonna have lunch?",
        "japanese_translation": "どこでランチを食べるの？",
        "title": "whereを使った疑問文2/2",
        "audio_folder_name": "Questionwhere2",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "Who is that?",
        "japanese_translation": "あの人誰？",
        "title": "Whoを使った疑問文",
        "audio_folder_name": "Questionwho",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "Who is he?",
        "japanese_translation": "彼は誰？",
        "title": "Whoを使った疑問文",
        "audio_folder_name": "Questionwho",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "Who are you talking to?",
        "japanese_translation": "誰と話してるの？",
        "title": "Whoを使った疑問文",
        "audio_folder_name": "Questionwho",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "Who are you meeting today?",
        "japanese_translation": "今日は誰と会うの？",
        "title": "Whoを使った疑問文",
        "audio_folder_name": "Questionwho",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Who left the door open?",
        "japanese_translation": "誰がドアを開けっぱなしにしたの？",
        "title": "Whoを使った疑問文",
        "audio_folder_name": "Questionwho",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Who made this cake?",
        "japanese_translation": "誰がこのケーキを作ったの？",
        "title": "Whoを使った疑問文",
        "audio_folder_name": "Questionwho",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Who took my umbrella?",
        "japanese_translation": "誰が私の傘を持って行ったんだ!?",
        "title": "Whoを使った疑問文",
        "audio_folder_name": "Questionwho",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Who did you invite to dinner?",
        "japanese_translation": "誰を晩ごはんに招待したの？",
        "title": "Whoを使った疑問文",
        "audio_folder_name": "Questionwho",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "Why are you late?",
        "japanese_translation": "なんで遅れたの？",
        "title": "Whyを使った疑問文1/2",
        "audio_folder_name": "Questionwhy1",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "Why are you so tired?",
        "japanese_translation": "なんでそんなに疲れてるの？",
        "title": "Whyを使った疑問文1/2",
        "audio_folder_name": "Questionwhy1",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "Why are you still up?",
        "japanese_translation": "なんでまだ起きてるの？",
        "title": "Whyを使った疑問文1/2",
        "audio_folder_name": "Questionwhy1",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "Why do you wake up so early?",
        "japanese_translation": "なんでそんなに早く起きるの？",
        "title": "Whyを使った疑問文1/2",
        "audio_folder_name": "Questionwhy1",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Why do you study English?",
        "japanese_translation": "なんで英語を勉強しているの？",
        "title": "Whyを使った疑問文1/2",
        "audio_folder_name": "Questionwhy1",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Why do you like reading books so much?",
        "japanese_translation": "なんでそんなに本を読むのが好きなの？",
        "title": "Whyを使った疑問文1/2",
        "audio_folder_name": "Questionwhy1",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Why are you crying?",
        "japanese_translation": "なんで泣いてるの？",
        "title": "Whyを使った疑問文1/2",
        "audio_folder_name": "Questionwhy1",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Why are you wearing that in winter?",
        "japanese_translation": "なんで冬なのにそんなの着ているの？",
        "title": "Whyを使った疑問文1/2",
        "audio_folder_name": "Questionwhy1",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "Why did you leave early yesterday?",
        "japanese_translation": "なんで昨日は早く帰ったの？",
        "title": "Whyを使った疑問文2/2",
        "audio_folder_name": "Questionwhy2",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "Why did you eat my pudding?",
        "japanese_translation": "なんで私のプリン食べたの？",
        "title": "Whyを使った疑問文2/2",
        "audio_folder_name": "Questionwhy2",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "Why did she quit her job?",
        "japanese_translation": "なんで彼女は仕事を辞めたの？",
        "title": "Whyを使った疑問文2/2",
        "audio_folder_name": "Questionwhy2",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "Why did you come back home so late?",
        "japanese_translation": "なんでこんな遅く帰ってきたの？",
        "title": "Whyを使った疑問文2/2",
        "audio_folder_name": "Questionwhy2",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Why are you gonna change your phone?",
        "japanese_translation": "なんでスマホを変えるの？",
        "title": "Whyを使った疑問文2/2",
        "audio_folder_name": "Questionwhy2",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Why are you gonna go to Osaka?",
        "japanese_translation": "なんで大阪に行くの？",
        "title": "Whyを使った疑問文2/2",
        "audio_folder_name": "Questionwhy2",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Why are you gonna throw this away?",
        "japanese_translation": "なんでこれ捨てるの？",
        "title": "Whyを使った疑問文2/2",
        "audio_folder_name": "Questionwhy2",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Why are you gonna stay up all night?",
        "japanese_translation": "なんで徹夜するの？",
        "title": "Whyを使った疑問文2/2",
        "audio_folder_name": "Questionwhy2",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "Which is your phone?",
        "japanese_translation": "どれがあなたのスマホ？",
        "title": "Whichを使った疑問文1/2",
        "audio_folder_name": "Questionwhich1",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "Which is your bag?",
        "japanese_translation": "あなたのバッグはどれ？",
        "title": "Whichを使った疑問文1/2",
        "audio_folder_name": "Questionwhich1",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "Which one is cheaper?",
        "japanese_translation": "どっちのほうが安いですか？",
        "title": "Whichを使った疑問文1/2",
        "audio_folder_name": "Questionwhich1",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "Which one is better?",
        "japanese_translation": "どっちのほうがよりいいですか？",
        "title": "Whichを使った疑問文1/2",
        "audio_folder_name": "Questionwhich1",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Which is yours?",
        "japanese_translation": "どっちのがあなたの？",
        "title": "Whichを使った疑問文1/2",
        "audio_folder_name": "Questionwhich1",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Which jacket do you like better?",
        "japanese_translation": "どっちのジャケットの方が好き？",
        "title": "Whichを使った疑問文1/2",
        "audio_folder_name": "Questionwhich1",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Which color do you like better?",
        "japanese_translation": "どっちの色の方が好き？",
        "title": "Whichを使った疑問文1/2",
        "audio_folder_name": "Questionwhich1",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Which tea do you want to drink?",
        "japanese_translation": "どのお茶を飲みたい？",
        "title": "Whichを使った疑問文1/2",
        "audio_folder_name": "Questionwhich1",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "Which shampoo do you recommend?",
        "japanese_translation": "どのシャンプーがおすすめ？",
        "title": "Whichを使った疑問文2/2",
        "audio_folder_name": "Questionwhich2",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "Which restaurant do you recommend?",
        "japanese_translation": "どのレストランがおすすめ？",
        "title": "Whichを使った疑問文2/2",
        "audio_folder_name": "Questionwhich2",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "Which phone are you gonna get?",
        "japanese_translation": "どのスマホを買うの？",
        "title": "Whichを使った疑問文2/2",
        "audio_folder_name": "Questionwhich2",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "Which one are you gonna choose?",
        "japanese_translation": "どっちを選ぶの？",
        "title": "Whichを使った疑問文2/2",
        "audio_folder_name": "Questionwhich2",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Which one are you gonna watch tonight?",
        "japanese_translation": "今夜はどっちを見るの？",
        "title": "Whichを使った疑問文2/2",
        "audio_folder_name": "Questionwhich2",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Which one did you like better?",
        "japanese_translation": "どっちの方が好きだった？",
        "title": "Whichを使った疑問文2/2",
        "audio_folder_name": "Questionwhich2",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Which one did you watch last night?",
        "japanese_translation": "昨夜はどっちを見たの？",
        "title": "Whichを使った疑問文2/2",
        "audio_folder_name": "Questionwhich2",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Which one did you eat?",
        "japanese_translation": "どっちを食べたの？",
        "title": "Whichを使った疑問文2/2",
        "audio_folder_name": "Questionwhich2",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "Whose bag is this?",
        "japanese_translation": "これ誰のバッグ？",
        "title": "Whoseを使った疑問文",
        "audio_folder_name": "Questionwhose",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "Whose umbrella is that?",
        "japanese_translation": "あれは誰の傘？",
        "title": "Whoseを使った疑問文",
        "audio_folder_name": "Questionwhose",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "Whose shoes are at the entrance?",
        "japanese_translation": "玄関の靴はだれの？",
        "title": "Whoseを使った疑問文",
        "audio_folder_name": "Questionwhose",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "Whose keys are these?",
        "japanese_translation": "これらの鍵は誰のですか？",
        "title": "Whoseを使った疑問文",
        "audio_folder_name": "Questionwhose",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "Whose phone is ringing?",
        "japanese_translation": "誰のスマホが鳴ってる？",
        "title": "Whoseを使った疑問文",
        "audio_folder_name": "Questionwhose",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "Whose water bottle is on the table?",
        "japanese_translation": "テーブルの水筒は誰の？",
        "title": "Whoseを使った疑問文",
        "audio_folder_name": "Questionwhose",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "Whose pudding is in the fridge?",
        "japanese_translation": "冷蔵庫のプリン誰の？",
        "title": "Whoseを使った疑問文",
        "audio_folder_name": "Questionwhose",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "Whose t-shirt is in the bathroom?",
        "japanese_translation": "お風呂にあるTシャツ誰の？",
        "title": "Whoseを使った疑問文",
        "audio_folder_name": "Questionwhose",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "How is your family?",
        "japanese_translation": "家族は元気？",
        "title": "Howを使った疑問文1/2",
        "audio_folder_name": "Questionhow1",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "How is your mom doing?",
        "japanese_translation": "お母さんどうしてる？",
        "title": "Howを使った疑問文1/2",
        "audio_folder_name": "Questionhow1",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "How do you make this soup?",
        "japanese_translation": "このスープどうやって作るの？",
        "title": "Howを使った疑問文1/2",
        "audio_folder_name": "Questionhow1",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "How do you usually spend your weekend?",
        "japanese_translation": "週末はいつもどう過ごしてるの？",
        "title": "Howを使った疑問文1/2",
        "audio_folder_name": "Questionhow1",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "How was your day?",
        "japanese_translation": "今日はどうだった？",
        "title": "Howを使った疑問文1/2",
        "audio_folder_name": "Questionhow1",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "How was the drinking party last night?",
        "japanese_translation": "昨日の飲み会はどうだった？",
        "title": "Howを使った疑問文1/2",
        "audio_folder_name": "Questionhow1",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "How was the new cafe?",
        "japanese_translation": "あの新しいカフェどうだった？",
        "title": "Howを使った疑問文1/2",
        "audio_folder_name": "Questionhow1",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "How was your trip to Osaka?",
        "japanese_translation": "大阪の旅行どうだった？",
        "title": "Howを使った疑問文1/2",
        "audio_folder_name": "Questionhow1",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "How did you make this delicious curry?",
        "japanese_translation": "このおいしいカレー、どうやって作ったの？",
        "title": "Howを使った疑問文2/2",
        "audio_folder_name": "Questionhow2",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "How did you get here?",
        "japanese_translation": "どうやってここに来たの？",
        "title": "Howを使った疑問文2/2",
        "audio_folder_name": "Questionhow2",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "How did you fix the washing machine?",
        "japanese_translation": "洗濯機、どうやって直したの？",
        "title": "Howを使った疑問文2/2",
        "audio_folder_name": "Questionhow2",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "How did you persuade him?",
        "japanese_translation": "どうやって彼を説得したの？",
        "title": "Howを使った疑問文2/2",
        "audio_folder_name": "Questionhow2",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "How are you gonna spend your weekend?",
        "japanese_translation": "週末はどう過ごすつもり？",
        "title": "Howを使った疑問文2/2",
        "audio_folder_name": "Questionhow2",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "How are you gonna go to Fukuoka?",
        "japanese_translation": "福岡にはどうやって行くの？",
        "title": "Howを使った疑問文2/2",
        "audio_folder_name": "Questionhow2",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "How are you gonna explain it to him?",
        "japanese_translation": "彼にそれをどう説明するの？",
        "title": "Howを使った疑問文2/2",
        "audio_folder_name": "Questionhow2",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "How are you gonna come up with that much money?",
        "japanese_translation": "どうやってそんなお金を用意するの？",
        "title": "Howを使った疑問文2/2",
        "audio_folder_name": "Questionhow2",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "How long is the movie?",
        "japanese_translation": "映画はどれくらいの長さ？",
        "title": "How long1/2",
        "audio_folder_name": "Questionhowlong1",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "How long is your lunch break?",
        "japanese_translation": "ランチ休憩はどれくらいあるの？",
        "title": "How long1/2",
        "audio_folder_name": "Questionhowlong1",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "How long is the flight to Tokyo?",
        "japanese_translation": "東京までの飛行時間はどれくらい？",
        "title": "How long1/2",
        "audio_folder_name": "Questionhowlong1",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "How long does it take to walk to the school?",
        "japanese_translation": "学校まで歩いてどれくらい？",
        "title": "How long1/2",
        "audio_folder_name": "Questionhowlong1",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "How long does it take to go to your workplace?",
        "japanese_translation": "仕事場まではどれくらいかかるの？",
        "title": "How long1/2",
        "audio_folder_name": "Questionhowlong1",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "How long do you usually sleep?",
        "japanese_translation": "普段どれくらい寝るの？",
        "title": "How long1/2",
        "audio_folder_name": "Questionhowlong1",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "How long do you usually study English?",
        "japanese_translation": "普段は英語をどれくらい勉強しているの？",
        "title": "How long1/2",
        "audio_folder_name": "Questionhowlong1",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "How long does this battery last?",
        "japanese_translation": "このバッテリーはどれくらい持つの？",
        "title": "How long1/2",
        "audio_folder_name": "Questionhowlong1",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "How long did you wait?",
        "japanese_translation": "どれくらい待った？",
        "title": "How long2/2",
        "audio_folder_name": "Questionhowlong2",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "How long did you live in Osaka?",
        "japanese_translation": "大阪にどれくらい住んでたの？",
        "title": "How long2/2",
        "audio_folder_name": "Questionhowlong2",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "How long did you stay in the hospital?",
        "japanese_translation": "病院にどれくらい入院してたの？",
        "title": "How long2/2",
        "audio_folder_name": "Questionhowlong2",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "How long are you gonna stay at your parents' house?",
        "japanese_translation": "実家にはどれくらい滞在するの？",
        "title": "How long2/2",
        "audio_folder_name": "Questionhowlong2",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "How long are you gonna stay on your trip?",
        "japanese_translation": "どれくらいの期間旅行するの？",
        "title": "How long2/2",
        "audio_folder_name": "Questionhowlong2",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "How long are you gonna be away?",
        "japanese_translation": "どれくらいの留守にするの？",
        "title": "How long2/2",
        "audio_folder_name": "Questionhowlong2",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "How long have you been studying English?",
        "japanese_translation": "どれくらい英語を勉強してるの？",
        "title": "How long2/2",
        "audio_folder_name": "Questionhowlong2",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "How long have you been living in Chiba?",
        "japanese_translation": "千葉にはどれくらいの期間住んでるの？",
        "title": "How long2/2",
        "audio_folder_name": "Questionhowlong2",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "How many eggs do you need?",
        "japanese_translation": "卵いくつ必要？",
        "title": "howmanymuch1",
        "audio_folder_name": "Questionhowmanymuch1",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "How many kids do you have?",
        "japanese_translation": "子どもは何人いるの？",
        "title": "howmanymuch1",
        "audio_folder_name": "Questionhowmanymuch1",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "How many plates do we need?",
        "japanese_translation": "私たち、お皿何枚必要かな？",
        "title": "howmanymuch1",
        "audio_folder_name": "Questionhowmanymuch1",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "How many people are coming today?",
        "japanese_translation": "今日は何人来るの？",
        "title": "howmanymuch1",
        "audio_folder_name": "Questionhowmanymuch1",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "How much is this?",
        "japanese_translation": "これいくら？",
        "title": "howmanymuch1",
        "audio_folder_name": "Questionhowmanymuch1",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "How much water do you drink a day?",
        "japanese_translation": "1日に水はどれくらい飲むの？",
        "title": "howmanymuch1",
        "audio_folder_name": "Questionhowmanymuch1",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "How much money did you spend?",
        "japanese_translation": "いくら使ったの？",
        "title": "howmanymuch1",
        "audio_folder_name": "Questionhowmanymuch1",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "How much time do you have?",
        "japanese_translation": "あとどのくらい時間ある？",
        "title": "howmanymuch1",
        "audio_folder_name": "Questionhowmanymuch1",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "How many people are in your family?",
        "japanese_translation": "家族は何人いるの？",
        "title": "howmanymuch2",
        "audio_folder_name": "Questionhowmanymuch2",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "How many languages can you speak?",
        "japanese_translation": "何カ国語話せるの？",
        "title": "howmanymuch2",
        "audio_folder_name": "Questionhowmanymuch2",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "How many cups of coffee did you drink today?",
        "japanese_translation": "今日コーヒー何杯飲んだ？",
        "title": "howmanymuch2",
        "audio_folder_name": "Questionhowmanymuch2",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "How many slices of pizza did you eat?",
        "japanese_translation": "ピザ何枚食べた？",
        "title": "howmanymuch2",
        "audio_folder_name": "Questionhowmanymuch2",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "How much water do you drink in a day?",
        "japanese_translation": "1日の中でどれくらい水を飲む？",
        "title": "howmanymuch2",
        "audio_folder_name": "Questionhowmanymuch2",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "How much time do you spend on Instagram?",
        "japanese_translation": "インスタにどれくらい時間使ってる？",
        "title": "howmanymuch2",
        "audio_folder_name": "Questionhowmanymuch2",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "How much sleep did you get last night?",
        "japanese_translation": "昨日どれくらい寝れた？",
        "title": "howmanymuch2",
        "audio_folder_name": "Questionhowmanymuch2",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "How much space is left in the closet?",
        "japanese_translation": "クローゼットにあとどれくらいスペースある？",
        "title": "howmanymuch2",
        "audio_folder_name": "Questionhowmanymuch2",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "How often do you call your parents?",
        "japanese_translation": "どれくらいの頻度で両親に電話するの？",
        "title": "How often",
        "audio_folder_name": "Questionhowoften",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "How often do you eat out?",
        "japanese_translation": "どれくらいの頻度で外食するの？",
        "title": "How often",
        "audio_folder_name": "Questionhowoften",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "How often do you exercise?",
        "japanese_translation": "どれくらいの頻度で運動するの？",
        "title": "How often",
        "audio_folder_name": "Questionhowoften",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "How often do you go back to your hometown?",
        "japanese_translation": "どれくらいの頻度で地元に帰るの？",
        "title": "How often",
        "audio_folder_name": "Questionhowoften",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "How often do you drink coffee?",
        "japanese_translation": "どれくらいの頻度でコーヒー飲むの？",
        "title": "How often",
        "audio_folder_name": "Questionhowoften",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "How often does she travel abroad?",
        "japanese_translation": "彼女はどれくらいの頻度で海外旅行するの？",
        "title": "How often",
        "audio_folder_name": "Questionhowoften",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "How often do you meet your friends?",
        "japanese_translation": "友達とどれくらいの頻度で会ってる？",
        "title": "How often",
        "audio_folder_name": "Questionhowoften",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "How often do you do laundry?",
        "japanese_translation": "洗濯ってどれくらいの頻度でしてる？",
        "title": "How often",
        "audio_folder_name": "Questionhowoften",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "How many times do you play table tennis in a month?",
        "japanese_translation": "一ヶ月に何回卓球をしてるの？",
        "title": "How many times",
        "audio_folder_name": "Questionhowmanytimes",
        "chapter": "chapter5"
    },
    {
        "number": "2",
        "english_sentence": "How many times do you do the laundry in a week?",
        "japanese_translation": "週に何回洗濯してるの？",
        "title": "How many times",
        "audio_folder_name": "Questionhowmanytimes",
        "chapter": "chapter5"
    },
    {
        "number": "3",
        "english_sentence": "How many times do you cook in a week?",
        "japanese_translation": "週に何回料理してるの？",
        "title": "How many times",
        "audio_folder_name": "Questionhowmanytimes",
        "chapter": "chapter5"
    },
    {
        "number": "4",
        "english_sentence": "How many times have you been to Kyoto?",
        "japanese_translation": "京都に何回行ったことある？",
        "title": "How many times",
        "audio_folder_name": "Questionhowmanytimes",
        "chapter": "chapter5"
    },
    {
        "number": "5",
        "english_sentence": "How many times have you been to Hawaii?",
        "japanese_translation": "ハワイには何回行ったことあるの？",
        "title": "How many times",
        "audio_folder_name": "Questionhowmanytimes",
        "chapter": "chapter5"
    },
    {
        "number": "6",
        "english_sentence": "How many times did you watch the movie?",
        "japanese_translation": "その映画何回見たの？",
        "title": "How many times",
        "audio_folder_name": "Questionhowmanytimes",
        "chapter": "chapter5"
    },
    {
        "number": "7",
        "english_sentence": "How many times did you watch the drama?",
        "japanese_translation": "そのドラマ何回見たの？",
        "title": "How many times",
        "audio_folder_name": "Questionhowmanytimes",
        "chapter": "chapter5"
    },
    {
        "number": "8",
        "english_sentence": "How many times do you exercise in a week?",
        "japanese_translation": "週に何回運動してるの？",
        "title": "How many times",
        "audio_folder_name": "Questionhowmanytimes",
        "chapter": "chapter5"
    },
    {
        "number": "1",
        "english_sentence": "It is important to exercise every day.",
        "japanese_translation": "毎日運動するのは大切だ。",
        "title": "to(主語)",
        "audio_folder_name": "ToSubject",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "It is hard to wake up early every morning.",
        "japanese_translation": "毎朝早起きするのは大変。",
        "title": "to(主語)",
        "audio_folder_name": "ToSubject",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "It is fun to study English.",
        "japanese_translation": "英語を勉強するのは楽しい。",
        "title": "to(主語)",
        "audio_folder_name": "ToSubject",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "It is difficult to make time for studying English.",
        "japanese_translation": "英語を勉強する時間を作るのは難しい。",
        "title": "to(主語)",
        "audio_folder_name": "ToSubject",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "It is rewarding to raise kids.",
        "japanese_translation": "子育てはやりがいがある。",
        "title": "to(主語)",
        "audio_folder_name": "ToSubject",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "It is a hassle to do the laundry.",
        "japanese_translation": "洗濯物をするのは面倒くさい。",
        "title": "to(主語)",
        "audio_folder_name": "ToSubject",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "It is exciting to plan a family trip.",
        "japanese_translation": "家族旅行の計画を立てるのはワクワクする。",
        "title": "to(主語)",
        "audio_folder_name": "ToSubject",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "It is frustrating to look for lost items.",
        "japanese_translation": "なくし物探すのってイライラする。",
        "title": "to(主語)",
        "audio_folder_name": "ToSubject",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "I want to take a nap after lunch.",
        "japanese_translation": "お昼ご飯の後にちょっと昼寝したいな。",
        "title": "to(目的語)",
        "audio_folder_name": "ToObject1",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "I want to go to a cafe and relax.",
        "japanese_translation": "カフェに行ってのんびりしたい。",
        "title": "to(目的語)",
        "audio_folder_name": "ToObject1",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "I decided to wake up earlier every day.",
        "japanese_translation": "毎日もう少し早起きすることに決めた。",
        "title": "to(目的語)",
        "audio_folder_name": "ToObject1",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "I decided to save more money.",
        "japanese_translation": "もっとお金を貯めることにしたよ。",
        "title": "to(目的語)",
        "audio_folder_name": "ToObject1",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "I managed to finish all the housework this morning.",
        "japanese_translation": "今朝、なんとか家事を全部終わらせたよ。",
        "title": "to(目的語)",
        "audio_folder_name": "ToObject1",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "I managed to make it on time.",
        "japanese_translation": "なんとか時間に間に合った。",
        "title": "to(目的語)",
        "audio_folder_name": "ToObject1",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "He promised to return the money.",
        "japanese_translation": "彼はお金を返すって約束したよ。",
        "title": "to(目的語)",
        "audio_folder_name": "ToObject1",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "He promised to be on time.",
        "japanese_translation": "彼は時間通りに来るって約束したよ。",
        "title": "to(目的語)",
        "audio_folder_name": "ToObject1",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "I have to pick up my kids.",
        "japanese_translation": "子ども迎えに行かなきゃ。",
        "title": "to(慣用表現)",
        "audio_folder_name": "ToObject2",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "I have to go to the bank tomorrow.",
        "japanese_translation": "明日は銀行に行かないと。",
        "title": "to(慣用表現)",
        "audio_folder_name": "ToObject2",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "I tend to forget things.",
        "japanese_translation": "物忘れしがちなんだよね。",
        "title": "to(慣用表現)",
        "audio_folder_name": "ToObject2",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "I tend to overthink.",
        "japanese_translation": "考えすぎちゃいがちなんだよね。",
        "title": "to(慣用表現)",
        "audio_folder_name": "ToObject2",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "I tend to forget where I put my keys.",
        "japanese_translation": "鍵をどこに置いたか忘れがちなんだよね。",
        "title": "to(慣用表現)",
        "audio_folder_name": "ToObject2",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "I tend to buy too many snacks.",
        "japanese_translation": "お菓子をつい買いすぎちゃうんだよね。",
        "title": "to(慣用表現)",
        "audio_folder_name": "ToObject2",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "I try to stay positive.",
        "japanese_translation": "ポジティブでいれるようにしてる。",
        "title": "to(慣用表現)",
        "audio_folder_name": "ToObject2",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "I try to exercise every day.",
        "japanese_translation": "毎日運動するようにしてる。",
        "title": "to(慣用表現)",
        "audio_folder_name": "ToObject2",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "My goal is to speak English like a native speaker.",
        "japanese_translation": "ネイティブみたいに英語を話すのが私の目標なんだ。",
        "title": "to(補語)",
        "audio_folder_name": "ToComplement",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "My goal is to live abroad.",
        "japanese_translation": "海外で暮らすのが私の目標なんだ。",
        "title": "to(補語)",
        "audio_folder_name": "ToComplement",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "My dream is to open a small cafe.",
        "japanese_translation": "小さなカフェを開くのが夢なんだ。",
        "title": "to(補語)",
        "audio_folder_name": "ToComplement",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "My dream is to go to his live concert.",
        "japanese_translation": "彼のライブに行くのが夢なんだ。",
        "title": "to(補語)",
        "audio_folder_name": "ToComplement",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "The best way to stay healthy is to eat well.",
        "japanese_translation": "健康を保つ一番の方法は、ちゃんと食べること。",
        "title": "to(補語)",
        "audio_folder_name": "ToComplement",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "The best way to save money is to cook at home.",
        "japanese_translation": "節約する一番の方法は、家で料理すること。",
        "title": "to(補語)",
        "audio_folder_name": "ToComplement",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "The best way to relax is to take a bath.",
        "japanese_translation": "リラックスする一番の方法は、お風呂に入ることだよ。",
        "title": "to(補語)",
        "audio_folder_name": "ToComplement",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "The best way to study English is to take this program.",
        "japanese_translation": "英語を勉強するいちばんの方法はこのプログラムを受けることだよ。",
        "title": "to(補語)",
        "audio_folder_name": "ToComplement",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "I study English to talk with foreign friends.",
        "japanese_translation": "外国の友達と話すために英語を勉強してる。",
        "title": "to(副詞的用法1)",
        "audio_folder_name": "ToPurpose",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "I exercise every day to lose weight.",
        "japanese_translation": "痩せるために毎日運動してるんだ。",
        "title": "to(副詞的用法1)",
        "audio_folder_name": "ToPurpose",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "I saved money to buy a new car.",
        "japanese_translation": "新しい車を買うために節約したんだ。",
        "title": "to(副詞的用法1)",
        "audio_folder_name": "ToPurpose",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "I went to Kanagawa to see my family.",
        "japanese_translation": "家族に会うために神奈川に行ったんだ。",
        "title": "to(副詞的用法1)",
        "audio_folder_name": "ToPurpose",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "I quit my job to concentrate on studying English.",
        "japanese_translation": "英語の勉強に集中するために仕事をやめたんだ。",
        "title": "to(副詞的用法1)",
        "audio_folder_name": "ToPurpose",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "I woke up early to make breakfast.",
        "japanese_translation": "朝ごはんを作るために早起きしたよ。",
        "title": "to(副詞的用法1)",
        "audio_folder_name": "ToPurpose",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "I started running to stay healthy.",
        "japanese_translation": "健康的でいるためにランニングを始めたんだ。",
        "title": "to(副詞的用法1)",
        "audio_folder_name": "ToPurpose",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "I started cooking to save money.",
        "japanese_translation": "節約をするために料理を始めたよ。",
        "title": "to(副詞的用法1)",
        "audio_folder_name": "ToPurpose",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "I'm happy to see you again.",
        "japanese_translation": "また会えて嬉しいよ。",
        "title": "to(副詞的用法2)",
        "audio_folder_name": "ToEmotion",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "I'm happy to work with you.",
        "japanese_translation": "あなたと働けて幸せです！",
        "title": "to(副詞的用法2)",
        "audio_folder_name": "ToEmotion",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "I'm excited to go on a trip next week.",
        "japanese_translation": "来週旅行に行くのが楽しみ！",
        "title": "to(副詞的用法2)",
        "audio_folder_name": "ToEmotion",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "I'm excited to go to his live concert.",
        "japanese_translation": "彼のライブに行けるのが楽しみ！",
        "title": "to(副詞的用法2)",
        "audio_folder_name": "ToEmotion",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "I'm glad to hear that.",
        "japanese_translation": "それを聞けて嬉しいよ。",
        "title": "to(副詞的用法2)",
        "audio_folder_name": "ToEmotion",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "I'm glad to help you.",
        "japanese_translation": "手伝えて嬉しいよ。",
        "title": "to(副詞的用法2)",
        "audio_folder_name": "ToEmotion",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "I'm ready to leave.",
        "japanese_translation": "出かける準備ができてるよ。",
        "title": "to(副詞的用法2)",
        "audio_folder_name": "ToEmotion",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "I'm surprised to hear that.",
        "japanese_translation": "それを聞いてびっくりしてるよ。",
        "title": "to(副詞的用法2)",
        "audio_folder_name": "ToEmotion",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "I need something to drink.",
        "japanese_translation": "何か飲み物が欲しいな。",
        "title": "形容詞的用法",
        "audio_folder_name": "ToAdjective",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "I want something to eat for lunch.",
        "japanese_translation": "お昼に食べるものが欲しい。",
        "title": "形容詞的用法",
        "audio_folder_name": "ToAdjective",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "I'm looking for a place to relax.",
        "japanese_translation": "くつろげる場所を探してるんだ。",
        "title": "形容詞的用法",
        "audio_folder_name": "ToAdjective",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "I found a good cafe to work at.",
        "japanese_translation": "仕事するのにちょうどいいカフェを見つけたよ。",
        "title": "形容詞的用法",
        "audio_folder_name": "ToAdjective",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "I have a lot of things to do today.",
        "japanese_translation": "今日はやることがたくさんあるんだ。",
        "title": "形容詞的用法",
        "audio_folder_name": "ToAdjective",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "Do you have anything to write with?",
        "japanese_translation": "何か書くもの持ってる？",
        "title": "形容詞的用法",
        "audio_folder_name": "ToAdjective",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "There is no place to park the car.",
        "japanese_translation": "車を停める場所がない。",
        "title": "形容詞的用法",
        "audio_folder_name": "ToAdjective",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "I don't have time to cook today.",
        "japanese_translation": "今日は料理する時間がないんだ。",
        "title": "形容詞的用法",
        "audio_folder_name": "ToAdjective",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "Cooking dinner every day is hard.",
        "japanese_translation": "毎日夜ご飯を作るのは大変だよ。",
        "title": "ing",
        "audio_folder_name": "ing",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "Cleaning the house takes a lot of time.",
        "japanese_translation": "家を掃除するのは時間がかかる。",
        "title": "ing",
        "audio_folder_name": "ing",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "Taking care of kids is so hard.",
        "japanese_translation": "子どもの世話をするのはすごく大変だよ。",
        "title": "ing",
        "audio_folder_name": "ing",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "Waking up early is difficult for me.",
        "japanese_translation": "早起きするのは難しい。",
        "title": "ing",
        "audio_folder_name": "ing",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "Talking to my friends is fun.",
        "japanese_translation": "友達と話すのは楽しい。",
        "title": "ing",
        "audio_folder_name": "ing",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "Going for a walk is refreshing.",
        "japanese_translation": "散歩に行くのって気持ちいい。",
        "title": "ing",
        "audio_folder_name": "ing",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "Saving money is important.",
        "japanese_translation": "お金を貯めるのって大事。",
        "title": "ing",
        "audio_folder_name": "ing",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "Studying English every day is harder than I thought.",
        "japanese_translation": "毎日英語を勉強するのって思ってたよりも難しい。",
        "title": "ing",
        "audio_folder_name": "ing",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "It's time to make dinner.",
        "japanese_translation": "そろそろ夜ご飯を作る時間だ。",
        "title": "time to",
        "audio_folder_name": "timeto",
        "chapter": "chapter6"
    },
    {
        "number": "2",
        "english_sentence": "It's time to pick up the kids.",
        "japanese_translation": "子どもを迎えに行く時間だね。",
        "title": "time to",
        "audio_folder_name": "timeto",
        "chapter": "chapter6"
    },
    {
        "number": "3",
        "english_sentence": "It's time to go to bed.",
        "japanese_translation": "もう寝る時間だよ。",
        "title": "time to",
        "audio_folder_name": "timeto",
        "chapter": "chapter6"
    },
    {
        "number": "4",
        "english_sentence": "I need some time to relax.",
        "japanese_translation": "ちょっとリラックスする時間が欲しいな。",
        "title": "time to",
        "audio_folder_name": "timeto",
        "chapter": "chapter6"
    },
    {
        "number": "5",
        "english_sentence": "I need some time to think about it.",
        "japanese_translation": "それについてちょっと考える時間が欲しい。",
        "title": "time to",
        "audio_folder_name": "timeto",
        "chapter": "chapter6"
    },
    {
        "number": "6",
        "english_sentence": "This is my first time trying this dish.",
        "japanese_translation": "この料理を食べるのは初めてだよ。",
        "title": "time to",
        "audio_folder_name": "timeto",
        "chapter": "chapter6"
    },
    {
        "number": "7",
        "english_sentence": "This is my first time watching this movie.",
        "japanese_translation": "この映画を見るのは初めてだよ。",
        "title": "time to",
        "audio_folder_name": "timeto",
        "chapter": "chapter6"
    },
    {
        "number": "8",
        "english_sentence": "It was my first time visiting Kyoto.",
        "japanese_translation": "京都を訪れるのは初めてだった。",
        "title": "time to",
        "audio_folder_name": "timeto",
        "chapter": "chapter6"
    },
    {
        "number": "1",
        "english_sentence": "I cleaned the kitchen and did the laundry.",
        "japanese_translation": "キッチンを掃除して、洗濯もしたよ。",
        "title": "and",
        "audio_folder_name": "and",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I went to the store and got some milk.",
        "japanese_translation": "お店に行って、牛乳買ってきたよ。",
        "title": "and",
        "audio_folder_name": "and",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I took a shower and went to bed.",
        "japanese_translation": "シャワー浴びて、寝たよ。",
        "title": "and",
        "audio_folder_name": "and",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I folded the clothes and put them away.",
        "japanese_translation": "服を畳んで、しまったよ。",
        "title": "and",
        "audio_folder_name": "and",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I called my mom and talked for an hour.",
        "japanese_translation": "お母さんに電話して、1時間くらい話したよ。",
        "title": "and",
        "audio_folder_name": "and",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I cut some fruit and made a salad.",
        "japanese_translation": "フルーツを切って、サラダ作ったよ。",
        "title": "and",
        "audio_folder_name": "and",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I opened the window and let fresh air in.",
        "japanese_translation": "窓を開けて、新鮮な空気を入れたよ。",
        "title": "and",
        "audio_folder_name": "and",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I wrote a letter and sent it to my friend.",
        "japanese_translation": "手紙を書いて、友達に送ったよ。",
        "title": "and",
        "audio_folder_name": "and",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I cleaned the house, but it's still messy.",
        "japanese_translation": "家を掃除したけど、まだ散らかってる。",
        "title": "but",
        "audio_folder_name": "but",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I want to take a nap, but I'm too busy.",
        "japanese_translation": "昼寝したいけど、忙しすぎる。",
        "title": "but",
        "audio_folder_name": "but",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I tried to call you, but you didn't answer.",
        "japanese_translation": "電話したけど、出なかったね。",
        "title": "but",
        "audio_folder_name": "but",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I bought this dress, but it's too big.",
        "japanese_translation": "このワンピース買ったけど、大きすぎたよ。",
        "title": "but",
        "audio_folder_name": "but",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I want to watch TV, but the remote is missing.",
        "japanese_translation": "テレビ見たいけど、リモコンがない。",
        "title": "but",
        "audio_folder_name": "but",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I was going to make coffee, but we ran out.",
        "japanese_translation": "コーヒー入れようと思ったけど、切らしてた。",
        "title": "but",
        "audio_folder_name": "but",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I want to go out, but it's raining.",
        "japanese_translation": "出かけたいけど、雨降ってるんだよね。",
        "title": "but",
        "audio_folder_name": "but",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I bought eggs, but I forgot to buy the milk.",
        "japanese_translation": "卵は買ったけど、牛乳を買い忘れた。",
        "title": "but",
        "audio_folder_name": "but",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "Drink your coffee now, or it'll get cold.",
        "japanese_translation": "今コーヒー飲んで、じゃないと冷めちゃうよ。",
        "title": "or",
        "audio_folder_name": "or",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "Take an umbrella, or you'll get wet.",
        "japanese_translation": "傘持っていって、じゃないと濡れるよ。",
        "title": "or",
        "audio_folder_name": "or",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "Wake up now, or you'll miss the bus.",
        "japanese_translation": "今起きて、じゃないとバスに乗り遅れるよ。",
        "title": "or",
        "audio_folder_name": "or",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "Charge your phone, or the phone will die soon.",
        "japanese_translation": "携帯充電して、じゃないとすぐスマホのバッテリー切れるよ。",
        "title": "or",
        "audio_folder_name": "or",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "Be quiet, or the baby will wake up.",
        "japanese_translation": "静かにして、じゃないと赤ちゃん起きちゃうよ。",
        "title": "or",
        "audio_folder_name": "or",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "Finish your homework, or no TV.",
        "japanese_translation": "宿題終わらせて、そうしないとテレビなしね。",
        "title": "or",
        "audio_folder_name": "or",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "Close the window, or bugs will come in.",
        "japanese_translation": "窓閉めて、そうしないと虫入ってくるよ。",
        "title": "or",
        "audio_folder_name": "or",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "Hurry up, or we’ll be late!",
        "japanese_translation": "急いで、じゃないと遅れるよ！",
        "title": "or",
        "audio_folder_name": "or",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I was tired, so I went to bed early.",
        "japanese_translation": "疲れてたから、早めに寝たよ。",
        "title": "so",
        "audio_folder_name": "so",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I had a headache, so I didn't go to work yesterday.",
        "japanese_translation": "頭痛があったから、昨日は仕事には行かなかったよ。",
        "title": "so",
        "audio_folder_name": "so",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I forgot my wallet, so I couldn't buy anything.",
        "japanese_translation": "財布を忘れたから、何も買えなかったよ。",
        "title": "so",
        "audio_folder_name": "so",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I forgot to set the alarm, so I overslept.",
        "japanese_translation": "目覚ましかけ忘れたから、寝坊しちゃった。",
        "title": "so",
        "audio_folder_name": "so",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I had no time, so I bought dinner.",
        "japanese_translation": "時間がなかったから、夜ご飯を買ったよ。",
        "title": "so",
        "audio_folder_name": "so",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "It's raining, so I'll stay home today.",
        "japanese_translation": "雨だから今日は家にいるね。",
        "title": "so",
        "audio_folder_name": "so",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I'm free, so I can help you.",
        "japanese_translation": "暇だから、あなたのこと手伝えるよ。",
        "title": "so",
        "audio_folder_name": "so",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "It's late, so let's go to bed.",
        "japanese_translation": "遅いから寝ようか。",
        "title": "so",
        "audio_folder_name": "so",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I'll go shopping after I finish cleaning.",
        "japanese_translation": "掃除が終わったら買い物に行くね。",
        "title": "after",
        "audio_folder_name": "after",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I'll take a bath after dinner.",
        "japanese_translation": "夕飯の後にお風呂入るね。",
        "title": "after",
        "audio_folder_name": "after",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "Let's talk after you come back home.",
        "japanese_translation": "帰ってきたら話そうよ。",
        "title": "after",
        "audio_folder_name": "after",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I'll relax after my daughter sleeps.",
        "japanese_translation": "娘が寝たらゆっくりするね。",
        "title": "after",
        "audio_folder_name": "after",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I'll text you after I arrive.",
        "japanese_translation": "着いたらメールするね。",
        "title": "after",
        "audio_folder_name": "after",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "Let's eat dessert after we clean up.",
        "japanese_translation": "片付け終わったらデザート食べよう。",
        "title": "after",
        "audio_folder_name": "after",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I always study English after everyone sleeps.",
        "japanese_translation": "みんな寝た後にいつも英語を勉強するよ。",
        "title": "after",
        "audio_folder_name": "after",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "You can play games after you finish homework.",
        "japanese_translation": "宿題が終わったあとゲームしてもいいよ。",
        "title": "after",
        "audio_folder_name": "after",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I eat snacks before watching TV.",
        "japanese_translation": "テレビ見る前におやつ食べるよ。",
        "title": "before",
        "audio_folder_name": "before",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I stretch before exercise.",
        "japanese_translation": "運動の前にストレッチするよ。",
        "title": "before",
        "audio_folder_name": "before",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I water plants before going out.",
        "japanese_translation": "出かける前に植物に水をあげるよ。",
        "title": "before",
        "audio_folder_name": "before",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I wash my face before breakfast.",
        "japanese_translation": "朝ごはんの前に顔を洗うよ。",
        "title": "before",
        "audio_folder_name": "before",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I tidy up the living room before guests come.",
        "japanese_translation": "お客さんが来る前にリビングを片付けるよ。",
        "title": "before",
        "audio_folder_name": "before",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I prepare dinner before kids return home.",
        "japanese_translation": "子どもが帰る前に夕飯の準備をするよ。",
        "title": "before",
        "audio_folder_name": "before",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I turn off the lights before bed.",
        "japanese_translation": "寝る前に電気を消すよ。",
        "title": "before",
        "audio_folder_name": "before",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I check the fridge before shopping.",
        "japanese_translation": "買い物の前に冷蔵庫をチェックするよ。",
        "title": "before",
        "audio_folder_name": "before",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I didn't go to work yesterday because I had a cold.",
        "japanese_translation": "風邪ひいちゃったから、昨日は仕事を休んだよ。",
        "title": "because",
        "audio_folder_name": "because",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I bought a new pan because the old one broke.",
        "japanese_translation": "古いのが壊れたから新しいフライパン買ったよ。",
        "title": "because",
        "audio_folder_name": "because",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I went to bed early because I have to get up at 5 tomorrow.",
        "japanese_translation": "明日5時起きだから早く寝たよ。",
        "title": "because",
        "audio_folder_name": "because",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I took a taxi because I was running late.",
        "japanese_translation": "遅れそうだったからタクシー使ったよ。",
        "title": "because",
        "audio_folder_name": "because",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I cried because the movie was so touching.",
        "japanese_translation": "映画がすごく感動的だったから泣いちゃったよ。",
        "title": "because",
        "audio_folder_name": "because",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I didn't answer your call because I was driving.",
        "japanese_translation": "運転中だったから電話出なかったよ。",
        "title": "because",
        "audio_folder_name": "because",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I got angry because he lied to me.",
        "japanese_translation": "彼が嘘ついたから怒ったんだよね。",
        "title": "because",
        "audio_folder_name": "because",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I didn't buy the dress because it was expensive.",
        "japanese_translation": "高かったからそのワンピース買わなかったよ。",
        "title": "because",
        "audio_folder_name": "because",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I get sleepy when I read a book.",
        "japanese_translation": "本を読むと眠くなるよ。",
        "title": "when",
        "audio_folder_name": "when",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "When I wake up, I always check my phone.",
        "japanese_translation": "起きたら、いつも携帯チェックするんだ。",
        "title": "when",
        "audio_folder_name": "when",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "Let's go for a drink when we finish work.",
        "japanese_translation": "仕事が終わったら飲みに行こうよ。",
        "title": "when",
        "audio_folder_name": "when",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "Text me when you have time.",
        "japanese_translation": "暇なとき、メッセージ送って。",
        "title": "when",
        "audio_folder_name": "when",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "Call me when you get home.",
        "japanese_translation": "家に着いたら電話ちょうだい。",
        "title": "when",
        "audio_folder_name": "when",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "When I'm busy, I skip breakfast.",
        "japanese_translation": "忙しいときは朝ごはんは食べないよ。",
        "title": "when",
        "audio_folder_name": "when",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "When it's rainy, I'm always at home.",
        "japanese_translation": "雨の時は、いつも家にいるよ。",
        "title": "when",
        "audio_folder_name": "when",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "When I'm in a rush, I often forget my phone.",
        "japanese_translation": "急いでいる時は、よくスマホを忘れちゃうんだよね。",
        "title": "when",
        "audio_folder_name": "when",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I fell asleep while watching the movie.",
        "japanese_translation": "その映画見ながら寝落ちしちゃった。",
        "title": "while",
        "audio_folder_name": "while",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I fell asleep while studying English.",
        "japanese_translation": "英語を勉強しながら寝落ちしちゃった。",
        "title": "while",
        "audio_folder_name": "while",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I spilled coffee while driving today.",
        "japanese_translation": "今日運転中に、コーヒーこぼしちゃった。",
        "title": "while",
        "audio_folder_name": "while",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I had an accident while cycling today.",
        "japanese_translation": "今日自転車に乗りながら、事故っちゃった。",
        "title": "while",
        "audio_folder_name": "while",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I love reading books while listening to music.",
        "japanese_translation": "音楽を聴きながら、本を読むのが好きなんだ。",
        "title": "while",
        "audio_folder_name": "while",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I study English while listening to classical music.",
        "japanese_translation": "クラシック音楽を聴きながら英語を勉強してるんだ。",
        "title": "while",
        "audio_folder_name": "while",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I heard a sound while taking a shower.",
        "japanese_translation": "シャワーを浴びてる途中に何か音が聞こえた。",
        "title": "while",
        "audio_folder_name": "while",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "My husband came back home while I was taking a shower.",
        "japanese_translation": "シャワー中に旦那が帰ってきたんだ。",
        "title": "while",
        "audio_folder_name": "while",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I'll buy it if it's on sale.",
        "japanese_translation": "セールだったら買うよ。",
        "title": "if",
        "audio_folder_name": "if",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I'll call you if I'm late.",
        "japanese_translation": "遅れそうだったら電話するよ。",
        "title": "if",
        "audio_folder_name": "if",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I'll go out if it stops raining.",
        "japanese_translation": "雨がやんだら出かけるよ。",
        "title": "if",
        "audio_folder_name": "if",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I'll cook dinner if you're tired.",
        "japanese_translation": "疲れてたら晩ごはん作るよ。",
        "title": "if",
        "audio_folder_name": "if",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I'll wake you up if you oversleep.",
        "japanese_translation": "寝坊してたら、起こしてあげるよ。",
        "title": "if",
        "audio_folder_name": "if",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "Call me if you need anything.",
        "japanese_translation": "何か必要だったら電話してね。",
        "title": "if",
        "audio_folder_name": "if",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "Tell me if you're hungry.",
        "japanese_translation": "お腹すいたら言ってね。",
        "title": "if",
        "audio_folder_name": "if",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "If you have time, let's catch up.",
        "japanese_translation": "時間あったら会おうよ。",
        "title": "if",
        "audio_folder_name": "if",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "Even if it's raining, I go shopping.",
        "japanese_translation": "雨が降ってても、買い物には行くよ。",
        "title": "even if",
        "audio_folder_name": "evenif",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "Even if I'm busy, I'll check my messages.",
        "japanese_translation": "忙しくてもメッセージは確認するよ。",
        "title": "even if",
        "audio_folder_name": "evenif",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I wake up early even if it's Sunday.",
        "japanese_translation": "日曜でも早起きするよ。",
        "title": "even if",
        "audio_folder_name": "evenif",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "Even if I'm full, I eat dessert.",
        "japanese_translation": "お腹いっぱいでもデザートは食べちゃうよ。",
        "title": "even if",
        "audio_folder_name": "evenif",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "Even if it's cold, I drink iced coffee.",
        "japanese_translation": "寒くてもアイスコーヒー飲むよ。",
        "title": "even if",
        "audio_folder_name": "evenif",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "Even if I'm tired, I end up checking Instagram.",
        "japanese_translation": "疲れててもついインスタ見ちゃうんだよね。",
        "title": "even if",
        "audio_folder_name": "evenif",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "Even if I'm busy, I'll come.",
        "japanese_translation": "忙しくても行くよ。",
        "title": "even if",
        "audio_folder_name": "evenif",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "Even if I fail, I'll try again.",
        "japanese_translation": "失敗しても、もう一回挑戦するよ。",
        "title": "even if",
        "audio_folder_name": "evenif",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I ate cake even though I'm on a diet.",
        "japanese_translation": "ダイエット中なのにケーキ食べちゃった。",
        "title": "even though",
        "audio_folder_name": "eventhough",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I drank coffee even though it's late.",
        "japanese_translation": "遅いのにコーヒー飲んじゃったよ。",
        "title": "even though",
        "audio_folder_name": "eventhough",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I bought another bag even though I have many.",
        "japanese_translation": "たくさん持ってるのにまたバッグ買っちゃった。",
        "title": "even though",
        "audio_folder_name": "eventhough",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I took a nap even though I'm busy.",
        "japanese_translation": "忙しいのに昼寝しちゃったよ。",
        "title": "even though",
        "audio_folder_name": "eventhough",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I ate snacks even though it’s almost dinner time.",
        "japanese_translation": "もうすぐ夜ご飯なのにお菓子食べちゃった。",
        "title": "even though",
        "audio_folder_name": "eventhough",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I ordered pizza even though we had leftovers.",
        "japanese_translation": "残り物あるのにピザ頼んじゃったんだ。",
        "title": "even though",
        "audio_folder_name": "eventhough",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I ate ramen even though it's midnight.",
        "japanese_translation": "夜中なのにラーメン食べちゃった。",
        "title": "even though",
        "audio_folder_name": "eventhough",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I had wine even though it's a weekday.",
        "japanese_translation": "平日なのにワイン飲んじゃった。",
        "title": "even though",
        "audio_folder_name": "eventhough",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "Once I finish work, I'll call you.",
        "japanese_translation": "仕事が終わったら電話するね。",
        "title": "once",
        "audio_folder_name": "once",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "Once you try it, you'll love it.",
        "japanese_translation": "一回やってみたら、きっと気に入るよ。",
        "title": "once",
        "audio_folder_name": "once",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "Once the movie starts, you can't talk.",
        "japanese_translation": "映画が始まったら、話せないよ。",
        "title": "once",
        "audio_folder_name": "once",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "Once I eat chips, I can't stop.",
        "japanese_translation": "ポテチ食べたら止まらないよ。",
        "title": "once",
        "audio_folder_name": "once",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "Once I open Instagram, time flies.",
        "japanese_translation": "インスタ開いたら時間あっという間だよ。",
        "title": "once",
        "audio_folder_name": "once",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "Once I open YouTube, I keep watching.",
        "japanese_translation": "YouTube開いたらずっと見ちゃうよ。",
        "title": "once",
        "audio_folder_name": "once",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "Once I start shopping, I buy too much.",
        "japanese_translation": "買い物始めると買いすぎちゃうよ。",
        "title": "once",
        "audio_folder_name": "once",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "Once I start organizing, I can't stop.",
        "japanese_translation": "片付け始めると止まらなくなるんだよね。",
        "title": "once",
        "audio_folder_name": "once",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I baked cookies since I had free time.",
        "japanese_translation": "せっかく時間あったからクッキー焼いたよ。",
        "title": "since",
        "audio_folder_name": "since",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I went shopping since the weather was nice.",
        "japanese_translation": "せっかく天気いいから買い物に行ったよ。",
        "title": "since",
        "audio_folder_name": "since",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "Since it's your birthday, let's do something special!",
        "japanese_translation": "せっかく君の誕生日だから、何か特別なことしようよ！",
        "title": "since",
        "audio_folder_name": "since",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "Since we have some free time, let's watch a movie.",
        "japanese_translation": "せっかく時間があるし、映画でも観ようよ。",
        "title": "since",
        "audio_folder_name": "since",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I've been working from home since last year.",
        "japanese_translation": "去年からずっと在宅勤務してるよ。",
        "title": "since",
        "audio_folder_name": "since",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I haven't driven a car since last year.",
        "japanese_translation": "去年からずっと、車を運転してないんだよね。",
        "title": "since",
        "audio_folder_name": "since",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I've been studying English since I was a high school student.",
        "japanese_translation": "高校生以来ずっと英語勉強してるよ。",
        "title": "since",
        "audio_folder_name": "since",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I've been living here since I got married.",
        "japanese_translation": "結婚してからずっとここに住んでるんだ。",
        "title": "since",
        "audio_folder_name": "since",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I won't go out unless it's sunny.",
        "japanese_translation": "晴れてないと出かけないよ。",
        "title": "unless/until",
        "audio_folder_name": "unlessuntil",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I won't buy it unless it's on sale.",
        "japanese_translation": "セールじゃなきゃ買わないよ。",
        "title": "unless/until",
        "audio_folder_name": "unlessuntil",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "You can't eat this unless you heat it.",
        "japanese_translation": "温めないと食べられないよ。",
        "title": "unless/until",
        "audio_folder_name": "unlessuntil",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I won't sleep unless the lights are off.",
        "japanese_translation": "電気を消さないと眠れないよ。",
        "title": "unless/until",
        "audio_folder_name": "unlessuntil",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I won't join unless she comes too.",
        "japanese_translation": "彼女も来ないと参加しないかな",
        "title": "unless/until",
        "audio_folder_name": "unlessuntil",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I won't watch it unless it's funny.",
        "japanese_translation": "面白くないと観ないよ。",
        "title": "unless/until",
        "audio_folder_name": "unlessuntil",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "He doesn’t eat veggies unless they’re fried.",
        "japanese_translation": "揚げてないと彼は野菜食べないよ。",
        "title": "unless/until",
        "audio_folder_name": "unlessuntil",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I won't go unless someone comes with me.",
        "japanese_translation": "誰か一緒じゃないと行かないよ。",
        "title": "unless/until",
        "audio_folder_name": "unlessuntil",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I'll buy it regardless of the price.",
        "japanese_translation": "値段に関係なく買うよ。",
        "title": "regardless of",
        "audio_folder_name": "regardlessof",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I'll go for a walk regardless of the time.",
        "japanese_translation": "時間に関係なく散歩に行くよ。",
        "title": "regardless of",
        "audio_folder_name": "regardlessof",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I'll clean the house regardless of the mess.",
        "japanese_translation": "散らかり具合に関係なく家を掃除するよ。",
        "title": "regardless of",
        "audio_folder_name": "regardlessof",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I'll eat dinner regardless of the menu.",
        "japanese_translation": "メニューに関係なく晩ごはんを食べるよ。",
        "title": "regardless of",
        "audio_folder_name": "regardlessof",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I'll take a break regardless of my schedule.",
        "japanese_translation": "予定に関係なく休憩するよ。",
        "title": "regardless of",
        "audio_folder_name": "regardlessof",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I'll wake up early regardless of the day.",
        "japanese_translation": "曜日に関係なく早起きするよ。",
        "title": "regardless of",
        "audio_folder_name": "regardlessof",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I'll visit my parents regardless of the distance.",
        "japanese_translation": "距離に関係なく両親に会いに行くよ。",
        "title": "regardless of",
        "audio_folder_name": "regardlessof",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I'll study English regardless of my age.",
        "japanese_translation": "年齢に関係なく英語を勉強するよ。",
        "title": "regardless of",
        "audio_folder_name": "regardlessof",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I'll walk instead of taking the bus.",
        "japanese_translation": "バスに乗る代わりに歩くよ。",
        "title": "instead of",
        "audio_folder_name": "insteadof",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I'll cook at home instead of eating out.",
        "japanese_translation": "外食する代わりに家で料理するよ。",
        "title": "instead of",
        "audio_folder_name": "insteadof",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I'll drink water instead of soda.",
        "japanese_translation": "炭酸飲料の代わりに水を飲むよ。",
        "title": "instead of",
        "audio_folder_name": "insteadof",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I'll use my bag instead of a plastic one.",
        "japanese_translation": "ビニール袋の代わりに自分のバッグを使うよ。",
        "title": "instead of",
        "audio_folder_name": "insteadof",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I'll clean the kitchen instead of watching TV.",
        "japanese_translation": "テレビを見る代わりにキッチンを掃除するよ。",
        "title": "instead of",
        "audio_folder_name": "insteadof",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I'll read a book instead of checking my phone.",
        "japanese_translation": "スマホを見る代わりに本を読むよ。",
        "title": "instead of",
        "audio_folder_name": "insteadof",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I'll take a bath instead of a shower.",
        "japanese_translation": "シャワーの代わりにお風呂に入るよ。",
        "title": "instead of",
        "audio_folder_name": "insteadof",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I'll call instead of texting.",
        "japanese_translation": "メッセージを送る代わりに電話するよ。",
        "title": "instead of",
        "audio_folder_name": "insteadof",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I fell asleep during the movie.",
        "japanese_translation": "映画の間に寝ちゃったよ。",
        "title": "during",
        "audio_folder_name": "during",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I had a snack during the break.",
        "japanese_translation": "休憩中におやつ食べたよ。",
        "title": "during",
        "audio_folder_name": "during",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I talked to my friend during lunch.",
        "japanese_translation": "ランチの間に友達と話してたよ。",
        "title": "during",
        "audio_folder_name": "during",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I took a nap during the afternoon.",
        "japanese_translation": "午後にちょっと昼寝したよ。",
        "title": "during",
        "audio_folder_name": "during",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I felt sleepy during the lecture.",
        "japanese_translation": "講義の間に眠くなっちゃった。",
        "title": "during",
        "audio_folder_name": "during",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I went shopping during my free time.",
        "japanese_translation": "空いた時間に買い物行ってきたよ。",
        "title": "during",
        "audio_folder_name": "during",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I heard a strange noise during the night.",
        "japanese_translation": "夜中に変な音が聞こえたよ。",
        "title": "during",
        "audio_folder_name": "during",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I got a call from my mom during work.",
        "japanese_translation": "仕事中にお母さんから電話きたよ。",
        "title": "during",
        "audio_folder_name": "during",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I can't start my day without coffee.",
        "japanese_translation": "コーヒーなしじゃ一日を始められないよ。",
        "title": "without",
        "audio_folder_name": "without",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I don't go out without my phone.",
        "japanese_translation": "スマホなしじゃ外に出られないよ。",
        "title": "without",
        "audio_folder_name": "without",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I can't cook without a recipe.",
        "japanese_translation": "レシピなしじゃ料理できないよ。",
        "title": "without",
        "audio_folder_name": "without",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I can't leave the house without my keys.",
        "japanese_translation": "鍵なしじゃ家を出られないよ。",
        "title": "without",
        "audio_folder_name": "without",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I don't feel safe without a mask.",
        "japanese_translation": "マスクなしじゃ落ち着かないよ。",
        "title": "without",
        "audio_folder_name": "without",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I can't drive without my glasses.",
        "japanese_translation": "メガネなしじゃ運転できないよ。",
        "title": "without",
        "audio_folder_name": "without",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I can't eat curry without rice.",
        "japanese_translation": "カレーはご飯なしじゃ食べられないよ。",
        "title": "without",
        "audio_folder_name": "without",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I don't like tea without sugar.",
        "japanese_translation": "砂糖なしのお茶は好きじゃないよ。",
        "title": "without",
        "audio_folder_name": "without",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I get nervous every time I have an interview.",
        "japanese_translation": "面接のたびに緊張するんだ。",
        "title": "every time",
        "audio_folder_name": "everytime",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I feel happy every time I see my kids smile.",
        "japanese_translation": "子どもが笑うたびに幸せな気持ちになるよ。",
        "title": "every time",
        "audio_folder_name": "everytime",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I call my mom every time I go shopping.",
        "japanese_translation": "買い物に行くたびにお母さんに電話するよ。",
        "title": "every time",
        "audio_folder_name": "everytime",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I wash my hands every time I come home.",
        "japanese_translation": "家に帰るたびに手を洗ってるよ。",
        "title": "every time",
        "audio_folder_name": "everytime",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I cry every time I watch this movie.",
        "japanese_translation": "この映画を見るたびに泣いちゃうんだよね。",
        "title": "every time",
        "audio_folder_name": "everytime",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I forget something every time I travel.",
        "japanese_translation": "旅行のたびに何か忘れ物しちゃうんだ。",
        "title": "every time",
        "audio_folder_name": "everytime",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I get sleepy every time I read a book.",
        "japanese_translation": "本を読むたびに眠くなるよ。",
        "title": "every time",
        "audio_folder_name": "everytime",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I feel tired every time I clean the house.",
        "japanese_translation": "家を掃除するたびに疲れちゃう。",
        "title": "every time",
        "audio_folder_name": "everytime",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "Could you speak slowly so that I can understand?",
        "japanese_translation": "理解できるように、ゆっくり話してくれますか?",
        "title": "so that",
        "audio_folder_name": "sothat",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "I write things down so that I don't forget.",
        "japanese_translation": "忘れないようにメモしてるよ。",
        "title": "so that",
        "audio_folder_name": "sothat",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "I left early so that I wouldn't miss the train.",
        "japanese_translation": "電車に乗り遅れないように早めに出たよ。",
        "title": "so that",
        "audio_folder_name": "sothat",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I set an alarm so that I can wake up on time.",
        "japanese_translation": "時間通りに起きられるようにアラームをセットしたよ。",
        "title": "so that",
        "audio_folder_name": "sothat",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "I opened the window so that fresh air could come in.",
        "japanese_translation": "新鮮な空気が入るように窓を開けたよ。",
        "title": "so that",
        "audio_folder_name": "sothat",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I exercise every day so that I can stay healthy.",
        "japanese_translation": "健康を維持できるように毎日運動してるよ。",
        "title": "so that",
        "audio_folder_name": "sothat",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I saved money so that I could buy a new phone.",
        "japanese_translation": "新しいスマホを買えるようにお金を貯めたよ。",
        "title": "so that",
        "audio_folder_name": "sothat",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "I checked the weather so that I would know what to wear.",
        "japanese_translation": "何を着るか分かるように天気予報をチェックしたよ。",
        "title": "so that",
        "audio_folder_name": "sothat",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I'm happy as long as my family is healthy.",
        "japanese_translation": "家族が健康でいるなら、私は幸せだよ。",
        "title": "as long as",
        "audio_folder_name": "aslongas",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "You can stay here as long as you want.",
        "japanese_translation": "好きなだけここにいていいよ。",
        "title": "as long as",
        "audio_folder_name": "aslongas",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "As long as it doesn't rain, we can have a picnic.",
        "japanese_translation": "雨が降らない限り、ピクニックできるよ。",
        "title": "as long as",
        "audio_folder_name": "aslongas",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "I'll support you as long as you try your best.",
        "japanese_translation": "全力で頑張るなら、私は応援するよ。",
        "title": "as long as",
        "audio_folder_name": "aslongas",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "As long as I have coffee, I can wake up early.",
        "japanese_translation": "コーヒーさえあれば、早起きできるよ。",
        "title": "as long as",
        "audio_folder_name": "aslongas",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "I don't care about brands as long as the clothes are comfortable.",
        "japanese_translation": "服が着心地よければ、ブランドにはこだわらないよ。",
        "title": "as long as",
        "audio_folder_name": "aslongas",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "I'll go out as long as it's not too cold.",
        "japanese_translation": "寒すぎない限り、外に出るよ。",
        "title": "as long as",
        "audio_folder_name": "aslongas",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "As long as my kids are happy, I'm satisfied.",
        "japanese_translation": "子どもが幸せなら、それで満足だよ。",
        "title": "as long as",
        "audio_folder_name": "aslongas",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "No matter how busy I get, I'll make time for you.",
        "japanese_translation": "どれだけ忙しくても、君のために時間を作るよ。",
        "title": "no matter",
        "audio_folder_name": "nomatter",
        "chapter": "chapter7"
    },
    {
        "number": "2",
        "english_sentence": "No matter how tired I am, I always read a book before bed.",
        "japanese_translation": "どれだけ疲れていても、寝る前に本を読むよ。",
        "title": "no matter",
        "audio_folder_name": "nomatter",
        "chapter": "chapter7"
    },
    {
        "number": "3",
        "english_sentence": "No matter how hard it is, I won't give up.",
        "japanese_translation": "どんなに大変でも、諦めないよ。",
        "title": "no matter",
        "audio_folder_name": "nomatter",
        "chapter": "chapter7"
    },
    {
        "number": "4",
        "english_sentence": "No matter how late it gets, I'll wait for you.",
        "japanese_translation": "どんなに遅くなっても、待ってるよ。",
        "title": "no matter",
        "audio_folder_name": "nomatter",
        "chapter": "chapter7"
    },
    {
        "number": "5",
        "english_sentence": "No matter what happens, I'll always support you.",
        "japanese_translation": "何があっても、私はいつでも応援するよ。",
        "title": "no matter",
        "audio_folder_name": "nomatter",
        "chapter": "chapter7"
    },
    {
        "number": "6",
        "english_sentence": "No matter what I cook, my kids always complain.",
        "japanese_translation": "何を作っても、子どもが文句を言うんだよね。",
        "title": "no matter",
        "audio_folder_name": "nomatter",
        "chapter": "chapter7"
    },
    {
        "number": "7",
        "english_sentence": "No matter what I do, I can't lose weight.",
        "japanese_translation": "何をしても、痩せないよ。",
        "title": "no matter",
        "audio_folder_name": "nomatter",
        "chapter": "chapter7"
    },
    {
        "number": "8",
        "english_sentence": "No matter what I say, my husband forgets it.",
        "japanese_translation": "何を言っても、旦那が忘れちゃうんだよね。",
        "title": "no matter",
        "audio_folder_name": "nomatter",
        "chapter": "chapter7"
    },
    {
        "number": "1",
        "english_sentence": "I know that you're busy.",
        "japanese_translation": "君が忙しいのは知っているよ。",
        "title": "接続詞としてのthat",
        "audio_folder_name": "ThatAsConjunction",
        "chapter": "chapter8"
    },
    {
        "number": "2",
        "english_sentence": "I think that this curry is too spicy.",
        "japanese_translation": "このカレー辛すぎると思うよ。",
        "title": "接続詞としてのthat",
        "audio_folder_name": "ThatAsConjunction",
        "chapter": "chapter8"
    },
    {
        "number": "3",
        "english_sentence": "I feel that today will be a good day.",
        "japanese_translation": "今日は良い日になりそうな気がするよ。",
        "title": "接続詞としてのthat",
        "audio_folder_name": "ThatAsConjunction",
        "chapter": "chapter8"
    },
    {
        "number": "4",
        "english_sentence": "I hope that you get better soon.",
        "japanese_translation": "早く良くなるといいね。",
        "title": "接続詞としてのthat",
        "audio_folder_name": "ThatAsConjunction",
        "chapter": "chapter8"
    },
    {
        "number": "5",
        "english_sentence": "I'm glad that you liked the food.",
        "japanese_translation": "料理を気に入ってくれて嬉しいよ。",
        "title": "接続詞としてのthat",
        "audio_folder_name": "ThatAsConjunction",
        "chapter": "chapter8"
    },
    {
        "number": "6",
        "english_sentence": "I'm sure that he will come on time.",
        "japanese_translation": "彼は時間通りに来ると確信してるよ。",
        "title": "接続詞としてのthat",
        "audio_folder_name": "ThatAsConjunction",
        "chapter": "chapter8"
    },
    {
        "number": "7",
        "english_sentence": "He told me that the store is closed today.",
        "japanese_translation": "彼が今日お店は閉まってるって教えてくれたよ。",
        "title": "接続詞としてのthat",
        "audio_folder_name": "ThatAsConjunction",
        "chapter": "chapter8"
    },
    {
        "number": "8",
        "english_sentence": "They believe that this place is haunted.",
        "japanese_translation": "ここは幽霊が出るって彼らは信じてるよ。",
        "title": "接続詞としてのthat",
        "audio_folder_name": "ThatAsConjunction",
        "chapter": "chapter8"
    },
    {
        "number": "1",
        "english_sentence": "It's surprising that she didn't know about it.",
        "japanese_translation": "彼女がそれを知らなかったのは驚きだね。",
        "title": "補語のthat",
        "audio_folder_name": "ThatAsComplement",
        "chapter": "chapter8"
    },
    {
        "number": "2",
        "english_sentence": "It's nice that we have a holiday tomorrow.",
        "japanese_translation": "明日休みなのは嬉しいね。",
        "title": "補語のthat",
        "audio_folder_name": "ThatAsComplement",
        "chapter": "chapter8"
    },
    {
        "number": "3",
        "english_sentence": "It's sad that he moved to another city.",
        "japanese_translation": "彼が別の街に引っ越しちゃったのは寂しいね。",
        "title": "補語のthat",
        "audio_folder_name": "ThatAsComplement",
        "chapter": "chapter8"
    },
    {
        "number": "4",
        "english_sentence": "It's strange that nobody answered the phone.",
        "japanese_translation": "誰も電話に出なかったのは変だね。",
        "title": "補語のthat",
        "audio_folder_name": "ThatAsComplement",
        "chapter": "chapter8"
    },
    {
        "number": "5",
        "english_sentence": "It's lucky that we found a good babysitter.",
        "japanese_translation": "いいベビーシッターが見つかって、私たちラッキーだね。",
        "title": "補語のthat",
        "audio_folder_name": "ThatAsComplement",
        "chapter": "chapter8"
    },
    {
        "number": "6",
        "english_sentence": "It's annoying that the internet is so slow today.",
        "japanese_translation": "今日はネットがすごく遅くてイライラするね。",
        "title": "補語のthat",
        "audio_folder_name": "ThatAsComplement",
        "chapter": "chapter8"
    },
    {
        "number": "7",
        "english_sentence": "It's wonderful that you got the job.",
        "japanese_translation": "仕事が決まったのは素晴らしいね。",
        "title": "補語のthat",
        "audio_folder_name": "ThatAsComplement",
        "chapter": "chapter8"
    },
    {
        "number": "8",
        "english_sentence": "It's scary that the lights suddenly went out.",
        "japanese_translation": "急に電気が消えたのは怖かったね。",
        "title": "補語のthat",
        "audio_folder_name": "ThatAsComplement",
        "chapter": "chapter8"
    },
    {
        "number": "1",
        "english_sentence": "There's something that I need to tell you.",
        "japanese_translation": "君に伝えなきゃならないことがあるんだ。",
        "title": "thingthat",
        "audio_folder_name": "thingthat",
        "chapter": "chapter8"
    },
    {
        "number": "2",
        "english_sentence": "I bought something that you might like.",
        "japanese_translation": "君が気に入りそうなものを買ったよ。",
        "title": "thingthat",
        "audio_folder_name": "thingthat",
        "chapter": "chapter8"
    },
    {
        "number": "3",
        "english_sentence": "She found something that made her really happy.",
        "japanese_translation": "彼女はすごく嬉しくなるものを見つけたよ。",
        "title": "thingthat",
        "audio_folder_name": "thingthat",
        "chapter": "chapter8"
    },
    {
        "number": "4",
        "english_sentence": "I lost something that was really important to me.",
        "japanese_translation": "自分にとってすごく大切なものをなくしちゃったんだ。",
        "title": "thingthat",
        "audio_folder_name": "thingthat",
        "chapter": "chapter8"
    },
    {
        "number": "5",
        "english_sentence": "Is there anything that you don't understand?",
        "japanese_translation": "何かわからないことある？",
        "title": "thingthat",
        "audio_folder_name": "thingthat",
        "chapter": "chapter8"
    },
    {
        "number": "6",
        "english_sentence": "Do you have anything that you want to ask?",
        "japanese_translation": "聞きたいことは何かある？",
        "title": "thingthat",
        "audio_folder_name": "thingthat",
        "chapter": "chapter8"
    },
    {
        "number": "7",
        "english_sentence": "I'll do anything that makes my kids happy.",
        "japanese_translation": "子どもが喜ぶことなら何でもやるよ。",
        "title": "thingthat",
        "audio_folder_name": "thingthat",
        "chapter": "chapter8"
    },
    {
        "number": "8",
        "english_sentence": "Let me know if there's anything that you need.",
        "japanese_translation": "何か必要なものがあったら教えてね。",
        "title": "thingthat",
        "audio_folder_name": "thingthat",
        "chapter": "chapter8"
    },
    {
        "number": "1",
        "english_sentence": "I don't know what he wants.",
        "japanese_translation": "彼は何が欲しいのか分からない。",
        "title": "WhatSV",
        "audio_folder_name": "WhatSV",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "Can you tell me what she said?",
        "japanese_translation": "彼女が何を言ったのか教えてくれる？",
        "title": "WhatSV",
        "audio_folder_name": "WhatSV",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "I wonder what time the store opens.",
        "japanese_translation": "お店が何時に開くのか気になるな。",
        "title": "WhatSV",
        "audio_folder_name": "WhatSV",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "I know what you're trying to say.",
        "japanese_translation": "君が言おうとしていることはわかるよ。",
        "title": "WhatSV",
        "audio_folder_name": "WhatSV",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "I forgot what I was looking for.",
        "japanese_translation": "何を探してたのか忘れちゃった。",
        "title": "WhatSV",
        "audio_folder_name": "WhatSV",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "Tell me what you want for dinner.",
        "japanese_translation": "夜ご飯何が食べたいか教えて。",
        "title": "WhatSV",
        "audio_folder_name": "WhatSV",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "I couldn't catch what you said.",
        "japanese_translation": "あなたが言ったこと聞き取れなかった。",
        "title": "WhatSV",
        "audio_folder_name": "WhatSV",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "I can't believe what he said.",
        "japanese_translation": "彼の言ったことが信じられない。",
        "title": "WhatSV",
        "audio_folder_name": "WhatSV",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "I wonder if she's ready to go.",
        "japanese_translation": "彼女が出発する準備できてるかな。",
        "title": "ifSV",
        "audio_folder_name": "IfSV",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "I don't know if he will come.",
        "japanese_translation": "彼が来るか分からないよ。",
        "title": "ifSV",
        "audio_folder_name": "IfSV",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "I wonder if it's gonna rain tomorrow.",
        "japanese_translation": "明日雨降るのかな〜。",
        "title": "ifSV",
        "audio_folder_name": "IfSV",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "Tell me if you need anything.",
        "japanese_translation": "何か必要なら教えてね。",
        "title": "ifSV",
        "audio_folder_name": "IfSV",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "Let me know if you are free tomorrow.",
        "japanese_translation": "明日空いてるか教えてね。",
        "title": "ifSV",
        "audio_folder_name": "IfSV",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "I'll ask if they have a table for us.",
        "japanese_translation": "席があるか聞いてみるよ。",
        "title": "ifSV",
        "audio_folder_name": "IfSV",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "I'm not sure if I locked the door.",
        "japanese_translation": "鍵閉めたっけな。",
        "title": "ifSV",
        "audio_folder_name": "IfSV",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "I'll check if there's any Wi-Fi here.",
        "japanese_translation": "ここにWi-Fiがあるか確認するよ。",
        "title": "ifSV",
        "audio_folder_name": "IfSV",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "I'm not sure when she'll finish her work.",
        "japanese_translation": "彼女がいつ仕事を終えるか分からないな。",
        "title": "WhenSV",
        "audio_folder_name": "WhenSV",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "I wonder when the train leaves.",
        "japanese_translation": "いつ電車が出発するんだろう。",
        "title": "WhenSV",
        "audio_folder_name": "WhenSV",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "Tell me when you are ready.",
        "japanese_translation": "準備できたら教えてね。",
        "title": "WhenSV",
        "audio_folder_name": "WhenSV",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "Let me know when you arrive.",
        "japanese_translation": "着いたら教えてね。",
        "title": "WhenSV",
        "audio_folder_name": "WhenSV",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "I forgot when his birthday is.",
        "japanese_translation": "彼の誕生日がいつか忘れちゃった。",
        "title": "WhenSV",
        "audio_folder_name": "WhenSV",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "Can you check when the movie starts?",
        "japanese_translation": "映画がいつ始まるか確認してくれる？",
        "title": "WhenSV",
        "audio_folder_name": "WhenSV",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "Do you know when the next bus arrives?",
        "japanese_translation": "次のバスがいつ来るかわかる？",
        "title": "WhenSV",
        "audio_folder_name": "WhenSV",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "I don't know when he's coming back.",
        "japanese_translation": "彼がいつ戻ってくるかは分からない。",
        "title": "WhenSV",
        "audio_folder_name": "WhenSV",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "I don't know where he went.",
        "japanese_translation": "彼がどこに行ったか分からない。",
        "title": "WhereSV",
        "audio_folder_name": "WhereSV",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "Can you tell me where she is?",
        "japanese_translation": "彼女がどこにいるか教えてくれる？",
        "title": "WhereSV",
        "audio_folder_name": "WhereSV",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "I wonder where I left my phone.",
        "japanese_translation": "どこにスマホを置いたっけ？",
        "title": "WhereSV",
        "audio_folder_name": "WhereSV",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "Let me know where you want to go.",
        "japanese_translation": "どこに行きたいか教えてね。",
        "title": "WhereSV",
        "audio_folder_name": "WhereSV",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "Do you know where I can buy this?",
        "japanese_translation": "これをどこで買えるか知ってる？",
        "title": "WhereSV",
        "audio_folder_name": "WhereSV",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "I forgot where I parked my car.",
        "japanese_translation": "車をどこに停めたか忘れちゃった。",
        "title": "WhereSV",
        "audio_folder_name": "WhereSV",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "Tell me where you found this.",
        "japanese_translation": "これをどこで見つけたのか教えて。",
        "title": "WhereSV",
        "audio_folder_name": "WhereSV",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "Do you know where the grocery store is?",
        "japanese_translation": "スーパーがどこにあるか知ってる？",
        "title": "WhereSV",
        "audio_folder_name": "WhereSV",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "I can't remember who it was.",
        "japanese_translation": "それが誰だったのか覚えてない。",
        "title": "WhoSV",
        "audio_folder_name": "WhoSV",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "I don't know who he is.",
        "japanese_translation": "彼が誰なのかしらない。",
        "title": "WhoSV",
        "audio_folder_name": "WhoSV",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "Do you know who lives next door?",
        "japanese_translation": "隣に誰が住んでるか知ってる？",
        "title": "WhoSV",
        "audio_folder_name": "WhoSV",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "Do you know who brought these snacks?",
        "japanese_translation": "このお菓子誰が持ってきたか知ってる？",
        "title": "WhoSV",
        "audio_folder_name": "WhoSV",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "Tell me who told you that.",
        "japanese_translation": "誰がそれを言ったのか教えて。",
        "title": "WhoSV",
        "audio_folder_name": "WhoSV",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "I don't know who will come to the party.",
        "japanese_translation": "誰がパーティーに来るのか分からないよ。",
        "title": "WhoSV",
        "audio_folder_name": "WhoSV",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "Do you know who left this note?",
        "japanese_translation": "誰がこのメモ残したかわかる？",
        "title": "WhoSV",
        "audio_folder_name": "WhoSV",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "I forgot who gave me this book.",
        "japanese_translation": "この本を誰にもらったのか忘れちゃった。",
        "title": "WhoSV",
        "audio_folder_name": "WhoSV",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "Do you know which bus goes to the station?",
        "japanese_translation": "どのバスが駅に行くか知ってる？",
        "title": "WhichSV",
        "audio_folder_name": "WhichSV",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "She asked me which dress looks better.",
        "japanese_translation": "どのドレスが似合うか彼女に聞かれたよ。",
        "title": "WhichSV",
        "audio_folder_name": "WhichSV",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "Tell me which restaurant you prefer.",
        "japanese_translation": "どのレストランが好みか教えて。",
        "title": "WhichSV",
        "audio_folder_name": "WhichSV",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "I wonder which one is cheaper.",
        "japanese_translation": "どっちの方が安いんだろう。",
        "title": "WhichSV",
        "audio_folder_name": "WhichSV",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "Can you check which room is available?",
        "japanese_translation": "どの部屋が空いてるか確認してくれる？",
        "title": "WhichSV",
        "audio_folder_name": "WhichSV",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "Let me know which day is fine for you.",
        "japanese_translation": "どの日が都合いいか教えてね。",
        "title": "WhichSV",
        "audio_folder_name": "WhichSV",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "I don't know which is your brother.",
        "japanese_translation": "どっちがあなたの兄弟なのかわからない。",
        "title": "WhichSV",
        "audio_folder_name": "WhichSV",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "I don't know which phone is better.",
        "japanese_translation": "どのスマホがいいのか分からないな。",
        "title": "WhichSV",
        "audio_folder_name": "WhichSV",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "I don't understand why she's upset.",
        "japanese_translation": "なぜ彼女が怒っているのか理解できない。",
        "title": "WhySV",
        "audio_folder_name": "WhySV",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "Do you know why he left early?",
        "japanese_translation": "なぜ彼が早く帰ったのか知ってる？",
        "title": "WhySV",
        "audio_folder_name": "WhySV",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "My son asked me why he has to study.",
        "japanese_translation": "なぜ勉強しないといけないのか息子が聞いてきたよ。",
        "title": "WhySV",
        "audio_folder_name": "WhySV",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "Tell me why you are so tired.",
        "japanese_translation": "なぜそんなに疲れてるのか教えてよ。",
        "title": "WhySV",
        "audio_folder_name": "WhySV",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "He didn't say why he was late.",
        "japanese_translation": "彼はなぜ遅れたのか言わなかったよ。",
        "title": "WhySV",
        "audio_folder_name": "WhySV",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "I forgot why I came to the kitchen.",
        "japanese_translation": "なんでキッチンに来たのか忘れちゃった。",
        "title": "WhySV",
        "audio_folder_name": "WhySV",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "Let me know why you changed your mind.",
        "japanese_translation": "なぜ気が変わったのか教えてほしい。",
        "title": "WhySV",
        "audio_folder_name": "WhySV",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "I don't know why my phone isn't working.",
        "japanese_translation": "なぜスマホが動かないのか分からない。",
        "title": "WhySV",
        "audio_folder_name": "WhySV",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "I'm not sure how I can explain this.",
        "japanese_translation": "これをどう説明すればいいかわからない。",
        "title": "HowSV",
        "audio_folder_name": "HowSV",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "Do you know how this machine works?",
        "japanese_translation": "この機械がどう動くのか知ってる？",
        "title": "HowSV",
        "audio_folder_name": "HowSV",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "She asked me how I made this cake.",
        "japanese_translation": "どうやってこのケーキを作ったのか彼女に聞かれたよ。",
        "title": "HowSV",
        "audio_folder_name": "HowSV",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "Do you know how she lost weight?",
        "japanese_translation": "彼女どうやって痩せたか知ってる？",
        "title": "HowSV",
        "audio_folder_name": "HowSV",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "I wonder how long it will take.",
        "japanese_translation": "どれくらい時間がかかるのか気になるな。",
        "title": "HowSV",
        "audio_folder_name": "HowSV",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "Can you show me how to use this app?",
        "japanese_translation": "このアプリの使い方を教えてくれる？",
        "title": "HowSV",
        "audio_folder_name": "HowSV",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "I forgot how I get to that store.",
        "japanese_translation": "どうやってそのお店に行くのか忘れちゃった。",
        "title": "HowSV",
        "audio_folder_name": "HowSV",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "Teach me how you did it.",
        "japanese_translation": "どうやってやったのか教えて。",
        "title": "HowSV",
        "audio_folder_name": "HowSV",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "He can tell you how to improve your listening skills.",
        "japanese_translation": "彼はあなたにリスニングの伸ばし方を教えてくれるよ。",
        "title": "Howto",
        "audio_folder_name": "HowTo",
        "chapter": "chapter9"
    },
    {
        "number": "2",
        "english_sentence": "Tell me how to make this sauce.",
        "japanese_translation": "このソースの作り方教えて。",
        "title": "Howto",
        "audio_folder_name": "HowTo",
        "chapter": "chapter9"
    },
    {
        "number": "3",
        "english_sentence": "I wonder how to fix this problem.",
        "japanese_translation": "この問題の解決策が気になるな。",
        "title": "Howto",
        "audio_folder_name": "HowTo",
        "chapter": "chapter9"
    },
    {
        "number": "4",
        "english_sentence": "I forgot how to set the timer.",
        "japanese_translation": "タイマーの設定の仕方忘れちゃった。",
        "title": "Howto",
        "audio_folder_name": "HowTo",
        "chapter": "chapter9"
    },
    {
        "number": "5",
        "english_sentence": "We talked about how to save electricity.",
        "japanese_translation": "どうやって電気を節約するか話してたの。",
        "title": "Howto",
        "audio_folder_name": "HowTo",
        "chapter": "chapter9"
    },
    {
        "number": "6",
        "english_sentence": "I forgot how to spell that word.",
        "japanese_translation": "その単語の綴りを忘れちゃった。",
        "title": "Howto",
        "audio_folder_name": "HowTo",
        "chapter": "chapter9"
    },
    {
        "number": "7",
        "english_sentence": "I don't know how to improve my English.",
        "japanese_translation": "どうやって英語を伸ばせばいいかわからない。",
        "title": "Howto",
        "audio_folder_name": "HowTo",
        "chapter": "chapter9"
    },
    {
        "number": "8",
        "english_sentence": "I don't know how to explain this to my kids.",
        "japanese_translation": "子どもにこれをどう説明すればいいか分からないよ。",
        "title": "Howto",
        "audio_folder_name": "HowTo",
        "chapter": "chapter9"
    },
    {
        "number": "1",
        "english_sentence": "I really like the book that you recommended.",
        "japanese_translation": "君が勧めてくれた本すごく好き！",
        "title": "関係代名詞 That",
        "audio_folder_name": "ThatPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "2",
        "english_sentence": "This is the cake that I baked yesterday.",
        "japanese_translation": "これは昨日、私が焼いたケーキだよ。",
        "title": "関係代名詞 That",
        "audio_folder_name": "ThatPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "3",
        "english_sentence": "The dress that she is wearing is really nice.",
        "japanese_translation": "彼女が着ているドレス、すごく素敵だね。",
        "title": "関係代名詞 That",
        "audio_folder_name": "ThatPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "4",
        "english_sentence": "The movie that we watched last week was interesting.",
        "japanese_translation": "先週私たちが見た映画、面白かったね。",
        "title": "関係代名詞 That",
        "audio_folder_name": "ThatPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "5",
        "english_sentence": "The bag that he gave me is my favorite.",
        "japanese_translation": "彼がくれたバッグが一番のお気に入りだよ。",
        "title": "関係代名詞 That",
        "audio_folder_name": "ThatPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "6",
        "english_sentence": "I didn't understand the question that he asked.",
        "japanese_translation": "彼がした質問の意味がわからなかった。",
        "title": "関係代名詞 That",
        "audio_folder_name": "ThatPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "7",
        "english_sentence": "She showed me the picture that she took in Okinawa.",
        "japanese_translation": "彼女が沖縄で撮った写真を見せてくれたんだ。",
        "title": "関係代名詞 That",
        "audio_folder_name": "ThatPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "8",
        "english_sentence": "I like the song that you’re playing now.",
        "japanese_translation": "今君が今流している曲好きなんだ。",
        "title": "関係代名詞 That",
        "audio_folder_name": "ThatPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "1",
        "english_sentence": "Do you remember the day when we first met?",
        "japanese_translation": "私たちが初めて会った日を覚えてる？",
        "title": "関係副詞 When",
        "audio_folder_name": "WhenPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "2",
        "english_sentence": "I love the season when cherry blossoms bloom.",
        "japanese_translation": "桜が咲く季節が大好きなんだ。",
        "title": "関係副詞 When",
        "audio_folder_name": "WhenPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "3",
        "english_sentence": "There was a time when I exercised every day.",
        "japanese_translation": "毎日運動していた時があったよ。",
        "title": "関係副詞 When",
        "audio_folder_name": "WhenPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "4",
        "english_sentence": "Winter is the season when we eat hot pot.",
        "japanese_translation": "冬は鍋を食べる季節だよね。",
        "title": "関係副詞 When",
        "audio_folder_name": "WhenPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "5",
        "english_sentence": "The day when I arrived in Tokyo was very hot.",
        "japanese_translation": "私が東京に着いた日はとても暑かった。",
        "title": "関係副詞 When",
        "audio_folder_name": "WhenPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "6",
        "english_sentence": "There was a time when I wanted to be a musician.",
        "japanese_translation": "ミュージシャンになりたいと思っていた時期がありました。",
        "title": "関係副詞 When",
        "audio_folder_name": "WhenPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "7",
        "english_sentence": "There was a time when I wanted to live abroad.",
        "japanese_translation": "海外に住みたかった時期もありました。",
        "title": "関係副詞 When",
        "audio_folder_name": "WhenPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "8",
        "english_sentence": "I'll never forget the moment when I saw Kimutaku.",
        "japanese_translation": "キムタクを見たあの瞬間は絶対に忘れません。",
        "title": "関係副詞 When",
        "audio_folder_name": "WhenPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "1",
        "english_sentence": "This is the café where I first met your father.",
        "japanese_translation": "ここはお父さんと初めて会ったカフェだよ。",
        "title": "関係副詞 Where",
        "audio_folder_name": "WherePronoun",
        "chapter": "chapter10"
    },
    {
        "number": "2",
        "english_sentence": "I know a store where you can buy groceries at low cost.",
        "japanese_translation": "食料品が安く買えるお店を知ってるよ。",
        "title": "関係副詞 Where",
        "audio_folder_name": "WherePronoun",
        "chapter": "chapter10"
    },
    {
        "number": "3",
        "english_sentence": "I visited the city where my grandparents live.",
        "japanese_translation": "祖父母が住んでいる街に行ってきたよ。",
        "title": "関係副詞 Where",
        "audio_folder_name": "WherePronoun",
        "chapter": "chapter10"
    },
    {
        "number": "4",
        "english_sentence": "Let's find a place where we can eat lunch!",
        "japanese_translation": "ランチを食べれる場所を探そう！",
        "title": "関係副詞 Where",
        "audio_folder_name": "WherePronoun",
        "chapter": "chapter10"
    },
    {
        "number": "5",
        "english_sentence": "Do you remember the restaurant where we celebrated your birthday?",
        "japanese_translation": "私たちがあなたの誕生日を祝ったレストランを覚えてる？",
        "title": "関係副詞 Where",
        "audio_folder_name": "WherePronoun",
        "chapter": "chapter10"
    },
    {
        "number": "6",
        "english_sentence": "I found a nice hotel where we can stay for the weekend.",
        "japanese_translation": "私たちが週末に泊まれそうな素敵なホテルを見つけたよ。",
        "title": "関係副詞 Where",
        "audio_folder_name": "WherePronoun",
        "chapter": "chapter10"
    },
    {
        "number": "7",
        "english_sentence": "This is the shop where I bought my favorite jacket.",
        "japanese_translation": "これは私がお気に入りのジャケットを買ったお店だよ。",
        "title": "関係副詞 Where",
        "audio_folder_name": "WherePronoun",
        "chapter": "chapter10"
    },
    {
        "number": "8",
        "english_sentence": "The beach where we went last summer was beautiful.",
        "japanese_translation": "私たちが去年の夏に行ったビーチはすごく綺麗だったよ。",
        "title": "関係副詞 Where",
        "audio_folder_name": "WherePronoun",
        "chapter": "chapter10"
    },
    {
        "number": "1",
        "english_sentence": "The woman who lives next door is very kind.",
        "japanese_translation": "隣に住んでいる女性はとても親切だよ。",
        "title": "関係副詞 Who",
        "audio_folder_name": "WhoPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "2",
        "english_sentence": "I have a friend who speaks three languages.",
        "japanese_translation": "私には3か国語を話せる友達がいるよ。",
        "title": "関係副詞 Who",
        "audio_folder_name": "WhoPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "3",
        "english_sentence": "I respect people who work hard every day.",
        "japanese_translation": "私は毎日一生懸命働く人を尊敬してるよ。",
        "title": "関係副詞 Who",
        "audio_folder_name": "WhoPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "4",
        "english_sentence": "She has a friend who lives in Indonesia.",
        "japanese_translation": "彼女にはインドネシアに住んでいる友達がいるんだ。",
        "title": "関係副詞 Who",
        "audio_folder_name": "WhoPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "5",
        "english_sentence": "The doctor who treated me was very kind.",
        "japanese_translation": "私を診てくれたお医者さんはとても優しかったよ。",
        "title": "関係副詞 Who",
        "audio_folder_name": "WhoPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "6",
        "english_sentence": "The boy who is sitting over there is my brother.",
        "japanese_translation": "あそこに座っている男の子が私の弟だよ。",
        "title": "関係副詞 Who",
        "audio_folder_name": "WhoPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "7",
        "english_sentence": "This is Erika who I often talk about.",
        "japanese_translation": "この子が私の話によく出てくるエリカだよ。",
        "title": "関係副詞 Who",
        "audio_folder_name": "WhoPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "8",
        "english_sentence": "The woman who I married was my colleague.",
        "japanese_translation": "私が結婚した女性は同僚だったんだ。",
        "title": "関係副詞 Who",
        "audio_folder_name": "WhoPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "1",
        "english_sentence": "I bought a new phone, which is really useful.",
        "japanese_translation": "新しいスマホを買ったんだけど、すごく使いやすいよ。",
        "title": "関係代名詞 Which(非制限用法)",
        "audio_folder_name": "WhichPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "2",
        "english_sentence": "She made a cake, which was so delicious.",
        "japanese_translation": "彼女がケーキを作ったんだけど、とても美味しかったよ。",
        "title": "関係代名詞 Which(非制限用法)",
        "audio_folder_name": "WhichPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "3",
        "english_sentence": "I had sushi in Ginza today, which was amazing.",
        "japanese_translation": "今日銀座で寿司食べたんだけど、マジで最高だった。",
        "title": "関係代名詞 Which(非制限用法)",
        "audio_folder_name": "WhichPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "4",
        "english_sentence": "She quit her job suddenly, which was really surprising for me.",
        "japanese_translation": "彼女が急に仕事をやめて、それがすごく驚きだったんだよね。",
        "title": "関係代名詞 Which(非制限用法)",
        "audio_folder_name": "WhichPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "5",
        "english_sentence": "I broke my favorite mug, which made me really sad.",
        "japanese_translation": "お気に入りのマグカップ割っちゃって、めっちゃ悲しかった。",
        "title": "関係代名詞 Which(非制限用法)",
        "audio_folder_name": "WhichPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "6",
        "english_sentence": "He forgot our wedding anniversary, which annoyed me a bit.",
        "japanese_translation": "彼、結婚記念日忘れててさ、ちょっとイラっとした。",
        "title": "関係代名詞 Which(非制限用法)",
        "audio_folder_name": "WhichPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "7",
        "english_sentence": "I missed the train this morning, which was frustrating.",
        "japanese_translation": "今朝電車逃しちゃって、超イライラした。",
        "title": "関係代名詞 Which(非制限用法)",
        "audio_folder_name": "WhichPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "8",
        "english_sentence": "My stupid son came back home at midnight, which was such a relief.",
        "japanese_translation": "うちのバカ息子は深夜に帰ってきたんだけど、本当に安心したよ。",
        "title": "関係代名詞 Which(非制限用法)",
        "audio_folder_name": "WhichPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "1",
        "english_sentence": "That's the reason why I don't like her.",
        "japanese_translation": "それが私が彼女を好きじゃない理由だよ。",
        "title": "関係副詞 Why",
        "audio_folder_name": "WhyPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "2",
        "english_sentence": "This is the reason why I changed my job.",
        "japanese_translation": "これが私が仕事を変えた理由だよ。",
        "title": "関係副詞 Why",
        "audio_folder_name": "WhyPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "3",
        "english_sentence": "Do you know the reason why he was late?",
        "japanese_translation": "彼が遅れた理由を知ってる？",
        "title": "関係副詞 Why",
        "audio_folder_name": "WhyPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "4",
        "english_sentence": "I don't understand the reason why they refused.",
        "japanese_translation": "彼らが断った理由が分からないよ。",
        "title": "関係副詞 Why",
        "audio_folder_name": "WhyPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "5",
        "english_sentence": "He told me the reason why he quit his job.",
        "japanese_translation": "彼は仕事をやめた理由を教えてくれたよ。",
        "title": "関係副詞 Why",
        "audio_folder_name": "WhyPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "6",
        "english_sentence": "I wonder why she looks so sad.",
        "japanese_translation": "彼女はなんですごく悲しそうなんだろう。",
        "title": "関係副詞 Why",
        "audio_folder_name": "WhyPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "7",
        "english_sentence": "Can you tell me the reason why you are upset?",
        "japanese_translation": "なぜ怒ってるのか理由を教えてくれる？",
        "title": "関係副詞 Why",
        "audio_folder_name": "WhyPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "8",
        "english_sentence": "I haven't asked my boss why he was on leave yesterday.",
        "japanese_translation": "なぜ上司が昨日休みだったか、まだ聞けてないんだよね。",
        "title": "関係副詞 Why",
        "audio_folder_name": "WhyPronoun",
        "chapter": "chapter10"
    },
    {
        "number": "1",
        "english_sentence": "You can eat whatever you like.",
        "japanese_translation": "好きなの食べていいよ。",
        "title": "ever",
        "audio_folder_name": "ever",
        "chapter": "chapter10"
    },
    {
        "number": "2",
        "english_sentence": "When you get older, you can do whatever you want.",
        "japanese_translation": "大人になったらやりたいことなんでもできるよ。",
        "title": "ever",
        "audio_folder_name": "ever",
        "chapter": "chapter10"
    },
    {
        "number": "3",
        "english_sentence": "You can order whatever you want.",
        "japanese_translation": "好きなものなんでも頼んでいいよ。",
        "title": "ever",
        "audio_folder_name": "ever",
        "chapter": "chapter10"
    },
    {
        "number": "4",
        "english_sentence": "You can sit wherever you like.",
        "japanese_translation": "好きなところに座っていいよ。",
        "title": "ever",
        "audio_folder_name": "ever",
        "chapter": "chapter10"
    },
    {
        "number": "5",
        "english_sentence": "You can rely on me whenever you need some help.",
        "japanese_translation": "助けが必要な時は、いつでも頼っていいよ。",
        "title": "ever",
        "audio_folder_name": "ever",
        "chapter": "chapter10"
    },
    {
        "number": "6",
        "english_sentence": "You can drop by whenever you want.",
        "japanese_translation": "いつでも好きな時に立ち寄っていいよ。",
        "title": "ever",
        "audio_folder_name": "ever",
        "chapter": "chapter10"
    },
    {
        "number": "7",
        "english_sentence": "Call me whenever you're free.",
        "japanese_translation": "暇な時にいつでも電話してね。",
        "title": "ever",
        "audio_folder_name": "ever",
        "chapter": "chapter10"
    },
    {
        "number": "8",
        "english_sentence": "Let's go wherever you want to eat.",
        "japanese_translation": "食べたいところにどこでも行こうよ。",
        "title": "ever",
        "audio_folder_name": "ever",
        "chapter": "chapter10"
    }
]
`;
const flashcard_data_txt = `
number	english_sentence	japanese_translation	title	audio_folder_name	chapter	修正後文章	英文法教材	音声	復習			
1	I sleep early.	早く寝る。	1. 第一文型	pattern1	chapter1		FALSE	FALSE	FALSE			
2	I eat a lot.	僕はたくさん食べるよ。	1. 第一文型	pattern1	chapter1		FALSE	FALSE	FALSE			
3	I wake up at 7.	7時に起きるよ。	1. 第一文型	pattern1	chapter1		FALSE	FALSE	FALSE			
4	I drive on weekends.	週末はドライブするよ。	1. 第一文型	pattern1	chapter1		FALSE	FALSE	FALSE			
5	I work a lot.	たくさん働いているよ。	1. 第一文型	pattern1	chapter1		FALSE	FALSE	FALSE			
6	I travel every year.	毎年旅行するよ。	1. 第一文型	pattern1	chapter1		FALSE	FALSE	FALSE			
7	I walk every morning.	毎朝歩くよ。	1. 第一文型	pattern1	chapter1		FALSE	FALSE	FALSE			
8	I sleep a lot.	たくさん寝てるよ。	1. 第一文型	pattern1	chapter1		FALSE	FALSE	FALSE			
1	I am tired.	疲れたよ。	2. 第二文型	pattern2	chapter1		FALSE	FALSE	FALSE			
2	I am sad.	悲しいよ。	2. 第二文型	pattern2	chapter1		FALSE	FALSE	FALSE			
3	You look happy.	嬉しそうだね。	2. 第二文型	pattern2	chapter1		FALSE	FALSE	FALSE			
4	You look busy.	忙しそうだね。	2. 第二文型	pattern2	chapter1		FALSE	FALSE	FALSE			
5	She is angry.	彼女は怒ってるよ。	2. 第二文型	pattern2	chapter1		FALSE	FALSE	FALSE			
6	He is kind.	彼は優しいよ。	2. 第二文型	pattern2	chapter1		FALSE	FALSE	FALSE			
7	That sounds good.	それ、いいね。	2. 第二文型	pattern2	chapter1		FALSE	FALSE	FALSE			
8	That sounds exciting.	それ、ワクワクするね。	2. 第二文型	pattern2	chapter1		FALSE	FALSE	FALSE			
1	I like snacks.	お菓子が好き。	3. 第三文型	pattern3	chapter1		FALSE	FALSE	FALSE			
2	I like cats.	猫が好きなんだ。	3. 第三文型	pattern3	chapter1		FALSE	FALSE	FALSE			
3	I read books.	本読むよ。	3. 第三文型	pattern3	chapter1		FALSE	FALSE	FALSE			
4	I need coffee.	コーヒーが必要だよ。	3. 第三文型	pattern3	chapter1	コーヒーが必要だよ	TRUE	FALSE	TRUE			
5	I love music.	音楽が大好きなんだ。	3. 第三文型	pattern3	chapter1		FALSE	FALSE	FALSE			
6	I bake cakes.	ケーキ焼くよ。	3. 第三文型	pattern3	chapter1		FALSE	FALSE	FALSE			
7	I have two brothers.	兄弟が2人いるよ。	3. 第三文型	pattern3	chapter1		FALSE	FALSE	FALSE			
8	I have kids.	子どもがいるよ。	3. 第三文型	pattern3	chapter1		FALSE	FALSE	FALSE			
1	Close the window.	窓閉めてー。	4. 命令文	order	chapter1		FALSE	FALSE	FALSE			
2	Wash your hands.	手洗って。	4. 命令文	order	chapter1	まず がいらない。

手洗って。	TRUE	FALSE	TRUE			
3	Call me later.	あとで電話してね。	4. 命令文	order	chapter1		FALSE	FALSE	FALSE			
4	Try this soup!	このスープ食べてみて！	4. 命令文	order	chapter1		FALSE	FALSE	FALSE			
5	Use this towel.	このタオル使って。	4. 命令文	order	chapter1		FALSE	FALSE	FALSE			
6	Clean your room.	部屋片付けてね。	4. 命令文	order	chapter1	now がいらない。

Clean your room.	TRUE	TRUE	TRUE			
7	Turn off the TV.	テレビ消してー。	4. 命令文	order	chapter1		FALSE	FALSE	FALSE			
8	Take off your shoes.	靴を脱いで。	4. 命令文	order	chapter1		FALSE	FALSE	FALSE			
1	I get up at six every day.	毎日6時に起きるよ。	1. 時間を表す副詞	timeAdverb	chapter2		FALSE	FALSE	FALSE			
2	I sleep early.	私は早めに寝るんだ。	1. 時間を表す副詞	timeAdverb	chapter2		FALSE	FALSE	FALSE			
3	I go shopping on weekends.	週末は買い物にいくよ。	1. 時間を表す副詞	timeAdverb	chapter2		FALSE	FALSE	FALSE			
4	I go for a walk in the morning.	朝は散歩に行くんだ。	1. 時間を表す副詞	timeAdverb	chapter2		FALSE	FALSE	FALSE			
5	I clean in the every day in the evening.	毎日夕方に掃除をするよ。	1. 時間を表す副詞	timeAdverb	chapter2	I clean in the every day in the evening.
（頻度 → 時間 の順が自然）	TRUE	TRUE	TRUE			
6	I woke up at 7 this morning.	今朝7時に起きたよ。	1. 時間を表す副詞	timeAdverb	chapter2		FALSE	FALSE	FALSE			
7	I read books at night.	夜に本を読むんだ。	1. 時間を表す副詞	timeAdverb	chapter2		FALSE	FALSE	FALSE			
8	I drink coffee every morning.	毎朝コーヒー飲むよ。	1. 時間を表す副詞	timeAdverb	chapter2		FALSE	FALSE	FALSE			
1	I sleep here.	ここで寝てるんだ。	2. 場所を表す副詞	placeAdverb	chapter2		FALSE	FALSE	FALSE			
2	I buy groceries at the supermarket.	あのスーパーで買い物をするんだ。	2. 場所を表す副詞	placeAdverb	chapter2		FALSE	FALSE	FALSE			
3	You can find the bathroom upstairs.	トイレは上の階にあります。	2. 場所を表す副詞	placeAdverb	chapter2		FALSE	FALSE	FALSE			
4	I had a test at university today.	今日大学でテストがあった。	2. 場所を表す副詞	placeAdverb	chapter2	I had a test at university today. (＝at school と同じ理由)	TRUE	TRUE	TRUE			
5	I love the cake there.	あそこのケーキ大好きなの。	2. 場所を表す副詞	placeAdverb	chapter2		FALSE	FALSE	FALSE			
6	I study English in the living room.	リビングで英語を勉強しているんだ。	2. 場所を表す副詞	placeAdverb	chapter2		FALSE	FALSE	FALSE			
7	I often drink coffee at this cafe.	このカフェでよくコーヒー飲んでるんだ。	2. 場所を表す副詞	placeAdverb	chapter2		FALSE	FALSE	FALSE			
8	Let's meet at Shinjuku station.	新宿駅で会おうよ！	2. 場所を表す副詞	placeAdverb	chapter2		FALSE	FALSE	FALSE			
1	Thanks a lot.	ほんとありがと。	3. どれくらいを表す副詞	muchAdverb	chapter2		FALSE	FALSE	FALSE			
2	I eat a little.	少食なんだ。	3. どれくらいを表す副詞	muchAdverb	chapter2		FALSE	FALSE	FALSE			
3	I sleep a lot.	睡眠はたくさん取るよ。	3. どれくらいを表す副詞	muchAdverb	chapter2		FALSE	FALSE	FALSE			
4	I speak English a little bit.	ほんの少し英語が話せます。	3. どれくらいを表す副詞	muchAdverb	chapter2		FALSE	FALSE	FALSE			
5	I talk a lot.	私はおしゃべりだよ。	3. どれくらいを表す副詞	muchAdverb	chapter2		FALSE	FALSE	FALSE			
6	I drink a little.	お酒はちょっとだけ飲むよ。	3. どれくらいを表す副詞	muchAdverb	chapter2		FALSE	FALSE	FALSE			
7	I read a lot of books every day.	毎日たくさん本を読むよ。	3. どれくらいを表す副詞	muchAdverb	chapter2	I read a lot of books every day.	TRUE	TRUE	TRUE			
8	I drink a little coffee.	コーヒーはちょっとだけ飲むよ。	3. どれくらいを表す副詞	muchAdverb	chapter2	I drink a little coffee	TRUE	TRUE	TRUE			
1	I eat quickly.	食べるのは早いよ。	4. どのようにを表す副詞	howAdverb	chapter2		FALSE	FALSE	FALSE			
2	I eat slowly.	食べるの遅いんだよね。	4. どのようにを表す副詞	howAdverb	chapter2		FALSE	FALSE	FALSE			
3	I walk slowly.	歩くのゆっくりなんだよね。	4. どのようにを表す副詞	howAdverb	chapter2		FALSE	FALSE	FALSE			
4	You walk fast.	歩くの速いね！	4. どのようにを表す副詞	howAdverb	chapter2		FALSE	FALSE	FALSE			
5	I studied hard last night.	昨日の夜めっちゃ勉強したんだ。	4. どのようにを表す副詞	howAdverb	chapter2		FALSE	FALSE	FALSE			TRUE
6	I slept well.	よく寝れたよ。	4. どのようにを表す副詞	howAdverb	chapter2		FALSE	FALSE	FALSE			
7	I made up with my husband peacefully.	旦那と平和に仲直りした。	4. どのようにを表す副詞	howAdverb	chapter2		FALSE	FALSE	FALSE			
8	Please speak out loud.	はっきりと話してください。	4. どのようにを表す副詞	howAdverb	chapter2		FALSE	FALSE	FALSE			
1	I studied hard at home last night.	昨夜、家で一生懸命勉強した。	5. 副詞を置く順番	orderAdverb	chapter2		FALSE	FALSE	FALSE			
2	I worked late in the office yesterday.	昨日、オフィスで遅くまで仕事をした。	5. 副詞を置く順番	orderAdverb	chapter2		FALSE	FALSE	FALSE			
3	I often shop at the mall.	よくそのモールで買い物をする。	5. 副詞を置く順番	orderAdverb	chapter2		FALSE	FALSE	FALSE			
4	I shopped a lot at the grocery store today.	今日、スーパーでたくさん買い物をした。	5. 副詞を置く順番	orderAdverb	chapter2		FALSE	FALSE	FALSE			
5	She cried a lot in her room last night.	昨夜彼女は部屋ですごく泣いていた。	5. 副詞を置く順番	orderAdverb	chapter2		FALSE	FALSE	FALSE			
6	I studied hard in the library yesterday.	昨日、図書館で一生懸命勉強した。	5. 副詞を置く順番	orderAdverb	chapter2		FALSE	FALSE	FALSE			
7	I watched a movie with my family last weekend.	先週末、家族と映画を観た。	5. 副詞を置く順番	orderAdverb	chapter2		FALSE	FALSE	FALSE			
8	I played video games with my brother all day.	一日中、弟とビデオゲームをした。	5. 副詞を置く順番	orderAdverb	chapter2		FALSE	FALSE	FALSE			
1	I usually cook.	普段は料理するよ。	6. 頻度を表す副詞	frequencyAdverb	chapter2		FALSE	FALSE	FALSE			
2	I sometimes take a walk.	たまに散歩するよ。	6. 頻度を表す副詞	frequencyAdverb	chapter2		FALSE	FALSE	FALSE			
3	I often make mistakes.	よくミスしちゃうんだよね。	6. 頻度を表す副詞	frequencyAdverb	chapter2		FALSE	FALSE	FALSE			
4	I occasionally go back to my hometown.	時々実家に帰るよ。	6. 頻度を表す副詞	frequencyAdverb	chapter2		FALSE	FALSE	FALSE			
5	I rarely take a rest.	めったに休まないよ。	6. 頻度を表す副詞	frequencyAdverb	chapter2		FALSE	FALSE	FALSE			
6	He usually eats breakfast at home.	彼はだいたい家で朝ごはんを食べるよ。	6. 頻度を表す副詞	frequencyAdverb	chapter2		FALSE	FALSE	FALSE			
7	I sometimes speak English to my kids.	たまに子供達に英語で話すよ。	6. 頻度を表す副詞	frequencyAdverb	chapter2		FALSE	FALSE	FALSE			
8	I never drink coffee.	コーヒーは絶対飲まないよ。	6. 頻度を表す副詞	frequencyAdverb	chapter2		FALSE	FALSE	FALSE			
1	I'm really hungry.	めっちゃお腹すいた。	7. 強調を表す副詞 (形容詞修飾)	emphasis1Adverb	chapter2		FALSE	FALSE	FALSE			
2	This dress is too tight.	このドレス、きつすぎる。	7. 強調を表す副詞 (形容詞修飾)	emphasis1Adverb	chapter2		FALSE	FALSE	FALSE			
3	That's completely fine.	全然だいじょうぶだよ。	7. 強調を表す副詞 (形容詞修飾)	emphasis1Adverb	chapter2		FALSE	FALSE	FALSE			
4	The coffee is very strong.	このコーヒー、すごく濃いね。	7. 強調を表す副詞 (形容詞修飾)	emphasis1Adverb	chapter2		FALSE	FALSE	FALSE			
5	It's too late.	遅すぎるよ。	7. 強調を表す副詞 (形容詞修飾)	emphasis1Adverb	chapter2		FALSE	FALSE	FALSE			
6	This song is really catchy.	この曲、めっちゃ頭に残るね。	7. 強調を表す副詞 (形容詞修飾)	emphasis1Adverb	chapter2		FALSE	FALSE	FALSE			
7	Her story was so funny.	彼女の話、めっちゃおもしろかった。	7. 強調を表す副詞 (形容詞修飾)	emphasis1Adverb	chapter2		FALSE	FALSE	FALSE			
8	She was so angry.	彼女はすごく怒ってた。	7. 強調を表す副詞 (形容詞修飾)	emphasis1Adverb	chapter2		FALSE	FALSE	FALSE			
1	I really like this cake.	このケーキ、めっちゃ好き。	8. 強調を表す副詞 (動詞修飾)	emphasis2Adverb	chapter2		FALSE	FALSE	FALSE			
2	I really enjoyed it.	すごく楽しかったよ。	8. 強調を表す副詞 (動詞修飾)	emphasis2Adverb	chapter2		FALSE	FALSE	FALSE			
3	You should definitely go to Okinawa.	絶対に沖縄行ったほうがいいよ。	8. 強調を表す副詞 (動詞修飾)	emphasis2Adverb	chapter2		FALSE	FALSE	FALSE			
4	She absolutely loves coffee.	彼女、コーヒーが大〜好きなのよ。	8. 強調を表す副詞 (動詞修飾)	emphasis2Adverb	chapter2		FALSE	FALSE	FALSE			
5	I completely forgot about it.	それ、完全にわすれてた。	8. 強調を表す副詞 (動詞修飾)	emphasis2Adverb	chapter2		FALSE	FALSE	FALSE			
6	I completely understood.	完全に理解した。	8. 強調を表す副詞 (動詞修飾)	emphasis2Adverb	chapter2		FALSE	FALSE	FALSE			
7	I totally get it.	すんごいわかるよ。	8. 強調を表す副詞 (動詞修飾)	emphasis2Adverb	chapter2		FALSE	FALSE	FALSE			
8	I totally agree with you.	完全に君に同意だよ。	8. 強調を表す副詞 (動詞修飾)	emphasis2Adverb	chapter2		FALSE	FALSE	FALSE			
1	Actually, I went to Nagoya last month.	実は名古屋に先月行ったの。	9. 態度を表す副詞	attitudeAdverb	chapter2		FALSE	FALSE	FALSE			
2	Honestly, I don't like studying.	正直、勉強は嫌いだ。	9. 態度を表す副詞	attitudeAdverb	chapter2		FALSE	FALSE	FALSE			
3	Fortunately, I have good neighbors.	ありがたいことに、ご近所さんがいい人ばかりなんだ。	9. 態度を表す副詞	attitudeAdverb	chapter2		FALSE	FALSE	FALSE			
4	Surprisingly, he passed the exam.	驚くかもしれないけど、彼ね、試験受かったんだよ！	9. 態度を表す副詞	attitudeAdverb	chapter2		FALSE	FALSE	FALSE			
5	Normally, I take a lesson once a week.	普段は週に一回レッスンを受けるよ。	9. 態度を表す副詞	attitudeAdverb	chapter2		FALSE	FALSE	FALSE			
6	Fortunately, I didn't get hurt.	幸いなことに、怪我はしなかった。	9. 態度を表す副詞	attitudeAdverb	chapter2		FALSE	FALSE	FALSE			
7	Unfortunately, I already have plans tomorrow.	残念なことに、明日はもう予定が入っている。	9. 態度を表す副詞	attitudeAdverb	chapter2		FALSE	FALSE	FALSE			
8	For me, I prefer homemade food.	私的には、手作りのごはんの方がいいな。	9. 態度を表す副詞	attitudeAdverb	chapter2		FALSE	FALSE	FALSE			
1	I eat rice every day.	毎日ごはん食べるよ。	1. 現在形(一般動詞)	generalVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
2	I drink coffee in the morning.	朝はコーヒー飲むよ。	1. 現在形(一般動詞)	generalVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
3	I watch TV at night.	夜はテレビ見るよ。	1. 現在形(一般動詞)	generalVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
4	I sometimes read books.	たまに本読むよ。	1. 現在形(一般動詞)	generalVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
5	I love Korean TV shows.	韓国ドラマが大好きです。	1. 現在形(一般動詞)	generalVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
6	I buy groceries on weekends.	週末に食料品を買うよ。	1. 現在形(一般動詞)	generalVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
7	I don't study English at night.	夜は英語は勉強しないよ。	1. 現在形(一般動詞)	generalVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
8	I don't understand the question.	その質問が理解できません。	1. 現在形(一般動詞)	generalVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
1	I'm always busy.	私は、いつも忙しい。	2. 現在形(be動詞)	beVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
2	I'm not hungry now.	今はお腹すいてないかな。	2. 現在形(be動詞)	beVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
3	I'm good at sports.	スポーツが得意だよ。	2. 現在形(be動詞)	beVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
4	I'm normally at home on weekends.	週末はだいたい家にいるよ。	2. 現在形(be動詞)	beVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
5	I'm not interested in that movie.	その映画にはあんまり興味ないよ。	2. 現在形(be動詞)	beVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
6	I'm excited about the trip.	旅行が楽しみだよ。	2. 現在形(be動詞)	beVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
7	You're good at singing!	歌を歌うのが上手だね。	2. 現在形(be動詞)	beVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
8	You're good at cooking.	あなたは料理は得意だよね。	2. 現在形(be動詞)	beVerbPresentTense	chapter3		FALSE	FALSE	FALSE			
1	I was really tired last night.	昨日の夜はめっちゃ疲れてたよ。	3. 過去形(be動詞)	beVerbPastTense	chapter3		FALSE	FALSE	FALSE			
2	I was not hungry in the morning.	朝はお腹すいてなかったんだよね。	3. 過去形(be動詞)	beVerbPastTense	chapter3		FALSE	FALSE	FALSE			
3	I was happy with the result.	結果には満足してたよ。	3. 過去形(be動詞)	beVerbPastTense	chapter3		FALSE	FALSE	FALSE			
4	I was good at sports.	運動は得意だったよ。	3. 過去形(be動詞)	beVerbPastTense	chapter3		FALSE	FALSE	FALSE			
5	I was busy all day today.	今日は一日中バタバタしてたよ。	3. 過去形(be動詞)	beVerbPastTense	chapter3		FALSE	FALSE	FALSE			
6	I was surprised by the news.	そのニュースにはびっくりしたよ。	3. 過去形(be動詞)	beVerbPastTense	chapter3		FALSE	FALSE	FALSE			
7	He was so kind.	彼はすごく親切だったよ。	3. 過去形(be動詞)	beVerbPastTense	chapter3		FALSE	FALSE	FALSE			
8	My daughter was a bit angry this morning.	娘が今朝ちょっと怒っていた。	3. 過去形(be動詞)	beVerbPastTense	chapter3		FALSE	FALSE	FALSE			
1	I ate too much last night.	昨日の夜、食べすぎたよ。	4. 過去形(一般動詞)	generalVerbPastTense	chapter3		FALSE	FALSE	FALSE			
2	I didn't drink coffee this morning.	今朝はコーヒー飲まなかったよ。	4. 過去形(一般動詞)	generalVerbPastTense	chapter3		FALSE	FALSE	FALSE			
3	I watched a movie with my family last night.	昨夜、家族と映画見たよ。	4. 過去形(一般動詞)	generalVerbPastTense	chapter3		FALSE	FALSE	FALSE			
4	I read the book a long time ago.	その本、だいぶ前に読んだよ。	4. 過去形(一般動詞)	generalVerbPastTense	chapter3	I read the book a（in) long time ago.
とinが聞こえる。inを消す。	TRUE	TRUE	TRUE			
5	I cleaned the kitchen after dinner.	晩ごはんの後にキッチン掃除したよ。	4. 過去形(一般動詞)	generalVerbPastTense	chapter3		FALSE	FALSE	FALSE			
6	I didn't buy anything at the store.	お店では何も買わなかったよ。	4. 過去形(一般動詞)	generalVerbPastTense	chapter3		FALSE	FALSE	FALSE			
7	I did the laundry yesterday.	昨日は洗濯したよ。	4. 過去形(一般動詞)	generalVerbPastTense	chapter3		FALSE	FALSE	FALSE			
8	I bought some vegetables and eggs.	野菜と卵を買ったよ。	4. 過去形(一般動詞)	generalVerbPastTense	chapter3		FALSE	FALSE	FALSE			
1	I am eating lunch.	今お昼ごはん食べてるよ。	5. 現在進行形(肯定文)	affirmativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
2	I am drinking coffee.	今コーヒー飲んでるよ。	5. 現在進行形(肯定文)	affirmativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
3	I am watching TV.	今テレビ見てるよ。	5. 現在進行形(肯定文)	affirmativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
4	I am reading a book.	今本読んでるよ。	5. 現在進行形(肯定文)	affirmativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
5	I am cleaning the kitchen.	今キッチン掃除してるよ。	5. 現在進行形(肯定文)	affirmativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
6	I am buying groceries.	今食料品買ってるよ。	5. 現在進行形(肯定文)	affirmativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
7	I am cooking dinner.	今晩ごはん作ってるよ。	5. 現在進行形(肯定文)	affirmativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
8	I am washing the dishes.	今お皿洗ってるよ。	5. 現在進行形(肯定文)	affirmativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
1	I'm not wearing that shirt right now.	今そのシャツは着てないよ。	6. 現在進行形(否定文)	negativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
2	I'm not watching TV right now.	今はテレビ見てないよ。	6. 現在進行形(否定文)	negativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
3	I'm not feeling good.	気分が良くないんだよね。	6. 現在進行形(否定文)	negativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
4	I'm not lying!	嘘ついてないよ！	6. 現在進行形(否定文)	negativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
5	I'm not talking about that.	その話してるんじゃないよ。	6. 現在進行形(否定文)	negativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
6	I'm not sleeping.	寝てないよ！	6. 現在進行形(否定文)	negativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
7	I'm not crying.	泣いてないよ。	6. 現在進行形(否定文)	negativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
8	I'm not doing anything now.	今は何もしてないよ。	6. 現在進行形(否定文)	negativeSentenceContinuousTense	chapter3		FALSE	FALSE	FALSE			
1	I'll make some tea.	お茶いれるね。	7. willの肯定文	affirmativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
2	I'll call her later.	あとで彼女に電話するよ。	7. willの肯定文	affirmativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
3	I'll do the dishes.	お皿洗っとくね。	7. willの肯定文	affirmativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
4	I'll take out the trash.	ゴミ出しとくね。	7. willの肯定文	affirmativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
5	I'll go shopping now.	今から買い物行ってくるね。	7. willの肯定文	affirmativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
6	I'll clean the room later.	あとで部屋を掃除するよ。	7. willの肯定文	affirmativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
7	I'll answer the door.	私が玄関出るよ。	7. willの肯定文	affirmativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
8	I'll wait for you here.	ここで待ってるね。	7. willの肯定文	affirmativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
1	I won't forgive him.	彼のことは許さないよ。	8. willの否定文	negativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
2	I won't talk to him anymore.	彼とはもう話さないよ。	8. willの否定文	negativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
3	I won't forget this time.	今回は忘れないから。	8. willの否定文	negativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
4	I won't go there again.	もうそこには行かないよ。	8. willの否定文	negativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
5	I won't buy it again.	もうそれは買わないよ。	8. willの否定文	negativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
6	I won't say it twice.	同じことは2回言わないよ。	8. willの否定文	negativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
7	I won't be late again.	もう遅刻しないよ。	8. willの否定文	negativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
8	I won't let you down.	君のことがっかりはさせないよ。	8. willの否定文	negativeSentenceWill	chapter3		FALSE	FALSE	FALSE			
1	I'm gonna visit my parents next week.	来週、実家に行くつもりなんだ。	9. gonnaの肯定文	gonnapositive	chapter3		FALSE	FALSE	FALSE			
2	I'm gonna clean the balcony this weekend.	今週末にベランダ掃除するよ。	9. gonnaの肯定文	gonnapositive	chapter3		FALSE	FALSE	FALSE			
3	I'm gonna see my friend tomorrow.	明日、友達に会うんだ。	9. gonnaの肯定文	gonnapositive	chapter3		FALSE	FALSE	FALSE			
4	I'm gonna go to the dentist on Friday.	金曜日に歯医者行く予定だよ。	9. gonnaの肯定文	gonnapositive	chapter3		FALSE	FALSE	FALSE			
5	I'm gonna buy a new microwave next month.	来月、新しい電子レンジ買うつもり。	9. gonnaの肯定文	gonnapositive	chapter3		FALSE	FALSE	FALSE			
6	I'm gonna get a haircut next Saturday.	来週の土曜に髪切りに行くよ。	9. gonnaの肯定文	gonnapositive	chapter3		FALSE	FALSE	FALSE			
7	I'm gonna bake a cake for his birthday.	彼の誕生日にケーキ焼こうと思ってるよ。	9. gonnaの肯定文	gonnapositive	chapter3		FALSE	FALSE	FALSE			
8	I'm gonna take the kids to the zoo on Sunday.	日曜日に子どもたちを動物園に連れてくよ。	9. gonnaの肯定文	gonnapositive	chapter3		FALSE	FALSE	FALSE			
1	I'm not gonna cook tonight.	今夜はごはん作らないよ。	10. gonnaの否定文	gonnanegative	chapter3		FALSE	FALSE	FALSE			
2	I'm not gonna buy the bag.	そのバッグは買わないよ。	10. gonnaの否定文	gonnanegative	chapter3		FALSE	FALSE	FALSE			
3	I'm not gonna go out today.	今日は出かけないよ。	10. gonnaの否定文	gonnanegative	chapter3		FALSE	FALSE	FALSE			
4	I'm not gonna go there.	そこには行かないよ。	10. gonnaの否定文	gonnanegative	chapter3		FALSE	FALSE	FALSE			
5	I'm not gonna say sorry this time.	今回は謝らないよ。	10. gonnaの否定文	gonnanegative	chapter3		FALSE	FALSE	FALSE			
6	I'm not gonna wake up early tomorrow.	明日は早起きしないよ。	10. gonnaの否定文	gonnanegative	chapter3		FALSE	FALSE	FALSE			
7	I'm not gonna watch that drama anymore.	あのドラマ、もう見ないよ。	10. gonnaの否定文	gonnanegative	chapter3		FALSE	FALSE	FALSE			
8	I'm not gonna lie to you.	君に嘘はつかないよ。	10. gonnaの否定文	gonnanegative	chapter3		FALSE	FALSE	FALSE			
1	I've just arrived at the hotel.	ちょうどホテルに着いたよ。	11. 現在完了形肯定文	havepositive	chapter3		FALSE	FALSE	FALSE			
2	I've just had lunch.	ちょうどお昼ごはん食べたとこ。	11. 現在完了形肯定文	havepositive	chapter3		FALSE	FALSE	FALSE			
3	I've just talked to my mom.	ちょうどお母さんと話したとこだよ。	11. 現在完了形肯定文	havepositive	chapter3		FALSE	FALSE	FALSE			
4	I've just taken a shower.	今シャワー浴びたばっかりだよ。	11. 現在完了形肯定文	havepositive	chapter3		FALSE	FALSE	FALSE			
5	I've watched the movie before.	その映画、前に見たことあるよ。	11. 現在完了形肯定文	havepositive	chapter3		FALSE	FALSE	FALSE			
6	I've met her before.	彼女には以前に会ったことあるよ。	11. 現在完了形肯定文	havepositive	chapter3		FALSE	FALSE	FALSE			
7	I've tried the restaurant before.	そのレストラン行ったことあるよ。	11. 現在完了形肯定文	havepositive	chapter3		FALSE	FALSE	FALSE			
8	I've cooked this dish many times.	この料理、何回も作ったことあるよ。	11. 現在完了形肯定文	havepositive	chapter3		FALSE	FALSE	FALSE			
1	I haven't made dinner yet.	まだ晩ごはん作ってないよ。	12. 現在完了形否定文	havenegative	chapter3		FALSE	FALSE	FALSE			
2	I haven't done the laundry today.	今日はまだ洗濯してないよ。	12. 現在完了形否定文	havenegative	chapter3		FALSE	FALSE	FALSE			
3	I haven't replied to her message.	まだ彼女のメッセージに返事してないよ。	12. 現在完了形否定文	havenegative	chapter3		FALSE	FALSE	FALSE			
4	I haven't taken a shower yet.	まだシャワー浴びてないよ。	12. 現在完了形否定文	havenegative	chapter3		FALSE	FALSE	FALSE			
5	I've never been to Kyoto.	京都に行ったことないんだ。	12. 現在完了形否定文	havenegative	chapter3		FALSE	FALSE	FALSE			
6	I've never attended a live concert.	ライブに行ったことないんだ。	12. 現在完了形否定文	havenegative	chapter3		FALSE	FALSE	FALSE			
7	I've never dyed my hair.	髪を染めたことないんだ。	12. 現在完了形否定文	havenegative	chapter3		FALSE	FALSE	FALSE			
8	I've never made bread from scratch.	パンを一から作ったことないんだ。	12. 現在完了形否定文	havenegative	chapter3		FALSE	FALSE	FALSE			
1	I've been cleaning the house since morning.	朝からずっと家の掃除してるよ。	13. 現在完了進行形肯定文	havebeenpositive	chapter3		FALSE	FALSE	FALSE			
2	I've been cooking since 5 p.m.	夕方5時からずっと料理してるよ。	13. 現在完了進行形肯定文	havebeenpositive	chapter3		FALSE	FALSE	FALSE			
3	I've been waiting for the delivery since noon.	お昼からずっと配達を待ってるの。	13. 現在完了進行形肯定文	havebeenpositive	chapter3		FALSE	FALSE	FALSE			
4	I've been helping my son with homework.	息子の宿題をずっと手伝ってるよ。	13. 現在完了進行形肯定文	havebeenpositive	chapter3		FALSE	FALSE	FALSE			
5	I've been watching the drama all day.	あのドラマ、今日ずっと見てるの。	13. 現在完了進行形肯定文	havebeenpositive	chapter3		FALSE	FALSE	FALSE			
6	I've been looking for my keys.	鍵をずっと探してるんだよね。	13. 現在完了進行形肯定文	havebeenpositive	chapter3		FALSE	FALSE	FALSE			
7	I've been organizing the closet since morning.	朝からクローゼット片付けてるよ。	13. 現在完了進行形肯定文	havebeenpositive	chapter3		FALSE	FALSE	FALSE			
8	I've been thinking about dinner.	夜ご飯についてずっと考えてるの。	13. 現在完了進行形肯定文	havebeenpositive	chapter3		FALSE	FALSE	FALSE			
1	I haven't been sleeping well lately.	最近あんまりよく寝れてないんだ。	14. 現在完了進行形否定文	havebeennegative	chapter3		FALSE	FALSE	FALSE			
2	I haven't been eating much these days.	最近あんまり食べてないんだよね。	14. 現在完了進行形否定文	havebeennegative	chapter3		FALSE	FALSE	FALSE			
3	I haven't been exercising at all.	全然運動してないんだよね。	14. 現在完了進行形否定文	havebeennegative	chapter3		FALSE	FALSE	FALSE			
4	I haven't been feeling great recently.	最近あんまり調子よくないんだ。	14. 現在完了進行形否定文	havebeennegative	chapter3		FALSE	FALSE	FALSE			
5	I haven't been watching TV lately.	最近テレビ見てないんだよね。	14. 現在完了進行形否定文	havebeennegative	chapter3		FALSE	FALSE	FALSE			
6	I haven't been studying English recently.	最近英語の勉強してないんだよね。	14. 現在完了進行形否定文	havebeennegative	chapter3		FALSE	FALSE	FALSE			
7	I haven't been going out much.	あんまり外出してないんだよね。	14. 現在完了進行形否定文	havebeennegative	chapter3		FALSE	FALSE	FALSE			
8	I haven't been spending much time with my family.	家族と過ごす時間、最近あんまりとれてないんだ。	14. 現在完了進行形否定文	havebeennegative	chapter3		FALSE	FALSE	FALSE			
1	I can understand easy English.	簡単な英語ならわかるよ。	1. can	can	chapter4		FALSE	FALSE	FALSE			
2	I can read short English sentences.	短い英語の文なら読めるよ。	1. can	can	chapter4		FALSE	FALSE	FALSE			
3	I can follow slow conversations.	ゆっくりなら会話についていけるよ。	1. can	can	chapter4		FALSE	FALSE	FALSE			
4	I can introduce myself in English.	英語で自己紹介できるよ。	1. can	can	chapter4		FALSE	FALSE	FALSE			
5	I can cook dinner tonight.	今夜は私がご飯作れるよ。	1. can	can	chapter4		FALSE	FALSE	FALSE			
6	I can lend you some money.	お金貸してあげられるよ。	1. can	can	chapter4		FALSE	FALSE	FALSE			
7	I can carry that for you.	それ持ってあげるよ。	1. can	can	chapter4		FALSE	FALSE	FALSE			
8	I can help you with the laundry.	洗濯手伝ってあげられるよ。	1. can	can	chapter4		FALSE	FALSE	FALSE			
1	I can't do that.	それはできないよ。	2. can't	cant	chapter4		FALSE	FALSE	FALSE			
2	I can't sleep well here.	ここではよく眠れないよ。	2. can't	cant	chapter4		FALSE	FALSE	FALSE			
3	I can't drive on the highway.	高速道路は運転できないよ。	2. can't	cant	chapter4		FALSE	FALSE	FALSE			
4	I can't find my keys.	鍵が見つからない〜！	2. can't	cant	chapter4		FALSE	FALSE	FALSE			
5	I can't hear you clearly.	あなたの声がはっきり聞こえない。	2. can't	cant	chapter4	あなたの声がはっきり聞こえない	TRUE	FALSE	TRUE			
6	I can't remember his name.	彼の名前が思い出せない。	2. can't	cant	chapter4		FALSE	FALSE	FALSE			
7	She can't eat spicy food.	彼女は辛いものは食べられないよ。	2. can't	cant	chapter4		FALSE	FALSE	FALSE			
8	You can't carry this alone.	これ一人じゃ運べないよ。	2. can't	cant	chapter4		FALSE	FALSE	FALSE			
1	I could run fast before.	前は早く走れた。	3. could	could	chapter4		FALSE	FALSE	FALSE			
2	I could swim when I was a child.	子どもの頃は泳げたよ。	3. could	could	chapter4		FALSE	FALSE	FALSE			
3	I could play the piano when I was younger.	若い頃はピアノが弾けたよ。	3. could	could	chapter4		FALSE	FALSE	FALSE			
4	I could run fast when I was a kid.	子どもの頃は速く走れたよ。	3. could	could	chapter4		FALSE	FALSE	FALSE			
5	I couldn't wake up early today.	朝早く起きれなかった。	3. could	could	chapter4		FALSE	FALSE	FALSE			
6	I couldn't understand your question.	質問が理解できませんでした。	3. could	could	chapter4		FALSE	FALSE	FALSE			
7	I couldn't remember his name.	彼の名前が思い出せなかったんだよね。	3. could	could	chapter4	I couldn't remember his name.	TRUE	TRUE	TRUE			
8	She couldn't make it.	彼女は来られなかった。	3. could	could	chapter4		FALSE	FALSE	FALSE			
1	Can you say that again?	もう一度言ってもらえる？	4. Can you / could you?	canyoucouldyou	chapter4	もう一度言ってもらえる？	TRUE	FALSE	TRUE			
2	Can you help me?	手伝ってもらえない？	4. Can you / could you?	canyoucouldyou	chapter4		FALSE	FALSE	FALSE			
3	Can you hear me clearly?	私の声、良く聞こえる？	4. Can you / could you?	canyoucouldyou	chapter4	私の声、良く聞こえる？	TRUE	FALSE	TRUE			
4	Can you do it?	できそう？	4. Can you / could you?	canyoucouldyou	chapter4		FALSE	FALSE	FALSE			
5	Could you speak more slowly?	もっとゆっくり話していただけますか？	4. Can you / could you?	canyoucouldyou	chapter4		FALSE	FALSE	FALSE			
6	Could you do me a favor?	お願いをしてもいいですか？	4. Can you / could you?	canyoucouldyou	chapter4		FALSE	FALSE	FALSE			
7	Could you help me with the dishes?	お皿洗いを手伝っていただけますか？	4. Can you / could you?	canyoucouldyou	chapter4	お皿洗いを手伝っていただけますか？	TRUE	FALSE	TRUE			
8	Could you pass me the salt?	塩を取っていただけますか？	4. Can you / could you?	canyoucouldyou	chapter4	塩を取っていただけますか？	TRUE	FALSE	TRUE			
1	Can I ask you something?	ちょっと聞いてもいい？	5. Can I / Could I?	canicoldi	chapter4		FALSE	FALSE	FALSE			
2	Can I turn on the TV?	テレビつけていい？	5. Can I / Could I?	canicoldi	chapter4		FALSE	FALSE	FALSE			
3	Can I borrow your pen?	君のペン借りてもいい？	5. Can I / Could I?	canicoldi	chapter4		FALSE	FALSE	FALSE			
4	Can I try this on?	これ試着してもいい？	5. Can I / Could I?	canicoldi	chapter4		FALSE	FALSE	FALSE			
5	Could I try this on?	これ試着してもいいですか？	5. Can I / Could I?	canicoldi	chapter4		FALSE	FALSE	FALSE			
6	Could I change my order?	注文を変更してもいいですか？	5. Can I / Could I?	canicoldi	chapter4		FALSE	FALSE	FALSE			
7	Could I have a glass of water?	お水を一杯いただけますか？	5. Can I / Could I?	canicoldi	chapter4		FALSE	FALSE	FALSE			
8	Could I use the bathroom?	トイレ使ってもいいですか？	5. Can I / Could I?	canicoldi	chapter4		FALSE	FALSE	FALSE			
1	I would buy this one.	私だったらこれ買うよ。	6. would	would	chapter4		FALSE	FALSE	FALSE			
2	I would call her first.	私ならまず彼女に電話する。	6. would	would	chapter4		FALSE	FALSE	FALSE			
3	I would go by train.	私なら電車で行くかな。	6. would	would	chapter4		FALSE	FALSE	FALSE			
4	I wouldn't go there alone.	私ならそこには一人で行かないよ。	6. would	would	chapter4		FALSE	FALSE	FALSE			
5	She would say yes.	彼女は「はい」って言うと思う。	6. would	would	chapter4		FALSE	FALSE	FALSE			
6	He wouldn't eat that dish.	彼ならその料理は食べないよ。	6. would	would	chapter4		FALSE	FALSE	FALSE			
7	She wouldn't wear those shoes.	彼女ならその靴は履かないよ。	6. would	would	chapter4		FALSE	FALSE	FALSE			
8	She said she would cook dinner tonight.	彼女が今夜の晩ごはん作るって言ってたよ。	6. would	would	chapter4	彼女が今夜の晩ごはん作るって言ってたよ。	TRUE	FALSE	TRUE			
1	I might go shopping later.	後で買い物に行くかも。	7. might	might	chapter4		FALSE	FALSE	FALSE			
2	I might need a jacket.	ジャケットが必要かも。	7. might	might	chapter4		FALSE	FALSE	FALSE			
3	I might have a cold.	風邪ひいたかも。	7. might	might	chapter4	風邪ひいたかも。	TRUE	FALSE	TRUE			
4	I might call you tonight.	今夜あなたに電話するかも。	7. might	might	chapter4	今夜あなたに電話するかも。	TRUE	FALSE	TRUE			
5	I might change the plan.	予定を変えるかも。	7. might	might	chapter4		FALSE	FALSE	FALSE			
6	I might be late.	遅れちゃうかも。	7. might	might	chapter4		FALSE	FALSE	FALSE			
7	She might be angry.	彼女怒ってるかも。	7. might	might	chapter4		FALSE	FALSE	FALSE			
8	He might be busy today.	彼、今日は忙しいかも。	7. might	might	chapter4		FALSE	FALSE	FALSE			
1	I should go to bed earlier.	もっと早く寝たほうがいいよね。	8. should	should	chapter4		FALSE	FALSE	FALSE			
2	I should clean the fridge.	私は冷蔵庫を掃除したほうがいいよな。	8. should	should	chapter4		FALSE	FALSE	FALSE			
3	I should eat more vegetables.	もっと野菜を食べたほうがいいよな。	8. should	should	chapter4		FALSE	FALSE	FALSE			
4	I shouldn't eat too much.	私は食べすぎないほうがいいよね。	8. should	should	chapter4		FALSE	FALSE	FALSE			
5	I shouldn't stay up late.	私は夜更かししないほうがいいよね。	8. should	should	chapter4		FALSE	FALSE	FALSE			
6	You should get some rest.	少し休んだほうがいいよ。	8. should	should	chapter4		FALSE	FALSE	FALSE			
7	You should exercise more.	もっと運動した方がいいよ。	8. should	should	chapter4		FALSE	FALSE	FALSE			
8	You shouldn't skip breakfast.	朝ごはんを抜かないほうがいいよ。	8. should	should	chapter4		FALSE	FALSE	FALSE			
1	I must finish this today.	今日中にこれを終わらせなきゃ。	9. must	must	chapter4		FALSE	FALSE	FALSE			
2	I must clean the kitchen.	キッチンを掃除しなきゃ。	9. must	must	chapter4		FALSE	FALSE	FALSE			
3	I must buy some milk.	牛乳を買わなきゃ。	9. must	must	chapter4		FALSE	FALSE	FALSE			
4	You must take off your shoes here.	ここでは靴を脱がないとだめだよ。	9. must	must	chapter4		FALSE	FALSE	FALSE			
5	You must turn off your phone in here.	この中では携帯の電源を切らないとダメだよ。	9. must	must	chapter4	この中では携帯の電源を切らないとダメだよ	TRUE	FALSE	TRUE			
6	You mustn't tell anyone about this.	このこと誰にも言っちゃダメだよ。	9. must	must	chapter4		FALSE	FALSE	FALSE			
7	You mustn't be late.	遅刻しちゃダメだよ。	9. must	must	chapter4		FALSE	FALSE	FALSE			
8	You mustn't run in here.	この中では走っちゃダメだよ。	9. must	must	chapter4	この中では走っちゃダメだよ	TRUE	FALSE	TRUE			
1	I could've helped you if you had told me.	言ってくれれば手伝えたのに。	10. could've	couldhave	chapter4	I could've helped you if you had told me.	TRUE	TRUE	TRUE			
2	I could've made a lunchbox if you had told me.	言ってくれればお弁当作ったのに。	10. could've	couldhave	chapter4	I could've made a lunchbox if you had told me.	TRUE	TRUE	TRUE			
3	I could've picked you up if you had told me.	言ってくれれば迎えに行けたのに。	10. could've	couldhave	chapter4	I could've picked you up if you had told me.	TRUE	TRUE	TRUE			
4	I could've bought it if you had told me.	言ってくれれば買ったのに。	10. could've	couldhave	chapter4	I could've bought it if you had told me.	TRUE	TRUE	TRUE			
5	I could've brought it if you had told me.	言ってくれれば持ってこれたのに。	10. could've	couldhave	chapter4	I could've brought it if you had told me.	TRUE	TRUE	TRUE			
6	I could've come earlier if you had told me.	言ってくれればもっと早く来れたのに。	10. could've	couldhave	chapter4	I could've come earlier if you had told me.	TRUE	TRUE	TRUE			
7	You could've told me earlier.	もっと早く言ってくれればよかったのに。	10. could've	couldhave	chapter4		FALSE	FALSE	FALSE			
8	You could've invited me.	誘ってくれればよかったのに。	10. could've	couldhave	chapter4		FALSE	FALSE	FALSE			
1	I should've slept earlier.	もっと早く寝ればよかった。	11. should've	shouldhave	chapter4		FALSE	FALSE	FALSE			
2	I should've brought an umbrella.	傘を持ってくればよかった。	11. should've	shouldhave	chapter4		FALSE	FALSE	FALSE			
3	I should've saved more money.	もっとお金を貯めておけばよかった。	11. should've	shouldhave	chapter4		FALSE	FALSE	FALSE			
4	I should've apologized sooner.	もっと早く謝ればよかった。	11. should've	shouldhave	chapter4		FALSE	FALSE	FALSE			
5	I shouldn't have said that.	あんなこと言わなければよかった。	11. should've	shouldhave	chapter4		FALSE	FALSE	FALSE			
6	I shouldn't have broken up.	別れなければよかった。	11. should've	shouldhave	chapter4		FALSE	FALSE	FALSE			
7	I shouldn't have eaten so much.	食べすぎなければよかった。	11. should've	shouldhave	chapter4		FALSE	FALSE	FALSE			
8	I shouldn't have stayed up so late.	夜更かししなければよかった。	11. should've	shouldhave	chapter4		FALSE	FALSE	FALSE			
1	I must've forgotten my keys.	鍵忘れたに違いないわ	12. must've	musthave	chapter4	鍵忘れたに違いないわ	TRUE	FALSE	FALSE			
2	I must've left my phone at home.	スマホ、家に忘れてきちゃったに違いない	12. must've	musthave	chapter4	スマホ、家に忘れてきちゃったに違いない	TRUE	FALSE	FALSE			
3	You must've had a great time.	絶対楽しかったでしょ！	12. must've	musthave	chapter4		FALSE	FALSE	FALSE			
4	You must've been so tired.	すごく疲れてたでしょう	12. must've	musthave	chapter4	すごく疲れてたでしょう	TRUE	FALSE	FALSE			
5	You must've been surprised.	絶対驚いたでしょう。	12. must've	musthave	chapter4		FALSE	FALSE	FALSE			
6	You must've been hungry.	絶対お腹すいてたでしょう。	12. must've	musthave	chapter4		FALSE	FALSE	FALSE			
7	You must've been so nervous.	めっちゃ緊張したでしょう	12. must've	musthave	chapter4	めっちゃ緊張したでしょう	TRUE	FALSE	FALSE			
8	You must've been worried.	心配だったでしょう。	12. must've	musthave	chapter4		FALSE	FALSE	FALSE			
1	I might've left my key at home.	鍵を家に忘れちゃったかも。	13. might've	mighthave	chapter4		FALSE	FALSE	FALSE			
2	I might've left my wallet.	財布忘れたかも。	13. might've	mighthave	chapter4		FALSE	FALSE	FALSE			
3	I might've taken the wrong train.	間違った電車乗っちゃったかも！	13. might've	mighthave	chapter4		FALSE	FALSE	FALSE			
4	I might've dropped my phone.	携帯落としちゃったかも。	13. might've	mighthave	chapter4		FALSE	FALSE	FALSE			
5	I might've bought the wrong item.	違うものを買っちゃったかも。	13. might've	mighthave	chapter4		FALSE	FALSE	FALSE			
6	I might've lost my ticket.	チケット失くしちゃったかも。	13. might've	mighthave	chapter4		FALSE	FALSE	FALSE			
7	I might've taken the wrong road.	道間違えちゃったかも。	13. might've	mighthave	chapter4		FALSE	FALSE	FALSE			
8	He might've taken the wrong bus.	彼は違うバスに乗っちゃったのかも。	13. might've	mighthave	chapter4		FALSE	FALSE	FALSE			
1	You like tea?	お茶好き？	1. 現在形の疑問文	PresentTenseQuestion	chapter5		FALSE	FALSE	FALSE			
2	You cook every day?	毎日料理する？	1. 現在形の疑問文	PresentTenseQuestion	chapter5		FALSE	FALSE	FALSE			
3	You need help?	助けいる？	1. 現在形の疑問文	PresentTenseQuestion	chapter5		FALSE	FALSE	FALSE			
4	You often watch dramas?	よくドラマとか見たりする？	1. 現在形の疑問文	PresentTenseQuestion	chapter5		FALSE	FALSE	FALSE			
5	You exercise in the morning?	朝に運動したりする？	1. 現在形の疑問文	PresentTenseQuestion	chapter5		FALSE	FALSE	FALSE			
6	You use this app?	このアプリ使ってる？	1. 現在形の疑問文	PresentTenseQuestion	chapter5		FALSE	FALSE	FALSE			
7	You always wake up early?	いつも早起きしてるの？	1. 現在形の疑問文	PresentTenseQuestion	chapter5		FALSE	FALSE	FALSE			
8	You work in Nakano?	中野で働いてるの？	1. 現在形の疑問文	PresentTenseQuestion	chapter5		FALSE	FALSE	FALSE			
1	You're cooking dinner?	晩ごはん作ってるの？	2. 現在進行形の疑問文	AffirmativeTenseQuestion	chapter5		FALSE	FALSE	FALSE			
2	You're still working?	まだ仕事してるの？	2. 現在進行形の疑問文	AffirmativeTenseQuestion	chapter5		FALSE	FALSE	FALSE			
3	You are waiting for someone?	誰か待ってるの？	2. 現在進行形の疑問文	AffirmativeTenseQuestion	chapter5		FALSE	FALSE	FALSE			
4	You are looking for something?	何か探してるの？	2. 現在進行形の疑問文	AffirmativeTenseQuestion	chapter5		FALSE	FALSE	FALSE			
5	You're leaving soon?	もうすぐ出かけるの？	2. 現在進行形の疑問文	AffirmativeTenseQuestion	chapter5		FALSE	FALSE	FALSE			
6	You're going shopping?	買い物に行くの？	2. 現在進行形の疑問文	AffirmativeTenseQuestion	chapter5		FALSE	FALSE	FALSE			
7	You're going to the university today?	今日は大学に行くの？	2. 現在進行形の疑問文	AffirmativeTenseQuestion	chapter5		FALSE	FALSE	FALSE			
8	You're coming back home today?	今日は家に帰って来るの？	2. 現在進行形の疑問文	AffirmativeTenseQuestion	chapter5		FALSE	FALSE	FALSE			
1	You ate breakfast?	朝ごはん食べたの？	3. 過去形の疑問文	PastTenseQuestion	chapter5		FALSE	FALSE	FALSE			
2	You went shopping?	買い物行ったの？	3. 過去形の疑問文	PastTenseQuestion	chapter5		FALSE	FALSE	FALSE			
3	You saw that movie?	あの映画見たの？	3. 過去形の疑問文	PastTenseQuestion	chapter5		FALSE	FALSE	FALSE			
4	You finished your work?	仕事終わったの？	3. 過去形の疑問文	PastTenseQuestion	chapter5		FALSE	FALSE	FALSE			
5	You met her yesterday?	昨日彼女に会ったの？	3. 過去形の疑問文	PastTenseQuestion	chapter5		FALSE	FALSE	FALSE			
6	You cleaned your room?	部屋掃除したの？	3. 過去形の疑問文	PastTenseQuestion	chapter5		FALSE	FALSE	FALSE			
7	You bought something?	何か買ったの？	3. 過去形の疑問文	PastTenseQuestion	chapter5		FALSE	FALSE	FALSE			
8	You slept well last night?	昨夜よく眠れた？	3. 過去形の疑問文	PastTenseQuestion	chapter5		FALSE	FALSE	FALSE			
1	You're gonna buy a new phone?	新しいスマホ買うの？	4. 未来形の疑問文	FutureTenseQuestion	chapter5		FALSE	FALSE	FALSE			
2	You're gonna wake up early tomorrow?	明日早起きするの？	4. 未来形の疑問文	FutureTenseQuestion	chapter5		FALSE	FALSE	FALSE			
3	You're gonna visit your parents this weekend?	今週末、両親に会いに行くの？	4. 未来形の疑問文	FutureTenseQuestion	chapter5		FALSE	FALSE	FALSE			
4	You're gonna go to the gym tomorrow?	明日ジム行くの？	4. 未来形の疑問文	FutureTenseQuestion	chapter5		FALSE	FALSE	FALSE			
5	You're gonna take a day off next week?	来週休み取るの？	4. 未来形の疑問文	FutureTenseQuestion	chapter5		FALSE	FALSE	FALSE			
6	You're gonna buy it?	それ買うの？	4. 未来形の疑問文	FutureTenseQuestion	chapter5		FALSE	FALSE	FALSE			
7	You're gonna skip lunch?	お昼ごはん抜くの？	4. 未来形の疑問文	FutureTenseQuestion	chapter5		FALSE	FALSE	FALSE			
8	You're gonna go out in this rain?	こんな雨の中出かけるの？	4. 未来形の疑問文	FutureTenseQuestion	chapter5		FALSE	FALSE	FALSE			
1	You've cleaned the kitchen?	もうキッチン掃除したの？	5. 現在完了の疑問文	HaveTenseQuestion	chapter5		FALSE	FALSE	FALSE			
2	You've packed your bag?	もうカバン準備したの？	5. 現在完了の疑問文	HaveTenseQuestion	chapter5		FALSE	FALSE	FALSE			
3	You've finished reading that book?	もうその本読み終わったの？	5. 現在完了の疑問文	HaveTenseQuestion	chapter5		FALSE	FALSE	FALSE			
4	You've done the laundry?	もう洗濯したの？	5. 現在完了の疑問文	HaveTenseQuestion	chapter5		FALSE	FALSE	FALSE			
5	Have you ever been to Kyoto?	京都に行ったことある？	5. 現在完了の疑問文	HaveTenseQuestion	chapter5		FALSE	FALSE	FALSE			
6	Have you ever ridden a horse?	馬に乗ったことある？	5. 現在完了の疑問文	HaveTenseQuestion	chapter5		FALSE	FALSE	FALSE			
7	Have you ever spoken English with a native speaker?	ネイティブの人と英語で話したことある？	5. 現在完了の疑問文	HaveTenseQuestion	chapter5		FALSE	FALSE	FALSE			
8	Have you ever seen Mount Fuji in person?	富士山を実際に見たことある？	5. 現在完了の疑問文	HaveTenseQuestion	chapter5		FALSE	FALSE	FALSE			
1	You've been working all day?	一日中働いてるの？	6. 現在完了進行形の疑問文	HaveBeenTenseQuestion	chapter5		FALSE	FALSE	FALSE			
2	You've been studying English for years?	何年も英語を勉強してるの？	6. 現在完了進行形の疑問文	HaveBeenTenseQuestion	chapter5		FALSE	FALSE	FALSE			
3	You've been waiting for me for a long time?	ずっと私のこと待ってくれてたの？	6. 現在完了進行形の疑問文	HaveBeenTenseQuestion	chapter5		FALSE	FALSE	FALSE			
4	You've been feeling sick since this morning?	今朝からずっと体調悪いの？	6. 現在完了進行形の疑問文	HaveBeenTenseQuestion	chapter5		FALSE	FALSE	FALSE			
5	You've been watching that drama all day?	一日中そのドラマ見てるの？	6. 現在完了進行形の疑問文	HaveBeenTenseQuestion	chapter5		FALSE	FALSE	FALSE			
6	You've been thinking about him?	ずっと彼のこと考えてるの？	6. 現在完了進行形の疑問文	HaveBeenTenseQuestion	chapter5	ずっと彼のこと考えてるの？	TRUE	FALSE	FALSE			
7	You've been slacking off on studying English lately?	最近ずっと英語の勉強サボってるの？	6. 現在完了進行形の疑問文	HaveBeenTenseQuestion	chapter5	最近ずっと英語の勉強サボってるの？/ You've been slacking off on studying English lately?	TRUE	FALSE	FALSE			
8	You've been living here for 10 years?	10年間ここに住んでいるの？	6. 現在完了進行形の疑問文	HaveBeenTenseQuestion	chapter5		FALSE	FALSE	FALSE			
1	What's your plan for tomorrow?	明日の予定は？	7. Whatを使った疑問文1/2	Questionwhat1	chapter5		FALSE	FALSE	FALSE			
2	What is your favorite food?	好きな食べ物はなに？	7. Whatを使った疑問文1/2	Questionwhat1	chapter5		FALSE	FALSE	FALSE			
3	What are you making for dinner?	夜ご飯何作ってるの？	7. Whatを使った疑問文1/2	Questionwhat1	chapter5		FALSE	FALSE	FALSE			
4	What are you looking for?	何探してるの？	7. Whatを使った疑問文1/2	Questionwhat1	chapter5		FALSE	FALSE	FALSE			
5	What are you watching on TV?	今テレビで何見てるの？	7. Whatを使った疑問文1/2	Questionwhat1	chapter5		FALSE	FALSE	FALSE			
6	What do you usually cook for lunch?	普段お昼ごはん何作るの？	7. Whatを使った疑問文1/2	Questionwhat1	chapter5		FALSE	FALSE	FALSE			
7	What do you want for dessert?	デザート何がいい？	7. Whatを使った疑問文1/2	Questionwhat1	chapter5		FALSE	FALSE	FALSE			
8	What time do you finish your work?	仕事は何時に終わるの？	7. Whatを使った疑問文1/2	Questionwhat1	chapter5		FALSE	FALSE	FALSE			
1	What did you do yesterday?	昨日は何したの？	8. Whatを使った疑問文2/2	Questionwhat2	chapter5		FALSE	FALSE	FALSE			
2	What did you buy at the store?	お店で何買ったの？	8. Whatを使った疑問文2/2	Questionwhat2	chapter5		FALSE	FALSE	FALSE			
3	What are you gonna cook tonight?	今夜何を作るの？	8. Whatを使った疑問文2/2	Questionwhat2	chapter5		FALSE	FALSE	FALSE			
4	What are you gonna say to him?	彼に何て言うの？	8. Whatを使った疑問文2/2	Questionwhat2	chapter5		FALSE	FALSE	FALSE			
5	What were you talking about?	何の話をしてたの？	8. Whatを使った疑問文2/2	Questionwhat2	chapter5		FALSE	FALSE	FALSE			
6	What kind of coffee do you like?	どんなコーヒーが好き？	8. Whatを使った疑問文2/2	Questionwhat2	chapter5		FALSE	FALSE	FALSE			
7	What kind of music do you listen to?	どんな音楽を聴くの？	8. Whatを使った疑問文2/2	Questionwhat2	chapter5		FALSE	FALSE	FALSE			
8	What kind of bag are you gonna buy?	どんな感じのバッグを買うつもりなの？	8. Whatを使った疑問文2/2	Questionwhat2	chapter5		FALSE	FALSE	FALSE			
1	When is your day off?	休みの日はいつなの？	9. Whenを使った疑問文1/2	Questionwhen1	chapter5		FALSE	FALSE	FALSE			
2	When is the sports festival?	運動会っていつ？	9. Whenを使った疑問文1/2	Questionwhen1	chapter5		FALSE	FALSE	FALSE			
3	When are you going to bed?	いつ寝るつもり？	9. Whenを使った疑問文1/2	Questionwhen1	chapter5		FALSE	FALSE	FALSE			
4	When are you going?	いつ行くの？	9. Whenを使った疑問文1/2	Questionwhen1	chapter5		FALSE	FALSE	FALSE			
5	When did you start studying English?	いつ英語を勉強し始めたの？	9. Whenを使った疑問文1/2	Questionwhen1	chapter5		FALSE	FALSE	FALSE			
6	When did you go there?	いつそこに行ったの？	9. Whenを使った疑問文1/2	Questionwhen1	chapter5		FALSE	FALSE	FALSE			
7	When did you talk to her last?	最後に彼女と話したのはいつ？	9. Whenを使った疑問文1/2	Questionwhen1	chapter5		FALSE	FALSE	FALSE			
8	When did you move here?	いつここに引っ越してきたの？	9. Whenを使った疑問文1/2	Questionwhen1	chapter5		FALSE	FALSE	FALSE			
1	When are you gonna start cooking?	いつ料理を始めるの？	10. Whenを使った疑問文2/2	Questionwhen2	chapter5		FALSE	FALSE	FALSE			
2	When are you gonna call him?	いつ彼に電話するの？	10. Whenを使った疑問文2/2	Questionwhen2	chapter5		FALSE	FALSE	FALSE			
3	When is she gonna be home?	彼女はいつ家に帰るの？	10. Whenを使った疑問文2/2	Questionwhen2	chapter5		FALSE	FALSE	FALSE			
4	When are you gonna fix the light?	いつ電気直すの？	10. Whenを使った疑問文2/2	Questionwhen2	chapter5		FALSE	FALSE	FALSE			
5	Since when have you been drinking coffee?	いつからコーヒー飲むようになったの？	10. Whenを使った疑問文2/2	Questionwhen2	chapter5		FALSE	FALSE	FALSE			
6	Since when have you been living in Shinjuku?	いつから新宿に住んでるの？	10. Whenを使った疑問文2/2	Questionwhen2	chapter5		FALSE	FALSE	FALSE			
7	Since when have you been going to the gym?	いつからジムに行くようになったの？	10. Whenを使った疑問文2/2	Questionwhen2	chapter5		FALSE	FALSE	FALSE			
8	Since when have you been waking up so early?	いつからそんなに早起きしてるの？	10. Whenを使った疑問文2/2	Questionwhen2	chapter5	いつからそんなに早起きしてるの？	TRUE	FALSE	FALSE			
1	Where is my wallet?	私の財布どこ？	11. whereを使った疑問文1/2	Questionwhere1	chapter5		FALSE	FALSE	FALSE			
2	Where is the TV remote?	テレビのリモコンどこ？	11. whereを使った疑問文1/2	Questionwhere1	chapter5		FALSE	FALSE	FALSE			
3	Where is the nearest supermarket?	一番近いスーパーはどこ？	11. whereを使った疑問文1/2	Questionwhere1	chapter5		FALSE	FALSE	FALSE			
4	Where are you going?	どこ行くの？	11. whereを使った疑問文1/2	Questionwhere1	chapter5		FALSE	FALSE	FALSE			
5	Where are you staying?	どこに泊まるの？	11. whereを使った疑問文1/2	Questionwhere1	chapter5		FALSE	FALSE	FALSE			
6	Where do you buy groceries?	食材ってどこで買ってるの？	11. whereを使った疑問文1/2	Questionwhere1	chapter5		FALSE	FALSE	FALSE			
7	Where do you get a haircut?	どこで髪は切ってるの？	11. whereを使った疑問文1/2	Questionwhere1	chapter5		FALSE	FALSE	FALSE			
8	Where does she work?	彼女はどこで働いてるの？	11. whereを使った疑問文1/2	Questionwhere1	chapter5		FALSE	FALSE	FALSE			
1	Where were you this morning?	今朝どこにいたの？	12. whereを使った疑問文2/2	Questionwhere2	chapter5		FALSE	FALSE	FALSE			
2	Where were you last night?	昨夜どこにいたの？	12. whereを使った疑問文2/2	Questionwhere2	chapter5		FALSE	FALSE	FALSE			
3	Where was the event held?	イベントはどこで開催されたの？	12. whereを使った疑問文2/2	Questionwhere2	chapter5		FALSE	FALSE	FALSE			
4	Where did you buy this bag?	このバッグどこで買ったの？	12. whereを使った疑問文2/2	Questionwhere2	chapter5		FALSE	FALSE	FALSE			
5	Where did you eat lunch?	どこでお昼を食べたの？	12. whereを使った疑問文2/2	Questionwhere2	chapter5		FALSE	FALSE	FALSE			
6	Where did you meet her?	どこで彼女に会ったの？	12. whereを使った疑問文2/2	Questionwhere2	chapter5		FALSE	FALSE	FALSE			
7	Where are you gonna go this weekend?	今週末どこに行くの？	12. whereを使った疑問文2/2	Questionwhere2	chapter5		FALSE	FALSE	FALSE			
8	Where are you gonna have lunch?	どこでランチを食べるの？	12. whereを使った疑問文2/2	Questionwhere2	chapter5		FALSE	FALSE	FALSE			
1	Who is that?	あの人誰？	13. Whoを使った疑問文	Questionwho	chapter5		FALSE	FALSE	FALSE			
2	Who is he?	彼は誰？	13. Whoを使った疑問文	Questionwho	chapter5		FALSE	FALSE	FALSE			
3	Who are you talking to?	誰と話してるの？	13. Whoを使った疑問文	Questionwho	chapter5		FALSE	FALSE	FALSE			
4	Who are you meeting today?	今日は誰と会うの？	13. Whoを使った疑問文	Questionwho	chapter5		FALSE	FALSE	FALSE			
5	Who left the door open?	誰がドアを開けっぱなしにしたの？	13. Whoを使った疑問文	Questionwho	chapter5		FALSE	FALSE	FALSE			
6	Who made this cake?	誰がこのケーキを作ったの？	13. Whoを使った疑問文	Questionwho	chapter5		FALSE	FALSE	FALSE			
7	Who took my umbrella?	誰が私の傘を持って行ったんだ!?	13. Whoを使った疑問文	Questionwho	chapter5		FALSE	FALSE	FALSE			
8	Who did you invite to dinner?	誰を晩ごはんに招待したの？	13. Whoを使った疑問文	Questionwho	chapter5		FALSE	FALSE	FALSE			
1	Why are you late?	なんで遅れたの？	14. Whyを使った疑問文1/2	Questionwhy1	chapter5		FALSE	FALSE	FALSE			
2	Why are you so tired?	なんでそんなに疲れてるの？	14. Whyを使った疑問文1/2	Questionwhy1	chapter5		FALSE	FALSE	FALSE			
3	Why are you still up?	なんでまだ起きてるの？	14. Whyを使った疑問文1/2	Questionwhy1	chapter5		FALSE	FALSE	FALSE			
4	Why do you wake up so early?	なんでそんなに早く起きるの？	14. Whyを使った疑問文1/2	Questionwhy1	chapter5		FALSE	FALSE	FALSE			
5	Why do you study English?	なんで英語を勉強しているの？	14. Whyを使った疑問文1/2	Questionwhy1	chapter5		FALSE	FALSE	FALSE			
6	Why do you like reading books so much?	なんでそんなに本を読むのが好きなの？	14. Whyを使った疑問文1/2	Questionwhy1	chapter5		FALSE	FALSE	FALSE			
7	Why are you crying?	なんで泣いてるの？	14. Whyを使った疑問文1/2	Questionwhy1	chapter5		FALSE	FALSE	FALSE			
8	Why are you wearing that in winter?	なんで冬なのにそんなの着ているの？	14. Whyを使った疑問文1/2	Questionwhy1	chapter5		FALSE	FALSE	FALSE			
1	Why did you leave early yesterday?	なんで昨日は早く帰ったの？	15. Whyを使った疑問文2/2	Questionwhy2	chapter5		FALSE	FALSE	FALSE			
2	Why did you eat my pudding?	なんで私のプリン食べたの？	15. Whyを使った疑問文2/2	Questionwhy2	chapter5		FALSE	FALSE	FALSE			
3	Why did she quit her job?	なんで彼女は仕事を辞めたの？	15. Whyを使った疑問文2/2	Questionwhy2	chapter5		FALSE	FALSE	FALSE			
4	Why did you come back home so late?	なんでこんな遅く帰ってきたの？	15. Whyを使った疑問文2/2	Questionwhy2	chapter5		FALSE	FALSE	FALSE			
5	Why are you gonna change your phone?	なんでスマホを変えるの？	15. Whyを使った疑問文2/2	Questionwhy2	chapter5		FALSE	FALSE	FALSE			
6	Why are you gonna go to Osaka?	なんで大阪に行くの？	15. Whyを使った疑問文2/2	Questionwhy2	chapter5		FALSE	FALSE	FALSE			
7	Why are you gonna throw this away?	なんでこれ捨てるの？	15. Whyを使った疑問文2/2	Questionwhy2	chapter5		FALSE	FALSE	FALSE			
8	Why are you gonna stay up all night?	なんで徹夜するの？	15. Whyを使った疑問文2/2	Questionwhy2	chapter5		FALSE	FALSE	FALSE			
1	Which is your phone?	どれがあなたのスマホ？	16. Whichを使った疑問文1/2	Questionwhich1	chapter5		FALSE	FALSE	FALSE			
2	Which is your bag?	あなたのバッグはどれ？	16. Whichを使った疑問文1/2	Questionwhich1	chapter5		FALSE	FALSE	FALSE			
3	Which one is cheaper?	どっちのほうが安いですか？	16. Whichを使った疑問文1/2	Questionwhich1	chapter5		FALSE	FALSE	FALSE			
4	Which one is better?	どっちのほうがよりいいですか？	16. Whichを使った疑問文1/2	Questionwhich1	chapter5		FALSE	FALSE	FALSE			
5	Which is yours?	どっちのがあなたの？	16. Whichを使った疑問文1/2	Questionwhich1	chapter5		FALSE	FALSE	FALSE			
6	Which jacket do you like better?	どっちのジャケットの方が好き？	16. Whichを使った疑問文1/2	Questionwhich1	chapter5		FALSE	FALSE	FALSE			
7	Which color do you like better?	どっちの色の方が好き？	16. Whichを使った疑問文1/2	Questionwhich1	chapter5		FALSE	FALSE	FALSE			
8	Which tea do you want to drink?	どのお茶を飲みたい？	16. Whichを使った疑問文1/2	Questionwhich1	chapter5		FALSE	FALSE	FALSE			
1	Which shampoo do you recommend?	どのシャンプーがおすすめ？	17. Whichを使った疑問文2/2	Questionwhich2	chapter5		FALSE	FALSE	FALSE			
2	Which restaurant do you recommend?	どのレストランがおすすめ？	17. Whichを使った疑問文2/2	Questionwhich2	chapter5		FALSE	FALSE	FALSE			
3	Which phone are you gonna get?	どのスマホを買うの？	17. Whichを使った疑問文2/2	Questionwhich2	chapter5		FALSE	FALSE	FALSE			
4	Which one are you gonna choose?	どっちを選ぶの？	17. Whichを使った疑問文2/2	Questionwhich2	chapter5		FALSE	FALSE	FALSE			
5	Which one are you gonna watch tonight?	今夜はどっちを見るの？	17. Whichを使った疑問文2/2	Questionwhich2	chapter5		FALSE	FALSE	FALSE			
6	Which one did you like better?	どっちの方が好きだった？	17. Whichを使った疑問文2/2	Questionwhich2	chapter5		FALSE	FALSE	FALSE			
7	Which one did you watch last night?	昨夜はどっちを見たの？	17. Whichを使った疑問文2/2	Questionwhich2	chapter5	昨夜はどっちを見たの？	TRUE	FALSE	FALSE			
8	Which one did you eat?	どっちを食べたの？	17. Whichを使った疑問文2/2	Questionwhich2	chapter5		FALSE	FALSE	FALSE			
1	Whose bag is this?	これ誰のバッグ？	18. Whoseを使った疑問文	Questionwhose	chapter5		FALSE	FALSE	FALSE			
2	Whose umbrella is that?	あれは誰の傘？	18. Whoseを使った疑問文	Questionwhose	chapter5		FALSE	FALSE	FALSE			
3	Whose shoes are at the entrance?	玄関の靴はだれの？	18. Whoseを使った疑問文	Questionwhose	chapter5		FALSE	FALSE	FALSE			
4	Whose keys are these?	これらの鍵は誰のですか？	18. Whoseを使った疑問文	Questionwhose	chapter5	これらの鍵は誰のですか？	TRUE	FALSE	FALSE			
5	Whose phone is ringing?	誰のスマホが鳴ってる？	18. Whoseを使った疑問文	Questionwhose	chapter5		FALSE	FALSE	FALSE			
6	Whose water bottle is on the table?	テーブルの水筒は誰の？	18. Whoseを使った疑問文	Questionwhose	chapter5		FALSE	FALSE	FALSE			
7	Whose pudding is in the fridge?	冷蔵庫のプリン誰の？	18. Whoseを使った疑問文	Questionwhose	chapter5		FALSE	FALSE	FALSE			
8	Whose t-shirt is in the bathroom?	お風呂にあるTシャツ誰の？	18. Whoseを使った疑問文	Questionwhose	chapter5		FALSE	FALSE	FALSE			
1	How is your family?	家族は元気？	19. Howを使った疑問文1/2	Questionhow1	chapter5		FALSE	FALSE	FALSE			
2	How is your mom doing?	お母さんどうしてる？	19. Howを使った疑問文1/2	Questionhow1	chapter5		FALSE	FALSE	FALSE			
3	How do you make this soup?	このスープどうやって作るの？	19. Howを使った疑問文1/2	Questionhow1	chapter5		FALSE	FALSE	FALSE			
4	How do you usually spend your weekend?	週末はいつもどう過ごしてるの？	19. Howを使った疑問文1/2	Questionhow1	chapter5		FALSE	FALSE	FALSE			
5	How was your day?	今日はどうだった？	19. Howを使った疑問文1/2	Questionhow1	chapter5		FALSE	FALSE	FALSE			
6	How was the drinking party last night?	昨日の飲み会はどうだった？	19. Howを使った疑問文1/2	Questionhow1	chapter5		FALSE	FALSE	FALSE			
7	How was the new cafe?	あの新しいカフェどうだった？	19. Howを使った疑問文1/2	Questionhow1	chapter5		FALSE	FALSE	FALSE			
8	How was your trip to Osaka?	大阪の旅行どうだった？	19. Howを使った疑問文1/2	Questionhow1	chapter5		FALSE	FALSE	FALSE			
1	How did you make this delicious curry?	このおいしいカレー、どうやって作ったの？	20. Howを使った疑問文2/2	Questionhow2	chapter5		FALSE	FALSE	FALSE			
2	How did you get here?	どうやってここに来たの？	20. Howを使った疑問文2/2	Questionhow2	chapter5		FALSE	FALSE	FALSE			
3	How did you fix the washing machine?	洗濯機、どうやって直したの？	20. Howを使った疑問文2/2	Questionhow2	chapter5		FALSE	FALSE	FALSE			
4	How did you persuade him?	どうやって彼を説得したの？	20. Howを使った疑問文2/2	Questionhow2	chapter5		FALSE	FALSE	FALSE			
5	How are you gonna spend your weekend?	週末はどう過ごすつもり？	20. Howを使った疑問文2/2	Questionhow2	chapter5		FALSE	FALSE	FALSE			
6	How are you gonna go to Fukuoka?	福岡にはどうやって行くの？	20. Howを使った疑問文2/2	Questionhow2	chapter5		FALSE	FALSE	FALSE			
7	How are you gonna explain it to him?	彼にそれをどう説明するの？	20. Howを使った疑問文2/2	Questionhow2	chapter5		FALSE	FALSE	FALSE			
8	How are you gonna come up with that much money?	どうやってそんなお金を用意するの？	20. Howを使った疑問文2/2	Questionhow2	chapter5		FALSE	FALSE	FALSE			
1	How long is the movie?	映画はどれくらいの長さ？	21. How long1/2	Questionhowlong1	chapter5		FALSE	FALSE	FALSE			
2	How long is your lunch break?	ランチ休憩はどれくらいあるの？	21. How long1/2	Questionhowlong1	chapter5		FALSE	FALSE	FALSE			
3	How long is the flight to Tokyo?	東京までの飛行時間はどれくらい？	21. How long1/2	Questionhowlong1	chapter5		FALSE	FALSE	FALSE			
4	How long does it take to walk to the school?	学校まで歩いてどれくらい？	21. How long1/2	Questionhowlong1	chapter5		FALSE	FALSE	FALSE			
5	How long does it take to go to your workplace?	仕事場まではどれくらいかかるの？	21. How long1/2	Questionhowlong1	chapter5		FALSE	FALSE	FALSE			
6	How long do you usually sleep?	普段どれくらい寝るの？	21. How long1/2	Questionhowlong1	chapter5		FALSE	FALSE	FALSE			
7	How long do you usually study English?	普段は英語をどれくらい勉強しているの？	21. How long1/2	Questionhowlong1	chapter5		FALSE	FALSE	FALSE			
8	How long does this battery last?	このバッテリーはどれくらい持つの？	21. How long1/2	Questionhowlong1	chapter5		FALSE	FALSE	FALSE			
1	How long did you wait?	どれくらい待った？	22. How long2/2	Questionhowlong2	chapter5		FALSE	FALSE	FALSE			
2	How long did you live in Osaka?	大阪にどれくらい住んでたの？	22. How long2/2	Questionhowlong2	chapter5		FALSE	FALSE	FALSE			
3	How long did you stay in the hospital?	病院にどれくらい入院してたの？	22. How long2/2	Questionhowlong2	chapter5		FALSE	FALSE	FALSE			
4	How long are you gonna stay at your parents' house?	実家にはどれくらい滞在するの？	22. How long2/2	Questionhowlong2	chapter5		FALSE	FALSE	FALSE			
5	How long are you gonna stay on your trip?	どれくらいの期間旅行するの？	22. How long2/2	Questionhowlong2	chapter5	How long are you gonna stay on your trip?	TRUE	TRUE	FALSE			
6	How long are you gonna be away?	どれくらいの留守にするの？	22. How long2/2	Questionhowlong2	chapter5		FALSE	FALSE	FALSE			
7	How long have you been studying English?	どれくらい英語を勉強してるの？	22. How long2/2	Questionhowlong2	chapter5		FALSE	FALSE	FALSE			
8	How long have you been living in Chiba?	千葉にはどれくらいの期間住んでるの？	22. How long2/2	Questionhowlong2	chapter5		FALSE	FALSE	FALSE			
1	How many eggs do you need?	卵いくつ必要？	23. How many/much1	Questionhowmanymuch1	chapter5		FALSE	FALSE	FALSE			
2	How many kids do you have?	子どもは何人いるの？	23. How many/much1	Questionhowmanymuch1	chapter5		FALSE	FALSE	FALSE			
3	How many plates do we need?	私たち、お皿何枚必要かな？	23. How many/much1	Questionhowmanymuch1	chapter5	私たち、お皿何枚必要かな？	TRUE	FALSE	FALSE			
4	How many people are coming today?	今日は何人来るの？	23. How many/much1	Questionhowmanymuch1	chapter5		FALSE	FALSE	FALSE			
5	How much is this?	これいくら？	23. How many/much1	Questionhowmanymuch1	chapter5		FALSE	FALSE	FALSE			
6	How much water do you drink a day?	1日に水はどれくらい飲むの？	23. How many/much1	Questionhowmanymuch1	chapter5		FALSE	FALSE	FALSE			
7	How much money did you spend?	いくら使ったの？	23. How many/much1	Questionhowmanymuch1	chapter5		FALSE	FALSE	FALSE			
8	How much time do you have?	あとどのくらい時間ある？	23. How many/much1	Questionhowmanymuch1	chapter5		FALSE	FALSE	FALSE			
1	How many people are in your family?	家族は何人いるの？	24. How many/much2	Questionhowmanymuch2	chapter5		FALSE	FALSE	FALSE			
2	How many languages can you speak?	何カ国語話せるの？	24. How many/much2	Questionhowmanymuch2	chapter5		FALSE	FALSE	FALSE			
3	How many cups of coffee did you drink today?	今日コーヒー何杯飲んだ？	24. How many/much2	Questionhowmanymuch2	chapter5		FALSE	FALSE	FALSE			
4	How many slices of pizza did you eat?	ピザ何枚食べた？	24. How many/much2	Questionhowmanymuch2	chapter5		FALSE	FALSE	FALSE			
5	How much water do you drink in a day?	1日の中でどれくらい水を飲む？	24. How many/much2	Questionhowmanymuch2	chapter5		FALSE	FALSE	FALSE			
6	How much time do you spend on Instagram?	インスタにどれくらい時間使ってる？	24. How many/much2	Questionhowmanymuch2	chapter5		FALSE	FALSE	FALSE			
7	How much sleep did you get last night?	昨日どれくらい寝れた？	24. How many/much2	Questionhowmanymuch2	chapter5		FALSE	FALSE	FALSE			
8	How much space is left in the closet?	クローゼットにあとどれくらいスペースある？	24. How many/much2	Questionhowmanymuch2	chapter5		FALSE	FALSE	FALSE			
1	How often do you call your parents?	どれくらいの頻度で両親に電話するの？	25. How often	Questionhowoften	chapter5		FALSE	FALSE	FALSE			
2	How often do you eat out?	どれくらいの頻度で外食するの？	25. How often	Questionhowoften	chapter5		FALSE	FALSE	FALSE			
3	How often do you exercise?	どれくらいの頻度で運動するの？	25. How often	Questionhowoften	chapter5		FALSE	FALSE	FALSE			
4	How often do you go back to your hometown?	どれくらいの頻度で地元に帰るの？	25. How often	Questionhowoften	chapter5		FALSE	FALSE	FALSE			
5	How often do you drink coffee?	どれくらいの頻度でコーヒー飲むの？	25. How often	Questionhowoften	chapter5		FALSE	FALSE	FALSE			
6	How often does she travel abroad?	彼女はどれくらいの頻度で海外旅行するの？	25. How often	Questionhowoften	chapter5		FALSE	FALSE	FALSE			
7	How often do you meet your friends?	友達とどれくらいの頻度で会ってる？	25. How often	Questionhowoften	chapter5		FALSE	FALSE	FALSE			
8	How often do you do laundry?	洗濯ってどれくらいの頻度でしてる？	25. How often	Questionhowoften	chapter5		FALSE	FALSE	FALSE			
1	How many times do you play table tennis in a month?	一ヶ月に何回卓球をしてるの？	26. How many times	Questionhowmanytimes	chapter5		FALSE	FALSE	FALSE			
2	How many times do you do the laundry in a week?	週に何回洗濯してるの？	26. How many times	Questionhowmanytimes	chapter5		FALSE	FALSE	FALSE			
3	How many times do you cook in a week?	週に何回料理してるの？	26. How many times	Questionhowmanytimes	chapter5		FALSE	FALSE	FALSE			
4	How many times have you been to Kyoto?	京都に何回行ったことある？	26. How many times	Questionhowmanytimes	chapter5		FALSE	FALSE	FALSE			
5	How many times have you been to Hawaii?	ハワイには何回行ったことあるの？	26. How many times	Questionhowmanytimes	chapter5		FALSE	FALSE	FALSE			
6	How many times did you see the movie?	その映画何回見たの？	26. How many times	Questionhowmanytimes	chapter5		FALSE	FALSE	FALSE			
7	How many times did you watch the drama?	そのドラマ何回見たの？	26. How many times	Questionhowmanytimes	chapter5		FALSE	FALSE	FALSE			
8	How many times do you exercise in a week?	週に何回運動してるの？	26. How many times	Questionhowmanytimes	chapter5		FALSE	FALSE	FALSE			
1	It is important to exercise every day.	毎日運動するのは大切だ。	1. to(主語)	ToSubject	chapter6		FALSE	FALSE	FALSE			
2	It is hard to wake up early every morning.	毎朝早起きするのは大変。	1. to(主語)	ToSubject	chapter6		FALSE	FALSE	FALSE			
3	It is fun to study English.	英語を勉強するのは楽しい。	1. to(主語)	ToSubject	chapter6		FALSE	FALSE	FALSE			
4	It is difficult to make time for studying English.	英語を勉強する時間を作るのは難しい。	1. to(主語)	ToSubject	chapter6		FALSE	FALSE	FALSE			
5	It is rewarding to raise kids.	子育てはやりがいがある。	1. to(主語)	ToSubject	chapter6		FALSE	FALSE	FALSE			
6	It is a hassle to do the laundry.	洗濯物をするのは面倒くさい。	1. to(主語)	ToSubject	chapter6		FALSE	FALSE	FALSE			
7	It is exciting to plan a family trip.	家族旅行の計画を立てるのはワクワクする。	1. to(主語)	ToSubject	chapter6		FALSE	FALSE	FALSE			
8	It is frustrating to look for lost items.	なくし物探すのってイライラする。	1. to(主語)	ToSubject	chapter6		FALSE	FALSE	FALSE			
1	I want to take a nap after lunch.	お昼ご飯の後にちょっと昼寝したいな。	2. to(目的語)	ToObject1	chapter6		FALSE	FALSE	FALSE			
2	I want to go to a cafe and relax.	カフェに行ってのんびりしたい。	2. to(目的語)	ToObject1	chapter6		FALSE	FALSE	FALSE			
3	I decided to wake up earlier every day.	毎日もう少し早起きすることに決めた。	2. to(目的語)	ToObject1	chapter6		FALSE	FALSE	FALSE			
4	I decided to save more money.	もっとお金を貯めることにしたよ。	2. to(目的語)	ToObject1	chapter6		FALSE	FALSE	FALSE			
5	I managed to finish all the housework this morning.	今朝、なんとか家事を全部終わらせたよ。	2. to(目的語)	ToObject1	chapter6		FALSE	FALSE	FALSE			
6	I managed to make it on time.	なんとか時間に間に合った。	2. to(目的語)	ToObject1	chapter6		FALSE	FALSE	FALSE			
7	He promised to return the money.	彼はお金を返すって約束したよ。	2. to(目的語)	ToObject1	chapter6		FALSE	FALSE	FALSE			
8	He promised to be on time.	彼は時間通りに来るって約束したよ。	2. to(目的語)	ToObject1	chapter6	彼は時間通りに来るって約束したよ。	TRUE	FALSE	FALSE			
1	I have to pick up my kids.	子ども迎えに行かなきゃ。	3. to(慣用表現)	ToObject2	chapter6		FALSE	FALSE	FALSE			
2	I have to go to the bank tomorrow.	明日は銀行に行かないと。	3. to(慣用表現)	ToObject2	chapter6		FALSE	FALSE	FALSE			
3	I tend to forget things.	物忘れしがちなんだよね。	3. to(慣用表現)	ToObject2	chapter6		FALSE	FALSE	FALSE			
4	I tend to overthink.	考えすぎちゃいがちなんだよね。	3. to(慣用表現)	ToObject2	chapter6		FALSE	FALSE	FALSE			
5	I tend to forget where I put my keys.	鍵をどこに置いたか忘れがちなんだよね。	3. to(慣用表現)	ToObject2	chapter6		FALSE	FALSE	FALSE			
6	I tend to buy too many snacks.	お菓子をつい買いすぎちゃうんだよね。	3. to(慣用表現)	ToObject2	chapter6		FALSE	FALSE	FALSE			
7	I try to stay positive.	ポジティブでいれるようにしてる。	3. to(慣用表現)	ToObject2	chapter6		FALSE	FALSE	FALSE			
8	I try to exercise every day.	毎日運動するようにしてる。	3. to(慣用表現)	ToObject2	chapter6		FALSE	FALSE	FALSE			
1	My goal is to speak English like a native speaker.	ネイティブみたいに英語を話すのが私の目標なんだ。	4. to(補語)	ToComplement	chapter6		FALSE	FALSE	FALSE			
2	My goal is to live abroad.	海外で暮らすのが私の目標なんだ。	4. to(補語)	ToComplement	chapter6		FALSE	FALSE	FALSE			
3	My dream is to open a small cafe.	小さなカフェを開くのが夢なんだ。	4. to(補語)	ToComplement	chapter6		FALSE	FALSE	FALSE			
4	My dream is to go to his live concert.	彼のライブに行くのが夢なんだ。	4. to(補語)	ToComplement	chapter6		FALSE	FALSE	FALSE			
5	The best way to stay healthy is to eat well.	健康を保つ一番の方法は、ちゃんと食べること。	4. to(補語)	ToComplement	chapter6		FALSE	FALSE	FALSE			
6	The best way to save money is to cook at home.	節約する一番の方法は、家で料理すること。	4. to(補語)	ToComplement	chapter6		FALSE	FALSE	FALSE			
7	The best way to relax is to take a bath.	リラックスする一番の方法は、お風呂に入ることだよ。	4. to(補語)	ToComplement	chapter6		FALSE	FALSE	FALSE			
8	The best way to study English is to take this program.	英語を勉強するいちばんの方法はこのプログラムを受けることだよ。	4. to(補語)	ToComplement	chapter6		FALSE	FALSE	FALSE			
1	I study English to talk with foreign friends.	外国の友達と話すために英語を勉強してる。	5. to(副詞的用法1)	ToPurpose	chapter6		FALSE	FALSE	FALSE			
2	I exercise every day to lose weight.	痩せるために毎日運動してるんだ。	5. to(副詞的用法1)	ToPurpose	chapter6		FALSE	FALSE	FALSE			
3	I saved money to buy a new car.	新しい車を買うために節約したんだ。	5. to(副詞的用法1)	ToPurpose	chapter6		FALSE	FALSE	FALSE			
4	I went to Kanagawa to see my family.	家族に会うために神奈川に行ったんだ。	5. to(副詞的用法1)	ToPurpose	chapter6		FALSE	FALSE	FALSE			
5	I quit my job to concentrate on studying English.	英語の勉強に集中するために仕事をやめたんだ。	5. to(副詞的用法1)	ToPurpose	chapter6		FALSE	FALSE	FALSE			
6	I woke up early to make breakfast.	朝ごはんを作るために早起きしたよ。	5. to(副詞的用法1)	ToPurpose	chapter6	朝ごはんを作るために早起きしたよ。
(6/16 追記）音声が「woke up」ではなく「wake up」になっている。	TRUE	FALSE	FALSE			
7	I started running to stay healthy.	健康的でいるためにランニングを始めたんだ。	5. to(副詞的用法1)	ToPurpose	chapter6		FALSE	FALSE	FALSE			
8	I started cooking to save money.	節約をするために料理を始めたよ。	5. to(副詞的用法1)	ToPurpose	chapter6		FALSE	FALSE	FALSE			
1	I'm happy to see you again.	また会えて嬉しいよ。	6. to(副詞的用法2)	ToEmotion	chapter6		FALSE	FALSE	FALSE			
2	I'm happy to work with you.	あなたと働けて幸せです！	6. to(副詞的用法2)	ToEmotion	chapter6		FALSE	FALSE	FALSE			
3	I'm excited to go on a trip next week.	来週旅行に行くのが楽しみ！	6. to(副詞的用法2)	ToEmotion	chapter6		FALSE	FALSE	FALSE			
4	I'm excited to go to his live concert.	彼のライブに行けるのが楽しみ！	6. to(副詞的用法2)	ToEmotion	chapter6		FALSE	FALSE	FALSE			
5	I'm glad to hear that.	それを聞けて嬉しいよ。	6. to(副詞的用法2)	ToEmotion	chapter6		FALSE	FALSE	FALSE			
6	I'm glad to help you.	手伝えて嬉しいよ。	6. to(副詞的用法2)	ToEmotion	chapter6		FALSE	FALSE	FALSE			
7	I'm ready to leave.	出かける準備ができてるよ。	6. to(副詞的用法2)	ToEmotion	chapter6		FALSE	FALSE	FALSE			
8	I'm surprised to hear that.	それを聞いてびっくりしてるよ。	6. to(副詞的用法2)	ToEmotion	chapter6	それを聞いてびっくりしてるよ。	TRUE	FALSE	FALSE			
1	I need something to drink.	何か飲み物が欲しいな。	7. 形容詞的用法	ToAdjective	chapter6		FALSE	FALSE	FALSE			
2	I want something to eat for lunch.	お昼に食べるものが欲しい。	7. 形容詞的用法	ToAdjective	chapter6		FALSE	FALSE	FALSE			
3	I'm looking for a place to relax.	くつろげる場所を探してるんだ。	7. 形容詞的用法	ToAdjective	chapter6		FALSE	FALSE	FALSE			
4	I found a good cafe to work at.	仕事するのにちょうどいいカフェを見つけたよ。	7. 形容詞的用法	ToAdjective	chapter6		FALSE	FALSE	FALSE			
5	I have a lot of things to do today.	今日はやることがたくさんあるんだ。	7. 形容詞的用法	ToAdjective	chapter6		FALSE	FALSE	FALSE			
6	Do you have anything to write with?	何か書くもの持ってる？	7. 形容詞的用法	ToAdjective	chapter6		FALSE	FALSE	FALSE			
7	There is no place to park the car.	車を停める場所がない。	7. 形容詞的用法	ToAdjective	chapter6		FALSE	FALSE	FALSE			
8	I don't have time to cook today.	今日は料理する時間がないんだ。	7. 形容詞的用法	ToAdjective	chapter6		FALSE	FALSE	FALSE			
1	Cooking dinner every day is hard.	毎日夜ご飯を作るのは大変だよ。	8. ing	ing	chapter6		FALSE	FALSE	FALSE			
2	Cleaning the house takes a lot of time.	家を掃除するのは時間がかかる。	8. ing	ing	chapter6		FALSE	FALSE	FALSE			
3	Taking care of kids is so hard.	子どもの世話をするのはすごく大変だよ。	8. ing	ing	chapter6		FALSE	FALSE	FALSE			
4	Waking up early is difficult for me.	早起きするのは難しい。	8. ing	ing	chapter6		FALSE	FALSE	FALSE			
5	Talking to my friends is fun.	友達と話すのは楽しい。	8. ing	ing	chapter6		FALSE	FALSE	FALSE			
6	Going for a walk is refreshing.	散歩に行くのって気持ちいい。	8. ing	ing	chapter6		FALSE	FALSE	FALSE			
7	Saving money is important.	お金を貯めるのって大事。	8. ing	ing	chapter6		FALSE	FALSE	FALSE			
8	Studying English every day is harder than I thought.	毎日英語を勉強するのって思ってたよりも難しい。	8. ing	ing	chapter6		FALSE	FALSE	FALSE			
1	It's time to make dinner.	そろそろ夜ご飯を作る時間だ。	9. time to	timeto	chapter6		FALSE	FALSE	FALSE			
2	It's time to pick up the kids.	子どもを迎えに行く時間だね。	9. time to	timeto	chapter6		FALSE	FALSE	FALSE			
3	It's time to go to bed.	もう寝る時間だよ。	9. time to	timeto	chapter6		FALSE	FALSE	FALSE			
4	I need some time to relax.	ちょっとリラックスする時間が欲しいな。	9. time to	timeto	chapter6		FALSE	FALSE	FALSE			
5	I need some time to think about it.	それについてちょっと考える時間が欲しい。	9. time to	timeto	chapter6		FALSE	FALSE	FALSE			
6	This is my first time trying this dish.	この料理を食べるのは初めてだよ。	9. time to	timeto	chapter6		FALSE	FALSE	FALSE			
7	This is my first time watching this movie.	この映画を見るのは初めてだよ。	9. time to	timeto	chapter6		FALSE	FALSE	FALSE			
8	It was my first time visiting Kyoto.	京都を訪れるのは初めてだった。	9. time to	timeto	chapter6		FALSE	FALSE	FALSE			
1	I cleaned the kitchen and did the laundry.	キッチンを掃除して、洗濯もしたよ。	1. And	and	chapter7		FALSE	FALSE	FALSE			
2	I went to the store and got some milk.	お店に行って、牛乳買ってきたよ。	1. And	and	chapter7		FALSE	FALSE	FALSE			
3	I took a shower and went to bed.	シャワー浴びて、寝たよ。	1. And	and	chapter7		FALSE	FALSE	FALSE			
4	I folded the clothes and put them away.	服を畳んで、しまったよ。	1. And	and	chapter7		FALSE	FALSE	FALSE			
5	I called my mom and talked for an hour.	お母さんに電話して、1時間くらい話したよ。	1. And	and	chapter7		FALSE	FALSE	FALSE			
6	I cut some fruit and made a salad.	フルーツを切って、サラダ作ったよ。	1. And	and	chapter7		FALSE	FALSE	FALSE			
7	I opened the window and let fresh air in.	窓を開けて、新鮮な空気を入れたよ。	1. And	and	chapter7		FALSE	FALSE	FALSE			
8	I wrote a letter and sent it to my friend.	手紙を書いて、友達に送ったよ。	1. And	and	chapter7		FALSE	FALSE	FALSE			
1	I cleaned the house, but it's still messy.	家を掃除したけど、まだ散らかってる。	2. But	but	chapter7		FALSE	FALSE	FALSE			
2	I want to take a nap, but I'm too busy.	昼寝したいけど、忙しすぎる。	2. But	but	chapter7		FALSE	FALSE	FALSE			
3	I tried to call you, but you didn't answer.	電話したけど、出なかったね。	2. But	but	chapter7		FALSE	FALSE	FALSE			
4	I bought this dress, but it's too big.	このワンピース買ったけど、大きすぎたよ。	2. But	but	chapter7		FALSE	FALSE	FALSE			
5	I want to watch TV, but the remote is missing.	テレビ見たいけど、リモコンがない。	2. But	but	chapter7		FALSE	FALSE	FALSE			
6	I was going to make coffee, but we ran out.	コーヒー入れようと思ったけど、切らしてた。	2. But	but	chapter7		FALSE	FALSE	FALSE			
7	I want to go out, but it's raining.	出かけたいけど、雨降ってるんだよね。	2. But	but	chapter7		FALSE	FALSE	FALSE			
8	I bought eggs, but I forgot to buy the milk.	卵は買ったけど、牛乳を買い忘れた。	2. But	but	chapter7		FALSE	FALSE	FALSE			
1	Drink your coffee now, or it'll get cold.	今コーヒー飲んで、じゃないと冷めちゃうよ。	3. Or	or	chapter7		FALSE	FALSE	FALSE			
2	Take an umbrella, or you'll get wet.	傘持っていって、じゃないと濡れるよ。	3. Or	or	chapter7		FALSE	FALSE	FALSE			
3	Wake up now, or you'll miss the bus.	今起きて、じゃないとバスに乗り遅れるよ。	3. Or	or	chapter7		FALSE	FALSE	FALSE			
4	Charge your phone, or the phone will die soon.	携帯充電して、じゃないとすぐスマホのバッテリー切れるよ。	3. Or	or	chapter7		FALSE	FALSE	FALSE			
5	Be quiet, or the baby will wake up.	静かにして、じゃないと赤ちゃん起きちゃうよ。	3. Or	or	chapter7		FALSE	FALSE	FALSE			
6	Finish your homework, or no TV.	宿題終わらせて、そうしないとテレビなしね。	3. Or	or	chapter7		FALSE	FALSE	FALSE			
7	Close the window, or bugs will come in.	窓閉めて、そうしないと虫入ってくるよ。	3. Or	or	chapter7		FALSE	FALSE	FALSE			
8	Hurry up, or we’ll be late!	急いで、じゃないと遅れるよ！	3. Or	or	chapter7		FALSE	FALSE	FALSE			
1	I was tired, so I went to bed early.	疲れてたから、早めに寝たよ。	4. So	so	chapter7		FALSE	FALSE	FALSE			
2	I had a headache, so I didn't go to work yesterday.	頭痛があったから、昨日は仕事には行かなかったよ。	4. So	so	chapter7		FALSE	FALSE	FALSE			
3	I forgot my wallet, so I couldn't buy anything.	財布を忘れたから、何も買えなかったよ。	4. So	so	chapter7		FALSE	FALSE	FALSE			
4	I forgot to set the alarm, so I overslept.	目覚ましかけ忘れたから、寝坊しちゃった。	4. So	so	chapter7		FALSE	FALSE	FALSE			
5	I had no time, so I bought dinner.	時間がなかったから、夜ご飯を買ったよ。	4. So	so	chapter7		FALSE	FALSE	FALSE			
6	It's raining, so I'll stay home today.	雨だから今日は家にいるね。	4. So	so	chapter7		FALSE	FALSE	FALSE			
7	I'm free, so I can help you.	暇だから、あなたのこと手伝えるよ。	4. So	so	chapter7		FALSE	FALSE	FALSE			
8	It's late, so let's go to bed.	遅いから寝ようか。	4. So	so	chapter7		FALSE	FALSE	FALSE			
1	I'll go shopping after I finish cleaning.	掃除が終わったら買い物に行くね。	5. After	after	chapter7		FALSE	FALSE	FALSE			
2	I'll take a bath after dinner.	夕飯の後にお風呂入るね。	5. After	after	chapter7		FALSE	FALSE	FALSE			
3	Let's talk after you come back home.	帰ってきたら話そうよ。	5. After	after	chapter7		FALSE	FALSE	FALSE			
4	I'll relax after my daughter sleeps.	娘が寝たらゆっくりするね。	5. After	after	chapter7		FALSE	FALSE	FALSE			
5	I'll text you after I arrive.	着いたらメールするね。	5. After	after	chapter7		FALSE	FALSE	FALSE			
6	Let's eat dessert after we clean up.	片付け終わったらデザート食べよう。	5. After	after	chapter7		FALSE	FALSE	FALSE			
7	I always study English after everyone sleeps.	みんな寝た後にいつも英語を勉強するよ。	5. After	after	chapter7		FALSE	FALSE	FALSE			
8	You can play games after you finish homework.	宿題が終わったあとゲームしてもいいよ。	5. After	after	chapter7		FALSE	FALSE	FALSE			
1	I eat snacks before watching TV.	テレビ見る前におやつ食べるよ。	6. Before	before	chapter7		FALSE	FALSE	FALSE			
2	I stretch before exercise.	運動の前にストレッチするよ。	6. Before	before	chapter7		FALSE	FALSE	FALSE			
3	I water plants before going out.	出かける前に植物に水をあげるよ。	6. Before	before	chapter7		FALSE	FALSE	FALSE			
4	I wash my face before breakfast.	朝ごはんの前に顔を洗うよ。	6. Before	before	chapter7		FALSE	FALSE	FALSE			
5	I tidy up the living room before guests come.	お客さんが来る前にリビングを片付けるよ。	6. Before	before	chapter7		FALSE	FALSE	FALSE			
6	I prepare dinner before kids return home.	子どもが帰る前に夕飯の準備をするよ。	6. Before	before	chapter7		FALSE	FALSE	FALSE			
7	I turn off the lights before bed.	寝る前に電気を消すよ。	6. Before	before	chapter7		FALSE	FALSE	FALSE			
8	I check the fridge before shopping.	買い物の前に冷蔵庫をチェックするよ。	6. Before	before	chapter7		FALSE	FALSE	FALSE			
1	I didn't go to work yesterday because I had a cold.	風邪ひいちゃったから、昨日は仕事を休んだよ。	7. Because	because	chapter7		FALSE	FALSE	FALSE			
2	I bought a new pan because the old one broke.	古いのが壊れたから新しいフライパン買ったよ。	7. Because	because	chapter7		FALSE	FALSE	FALSE			
3	I went to bed early because I have to get up at 5 tomorrow.	明日5時起きだから早く寝たよ。	7. Because	because	chapter7		FALSE	FALSE	FALSE			
4	I took a taxi because I was running late.	遅れそうだったからタクシー使ったよ。	7. Because	because	chapter7		FALSE	FALSE	FALSE			
5	I cried because the movie was so touching.	映画がすごく感動的だったから泣いちゃったよ。	7. Because	because	chapter7		FALSE	FALSE	FALSE			
6	I didn't answer your call because I was driving.	運転中だったから電話出なかったよ。	7. Because	because	chapter7		FALSE	FALSE	FALSE			
7	I got angry because he lied to me.	彼が嘘ついたから怒ったんだよね。	7. Because	because	chapter7		FALSE	FALSE	FALSE			
8	I didn't buy the dress because it was expensive.	高かったからそのワンピース買わなかったよ。	7. Because	because	chapter7		FALSE	FALSE	FALSE			
1	I get sleepy when I read a book.	本を読むと眠くなるよ。	8. When	when	chapter7		FALSE	FALSE	FALSE			
2	When I wake up, I always check my phone.	起きたら、いつも携帯チェックするんだ。	8. When	when	chapter7	起きたら、いつも携帯チェックするんだ。	TRUE	FALSE	TRUE			
3	Let's go for a drink when we finish work.	仕事が終わったら飲みに行こうよ。	8. When	when	chapter7		FALSE	FALSE	FALSE			
4	Text me when you have time.	暇なとき、メッセージ送って。	8. When	when	chapter7		FALSE	FALSE	FALSE			
5	Call me when you get home.	家に着いたら電話ちょうだい。	8. When	when	chapter7		FALSE	FALSE	FALSE			
6	When I'm busy, I skip breakfast.	忙しいときは朝ごはんは食べないよ。	8. When	when	chapter7		FALSE	FALSE	FALSE			
7	When it's rainy, I'm always at home.	雨の時は、いつも家にいるよ。	8. When	when	chapter7		FALSE	FALSE	FALSE			
8	When I'm in a rush, I often forget my phone.	急いでいる時は、よくスマホを忘れちゃうんだよね。	8. When	when	chapter7		FALSE	FALSE	FALSE			
1	I fell asleep while watching the movie.	その映画見ながら寝落ちしちゃった。	9. While	while	chapter7		FALSE	FALSE	FALSE			
2	I fell asleep while studying English.	英語を勉強しながら寝落ちしちゃった。	9. While	while	chapter7		FALSE	FALSE	FALSE			
3	I spilled coffee while driving today.	今日運転中に、コーヒーこぼしちゃった。	9. While	while	chapter7		FALSE	FALSE	FALSE			
4	I had an accident while cycling today.	今日自転車に乗りながら、事故っちゃった。	9. While	while	chapter7		FALSE	FALSE	FALSE			
5	I love reading books while listening to music.	音楽を聴きながら、本を読むのが好きなんだ。	9. While	while	chapter7		FALSE	FALSE	FALSE			
6	I study English while listening to classical music.	クラシック音楽を聴きながら英語を勉強してるんだ。	9. While	while	chapter7		FALSE	FALSE	FALSE			
7	I heard a sound while taking a shower.	シャワーを浴びてる途中に何か音が聞こえた。	9. While	while	chapter7	シャワーを浴びてる途中に何か音が聞こえた。	TRUE	FALSE	TRUE			
8	My husband came back home while I was taking a shower.	シャワー中に旦那が帰ってきたんだ。	9. While	while	chapter7	シャワー中に旦那が帰ってきたんだ。	TRUE	FALSE	TRUE			
1	I'll buy it if it's on sale.	セールだったら買うよ。	10. If	if	chapter7		FALSE	FALSE	FALSE			
2	I'll call you if I'm late.	遅れそうだったら電話するよ。	10. If	if	chapter7		FALSE	FALSE	FALSE			
3	I'll go out if it stops raining.	雨がやんだら出かけるよ。	10. If	if	chapter7		FALSE	FALSE	FALSE			
4	I'll cook dinner if you're tired.	疲れてたら晩ごはん作るよ。	10. If	if	chapter7		FALSE	FALSE	FALSE			
5	I'll wake you up if you oversleep.	寝坊してたら、起こしてあげるよ。	10. If	if	chapter7		FALSE	FALSE	FALSE			
6	Call me if you need anything.	何か必要だったら電話してね。	10. If	if	chapter7		FALSE	FALSE	FALSE			
7	Tell me if you're hungry.	お腹すいたら言ってね。	10. If	if	chapter7		FALSE	FALSE	FALSE			
8	If you have time, let's catch up.	時間あったら会おうよ。	10. If	if	chapter7		FALSE	FALSE	FALSE			
1	Even if it's raining, I go shopping.	雨が降ってても、買い物には行くよ。	11. Even if	evenif	chapter7		FALSE	FALSE	FALSE			
2	Even if I'm busy, I'll check my messages.	忙しくてもメッセージは確認するよ。	11. Even if	evenif	chapter7	音声：Even if I'm busy, I'll check my messages.
が正解ですので、
文　：Even if I'm busy, I'll check your message. →復習表の修正もお願いします！	FALSE	FALSE	FALSE			
3	I wake up early even if it's Sunday.	日曜でも早起きするよ。	11. Even if	evenif	chapter7		FALSE	FALSE	FALSE			
4	Even if I'm full, I eat dessert.	お腹いっぱいでもデザートは食べちゃうよ。	11. Even if	evenif	chapter7		FALSE	FALSE	FALSE			
5	Even if it's cold, I drink iced coffee.	寒くてもアイスコーヒー飲むよ。	11. Even if	evenif	chapter7		FALSE	FALSE	FALSE			
6	Even if I'm tired, I end up checking Instagram.	疲れててもついインスタ見ちゃうんだよね。	11. Even if	evenif	chapter7		FALSE	FALSE	FALSE			
7	Even if I'm busy, I'll come.	忙しくても行くよ。	11. Even if	evenif	chapter7	忙しくても行くよ。	TRUE	FALSE	TRUE			
8	Even if I fail, I'll try again.	失敗しても、もう一回挑戦するよ。	11. Even if	evenif	chapter7		FALSE	FALSE	FALSE			
1	I ate cake even though I'm on a diet.	ダイエット中なのにケーキ食べちゃった。	12. Even though	eventhough	chapter7		FALSE	FALSE	FALSE			
2	I drank coffee even though it's late.	遅いのにコーヒー飲んじゃったよ。	12. Even though	eventhough	chapter7		FALSE	FALSE	FALSE			
3	I bought another bag even though I have many.	たくさん持ってるのにまたバッグ買っちゃった。	12. Even though	eventhough	chapter7		FALSE	FALSE	FALSE			
4	I took a nap even though I'm busy.	忙しいのに昼寝しちゃったよ。	12. Even though	eventhough	chapter7		FALSE	FALSE	FALSE			
5	I ate snacks even though it’s almost dinner time.	もうすぐ夜ご飯なのにお菓子食べちゃった。	12. Even though	eventhough	chapter7	I ate snacks even though it’s almost dinner time.	TRUE	TRUE	TRUE			
6	I ordered pizza even though we had leftovers.	残り物あるのにピザ頼んじゃったんだ。	12. Even though	eventhough	chapter7		FALSE	FALSE	FALSE			
7	I ate ramen even though it's midnight.	夜中なのにラーメン食べちゃった。	12. Even though	eventhough	chapter7		FALSE	FALSE	FALSE			
8	I had wine even though it's a weekday.	平日なのにワイン飲んじゃった。	12. Even though	eventhough	chapter7		FALSE	FALSE	FALSE			
1	Once I finish work, I'll call you.	仕事が終わったら電話するね。	13. Once	once	chapter7		FALSE	FALSE	FALSE			
2	Once you try it, you'll love it.	一回やってみたら、きっと気に入るよ。	13. Once	once	chapter7		FALSE	FALSE	FALSE			
3	Once the movie starts, you can't talk.	映画が始まったら、話せないよ。	13. Once	once	chapter7		FALSE	FALSE	FALSE			
4	Once I eat chips, I can't stop.	ポテチ食べたら止まらないよ。	13. Once	once	chapter7		FALSE	FALSE	FALSE			
5	Once I open Instagram, time flies.	インスタ開いたら時間あっという間だよ。	13. Once	once	chapter7		FALSE	FALSE	FALSE			
6	Once I open YouTube, I keep watching.	YouTube開いたらずっと見ちゃうよ。	13. Once	once	chapter7		FALSE	FALSE	FALSE			
7	Once I start shopping, I buy too much.	買い物始めると買いすぎちゃうよ。	13. Once	once	chapter7	買い物始めると買いすぎちゃうよ。	TRUE	FALSE	TRUE			
8	Once I start organizing, I can't stop.	片付け始めると止まらなくなるんだよね。	13. Once	once	chapter7		FALSE	FALSE	FALSE			
1	I baked cookies since I had free time.	せっかく時間あったからクッキー焼いたよ。	14. Since	since	chapter7		FALSE	FALSE	FALSE			
2	I went shopping since the weather was nice.	せっかく天気いいから買い物に行ったよ。	14. Since	since	chapter7		FALSE	FALSE	FALSE			
3	Since it's your birthday, let's do something special!	せっかく君の誕生日だから、何か特別なことしようよ！	14. Since	since	chapter7		FALSE	FALSE	FALSE			
4	Since we have some free time, let's watch a movie.	せっかく時間があるし、映画でも観ようよ。	14. Since	since	chapter7		FALSE	FALSE	FALSE			
5	I've been working from home since last year.	去年からずっと在宅勤務してるよ。	14. Since	since	chapter7		FALSE	FALSE	FALSE			
6	I haven't driven a car since last year.	去年からずっと、車を運転してないんだよね。	14. Since	since	chapter7		FALSE	FALSE	FALSE			
7	I've been studying English since I was a high school student.	高校生以来ずっと英語勉強してるよ。	14. Since	since	chapter7		FALSE	FALSE	FALSE			
8	I've been living here since I got married.	結婚してからずっとここに住んでるんだ。	14. Since	since	chapter7		FALSE	FALSE	FALSE			
1	I won't go out unless it's sunny.	晴れてないと出かけないよ。	15. Unless/Until	unlessuntil	chapter7		FALSE	FALSE	FALSE			
2	I won't buy it unless it's on sale.	セールじゃなきゃ買わないよ。	15. Unless/Until	unlessuntil	chapter7		FALSE	FALSE	FALSE			
3	You can't eat this unless you heat it.	温めないと食べられないよ。	15. Unless/Until	unlessuntil	chapter7		FALSE	FALSE	FALSE			
4	I won't sleep unless the lights are off.	電気を消さないと眠れないよ。	15. Unless/Until	unlessuntil	chapter7		FALSE	FALSE	FALSE			
5	I won't join unless she comes too.	彼女も来ないと参加しないかな	15. Unless/Until	unlessuntil	chapter7	彼女も来ないと参加しないかな	TRUE	FALSE	TRUE			
6	I won't watch it unless it's funny.	面白くないと観ないよ。	15. Unless/Until	unlessuntil	chapter7		FALSE	FALSE	FALSE			
7	He doesn’t eat veggies unless they’re fried.	揚げてないと彼は野菜食べないよ。	15. Unless/Until	unlessuntil	chapter7	He doesn’t eat veggies unless they’re fried.	TRUE	TRUE	TRUE			
8	I won't go unless someone comes with me.	誰か一緒じゃないと行かないよ。	15. Unless/Until	unlessuntil	chapter7		FALSE	FALSE	FALSE			
1	I'll buy it regardless of the price.	値段に関係なく買うよ。	16. Regardless of	regardlessof	chapter7		FALSE	FALSE	FALSE			
2	I'll go for a walk regardless of the time.	時間に関係なく散歩に行くよ。	16. Regardless of	regardlessof	chapter7		FALSE	FALSE	FALSE			
3	I'll clean the house regardless of the mess.	散らかり具合に関係なく家を掃除するよ。	16. Regardless of	regardlessof	chapter7		FALSE	FALSE	FALSE			
4	I'll eat dinner regardless of the menu.	メニューに関係なく晩ごはんを食べるよ。	16. Regardless of	regardlessof	chapter7		FALSE	FALSE	FALSE			
5	I'll take a break regardless of my schedule.	予定に関係なく休憩するよ。	16. Regardless of	regardlessof	chapter7		FALSE	FALSE	FALSE			
6	I'll wake up early regardless of the day.	曜日に関係なく早起きするよ。	16. Regardless of	regardlessof	chapter7		FALSE	FALSE	FALSE			
7	I'll visit my parents regardless of the distance.	距離に関係なく両親に会いに行くよ。	16. Regardless of	regardlessof	chapter7		FALSE	FALSE	FALSE			
8	I'll study English regardless of my age.	年齢に関係なく英語を勉強するよ。	16. Regardless of	regardlessof	chapter7		FALSE	FALSE	FALSE			
1	I'll walk instead of taking the bus.	バスに乗る代わりに歩くよ。	17. Instead of	insteadof	chapter7		FALSE	FALSE	FALSE			
2	I'll cook at home instead of eating out.	外食する代わりに家で料理するよ。	17. Instead of	insteadof	chapter7		FALSE	FALSE	FALSE			
3	I'll drink water instead of soda.	炭酸飲料の代わりに水を飲むよ。	17. Instead of	insteadof	chapter7		FALSE	FALSE	FALSE			
4	I'll use my bag instead of a plastic one.	ビニール袋の代わりに自分のバッグを使うよ。	17. Instead of	insteadof	chapter7		FALSE	FALSE	FALSE			
5	I'll clean the kitchen instead of watching TV.	テレビを見る代わりにキッチンを掃除するよ。	17. Instead of	insteadof	chapter7		FALSE	FALSE	FALSE			
6	I'll read a book instead of checking my phone.	スマホを見る代わりに本を読むよ。	17. Instead of	insteadof	chapter7		FALSE	FALSE	FALSE			
7	I'll take a bath instead of a shower.	シャワーの代わりにお風呂に入るよ。	17. Instead of	insteadof	chapter7		FALSE	FALSE	FALSE			
8	I'll call instead of texting.	メッセージを送る代わりに電話するよ。	17. Instead of	insteadof	chapter7		FALSE	FALSE	FALSE			
1	I fell asleep during the movie.	映画の間に寝ちゃったよ。	18. During	during	chapter7		FALSE	FALSE	FALSE			
2	I had a snack during the break.	休憩中におやつ食べたよ。	18. During	during	chapter7		FALSE	FALSE	FALSE			
3	I talked to my friend during lunch.	ランチの間に友達と話してたよ。	18. During	during	chapter7		FALSE	FALSE	FALSE			
4	I took a nap during the afternoon.	午後にちょっと昼寝したよ。	18. During	during	chapter7		FALSE	FALSE	FALSE			
5	I felt sleepy during the lecture.	講義の間に眠くなっちゃった。	18. During	during	chapter7		FALSE	FALSE	FALSE			
6	I went shopping during my free time.	空いた時間に買い物行ってきたよ。	18. During	during	chapter7		FALSE	FALSE	FALSE			
7	I heard a strange noise during the night.	夜中に変な音が聞こえたよ。	18. During	during	chapter7		FALSE	FALSE	FALSE			
8	I got a call from my mom during work.	仕事中にお母さんから電話きたよ。	18. During	during	chapter7		FALSE	FALSE	FALSE			
1	I can't start my day without coffee.	コーヒーなしじゃ一日を始められないよ。	19. Without	without	chapter7		FALSE	FALSE	FALSE			
2	I don't go out without my phone.	スマホなしじゃ外に出られないよ。	19. Without	without	chapter7		FALSE	FALSE	FALSE			
3	I can't cook without a recipe.	レシピなしじゃ料理できないよ。	19. Without	without	chapter7		FALSE	FALSE	FALSE			
4	I can't leave the house without my keys.	鍵なしじゃ家を出られないよ。	19. Without	without	chapter7		FALSE	FALSE	FALSE			
5	I don't feel safe without a mask.	マスクなしじゃ落ち着かないよ。	19. Without	without	chapter7		FALSE	FALSE	FALSE			
6	I can't drive without my glasses.	メガネなしじゃ運転できないよ。	19. Without	without	chapter7		FALSE	FALSE	FALSE			
7	I can't eat curry without rice.	カレーはご飯なしじゃ食べられないよ。	19. Without	without	chapter7		FALSE	FALSE	FALSE			
8	I don't like tea without sugar.	砂糖なしのお茶は好きじゃないよ。	19. Without	without	chapter7		FALSE	FALSE	FALSE			
1	I get nervous every time I have an interview.	面接のたびに緊張するんだ。	20. Every time	everytime	chapter7		FALSE	FALSE	FALSE			
2	I feel happy every time I see my kids smile.	子どもが笑うたびに幸せな気持ちになるよ。	20. Every time	everytime	chapter7		FALSE	FALSE	FALSE			
3	I call my mom every time I go shopping.	買い物に行くたびにお母さんに電話するよ。	20. Every time	everytime	chapter7		FALSE	FALSE	FALSE			
4	I wash my hands every time I come home.	家に帰るたびに手を洗ってるよ。	20. Every time	everytime	chapter7		FALSE	FALSE	FALSE			
5	I cry every time I watch this movie.	この映画を見るたびに泣いちゃうんだよね。	20. Every time	everytime	chapter7		FALSE	FALSE	FALSE			
6	I forget something every time I travel.	旅行のたびに何か忘れ物しちゃうんだ。	20. Every time	everytime	chapter7		FALSE	FALSE	FALSE			
7	I get sleepy every time I read a book.	本を読むたびに眠くなるよ。	20. Every time	everytime	chapter7		FALSE	FALSE	FALSE			
8	I feel tired every time I clean the house.	家を掃除するたびに疲れちゃう。	20. Every time	everytime	chapter7		FALSE	FALSE	FALSE			
1	Could you speak slowly so that I can understand?	理解できるように、ゆっくり話してくれますか?	21. So that	sothat	chapter7		FALSE	FALSE	FALSE			
2	I write things down so that I don't forget.	忘れないようにメモしてるよ。	21. So that	sothat	chapter7		FALSE	FALSE	FALSE			
3	I left early so that I wouldn't miss the train.	電車に乗り遅れないように早めに出たよ。	21. So that	sothat	chapter7		FALSE	FALSE	FALSE			
4	I set an alarm so that I can wake up on time.	時間通りに起きられるようにアラームをセットしたよ。	21. So that	sothat	chapter7	I set an alarm so that I can wake up on time. →復習表の修正もお願いします！	TRUE	TRUE	TRUE			
5	I opened the window so that fresh air could come in.	新鮮な空気が入るように窓を開けたよ。	21. So that	sothat	chapter7	I opened the window so that fresh air could come in.	TRUE	TRUE	TRUE			
6	I exercise every day so that I can stay healthy.	健康を維持できるように毎日運動してるよ。	21. So that	sothat	chapter7	I exercise every day so that I can stay healthy（文章が治ってない6/2）
修正完了 6/8	TRUE	TRUE	TRUE			
7	I saved money so that I could buy a new phone.	新しいスマホを買えるようにお金を貯めたよ。	21. So that	sothat	chapter7		FALSE	FALSE	FALSE			
8	I checked the weather so that I would know what to wear.	何を着るか分かるように天気予報をチェックしたよ。	21. So that	sothat	chapter7	I checked the weather so that I would know what to wear.→復習表の修正もお願いします！	TRUE	TRUE	TRUE			
1	I'm happy as long as my family is healthy.	家族が健康でいるなら、私は幸せだよ。	22. As long as	aslongas	chapter7		FALSE	FALSE	FALSE			
2	You can stay here as long as you want.	好きなだけここにいていいよ。	22. As long as	aslongas	chapter7		FALSE	FALSE	FALSE			
3	As long as it doesn't rain, we can have a picnic.	雨が降らない限り、ピクニックできるよ。	22. As long as	aslongas	chapter7		FALSE	FALSE	FALSE			
4	I'll support you as long as you try your best.	全力で頑張るなら、私は応援するよ。	22. As long as	aslongas	chapter7		FALSE	FALSE	FALSE			
5	As long as I have coffee, I can wake up early.	コーヒーさえあれば、早起きできるよ。	22. As long as	aslongas	chapter7		FALSE	FALSE	FALSE			
6	I don't care about brands as long as the clothes are comfortable.	服が着心地よければ、ブランドにはこだわらないよ。	22. As long as	aslongas	chapter7		FALSE	FALSE	FALSE			
7	I'll go out as long as it's not too cold.	寒すぎない限り、外に出るよ。	22. As long as	aslongas	chapter7		FALSE	FALSE	FALSE			
8	As long as my kids are happy, I'm satisfied.	子どもが幸せなら、それで満足だよ。	22. As long as	aslongas	chapter7		FALSE	FALSE	FALSE			
1	No matter how busy I get, I'll make time for you.	どれだけ忙しくても、君のために時間を作るよ。	23. No matter	nomatter	chapter7		FALSE	FALSE	FALSE			
2	No matter how tired I am, I always read a book before bed.	どれだけ疲れていても、寝る前に本を読むよ。	23. No matter	nomatter	chapter7		FALSE	FALSE	FALSE			
3	No matter how hard it is, I won't give up.	どんなに大変でも、諦めないよ。	23. No matter	nomatter	chapter7		FALSE	FALSE	FALSE			
4	No matter how late it gets, I'll wait for you.	どんなに遅くなっても、待ってるよ。	23. No matter	nomatter	chapter7		FALSE	FALSE	FALSE			
5	No matter what happens, I'll always support you.	何があっても、私はいつでも応援するよ。	23. No matter	nomatter	chapter7		FALSE	FALSE	FALSE			
6	No matter what I cook, my kids always complain.	何を作っても、子どもが文句を言うんだよね。	23. No matter	nomatter	chapter7		FALSE	FALSE	FALSE			
7	No matter what I do, I can't lose weight.	何をしても、痩せないよ。	23. No matter	nomatter	chapter7	何をしても、痩せないよ。	TRUE	FALSE	TRUE			
8	No matter what I say, my husband forgets it.	何を言っても、旦那が忘れちゃうんだよね。	23. No matter	nomatter	chapter7	何を言っても、旦那が忘れちゃうんだよね。	TRUE	FALSE	TRUE			
1	I know that you're busy.	君が忙しいのは知っているよ。	1. 動詞の後のthat	ThatAsConjunction	chapter8		FALSE	FALSE	FALSE			
2	I think that this curry is too spicy.	このカレー辛すぎると思うよ。	1. 動詞の後のthat	ThatAsConjunction	chapter8		FALSE	FALSE	FALSE			
3	I feel that today will be a good day.	今日は良い日になりそうな気がするよ。	1. 動詞の後のthat	ThatAsConjunction	chapter8		FALSE	FALSE	FALSE			
4	I hope that you get better soon.	早く良くなるといいね。	1. 動詞の後のthat	ThatAsConjunction	chapter8		FALSE	FALSE	FALSE			
5	I'm glad that you liked the food.	料理を気に入ってくれて嬉しいよ。	1. 動詞の後のthat	ThatAsConjunction	chapter8		FALSE	FALSE	FALSE			
6	I'm sure that he will come on time.	彼は時間通りに来ると確信してるよ。	1. 動詞の後のthat	ThatAsConjunction	chapter8		FALSE	FALSE	FALSE			
7	He told me that the store is closed today.	彼が今日お店は閉まってるって教えてくれたよ。	1. 動詞の後のthat	ThatAsConjunction	chapter8		FALSE	FALSE	FALSE			
8	They believe that this place is haunted.	ここは幽霊が出るって彼らは信じてるよ。	1. 動詞の後のthat	ThatAsConjunction	chapter8	ここは幽霊が出るって彼らは信じてるよ。	TRUE	FALSE	TRUE			
1	It's surprising that she didn't know about it.	彼女がそれを知らなかったのは驚きだね。	2. 形容詞の後のthat	ThatAsComplement	chapter8		FALSE	FALSE	FALSE			
2	It's nice that we have a holiday tomorrow.	明日休みなのは嬉しいね。	2. 形容詞の後のthat	ThatAsComplement	chapter8		FALSE	FALSE	FALSE			
3	It's sad that he moved to another city.	彼が別の街に引っ越しちゃったのは寂しいね。	2. 形容詞の後のthat	ThatAsComplement	chapter8		FALSE	FALSE	FALSE			
4	It's strange that nobody answered the phone.	誰も電話に出なかったのは変だね。	2. 形容詞の後のthat	ThatAsComplement	chapter8		FALSE	FALSE	FALSE			
5	It's lucky that we found a good babysitter.	いいベビーシッターが見つかって、私たちラッキーだね。	2. 形容詞の後のthat	ThatAsComplement	chapter8	いいベビーシッターが見つかって、私たちラッキーだね。	TRUE	FALSE	TRUE			
6	It's annoying that the internet is so slow today.	今日はネットがすごく遅くてイライラするね。	2. 形容詞の後のthat	ThatAsComplement	chapter8		FALSE	FALSE	FALSE			
7	It's wonderful that you got the job.	仕事が決まったのは素晴らしいね。	2. 形容詞の後のthat	ThatAsComplement	chapter8		FALSE	FALSE	FALSE			
8	It's scary that the lights suddenly went out.	急に電気が消えたのは怖かったね。	2. 形容詞の後のthat	ThatAsComplement	chapter8		FALSE	FALSE	FALSE			
1	There's something that I need to tell you.	君に伝えなきゃならないことがあるんだ。	3. 〜thing that	thingthat	chapter8		FALSE	FALSE	FALSE			
2	I bought something that you might like.	君が気に入りそうなものを買ったよ。	3. 〜thing that	thingthat	chapter8		FALSE	FALSE	FALSE			
3	She found something that made her really happy.	彼女はすごく嬉しくなるものを見つけたよ。	3. 〜thing that	thingthat	chapter8		FALSE	FALSE	FALSE			
4	I lost something that was really important to me.	自分にとってすごく大切なものをなくしちゃったんだ。	3. 〜thing that	thingthat	chapter8	自分にとってすごく大切なものをなくしちゃったんだ。	TRUE	FALSE	TRUE			
5	Is there anything that you don't understand?	何かわからないことある？	3. 〜thing that	thingthat	chapter8		FALSE	FALSE	FALSE			
6	Do you have anything that you want to ask?	聞きたいことは何かある？	3. 〜thing that	thingthat	chapter8		FALSE	FALSE	FALSE			
7	I'll do anything that makes my kids happy.	子どもが喜ぶことなら何でもやるよ。	3. 〜thing that	thingthat	chapter8		FALSE	FALSE	FALSE			
8	Let me know if there's anything that you need.	何か必要なものがあったら教えてね。	3. 〜thing that	thingthat	chapter8		FALSE	FALSE	FALSE			
1	I don't know what he wants.	彼は何が欲しいのか分からない。	1. What + SV	WhatSV	chapter9		FALSE	FALSE	FALSE			
2	Can you tell me what she said?	彼女が何を言ったのか教えてくれる？	1. What + SV	WhatSV	chapter9		FALSE	FALSE	FALSE			
3	I wonder what time the store opens.	お店が何時に開くのか気になるな。	1. What + SV	WhatSV	chapter9		FALSE	FALSE	FALSE			
4	I know what you're trying to say.	君が言おうとしていることはわかるよ。	1. What + SV	WhatSV	chapter9		FALSE	FALSE	FALSE			
5	I forgot what I was looking for.	何を探してたのか忘れちゃった。	1. What + SV	WhatSV	chapter9		FALSE	FALSE	FALSE			
6	Tell me what you want for dinner.	夜ご飯何が食べたいか教えて。	1. What + SV	WhatSV	chapter9		FALSE	FALSE	FALSE			
7	I couldn't catch what you said.	あなたが言ったこと聞き取れなかった。	1. What + SV	WhatSV	chapter9		FALSE	FALSE	FALSE			
8	I can't believe what he said.	彼の言ったことが信じられない。	1. What + SV	WhatSV	chapter9		FALSE	FALSE	FALSE			
1	I wonder if she's ready to go.	彼女が出発する準備できてるかな。	2. If + SV	IfSV	chapter9		FALSE	FALSE	FALSE			
2	I don't know if he will come.	彼が来るか分からないよ。	2. If + SV	IfSV	chapter9		FALSE	FALSE	FALSE			
3	I wonder if it's gonna rain tomorrow.	明日雨降るのかな〜。	2. If + SV	IfSV	chapter9		FALSE	FALSE	FALSE			
4	Tell me if you need anything.	何か必要なら教えてね。	2. If + SV	IfSV	chapter9		FALSE	FALSE	FALSE			
5	Let me know if you are free tomorrow.	明日空いてるか教えてね。	2. If + SV	IfSV	chapter9		FALSE	FALSE	FALSE			
6	I'll ask if they have a table for us.	席があるか聞いてみるよ。	2. If + SV	IfSV	chapter9		FALSE	FALSE	FALSE			
7	I'm not sure if I locked the door.	鍵閉めたっけな。	2. If + SV	IfSV	chapter9		FALSE	FALSE	FALSE			
8	I'll check if there's any Wi-Fi here.	ここにWi-Fiがあるか確認するよ。	2. If + SV	IfSV	chapter9		FALSE	FALSE	FALSE			
1	I'm not sure when she'll finish her work.	彼女がいつ仕事を終えるか分からないな。	3. When + SV	WhenSV	chapter9		FALSE	FALSE	FALSE			
2	I wonder when the train leaves.	いつ電車が出発するんだろう。	3. When + SV	WhenSV	chapter9		FALSE	FALSE	FALSE			
3	Tell me when you are ready.	準備できたら教えてね。	3. When + SV	WhenSV	chapter9		FALSE	FALSE	FALSE			
4	Let me know when you arrive.	着いたら教えてね。	3. When + SV	WhenSV	chapter9		FALSE	FALSE	FALSE			
5	I forgot when his birthday is.	彼の誕生日がいつか忘れちゃった。	3. When + SV	WhenSV	chapter9		FALSE	FALSE	FALSE			
6	Can you check when the movie starts?	映画がいつ始まるか確認してくれる？	3. When + SV	WhenSV	chapter9		FALSE	FALSE	FALSE			
7	Do you know when the next bus arrives?	次のバスがいつ来るかわかる？	3. When + SV	WhenSV	chapter9		FALSE	FALSE	FALSE			
8	I don't know when he's coming back.	彼がいつ戻ってくるかは分からない。	3. When + SV	WhenSV	chapter9		FALSE	FALSE	FALSE			
1	I don't know where he went.	彼がどこに行ったか分からない。	4. Where + SV	WhereSV	chapter9		FALSE	FALSE	FALSE			
2	Can you tell me where she is?	彼女がどこにいるか教えてくれる？	4. Where + SV	WhereSV	chapter9		FALSE	FALSE	FALSE			
3	I wonder where I left my phone.	どこにスマホを置いたっけ？	4. Where + SV	WhereSV	chapter9		FALSE	FALSE	FALSE			
4	Let me know where you want to go.	どこに行きたいか教えてね。	4. Where + SV	WhereSV	chapter9		FALSE	FALSE	FALSE			
5	Do you know where I can buy this?	これをどこで買えるか知ってる？	4. Where + SV	WhereSV	chapter9		FALSE	FALSE	FALSE			
6	I forgot where I parked my car.	車をどこに停めたか忘れちゃった。	4. Where + SV	WhereSV	chapter9		FALSE	FALSE	FALSE			
7	Tell me where you found this.	これをどこで見つけたのか教えて。	4. Where + SV	WhereSV	chapter9		FALSE	FALSE	FALSE			
8	Do you know where the grocery store is?	スーパーがどこにあるか知ってる？	4. Where + SV	WhereSV	chapter9		FALSE	FALSE	FALSE			
1	I can't remember who it was.	それが誰だったのか覚えてない。	5. Who + SV	WhoSV	chapter9		FALSE	FALSE	FALSE			
2	I don't know who he is.	彼が誰なのかしらない。	5. Who + SV	WhoSV	chapter9		FALSE	FALSE	FALSE			
3	Do you know who lives next door?	隣に誰が住んでるか知ってる？	5. Who + SV	WhoSV	chapter9	隣に誰が住んでるか知ってる？	TRUE	FALSE	TRUE			
4	Do you know who brought these snacks?	このお菓子誰が持ってきたか知ってる？	5. Who + SV	WhoSV	chapter9	このお菓子誰が持ってきたか知ってる？	TRUE	FALSE	TRUE			
5	Tell me who told you that.	誰がそれを言ったのか教えて。	5. Who + SV	WhoSV	chapter9		FALSE	FALSE	FALSE			
6	I don't know who will come to the party.	誰がパーティーに来るのか分からないよ。	5. Who + SV	WhoSV	chapter9		FALSE	FALSE	FALSE			
7	Do you know who left this note?	誰がこのメモ残したかわかる？	5. Who + SV	WhoSV	chapter9		FALSE	FALSE	FALSE			
8	I forgot who gave me this book.	この本を誰にもらったのか忘れちゃった。	5. Who + SV	WhoSV	chapter9		FALSE	FALSE	FALSE			
1	Do you know which bus goes to the station?	どのバスが駅に行くか知ってる？	6. Which + SV	WhichSV	chapter9		FALSE	FALSE	FALSE			
2	She asked me which dress looks better.	どのドレスが似合うか彼女に聞かれたよ。	6. Which + SV	WhichSV	chapter9		FALSE	FALSE	FALSE			
3	Tell me which restaurant you prefer.	どのレストランが好みか教えて。	6. Which + SV	WhichSV	chapter9		FALSE	FALSE	FALSE			
4	I wonder which one is cheaper.	どっちの方が安いんだろう。	6. Which + SV	WhichSV	chapter9		FALSE	FALSE	FALSE			
5	Can you check which room is available?	どの部屋が空いてるか確認してくれる？	6. Which + SV	WhichSV	chapter9		FALSE	FALSE	FALSE			
6	Let me know which day is fine for you.	どの日が都合いいか教えてね。	6. Which + SV	WhichSV	chapter9		FALSE	FALSE	FALSE			
7	I don't know which is your brother.	どっちがあなたの兄弟なのかわからない。	6. Which + SV	WhichSV	chapter9		FALSE	FALSE	FALSE			
8	I don't know which phone is better.	どのスマホがいいのか分からないな。	6. Which + SV	WhichSV	chapter9		FALSE	FALSE	FALSE			
1	I don't understand why she's upset.	なぜ彼女が怒っているのか理解できない。	7. Why + SV	WhySV	chapter9		FALSE	FALSE	FALSE			
2	Do you know why he left early?	なぜ彼が早く帰ったのか知ってる？	7. Why + SV	WhySV	chapter9		FALSE	FALSE	FALSE			
3	My son asked me why he has to study.	なぜ勉強しないといけないのか息子が聞いてきたよ。	7. Why + SV	WhySV	chapter9		FALSE	FALSE	FALSE			
4	Tell me why you are so tired.	なぜそんなに疲れてるのか教えてよ。	7. Why + SV	WhySV	chapter9		FALSE	FALSE	FALSE			
5	He didn't say why he was late.	彼はなぜ遅れたのか言わなかったよ。	7. Why + SV	WhySV	chapter9		FALSE	FALSE	FALSE			
6	I forgot why I came to the kitchen.	なんでキッチンに来たのか忘れちゃった。	7. Why + SV	WhySV	chapter9		FALSE	FALSE	FALSE			
7	Let me know why you changed your mind.	なぜ気が変わったのか教えてほしい。	7. Why + SV	WhySV	chapter9		FALSE	FALSE	FALSE			
8	I don't know why my phone isn't working.	なぜスマホが動かないのか分からない。	7. Why + SV	WhySV	chapter9		FALSE	FALSE	FALSE			
1	I'm not sure how I can explain this.	これをどう説明すればいいかわからない。	8. How + SV	HowSV	chapter9		FALSE	FALSE	FALSE			
2	Do you know how this machine works?	この機械がどう動くのか知ってる？	8. How + SV	HowSV	chapter9		FALSE	FALSE	FALSE			
3	She asked me how I made this cake.	どうやってこのケーキを作ったのか彼女に聞かれたよ。	8. How + SV	HowSV	chapter9		FALSE	FALSE	FALSE			
4	Do you know how she lost weight?	彼女どうやって痩せたか知ってる？	8. How + SV	HowSV	chapter9		FALSE	FALSE	FALSE			
5	I wonder how long it will take.	どれくらい時間がかかるのか気になるな。	8. How + SV	HowSV	chapter9		FALSE	FALSE	FALSE			
6	Can you show me how to use this app?	このアプリの使い方を教えてくれる？	8. How + SV	HowSV	chapter9		FALSE	FALSE	FALSE			
7	I forgot how I get to that store.	どうやってそのお店に行くのか忘れちゃった。	8. How + SV	HowSV	chapter9		FALSE	FALSE	FALSE			
8	Teach me how you did it.	どうやってやったのか教えて。	8. How + SV	HowSV	chapter9		FALSE	FALSE	FALSE			
1	He can tell you how to improve your listening skills.	彼はあなたにリスニングの伸ばし方を教えてくれるよ。	9. How to	HowTo	chapter9	He can tell you how to improve your listening skills.　彼はあなたにリスニングの伸ばし方を教えてくれるよ。	TRUE	TRUE	TRUE			
2	Tell me how to make this sauce.	このソースの作り方教えて。	9. How to	HowTo	chapter9		FALSE	FALSE	FALSE			
3	I wonder how to fix this problem.	この問題の解決策が気になるな。	9. How to	HowTo	chapter9		FALSE	FALSE	FALSE			
4	I forgot how to set the timer.	タイマーの設定の仕方忘れちゃった。	9. How to	HowTo	chapter9		FALSE	FALSE	FALSE			
5	We talked about how to save electricity.	どうやって電気を節約するか話してたの。	9. How to	HowTo	chapter9		FALSE	FALSE	FALSE			
6	I forgot how to spell that word.	その単語の綴りを忘れちゃった。	9. How to	HowTo	chapter9		FALSE	FALSE	FALSE			
7	Let me know how to make this sauce.	このソースの作り方を教えて。	9. How to	HowTo	chapter9		FALSE	FALSE	FALSE			
8	I don't know how to explain this to my kids.	子どもにこれをどう説明すればいいか分からないよ。	9. How to	HowTo	chapter9		FALSE	FALSE	FALSE			
1	I really like the book you recommended.	君が勧めてくれた本すごく好き！	1. 関係代名詞that	ThatPronoun	chapter10		FALSE	FALSE	FALSE			
2	This is the cake I baked yesterday.	これは昨日、私が焼いたケーキだよ。	1. 関係代名詞that	ThatPronoun	chapter10		FALSE	FALSE	FALSE			
3	The dress she is wearing is really nice.	彼女が着ているドレス、すごく素敵だね。	1. 関係代名詞that	ThatPronoun	chapter10		FALSE	FALSE	FALSE			
4	The movie we watched last week was interesting.	先週私たちが見た映画、面白かったね。	1. 関係代名詞that	ThatPronoun	chapter10		FALSE	FALSE	FALSE			
5	The bag he gave me is my favorite.	彼がくれたバッグが一番のお気に入りだよ。	1. 関係代名詞that	ThatPronoun	chapter10		FALSE	FALSE	FALSE			
6	I didn't understand the question he asked.	彼がした質問の意味がわからなかった。	1. 関係代名詞that	ThatPronoun	chapter10		FALSE	FALSE	FALSE			
7	She showed me the picture she took in Okinawa.	彼女が沖縄で撮った写真を見せてくれたんだ。	1. 関係代名詞that	ThatPronoun	chapter10		FALSE	FALSE	FALSE			
8	I like the song you’re playing now.	今君が今流している曲好きなんだ。	1. 関係代名詞that	ThatPronoun	chapter10	I like the song you’re playing now. 今君が今流している曲好きなんだ。	TRUE	TRUE	TRUE			
1	Do you remember the day when we first met?	私たちが初めて会った日を覚えてる？	2. 関係副詞When	WhenPronoun	chapter10		FALSE	FALSE	FALSE			
2	I love the season when cherry blossoms bloom.	桜が咲く季節が大好きなんだ。	2. 関係副詞When	WhenPronoun	chapter10		FALSE	FALSE	FALSE			
3	There was a time when I exercised every day.	毎日運動していた時があったよ。	2. 関係副詞When	WhenPronoun	chapter10		FALSE	FALSE	FALSE			
4	Winter is the season when we eat hot pot.	冬は鍋を食べる季節だよね。	2. 関係副詞When	WhenPronoun	chapter10		FALSE	FALSE	FALSE			
5	The day when I arrived in Tokyo was very hot.	私が東京に着いた日はとても暑かった。	2. 関係副詞When	WhenPronoun	chapter10		FALSE	FALSE	FALSE			
6	There was a time when I wanted to be a musician.	ミュージシャンになりたいと思っていた時期がありました。	2. 関係副詞When	WhenPronoun	chapter10		FALSE	FALSE	FALSE			
7	There was a time when I wanted to live abroad.	海外に住みたかった時期もありました。	2. 関係副詞When	WhenPronoun	chapter10	違う音声になっている	FALSE	FALSE	FALSE			
8	I'll never forget the moment when I saw Kimutaku.	キムタクを見たあの瞬間は絶対に忘れません。	2. 関係副詞When	WhenPronoun	chapter10		FALSE	FALSE	FALSE			
1	This is the café where I first met your father.	ここはお父さんと初めて会ったカフェだよ。	3. 関係副詞Where	WherePronoun	chapter10		FALSE	FALSE	FALSE			
2	I know a store where you can buy groceries at low cost.	食料品が安く買えるお店を知ってるよ。	3. 関係副詞Where	WherePronoun	chapter10		FALSE	FALSE	FALSE			
3	I visited the city where my grandparents live.	祖父母が住んでいる街に行ってきたよ。	3. 関係副詞Where	WherePronoun	chapter10		FALSE	FALSE	FALSE			
4	Let's find a place where we can eat lunch!	ランチを食べれる場所を探そう！	3. 関係副詞Where	WherePronoun	chapter10		FALSE	FALSE	FALSE			
5	Do you remember the restaurant where we celebrated your birthday?	私たちがあなたの誕生日を祝ったレストランを覚えてる？	3. 関係副詞Where	WherePronoun	chapter10	私たちがあなたの誕生日を祝ったレストランを覚えてる？	TRUE	FALSE	TRUE			
6	I found a nice hotel where we can stay for the weekend.	私たちが週末に泊まれそうな素敵なホテルを見つけたよ。	3. 関係副詞Where	WherePronoun	chapter10	私たちが週末に泊まれそうな素敵なホテルを見つけたよ。	TRUE	FALSE	TRUE			
7	This is the shop where I bought my favorite jacket.	これは私がお気に入りのジャケットを買ったお店だよ。	3. 関係副詞Where	WherePronoun	chapter10		FALSE	FALSE	FALSE			
8	The beach where we went last summer was beautiful.	私たちが去年の夏に行ったビーチはすごく綺麗だったよ。	3. 関係副詞Where	WherePronoun	chapter10	私たちが去年の夏に行ったビーチはすごく綺麗だったよ。	TRUE	FALSE	TRUE			
1	The woman who lives next door is very kind.	隣に住んでいる女性はとても親切だよ。	4. 関係代名詞who	WhoPronoun	chapter10		FALSE	FALSE	FALSE			
2	I have a friend who speaks three languages.	私には3か国語を話せる友達がいるよ。	4. 関係代名詞who	WhoPronoun	chapter10		FALSE	FALSE	FALSE			
3	I respect people who work hard every day.	私は毎日一生懸命働く人を尊敬してるよ。	4. 関係代名詞who	WhoPronoun	chapter10		FALSE	FALSE	FALSE			
4	She has a friend who lives in Indonesia.	彼女にはインドネシアに住んでいる友達がいるんだ。	4. 関係代名詞who	WhoPronoun	chapter10		FALSE	FALSE	FALSE			
5	The doctor who treated me was very kind.	私を診てくれたお医者さんはとても優しかったよ。	4. 関係代名詞who	WhoPronoun	chapter10		FALSE	FALSE	FALSE			
6	The boy who is sitting over there is my brother.	あそこに座っている男の子が私の弟だよ。	4. 関係代名詞who	WhoPronoun	chapter10	The boy who is sitting over there is my brother.	TRUE	TRUE	TRUE			
7	This is Erika who I often talk about.	この子が私の話によく出てくるエリカだよ。	4. 関係代名詞who	WhoPronoun	chapter10	This is Erika who I often talk about.	TRUE	TRUE	TRUE			
8	The woman who I married was my colleague.	私が結婚した女性は同僚だったんだ。	4. 関係代名詞who	WhoPronoun	chapter10	The woman who I married was my colleague.	TRUE	TRUE	TRUE			
1	I bought a new phone, which is really useful.	新しいスマホを買ったんだけど、すごく使いやすいよ。	5. 関係代名詞 Which(非制限用法)	WhichPronoun	chapter10		FALSE	FALSE	FALSE			
2	She made a cake, which was so delicious.	彼女がケーキを作ったんだけど、とても美味しかったよ。	5. 関係代名詞 Which(非制限用法)	WhichPronoun	chapter10		FALSE	FALSE	FALSE			
3	I had sushi in Ginza today, which was amazing.	今日銀座で寿司食べたんだけど、マジで最高だった。	5. 関係代名詞 Which(非制限用法)	WhichPronoun	chapter10		FALSE	FALSE	FALSE			
4	She quit her job suddenly, which was really surprising for me.	彼女が急に仕事をやめて、それがすごく驚きだったんだよね。	5. 関係代名詞 Which(非制限用法)	WhichPronoun	chapter10		FALSE	FALSE	FALSE			
5	I broke my favorite mug, which made me really sad.	お気に入りのマグカップ割っちゃって、めっちゃ悲しかった。	5. 関係代名詞 Which(非制限用法)	WhichPronoun	chapter10		FALSE	FALSE	FALSE			
6	He forgot our wedding anniversary, which annoyed me a bit.	彼、結婚記念日忘れててさ、ちょっとイラっとした。	5. 関係代名詞 Which(非制限用法)	WhichPronoun	chapter10	He forgot our wedding anniversary, which annoyed me a bit.	TRUE	TRUE	FALSE			
7	I missed the train this morning, which was frustrating.	今朝電車逃しちゃって、超イライラした。	5. 関係代名詞 Which(非制限用法)	WhichPronoun	chapter10		FALSE	FALSE	FALSE			
8	My stupid son came back home at midnight, which was such a relief.	うちのバカ息子は深夜に帰ってきたんだけど、本当に安心したよ。	5. 関係代名詞 Which(非制限用法)	WhichPronoun	chapter10		FALSE	FALSE	FALSE			
1	That's the reason why I don't like her.	それが私が彼女を好きじゃない理由だよ。	6. 関係副詞Why	WhyPronoun	chapter10		FALSE	FALSE	FALSE			
2	This is the reason why I changed my job.	これが私が仕事を変えた理由だよ。	6. 関係副詞Why	WhyPronoun	chapter10		FALSE	FALSE	FALSE			
3	Do you know the reason why he was late?	彼が遅れた理由を知ってる？	6. 関係副詞Why	WhyPronoun	chapter10		FALSE	FALSE	FALSE			
4	I don't understand the reason why they refused.	彼らが断った理由が分からないよ。	6. 関係副詞Why	WhyPronoun	chapter10		FALSE	FALSE	FALSE			
5	He told me the reason why he quit his job.	彼は仕事をやめた理由を教えてくれたよ。	6. 関係副詞Why	WhyPronoun	chapter10		FALSE	FALSE	FALSE			
6	I wonder why she looks so sad.	彼女はなんですごく悲しそうなんだろう。	6. 関係副詞Why	WhyPronoun	chapter10	I wonder why she looks so sad.	TRUE	TRUE	FALSE			
7	Can you tell me the reason why you are upset?	なぜ怒ってるのか理由を教えてくれる？	6. 関係副詞Why	WhyPronoun	chapter10		FALSE	FALSE	FALSE			
8	I haven't asked my boss why he was on leave yesterday.	なぜ上司が昨日休みだったか、まだ聞けてないんだよね。	6. 関係副詞Why	WhyPronoun	chapter10		FALSE	FALSE	FALSE			
1	You can eat whatever you like.	好きなの食べていいよ。	7. 疑問詞ever	ever	chapter10		FALSE	FALSE	FALSE			
2	When you get older, you can do whatever you want.	大人になったらやりたいことなんでもできるよ。	7. 疑問詞ever	ever	chapter10		FALSE	FALSE	FALSE			
3	You can order whatever you want.	好きなものなんでも頼んでいいよ。	7. 疑問詞ever	ever	chapter10		FALSE	FALSE	FALSE			
4	You can sit wherever you like.	好きなところに座っていいよ。	7. 疑問詞ever	ever	chapter10		FALSE	FALSE	FALSE			
5	You can rely on me whenever you need some help.	助けが必要な時は、いつでも頼っていいよ。	7. 疑問詞ever	ever	chapter10		FALSE	FALSE	FALSE			
6	You can drop by whenever you want.	いつでも好きな時に立ち寄っていいよ。	7. 疑問詞ever	ever	chapter10		FALSE	FALSE	FALSE			
7	Call me whenever you're free.	暇な時にいつでも電話してね。	7. 疑問詞ever	ever	chapter10		FALSE	FALSE	FALSE			
8	Let's go wherever you want to eat.	食べたいところにどこでも行こうよ。	7. 疑問詞ever	ever	chapter10		FALSE	FALSE	FALSE			
9	He can tell me how to improve your listening skills.	彼はあなたにリスニングの伸ばし方を教えてくれるよ。	8. How to			He can tell you how to improve your listening skills.	TRUE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			
							FALSE	FALSE	FALSE			

`;
/**
 * TSVファイル（flashcard_data.txt）を解析し、検索用マップに変換する関数
 * @param {string} tsvFilePath - TSVファイルのパス
 * @returns {Object} - { audio_folder_name: title } の形式のマップ
 */
function createTsvMap(tsvFilePath) {
    try {
        // const tsvContent = fs.readFileSync(tsvFilePath, 'utf8');
        const tsvContent = flashcard_data_txt;
        const lines = tsvContent.trim().split('\n');
        const headers = lines.shift().split('\t').map(h => h.trim());
        const audioFolderIndex = headers.indexOf('audio_folder_name');
        // ★★★ 修正点: 'display_title' -> 'title' に変更 ★★★
        // flashcard_data.txtのヘッダー名に合わせます
        const titleIndex = headers.indexOf('title');

        if (audioFolderIndex === -1 || titleIndex === -1) {
            throw new Error(`TSVファイルに 'audio_folder_name' または 'title' のヘッダーが見つかりません。`);
        }

        return lines.reduce((map, line) => {
            const columns = line.split('\t');
            const key = columns[audioFolderIndex];
            const value = columns[titleIndex];
            // 同じaudio_folder_nameが複数あっても、最初に見つかったものを採用する
            if (key && !map[key]) {
                map[key] = value;
            }
            return map;
        }, {});
    } catch (error) {
        console.error(`TSVファイル(${tsvFilePath})の読み込みまたは解析中にエラーが発生しました: ${error.message}`);
        process.exit(1);
    }
}

/**
 * 配列をシャッフルし、指定された数の要素を抽出する関数
 */
function getRandomItems(array, numItems) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, numItems);
}

/**
 * 抽出されたデータを最終的なフォーマットに変換する関数
 */
function formatForSentence(items, tsvMap) {
    // 1. 全体数を取得 (例: 8)
    const totalItems = items.length;

    // 2. mapの第二引数 'index' を利用
    const transformedItems = items.map((item, index) => ({
        japanese: item.japanese_translation,
        english: item.english_sentence,
        number: item.number,
        title: item.title,
        display_title: tsvMap[item.audio_folder_name] || item.title,
        // 3. progressキーを追加
        progress: `${index + 1}/${totalItems}`,
        audio_folder_name: item.audio_folder_name,
        audio_file_name: `audio/${item.chapter}/${item.audio_folder_name}/file0000${index + 1}.mp3`
    }));

    return { sentence: transformedItems };
}

let flashcardDataCache = null;

function getFlashcardData() {
    if (!flashcardDataCache) {
        flashcardDataCache = JSON.parse(flashcard_data_json);
    }
    return flashcardDataCache;
}

function createLessonSentenceJson(audioFolderName) {
    if (!audioFolderName) {
        return {
            japaneseModelContent: {},
            englishModelContent: {},
            audioModelContent: [],
            noteContent: {}
        };
    }

    const lessonItems = getFlashcardData()
        .filter(item => item.audio_folder_name === audioFolderName)
        .sort((a, b) => (parseInt(a.number, 10) || 0) - (parseInt(b.number, 10) || 0));

    const japaneseModelContent = {};
    const englishModelContent = {};
    const audioModelContent = [];

    lessonItems.forEach((item, idx) => {
        const order = `${idx + 1}/${lessonItems.length}`;
        japaneseModelContent[order] = item.japanese_translation || '';
        englishModelContent[order] = item.english_sentence || '';
        audioModelContent.push(`audio/${item.chapter}/${item.audio_folder_name}/file0000${item.number}.mp3`);
    });

    return {
        japaneseModelContent,
        englishModelContent,
        audioModelContent,
        noteContent: {}
    };
}

function parseChapterNumber(chapter) {
    const m = String(chapter || '').match(/^chapter(\d+)$/);
    return m ? parseInt(m[1], 10) : 999;
}

function createAllAudioData() {
    return getFlashcardData().map((item) => ({
        chapter: item.chapter || '',
        chapter_number: parseChapterNumber(item.chapter),
        title: item.title || '',
        japanese: item.japanese_translation || '',
        english: item.english_sentence || '',
        audio_path: `audio/${item.chapter}/${item.audio_folder_name}/file0000${item.number}.mp3`,
        order: parseInt(item.number, 10) || 0,
        audio_folder_name: item.audio_folder_name || ''
    }));
}

function createChapterList() {
    const chapterNums = [...new Set(getFlashcardData()
        .map((item) => parseChapterNumber(item.chapter))
        .filter((num) => Number.isFinite(num) && num < 999))]
        .sort((a, b) => a - b);

    return chapterNums.map((num) => ({
        key: `chapter${num}`,
        display: `Chapter ${num}`,
        number: num
    }));
}

function sortByLeadingNumber(items) {
    return [...items].sort((a, b) => {
        const am = String(a).match(/^(\d+)\./);
        const bm = String(b).match(/^(\d+)\./);
        const an = am ? parseInt(am[1], 10) : 999;
        const bn = bm ? parseInt(bm[1], 10) : 999;
        if (an !== bn) return an - bn;
        return String(a).localeCompare(String(b), 'ja');
    });
}

function createTestDataByChapter(chapterArg, partArg) {
    const chapterKey = chapterArg ? `chapter${chapterArg}` : '';
    const part = String(partArg || '');

    const filtered = chapterKey
        ? getFlashcardData().filter((item) => item.chapter === chapterKey)
        : getFlashcardData();

    const grouped = filtered.reduce((acc, item) => {
        const key = item.title || '';
        if (!acc[key]) acc[key] = [];
        acc[key].push({
            japanese: item.japanese_translation || '',
            english: item.english_sentence || '',
            number: String(item.number || '')
        });
        return acc;
    }, {});

    const sortedTitles = sortByLeadingNumber(Object.keys(grouped));
    if (!part || (part !== 'part1' && part !== 'part2')) {
        return sortedTitles.reduce((acc, title) => {
            acc[title] = grouped[title];
            return acc;
        }, {});
    }

    const splitIndex = Math.ceil(sortedTitles.length / 2);
    const targetTitles = part === 'part1'
        ? sortedTitles.slice(0, splitIndex)
        : sortedTitles.slice(splitIndex);

    return targetTitles.reduce((acc, title) => {
        acc[title] = grouped[title];
        return acc;
    }, {});
}

// --- メインの処理 ---
function createRundomSentenceJson(chapterArg, tsvFileArg) {
    if (!chapterArg || !tsvFileArg) {
        console.log("使い方: node generate_quiz_final.js <チャプター番号> <TSVファイル名>");
        console.log("例: node generate_quiz_final.js 1 flashcard_data.txt");
        process.exit(1);
    }

    // 1. TSVファイルから検索用マップを作成
    const tsvMap = createTsvMap(tsvFileArg);

    // 2. JSONファイルを読み込み
    // const allData = JSON.parse(fs.readFileSync('flashcard_data.json', 'utf8'));
    const allData = JSON.parse(flashcard_data_json);
    const targetChapter = `chapter${chapterArg}`;

    // 3. chapterでデータを絞り込む
    const filteredByChapter = allData.filter(item => item.chapter === targetChapter);
    const japanese = {};
    const english = {};
    const titleToAudio = {};
    const audioModelContents = [];
    if (filteredByChapter.length === 0) {
        console.log(`Chapter ${chapterArg} のデータは見つかりませんでした。`);
    } else {
        // 4. ランダムに8件取得
        const randomItems = getRandomItems(filteredByChapter, 8);
        
        // 5. 最終フォーマットに変換
        const finalResult = formatForSentence(randomItems, tsvMap);
        finalResult.sentence.forEach(item => {
            japanese[item.progress] = item.japanese;
            english[item.progress] = item.english;
            if (!titleToAudio[item.progress]) titleToAudio[item.progress] = {};
            titleToAudio[item.progress][item.display_title] = item.audio_folder_name;
            audioModelContents.push(`audio/chapter${chapterArg}/${item.audio_folder_name}/file0000${item.number}.mp3`);
        });
    }
    console.log(JSON.stringify({japanese, english, titleToAudio, audioModelContents}, null, 2));

    return [japanese, english, titleToAudio, audioModelContents];
}
