const vocabularyData = [
  // Bài 5
  { id: 1, hiragana: "いきます", kanji: "行きます", meaning: "đi" },
  { id: 2, hiragana: "きます", kanji: "来ます", meaning: "đến" },
  { id: 3, hiragana: "かえります", kanji: "帰ります", meaning: "về" },
  { id: 4, hiragana: "がっこう", kanji: "学校", meaning: "trường học" },
  { id: 5, hiragana: "スーパー", kanji: "", meaning: "siêu thị" },
  { id: 6, hiragana: "えき", kanji: "駅", meaning: "ga, nhà ga" },
  { id: 7, hiragana: "ひこうき", kanji: "飛行機", meaning: "máy bay" },
  { id: 8, hiragana: "ふね", kanji: "船", meaning: "thuyền, tàu thủy" },
  { id: 9, hiragana: "でんしゃ", kanji: "電車", meaning: "tàu điện" },
  { id: 10, hiragana: "ちかてつ", kanji: "地下鉄", meaning: "tàu điện ngầm" },
  { id: 11, hiragana: "しんかんせん", kanji: "新幹線", meaning: "tàu Shinkansen (tàu điện siêu tốc của Nhật)" },
  { id: 12, hiragana: "バス", kanji: "", meaning: "xe Buýt" },
  { id: 13, hiragana: "タクシー", kanji: "", meaning: "tắc-xi" },
  { id: 14, hiragana: "じてんしゃ", kanji: "自転車", meaning: "xe đạp" },
  { id: 15, hiragana: "あるいて", kanji: "歩いて", meaning: "đi bộ" },
  { id: 16, hiragana: "ひと", kanji: "人", meaning: "người" },
  { id: 17, hiragana: "ともだち", kanji: "友達", meaning: "bạn, bạn bè" },
  { id: 18, hiragana: "かれ", kanji: "彼", meaning: "anh ấy, bạn trai" },
  { id: 19, hiragana: "かのじょ", kanji: "彼女", meaning: "chị ấy, bạn gái" },
  { id: 20, hiragana: "かぞく", kanji: "家族", meaning: "gia đình" },
  { id: 21, hiragana: "せんしゅう", kanji: "先週", meaning: "tuần trước" },
  { id: 22, hiragana: "こんしゅう", kanji: "今週", meaning: "tuần này" },
  { id: 23, hiragana: "らいしゅう", kanji: "来週", meaning: "tuần sau" },
  { id: 24, hiragana: "せんげつ", kanji: "先月", meaning: "tháng trước" },
  { id: 25, hiragana: "こんげつ", kanji: "今月", meaning: "tháng này" },
  { id: 26, hiragana: "らいげつ", kanji: "来月", meaning: "tháng sau" },
  { id: 27, hiragana: "きょねん", kanji: "去年", meaning: "năm ngoái" },
  { id: 28, hiragana: "ことし", kanji: "", meaning: "năm nay" },
  { id: 29, hiragana: "らいねん", kanji: "来年", meaning: "năm sau" },
  { id: 30, hiragana: "―がつ", kanji: "―月", meaning: "tháng –" },
  { id: 31, hiragana: "なんがつ", kanji: "何月", meaning: "tháng mấy" },
  { id: 32, hiragana: "ついたち", kanji: "１日", meaning: "ngày mồng 1" },
  { id: 33, hiragana: "ふつか", kanji: "２日", meaning: "ngày mồng 2, 2 ngày" },
  { id: 34, hiragana: "みっか", kanji: "３日", meaning: "ngày mồng 3, 3 ngày" },
  { id: 35, hiragana: "よっか", kanji: "４日", meaning: "ngày mồng 4, 4 ngày" },
  { id: 36, hiragana: "いつか", kanji: "５日", meaning: "ngày mồng 5, 5 ngày" },
  { id: 37, hiragana: "むいか", kanji: "６日", meaning: "ngày mồng 6, 6 ngày" },
  { id: 38, hiragana: "なのか", kanji: "７日", meaning: "ngày mồng 7, 7 ngày" },
  { id: 39, hiragana: "ようか", kanji: "８日", meaning: "ngày mồng 8, 8 ngày" },
  { id: 40, hiragana: "ここのか", kanji: "９日", meaning: "ngày mồng 9, 9 ngày" },
  { id: 41, hiragana: "とおか", kanji: "１０日", meaning: "ngày mồng 10, 10 ngày" },
  { id: 42, hiragana: "じゅうよっか", kanji: "１４日", meaning: "ngày 14, 14 ngày" },
  { id: 43, hiragana: "はつか", kanji: "２０日", meaning: "ngày 20, 20 ngày" },
  { id: 44, hiragana: "にじゅうよっか", kanji: "２４日", meaning: "ngày 24, 24 ngày" },
  { id: 45, hiragana: "にち", kanji: "―日", meaning: "ngày -, – ngày" },
  { id: 46, hiragana: "なんにち", kanji: "何日", meaning: "ngày mấy, ngày bao nhiêu, mấy ngày, bao nhiêu ngày" },
  { id: 47, hiragana: "いつ", kanji: "", meaning: "bao giờ, khi nào" },
  { id: 48, hiragana: "たんじょうび", kanji: "誕生日", meaning: "sinh nhật" },
  { id: 49, hiragana: "ふつう", kanji: "普通", meaning: "tàu thường (dừng cả ở các ga lẻ)" },
  { id: 50, hiragana: "きゅうこう", kanji: "急行", meaning: "tàu tốc hành" },
  { id: 51, hiragana: "とっきゅう", kanji: "特急", meaning: "tàu tốc hành đặc biệt" },
  { id: 52, hiragana: "つぎの", kanji: "次の", meaning: "tiếp theo" },
  { id: 53, hiragana: "どういたしまして", kanji: "", meaning: "Không có chi" },

  // Bài 6
  { id: 54, hiragana: "たべます", kanji: "食べます", meaning: "ăn" },
  { id: 55, hiragana: "のみます", kanji: "飲みます", meaning: "uống" },
  { id: 56, hiragana: "すいます", kanji: "吸います", meaning: "hút [thuốc lá]" },
  { id: 57, hiragana: "みます", kanji: "見ます", meaning: "xem, nhìn, trông" },
  { id: 58, hiragana: "ききます", kanji: "聞きます", meaning: "nghe" },
  { id: 59, hiragana: "よみます", kanji: "読みます", meaning: "đọc" },
  { id: 60, hiragana: "かきます", kanji: "書きます", meaning: "viết, vẽ" },
  { id: 61, hiragana: "かいます", kanji: "買います", meaning: "mua" },
  { id: 62, hiragana: "とります", kanji: "撮ります [写真を～]", meaning: "chụp [ảnh]" },
  { id: 63, hiragana: "します", kanji: "", meaning: "làm" },
  { id: 64, hiragana: "あいます", kanji: "会います [友達に～]", meaning: "gặp [bạn]" },
  { id: 65, hiragana: "ごはん", kanji: "", meaning: "cơm, bữa ăn" },
  { id: 66, hiragana: "あさごはん", kanji: "朝ごはん", meaning: "cơm sáng" },
  { id: 67, hiragana: "ひるごはん", kanji: "昼ごはん", meaning: "cơm trưa" },
  { id: 68, hiragana: "ばんごはん", kanji: "晩ごはん", meaning: "cơm tối" },
  { id: 69, hiragana: "パン", kanji: "", meaning: "bánh mì" },
  { id: 70, hiragana: "たまご", kanji: "卵", meaning: "trứng" },
  { id: 71, hiragana: "にく", kanji: "肉", meaning: "thịt" },
  { id: 72, hiragana: "さかな", kanji: "魚", meaning: "cá" },
  { id: 73, hiragana: "やさい", kanji: "野菜", meaning: "rau" },
  { id: 74, hiragana: "くだもの", kanji: "果物", meaning: "hoa quả, trái cây" },
  { id: 75, hiragana: "みず", kanji: "水", meaning: "nước" },
  { id: 76, hiragana: "おちゃ", kanji: "お茶", meaning: "trà (nói chung)" },
  { id: 77, hiragana: "こうちゃ", kanji: "紅茶", meaning: "trà đen" },
  { id: 78, hiragana: "ぎゅうにゅう", kanji: "牛乳", meaning: "sữa bò" },
  { id: 79, hiragana: "ジュース", kanji: "", meaning: "nước hoa quả" },
  { id: 80, hiragana: "ビール", kanji: "", meaning: "bia" },
  { id: 81, hiragana: "さけ", kanji: "[お]酒", meaning: "rượu, rượu sake" },
  { id: 82, hiragana: "ビデオ", kanji: "", meaning: "video, băng video, đầu video" },
  { id: 83, hiragana: "えいが", kanji: "映画", meaning: "phim, điện ảnh" },
  { id: 84, hiragana: "ＣＤ", kanji: "", meaning: "đĩa CD" },
  { id: 85, hiragana: "てがみ", kanji: "手紙", meaning: "thư" },
  { id: 86, hiragana: "レポート", kanji: "", meaning: "báo cáo" },
  { id: 87, hiragana: "しゃしん", kanji: "写真", meaning: "ảnh" },
  { id: 88, hiragana: "みせ", kanji: "店", meaning: "cửa hàng, tiệm" },
  { id: 89, hiragana: "レストラン", kanji: "", meaning: "nhà hàng" },
  { id: 90, hiragana: "にわ", kanji: "庭", meaning: "vườn" },
  { id: 91, hiragana: "しゅくだい", kanji: "宿題", meaning: "bài tập về nhà (～をします: làm bài tập)" },
  { id: 92, hiragana: "テニス", kanji: "", meaning: "quần vợt (～をします: đánh quần vợt)" },
  { id: 93, hiragana: "サッカー", kanji: "", meaning: "bóng đá (～をします: chơi bóng đá)" },
  { id: 94, hiragana: "おはなみ", kanji: "[お]花見", meaning: "việc ngắm hoa anh đào (～をします: ngắm hoa anh đào)" },
  { id: 95, hiragana: "なに", kanji: "何", meaning: "cái gì, gì" },
  { id: 96, hiragana: "いっしょに", kanji: "", meaning: "cùng, cùng nhau" },
  { id: 97, hiragana: "ちょっと", kanji: "", meaning: "một chút" },
  { id: 98, hiragana: "いつも", kanji: "", meaning: "luôn luôn, lúc nào cũng" },
  { id: 99, hiragana: "ときどき", kanji: "時々", meaning: "thỉnh thoảng" },
  { id: 100, hiragana: "それから", kanji: "", meaning: "sau đó, tiếp theo" },
  { id: 101, hiragana: "ええ", kanji: "", meaning: "vâng, được (cách nói thân mật của 「はい」)" },
  { id: 102, hiragana: "いいですね。", kanji: "", meaning: "Được đấy nhỉ./ hay quá." },
  { id: 103, hiragana: "わかりました。", kanji: "", meaning: "Tôi hiểu rồi/ vâng ạ." },
  { id: 104, hiragana: "なんですか", kanji: "何ですか。", meaning: "Có gì đấy ạ?/ cái gì vậy?/ vâng có tôi. (câu trả lời khi ai đó gọi tên mình)" },
  { id: 105, hiragana: "じゃ、また", kanji: "", meaning: "Hẹn gặp lại [ngày mai]." },
  { id: 106, hiragana: "メキシコ", kanji: "", meaning: "Mexico" },

  // Bài 7
  { id: 107, hiragana: "きります", kanji: "切ります", meaning: "cắt" },
  { id: 108, hiragana: "おくります", kanji: "送ります", meaning: "gửi" },
  { id: 109, hiragana: "あげます", kanji: "", meaning: "cho, tặng" },
  { id: 110, hiragana: "もらいます", kanji: "", meaning: "nhận" },
  { id: 111, hiragana: "かします", kanji: "貸します", meaning: "cho mượn, cho vay" },
  { id: 112, hiragana: "かります", kanji: "借ります", meaning: "mượn, vay" },
  { id: 113, hiragana: "おしえます", kanji: "教えます", meaning: "dạy" },
  { id: 114, hiragana: "ならいます", kanji: "習います", meaning: "học, tập" },
  { id: 115, hiragana: "かけます", kanji: "かけます [でんわを～]", meaning: "gọi [điện thoại]" },
  { id: 116, hiragana: "て", kanji: "手", meaning: "tay" },
  { id: 117, hiragana: "はし", kanji: "", meaning: "đôi đũa" },
  { id: 118, hiragana: "スプーン", kanji: "", meaning: "muỗng" },
  { id: 119, hiragana: "ナイフ", kanji: "", meaning: "con dao" },
  { id: 120, hiragana: "フォーク", kanji: "", meaning: "nĩa" },
  { id: 121, hiragana: "はさみ", kanji: "", meaning: "cái kéo" },
  { id: 122, hiragana: "ファクス", kanji: "", meaning: "máy fax" },
  { id: 123, hiragana: "ワープロ", kanji: "", meaning: "máy đánh chữ" },
  { id: 124, hiragana: "パソコン", kanji: "", meaning: "máy tính" },
  { id: 125, hiragana: "パンチ", kanji: "", meaning: "cái đục lỗ" },
  { id: 126, hiragana: "ホッチキス", kanji: "", meaning: "cái dập ghim" },
  { id: 127, hiragana: "セロテープ", kanji: "", meaning: "băng dính" },
  { id: 128, hiragana: "けしゴム", kanji: "", meaning: "cục tẩy" },
  { id: 129, hiragana: "かみ", kanji: "紙", meaning: "giấy" },
  { id: 130, hiragana: "はな", kanji: "花", meaning: "hoa" },
  { id: 131, hiragana: "シャツ", kanji: "", meaning: "áo sơ mi" },
  { id: 132, hiragana: "プレゼント", kanji: "", meaning: "quà tặng" },
  { id: 133, hiragana: "にもつ", kanji: "荷物", meaning: "hàng hóa" },
  { id: 134, hiragana: "おかね", kanji: "お金", meaning: "tiền" },
  { id: 135, hiragana: "きっぷ", kanji: "", meaning: "vé (tàu, xe)" },
  { id: 136, hiragana: "クリスマス", kanji: "", meaning: "Lễ Giáng sinh" },
  { id: 137, hiragana: "ちち", kanji: "父", meaning: "cha mình" },
  { id: 138, hiragana: "はは", kanji: "母", meaning: "mẹ mình" },
  { id: 139, hiragana: "これから", kanji: "", meaning: "từ bây giờ" },
  { id: 140, hiragana: "おとうさん", kanji: "お父さん", meaning: "cha (người khác)" },
  { id: 141, hiragana: "おかあさん", kanji: "お母さん", meaning: "mẹ (người khác)" },
  { id: 142, hiragana: "もう", kanji: "", meaning: "đã rồi" },
  { id: 143, hiragana: "まだ", kanji: "", meaning: "vẫn còn, vẫn chưa" },
  { id: 144, hiragana: "ごめんなさい", kanji: "", meaning: "xin lỗi" },
  { id: 145, hiragana: "いらっしゃい", kanji: "", meaning: "xin mời" },
  { id: 146, hiragana: "いってきます", kanji: "", meaning: "tôi đi đây" },
  { id: 147, hiragana: "しつれいします", kanji: "", meaning: "xin phép vào nhà" },

  // Bài 8
  { id: 148, hiragana: "ハンサム", kanji: "", meaning: "đẹp trai" },
  { id: 149, hiragana: "きれい", kanji: "", meaning: "(cảnh) đẹp, đẹp (gái), sạch" },
  { id: 150, hiragana: "しずか", kanji: "静か(な)", meaning: "yên tĩnh" },
  { id: 151, hiragana: "にぎやか", kanji: "賑やか(な)", meaning: "nhộn nhịp" },
  { id: 152, hiragana: "ゆうめい", kanji: "有名(な)", meaning: "nổi tiếng" },
  { id: 153, hiragana: "しんせつ", kanji: "親切(な)", meaning: "tử tế" },
  { id: 154, hiragana: "げんき", kanji: "元気(な)", meaning: "khỏe" },
  { id: 155, hiragana: "ひま", kanji: "暇(な)", meaning: "rảnh rỗi" },
  { id: 156, hiragana: "いそがしい", kanji: "忙しい", meaning: "bận rộn" },
  { id: 157, hiragana: "べんり", kanji: "便利(な)", meaning: "tiện lợi" },
  { id: 158, hiragana: "すてき", kanji: "", meaning: "tuyệt vời" },
  { id: 159, hiragana: "おおきい", kanji: "大きい", meaning: "to, lớn" },
  { id: 160, hiragana: "ちいさい", kanji: "小さい", meaning: "nhỏ, bé" },
  { id: 161, hiragana: "あたらしい", kanji: "新しい", meaning: "mới" },
  { id: 162, hiragana: "ふるい", kanji: "古い", meaning: "cũ" },
  { id: 163, hiragana: "いい", kanji: "", meaning: "tốt" },
  { id: 164, hiragana: "わるい", kanji: "悪い", meaning: "xấu" },
  { id: 165, hiragana: "あつい", kanji: "熱い", meaning: "nóng" },
  { id: 166, hiragana: "つめたい", kanji: "冷たい", meaning: "lạnh" },
  { id: 167, hiragana: "あつい", kanji: "暑い", meaning: "(trời) nóng (dùng cho thời tiết)" },
  { id: 168, hiragana: "さむい", kanji: "寒い", meaning: "(trời) lạnh (dùng cho thời tiết)" },
  { id: 169, hiragana: "むずかしい", kanji: "難しい", meaning: "khó" },
  { id: 170, hiragana: "やさしい", kanji: "優しい", meaning: "dễ" },
  { id: 171, hiragana: "たかい", kanji: "高い", meaning: "đắt" },
  { id: 172, hiragana: "やすい", kanji: "安い", meaning: "rẻ" },
  { id: 173, hiragana: "ひくい", kanji: "低い", meaning: "thấp" },
  { id: 174, hiragana: "たかい", kanji: "高い", meaning: "cao" },
  { id: 175, hiragana: "おもしろい", kanji: "", meaning: "thú vị" },
  { id: 176, hiragana: "おいしい", kanji: "", meaning: "ngon" },
  { id: 177, hiragana: "たのしい", kanji: "楽しい", meaning: "vui vẻ" },
  { id: 178, hiragana: "しろい", kanji: "白い", meaning: "trắng" },
  { id: 179, hiragana: "くろい", kanji: "黒い", meaning: "đen" },
  { id: 180, hiragana: "あかい", kanji: "赤い", meaning: "đỏ" },
  { id: 181, hiragana: "あおい", kanji: "青い", meaning: "xanh" },
  { id: 182, hiragana: "さくら", kanji: "桜", meaning: "hoa anh đào" },
  { id: 183, hiragana: "やま", kanji: "山", meaning: "núi" },
  { id: 184, hiragana: "まち", kanji: "町", meaning: "thành phố" },
  { id: 185, hiragana: "たべもの", kanji: "食べ物", meaning: "thức ăn" },
  { id: 186, hiragana: "ところ", kanji: "所", meaning: "chỗ" },
  { id: 187, hiragana: "りょう", kanji: "", meaning: "ký túc xá" },
  { id: 188, hiragana: "べんきょう", kanji: "勉強", meaning: "học tập (danh từ)" },
  { id: 189, hiragana: "せいかつ", kanji: "生活", meaning: "cuộc sống" },
  { id: 190, hiragana: "しごと", kanji: "お仕事", meaning: "công việc" },
  { id: 191, hiragana: "どう", kanji: "", meaning: "như thế nào" },
  { id: 192, hiragana: "どんな", kanji: "", meaning: "～nào" },
  { id: 193, hiragana: "どれ", kanji: "", meaning: "cái nào" }
];
// Export if needed
// export default vocabularyData;
// ==================== BỘ DATA KANJI (Bộ 2) ====================
const kanjiData = [
  {
    id: 1,
    kanji: "日",
    meaning: "mặt trời, ngày",
    onyomi: "にち、じつ",
    kunyomi: "ひ、か",
    examples: ["日本 (にほん) - Nhật Bản", "毎日 (まいにち) - mỗi ngày"]
  },
  {
    id: 2,
    kanji: "月",
    meaning: "mặt trăng, tháng",
    onyomi: "げつ、がつ",
    kunyomi: "つき",
    examples: ["月曜日 (げつようび) - thứ hai", "一月 (いちがつ) - tháng một"]
  },
  {
    id: 3,
    kanji: "火",
    meaning: "lửa",
    onyomi: "か",
    kunyomi: "ひ",
    examples: ["火曜日 (かようび) - thứ ba", "火事 (かじ) - hỏa hoạn"]
  },
  {
    id: 4,
    kanji: "水",
    meaning: "nước",
    onyomi: "すい",
    kunyomi: "みず",
    examples: ["水曜日 (すいようび) - thứ tư", "水道 (すいどう) - vòi nước"]
  },
  {
    id: 5,
    kanji: "木",
    meaning: "cây, gỗ",
    onyomi: "もく、ぼく",
    kunyomi: "き",
    examples: ["木曜日 (もくようび) - thứ năm", "木材 (もくざい) - gỗ"]
  },
  {
    id: 6,
    kanji: "金",
    meaning: "vàng, tiền",
    onyomi: "きん、こん",
    kunyomi: "かね",
    examples: ["金曜日 (きんようび) - thứ sáu", "お金 (おかね) - tiền"]
  },
  {
    id: 7,
    kanji: "土",
    meaning: "đất",
    onyomi: "ど、と",
    kunyomi: "つち",
    examples: ["土曜日 (どようび) - thứ bảy", "土地 (とち) - đất đai"]
  },
  {
    id: 8,
    kanji: "人",
    meaning: "người",
    onyomi: "じん、にん",
    kunyomi: "ひと",
    examples: ["日本人 (にほんじん) - người Nhật", "人気 (にんき) - phổ biến"]
  },
  {
    id: 9,
    kanji: "山",
    meaning: "núi",
    onyomi: "さん",
    kunyomi: "やま",
    examples: ["富士山 (ふじさん) - núi Phú Sĩ", "山田 (やまだ) - Yamada"]
  },
  {
    id: 10,
    kanji: "川",
    meaning: "sông",
    onyomi: "せん",
    kunyomi: "かわ",
    examples: ["川口 (かわぐち) - Kawaguchi", "小川 (おがわ) - con suối"]
  },
  {
    id: 11,
    kanji: "一",
    meaning: "một",
    onyomi: "いち、いつ",
    kunyomi: "",
    examples: ["一つ (ひとつ) - một cái", "一月 (いちがつ) - tháng một"]
  },
  {
    id: 12,
    kanji: "二",
    meaning: "hai",
    onyomi: "に",
    kunyomi: "",
    examples: ["二つ (ふたつ) - hai cái", "二月 (にがつ) - tháng hai"]
  },
  {
    id: 13,
    kanji: "三",
    meaning: "ba",
    onyomi: "さん",
    kunyomi: "",
    examples: ["三つ (みっつ) - ba cái", "三月 (さんがつ) - tháng ba"]
  },
  {
    id: 14,
    kanji: "四",
    meaning: "bốn",
    onyomi: "し",
    kunyomi: "",
    examples: ["四つ (よっつ) - bốn cái", "四月 (しがつ) - tháng tư"]
  },
  {
    id: 15,
    kanji: "五",
    meaning: "năm",
    onyomi: "ご",
    kunyomi: "",
    examples: ["五つ (いつつ) - năm cái", "五月 (ごがつ) - tháng năm"]
  },
  {
    id: 16,
    kanji: "六",
    meaning: "sáu",
    onyomi: "ろく",
    kunyomi: "",
    examples: ["六つ (むっつ) - sáu cái", "六月 (ろくがつ) - tháng sáu"]
  },
  {
    id: 17,
    kanji: "七",
    meaning: "bảy",
    onyomi: "しち",
    kunyomi: "",
    examples: ["七つ (ななつ) - bảy cái", "七月 (しちがつ) - tháng bảy"]
  },
  {
    id: 18,
    kanji: "八",
    meaning: "tám",
    onyomi: "はち",
    kunyomi: "",
    examples: ["八つ (やっつ) - tám cái", "八月 (はちがつ) - tháng tám"]
  },
  {
    id: 19,
    kanji: "九",
    meaning: "chín",
    onyomi: "きゅう、く",
    kunyomi: "",
    examples: ["九つ (ここのつ) - chín cái", "九月 (くがつ) - tháng chín"]
  },
  {
    id: 20,
    kanji: "十",
    meaning: "mười",
    onyomi: "じゅう",
    kunyomi: "",
    examples: ["十 (じゅう) - mười", "十月 (じゅうがつ) - tháng mười"]
  },
  {
    id: 21,
    kanji: "百",
    meaning: "trăm",
    onyomi: "ひゃく",
    kunyomi: "",
    examples: ["百円 (ひゃくえん) - 100 yên", "三百 (さんびゃく) - 300"]
  },
  {
    id: 22,
    kanji: "千",
    meaning: "nghìn",
    onyomi: "せん",
    kunyomi: "",
    examples: ["千円 (せんえん) - 1000 yên", "三千 (さんぜん) - 3000"]
  },
  {
    id: 23,
    kanji: "万",
    meaning: "vạn (mười nghìn)",
    onyomi: "まん、ばん",
    kunyomi: "",
    examples: ["一万 (いちまん) - 10000", "万歳 (ばんざい) - banzai"]
  },
  {
    id: 24,
    kanji: "円",
    meaning: "yên (tiền tệ)",
    onyomi: "えん",
    kunyomi: "まる",
    examples: ["百円 (ひゃくえん) - 100 yên", "円安 (えんやす) - yên rẻ"]
  },
  {
    id: 25,
    kanji: "学",
    meaning: "học",
    onyomi: "がく",
    kunyomi: "まな",
    examples: ["学校 (がっこう) - trường học", "大学 (だいがく) - đại học"]
  },
  {
    id: 26,
    kanji: "生",
    meaning: "sinh, sống",
    onyomi: "せい、しょう",
    kunyomi: "い、う、なま",
    examples: ["学生 (がくせい) - học sinh", "先生 (せんせい) - giáo viên"]
  },
  {
    id: 27,
    kanji: "先",
    meaning: "tiên, trước",
    onyomi: "せん",
    kunyomi: "さき",
    examples: ["先生 (せんせい) - giáo viên", "先週 (せんしゅう) - tuần trước"]
  },
  {
    id: 28,
    kanji: "会",
    meaning: "hội, gặp",
    onyomi: "かい、え",
    kunyomi: "あ",
    examples: ["会社 (かいしゃ) - công ty", "会議 (かいぎ) - hội nghị"]
  },
  {
    id: 29,
    kanji: "社",
    meaning: "xã, công ty",
    onyomi: "しゃ",
    kunyomi: "やしろ",
    examples: ["会社 (かいしゃ) - công ty", "社会 (しゃかい) - xã hội"]
  },
  {
    id: 30,
    kanji: "員",
    meaning: "viên, thành viên",
    onyomi: "いん",
    kunyomi: "",
    examples: ["会社員 (かいしゃいん) - nhân viên công ty", "店員 (てんいん) - nhân viên cửa hàng"]
  },
  {
    id: 31,
    kanji: "医",
    meaning: "y, y học",
    onyomi: "い",
    kunyomi: "",
    examples: ["医者 (いしゃ) - bác sĩ", "医学 (いがく) - y học"]
  },
  {
    id: 32,
    kanji: "者",
    meaning: "giả, người",
    onyomi: "しゃ",
    kunyomi: "もの",
    examples: ["医者 (いしゃ) - bác sĩ", "学者 (がくしゃ) - học giả"]
  },
  {
    id: 33,
    kanji: "田",
    meaning: "điền, ruộng",
    onyomi: "でん",
    kunyomi: "た",
    examples: ["田中 (たなか) - Tanaka", "田んぼ (たんぼ) - ruộng lúa"]
  },
  {
    id: 34,
    kanji: "本",
    meaning: "bản, gốc, sách",
    onyomi: "ほん",
    kunyomi: "もと",
    examples: ["日本 (にほん) - Nhật Bản", "本 (ほん) - quyển sách"]
  },
  {
    id: 35,
    kanji: "中",
    meaning: "trung, giữa, trong",
    onyomi: "ちゅう",
    kunyomi: "なか",
    examples: ["中国 (ちゅうごく) - Trung Quốc", "中学校 (ちゅうがっこう) - trường trung học cơ sở"]
  },
  {
    id: 36,
    kanji: "国",
    meaning: "quốc, nước",
    onyomi: "こく",
    kunyomi: "くに",
    examples: ["中国 (ちゅうごく) - Trung Quốc", "外国 (がいこく) - nước ngoài"]
  }
];

// ==================== CODE CHÍNH ====================
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const subjectSelect = document.getElementById("subjectSelect");
const explanationEl = document.getElementById("explanation");

let correctAnswer = "";
let explanationText = "";
let selectedSubject = "";
let timerInterval = null;
let currentQuestionType = ""; // "multiple-choice" - "essay" - "kanji"
let questionCounter = 0;

// Quản lý lịch sử câu hỏi (lưu trong memory)
let questionHistory = [];
let kanjiHistory = [];

// ==================== QUẢN LÝ LỊCH SỬ ====================
function saveQuestionToHistory(questionText) {
  if (!questionHistory.includes(questionText)) {
    questionHistory.push(questionText);
    if (questionHistory.length > 50) {
      questionHistory.shift();
    }
  }
}

function saveKanjiToHistory(kanjiChar) {
  if (!kanjiHistory.includes(kanjiChar)) {
    kanjiHistory.push(kanjiChar);
    if (kanjiHistory.length > 50) {
      kanjiHistory.shift();
    }
  }
}

function getAvoidListPrompt() {
  if (questionHistory.length === 0) return "";
  return `\nTránh lặp lại các câu hỏi sau:\n- ${questionHistory.join('\n- ')}\n`;
}

// ==================== TIMER ====================
function startTimer(duration) {
  clearInterval(timerInterval);
  let timeLeft = duration;
  updateTimerDisplay(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerEl.textContent = `${mins}:${secs}`;
}

function handleTimeout() {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });
  questionEl.innerHTML = '<span style="color: #FF2323;">⏰ Hết giờ!</span> Đáp án đúng đã được hiển thị.';
  showExplanation();
}

// ==================== CHỌN LOẠI CÂU HỎI ====================
function chooseQuestionType() {
  if (selectedSubject !== "jp") {
    return "multiple-choice";
  }

  questionCounter++;
  
  // Mỗi 4 câu từ vựng thì chèn 1 câu Kanji
  if (questionCounter % 5 === 0) {
    return "kanji";
  }

  // Ngẫu nhiên giữa trắc nghiệm và tự luận cho từ vựng
  return Math.random() < 0.7 ? "multiple-choice" : "multiple-choice";
}

// ==================== TẠO CÂU HỎI KANJI ====================
function generateKanjiQuestion() {
  const availableKanji = kanjiData.filter(k =>
    !kanjiHistory.includes(k.kanji)
  );

  if (availableKanji.length < 4) {
    kanjiHistory = [];
  }

  const kanjiToUse = availableKanji.length >= 4 ? availableKanji : kanjiData;
  const correctKanji = kanjiToUse[Math.floor(Math.random() * kanjiToUse.length)];

  // Tạo 3 đáp án sai
  const wrongKanji = [];
  while (wrongKanji.length < 3) {
    const randomKanji = kanjiData[Math.floor(Math.random() * kanjiData.length)];
    if (randomKanji.id !== correctKanji.id &&
      !wrongKanji.find(k => k.id === randomKanji.id)) {
      wrongKanji.push(randomKanji);
    }
  }

  // Kiểm tra xem có phải là số không
  const numberKanji = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万"];
  const isNumberKanji = numberKanji.includes(correctKanji.kanji);

  // Tạo danh sách các kiểu câu hỏi
  const questionTypes = [
    {
      type: "meaning",
      question: `Chữ Kanji "${correctKanji.kanji}" có nghĩa là gì?`,
      options: [correctKanji, ...wrongKanji].sort(() => Math.random() - 0.5).map(k => k.meaning),
      answer: correctKanji.meaning
    },
    {
      type: "reading",
      question: `Cách đọc Onyomi của chữ "${correctKanji.kanji}" là gì?`,
      options: [correctKanji, ...wrongKanji].sort(() => Math.random() - 0.5).map(k => k.onyomi),
      answer: correctKanji.onyomi
    }
  ];

  // Chỉ thêm câu hỏi Kunyomi nếu KHÔNG phải là số và có kunyomi
  if (!isNumberKanji && correctKanji.kunyomi && correctKanji.kunyomi.trim() !== "") {
    questionTypes.push({
      type: "kunyomi",
      question: `Cách đọc Kunyomi của chữ "${correctKanji.kanji}" là gì?`,
      options: [correctKanji, ...wrongKanji].sort(() => Math.random() - 0.5).map(k => k.kunyomi),
      answer: correctKanji.kunyomi
    });
  }

  const selectedType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

  const explanation = `
    <div style="font-size: 48px; font-weight: bold; color: #B3ADDD; margin: 12px 0; text-align: center; text-shadow: 0 0 15px rgba(179, 173, 221, 0.4);">${correctKanji.kanji}</div>
    <div style="background: rgba(132, 79, 156, 0.15); padding: 12px; border-radius: 6px; margin: 10px 0; font-size: 12px; line-height: 1.7; color: #ffffffa3; font-family: Montserrat; border: 1px solid rgba(179, 173, 221, 0.2);">
      <strong style="color: rgba(255, 255, 255, 0.77);">Nghĩa:</strong> ${correctKanji.meaning}<br>
      <strong style="color: rgba(255, 255, 255, 0.77);">Onyomi:</strong> ${correctKanji.onyomi}<br>
      ${correctKanji.kunyomi && correctKanji.kunyomi.trim() !== "" ? `<strong style="color: rgba(255, 255, 255, 0.77);">Kunyomi:</strong> ${correctKanji.kunyomi}<br>` : ''}
      <strong style="color: rgba(255, 255, 255, 0.77);">Ví dụ:</strong><br>
      ${correctKanji.examples.map(ex => `<span style="color: #828487; margin-left: 8px;">• ${ex}</span>`).join('<br>')}
    </div>
  `;

  saveKanjiToHistory(correctKanji.kanji);

  return {
    question: selectedType.question,
    options: selectedType.options,
    answer: selectedType.answer,
    explanation: explanation
  };
}

// ==================== TẠO CÂU HỎI TỪ VỰNG ====================
function generateJapaneseMultipleChoice() {
  const availableWords = vocabularyData.filter(word =>
    !questionHistory.includes(word.hiragana)
  );

  if (availableWords.length < 4) {
    questionHistory = [];
  }

  const wordsToUse = availableWords.length >= 4 ? availableWords : vocabularyData;
  const correctWord = wordsToUse[Math.floor(Math.random() * wordsToUse.length)];

  const wrongWords = [];
  while (wrongWords.length < 3) {
    const randomWord = vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (randomWord.id !== correctWord.id &&
      !wrongWords.find(w => w.id === randomWord.id)) {
      wrongWords.push(randomWord);
    }
  }

  const allOptions = [correctWord, ...wrongWords]
    .sort(() => Math.random() - 0.5)
    .map(word => word.hiragana);

  const questionData = {
    question: `"${correctWord.meaning}" trong tiếng Nhật là gì?`,
    options: allOptions,
    answer: correctWord.hiragana,
    explanation: `<div style="color: #ffffffa3; font-family: Montserrat; font-size: 12px; line-height: 1.6;">
      <strong style="color: rgba(255, 255, 255, 0.77);">Đáp án đúng:</strong> <span style="color: #8FDF51; font-weight: 600;">${correctWord.hiragana}</span>${correctWord.kanji ? ` <span style="color: #B3ADDD;">(${correctWord.kanji})</span>` : ''}<br>
      <strong style="color: rgba(255, 255, 255, 0.77);">Nghĩa:</strong> ${correctWord.meaning}
    </div>`
  };

  saveQuestionToHistory(correctWord.hiragana);
  return questionData;
}

// ==================== LOAD CÂU HỎI ====================
async function loadQuestion() {
  if (!selectedSubject) {
    questionEl.textContent = "⚠️ Hãy chọn môn học trước";
    return;
  }

  questionEl.textContent = "Loading...";
  optionsEl.innerHTML = "";
  explanationEl.style.display = "none";
  timerEl.textContent = "";

  let questionData;

  // Nếu là môn Nhật thì dùng database có sẵn
  if (selectedSubject === "jp") {
    currentQuestionType = chooseQuestionType();

    if (currentQuestionType === "kanji") {
      questionData = generateKanjiQuestion();
    } else {
      questionData = generateJapaneseMultipleChoice();
    }
  } else {
    // Các môn khác vẫn dùng Gemini API
    currentQuestionType = "multiple-choice";
    questionData = await fetchQuestionFromGemini();
  }

  if (!questionData || !questionData.question) {
    questionEl.textContent = "❌ Lỗi tải câu hỏi";
    return;
  }

  if (selectedSubject !== "jp") {
    saveQuestionToHistory(questionData.question);
  }

  questionEl.innerHTML = questionData.question;
  correctAnswer = questionData.answer;
  explanationText = questionData.explanation || "Không có giải thích.";

  optionsEl.innerHTML = "";
  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => {
      clearInterval(timerInterval);
      handleAnswer(btn, option);
    };
    optionsEl.appendChild(btn);
  });

  // Timer
  if (selectedSubject === "english" || selectedSubject === "jp") {
    startTimer(15);
  } else {
    startTimer(60);
  }
}

// ==================== XỬ LÝ TRẢ LỜI ====================
function handleAnswer(button, selectedOption) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selectedOption === correctAnswer) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  showExplanation();
}

function showExplanation() {
  explanationEl.innerHTML = explanationText;
  explanationEl.style.display = "block";
}

// ==================== GỌI GEMINI API (cho các môn khác) ====================
async function fetchQuestionFromGemini() {
  const avoidList = getAvoidListPrompt();
  let prompt = "";

  if (selectedSubject === "english") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về từ vựng tiếng anh theo các chủ đề như: Technology, Environment, Health, Education, Culture, Travel, Food, Sports, Business,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến từ vựng tiếng anh.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  } else if (selectedSubject === "ds") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về môn học đại số tuyến tính tại việt nam (hust)
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến đại số tuyến tính.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  } else if (selectedSubject === "gt") {
    prompt = `Hãy tạo một câu hỏi ôn tập giải tích 1 tại việt nam (hust)
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến giải tích 1.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  }

  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCbWfOla29VASM0_jlfPIhUCqeCyaZA5jU", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });

  const data = await res.json();
  let txt = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  txt = txt.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(txt);
  } catch (e) {
    console.error("Parse error", txt);
    return null;
  }
}

// ==================== SỰ KIỆN ====================
subjectSelect.addEventListener("change", e => {
  selectedSubject = e.target.value;
  questionCounter = 0; // Reset counter khi đổi môn
  questionHistory = []; // Reset lịch sử
  kanjiHistory = []; // Reset lịch sử kanji
  if (selectedSubject) loadQuestion();
});

document.getElementById("Load").addEventListener("click", loadQuestion);