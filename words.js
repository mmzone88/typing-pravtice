// 2023 單字資料庫
const LOW_GRADE_WORDS = [
  {
    "num": 1,
    "english": "age",
    "chinese": "年齡"
  },
  {
    "num": 2,
    "english": "air",
    "chinese": "空氣"
  },
  {
    "num": 3,
    "english": "all",
    "chinese": "全部"
  },
  {
    "num": 4,
    "english": "almost",
    "chinese": "幾乎"
  },
  {
    "num": 5,
    "english": "also",
    "chinese": "也"
  },
  {
    "num": 6,
    "english": "America",
    "chinese": "美國"
  },
  {
    "num": 7,
    "english": "American",
    "chinese": "美國人"
  },
  {
    "num": 8,
    "english": "and",
    "chinese": "和"
  },
  {
    "num": 9,
    "english": "angry",
    "chinese": "生氣的"
  },
  {
    "num": 10,
    "english": "animal",
    "chinese": "動物"
  },
  {
    "num": 11,
    "english": "another",
    "chinese": "另一個"
  },
  {
    "num": 12,
    "english": "answer",
    "chinese": "回答"
  },
  {
    "num": 13,
    "english": "ant",
    "chinese": "螞蟻"
  },
  {
    "num": 14,
    "english": "any",
    "chinese": "任何的"
  },
  {
    "num": 15,
    "english": "apartment",
    "chinese": "公寓"
  },
  {
    "num": 16,
    "english": "apple",
    "chinese": "蘋果"
  },
  {
    "num": 17,
    "english": "ark",
    "chinese": "舟"
  },
  {
    "num": 18,
    "english": "arm",
    "chinese": "手臂"
  },
  {
    "num": 19,
    "english": "around",
    "chinese": "在..四周"
  },
  {
    "num": 20,
    "english": "arrive",
    "chinese": "到達"
  },
  {
    "num": 21,
    "english": "art",
    "chinese": "美術"
  },
  {
    "num": 22,
    "english": "ask",
    "chinese": "問"
  },
  {
    "num": 23,
    "english": "at",
    "chinese": "在"
  },
  {
    "num": 24,
    "english": "aunt",
    "chinese": "伯(叔)母"
  },
  {
    "num": 25,
    "english": "away",
    "chinese": "遠離"
  },
  {
    "num": 26,
    "english": "baby",
    "chinese": "嬰兒"
  },
  {
    "num": 27,
    "english": "bad",
    "chinese": "壞的"
  },
  {
    "num": 28,
    "english": "bag",
    "chinese": "袋子"
  },
  {
    "num": 29,
    "english": "ball",
    "chinese": "球"
  },
  {
    "num": 30,
    "english": "banana",
    "chinese": "香蕉"
  },
  {
    "num": 31,
    "english": "bank",
    "chinese": "銀行"
  },
  {
    "num": 32,
    "english": "baseball",
    "chinese": "棒球"
  },
  {
    "num": 33,
    "english": "basket",
    "chinese": "籃子"
  },
  {
    "num": 34,
    "english": "basketball",
    "chinese": "籃球"
  },
  {
    "num": 35,
    "english": "bat",
    "chinese": "蝙蝠"
  },
  {
    "num": 36,
    "english": "bathroom",
    "chinese": "浴室"
  },
  {
    "num": 37,
    "english": "be",
    "chinese": "是"
  },
  {
    "num": 38,
    "english": "beach",
    "chinese": "海灘"
  },
  {
    "num": 39,
    "english": "bear",
    "chinese": "熊"
  },
  {
    "num": 40,
    "english": "because",
    "chinese": "因為"
  },
  {
    "num": 41,
    "english": "become",
    "chinese": "變成"
  },
  {
    "num": 42,
    "english": "bed",
    "chinese": "床"
  },
  {
    "num": 43,
    "english": "bedroom",
    "chinese": "臥室"
  },
  {
    "num": 44,
    "english": "bee",
    "chinese": "蜜蜂"
  },
  {
    "num": 45,
    "english": "before",
    "chinese": "在..之前"
  },
  {
    "num": 46,
    "english": "begin",
    "chinese": "開始"
  },
  {
    "num": 47,
    "english": "behind",
    "chinese": "在..後面"
  },
  {
    "num": 48,
    "english": "bell",
    "chinese": "鈴"
  },
  {
    "num": 49,
    "english": "below",
    "chinese": "在..下方"
  },
  {
    "num": 50,
    "english": "big",
    "chinese": "大的"
  },
  {
    "num": 51,
    "english": "bike",
    "chinese": "腳踏車"
  },
  {
    "num": 52,
    "english": "bird",
    "chinese": "鳥"
  },
  {
    "num": 53,
    "english": "black",
    "chinese": "黑色(的)"
  },
  {
    "num": 54,
    "english": "blue",
    "chinese": "藍色(的)"
  },
  {
    "num": 55,
    "english": "boat",
    "chinese": "船"
  },
  {
    "num": 56,
    "english": "book",
    "chinese": "書"
  },
  {
    "num": 57,
    "english": "bow",
    "chinese": "n. 弓 v.敬禮"
  },
  {
    "num": 58,
    "english": "bowl",
    "chinese": "碗"
  },
  {
    "num": 59,
    "english": "box",
    "chinese": "盒子"
  },
  {
    "num": 60,
    "english": "boy",
    "chinese": "男孩"
  },
  {
    "num": 61,
    "english": "bread",
    "chinese": "麵包"
  },
  {
    "num": 62,
    "english": "bridge",
    "chinese": "橋"
  },
  {
    "num": 63,
    "english": "brother",
    "chinese": "兄弟"
  },
  {
    "num": 64,
    "english": "brown",
    "chinese": "褐色(的)"
  },
  {
    "num": 65,
    "english": "bug",
    "chinese": "小蟲"
  },
  {
    "num": 66,
    "english": "bus",
    "chinese": "公車"
  },
  {
    "num": 67,
    "english": "but",
    "chinese": "但是"
  },
  {
    "num": 68,
    "english": "butter",
    "chinese": "奶油"
  },
  {
    "num": 69,
    "english": "butterfly",
    "chinese": "蝴蝶"
  },
  {
    "num": 70,
    "english": "buy",
    "chinese": "買"
  },
  {
    "num": 71,
    "english": "by",
    "chinese": "藉著"
  },
  {
    "num": 72,
    "english": "cage",
    "chinese": "籠子"
  },
  {
    "num": 73,
    "english": "call",
    "chinese": "打電話"
  },
  {
    "num": 74,
    "english": "camera",
    "chinese": "照相機"
  },
  {
    "num": 75,
    "english": "can",
    "chinese": "能夠"
  },
  {
    "num": 76,
    "english": "candle",
    "chinese": "蠟燭"
  },
  {
    "num": 77,
    "english": "candy",
    "chinese": "糖果"
  },
  {
    "num": 78,
    "english": "cap",
    "chinese": "帽子"
  },
  {
    "num": 79,
    "english": "car",
    "chinese": "車子"
  },
  {
    "num": 80,
    "english": "card",
    "chinese": "卡片"
  },
  {
    "num": 81,
    "english": "care",
    "chinese": "在乎"
  },
  {
    "num": 82,
    "english": "castle",
    "chinese": "城堡"
  },
  {
    "num": 83,
    "english": "cat",
    "chinese": "貓"
  },
  {
    "num": 84,
    "english": "cent",
    "chinese": "(一)分錢"
  },
  {
    "num": 85,
    "english": "center",
    "chinese": "中心"
  },
  {
    "num": 86,
    "english": "chair",
    "chinese": "椅子"
  },
  {
    "num": 87,
    "english": "chalk",
    "chinese": "粉筆"
  },
  {
    "num": 88,
    "english": "chance",
    "chinese": "機會"
  },
  {
    "num": 89,
    "english": "change",
    "chinese": "零錢/改變"
  },
  {
    "num": 90,
    "english": "cheat",
    "chinese": "作弊/欺騙"
  },
  {
    "num": 91,
    "english": "check",
    "chinese": "檢查"
  },
  {
    "num": 92,
    "english": "China",
    "chinese": "中國"
  },
  {
    "num": 93,
    "english": "choose",
    "chinese": "選擇"
  },
  {
    "num": 94,
    "english": "circle",
    "chinese": "圓圈"
  },
  {
    "num": 95,
    "english": "city",
    "chinese": "城市"
  },
  {
    "num": 96,
    "english": "clap",
    "chinese": "拍手"
  },
  {
    "num": 97,
    "english": "class",
    "chinese": "班級"
  },
  {
    "num": 98,
    "english": "classmate",
    "chinese": "同班同學"
  },
  {
    "num": 99,
    "english": "classroom",
    "chinese": "教室"
  },
  {
    "num": 100,
    "english": "clean",
    "chinese": "打掃"
  },
  {
    "num": 101,
    "english": "clear",
    "chinese": "清楚的"
  },
  {
    "num": 102,
    "english": "clerk",
    "chinese": "店員"
  },
  {
    "num": 103,
    "english": "climb",
    "chinese": "爬"
  },
  {
    "num": 104,
    "english": "coffee",
    "chinese": "咖啡"
  },
  {
    "num": 105,
    "english": "Coke",
    "chinese": "可樂"
  },
  {
    "num": 106,
    "english": "cold",
    "chinese": "寒冷的"
  },
  {
    "num": 107,
    "english": "color",
    "chinese": "色彩"
  },
  {
    "num": 108,
    "english": "come",
    "chinese": "來"
  },
  {
    "num": 109,
    "english": "common",
    "chinese": "共同的"
  },
  {
    "num": 110,
    "english": "cook",
    "chinese": "烹飪/廚師"
  },
  {
    "num": 111,
    "english": "cool",
    "chinese": "涼爽的"
  },
  {
    "num": 112,
    "english": "copy",
    "chinese": "抄寫"
  },
  {
    "num": 113,
    "english": "corner",
    "chinese": "角落"
  },
  {
    "num": 114,
    "english": "correct",
    "chinese": "正確的"
  },
  {
    "num": 115,
    "english": "cost",
    "chinese": "花費(時間金錢)"
  },
  {
    "num": 116,
    "english": "couch",
    "chinese": "沙發"
  },
  {
    "num": 117,
    "english": "country",
    "chinese": "鄉村/國家"
  },
  {
    "num": 118,
    "english": "cow",
    "chinese": "母牛"
  },
  {
    "num": 119,
    "english": "crazy",
    "chinese": "瘋狂的"
  },
  {
    "num": 120,
    "english": "cry",
    "chinese": "喊叫/哭"
  },
  {
    "num": 121,
    "english": "cup",
    "chinese": "茶杯"
  },
  {
    "num": 122,
    "english": "cut",
    "chinese": "切"
  },
  {
    "num": 123,
    "english": "cute",
    "chinese": "可愛的"
  },
  {
    "num": 124,
    "english": "dance",
    "chinese": "跳舞"
  },
  {
    "num": 125,
    "english": "dark",
    "chinese": "黑暗的"
  },
  {
    "num": 126,
    "english": "date",
    "chinese": "日期"
  },
  {
    "num": 127,
    "english": "day",
    "chinese": "日子"
  },
  {
    "num": 128,
    "english": "desk",
    "chinese": "書桌"
  },
  {
    "num": 129,
    "english": "dig",
    "chinese": "挖掘"
  },
  {
    "num": 130,
    "english": "dinner",
    "chinese": "晚餐"
  },
  {
    "num": 131,
    "english": "dirty",
    "chinese": "骯髒的"
  },
  {
    "num": 132,
    "english": "dish",
    "chinese": "盤子"
  },
  {
    "num": 133,
    "english": "do",
    "chinese": "做"
  },
  {
    "num": 134,
    "english": "doctor",
    "chinese": "醫生"
  },
  {
    "num": 135,
    "english": "dog",
    "chinese": "狗"
  },
  {
    "num": 136,
    "english": "doll",
    "chinese": "洋娃娃"
  },
  {
    "num": 137,
    "english": "dollar",
    "chinese": "元"
  },
  {
    "num": 138,
    "english": "door",
    "chinese": "門"
  },
  {
    "num": 139,
    "english": "dot",
    "chinese": "點"
  },
  {
    "num": 140,
    "english": "down",
    "chinese": "向下"
  },
  {
    "num": 141,
    "english": "draw",
    "chinese": "畫"
  },
  {
    "num": 142,
    "english": "dress",
    "chinese": "洋裝"
  },
  {
    "num": 143,
    "english": "drink",
    "chinese": "喝"
  },
  {
    "num": 144,
    "english": "dry",
    "chinese": "乾的"
  },
  {
    "num": 145,
    "english": "duck",
    "chinese": "鴨"
  },
  {
    "num": 146,
    "english": "dumpling",
    "chinese": "餃子"
  },
  {
    "num": 147,
    "english": "during",
    "chinese": "在..期間"
  },
  {
    "num": 148,
    "english": "e-mail",
    "chinese": "電子郵件"
  },
  {
    "num": 149,
    "english": "each",
    "chinese": "每個"
  },
  {
    "num": 150,
    "english": "ear",
    "chinese": "耳朵"
  },
  {
    "num": 151,
    "english": "east",
    "chinese": "東方"
  },
  {
    "num": 152,
    "english": "easy",
    "chinese": "容易的"
  },
  {
    "num": 153,
    "english": "eat",
    "chinese": "吃"
  },
  {
    "num": 154,
    "english": "egg",
    "chinese": "蛋"
  },
  {
    "num": 155,
    "english": "eight",
    "chinese": "八"
  },
  {
    "num": 156,
    "english": "eighteen",
    "chinese": "十八"
  },
  {
    "num": 157,
    "english": "eighth",
    "chinese": "第八"
  },
  {
    "num": 158,
    "english": "eighty",
    "chinese": "八十"
  },
  {
    "num": 159,
    "english": "elephant",
    "chinese": "大象"
  },
  {
    "num": 160,
    "english": "else",
    "chinese": "其他的"
  },
  {
    "num": 161,
    "english": "end",
    "chinese": "結束"
  },
  {
    "num": 162,
    "english": "enjoy",
    "chinese": "喜愛"
  },
  {
    "num": 163,
    "english": "enough",
    "chinese": "足夠的"
  },
  {
    "num": 164,
    "english": "enter",
    "chinese": "進入"
  },
  {
    "num": 165,
    "english": "eraser",
    "chinese": "橡皮擦"
  },
  {
    "num": 166,
    "english": "eve",
    "chinese": "前夕"
  },
  {
    "num": 167,
    "english": "even",
    "chinese": "甚至"
  },
  {
    "num": 168,
    "english": "every",
    "chinese": "每一個"
  },
  {
    "num": 169,
    "english": "everyone",
    "chinese": "每一個人"
  },
  {
    "num": 170,
    "english": "everything",
    "chinese": "每件事"
  },
  {
    "num": 171,
    "english": "excellent",
    "chinese": "極好的"
  },
  {
    "num": 172,
    "english": "except",
    "chinese": "除了..之外"
  },
  {
    "num": 173,
    "english": "excited",
    "chinese": "感興奮的"
  },
  {
    "num": 174,
    "english": "exciting",
    "chinese": "令人興奮的"
  },
  {
    "num": 175,
    "english": "excuse",
    "chinese": "藉口"
  },
  {
    "num": 176,
    "english": "eye",
    "chinese": "眼睛"
  },
  {
    "num": 177,
    "english": "face",
    "chinese": "臉孔"
  },
  {
    "num": 178,
    "english": "fan",
    "chinese": "迷/崇拜者"
  },
  {
    "num": 179,
    "english": "farm",
    "chinese": "農場"
  },
  {
    "num": 180,
    "english": "fast",
    "chinese": "快的"
  },
  {
    "num": 181,
    "english": "fat",
    "chinese": "胖的"
  },
  {
    "num": 182,
    "english": "father",
    "chinese": "父親"
  },
  {
    "num": 183,
    "english": "feel",
    "chinese": "覺得"
  },
  {
    "num": 184,
    "english": "festival",
    "chinese": "節慶"
  },
  {
    "num": 185,
    "english": "fill",
    "chinese": "裝滿"
  },
  {
    "num": 186,
    "english": "finally",
    "chinese": "最後"
  },
  {
    "num": 187,
    "english": "find",
    "chinese": "找到"
  },
  {
    "num": 188,
    "english": "fine",
    "chinese": "很好的"
  },
  {
    "num": 189,
    "english": "fire",
    "chinese": "火"
  },
  {
    "num": 190,
    "english": "first",
    "chinese": "第一"
  },
  {
    "num": 191,
    "english": "fish",
    "chinese": "魚"
  },
  {
    "num": 192,
    "english": "five",
    "chinese": "五"
  },
  {
    "num": 193,
    "english": "floor",
    "chinese": "地板"
  },
  {
    "num": 194,
    "english": "flower",
    "chinese": "花朵"
  },
  {
    "num": 195,
    "english": "fly",
    "chinese": "飛"
  },
  {
    "num": 196,
    "english": "follow",
    "chinese": "遵循"
  },
  {
    "num": 197,
    "english": "food",
    "chinese": "食物"
  },
  {
    "num": 198,
    "english": "foot",
    "chinese": "腳"
  },
  {
    "num": 199,
    "english": "foreign",
    "chinese": "外國的"
  },
  {
    "num": 200,
    "english": "foreigner",
    "chinese": "外國人"
  },
  {
    "num": 201,
    "english": "four",
    "chinese": "四"
  },
  {
    "num": 202,
    "english": "fox",
    "chinese": "狐狸"
  },
  {
    "num": 203,
    "english": "free",
    "chinese": "自由的/免費的"
  },
  {
    "num": 204,
    "english": "French fries",
    "chinese": "薯條"
  },
  {
    "num": 205,
    "english": "friend",
    "chinese": "朋友"
  },
  {
    "num": 206,
    "english": "friendly",
    "chinese": "友善的"
  },
  {
    "num": 207,
    "english": "frog",
    "chinese": "青蛙"
  },
  {
    "num": 208,
    "english": "from",
    "chinese": "從"
  },
  {
    "num": 209,
    "english": "front",
    "chinese": "前面"
  },
  {
    "num": 210,
    "english": "fruit",
    "chinese": "水果"
  },
  {
    "num": 211,
    "english": "fry",
    "chinese": "油炸"
  },
  {
    "num": 212,
    "english": "full",
    "chinese": "滿的"
  },
  {
    "num": 213,
    "english": "fun",
    "chinese": "樂趣"
  },
  {
    "num": 214,
    "english": "funny",
    "chinese": "好笑的"
  },
  {
    "num": 215,
    "english": "future",
    "chinese": "未來"
  },
  {
    "num": 216,
    "english": "game",
    "chinese": "比賽"
  },
  {
    "num": 217,
    "english": "garbage",
    "chinese": "垃圾"
  },
  {
    "num": 218,
    "english": "garden",
    "chinese": "花園"
  },
  {
    "num": 219,
    "english": "gas",
    "chinese": "瓦斯"
  },
  {
    "num": 220,
    "english": "get",
    "chinese": "得到"
  },
  {
    "num": 221,
    "english": "gift",
    "chinese": "禮物"
  },
  {
    "num": 222,
    "english": "girl",
    "chinese": "女孩"
  },
  {
    "num": 223,
    "english": "give",
    "chinese": "給予"
  },
  {
    "num": 224,
    "english": "glass",
    "chinese": "玻璃杯"
  },
  {
    "num": 225,
    "english": "glasses",
    "chinese": "眼鏡"
  },
  {
    "num": 226,
    "english": "glue",
    "chinese": "膠水"
  },
  {
    "num": 227,
    "english": "go",
    "chinese": "去"
  },
  {
    "num": 228,
    "english": "good",
    "chinese": "好的"
  },
  {
    "num": 229,
    "english": "grandfather",
    "chinese": "爺爺祖父"
  },
  {
    "num": 230,
    "english": "grandmother",
    "chinese": "奶奶祖母"
  },
  {
    "num": 231,
    "english": "grape",
    "chinese": "葡萄"
  },
  {
    "num": 232,
    "english": "grass",
    "chinese": "草"
  },
  {
    "num": 233,
    "english": "gray",
    "chinese": "灰色(的)"
  },
  {
    "num": 234,
    "english": "great",
    "chinese": "很棒的"
  },
  {
    "num": 235,
    "english": "green",
    "chinese": "綠色(的)"
  },
  {
    "num": 236,
    "english": "guy",
    "chinese": "傢伙"
  },
  {
    "num": 237,
    "english": "gym",
    "chinese": "體育館"
  },
  {
    "num": 238,
    "english": "habit",
    "chinese": "習慣"
  },
  {
    "num": 239,
    "english": "hair",
    "chinese": "頭髮"
  },
  {
    "num": 240,
    "english": "ham",
    "chinese": "火腿"
  },
  {
    "num": 241,
    "english": "hand",
    "chinese": "手"
  },
  {
    "num": 242,
    "english": "handle",
    "chinese": "處理"
  },
  {
    "num": 243,
    "english": "handsome",
    "chinese": "英俊的"
  },
  {
    "num": 244,
    "english": "happy",
    "chinese": "快樂的"
  },
  {
    "num": 245,
    "english": "hat",
    "chinese": "帽子"
  },
  {
    "num": 246,
    "english": "hate",
    "chinese": "討厭"
  },
  {
    "num": 247,
    "english": "have",
    "chinese": "有"
  },
  {
    "num": 248,
    "english": "he",
    "chinese": "他"
  },
  {
    "num": 249,
    "english": "head",
    "chinese": "頭"
  },
  {
    "num": 250,
    "english": "health",
    "chinese": "健康"
  },
  {
    "num": 251,
    "english": "healthy",
    "chinese": "健康的"
  },
  {
    "num": 252,
    "english": "hear",
    "chinese": "聽"
  },
  {
    "num": 253,
    "english": "hello",
    "chinese": "您好(打招呼)"
  },
  {
    "num": 254,
    "english": "help",
    "chinese": "幫忙"
  },
  {
    "num": 255,
    "english": "helpful",
    "chinese": "有幫助的"
  },
  {
    "num": 256,
    "english": "hen",
    "chinese": "母雞"
  },
  {
    "num": 257,
    "english": "here",
    "chinese": "這裡"
  },
  {
    "num": 258,
    "english": "hey",
    "chinese": "嘿"
  },
  {
    "num": 259,
    "english": "hi",
    "chinese": "嗨"
  },
  {
    "num": 260,
    "english": "hill",
    "chinese": "山丘"
  },
  {
    "num": 261,
    "english": "hippo",
    "chinese": "河馬"
  },
  {
    "num": 262,
    "english": "hit",
    "chinese": "打擊"
  },
  {
    "num": 263,
    "english": "hobby",
    "chinese": "嗜好"
  },
  {
    "num": 264,
    "english": "home",
    "chinese": "家"
  },
  {
    "num": 265,
    "english": "honey",
    "chinese": "蜂蜜"
  },
  {
    "num": 266,
    "english": "hop",
    "chinese": "(單腳)跳"
  },
  {
    "num": 267,
    "english": "hope",
    "chinese": "希望"
  },
  {
    "num": 268,
    "english": "horse",
    "chinese": "馬"
  },
  {
    "num": 269,
    "english": "hospital",
    "chinese": "醫院"
  },
  {
    "num": 270,
    "english": "hot",
    "chinese": "熱的"
  },
  {
    "num": 271,
    "english": "hot dog",
    "chinese": "熱狗"
  },
  {
    "num": 272,
    "english": "hotel",
    "chinese": "旅社"
  },
  {
    "num": 273,
    "english": "hour",
    "chinese": "小時"
  },
  {
    "num": 274,
    "english": "how",
    "chinese": "如何"
  },
  {
    "num": 275,
    "english": "however",
    "chinese": "然而"
  },
  {
    "num": 276,
    "english": "hundred",
    "chinese": "百"
  },
  {
    "num": 277,
    "english": "hungry",
    "chinese": "飢餓的"
  },
  {
    "num": 278,
    "english": "hunt",
    "chinese": "打獵"
  },
  {
    "num": 279,
    "english": "hurry",
    "chinese": "趕快/匆忙"
  },
  {
    "num": 280,
    "english": "hurt",
    "chinese": "受傷"
  },
  {
    "num": 281,
    "english": "husband",
    "chinese": "丈夫"
  },
  {
    "num": 282,
    "english": "I",
    "chinese": "我"
  },
  {
    "num": 283,
    "english": "ice",
    "chinese": "冰"
  },
  {
    "num": 284,
    "english": "ice cream",
    "chinese": "冰淇淋"
  },
  {
    "num": 285,
    "english": "idea",
    "chinese": "主意"
  },
  {
    "num": 286,
    "english": "if",
    "chinese": "如果"
  },
  {
    "num": 287,
    "english": "important",
    "chinese": "重要的"
  },
  {
    "num": 288,
    "english": "in",
    "chinese": "在..裡面"
  },
  {
    "num": 289,
    "english": "insect",
    "chinese": "昆蟲"
  },
  {
    "num": 290,
    "english": "inside",
    "chinese": "在..內部"
  },
  {
    "num": 291,
    "english": "interest",
    "chinese": "使感興趣"
  },
  {
    "num": 292,
    "english": "interested",
    "chinese": "感興趣的"
  },
  {
    "num": 293,
    "english": "interesting",
    "chinese": "有趣的"
  },
  {
    "num": 294,
    "english": "Internet",
    "chinese": "網路"
  },
  {
    "num": 295,
    "english": "interview",
    "chinese": "訪問"
  },
  {
    "num": 296,
    "english": "into",
    "chinese": "到..之內"
  },
  {
    "num": 297,
    "english": "invite",
    "chinese": "邀請"
  },
  {
    "num": 298,
    "english": "jacket",
    "chinese": "夾克"
  },
  {
    "num": 299,
    "english": "jam",
    "chinese": "果醬"
  },
  {
    "num": 300,
    "english": "job",
    "chinese": "工作"
  },
  {
    "num": 301,
    "english": "jog",
    "chinese": "慢跑"
  },
  {
    "num": 302,
    "english": "join",
    "chinese": "加入"
  },
  {
    "num": 303,
    "english": "joy",
    "chinese": "歡樂"
  },
  {
    "num": 304,
    "english": "juice",
    "chinese": "果汁"
  },
  {
    "num": 305,
    "english": "just",
    "chinese": "只是"
  },
  {
    "num": 306,
    "english": "kangaroo",
    "chinese": "袋鼠"
  },
  {
    "num": 307,
    "english": "keep",
    "chinese": "保持"
  },
  {
    "num": 308,
    "english": "key",
    "chinese": "鑰匙"
  },
  {
    "num": 309,
    "english": "kick",
    "chinese": "踢"
  },
  {
    "num": 310,
    "english": "kid",
    "chinese": "小孩"
  },
  {
    "num": 311,
    "english": "kind",
    "chinese": "種類"
  },
  {
    "num": 312,
    "english": "king",
    "chinese": "國王"
  },
  {
    "num": 313,
    "english": "kiss",
    "chinese": "吻"
  },
  {
    "num": 314,
    "english": "kite",
    "chinese": "風箏"
  },
  {
    "num": 315,
    "english": "knife",
    "chinese": "刀子"
  },
  {
    "num": 316,
    "english": "knock",
    "chinese": "敲"
  },
  {
    "num": 317,
    "english": "know",
    "chinese": "知道"
  },
  {
    "num": 318,
    "english": "knowledge",
    "chinese": "知識"
  },
  {
    "num": 319,
    "english": "koala",
    "chinese": "無尾熊"
  },
  {
    "num": 320,
    "english": "lake",
    "chinese": "湖"
  },
  {
    "num": 321,
    "english": "learn",
    "chinese": "學習"
  },
  {
    "num": 322,
    "english": "lamb",
    "chinese": "羔羊"
  },
  {
    "num": 323,
    "english": "lamp",
    "chinese": "燈"
  },
  {
    "num": 324,
    "english": "land",
    "chinese": "土地"
  },
  {
    "num": 325,
    "english": "language",
    "chinese": "語言"
  },
  {
    "num": 326,
    "english": "lantern",
    "chinese": "燈籠"
  },
  {
    "num": 327,
    "english": "large",
    "chinese": "大的"
  },
  {
    "num": 328,
    "english": "last",
    "chinese": "最後的/上次"
  },
  {
    "num": 329,
    "english": "late",
    "chinese": "晚的"
  },
  {
    "num": 330,
    "english": "lately",
    "chinese": "最近"
  },
  {
    "num": 331,
    "english": "later",
    "chinese": "較晚"
  },
  {
    "num": 332,
    "english": "latest",
    "chinese": "最近的"
  },
  {
    "num": 333,
    "english": "laugh",
    "chinese": "笑"
  },
  {
    "num": 334,
    "english": "lazy",
    "chinese": "懶惰的"
  },
  {
    "num": 335,
    "english": "lead",
    "chinese": "引導"
  },
  {
    "num": 336,
    "english": "leader",
    "chinese": "領導者"
  },
  {
    "num": 337,
    "english": "leg",
    "chinese": "腿"
  },
  {
    "num": 338,
    "english": "lemon",
    "chinese": "檸檬"
  },
  {
    "num": 339,
    "english": "lend",
    "chinese": "借出"
  },
  {
    "num": 340,
    "english": "let",
    "chinese": "讓"
  },
  {
    "num": 341,
    "english": "letter",
    "chinese": "信"
  },
  {
    "num": 342,
    "english": "lid",
    "chinese": "蓋子"
  },
  {
    "num": 343,
    "english": "lie",
    "chinese": "說謊"
  },
  {
    "num": 344,
    "english": "life",
    "chinese": "生活"
  },
  {
    "num": 345,
    "english": "light",
    "chinese": "燈"
  },
  {
    "num": 346,
    "english": "like",
    "chinese": "喜歡"
  },
  {
    "num": 347,
    "english": "likely",
    "chinese": "有可能的"
  },
  {
    "num": 348,
    "english": "line",
    "chinese": "隊伍"
  },
  {
    "num": 349,
    "english": "lion",
    "chinese": "獅子"
  },
  {
    "num": 350,
    "english": "lip",
    "chinese": "嘴唇"
  },
  {
    "num": 351,
    "english": "list",
    "chinese": "清單"
  },
  {
    "num": 352,
    "english": "long",
    "chinese": "長的"
  },
  {
    "num": 353,
    "english": "look",
    "chinese": "看"
  },
  {
    "num": 354,
    "english": "loud",
    "chinese": "大聲的"
  },
  {
    "num": 355,
    "english": "love",
    "chinese": "喜愛"
  },
  {
    "num": 356,
    "english": "lovely",
    "chinese": "可愛的/令人喜愛的"
  },
  {
    "num": 357,
    "english": "low",
    "chinese": "低的"
  },
  {
    "num": 358,
    "english": "lucky",
    "chinese": "幸運的"
  },
  {
    "num": 359,
    "english": "lunch",
    "chinese": "午餐"
  },
  {
    "num": 360,
    "english": "mail",
    "chinese": "信件"
  },
  {
    "num": 361,
    "english": "mailman",
    "chinese": "郵差"
  },
  {
    "num": 362,
    "english": "make",
    "chinese": "製作"
  },
  {
    "num": 363,
    "english": "man",
    "chinese": "男人"
  },
  {
    "num": 364,
    "english": "many",
    "chinese": "許多的"
  },
  {
    "num": 365,
    "english": "map",
    "chinese": "地圖"
  },
  {
    "num": 366,
    "english": "mark",
    "chinese": "做記號"
  },
  {
    "num": 367,
    "english": "marker",
    "chinese": "簽字筆"
  },
  {
    "num": 368,
    "english": "mask",
    "chinese": "面具"
  },
  {
    "num": 369,
    "english": "math",
    "chinese": "數學"
  },
  {
    "num": 370,
    "english": "matter",
    "chinese": "事情"
  },
  {
    "num": 371,
    "english": "maybe",
    "chinese": "也許"
  },
  {
    "num": 372,
    "english": "meat",
    "chinese": "肉"
  },
  {
    "num": 373,
    "english": "medicine",
    "chinese": "藥"
  },
  {
    "num": 374,
    "english": "medium",
    "chinese": "中等的"
  },
  {
    "num": 375,
    "english": "meet",
    "chinese": "遇見"
  },
  {
    "num": 376,
    "english": "meeting",
    "chinese": "會議"
  },
  {
    "num": 377,
    "english": "milk",
    "chinese": "牛奶"
  },
  {
    "num": 378,
    "english": "mistake",
    "chinese": "錯誤"
  },
  {
    "num": 379,
    "english": "modern",
    "chinese": "現代化的"
  },
  {
    "num": 380,
    "english": "moment",
    "chinese": "片刻"
  },
  {
    "num": 381,
    "english": "monkey",
    "chinese": "猴子"
  },
  {
    "num": 382,
    "english": "moon",
    "chinese": "月亮"
  },
  {
    "num": 383,
    "english": "more",
    "chinese": "更多的"
  },
  {
    "num": 384,
    "english": "mouse",
    "chinese": "老鼠"
  },
  {
    "num": 385,
    "english": "mouth",
    "chinese": "嘴巴"
  },
  {
    "num": 386,
    "english": "movie",
    "chinese": "電影"
  },
  {
    "num": 387,
    "english": "Mr.",
    "chinese": "先生"
  },
  {
    "num": 388,
    "english": "Mrs.",
    "chinese": "太太"
  },
  {
    "num": 389,
    "english": "MRT",
    "chinese": "捷運"
  },
  {
    "num": 390,
    "english": "Ms.",
    "chinese": "女士"
  },
  {
    "num": 391,
    "english": "mud",
    "chinese": "泥"
  },
  {
    "num": 392,
    "english": "museum",
    "chinese": "博物館"
  },
  {
    "num": 393,
    "english": "music",
    "chinese": "音樂"
  },
  {
    "num": 394,
    "english": "must",
    "chinese": "必須"
  },
  {
    "num": 395,
    "english": "nail",
    "chinese": "釘子"
  },
  {
    "num": 396,
    "english": "name",
    "chinese": "名字"
  },
  {
    "num": 397,
    "english": "national",
    "chinese": "國家的"
  },
  {
    "num": 398,
    "english": "near",
    "chinese": "在..附近"
  },
  {
    "num": 399,
    "english": "neck",
    "chinese": "脖子"
  },
  {
    "num": 400,
    "english": "need",
    "chinese": "需要"
  },
  {
    "num": 401,
    "english": "neighbor",
    "chinese": "鄰居"
  },
  {
    "num": 402,
    "english": "never",
    "chinese": "從不"
  },
  {
    "num": 403,
    "english": "new",
    "chinese": "新的"
  },
  {
    "num": 404,
    "english": "next",
    "chinese": "接下去的"
  },
  {
    "num": 405,
    "english": "nice",
    "chinese": "好的"
  },
  {
    "num": 406,
    "english": "night",
    "chinese": "晚上"
  },
  {
    "num": 407,
    "english": "nine",
    "chinese": "九"
  },
  {
    "num": 408,
    "english": "nineteen",
    "chinese": "十九"
  },
  {
    "num": 409,
    "english": "nineteenth",
    "chinese": "第十九"
  },
  {
    "num": 410,
    "english": "ninety",
    "chinese": "九十"
  },
  {
    "num": 411,
    "english": "ninth",
    "chinese": "第九"
  },
  {
    "num": 412,
    "english": "no",
    "chinese": "沒有"
  },
  {
    "num": 413,
    "english": "nobody",
    "chinese": "無人/小人物"
  },
  {
    "num": 414,
    "english": "nod",
    "chinese": "點頭"
  },
  {
    "num": 415,
    "english": "noise",
    "chinese": "噪音"
  },
  {
    "num": 416,
    "english": "noodle",
    "chinese": "麵條"
  },
  {
    "num": 417,
    "english": "noon",
    "chinese": "中午"
  },
  {
    "num": 418,
    "english": "nose",
    "chinese": "鼻子"
  },
  {
    "num": 419,
    "english": "not",
    "chinese": "不"
  },
  {
    "num": 420,
    "english": "note",
    "chinese": "筆記"
  },
  {
    "num": 421,
    "english": "notebook",
    "chinese": "筆記本"
  },
  {
    "num": 422,
    "english": "notice",
    "chinese": "注意到"
  },
  {
    "num": 423,
    "english": "now",
    "chinese": "現在"
  },
  {
    "num": 424,
    "english": "oil",
    "chinese": "油"
  },
  {
    "num": 425,
    "english": "old",
    "chinese": "老的"
  },
  {
    "num": 426,
    "english": "one",
    "chinese": "一"
  },
  {
    "num": 427,
    "english": "open",
    "chinese": "打開"
  },
  {
    "num": 428,
    "english": "orange",
    "chinese": "柳橙"
  },
  {
    "num": 429,
    "english": "order",
    "chinese": "點餐"
  },
  {
    "num": 430,
    "english": "out",
    "chinese": "在外"
  },
  {
    "num": 431,
    "english": "over",
    "chinese": "結束"
  },
  {
    "num": 432,
    "english": "own",
    "chinese": "自己的"
  },
  {
    "num": 433,
    "english": "ox",
    "chinese": "公牛"
  },
  {
    "num": 434,
    "english": "pack",
    "chinese": "包"
  },
  {
    "num": 435,
    "english": "page",
    "chinese": "頁"
  },
  {
    "num": 436,
    "english": "papaya",
    "chinese": "木瓜"
  },
  {
    "num": 437,
    "english": "paper",
    "chinese": "紙"
  },
  {
    "num": 438,
    "english": "park",
    "chinese": "公園"
  },
  {
    "num": 439,
    "english": "part",
    "chinese": "部分"
  },
  {
    "num": 440,
    "english": "party",
    "chinese": "派對"
  },
  {
    "num": 441,
    "english": "pass",
    "chinese": "通過"
  },
  {
    "num": 442,
    "english": "peach",
    "chinese": "桃子"
  },
  {
    "num": 443,
    "english": "pear",
    "chinese": "梨子"
  },
  {
    "num": 444,
    "english": "pen",
    "chinese": "筆"
  },
  {
    "num": 445,
    "english": "pencil",
    "chinese": "鉛筆"
  },
  {
    "num": 446,
    "english": "perhaps",
    "chinese": "或許"
  },
  {
    "num": 447,
    "english": "person",
    "chinese": "人"
  },
  {
    "num": 448,
    "english": "pet",
    "chinese": "寵物"
  },
  {
    "num": 449,
    "english": "photo",
    "chinese": "相片"
  },
  {
    "num": 450,
    "english": "pie",
    "chinese": "派"
  },
  {
    "num": 451,
    "english": "pig",
    "chinese": "豬"
  },
  {
    "num": 452,
    "english": "pin",
    "chinese": "大頭針"
  },
  {
    "num": 453,
    "english": "pink",
    "chinese": "粉紅色(的)"
  },
  {
    "num": 454,
    "english": "pipe",
    "chinese": "管子"
  },
  {
    "num": 455,
    "english": "pizza",
    "chinese": "披薩"
  },
  {
    "num": 456,
    "english": "place",
    "chinese": "地方"
  },
  {
    "num": 457,
    "english": "plan",
    "chinese": "計畫"
  },
  {
    "num": 458,
    "english": "play",
    "chinese": "玩"
  },
  {
    "num": 459,
    "english": "player",
    "chinese": "選手"
  },
  {
    "num": 460,
    "english": "please",
    "chinese": "請"
  },
  {
    "num": 461,
    "english": "point",
    "chinese": "指著"
  },
  {
    "num": 462,
    "english": "pool",
    "chinese": "游泳池/池子"
  },
  {
    "num": 463,
    "english": "popcorn",
    "chinese": "爆米花"
  },
  {
    "num": 464,
    "english": "pork",
    "chinese": "豬肉"
  },
  {
    "num": 465,
    "english": "pot",
    "chinese": "罐"
  },
  {
    "num": 466,
    "english": "pray",
    "chinese": "祈禱"
  },
  {
    "num": 467,
    "english": "pretty",
    "chinese": "漂亮的"
  },
  {
    "num": 468,
    "english": "problem",
    "chinese": "問題"
  },
  {
    "num": 469,
    "english": "pull",
    "chinese": "拉"
  },
  {
    "num": 470,
    "english": "purple",
    "chinese": "紫色的"
  },
  {
    "num": 471,
    "english": "push",
    "chinese": "推"
  },
  {
    "num": 472,
    "english": "put",
    "chinese": "放"
  },
  {
    "num": 473,
    "english": "queen",
    "chinese": "皇后"
  },
  {
    "num": 474,
    "english": "quick",
    "chinese": "迅速的"
  },
  {
    "num": 475,
    "english": "quiet",
    "chinese": "安靜的"
  },
  {
    "num": 476,
    "english": "quiz",
    "chinese": "小考"
  },
  {
    "num": 477,
    "english": "rabbit",
    "chinese": "兔子"
  },
  {
    "num": 478,
    "english": "race",
    "chinese": "賽跑"
  },
  {
    "num": 479,
    "english": "radio",
    "chinese": "收音機"
  },
  {
    "num": 480,
    "english": "railroad",
    "chinese": "鐵路"
  },
  {
    "num": 481,
    "english": "rain",
    "chinese": "下雨"
  },
  {
    "num": 482,
    "english": "rainbow",
    "chinese": "彩虹"
  },
  {
    "num": 483,
    "english": "rainy",
    "chinese": "下雨的"
  },
  {
    "num": 484,
    "english": "rat",
    "chinese": "老鼠"
  },
  {
    "num": 485,
    "english": "read",
    "chinese": "讀"
  },
  {
    "num": 486,
    "english": "ready",
    "chinese": "準備好的"
  },
  {
    "num": 487,
    "english": "red",
    "chinese": "紅色(的)"
  },
  {
    "num": 488,
    "english": "repeat",
    "chinese": "重複"
  },
  {
    "num": 489,
    "english": "rest",
    "chinese": "休息"
  },
  {
    "num": 490,
    "english": "restroom",
    "chinese": "洗手間"
  },
  {
    "num": 491,
    "english": "rice",
    "chinese": "米飯"
  },
  {
    "num": 492,
    "english": "rich",
    "chinese": "富有的"
  },
  {
    "num": 493,
    "english": "ride",
    "chinese": "騎"
  },
  {
    "num": 494,
    "english": "right",
    "chinese": "右方"
  },
  {
    "num": 495,
    "english": "ring",
    "chinese": "戒指"
  },
  {
    "num": 496,
    "english": "road",
    "chinese": "道路"
  },
  {
    "num": 497,
    "english": "rock",
    "chinese": "岩石"
  },
  {
    "num": 498,
    "english": "roll",
    "chinese": "滾動"
  },
  {
    "num": 499,
    "english": "roller-skate",
    "chinese": "溜冰"
  },
  {
    "num": 500,
    "english": "room",
    "chinese": "房間"
  },
  {
    "num": 501,
    "english": "rooster",
    "chinese": "公雞"
  },
  {
    "num": 502,
    "english": "rope",
    "chinese": "繩子"
  },
  {
    "num": 503,
    "english": "rose",
    "chinese": "玫瑰"
  },
  {
    "num": 504,
    "english": "round",
    "chinese": "圓形的"
  },
  {
    "num": 505,
    "english": "row",
    "chinese": "划(船)"
  },
  {
    "num": 506,
    "english": "rule",
    "chinese": "規則"
  },
  {
    "num": 507,
    "english": "ruler",
    "chinese": "尺"
  },
  {
    "num": 508,
    "english": "run",
    "chinese": "跑"
  },
  {
    "num": 509,
    "english": "sad",
    "chinese": "悲傷的"
  },
  {
    "num": 510,
    "english": "safe",
    "chinese": "安全的"
  },
  {
    "num": 511,
    "english": "salad",
    "chinese": "沙拉"
  },
  {
    "num": 512,
    "english": "salt",
    "chinese": "鹽"
  },
  {
    "num": 513,
    "english": "same",
    "chinese": "相同的"
  },
  {
    "num": 514,
    "english": "sandwich",
    "chinese": "三明治"
  },
  {
    "num": 515,
    "english": "say",
    "chinese": "說"
  },
  {
    "num": 516,
    "english": "school",
    "chinese": "學校"
  },
  {
    "num": 517,
    "english": "sea",
    "chinese": "海"
  },
  {
    "num": 518,
    "english": "seat",
    "chinese": "座位"
  },
  {
    "num": 519,
    "english": "see",
    "chinese": "看"
  },
  {
    "num": 520,
    "english": "seed",
    "chinese": "種子"
  },
  {
    "num": 521,
    "english": "seem",
    "chinese": "似乎/好像"
  },
  {
    "num": 522,
    "english": "sell",
    "chinese": "賣"
  },
  {
    "num": 523,
    "english": "seven",
    "chinese": "七"
  },
  {
    "num": 524,
    "english": "shake",
    "chinese": "搖動"
  },
  {
    "num": 525,
    "english": "shape",
    "chinese": "形狀"
  },
  {
    "num": 526,
    "english": "share",
    "chinese": "分享"
  },
  {
    "num": 527,
    "english": "shark",
    "chinese": "鯊魚"
  },
  {
    "num": 528,
    "english": "she",
    "chinese": "她"
  },
  {
    "num": 529,
    "english": "sheep",
    "chinese": "綿羊"
  },
  {
    "num": 530,
    "english": "ship",
    "chinese": "船"
  },
  {
    "num": 531,
    "english": "shirt",
    "chinese": "襯衫"
  },
  {
    "num": 532,
    "english": "shoe",
    "chinese": "鞋子"
  },
  {
    "num": 533,
    "english": "shop",
    "chinese": "商店"
  },
  {
    "num": 534,
    "english": "short",
    "chinese": "短的"
  },
  {
    "num": 535,
    "english": "shoulder",
    "chinese": "肩膀"
  },
  {
    "num": 536,
    "english": "shout",
    "chinese": "喊叫"
  },
  {
    "num": 537,
    "english": "show",
    "chinese": "給..看/出示"
  },
  {
    "num": 538,
    "english": "shy",
    "chinese": "害羞的"
  },
  {
    "num": 539,
    "english": "sick",
    "chinese": "生病的"
  },
  {
    "num": 540,
    "english": "sin",
    "chinese": "罪惡"
  },
  {
    "num": 541,
    "english": "sing",
    "chinese": "唱歌"
  },
  {
    "num": 542,
    "english": "singer",
    "chinese": "歌手"
  },
  {
    "num": 543,
    "english": "sister",
    "chinese": "姊妹"
  },
  {
    "num": 544,
    "english": "sit",
    "chinese": "坐"
  },
  {
    "num": 545,
    "english": "six",
    "chinese": "六"
  },
  {
    "num": 546,
    "english": "snake",
    "chinese": "蛇"
  },
  {
    "num": 547,
    "english": "some",
    "chinese": "一些"
  },
  {
    "num": 548,
    "english": "someone",
    "chinese": "某人"
  },
  {
    "num": 549,
    "english": "something",
    "chinese": "某事"
  },
  {
    "num": 550,
    "english": "sometimes",
    "chinese": "有時候"
  },
  {
    "num": 551,
    "english": "somewhere",
    "chinese": "某處"
  },
  {
    "num": 552,
    "english": "star",
    "chinese": "星星"
  },
  {
    "num": 553,
    "english": "stop",
    "chinese": "停止"
  },
  {
    "num": 554,
    "english": "store",
    "chinese": "商店"
  },
  {
    "num": 555,
    "english": "story",
    "chinese": "故事"
  },
  {
    "num": 556,
    "english": "straight",
    "chinese": "直的"
  },
  {
    "num": 557,
    "english": "street",
    "chinese": "街道"
  },
  {
    "num": 558,
    "english": "strong",
    "chinese": "強壯的"
  },
  {
    "num": 559,
    "english": "student",
    "chinese": "學生"
  },
  {
    "num": 560,
    "english": "study",
    "chinese": "唸書"
  },
  {
    "num": 561,
    "english": "stupid",
    "chinese": "愚笨的"
  },
  {
    "num": 562,
    "english": "sugar",
    "chinese": "糖"
  },
  {
    "num": 563,
    "english": "summer",
    "chinese": "夏天"
  },
  {
    "num": 564,
    "english": "sun",
    "chinese": "太陽"
  },
  {
    "num": 565,
    "english": "sunny",
    "chinese": "晴朗的"
  },
  {
    "num": 566,
    "english": "sweater",
    "chinese": "毛衣"
  },
  {
    "num": 567,
    "english": "sweet",
    "chinese": "甜的"
  },
  {
    "num": 568,
    "english": "swim",
    "chinese": "游泳"
  },
  {
    "num": 569,
    "english": "T-shirt",
    "chinese": "短袖汗衫"
  },
  {
    "num": 570,
    "english": "tail",
    "chinese": "尾巴"
  },
  {
    "num": 571,
    "english": "Taiwan",
    "chinese": "臺灣"
  },
  {
    "num": 572,
    "english": "take",
    "chinese": "拿"
  },
  {
    "num": 573,
    "english": "talk",
    "chinese": "講話"
  },
  {
    "num": 574,
    "english": "tall",
    "chinese": "高的"
  },
  {
    "num": 575,
    "english": "taste",
    "chinese": "品嚐"
  },
  {
    "num": 576,
    "english": "taxi",
    "chinese": "計程車"
  },
  {
    "num": 577,
    "english": "tea",
    "chinese": "茶"
  },
  {
    "num": 578,
    "english": "teach",
    "chinese": "教"
  },
  {
    "num": 579,
    "english": "teacher",
    "chinese": "教師"
  },
  {
    "num": 580,
    "english": "team",
    "chinese": "團隊"
  },
  {
    "num": 581,
    "english": "tell",
    "chinese": "告訴"
  },
  {
    "num": 582,
    "english": "ten",
    "chinese": "十"
  },
  {
    "num": 583,
    "english": "tennis",
    "chinese": "網球"
  },
  {
    "num": 584,
    "english": "test",
    "chinese": "考試"
  },
  {
    "num": 585,
    "english": "than",
    "chinese": "比.."
  },
  {
    "num": 586,
    "english": "thank",
    "chinese": "謝謝"
  },
  {
    "num": 587,
    "english": "that",
    "chinese": "那個"
  },
  {
    "num": 588,
    "english": "the",
    "chinese": "這/那"
  },
  {
    "num": 589,
    "english": "then",
    "chinese": "那時"
  },
  {
    "num": 590,
    "english": "there",
    "chinese": "那裡"
  },
  {
    "num": 591,
    "english": "these",
    "chinese": "這些"
  },
  {
    "num": 592,
    "english": "they",
    "chinese": "他們"
  },
  {
    "num": 593,
    "english": "thick",
    "chinese": "厚的"
  },
  {
    "num": 594,
    "english": "thin",
    "chinese": "瘦的"
  },
  {
    "num": 595,
    "english": "thing",
    "chinese": "事情"
  },
  {
    "num": 596,
    "english": "think",
    "chinese": "思考"
  },
  {
    "num": 597,
    "english": "this",
    "chinese": "這個"
  },
  {
    "num": 598,
    "english": "three",
    "chinese": "三"
  },
  {
    "num": 599,
    "english": "throat",
    "chinese": "喉嚨"
  },
  {
    "num": 600,
    "english": "throw",
    "chinese": "丟"
  },
  {
    "num": 601,
    "english": "ticket",
    "chinese": "票"
  },
  {
    "num": 602,
    "english": "tidy",
    "chinese": "整潔的"
  },
  {
    "num": 603,
    "english": "tie",
    "chinese": "n. 領帶 v.綁"
  },
  {
    "num": 604,
    "english": "tiger",
    "chinese": "老虎"
  },
  {
    "num": 605,
    "english": "toast",
    "chinese": "吐司"
  },
  {
    "num": 606,
    "english": "today",
    "chinese": "今天"
  },
  {
    "num": 607,
    "english": "toe",
    "chinese": "腳趾"
  },
  {
    "num": 608,
    "english": "tooth",
    "chinese": "牙齒"
  },
  {
    "num": 609,
    "english": "top",
    "chinese": "頂部"
  },
  {
    "num": 610,
    "english": "total",
    "chinese": "總計"
  },
  {
    "num": 611,
    "english": "toy",
    "chinese": "玩具"
  },
  {
    "num": 612,
    "english": "train",
    "chinese": "火車"
  },
  {
    "num": 613,
    "english": "tree",
    "chinese": "樹"
  },
  {
    "num": 614,
    "english": "trick",
    "chinese": "詭計"
  },
  {
    "num": 615,
    "english": "trip",
    "chinese": "旅行"
  },
  {
    "num": 616,
    "english": "trouble",
    "chinese": "麻煩"
  },
  {
    "num": 617,
    "english": "truck",
    "chinese": "卡車"
  },
  {
    "num": 618,
    "english": "true",
    "chinese": "真實的"
  },
  {
    "num": 619,
    "english": "try",
    "chinese": "嘗試"
  },
  {
    "num": 620,
    "english": "tub",
    "chinese": "浴缸"
  },
  {
    "num": 621,
    "english": "turbo",
    "chinese": "渦輪"
  },
  {
    "num": 622,
    "english": "turkey",
    "chinese": "火雞"
  },
  {
    "num": 623,
    "english": "turn",
    "chinese": "轉動"
  },
  {
    "num": 624,
    "english": "turtle",
    "chinese": "烏龜"
  },
  {
    "num": 625,
    "english": "twice",
    "chinese": "兩次"
  },
  {
    "num": 626,
    "english": "two",
    "chinese": "二"
  },
  {
    "num": 627,
    "english": "type",
    "chinese": "打字"
  },
  {
    "num": 628,
    "english": "typhoon",
    "chinese": "颱風"
  },
  {
    "num": 629,
    "english": "umbrella",
    "chinese": "雨傘"
  },
  {
    "num": 630,
    "english": "uncle",
    "chinese": "伯(叔)"
  },
  {
    "num": 631,
    "english": "under",
    "chinese": "在..之下"
  },
  {
    "num": 632,
    "english": "unhappy",
    "chinese": "不快樂的"
  },
  {
    "num": 633,
    "english": "uniform",
    "chinese": "制服"
  },
  {
    "num": 634,
    "english": "until",
    "chinese": "直到"
  },
  {
    "num": 635,
    "english": "up",
    "chinese": "向上"
  },
  {
    "num": 636,
    "english": "very",
    "chinese": "非常"
  },
  {
    "num": 637,
    "english": "vest",
    "chinese": "背心"
  },
  {
    "num": 638,
    "english": "video",
    "chinese": "影片"
  },
  {
    "num": 639,
    "english": "violin",
    "chinese": "小提琴"
  },
  {
    "num": 640,
    "english": "voice",
    "chinese": "聲音"
  },
  {
    "num": 641,
    "english": "wait",
    "chinese": "等待"
  },
  {
    "num": 642,
    "english": "waiter",
    "chinese": "男服務生"
  },
  {
    "num": 643,
    "english": "waitress",
    "chinese": "女服務生"
  },
  {
    "num": 644,
    "english": "wake",
    "chinese": "醒來"
  },
  {
    "num": 645,
    "english": "walk",
    "chinese": "走路"
  },
  {
    "num": 646,
    "english": "wall",
    "chinese": "牆壁"
  },
  {
    "num": 647,
    "english": "want",
    "chinese": "想要"
  },
  {
    "num": 648,
    "english": "watch",
    "chinese": "看"
  },
  {
    "num": 649,
    "english": "water",
    "chinese": "水"
  },
  {
    "num": 650,
    "english": "wave",
    "chinese": "波浪"
  },
  {
    "num": 651,
    "english": "way",
    "chinese": "道路"
  },
  {
    "num": 652,
    "english": "we",
    "chinese": "我們"
  },
  {
    "num": 653,
    "english": "weak",
    "chinese": "弱的"
  },
  {
    "num": 654,
    "english": "wear",
    "chinese": "穿戴"
  },
  {
    "num": 655,
    "english": "weather",
    "chinese": "天氣"
  },
  {
    "num": 656,
    "english": "week",
    "chinese": "星期"
  },
  {
    "num": 657,
    "english": "weekend",
    "chinese": "週末"
  },
  {
    "num": 658,
    "english": "welcome",
    "chinese": "受歡迎的"
  },
  {
    "num": 659,
    "english": "west",
    "chinese": "西方"
  },
  {
    "num": 660,
    "english": "wet",
    "chinese": "濕的"
  },
  {
    "num": 661,
    "english": "what",
    "chinese": "什麼"
  },
  {
    "num": 662,
    "english": "where",
    "chinese": "在哪裡"
  },
  {
    "num": 663,
    "english": "which",
    "chinese": "哪一個"
  },
  {
    "num": 664,
    "english": "white",
    "chinese": "白色(的)"
  },
  {
    "num": 665,
    "english": "who",
    "chinese": "誰"
  },
  {
    "num": 666,
    "english": "whose",
    "chinese": "誰的"
  },
  {
    "num": 667,
    "english": "why",
    "chinese": "為什麼"
  },
  {
    "num": 668,
    "english": "wife",
    "chinese": "妻子"
  },
  {
    "num": 669,
    "english": "will",
    "chinese": "將"
  },
  {
    "num": 670,
    "english": "win",
    "chinese": "贏"
  },
  {
    "num": 671,
    "english": "wind",
    "chinese": "風"
  },
  {
    "num": 672,
    "english": "window",
    "chinese": "窗戶"
  },
  {
    "num": 673,
    "english": "windy",
    "chinese": "風大的"
  },
  {
    "num": 674,
    "english": "wise",
    "chinese": "明智的"
  },
  {
    "num": 675,
    "english": "wish",
    "chinese": "希望"
  },
  {
    "num": 676,
    "english": "with",
    "chinese": "與..一起"
  },
  {
    "num": 677,
    "english": "without",
    "chinese": "沒有"
  },
  {
    "num": 678,
    "english": "woman",
    "chinese": "女人"
  },
  {
    "num": 679,
    "english": "word",
    "chinese": "字"
  },
  {
    "num": 680,
    "english": "work",
    "chinese": "工作"
  },
  {
    "num": 681,
    "english": "workbook",
    "chinese": "練習簿"
  },
  {
    "num": 682,
    "english": "worker",
    "chinese": "工人"
  },
  {
    "num": 683,
    "english": "world",
    "chinese": "世界"
  },
  {
    "num": 684,
    "english": "worry",
    "chinese": "擔心"
  },
  {
    "num": 685,
    "english": "write",
    "chinese": "寫"
  },
  {
    "num": 686,
    "english": "writer",
    "chinese": "作家"
  },
  {
    "num": 687,
    "english": "wrong",
    "chinese": "錯誤的"
  },
  {
    "num": 688,
    "english": "yard",
    "chinese": "庭院"
  },
  {
    "num": 689,
    "english": "year",
    "chinese": "年"
  },
  {
    "num": 690,
    "english": "yellow",
    "chinese": "黃色(的)"
  },
  {
    "num": 691,
    "english": "yes",
    "chinese": "是"
  },
  {
    "num": 692,
    "english": "yesterday",
    "chinese": "昨天"
  },
  {
    "num": 693,
    "english": "yet",
    "chinese": "尚未"
  },
  {
    "num": 694,
    "english": "yo-yo",
    "chinese": "溜溜球"
  },
  {
    "num": 695,
    "english": "you",
    "chinese": "你(們)"
  },
  {
    "num": 696,
    "english": "young",
    "chinese": "年輕的"
  },
  {
    "num": 697,
    "english": "yummy",
    "chinese": "好吃的"
  },
  {
    "num": 698,
    "english": "zebra",
    "chinese": "斑馬"
  },
  {
    "num": 699,
    "english": "zero",
    "chinese": "零"
  },
  {
    "num": 700,
    "english": "zoo",
    "chinese": "動物園"
  }
];

const MID_GRADE_WORDS = [
  {
    "num": 1,
    "english": "age",
    "chinese": "年齡"
  },
  {
    "num": 2,
    "english": "air",
    "chinese": "空氣"
  },
  {
    "num": 3,
    "english": "all",
    "chinese": "全部"
  },
  {
    "num": 4,
    "english": "almost",
    "chinese": "幾乎"
  },
  {
    "num": 5,
    "english": "also",
    "chinese": "也"
  },
  {
    "num": 6,
    "english": "America",
    "chinese": "美國"
  },
  {
    "num": 7,
    "english": "American",
    "chinese": "美國人"
  },
  {
    "num": 8,
    "english": "and",
    "chinese": "和"
  },
  {
    "num": 9,
    "english": "angry",
    "chinese": "生氣的"
  },
  {
    "num": 10,
    "english": "animal",
    "chinese": "動物"
  },
  {
    "num": 11,
    "english": "another",
    "chinese": "另一個"
  },
  {
    "num": 12,
    "english": "answer",
    "chinese": "回答"
  },
  {
    "num": 13,
    "english": "ant",
    "chinese": "螞蟻"
  },
  {
    "num": 14,
    "english": "any",
    "chinese": "任何的"
  },
  {
    "num": 15,
    "english": "apartment",
    "chinese": "公寓"
  },
  {
    "num": 16,
    "english": "apple",
    "chinese": "蘋果"
  },
  {
    "num": 17,
    "english": "ark",
    "chinese": "舟"
  },
  {
    "num": 18,
    "english": "arm",
    "chinese": "手臂"
  },
  {
    "num": 19,
    "english": "around",
    "chinese": "在..四周"
  },
  {
    "num": 20,
    "english": "arrive",
    "chinese": "到達"
  },
  {
    "num": 21,
    "english": "art",
    "chinese": "美術"
  },
  {
    "num": 22,
    "english": "ask",
    "chinese": "問"
  },
  {
    "num": 23,
    "english": "at",
    "chinese": "在"
  },
  {
    "num": 24,
    "english": "aunt",
    "chinese": "伯(叔)母"
  },
  {
    "num": 25,
    "english": "away",
    "chinese": "遠離"
  },
  {
    "num": 26,
    "english": "baby",
    "chinese": "嬰兒"
  },
  {
    "num": 27,
    "english": "bad",
    "chinese": "壞的"
  },
  {
    "num": 28,
    "english": "bag",
    "chinese": "袋子"
  },
  {
    "num": 29,
    "english": "ball",
    "chinese": "球"
  },
  {
    "num": 30,
    "english": "banana",
    "chinese": "香蕉"
  },
  {
    "num": 31,
    "english": "bank",
    "chinese": "銀行"
  },
  {
    "num": 32,
    "english": "baseball",
    "chinese": "棒球"
  },
  {
    "num": 33,
    "english": "basket",
    "chinese": "籃子"
  },
  {
    "num": 34,
    "english": "basketball",
    "chinese": "籃球"
  },
  {
    "num": 35,
    "english": "bat",
    "chinese": "蝙蝠"
  },
  {
    "num": 36,
    "english": "bathroom",
    "chinese": "浴室"
  },
  {
    "num": 37,
    "english": "be",
    "chinese": "是"
  },
  {
    "num": 38,
    "english": "beach",
    "chinese": "海灘"
  },
  {
    "num": 39,
    "english": "bear",
    "chinese": "熊"
  },
  {
    "num": 40,
    "english": "because",
    "chinese": "因為"
  },
  {
    "num": 41,
    "english": "become",
    "chinese": "變成"
  },
  {
    "num": 42,
    "english": "bed",
    "chinese": "床"
  },
  {
    "num": 43,
    "english": "bedroom",
    "chinese": "臥室"
  },
  {
    "num": 44,
    "english": "bee",
    "chinese": "蜜蜂"
  },
  {
    "num": 45,
    "english": "before",
    "chinese": "在..之前"
  },
  {
    "num": 46,
    "english": "begin",
    "chinese": "開始"
  },
  {
    "num": 47,
    "english": "behind",
    "chinese": "在..後面"
  },
  {
    "num": 48,
    "english": "bell",
    "chinese": "鈴"
  },
  {
    "num": 49,
    "english": "below",
    "chinese": "在..下方"
  },
  {
    "num": 50,
    "english": "big",
    "chinese": "大的"
  },
  {
    "num": 51,
    "english": "bike",
    "chinese": "腳踏車"
  },
  {
    "num": 52,
    "english": "bird",
    "chinese": "鳥"
  },
  {
    "num": 53,
    "english": "black",
    "chinese": "黑色(的)"
  },
  {
    "num": 54,
    "english": "blue",
    "chinese": "藍色(的)"
  },
  {
    "num": 55,
    "english": "boat",
    "chinese": "船"
  },
  {
    "num": 56,
    "english": "book",
    "chinese": "書"
  },
  {
    "num": 57,
    "english": "bow",
    "chinese": "n. 弓 v.敬禮"
  },
  {
    "num": 58,
    "english": "bowl",
    "chinese": "碗"
  },
  {
    "num": 59,
    "english": "box",
    "chinese": "盒子"
  },
  {
    "num": 60,
    "english": "boy",
    "chinese": "男孩"
  },
  {
    "num": 61,
    "english": "bread",
    "chinese": "麵包"
  },
  {
    "num": 62,
    "english": "bridge",
    "chinese": "橋"
  },
  {
    "num": 63,
    "english": "brother",
    "chinese": "兄弟"
  },
  {
    "num": 64,
    "english": "brown",
    "chinese": "褐色(的)"
  },
  {
    "num": 65,
    "english": "bug",
    "chinese": "小蟲"
  },
  {
    "num": 66,
    "english": "bus",
    "chinese": "公車"
  },
  {
    "num": 67,
    "english": "but",
    "chinese": "但是"
  },
  {
    "num": 68,
    "english": "butter",
    "chinese": "奶油"
  },
  {
    "num": 69,
    "english": "butterfly",
    "chinese": "蝴蝶"
  },
  {
    "num": 70,
    "english": "buy",
    "chinese": "買"
  },
  {
    "num": 71,
    "english": "by",
    "chinese": "藉著"
  },
  {
    "num": 72,
    "english": "cage",
    "chinese": "籠子"
  },
  {
    "num": 73,
    "english": "call",
    "chinese": "打電話"
  },
  {
    "num": 74,
    "english": "camera",
    "chinese": "照相機"
  },
  {
    "num": 75,
    "english": "can",
    "chinese": "能夠"
  },
  {
    "num": 76,
    "english": "candle",
    "chinese": "蠟燭"
  },
  {
    "num": 77,
    "english": "candy",
    "chinese": "糖果"
  },
  {
    "num": 78,
    "english": "cap",
    "chinese": "帽子"
  },
  {
    "num": 79,
    "english": "car",
    "chinese": "車子"
  },
  {
    "num": 80,
    "english": "card",
    "chinese": "卡片"
  },
  {
    "num": 81,
    "english": "care",
    "chinese": "在乎"
  },
  {
    "num": 82,
    "english": "castle",
    "chinese": "城堡"
  },
  {
    "num": 83,
    "english": "cat",
    "chinese": "貓"
  },
  {
    "num": 84,
    "english": "cent",
    "chinese": "(一)分錢"
  },
  {
    "num": 85,
    "english": "center",
    "chinese": "中心"
  },
  {
    "num": 86,
    "english": "chair",
    "chinese": "椅子"
  },
  {
    "num": 87,
    "english": "chalk",
    "chinese": "粉筆"
  },
  {
    "num": 88,
    "english": "chance",
    "chinese": "機會"
  },
  {
    "num": 89,
    "english": "change",
    "chinese": "零錢/改變"
  },
  {
    "num": 90,
    "english": "cheat",
    "chinese": "作弊/欺騙"
  },
  {
    "num": 91,
    "english": "check",
    "chinese": "檢查"
  },
  {
    "num": 92,
    "english": "China",
    "chinese": "中國"
  },
  {
    "num": 93,
    "english": "choose",
    "chinese": "選擇"
  },
  {
    "num": 94,
    "english": "circle",
    "chinese": "圓圈"
  },
  {
    "num": 95,
    "english": "city",
    "chinese": "城市"
  },
  {
    "num": 96,
    "english": "clap",
    "chinese": "拍手"
  },
  {
    "num": 97,
    "english": "class",
    "chinese": "班級"
  },
  {
    "num": 98,
    "english": "classmate",
    "chinese": "同班同學"
  },
  {
    "num": 99,
    "english": "classroom",
    "chinese": "教室"
  },
  {
    "num": 100,
    "english": "clean",
    "chinese": "打掃"
  },
  {
    "num": 101,
    "english": "clear",
    "chinese": "清楚的"
  },
  {
    "num": 102,
    "english": "clerk",
    "chinese": "店員"
  },
  {
    "num": 103,
    "english": "climb",
    "chinese": "爬"
  },
  {
    "num": 104,
    "english": "coffee",
    "chinese": "咖啡"
  },
  {
    "num": 105,
    "english": "Coke",
    "chinese": "可樂"
  },
  {
    "num": 106,
    "english": "cold",
    "chinese": "寒冷的"
  },
  {
    "num": 107,
    "english": "color",
    "chinese": "色彩"
  },
  {
    "num": 108,
    "english": "come",
    "chinese": "來"
  },
  {
    "num": 109,
    "english": "common",
    "chinese": "共同的"
  },
  {
    "num": 110,
    "english": "cook",
    "chinese": "烹飪/廚師"
  },
  {
    "num": 111,
    "english": "cool",
    "chinese": "涼爽的"
  },
  {
    "num": 112,
    "english": "copy",
    "chinese": "抄寫"
  },
  {
    "num": 113,
    "english": "corner",
    "chinese": "角落"
  },
  {
    "num": 114,
    "english": "correct",
    "chinese": "正確的"
  },
  {
    "num": 115,
    "english": "cost",
    "chinese": "花費(時間金錢)"
  },
  {
    "num": 116,
    "english": "couch",
    "chinese": "沙發"
  },
  {
    "num": 117,
    "english": "country",
    "chinese": "鄉村/國家"
  },
  {
    "num": 118,
    "english": "cow",
    "chinese": "母牛"
  },
  {
    "num": 119,
    "english": "crazy",
    "chinese": "瘋狂的"
  },
  {
    "num": 120,
    "english": "cry",
    "chinese": "喊叫/哭"
  },
  {
    "num": 121,
    "english": "cup",
    "chinese": "茶杯"
  },
  {
    "num": 122,
    "english": "cut",
    "chinese": "切"
  },
  {
    "num": 123,
    "english": "cute",
    "chinese": "可愛的"
  },
  {
    "num": 124,
    "english": "dance",
    "chinese": "跳舞"
  },
  {
    "num": 125,
    "english": "dark",
    "chinese": "黑暗的"
  },
  {
    "num": 126,
    "english": "date",
    "chinese": "日期"
  },
  {
    "num": 127,
    "english": "day",
    "chinese": "日子"
  },
  {
    "num": 128,
    "english": "desk",
    "chinese": "書桌"
  },
  {
    "num": 129,
    "english": "dig",
    "chinese": "挖掘"
  },
  {
    "num": 130,
    "english": "dinner",
    "chinese": "晚餐"
  },
  {
    "num": 131,
    "english": "dirty",
    "chinese": "骯髒的"
  },
  {
    "num": 132,
    "english": "dish",
    "chinese": "盤子"
  },
  {
    "num": 133,
    "english": "do",
    "chinese": "做"
  },
  {
    "num": 134,
    "english": "doctor",
    "chinese": "醫生"
  },
  {
    "num": 135,
    "english": "dog",
    "chinese": "狗"
  },
  {
    "num": 136,
    "english": "doll",
    "chinese": "洋娃娃"
  },
  {
    "num": 137,
    "english": "dollar",
    "chinese": "元"
  },
  {
    "num": 138,
    "english": "door",
    "chinese": "門"
  },
  {
    "num": 139,
    "english": "dot",
    "chinese": "點"
  },
  {
    "num": 140,
    "english": "down",
    "chinese": "向下"
  },
  {
    "num": 141,
    "english": "draw",
    "chinese": "畫"
  },
  {
    "num": 142,
    "english": "dress",
    "chinese": "洋裝"
  },
  {
    "num": 143,
    "english": "drink",
    "chinese": "喝"
  },
  {
    "num": 144,
    "english": "dry",
    "chinese": "乾的"
  },
  {
    "num": 145,
    "english": "duck",
    "chinese": "鴨"
  },
  {
    "num": 146,
    "english": "dumpling",
    "chinese": "餃子"
  },
  {
    "num": 147,
    "english": "during",
    "chinese": "在..期間"
  },
  {
    "num": 148,
    "english": "e-mail",
    "chinese": "電子郵件"
  },
  {
    "num": 149,
    "english": "each",
    "chinese": "每個"
  },
  {
    "num": 150,
    "english": "ear",
    "chinese": "耳朵"
  },
  {
    "num": 151,
    "english": "east",
    "chinese": "東方"
  },
  {
    "num": 152,
    "english": "easy",
    "chinese": "容易的"
  },
  {
    "num": 153,
    "english": "eat",
    "chinese": "吃"
  },
  {
    "num": 154,
    "english": "egg",
    "chinese": "蛋"
  },
  {
    "num": 155,
    "english": "eight",
    "chinese": "八"
  },
  {
    "num": 156,
    "english": "eighteen",
    "chinese": "十八"
  },
  {
    "num": 157,
    "english": "eighth",
    "chinese": "第八"
  },
  {
    "num": 158,
    "english": "eighty",
    "chinese": "八十"
  },
  {
    "num": 159,
    "english": "elephant",
    "chinese": "大象"
  },
  {
    "num": 160,
    "english": "else",
    "chinese": "其他的"
  },
  {
    "num": 161,
    "english": "end",
    "chinese": "結束"
  },
  {
    "num": 162,
    "english": "enjoy",
    "chinese": "喜愛"
  },
  {
    "num": 163,
    "english": "enough",
    "chinese": "足夠的"
  },
  {
    "num": 164,
    "english": "enter",
    "chinese": "進入"
  },
  {
    "num": 165,
    "english": "eraser",
    "chinese": "橡皮擦"
  },
  {
    "num": 166,
    "english": "eve",
    "chinese": "前夕"
  },
  {
    "num": 167,
    "english": "even",
    "chinese": "甚至"
  },
  {
    "num": 168,
    "english": "every",
    "chinese": "每一個"
  },
  {
    "num": 169,
    "english": "everyone",
    "chinese": "每一個人"
  },
  {
    "num": 170,
    "english": "everything",
    "chinese": "每件事"
  },
  {
    "num": 171,
    "english": "excellent",
    "chinese": "極好的"
  },
  {
    "num": 172,
    "english": "except",
    "chinese": "除了..之外"
  },
  {
    "num": 173,
    "english": "excited",
    "chinese": "感興奮的"
  },
  {
    "num": 174,
    "english": "exciting",
    "chinese": "令人興奮的"
  },
  {
    "num": 175,
    "english": "excuse",
    "chinese": "藉口"
  },
  {
    "num": 176,
    "english": "eye",
    "chinese": "眼睛"
  },
  {
    "num": 177,
    "english": "face",
    "chinese": "臉孔"
  },
  {
    "num": 178,
    "english": "fan",
    "chinese": "迷/崇拜者"
  },
  {
    "num": 179,
    "english": "farm",
    "chinese": "農場"
  },
  {
    "num": 180,
    "english": "fast",
    "chinese": "快的"
  },
  {
    "num": 181,
    "english": "fat",
    "chinese": "胖的"
  },
  {
    "num": 182,
    "english": "father",
    "chinese": "父親"
  },
  {
    "num": 183,
    "english": "feel",
    "chinese": "覺得"
  },
  {
    "num": 184,
    "english": "festival",
    "chinese": "節慶"
  },
  {
    "num": 185,
    "english": "fill",
    "chinese": "裝滿"
  },
  {
    "num": 186,
    "english": "finally",
    "chinese": "最後"
  },
  {
    "num": 187,
    "english": "find",
    "chinese": "找到"
  },
  {
    "num": 188,
    "english": "fine",
    "chinese": "很好的"
  },
  {
    "num": 189,
    "english": "fire",
    "chinese": "火"
  },
  {
    "num": 190,
    "english": "first",
    "chinese": "第一"
  },
  {
    "num": 191,
    "english": "fish",
    "chinese": "魚"
  },
  {
    "num": 192,
    "english": "five",
    "chinese": "五"
  },
  {
    "num": 193,
    "english": "floor",
    "chinese": "地板"
  },
  {
    "num": 194,
    "english": "flower",
    "chinese": "花朵"
  },
  {
    "num": 195,
    "english": "fly",
    "chinese": "飛"
  },
  {
    "num": 196,
    "english": "follow",
    "chinese": "遵循"
  },
  {
    "num": 197,
    "english": "food",
    "chinese": "食物"
  },
  {
    "num": 198,
    "english": "foot",
    "chinese": "腳"
  },
  {
    "num": 199,
    "english": "foreign",
    "chinese": "外國的"
  },
  {
    "num": 200,
    "english": "foreigner",
    "chinese": "外國人"
  },
  {
    "num": 201,
    "english": "four",
    "chinese": "四"
  },
  {
    "num": 202,
    "english": "fox",
    "chinese": "狐狸"
  },
  {
    "num": 203,
    "english": "free",
    "chinese": "自由的/免費的"
  },
  {
    "num": 204,
    "english": "French fries",
    "chinese": "薯條"
  },
  {
    "num": 205,
    "english": "friend",
    "chinese": "朋友"
  },
  {
    "num": 206,
    "english": "friendly",
    "chinese": "友善的"
  },
  {
    "num": 207,
    "english": "frog",
    "chinese": "青蛙"
  },
  {
    "num": 208,
    "english": "from",
    "chinese": "從"
  },
  {
    "num": 209,
    "english": "front",
    "chinese": "前面"
  },
  {
    "num": 210,
    "english": "fruit",
    "chinese": "水果"
  },
  {
    "num": 211,
    "english": "fry",
    "chinese": "油炸"
  },
  {
    "num": 212,
    "english": "full",
    "chinese": "滿的"
  },
  {
    "num": 213,
    "english": "fun",
    "chinese": "樂趣"
  },
  {
    "num": 214,
    "english": "funny",
    "chinese": "好笑的"
  },
  {
    "num": 215,
    "english": "future",
    "chinese": "未來"
  },
  {
    "num": 216,
    "english": "game",
    "chinese": "比賽"
  },
  {
    "num": 217,
    "english": "garbage",
    "chinese": "垃圾"
  },
  {
    "num": 218,
    "english": "garden",
    "chinese": "花園"
  },
  {
    "num": 219,
    "english": "gas",
    "chinese": "瓦斯"
  },
  {
    "num": 220,
    "english": "get",
    "chinese": "得到"
  },
  {
    "num": 221,
    "english": "gift",
    "chinese": "禮物"
  },
  {
    "num": 222,
    "english": "girl",
    "chinese": "女孩"
  },
  {
    "num": 223,
    "english": "give",
    "chinese": "給予"
  },
  {
    "num": 224,
    "english": "glass",
    "chinese": "玻璃杯"
  },
  {
    "num": 225,
    "english": "glasses",
    "chinese": "眼鏡"
  },
  {
    "num": 226,
    "english": "glue",
    "chinese": "膠水"
  },
  {
    "num": 227,
    "english": "go",
    "chinese": "去"
  },
  {
    "num": 228,
    "english": "good",
    "chinese": "好的"
  },
  {
    "num": 229,
    "english": "grandfather",
    "chinese": "爺爺祖父"
  },
  {
    "num": 230,
    "english": "grandmother",
    "chinese": "奶奶祖母"
  },
  {
    "num": 231,
    "english": "grape",
    "chinese": "葡萄"
  },
  {
    "num": 232,
    "english": "grass",
    "chinese": "草"
  },
  {
    "num": 233,
    "english": "gray",
    "chinese": "灰色(的)"
  },
  {
    "num": 234,
    "english": "great",
    "chinese": "很棒的"
  },
  {
    "num": 235,
    "english": "green",
    "chinese": "綠色(的)"
  },
  {
    "num": 236,
    "english": "guy",
    "chinese": "傢伙"
  },
  {
    "num": 237,
    "english": "gym",
    "chinese": "體育館"
  },
  {
    "num": 238,
    "english": "habit",
    "chinese": "習慣"
  },
  {
    "num": 239,
    "english": "hair",
    "chinese": "頭髮"
  },
  {
    "num": 240,
    "english": "ham",
    "chinese": "火腿"
  },
  {
    "num": 241,
    "english": "hand",
    "chinese": "手"
  },
  {
    "num": 242,
    "english": "handle",
    "chinese": "處理"
  },
  {
    "num": 243,
    "english": "handsome",
    "chinese": "英俊的"
  },
  {
    "num": 244,
    "english": "happy",
    "chinese": "快樂的"
  },
  {
    "num": 245,
    "english": "hat",
    "chinese": "帽子"
  },
  {
    "num": 246,
    "english": "hate",
    "chinese": "討厭"
  },
  {
    "num": 247,
    "english": "have",
    "chinese": "有"
  },
  {
    "num": 248,
    "english": "he",
    "chinese": "他"
  },
  {
    "num": 249,
    "english": "head",
    "chinese": "頭"
  },
  {
    "num": 250,
    "english": "health",
    "chinese": "健康"
  },
  {
    "num": 251,
    "english": "healthy",
    "chinese": "健康的"
  },
  {
    "num": 252,
    "english": "hear",
    "chinese": "聽"
  },
  {
    "num": 253,
    "english": "hello",
    "chinese": "您好(打招呼)"
  },
  {
    "num": 254,
    "english": "help",
    "chinese": "幫忙"
  },
  {
    "num": 255,
    "english": "helpful",
    "chinese": "有幫助的"
  },
  {
    "num": 256,
    "english": "hen",
    "chinese": "母雞"
  },
  {
    "num": 257,
    "english": "here",
    "chinese": "這裡"
  },
  {
    "num": 258,
    "english": "hey",
    "chinese": "嘿"
  },
  {
    "num": 259,
    "english": "hi",
    "chinese": "嗨"
  },
  {
    "num": 260,
    "english": "hill",
    "chinese": "山丘"
  },
  {
    "num": 261,
    "english": "hippo",
    "chinese": "河馬"
  },
  {
    "num": 262,
    "english": "hit",
    "chinese": "打擊"
  },
  {
    "num": 263,
    "english": "hobby",
    "chinese": "嗜好"
  },
  {
    "num": 264,
    "english": "home",
    "chinese": "家"
  },
  {
    "num": 265,
    "english": "honey",
    "chinese": "蜂蜜"
  },
  {
    "num": 266,
    "english": "hop",
    "chinese": "(單腳)跳"
  },
  {
    "num": 267,
    "english": "hope",
    "chinese": "希望"
  },
  {
    "num": 268,
    "english": "horse",
    "chinese": "馬"
  },
  {
    "num": 269,
    "english": "hospital",
    "chinese": "醫院"
  },
  {
    "num": 270,
    "english": "hot",
    "chinese": "熱的"
  },
  {
    "num": 271,
    "english": "hot dog",
    "chinese": "熱狗"
  },
  {
    "num": 272,
    "english": "hotel",
    "chinese": "旅社"
  },
  {
    "num": 273,
    "english": "hour",
    "chinese": "小時"
  },
  {
    "num": 274,
    "english": "how",
    "chinese": "如何"
  },
  {
    "num": 275,
    "english": "however",
    "chinese": "然而"
  },
  {
    "num": 276,
    "english": "hundred",
    "chinese": "百"
  },
  {
    "num": 277,
    "english": "hungry",
    "chinese": "飢餓的"
  },
  {
    "num": 278,
    "english": "hunt",
    "chinese": "打獵"
  },
  {
    "num": 279,
    "english": "hurry",
    "chinese": "趕快/匆忙"
  },
  {
    "num": 280,
    "english": "hurt",
    "chinese": "受傷"
  },
  {
    "num": 281,
    "english": "husband",
    "chinese": "丈夫"
  },
  {
    "num": 282,
    "english": "I",
    "chinese": "我"
  },
  {
    "num": 283,
    "english": "ice",
    "chinese": "冰"
  },
  {
    "num": 284,
    "english": "ice cream",
    "chinese": "冰淇淋"
  },
  {
    "num": 285,
    "english": "idea",
    "chinese": "主意"
  },
  {
    "num": 286,
    "english": "if",
    "chinese": "如果"
  },
  {
    "num": 287,
    "english": "important",
    "chinese": "重要的"
  },
  {
    "num": 288,
    "english": "in",
    "chinese": "在..裡面"
  },
  {
    "num": 289,
    "english": "insect",
    "chinese": "昆蟲"
  },
  {
    "num": 290,
    "english": "inside",
    "chinese": "在..內部"
  },
  {
    "num": 291,
    "english": "interest",
    "chinese": "使感興趣"
  },
  {
    "num": 292,
    "english": "interested",
    "chinese": "感興趣的"
  },
  {
    "num": 293,
    "english": "interesting",
    "chinese": "有趣的"
  },
  {
    "num": 294,
    "english": "Internet",
    "chinese": "網路"
  },
  {
    "num": 295,
    "english": "interview",
    "chinese": "訪問"
  },
  {
    "num": 296,
    "english": "into",
    "chinese": "到..之內"
  },
  {
    "num": 297,
    "english": "invite",
    "chinese": "邀請"
  },
  {
    "num": 298,
    "english": "jacket",
    "chinese": "夾克"
  },
  {
    "num": 299,
    "english": "jam",
    "chinese": "果醬"
  },
  {
    "num": 300,
    "english": "job",
    "chinese": "工作"
  },
  {
    "num": 301,
    "english": "jog",
    "chinese": "慢跑"
  },
  {
    "num": 302,
    "english": "join",
    "chinese": "加入"
  },
  {
    "num": 303,
    "english": "joy",
    "chinese": "歡樂"
  },
  {
    "num": 304,
    "english": "juice",
    "chinese": "果汁"
  },
  {
    "num": 305,
    "english": "just",
    "chinese": "只是"
  },
  {
    "num": 306,
    "english": "kangaroo",
    "chinese": "袋鼠"
  },
  {
    "num": 307,
    "english": "keep",
    "chinese": "保持"
  },
  {
    "num": 308,
    "english": "key",
    "chinese": "鑰匙"
  },
  {
    "num": 309,
    "english": "kick",
    "chinese": "踢"
  },
  {
    "num": 310,
    "english": "kid",
    "chinese": "小孩"
  },
  {
    "num": 311,
    "english": "kind",
    "chinese": "種類"
  },
  {
    "num": 312,
    "english": "king",
    "chinese": "國王"
  },
  {
    "num": 313,
    "english": "kiss",
    "chinese": "吻"
  },
  {
    "num": 314,
    "english": "kite",
    "chinese": "風箏"
  },
  {
    "num": 315,
    "english": "knife",
    "chinese": "刀子"
  },
  {
    "num": 316,
    "english": "knock",
    "chinese": "敲"
  },
  {
    "num": 317,
    "english": "know",
    "chinese": "知道"
  },
  {
    "num": 318,
    "english": "knowledge",
    "chinese": "知識"
  },
  {
    "num": 319,
    "english": "koala",
    "chinese": "無尾熊"
  },
  {
    "num": 320,
    "english": "lake",
    "chinese": "湖"
  },
  {
    "num": 321,
    "english": "learn",
    "chinese": "學習"
  },
  {
    "num": 322,
    "english": "lamb",
    "chinese": "羔羊"
  },
  {
    "num": 323,
    "english": "lamp",
    "chinese": "燈"
  },
  {
    "num": 324,
    "english": "land",
    "chinese": "土地"
  },
  {
    "num": 325,
    "english": "language",
    "chinese": "語言"
  },
  {
    "num": 326,
    "english": "lantern",
    "chinese": "燈籠"
  },
  {
    "num": 327,
    "english": "large",
    "chinese": "大的"
  },
  {
    "num": 328,
    "english": "last",
    "chinese": "最後的/上次"
  },
  {
    "num": 329,
    "english": "late",
    "chinese": "晚的"
  },
  {
    "num": 330,
    "english": "lately",
    "chinese": "最近"
  },
  {
    "num": 331,
    "english": "later",
    "chinese": "較晚"
  },
  {
    "num": 332,
    "english": "latest",
    "chinese": "最近的"
  },
  {
    "num": 333,
    "english": "laugh",
    "chinese": "笑"
  },
  {
    "num": 334,
    "english": "lazy",
    "chinese": "懶惰的"
  },
  {
    "num": 335,
    "english": "lead",
    "chinese": "引導"
  },
  {
    "num": 336,
    "english": "leader",
    "chinese": "領導者"
  },
  {
    "num": 337,
    "english": "leg",
    "chinese": "腿"
  },
  {
    "num": 338,
    "english": "lemon",
    "chinese": "檸檬"
  },
  {
    "num": 339,
    "english": "lend",
    "chinese": "借出"
  },
  {
    "num": 340,
    "english": "let",
    "chinese": "讓"
  },
  {
    "num": 341,
    "english": "letter",
    "chinese": "信"
  },
  {
    "num": 342,
    "english": "lid",
    "chinese": "蓋子"
  },
  {
    "num": 343,
    "english": "lie",
    "chinese": "說謊"
  },
  {
    "num": 344,
    "english": "life",
    "chinese": "生活"
  },
  {
    "num": 345,
    "english": "light",
    "chinese": "燈"
  },
  {
    "num": 346,
    "english": "like",
    "chinese": "喜歡"
  },
  {
    "num": 347,
    "english": "likely",
    "chinese": "有可能的"
  },
  {
    "num": 348,
    "english": "line",
    "chinese": "隊伍"
  },
  {
    "num": 349,
    "english": "lion",
    "chinese": "獅子"
  },
  {
    "num": 350,
    "english": "lip",
    "chinese": "嘴唇"
  },
  {
    "num": 351,
    "english": "list",
    "chinese": "清單"
  },
  {
    "num": 352,
    "english": "long",
    "chinese": "長的"
  },
  {
    "num": 353,
    "english": "look",
    "chinese": "看"
  },
  {
    "num": 354,
    "english": "loud",
    "chinese": "大聲的"
  },
  {
    "num": 355,
    "english": "love",
    "chinese": "喜愛"
  },
  {
    "num": 356,
    "english": "lovely",
    "chinese": "可愛的/令人喜愛的"
  },
  {
    "num": 357,
    "english": "low",
    "chinese": "低的"
  },
  {
    "num": 358,
    "english": "lucky",
    "chinese": "幸運的"
  },
  {
    "num": 359,
    "english": "lunch",
    "chinese": "午餐"
  },
  {
    "num": 360,
    "english": "mail",
    "chinese": "信件"
  },
  {
    "num": 361,
    "english": "mailman",
    "chinese": "郵差"
  },
  {
    "num": 362,
    "english": "make",
    "chinese": "製作"
  },
  {
    "num": 363,
    "english": "man",
    "chinese": "男人"
  },
  {
    "num": 364,
    "english": "many",
    "chinese": "許多的"
  },
  {
    "num": 365,
    "english": "map",
    "chinese": "地圖"
  },
  {
    "num": 366,
    "english": "mark",
    "chinese": "做記號"
  },
  {
    "num": 367,
    "english": "marker",
    "chinese": "簽字筆"
  },
  {
    "num": 368,
    "english": "mask",
    "chinese": "面具"
  },
  {
    "num": 369,
    "english": "math",
    "chinese": "數學"
  },
  {
    "num": 370,
    "english": "matter",
    "chinese": "事情"
  },
  {
    "num": 371,
    "english": "maybe",
    "chinese": "也許"
  },
  {
    "num": 372,
    "english": "meat",
    "chinese": "肉"
  },
  {
    "num": 373,
    "english": "medicine",
    "chinese": "藥"
  },
  {
    "num": 374,
    "english": "medium",
    "chinese": "中等的"
  },
  {
    "num": 375,
    "english": "meet",
    "chinese": "遇見"
  },
  {
    "num": 376,
    "english": "meeting",
    "chinese": "會議"
  },
  {
    "num": 377,
    "english": "milk",
    "chinese": "牛奶"
  },
  {
    "num": 378,
    "english": "mistake",
    "chinese": "錯誤"
  },
  {
    "num": 379,
    "english": "modern",
    "chinese": "現代化的"
  },
  {
    "num": 380,
    "english": "moment",
    "chinese": "片刻"
  },
  {
    "num": 381,
    "english": "monkey",
    "chinese": "猴子"
  },
  {
    "num": 382,
    "english": "moon",
    "chinese": "月亮"
  },
  {
    "num": 383,
    "english": "more",
    "chinese": "更多的"
  },
  {
    "num": 384,
    "english": "mouse",
    "chinese": "老鼠"
  },
  {
    "num": 385,
    "english": "mouth",
    "chinese": "嘴巴"
  },
  {
    "num": 386,
    "english": "movie",
    "chinese": "電影"
  },
  {
    "num": 387,
    "english": "Mr.",
    "chinese": "先生"
  },
  {
    "num": 388,
    "english": "Mrs.",
    "chinese": "太太"
  },
  {
    "num": 389,
    "english": "MRT",
    "chinese": "捷運"
  },
  {
    "num": 390,
    "english": "Ms.",
    "chinese": "女士"
  },
  {
    "num": 391,
    "english": "mud",
    "chinese": "泥"
  },
  {
    "num": 392,
    "english": "museum",
    "chinese": "博物館"
  },
  {
    "num": 393,
    "english": "music",
    "chinese": "音樂"
  },
  {
    "num": 394,
    "english": "must",
    "chinese": "必須"
  },
  {
    "num": 395,
    "english": "nail",
    "chinese": "釘子"
  },
  {
    "num": 396,
    "english": "name",
    "chinese": "名字"
  },
  {
    "num": 397,
    "english": "national",
    "chinese": "國家的"
  },
  {
    "num": 398,
    "english": "near",
    "chinese": "在..附近"
  },
  {
    "num": 399,
    "english": "neck",
    "chinese": "脖子"
  },
  {
    "num": 400,
    "english": "need",
    "chinese": "需要"
  },
  {
    "num": 401,
    "english": "neighbor",
    "chinese": "鄰居"
  },
  {
    "num": 402,
    "english": "never",
    "chinese": "從不"
  },
  {
    "num": 403,
    "english": "new",
    "chinese": "新的"
  },
  {
    "num": 404,
    "english": "next",
    "chinese": "接下去的"
  },
  {
    "num": 405,
    "english": "nice",
    "chinese": "好的"
  },
  {
    "num": 406,
    "english": "night",
    "chinese": "晚上"
  },
  {
    "num": 407,
    "english": "nine",
    "chinese": "九"
  },
  {
    "num": 408,
    "english": "nineteen",
    "chinese": "十九"
  },
  {
    "num": 409,
    "english": "nineteenth",
    "chinese": "第十九"
  },
  {
    "num": 410,
    "english": "ninety",
    "chinese": "九十"
  },
  {
    "num": 411,
    "english": "ninth",
    "chinese": "第九"
  },
  {
    "num": 412,
    "english": "no",
    "chinese": "沒有"
  },
  {
    "num": 413,
    "english": "nobody",
    "chinese": "無人/小人物"
  },
  {
    "num": 414,
    "english": "nod",
    "chinese": "點頭"
  },
  {
    "num": 415,
    "english": "noise",
    "chinese": "噪音"
  },
  {
    "num": 416,
    "english": "noodle",
    "chinese": "麵條"
  },
  {
    "num": 417,
    "english": "noon",
    "chinese": "中午"
  },
  {
    "num": 418,
    "english": "nose",
    "chinese": "鼻子"
  },
  {
    "num": 419,
    "english": "not",
    "chinese": "不"
  },
  {
    "num": 420,
    "english": "note",
    "chinese": "筆記"
  },
  {
    "num": 421,
    "english": "notebook",
    "chinese": "筆記本"
  },
  {
    "num": 422,
    "english": "notice",
    "chinese": "注意到"
  },
  {
    "num": 423,
    "english": "now",
    "chinese": "現在"
  },
  {
    "num": 424,
    "english": "oil",
    "chinese": "油"
  },
  {
    "num": 425,
    "english": "old",
    "chinese": "老的"
  },
  {
    "num": 426,
    "english": "one",
    "chinese": "一"
  },
  {
    "num": 427,
    "english": "open",
    "chinese": "打開"
  },
  {
    "num": 428,
    "english": "orange",
    "chinese": "柳橙"
  },
  {
    "num": 429,
    "english": "order",
    "chinese": "點餐"
  },
  {
    "num": 430,
    "english": "out",
    "chinese": "在外"
  },
  {
    "num": 431,
    "english": "over",
    "chinese": "結束"
  },
  {
    "num": 432,
    "english": "own",
    "chinese": "自己的"
  },
  {
    "num": 433,
    "english": "ox",
    "chinese": "公牛"
  },
  {
    "num": 434,
    "english": "pack",
    "chinese": "包"
  },
  {
    "num": 435,
    "english": "page",
    "chinese": "頁"
  },
  {
    "num": 436,
    "english": "papaya",
    "chinese": "木瓜"
  },
  {
    "num": 437,
    "english": "paper",
    "chinese": "紙"
  },
  {
    "num": 438,
    "english": "park",
    "chinese": "公園"
  },
  {
    "num": 439,
    "english": "part",
    "chinese": "部分"
  },
  {
    "num": 440,
    "english": "party",
    "chinese": "派對"
  },
  {
    "num": 441,
    "english": "pass",
    "chinese": "通過"
  },
  {
    "num": 442,
    "english": "peach",
    "chinese": "桃子"
  },
  {
    "num": 443,
    "english": "pear",
    "chinese": "梨子"
  },
  {
    "num": 444,
    "english": "pen",
    "chinese": "筆"
  },
  {
    "num": 445,
    "english": "pencil",
    "chinese": "鉛筆"
  },
  {
    "num": 446,
    "english": "perhaps",
    "chinese": "或許"
  },
  {
    "num": 447,
    "english": "person",
    "chinese": "人"
  },
  {
    "num": 448,
    "english": "pet",
    "chinese": "寵物"
  },
  {
    "num": 449,
    "english": "photo",
    "chinese": "相片"
  },
  {
    "num": 450,
    "english": "pie",
    "chinese": "派"
  },
  {
    "num": 451,
    "english": "pig",
    "chinese": "豬"
  },
  {
    "num": 452,
    "english": "pin",
    "chinese": "大頭針"
  },
  {
    "num": 453,
    "english": "pink",
    "chinese": "粉紅色(的)"
  },
  {
    "num": 454,
    "english": "pipe",
    "chinese": "管子"
  },
  {
    "num": 455,
    "english": "pizza",
    "chinese": "披薩"
  },
  {
    "num": 456,
    "english": "place",
    "chinese": "地方"
  },
  {
    "num": 457,
    "english": "plan",
    "chinese": "計畫"
  },
  {
    "num": 458,
    "english": "play",
    "chinese": "玩"
  },
  {
    "num": 459,
    "english": "player",
    "chinese": "選手"
  },
  {
    "num": 460,
    "english": "please",
    "chinese": "請"
  },
  {
    "num": 461,
    "english": "point",
    "chinese": "指著"
  },
  {
    "num": 462,
    "english": "pool",
    "chinese": "游泳池/池子"
  },
  {
    "num": 463,
    "english": "popcorn",
    "chinese": "爆米花"
  },
  {
    "num": 464,
    "english": "pork",
    "chinese": "豬肉"
  },
  {
    "num": 465,
    "english": "pot",
    "chinese": "罐"
  },
  {
    "num": 466,
    "english": "pray",
    "chinese": "祈禱"
  },
  {
    "num": 467,
    "english": "pretty",
    "chinese": "漂亮的"
  },
  {
    "num": 468,
    "english": "problem",
    "chinese": "問題"
  },
  {
    "num": 469,
    "english": "pull",
    "chinese": "拉"
  },
  {
    "num": 470,
    "english": "purple",
    "chinese": "紫色的"
  },
  {
    "num": 471,
    "english": "push",
    "chinese": "推"
  },
  {
    "num": 472,
    "english": "put",
    "chinese": "放"
  },
  {
    "num": 473,
    "english": "queen",
    "chinese": "皇后"
  },
  {
    "num": 474,
    "english": "quick",
    "chinese": "迅速的"
  },
  {
    "num": 475,
    "english": "quiet",
    "chinese": "安靜的"
  },
  {
    "num": 476,
    "english": "quiz",
    "chinese": "小考"
  },
  {
    "num": 477,
    "english": "rabbit",
    "chinese": "兔子"
  },
  {
    "num": 478,
    "english": "race",
    "chinese": "賽跑"
  },
  {
    "num": 479,
    "english": "radio",
    "chinese": "收音機"
  },
  {
    "num": 480,
    "english": "railroad",
    "chinese": "鐵路"
  },
  {
    "num": 481,
    "english": "rain",
    "chinese": "下雨"
  },
  {
    "num": 482,
    "english": "rainbow",
    "chinese": "彩虹"
  },
  {
    "num": 483,
    "english": "rainy",
    "chinese": "下雨的"
  },
  {
    "num": 484,
    "english": "rat",
    "chinese": "老鼠"
  },
  {
    "num": 485,
    "english": "read",
    "chinese": "讀"
  },
  {
    "num": 486,
    "english": "ready",
    "chinese": "準備好的"
  },
  {
    "num": 487,
    "english": "red",
    "chinese": "紅色(的)"
  },
  {
    "num": 488,
    "english": "repeat",
    "chinese": "重複"
  },
  {
    "num": 489,
    "english": "rest",
    "chinese": "休息"
  },
  {
    "num": 490,
    "english": "restroom",
    "chinese": "洗手間"
  },
  {
    "num": 491,
    "english": "rice",
    "chinese": "米飯"
  },
  {
    "num": 492,
    "english": "rich",
    "chinese": "富有的"
  },
  {
    "num": 493,
    "english": "ride",
    "chinese": "騎"
  },
  {
    "num": 494,
    "english": "right",
    "chinese": "右方"
  },
  {
    "num": 495,
    "english": "ring",
    "chinese": "戒指"
  },
  {
    "num": 496,
    "english": "road",
    "chinese": "道路"
  },
  {
    "num": 497,
    "english": "rock",
    "chinese": "岩石"
  },
  {
    "num": 498,
    "english": "roll",
    "chinese": "滾動"
  },
  {
    "num": 499,
    "english": "roller-skate",
    "chinese": "溜冰"
  },
  {
    "num": 500,
    "english": "room",
    "chinese": "房間"
  },
  {
    "num": 501,
    "english": "rooster",
    "chinese": "公雞"
  },
  {
    "num": 502,
    "english": "rope",
    "chinese": "繩子"
  },
  {
    "num": 503,
    "english": "rose",
    "chinese": "玫瑰"
  },
  {
    "num": 504,
    "english": "round",
    "chinese": "圓形的"
  },
  {
    "num": 505,
    "english": "row",
    "chinese": "划(船)"
  },
  {
    "num": 506,
    "english": "rule",
    "chinese": "規則"
  },
  {
    "num": 507,
    "english": "ruler",
    "chinese": "尺"
  },
  {
    "num": 508,
    "english": "run",
    "chinese": "跑"
  },
  {
    "num": 509,
    "english": "sad",
    "chinese": "悲傷的"
  },
  {
    "num": 510,
    "english": "safe",
    "chinese": "安全的"
  },
  {
    "num": 511,
    "english": "salad",
    "chinese": "沙拉"
  },
  {
    "num": 512,
    "english": "salt",
    "chinese": "鹽"
  },
  {
    "num": 513,
    "english": "same",
    "chinese": "相同的"
  },
  {
    "num": 514,
    "english": "sandwich",
    "chinese": "三明治"
  },
  {
    "num": 515,
    "english": "say",
    "chinese": "說"
  },
  {
    "num": 516,
    "english": "school",
    "chinese": "學校"
  },
  {
    "num": 517,
    "english": "sea",
    "chinese": "海"
  },
  {
    "num": 518,
    "english": "seat",
    "chinese": "座位"
  },
  {
    "num": 519,
    "english": "see",
    "chinese": "看"
  },
  {
    "num": 520,
    "english": "seed",
    "chinese": "種子"
  },
  {
    "num": 521,
    "english": "seem",
    "chinese": "似乎/好像"
  },
  {
    "num": 522,
    "english": "sell",
    "chinese": "賣"
  },
  {
    "num": 523,
    "english": "seven",
    "chinese": "七"
  },
  {
    "num": 524,
    "english": "shake",
    "chinese": "搖動"
  },
  {
    "num": 525,
    "english": "shape",
    "chinese": "形狀"
  },
  {
    "num": 526,
    "english": "share",
    "chinese": "分享"
  },
  {
    "num": 527,
    "english": "shark",
    "chinese": "鯊魚"
  },
  {
    "num": 528,
    "english": "she",
    "chinese": "她"
  },
  {
    "num": 529,
    "english": "sheep",
    "chinese": "綿羊"
  },
  {
    "num": 530,
    "english": "ship",
    "chinese": "船"
  },
  {
    "num": 531,
    "english": "shirt",
    "chinese": "襯衫"
  },
  {
    "num": 532,
    "english": "shoe",
    "chinese": "鞋子"
  },
  {
    "num": 533,
    "english": "shop",
    "chinese": "商店"
  },
  {
    "num": 534,
    "english": "short",
    "chinese": "短的"
  },
  {
    "num": 535,
    "english": "shoulder",
    "chinese": "肩膀"
  },
  {
    "num": 536,
    "english": "shout",
    "chinese": "喊叫"
  },
  {
    "num": 537,
    "english": "show",
    "chinese": "給..看/出示"
  },
  {
    "num": 538,
    "english": "shy",
    "chinese": "害羞的"
  },
  {
    "num": 539,
    "english": "sick",
    "chinese": "生病的"
  },
  {
    "num": 540,
    "english": "sin",
    "chinese": "罪惡"
  },
  {
    "num": 541,
    "english": "sing",
    "chinese": "唱歌"
  },
  {
    "num": 542,
    "english": "singer",
    "chinese": "歌手"
  },
  {
    "num": 543,
    "english": "sister",
    "chinese": "姊妹"
  },
  {
    "num": 544,
    "english": "sit",
    "chinese": "坐"
  },
  {
    "num": 545,
    "english": "six",
    "chinese": "六"
  },
  {
    "num": 546,
    "english": "snake",
    "chinese": "蛇"
  },
  {
    "num": 547,
    "english": "some",
    "chinese": "一些"
  },
  {
    "num": 548,
    "english": "someone",
    "chinese": "某人"
  },
  {
    "num": 549,
    "english": "something",
    "chinese": "某事"
  },
  {
    "num": 550,
    "english": "sometimes",
    "chinese": "有時候"
  },
  {
    "num": 551,
    "english": "somewhere",
    "chinese": "某處"
  },
  {
    "num": 552,
    "english": "star",
    "chinese": "星星"
  },
  {
    "num": 553,
    "english": "stop",
    "chinese": "停止"
  },
  {
    "num": 554,
    "english": "store",
    "chinese": "商店"
  },
  {
    "num": 555,
    "english": "story",
    "chinese": "故事"
  },
  {
    "num": 556,
    "english": "straight",
    "chinese": "直的"
  },
  {
    "num": 557,
    "english": "street",
    "chinese": "街道"
  },
  {
    "num": 558,
    "english": "strong",
    "chinese": "強壯的"
  },
  {
    "num": 559,
    "english": "student",
    "chinese": "學生"
  },
  {
    "num": 560,
    "english": "study",
    "chinese": "唸書"
  },
  {
    "num": 561,
    "english": "stupid",
    "chinese": "愚笨的"
  },
  {
    "num": 562,
    "english": "sugar",
    "chinese": "糖"
  },
  {
    "num": 563,
    "english": "summer",
    "chinese": "夏天"
  },
  {
    "num": 564,
    "english": "sun",
    "chinese": "太陽"
  },
  {
    "num": 565,
    "english": "sunny",
    "chinese": "晴朗的"
  },
  {
    "num": 566,
    "english": "sweater",
    "chinese": "毛衣"
  },
  {
    "num": 567,
    "english": "sweet",
    "chinese": "甜的"
  },
  {
    "num": 568,
    "english": "swim",
    "chinese": "游泳"
  },
  {
    "num": 569,
    "english": "T-shirt",
    "chinese": "短袖汗衫"
  },
  {
    "num": 570,
    "english": "tail",
    "chinese": "尾巴"
  },
  {
    "num": 571,
    "english": "Taiwan",
    "chinese": "臺灣"
  },
  {
    "num": 572,
    "english": "take",
    "chinese": "拿"
  },
  {
    "num": 573,
    "english": "talk",
    "chinese": "講話"
  },
  {
    "num": 574,
    "english": "tall",
    "chinese": "高的"
  },
  {
    "num": 575,
    "english": "taste",
    "chinese": "品嚐"
  },
  {
    "num": 576,
    "english": "taxi",
    "chinese": "計程車"
  },
  {
    "num": 577,
    "english": "tea",
    "chinese": "茶"
  },
  {
    "num": 578,
    "english": "teach",
    "chinese": "教"
  },
  {
    "num": 579,
    "english": "teacher",
    "chinese": "教師"
  },
  {
    "num": 580,
    "english": "team",
    "chinese": "團隊"
  },
  {
    "num": 581,
    "english": "tell",
    "chinese": "告訴"
  },
  {
    "num": 582,
    "english": "ten",
    "chinese": "十"
  },
  {
    "num": 583,
    "english": "tennis",
    "chinese": "網球"
  },
  {
    "num": 584,
    "english": "test",
    "chinese": "考試"
  },
  {
    "num": 585,
    "english": "than",
    "chinese": "比.."
  },
  {
    "num": 586,
    "english": "thank",
    "chinese": "謝謝"
  },
  {
    "num": 587,
    "english": "that",
    "chinese": "那個"
  },
  {
    "num": 588,
    "english": "the",
    "chinese": "這/那"
  },
  {
    "num": 589,
    "english": "then",
    "chinese": "那時"
  },
  {
    "num": 590,
    "english": "there",
    "chinese": "那裡"
  },
  {
    "num": 591,
    "english": "these",
    "chinese": "這些"
  },
  {
    "num": 592,
    "english": "they",
    "chinese": "他們"
  },
  {
    "num": 593,
    "english": "thick",
    "chinese": "厚的"
  },
  {
    "num": 594,
    "english": "thin",
    "chinese": "瘦的"
  },
  {
    "num": 595,
    "english": "thing",
    "chinese": "事情"
  },
  {
    "num": 596,
    "english": "think",
    "chinese": "思考"
  },
  {
    "num": 597,
    "english": "this",
    "chinese": "這個"
  },
  {
    "num": 598,
    "english": "three",
    "chinese": "三"
  },
  {
    "num": 599,
    "english": "throat",
    "chinese": "喉嚨"
  },
  {
    "num": 600,
    "english": "throw",
    "chinese": "丟"
  },
  {
    "num": 601,
    "english": "ticket",
    "chinese": "票"
  },
  {
    "num": 602,
    "english": "tidy",
    "chinese": "整潔的"
  },
  {
    "num": 603,
    "english": "tie",
    "chinese": "n. 領帶 v.綁"
  },
  {
    "num": 604,
    "english": "tiger",
    "chinese": "老虎"
  },
  {
    "num": 605,
    "english": "toast",
    "chinese": "吐司"
  },
  {
    "num": 606,
    "english": "today",
    "chinese": "今天"
  },
  {
    "num": 607,
    "english": "toe",
    "chinese": "腳趾"
  },
  {
    "num": 608,
    "english": "tooth",
    "chinese": "牙齒"
  },
  {
    "num": 609,
    "english": "top",
    "chinese": "頂部"
  },
  {
    "num": 610,
    "english": "total",
    "chinese": "總計"
  },
  {
    "num": 611,
    "english": "toy",
    "chinese": "玩具"
  },
  {
    "num": 612,
    "english": "train",
    "chinese": "火車"
  },
  {
    "num": 613,
    "english": "tree",
    "chinese": "樹"
  },
  {
    "num": 614,
    "english": "trick",
    "chinese": "詭計"
  },
  {
    "num": 615,
    "english": "trip",
    "chinese": "旅行"
  },
  {
    "num": 616,
    "english": "trouble",
    "chinese": "麻煩"
  },
  {
    "num": 617,
    "english": "truck",
    "chinese": "卡車"
  },
  {
    "num": 618,
    "english": "true",
    "chinese": "真實的"
  },
  {
    "num": 619,
    "english": "try",
    "chinese": "嘗試"
  },
  {
    "num": 620,
    "english": "tub",
    "chinese": "浴缸"
  },
  {
    "num": 621,
    "english": "turbo",
    "chinese": "渦輪"
  },
  {
    "num": 622,
    "english": "turkey",
    "chinese": "火雞"
  },
  {
    "num": 623,
    "english": "turn",
    "chinese": "轉動"
  },
  {
    "num": 624,
    "english": "turtle",
    "chinese": "烏龜"
  },
  {
    "num": 625,
    "english": "twice",
    "chinese": "兩次"
  },
  {
    "num": 626,
    "english": "two",
    "chinese": "二"
  },
  {
    "num": 627,
    "english": "type",
    "chinese": "打字"
  },
  {
    "num": 628,
    "english": "typhoon",
    "chinese": "颱風"
  },
  {
    "num": 629,
    "english": "umbrella",
    "chinese": "雨傘"
  },
  {
    "num": 630,
    "english": "uncle",
    "chinese": "伯(叔)"
  },
  {
    "num": 631,
    "english": "under",
    "chinese": "在..之下"
  },
  {
    "num": 632,
    "english": "unhappy",
    "chinese": "不快樂的"
  },
  {
    "num": 633,
    "english": "uniform",
    "chinese": "制服"
  },
  {
    "num": 634,
    "english": "until",
    "chinese": "直到"
  },
  {
    "num": 635,
    "english": "up",
    "chinese": "向上"
  },
  {
    "num": 636,
    "english": "very",
    "chinese": "非常"
  },
  {
    "num": 637,
    "english": "vest",
    "chinese": "背心"
  },
  {
    "num": 638,
    "english": "video",
    "chinese": "影片"
  },
  {
    "num": 639,
    "english": "violin",
    "chinese": "小提琴"
  },
  {
    "num": 640,
    "english": "voice",
    "chinese": "聲音"
  },
  {
    "num": 641,
    "english": "wait",
    "chinese": "等待"
  },
  {
    "num": 642,
    "english": "waiter",
    "chinese": "男服務生"
  },
  {
    "num": 643,
    "english": "waitress",
    "chinese": "女服務生"
  },
  {
    "num": 644,
    "english": "wake",
    "chinese": "醒來"
  },
  {
    "num": 645,
    "english": "walk",
    "chinese": "走路"
  },
  {
    "num": 646,
    "english": "wall",
    "chinese": "牆壁"
  },
  {
    "num": 647,
    "english": "want",
    "chinese": "想要"
  },
  {
    "num": 648,
    "english": "watch",
    "chinese": "看"
  },
  {
    "num": 649,
    "english": "water",
    "chinese": "水"
  },
  {
    "num": 650,
    "english": "wave",
    "chinese": "波浪"
  },
  {
    "num": 651,
    "english": "way",
    "chinese": "道路"
  },
  {
    "num": 652,
    "english": "we",
    "chinese": "我們"
  },
  {
    "num": 653,
    "english": "weak",
    "chinese": "弱的"
  },
  {
    "num": 654,
    "english": "wear",
    "chinese": "穿戴"
  },
  {
    "num": 655,
    "english": "weather",
    "chinese": "天氣"
  },
  {
    "num": 656,
    "english": "week",
    "chinese": "星期"
  },
  {
    "num": 657,
    "english": "weekend",
    "chinese": "週末"
  },
  {
    "num": 658,
    "english": "welcome",
    "chinese": "受歡迎的"
  },
  {
    "num": 659,
    "english": "west",
    "chinese": "西方"
  },
  {
    "num": 660,
    "english": "wet",
    "chinese": "濕的"
  },
  {
    "num": 661,
    "english": "what",
    "chinese": "什麼"
  },
  {
    "num": 662,
    "english": "where",
    "chinese": "在哪裡"
  },
  {
    "num": 663,
    "english": "which",
    "chinese": "哪一個"
  },
  {
    "num": 664,
    "english": "white",
    "chinese": "白色(的)"
  },
  {
    "num": 665,
    "english": "who",
    "chinese": "誰"
  },
  {
    "num": 666,
    "english": "whose",
    "chinese": "誰的"
  },
  {
    "num": 667,
    "english": "why",
    "chinese": "為什麼"
  },
  {
    "num": 668,
    "english": "wife",
    "chinese": "妻子"
  },
  {
    "num": 669,
    "english": "will",
    "chinese": "將"
  },
  {
    "num": 670,
    "english": "win",
    "chinese": "贏"
  },
  {
    "num": 671,
    "english": "wind",
    "chinese": "風"
  },
  {
    "num": 672,
    "english": "window",
    "chinese": "窗戶"
  },
  {
    "num": 673,
    "english": "windy",
    "chinese": "風大的"
  },
  {
    "num": 674,
    "english": "wise",
    "chinese": "明智的"
  },
  {
    "num": 675,
    "english": "wish",
    "chinese": "希望"
  },
  {
    "num": 676,
    "english": "with",
    "chinese": "與..一起"
  },
  {
    "num": 677,
    "english": "without",
    "chinese": "沒有"
  },
  {
    "num": 678,
    "english": "woman",
    "chinese": "女人"
  },
  {
    "num": 679,
    "english": "word",
    "chinese": "字"
  },
  {
    "num": 680,
    "english": "work",
    "chinese": "工作"
  },
  {
    "num": 681,
    "english": "workbook",
    "chinese": "練習簿"
  },
  {
    "num": 682,
    "english": "worker",
    "chinese": "工人"
  },
  {
    "num": 683,
    "english": "world",
    "chinese": "世界"
  },
  {
    "num": 684,
    "english": "worry",
    "chinese": "擔心"
  },
  {
    "num": 685,
    "english": "write",
    "chinese": "寫"
  },
  {
    "num": 686,
    "english": "writer",
    "chinese": "作家"
  },
  {
    "num": 687,
    "english": "wrong",
    "chinese": "錯誤的"
  },
  {
    "num": 688,
    "english": "yard",
    "chinese": "庭院"
  },
  {
    "num": 689,
    "english": "year",
    "chinese": "年"
  },
  {
    "num": 690,
    "english": "yellow",
    "chinese": "黃色(的)"
  },
  {
    "num": 691,
    "english": "yes",
    "chinese": "是"
  },
  {
    "num": 692,
    "english": "yesterday",
    "chinese": "昨天"
  },
  {
    "num": 693,
    "english": "yet",
    "chinese": "尚未"
  },
  {
    "num": 694,
    "english": "yo-yo",
    "chinese": "溜溜球"
  },
  {
    "num": 695,
    "english": "you",
    "chinese": "你(們)"
  },
  {
    "num": 696,
    "english": "young",
    "chinese": "年輕的"
  },
  {
    "num": 697,
    "english": "yummy",
    "chinese": "好吃的"
  },
  {
    "num": 698,
    "english": "zebra",
    "chinese": "斑馬"
  },
  {
    "num": 699,
    "english": "zero",
    "chinese": "零"
  },
  {
    "num": 700,
    "english": "zoo",
    "chinese": "動物園"
  },
  {
    "num": 1,
    "english": "a (an)",
    "chinese": "一(個..)"
  },
  {
    "num": 2,
    "english": "a few",
    "chinese": "一些"
  },
  {
    "num": 3,
    "english": "a little",
    "chinese": "一些"
  },
  {
    "num": 4,
    "english": "a lot",
    "chinese": "許多"
  },
  {
    "num": 5,
    "english": "a.m.",
    "chinese": "上午"
  },
  {
    "num": 6,
    "english": "able",
    "chinese": "能夠..的"
  },
  {
    "num": 7,
    "english": "about",
    "chinese": "關於"
  },
  {
    "num": 8,
    "english": "above",
    "chinese": "在..上面"
  },
  {
    "num": 9,
    "english": "abroad",
    "chinese": "在國外"
  },
  {
    "num": 10,
    "english": "absent",
    "chinese": "缺席的"
  },
  {
    "num": 11,
    "english": "accept",
    "chinese": "接受"
  },
  {
    "num": 12,
    "english": "accident",
    "chinese": "意外"
  },
  {
    "num": 13,
    "english": "across",
    "chinese": "在..對面"
  },
  {
    "num": 14,
    "english": "active",
    "chinese": "主動的"
  },
  {
    "num": 15,
    "english": "activity",
    "chinese": "活動"
  },
  {
    "num": 16,
    "english": "actress",
    "chinese": "女演員"
  },
  {
    "num": 17,
    "english": "actually",
    "chinese": "事實上"
  },
  {
    "num": 18,
    "english": "address",
    "chinese": "地址/致詞"
  },
  {
    "num": 19,
    "english": "adult",
    "chinese": "成人"
  },
  {
    "num": 20,
    "english": "advertisement",
    "chinese": "廣告"
  },
  {
    "num": 21,
    "english": "advise",
    "chinese": "建議/勸告 v"
  },
  {
    "num": 22,
    "english": "affect",
    "chinese": "影響"
  },
  {
    "num": 23,
    "english": "afraid",
    "chinese": "害怕的"
  },
  {
    "num": 24,
    "english": "after",
    "chinese": "在..之後"
  },
  {
    "num": 25,
    "english": "afternoon",
    "chinese": "下午"
  },
  {
    "num": 26,
    "english": "again",
    "chinese": "再一次"
  },
  {
    "num": 27,
    "english": "against",
    "chinese": "對抗"
  },
  {
    "num": 28,
    "english": "ago",
    "chinese": "以前"
  },
  {
    "num": 29,
    "english": "agree",
    "chinese": "同意"
  },
  {
    "num": 30,
    "english": "ahead",
    "chinese": "在前方"
  },
  {
    "num": 31,
    "english": "aim",
    "chinese": "目標"
  },
  {
    "num": 32,
    "english": "air conditioner",
    "chinese": "冷氣機"
  },
  {
    "num": 33,
    "english": "airline",
    "chinese": "航空公司"
  },
  {
    "num": 34,
    "english": "airplane",
    "chinese": "飛機"
  },
  {
    "num": 35,
    "english": "airport",
    "chinese": "機場"
  },
  {
    "num": 36,
    "english": "alarm",
    "chinese": "鬧鐘/警告"
  },
  {
    "num": 37,
    "english": "album",
    "chinese": "相簿/唱片"
  },
  {
    "num": 38,
    "english": "alike",
    "chinese": "相同的"
  },
  {
    "num": 39,
    "english": "alive",
    "chinese": "活的/活潑的"
  },
  {
    "num": 40,
    "english": "allow",
    "chinese": "允許"
  },
  {
    "num": 41,
    "english": "along",
    "chinese": "沿著"
  },
  {
    "num": 42,
    "english": "aloud",
    "chinese": "大聲的"
  },
  {
    "num": 43,
    "english": "alphabet",
    "chinese": "字母"
  },
  {
    "num": 44,
    "english": "already",
    "chinese": "已經"
  },
  {
    "num": 45,
    "english": "altogether",
    "chinese": "完全地/全部"
  },
  {
    "num": 46,
    "english": "always",
    "chinese": "總是"
  },
  {
    "num": 47,
    "english": "ambulance",
    "chinese": "救護車"
  },
  {
    "num": 48,
    "english": "among",
    "chinese": "之間(3 者以上)"
  },
  {
    "num": 49,
    "english": "ancient",
    "chinese": "古老的"
  },
  {
    "num": 50,
    "english": "anger",
    "chinese": "生氣"
  },
  {
    "num": 51,
    "english": "ankle",
    "chinese": "腳踝"
  },
  {
    "num": 52,
    "english": "anyone",
    "chinese": "任何人"
  },
  {
    "num": 53,
    "english": "anything",
    "chinese": "任何事物"
  },
  {
    "num": 54,
    "english": "anywhere",
    "chinese": "任何地方"
  },
  {
    "num": 55,
    "english": "apologize",
    "chinese": "道歉"
  },
  {
    "num": 56,
    "english": "appear",
    "chinese": "出現"
  },
  {
    "num": 57,
    "english": "appreciate",
    "chinese": "鑑賞/感激"
  },
  {
    "num": 58,
    "english": "April",
    "chinese": "四月"
  },
  {
    "num": 59,
    "english": "area",
    "chinese": "地區"
  },
  {
    "num": 60,
    "english": "argue",
    "chinese": "辯論/爭論"
  },
  {
    "num": 61,
    "english": "armchair",
    "chinese": "有扶手的椅子"
  },
  {
    "num": 62,
    "english": "arrange",
    "chinese": "整理/配置"
  },
  {
    "num": 63,
    "english": "as",
    "chinese": "與..一樣"
  },
  {
    "num": 64,
    "english": "asleep",
    "chinese": "睡著的/麻木的"
  },
  {
    "num": 65,
    "english": "assistant",
    "chinese": "助理/輔助的"
  },
  {
    "num": 66,
    "english": "assume",
    "chinese": "臆測/假裝"
  },
  {
    "num": 67,
    "english": "August",
    "chinese": "八月"
  },
  {
    "num": 68,
    "english": "autumn",
    "chinese": "秋天"
  },
  {
    "num": 69,
    "english": "available",
    "chinese": "可用的/可得到的"
  },
  {
    "num": 70,
    "english": "avoid",
    "chinese": "避免"
  },
  {
    "num": 71,
    "english": "babysitter",
    "chinese": "保姆"
  },
  {
    "num": 72,
    "english": "back",
    "chinese": "背後"
  },
  {
    "num": 73,
    "english": "backward",
    "chinese": "向後/退縮"
  },
  {
    "num": 74,
    "english": "badminton",
    "chinese": "羽毛球"
  },
  {
    "num": 75,
    "english": "bake",
    "chinese": "烘烤"
  },
  {
    "num": 76,
    "english": "bakery",
    "chinese": "麵包店"
  },
  {
    "num": 77,
    "english": "balcony",
    "chinese": "陽台"
  },
  {
    "num": 78,
    "english": "band",
    "chinese": "樂團"
  },
  {
    "num": 79,
    "english": "barbecue",
    "chinese": "烤肉"
  },
  {
    "num": 80,
    "english": "barber",
    "chinese": "理髮師"
  },
  {
    "num": 81,
    "english": "bath",
    "chinese": "洗澡"
  },
  {
    "num": 82,
    "english": "bathe",
    "chinese": "洗澡 v."
  },
  {
    "num": 83,
    "english": "bean",
    "chinese": "豆"
  },
  {
    "num": 84,
    "english": "beard",
    "chinese": "鬍鬚"
  },
  {
    "num": 85,
    "english": "beautiful",
    "chinese": "美麗的"
  },
  {
    "num": 86,
    "english": "beauty",
    "chinese": "美人/美"
  },
  {
    "num": 87,
    "english": "beef",
    "chinese": "牛肉"
  },
  {
    "num": 88,
    "english": "beginner",
    "chinese": "創始者/初學者"
  },
  {
    "num": 89,
    "english": "behave",
    "chinese": "行為/舉止"
  },
  {
    "num": 90,
    "english": "believe",
    "chinese": "相信"
  },
  {
    "num": 91,
    "english": "belong",
    "chinese": "屬於"
  },
  {
    "num": 92,
    "english": "belt",
    "chinese": "皮帶"
  },
  {
    "num": 93,
    "english": "bench",
    "chinese": "長椅"
  },
  {
    "num": 94,
    "english": "beside",
    "chinese": "在..旁邊"
  },
  {
    "num": 95,
    "english": "between",
    "chinese": "在..之間"
  },
  {
    "num": 96,
    "english": "beyond",
    "chinese": "超越"
  },
  {
    "num": 97,
    "english": "biology",
    "chinese": "生物"
  },
  {
    "num": 98,
    "english": "birthday",
    "chinese": "生日"
  },
  {
    "num": 99,
    "english": "bite",
    "chinese": "咬"
  },
  {
    "num": 100,
    "english": "bitter",
    "chinese": "苦的"
  },
  {
    "num": 101,
    "english": "blackboard",
    "chinese": "黑板"
  },
  {
    "num": 102,
    "english": "blank",
    "chinese": "空白的"
  },
  {
    "num": 103,
    "english": "blanket",
    "chinese": "毯子"
  },
  {
    "num": 104,
    "english": "blind",
    "chinese": "瞎的"
  },
  {
    "num": 105,
    "english": "block",
    "chinese": "街區/阻擋"
  },
  {
    "num": 106,
    "english": "blood",
    "chinese": "血液"
  },
  {
    "num": 107,
    "english": "blow",
    "chinese": "吹"
  },
  {
    "num": 108,
    "english": "body",
    "chinese": "身體"
  },
  {
    "num": 109,
    "english": "boil",
    "chinese": "煮沸"
  },
  {
    "num": 110,
    "english": "bomb",
    "chinese": "炸彈"
  },
  {
    "num": 111,
    "english": "bookstore",
    "chinese": "書店"
  },
  {
    "num": 112,
    "english": "bored",
    "chinese": "感到厭煩的"
  },
  {
    "num": 113,
    "english": "boring",
    "chinese": "無聊的"
  },
  {
    "num": 114,
    "english": "born",
    "chinese": "出生"
  },
  {
    "num": 115,
    "english": "borrow",
    "chinese": "借入"
  },
  {
    "num": 116,
    "english": "boss",
    "chinese": "老板"
  },
  {
    "num": 117,
    "english": "both",
    "chinese": "兩者都"
  },
  {
    "num": 118,
    "english": "bother",
    "chinese": "打擾"
  },
  {
    "num": 119,
    "english": "bottle",
    "chinese": "瓶子"
  },
  {
    "num": 120,
    "english": "bottom",
    "chinese": "底部"
  },
  {
    "num": 121,
    "english": "branch",
    "chinese": "枝/分枝"
  },
  {
    "num": 122,
    "english": "break",
    "chinese": "打破"
  },
  {
    "num": 123,
    "english": "breakfast",
    "chinese": "早餐"
  },
  {
    "num": 124,
    "english": "bright",
    "chinese": "明亮的"
  },
  {
    "num": 125,
    "english": "bring",
    "chinese": "帶來"
  },
  {
    "num": 126,
    "english": "broadcast",
    "chinese": "廣播/散播"
  },
  {
    "num": 127,
    "english": "brush",
    "chinese": "刷"
  },
  {
    "num": 128,
    "english": "bucket",
    "chinese": "水桶"
  },
  {
    "num": 129,
    "english": "build",
    "chinese": "建造"
  },
  {
    "num": 130,
    "english": "bun",
    "chinese": "小圓麵包"
  },
  {
    "num": 131,
    "english": "bundle",
    "chinese": "束/捆"
  },
  {
    "num": 132,
    "english": "burn",
    "chinese": "燃燒"
  },
  {
    "num": 133,
    "english": "business",
    "chinese": "生意"
  },
  {
    "num": 134,
    "english": "businessman",
    "chinese": "商人"
  },
  {
    "num": 135,
    "english": "busy",
    "chinese": "忙碌的"
  },
  {
    "num": 136,
    "english": "cake",
    "chinese": "蛋糕"
  },
  {
    "num": 137,
    "english": "camp",
    "chinese": "露營"
  },
  {
    "num": 138,
    "english": "careful",
    "chinese": "仔細的"
  },
  {
    "num": 139,
    "english": "careless",
    "chinese": "粗心的"
  },
  {
    "num": 140,
    "english": "carpet",
    "chinese": "地毯"
  },
  {
    "num": 141,
    "english": "carry",
    "chinese": "搬運"
  },
  {
    "num": 142,
    "english": "case",
    "chinese": "情形"
  },
  {
    "num": 143,
    "english": "catch",
    "chinese": "趕上"
  },
  {
    "num": 144,
    "english": "celebrate",
    "chinese": "慶祝"
  },
  {
    "num": 145,
    "english": "cellphone",
    "chinese": "手機"
  },
  {
    "num": 146,
    "english": "centimeter",
    "chinese": "公分"
  },
  {
    "num": 147,
    "english": "cheap",
    "chinese": "便宜的"
  },
  {
    "num": 148,
    "english": "cheer",
    "chinese": "歡呼"
  },
  {
    "num": 149,
    "english": "cheese",
    "chinese": "起司"
  },
  {
    "num": 150,
    "english": "chess",
    "chinese": "西洋棋"
  },
  {
    "num": 151,
    "english": "chicken",
    "chinese": "雞肉"
  },
  {
    "num": 152,
    "english": "child",
    "chinese": "孩子"
  },
  {
    "num": 153,
    "english": "Chinese",
    "chinese": "中文"
  },
  {
    "num": 154,
    "english": "chocolate",
    "chinese": "巧克力"
  },
  {
    "num": 155,
    "english": "chopsticks",
    "chinese": "筷子"
  },
  {
    "num": 156,
    "english": "Christmas",
    "chinese": "聖誕節"
  },
  {
    "num": 157,
    "english": "church",
    "chinese": "教堂"
  },
  {
    "num": 158,
    "english": "clock",
    "chinese": "時鐘"
  },
  {
    "num": 159,
    "english": "close",
    "chinese": "關上"
  },
  {
    "num": 160,
    "english": "clothes",
    "chinese": "衣服"
  },
  {
    "num": 161,
    "english": "cloudy",
    "chinese": "多雲的"
  },
  {
    "num": 162,
    "english": "club",
    "chinese": "社團"
  },
  {
    "num": 163,
    "english": "coat",
    "chinese": "大衣"
  },
  {
    "num": 164,
    "english": "collect",
    "chinese": "收集"
  },
  {
    "num": 165,
    "english": "comb",
    "chinese": "梳子"
  },
  {
    "num": 166,
    "english": "comfortable",
    "chinese": "舒服的"
  },
  {
    "num": 167,
    "english": "comic",
    "chinese": "漫畫"
  },
  {
    "num": 168,
    "english": "computer",
    "chinese": "電腦"
  },
  {
    "num": 169,
    "english": "convenient",
    "chinese": "方便的"
  },
  {
    "num": 170,
    "english": "cookie",
    "chinese": "餅乾"
  },
  {
    "num": 171,
    "english": "count",
    "chinese": "計算"
  },
  {
    "num": 172,
    "english": "course",
    "chinese": "課程"
  },
  {
    "num": 173,
    "english": "cousin",
    "chinese": "表堂兄弟姊妹"
  },
  {
    "num": 174,
    "english": "cover",
    "chinese": "覆蓋"
  },
  {
    "num": 175,
    "english": "cowboy",
    "chinese": "牛仔"
  },
  {
    "num": 176,
    "english": "cross",
    "chinese": "越過"
  },
  {
    "num": 177,
    "english": "dangerous",
    "chinese": "危險的"
  },
  {
    "num": 178,
    "english": "daughter",
    "chinese": "女兒"
  },
  {
    "num": 179,
    "english": "dead",
    "chinese": "死的"
  },
  {
    "num": 180,
    "english": "dear",
    "chinese": "親愛的"
  },
  {
    "num": 181,
    "english": "December",
    "chinese": "十二月"
  },
  {
    "num": 182,
    "english": "decide",
    "chinese": "決定"
  },
  {
    "num": 183,
    "english": "delicious",
    "chinese": "美味的"
  },
  {
    "num": 184,
    "english": "dentist",
    "chinese": "牙醫"
  },
  {
    "num": 185,
    "english": "department store",
    "chinese": "百貨公司"
  },
  {
    "num": 186,
    "english": "dictionary",
    "chinese": "字典"
  },
  {
    "num": 187,
    "english": "die",
    "chinese": "死亡"
  },
  {
    "num": 188,
    "english": "different",
    "chinese": "不同的"
  },
  {
    "num": 189,
    "english": "difficult",
    "chinese": "困難的"
  },
  {
    "num": 190,
    "english": "dining room",
    "chinese": "飯廳"
  },
  {
    "num": 191,
    "english": "dodgeball",
    "chinese": "躲避球"
  },
  {
    "num": 192,
    "english": "dozen",
    "chinese": "一打"
  },
  {
    "num": 193,
    "english": "dragon",
    "chinese": "龍"
  },
  {
    "num": 194,
    "english": "drawer",
    "chinese": "抽屜"
  },
  {
    "num": 195,
    "english": "dream",
    "chinese": "夢"
  },
  {
    "num": 196,
    "english": "drive",
    "chinese": "開車"
  },
  {
    "num": 197,
    "english": "driver",
    "chinese": "司機"
  },
  {
    "num": 198,
    "english": "drop",
    "chinese": "掉落"
  },
  {
    "num": 199,
    "english": "drum",
    "chinese": "鼓"
  },
  {
    "num": 200,
    "english": "early",
    "chinese": "早的"
  },
  {
    "num": 201,
    "english": "earth",
    "chinese": "地球"
  },
  {
    "num": 202,
    "english": "Easter",
    "chinese": "復活節"
  },
  {
    "num": 203,
    "english": "either",
    "chinese": "也(否定句)"
  },
  {
    "num": 204,
    "english": "elementary school",
    "chinese": "小學"
  },
  {
    "num": 205,
    "english": "eleven",
    "chinese": "十一"
  },
  {
    "num": 206,
    "english": "eleventh",
    "chinese": "第十一"
  },
  {
    "num": 207,
    "english": "engineer",
    "chinese": "工程師"
  },
  {
    "num": 208,
    "english": "English",
    "chinese": "英語"
  },
  {
    "num": 209,
    "english": "envelope",
    "chinese": "信封"
  },
  {
    "num": 210,
    "english": "evening",
    "chinese": "傍晚"
  },
  {
    "num": 211,
    "english": "ever",
    "chinese": "曾經"
  },
  {
    "num": 212,
    "english": "example",
    "chinese": "例子"
  },
  {
    "num": 213,
    "english": "exercise",
    "chinese": "運動"
  },
  {
    "num": 214,
    "english": "expensive",
    "chinese": "昂貴的"
  },
  {
    "num": 215,
    "english": "experience",
    "chinese": "經驗"
  },
  {
    "num": 216,
    "english": "fact",
    "chinese": "事實"
  },
  {
    "num": 217,
    "english": "factory",
    "chinese": "工廠"
  },
  {
    "num": 218,
    "english": "fail",
    "chinese": "失敗"
  },
  {
    "num": 219,
    "english": "fall",
    "chinese": "v. 掉落 n.秋天"
  },
  {
    "num": 220,
    "english": "family",
    "chinese": "家人/家庭"
  },
  {
    "num": 221,
    "english": "famous",
    "chinese": "有名的"
  },
  {
    "num": 222,
    "english": "far",
    "chinese": "遠的"
  },
  {
    "num": 223,
    "english": "farmer",
    "chinese": "農夫"
  },
  {
    "num": 224,
    "english": "favorite",
    "chinese": "最喜愛的"
  },
  {
    "num": 225,
    "english": "February",
    "chinese": "二月"
  },
  {
    "num": 226,
    "english": "feed",
    "chinese": "餵"
  },
  {
    "num": 227,
    "english": "fever",
    "chinese": "發燒"
  },
  {
    "num": 228,
    "english": "few",
    "chinese": "少數的(接可數)"
  },
  {
    "num": 229,
    "english": "fifteen",
    "chinese": "十五"
  },
  {
    "num": 230,
    "english": "fifteenth",
    "chinese": "第十五"
  },
  {
    "num": 231,
    "english": "fifth",
    "chinese": "第五"
  },
  {
    "num": 232,
    "english": "fifty",
    "chinese": "五十"
  },
  {
    "num": 233,
    "english": "fight",
    "chinese": "打架"
  },
  {
    "num": 234,
    "english": "finger",
    "chinese": "手指"
  },
  {
    "num": 235,
    "english": "finish",
    "chinese": "完成"
  },
  {
    "num": 236,
    "english": "fisherman",
    "chinese": "漁夫"
  },
  {
    "num": 237,
    "english": "fix",
    "chinese": "修理"
  },
  {
    "num": 238,
    "english": "flute",
    "chinese": "笛"
  },
  {
    "num": 239,
    "english": "for",
    "chinese": "為了"
  },
  {
    "num": 240,
    "english": "forget",
    "chinese": "忘記"
  },
  {
    "num": 241,
    "english": "fork",
    "chinese": "叉子"
  },
  {
    "num": 242,
    "english": "forty",
    "chinese": "四十"
  },
  {
    "num": 243,
    "english": "fourteen",
    "chinese": "十四"
  },
  {
    "num": 244,
    "english": "fourteenth",
    "chinese": "第十四"
  },
  {
    "num": 245,
    "english": "fourth",
    "chinese": "第四"
  },
  {
    "num": 246,
    "english": "fresh",
    "chinese": "新鮮的"
  },
  {
    "num": 247,
    "english": "Friday",
    "chinese": "星期五"
  },
  {
    "num": 248,
    "english": "frisbee",
    "chinese": "飛盤"
  },
  {
    "num": 249,
    "english": "gate",
    "chinese": "大門"
  },
  {
    "num": 250,
    "english": "ghost",
    "chinese": "鬼"
  },
  {
    "num": 251,
    "english": "giant",
    "chinese": "巨大的/巨人"
  },
  {
    "num": 252,
    "english": "glad",
    "chinese": "高興的"
  },
  {
    "num": 253,
    "english": "glove",
    "chinese": "手套"
  },
  {
    "num": 254,
    "english": "goat",
    "chinese": "山羊"
  },
  {
    "num": 255,
    "english": "goodbye",
    "chinese": "再見"
  },
  {
    "num": 256,
    "english": "goose",
    "chinese": "鵝"
  },
  {
    "num": 257,
    "english": "grade",
    "chinese": "成績"
  },
  {
    "num": 258,
    "english": "gram",
    "chinese": "公克"
  },
  {
    "num": 259,
    "english": "ground",
    "chinese": "地面"
  },
  {
    "num": 260,
    "english": "group",
    "chinese": "團體"
  },
  {
    "num": 261,
    "english": "grow",
    "chinese": "生長長大"
  },
  {
    "num": 262,
    "english": "guava",
    "chinese": "芭樂"
  },
  {
    "num": 263,
    "english": "guess",
    "chinese": "猜想"
  },
  {
    "num": 264,
    "english": "guitar",
    "chinese": "吉他"
  },
  {
    "num": 265,
    "english": "half",
    "chinese": "一半"
  },
  {
    "num": 266,
    "english": "Halloween",
    "chinese": "萬聖節"
  },
  {
    "num": 267,
    "english": "hamburger",
    "chinese": "牛肉漢堡"
  },
  {
    "num": 268,
    "english": "hang",
    "chinese": "懸掛"
  },
  {
    "num": 269,
    "english": "happen",
    "chinese": "發生"
  },
  {
    "num": 270,
    "english": "hard",
    "chinese": "困難的"
  },
  {
    "num": 271,
    "english": "hard-working",
    "chinese": "努力工作的"
  },
  {
    "num": 272,
    "english": "headache",
    "chinese": "頭痛"
  },
  {
    "num": 273,
    "english": "heart",
    "chinese": "心"
  },
  {
    "num": 274,
    "english": "heat",
    "chinese": "熱"
  },
  {
    "num": 275,
    "english": "heavy",
    "chinese": "重的"
  },
  {
    "num": 276,
    "english": "hide",
    "chinese": "躲藏"
  },
  {
    "num": 277,
    "english": "high",
    "chinese": "高的"
  },
  {
    "num": 278,
    "english": "hike",
    "chinese": "徒步旅行"
  },
  {
    "num": 279,
    "english": "history",
    "chinese": "歷史"
  },
  {
    "num": 280,
    "english": "hold",
    "chinese": "拿著"
  },
  {
    "num": 281,
    "english": "holiday",
    "chinese": "假日"
  },
  {
    "num": 282,
    "english": "homesick",
    "chinese": "想家的"
  },
  {
    "num": 283,
    "english": "homework",
    "chinese": "家庭作業"
  },
  {
    "num": 284,
    "english": "horrible",
    "chinese": "恐怖的"
  },
  {
    "num": 285,
    "english": "house",
    "chinese": "房屋"
  },
  {
    "num": 286,
    "english": "housewife",
    "chinese": "家庭主婦"
  },
  {
    "num": 287,
    "english": "humorous",
    "chinese": "幽默的"
  },
  {
    "num": 288,
    "english": "imagine",
    "chinese": "想像"
  },
  {
    "num": 289,
    "english": "impolite",
    "chinese": "不禮貌的"
  },
  {
    "num": 290,
    "english": "importance",
    "chinese": "重要性 n."
  },
  {
    "num": 291,
    "english": "improve",
    "chinese": "改善"
  },
  {
    "num": 292,
    "english": "insist",
    "chinese": "堅持"
  },
  {
    "num": 293,
    "english": "inspire",
    "chinese": "啟發"
  },
  {
    "num": 294,
    "english": "instrument",
    "chinese": "儀器/樂器"
  },
  {
    "num": 295,
    "english": "intelligent",
    "chinese": "有智慧的"
  },
  {
    "num": 296,
    "english": "interrupt",
    "chinese": "干擾"
  },
  {
    "num": 297,
    "english": "introduce",
    "chinese": "介紹"
  },
  {
    "num": 298,
    "english": "invent",
    "chinese": "發明 v."
  },
  {
    "num": 299,
    "english": "invitation",
    "chinese": "邀請(函) n."
  },
  {
    "num": 300,
    "english": "island",
    "chinese": "島嶼"
  },
  {
    "num": 301,
    "english": "it",
    "chinese": "它"
  },
  {
    "num": 302,
    "english": "January",
    "chinese": "一月"
  },
  {
    "num": 303,
    "english": "jealous",
    "chinese": "忌妒"
  },
  {
    "num": 304,
    "english": "jeans",
    "chinese": "牛仔褲"
  },
  {
    "num": 305,
    "english": "judge",
    "chinese": "判斷"
  },
  {
    "num": 306,
    "english": "July",
    "chinese": "七月"
  },
  {
    "num": 307,
    "english": "jump",
    "chinese": "跳躍"
  },
  {
    "num": 308,
    "english": "June",
    "chinese": "六月"
  },
  {
    "num": 309,
    "english": "junior high school",
    "chinese": "國中"
  },
  {
    "num": 310,
    "english": "kill",
    "chinese": "殺"
  },
  {
    "num": 311,
    "english": "killer",
    "chinese": "兇手"
  },
  {
    "num": 312,
    "english": "kilogram",
    "chinese": "公斤"
  },
  {
    "num": 313,
    "english": "kilometer",
    "chinese": "公里"
  },
  {
    "num": 314,
    "english": "kitchen",
    "chinese": "廚房"
  },
  {
    "num": 315,
    "english": "kitten",
    "chinese": "小貓"
  },
  {
    "num": 316,
    "english": "knee",
    "chinese": "膝蓋"
  },
  {
    "num": 317,
    "english": "lack",
    "chinese": "缺乏"
  },
  {
    "num": 318,
    "english": "latter",
    "chinese": "後者的"
  },
  {
    "num": 319,
    "english": "lawyer",
    "chinese": "律師"
  },
  {
    "num": 320,
    "english": "least",
    "chinese": "最少的"
  },
  {
    "num": 321,
    "english": "leave",
    "chinese": "離開"
  },
  {
    "num": 322,
    "english": "left",
    "chinese": "左邊"
  },
  {
    "num": 323,
    "english": "less",
    "chinese": "較少的"
  },
  {
    "num": 324,
    "english": "lesson",
    "chinese": "課"
  },
  {
    "num": 325,
    "english": "lettuce",
    "chinese": "萵苣"
  },
  {
    "num": 326,
    "english": "level",
    "chinese": "程度/水平"
  },
  {
    "num": 327,
    "english": "library",
    "chinese": "圖書館"
  },
  {
    "num": 328,
    "english": "lift",
    "chinese": "舉起"
  },
  {
    "num": 329,
    "english": "lightning",
    "chinese": "閃電"
  },
  {
    "num": 330,
    "english": "limit",
    "chinese": "限制"
  },
  {
    "num": 331,
    "english": "liquid",
    "chinese": "液體"
  },
  {
    "num": 332,
    "english": "listen",
    "chinese": "聽"
  },
  {
    "num": 333,
    "english": "liter",
    "chinese": "公升"
  },
  {
    "num": 334,
    "english": "little",
    "chinese": "小的"
  },
  {
    "num": 335,
    "english": "live",
    "chinese": "住"
  },
  {
    "num": 336,
    "english": "living room",
    "chinese": "客廳"
  },
  {
    "num": 337,
    "english": "lonely",
    "chinese": "寂寞的"
  },
  {
    "num": 338,
    "english": "lose",
    "chinese": "輸/遺失"
  },
  {
    "num": 339,
    "english": "machine",
    "chinese": "機器"
  },
  {
    "num": 340,
    "english": "mad",
    "chinese": "瘋狂的"
  },
  {
    "num": 341,
    "english": "magic",
    "chinese": "魔術"
  },
  {
    "num": 342,
    "english": "magician",
    "chinese": "魔術師"
  },
  {
    "num": 343,
    "english": "major",
    "chinese": "主要的"
  },
  {
    "num": 344,
    "english": "March",
    "chinese": "三月"
  },
  {
    "num": 345,
    "english": "market",
    "chinese": "市場"
  },
  {
    "num": 346,
    "english": "married",
    "chinese": "已婚的"
  },
  {
    "num": 347,
    "english": "marvelous",
    "chinese": "令人驚嘆的"
  },
  {
    "num": 348,
    "english": "mat",
    "chinese": "墊子"
  },
  {
    "num": 349,
    "english": "maximum",
    "chinese": "最大量"
  },
  {
    "num": 350,
    "english": "may",
    "chinese": "可能"
  },
  {
    "num": 351,
    "english": "May",
    "chinese": "五月"
  },
  {
    "num": 352,
    "english": "meal",
    "chinese": "一餐"
  },
  {
    "num": 353,
    "english": "mean",
    "chinese": "意指"
  },
  {
    "num": 354,
    "english": "media",
    "chinese": "媒體"
  },
  {
    "num": 355,
    "english": "member",
    "chinese": "成員"
  },
  {
    "num": 356,
    "english": "menu",
    "chinese": "菜單"
  },
  {
    "num": 357,
    "english": "message",
    "chinese": "留言"
  },
  {
    "num": 358,
    "english": "method",
    "chinese": "方法/態度"
  },
  {
    "num": 359,
    "english": "midnight",
    "chinese": "午夜"
  },
  {
    "num": 360,
    "english": "mile",
    "chinese": "英哩"
  },
  {
    "num": 361,
    "english": "million",
    "chinese": "百萬"
  },
  {
    "num": 362,
    "english": "mind",
    "chinese": "n. 想法/心智 v.介意"
  },
  {
    "num": 363,
    "english": "minor",
    "chinese": "較小的"
  },
  {
    "num": 364,
    "english": "minus",
    "chinese": "減/負的"
  },
  {
    "num": 365,
    "english": "minute",
    "chinese": "分鐘"
  },
  {
    "num": 366,
    "english": "mirror",
    "chinese": "鏡子"
  },
  {
    "num": 367,
    "english": "miss",
    "chinese": "想念"
  },
  {
    "num": 368,
    "english": "mix",
    "chinese": "混合"
  },
  {
    "num": 369,
    "english": "Monday",
    "chinese": "星期一"
  },
  {
    "num": 370,
    "english": "money",
    "chinese": "錢"
  },
  {
    "num": 371,
    "english": "month",
    "chinese": "月份"
  },
  {
    "num": 372,
    "english": "mop",
    "chinese": "拖地"
  },
  {
    "num": 373,
    "english": "morning",
    "chinese": "早上"
  },
  {
    "num": 374,
    "english": "mosquito",
    "chinese": "蚊子"
  },
  {
    "num": 375,
    "english": "most",
    "chinese": "大多數的"
  },
  {
    "num": 376,
    "english": "mother",
    "chinese": "母親"
  },
  {
    "num": 377,
    "english": "motion",
    "chinese": "動作"
  },
  {
    "num": 378,
    "english": "motorcycle",
    "chinese": "機車"
  },
  {
    "num": 379,
    "english": "mountain",
    "chinese": "山"
  },
  {
    "num": 380,
    "english": "move",
    "chinese": "移動"
  },
  {
    "num": 381,
    "english": "much",
    "chinese": "許多的"
  },
  {
    "num": 382,
    "english": "musician",
    "chinese": "音樂家"
  },
  {
    "num": 383,
    "english": "napkin",
    "chinese": "餐巾"
  },
  {
    "num": 384,
    "english": "narrow",
    "chinese": "狹窄"
  },
  {
    "num": 385,
    "english": "natural",
    "chinese": "自然的"
  },
  {
    "num": 386,
    "english": "nature",
    "chinese": "自然"
  },
  {
    "num": 387,
    "english": "naughty",
    "chinese": "頑皮的"
  },
  {
    "num": 388,
    "english": "nearly",
    "chinese": "幾乎"
  },
  {
    "num": 389,
    "english": "necessary",
    "chinese": "必要的"
  },
  {
    "num": 390,
    "english": "needle",
    "chinese": "針"
  },
  {
    "num": 391,
    "english": "neither",
    "chinese": "兩者都不"
  },
  {
    "num": 392,
    "english": "nephew",
    "chinese": "姪子外甥"
  },
  {
    "num": 393,
    "english": "nervous",
    "chinese": "緊張的"
  },
  {
    "num": 394,
    "english": "nest",
    "chinese": "鳥巢"
  },
  {
    "num": 395,
    "english": "news",
    "chinese": "消息"
  },
  {
    "num": 396,
    "english": "noisy",
    "chinese": "吵鬧的"
  },
  {
    "num": 397,
    "english": "north",
    "chinese": "北方"
  },
  {
    "num": 398,
    "english": "nothing",
    "chinese": "沒什麼"
  },
  {
    "num": 399,
    "english": "November",
    "chinese": "十一月"
  },
  {
    "num": 400,
    "english": "number",
    "chinese": "數字"
  },
  {
    "num": 401,
    "english": "nurse",
    "chinese": "護士"
  },
  {
    "num": 402,
    "english": "o'clock",
    "chinese": "點鐘"
  },
  {
    "num": 403,
    "english": "obey",
    "chinese": "服從"
  },
  {
    "num": 404,
    "english": "October",
    "chinese": "十月"
  },
  {
    "num": 405,
    "english": "of prep. ..",
    "chinese": "的"
  },
  {
    "num": 406,
    "english": "off",
    "chinese": "prep. 移開/移除"
  },
  {
    "num": 407,
    "english": "office",
    "chinese": "辦公室"
  },
  {
    "num": 408,
    "english": "officer",
    "chinese": "職員/官員"
  },
  {
    "num": 409,
    "english": "often",
    "chinese": "時常"
  },
  {
    "num": 410,
    "english": "OK",
    "chinese": "可以"
  },
  {
    "num": 411,
    "english": "omit",
    "chinese": "遺漏/省略"
  },
  {
    "num": 412,
    "english": "on",
    "chinese": "在..上面"
  },
  {
    "num": 413,
    "english": "once",
    "chinese": "一次"
  },
  {
    "num": 414,
    "english": "only",
    "chinese": "唯一的"
  },
  {
    "num": 415,
    "english": "operation",
    "chinese": "操作/運作"
  },
  {
    "num": 416,
    "english": "opinion",
    "chinese": "意見"
  },
  {
    "num": 417,
    "english": "or",
    "chinese": "或"
  },
  {
    "num": 418,
    "english": "ordinary",
    "chinese": "普通的"
  },
  {
    "num": 419,
    "english": "other",
    "chinese": "其他的"
  },
  {
    "num": 420,
    "english": "outside",
    "chinese": "在..外面"
  },
  {
    "num": 421,
    "english": "overseas",
    "chinese": "在海外的"
  },
  {
    "num": 422,
    "english": "p.m.",
    "chinese": "下午"
  },
  {
    "num": 423,
    "english": "package",
    "chinese": "包裹"
  },
  {
    "num": 424,
    "english": "paint",
    "chinese": "油漆/塗色"
  },
  {
    "num": 425,
    "english": "pair",
    "chinese": "一雙"
  },
  {
    "num": 426,
    "english": "pants",
    "chinese": "長褲"
  },
  {
    "num": 427,
    "english": "pardon",
    "chinese": "原諒"
  },
  {
    "num": 428,
    "english": "parent",
    "chinese": "父(母)親"
  },
  {
    "num": 429,
    "english": "parking lot",
    "chinese": "停車場"
  },
  {
    "num": 430,
    "english": "parrot",
    "chinese": "鸚鵡"
  },
  {
    "num": 431,
    "english": "partner",
    "chinese": "夥伴"
  },
  {
    "num": 432,
    "english": "past",
    "chinese": "經過"
  },
  {
    "num": 433,
    "english": "paste",
    "chinese": "黏貼"
  },
  {
    "num": 434,
    "english": "path",
    "chinese": "小路/旅途"
  },
  {
    "num": 435,
    "english": "patient",
    "chinese": "病人/耐心的"
  },
  {
    "num": 436,
    "english": "pattern",
    "chinese": "型態/典型"
  },
  {
    "num": 437,
    "english": "pause",
    "chinese": "暫停"
  },
  {
    "num": 438,
    "english": "pay",
    "chinese": "付錢"
  },
  {
    "num": 439,
    "english": "people",
    "chinese": "人們"
  },
  {
    "num": 440,
    "english": "pepper",
    "chinese": "胡椒"
  },
  {
    "num": 441,
    "english": "personal",
    "chinese": "個人的"
  },
  {
    "num": 442,
    "english": "physics",
    "chinese": "物理學"
  },
  {
    "num": 443,
    "english": "piano",
    "chinese": "鋼琴"
  },
  {
    "num": 444,
    "english": "pick",
    "chinese": "挑選"
  },
  {
    "num": 445,
    "english": "picnic",
    "chinese": "野餐"
  },
  {
    "num": 446,
    "english": "picture",
    "chinese": "圖片"
  },
  {
    "num": 447,
    "english": "piece",
    "chinese": "一片"
  },
  {
    "num": 448,
    "english": "pigeon",
    "chinese": "鴿子"
  },
  {
    "num": 449,
    "english": "pillow",
    "chinese": "枕頭"
  },
  {
    "num": 450,
    "english": "plain",
    "chinese": "樸素的/簡單的"
  },
  {
    "num": 451,
    "english": "planet",
    "chinese": "行星"
  },
  {
    "num": 452,
    "english": "plant",
    "chinese": "植物"
  },
  {
    "num": 453,
    "english": "plate",
    "chinese": "盤子"
  },
  {
    "num": 454,
    "english": "platform",
    "chinese": "月臺/平台"
  },
  {
    "num": 455,
    "english": "playground",
    "chinese": "操場"
  },
  {
    "num": 456,
    "english": "pleasant",
    "chinese": "令人愉快的"
  },
  {
    "num": 457,
    "english": "pleased",
    "chinese": "感高興的"
  },
  {
    "num": 458,
    "english": "pleasure",
    "chinese": "樂趣"
  },
  {
    "num": 459,
    "english": "pocket",
    "chinese": "口袋"
  },
  {
    "num": 460,
    "english": "police",
    "chinese": "警察"
  },
  {
    "num": 461,
    "english": "polite",
    "chinese": "有禮貌的"
  },
  {
    "num": 462,
    "english": "pollute",
    "chinese": "汙染 v."
  },
  {
    "num": 463,
    "english": "pollution",
    "chinese": "汙染 n."
  },
  {
    "num": 464,
    "english": "pond",
    "chinese": "池塘"
  },
  {
    "num": 465,
    "english": "poor",
    "chinese": "窮的/可憐的"
  },
  {
    "num": 466,
    "english": "popular",
    "chinese": "受歡迎的"
  },
  {
    "num": 467,
    "english": "possible",
    "chinese": "可能的"
  },
  {
    "num": 468,
    "english": "post office",
    "chinese": "郵局"
  },
  {
    "num": 469,
    "english": "postcard",
    "chinese": "明信片"
  },
  {
    "num": 470,
    "english": "pound",
    "chinese": "磅"
  },
  {
    "num": 471,
    "english": "practice",
    "chinese": "練習"
  },
  {
    "num": 472,
    "english": "prepare",
    "chinese": "準備"
  },
  {
    "num": 473,
    "english": "present",
    "chinese": "禮物"
  },
  {
    "num": 474,
    "english": "price",
    "chinese": "價格"
  },
  {
    "num": 475,
    "english": "princess",
    "chinese": "公主"
  },
  {
    "num": 476,
    "english": "prize",
    "chinese": "獎"
  },
  {
    "num": 477,
    "english": "program",
    "chinese": "節目"
  },
  {
    "num": 478,
    "english": "proud",
    "chinese": "驕傲的"
  },
  {
    "num": 479,
    "english": "public",
    "chinese": "公立的"
  },
  {
    "num": 480,
    "english": "pumpkin",
    "chinese": "南瓜"
  },
  {
    "num": 481,
    "english": "quarter",
    "chinese": "四分之一/一刻鐘"
  },
  {
    "num": 482,
    "english": "question",
    "chinese": "問題"
  },
  {
    "num": 483,
    "english": "quite",
    "chinese": "相當"
  },
  {
    "num": 484,
    "english": "raise",
    "chinese": "舉起"
  },
  {
    "num": 485,
    "english": "real",
    "chinese": "真的"
  },
  {
    "num": 486,
    "english": "really",
    "chinese": "真正地"
  },
  {
    "num": 487,
    "english": "recorder",
    "chinese": "錄音機"
  },
  {
    "num": 488,
    "english": "refrigerator",
    "chinese": "冰箱"
  },
  {
    "num": 489,
    "english": "remember",
    "chinese": "記得"
  },
  {
    "num": 490,
    "english": "reporter",
    "chinese": "記者"
  },
  {
    "num": 491,
    "english": "restaurant",
    "chinese": "餐館"
  },
  {
    "num": 492,
    "english": "ridiculous",
    "chinese": "荒謬的"
  },
  {
    "num": 493,
    "english": "river",
    "chinese": "河"
  },
  {
    "num": 494,
    "english": "robot",
    "chinese": "機器人"
  },
  {
    "num": 495,
    "english": "roof",
    "chinese": "屋頂"
  },
  {
    "num": 496,
    "english": "root",
    "chinese": "根部/根本"
  },
  {
    "num": 497,
    "english": "rubber",
    "chinese": "橡膠(的)"
  },
  {
    "num": 498,
    "english": "rude",
    "chinese": "無禮的"
  },
  {
    "num": 499,
    "english": "sacred",
    "chinese": "神聖的"
  },
  {
    "num": 500,
    "english": "sail",
    "chinese": "航行"
  },
  {
    "num": 501,
    "english": "sale",
    "chinese": "銷售/拍賣"
  },
  {
    "num": 502,
    "english": "salesman",
    "chinese": "售貨員"
  },
  {
    "num": 503,
    "english": "satisfy",
    "chinese": "感到滿足"
  },
  {
    "num": 504,
    "english": "Saturday",
    "chinese": "星期六"
  },
  {
    "num": 505,
    "english": "save",
    "chinese": "拯救/節省"
  },
  {
    "num": 506,
    "english": "scarf",
    "chinese": "圍巾"
  },
  {
    "num": 507,
    "english": "scene",
    "chinese": "場景/一場戲"
  },
  {
    "num": 508,
    "english": "scenery",
    "chinese": "風景"
  },
  {
    "num": 509,
    "english": "science",
    "chinese": "科學"
  },
  {
    "num": 510,
    "english": "scientist",
    "chinese": "科學家"
  },
  {
    "num": 511,
    "english": "scooter",
    "chinese": "機車"
  },
  {
    "num": 512,
    "english": "screen",
    "chinese": "螢幕"
  },
  {
    "num": 513,
    "english": "search",
    "chinese": "搜查"
  },
  {
    "num": 514,
    "english": "season",
    "chinese": "季節"
  },
  {
    "num": 515,
    "english": "second",
    "chinese": "第二"
  },
  {
    "num": 516,
    "english": "secretary",
    "chinese": "秘書"
  },
  {
    "num": 517,
    "english": "section",
    "chinese": "部分/地段(區)"
  },
  {
    "num": 518,
    "english": "seesaw",
    "chinese": "蹺蹺板"
  },
  {
    "num": 519,
    "english": "seldom",
    "chinese": "很少"
  },
  {
    "num": 520,
    "english": "select",
    "chinese": "選擇"
  },
  {
    "num": 521,
    "english": "selfish",
    "chinese": "自私的"
  },
  {
    "num": 522,
    "english": "send",
    "chinese": "寄送"
  },
  {
    "num": 523,
    "english": "senior high school",
    "chinese": "高中"
  },
  {
    "num": 524,
    "english": "sentence",
    "chinese": "句子"
  },
  {
    "num": 525,
    "english": "September",
    "chinese": "九月"
  },
  {
    "num": 526,
    "english": "serious",
    "chinese": "嚴重的"
  },
  {
    "num": 527,
    "english": "set",
    "chinese": "一套/置放"
  },
  {
    "num": 528,
    "english": "seventeen",
    "chinese": "十七"
  },
  {
    "num": 529,
    "english": "seventeenth",
    "chinese": "第十七"
  },
  {
    "num": 530,
    "english": "seventh",
    "chinese": "第七"
  },
  {
    "num": 531,
    "english": "seventy",
    "chinese": "七十"
  },
  {
    "num": 532,
    "english": "several",
    "chinese": "幾個的"
  },
  {
    "num": 533,
    "english": "shoot",
    "chinese": "射擊"
  },
  {
    "num": 534,
    "english": "shopkeeper",
    "chinese": "店主"
  },
  {
    "num": 535,
    "english": "shorts",
    "chinese": "短褲"
  },
  {
    "num": 536,
    "english": "should",
    "chinese": "應該"
  },
  {
    "num": 537,
    "english": "side",
    "chinese": "旁邊"
  },
  {
    "num": 538,
    "english": "sidewalk",
    "chinese": "人行道"
  },
  {
    "num": 539,
    "english": "sight",
    "chinese": "視覺/景色"
  },
  {
    "num": 540,
    "english": "sign",
    "chinese": "符號/標誌"
  },
  {
    "num": 541,
    "english": "simple",
    "chinese": "簡單的"
  },
  {
    "num": 542,
    "english": "since",
    "chinese": "自從"
  },
  {
    "num": 543,
    "english": "sir",
    "chinese": "先生/長官"
  },
  {
    "num": 544,
    "english": "sixteen",
    "chinese": "十六"
  },
  {
    "num": 545,
    "english": "sixteenth",
    "chinese": "第十六"
  },
  {
    "num": 546,
    "english": "sixth",
    "chinese": "第六"
  },
  {
    "num": 547,
    "english": "sixty",
    "chinese": "六十"
  },
  {
    "num": 548,
    "english": "size",
    "chinese": "尺寸"
  },
  {
    "num": 549,
    "english": "skate",
    "chinese": "溜冰"
  },
  {
    "num": 550,
    "english": "skirt",
    "chinese": "裙子"
  },
  {
    "num": 551,
    "english": "sky",
    "chinese": "天空"
  },
  {
    "num": 552,
    "english": "sleepy",
    "chinese": "想睡的"
  },
  {
    "num": 553,
    "english": "slide",
    "chinese": "滑動"
  },
  {
    "num": 554,
    "english": "slim",
    "chinese": "苗條的"
  },
  {
    "num": 555,
    "english": "slow",
    "chinese": "慢的"
  },
  {
    "num": 556,
    "english": "small",
    "chinese": "小的"
  },
  {
    "num": 557,
    "english": "smart",
    "chinese": "聰明的"
  },
  {
    "num": 558,
    "english": "smell",
    "chinese": "嗅/聞"
  },
  {
    "num": 559,
    "english": "smile",
    "chinese": "微笑"
  },
  {
    "num": 560,
    "english": "smoke",
    "chinese": "抽煙"
  },
  {
    "num": 561,
    "english": "snack",
    "chinese": "點心"
  },
  {
    "num": 562,
    "english": "sneakers",
    "chinese": "球鞋/休閒鞋"
  },
  {
    "num": 563,
    "english": "sneaky",
    "chinese": "鬼鬼祟祟的"
  },
  {
    "num": 564,
    "english": "snow",
    "chinese": "雪"
  },
  {
    "num": 565,
    "english": "snowman",
    "chinese": "雪人"
  },
  {
    "num": 566,
    "english": "snowy",
    "chinese": "下雪的"
  },
  {
    "num": 567,
    "english": "so",
    "chinese": "如此的"
  },
  {
    "num": 568,
    "english": "soccer",
    "chinese": "足球"
  },
  {
    "num": 569,
    "english": "social",
    "chinese": "社會的"
  },
  {
    "num": 570,
    "english": "society",
    "chinese": "社會 n."
  },
  {
    "num": 571,
    "english": "socks",
    "chinese": "襪子"
  },
  {
    "num": 572,
    "english": "sofa",
    "chinese": "沙發"
  },
  {
    "num": 573,
    "english": "soldier",
    "chinese": "軍人"
  },
  {
    "num": 574,
    "english": "son",
    "chinese": "兒子"
  },
  {
    "num": 575,
    "english": "song",
    "chinese": "歌曲"
  },
  {
    "num": 576,
    "english": "soon",
    "chinese": "很快地"
  },
  {
    "num": 577,
    "english": "sore",
    "chinese": "痛的"
  },
  {
    "num": 578,
    "english": "sorry",
    "chinese": "抱歉的"
  },
  {
    "num": 579,
    "english": "sound",
    "chinese": "聽起來"
  },
  {
    "num": 580,
    "english": "soup",
    "chinese": "湯"
  },
  {
    "num": 581,
    "english": "south",
    "chinese": "南方"
  },
  {
    "num": 582,
    "english": "space",
    "chinese": "空間"
  },
  {
    "num": 583,
    "english": "spaghetti",
    "chinese": "義大利麵"
  },
  {
    "num": 584,
    "english": "speak",
    "chinese": "說話"
  },
  {
    "num": 585,
    "english": "special",
    "chinese": "特別的"
  },
  {
    "num": 586,
    "english": "spell",
    "chinese": "拼寫"
  },
  {
    "num": 587,
    "english": "spend",
    "chinese": "花費(時間金錢)"
  },
  {
    "num": 588,
    "english": "spider",
    "chinese": "蜘蛛"
  },
  {
    "num": 589,
    "english": "spoon",
    "chinese": "湯匙"
  },
  {
    "num": 590,
    "english": "sport",
    "chinese": "運動"
  },
  {
    "num": 591,
    "english": "spring",
    "chinese": "春天"
  },
  {
    "num": 592,
    "english": "square",
    "chinese": "正方形"
  },
  {
    "num": 593,
    "english": "stairs",
    "chinese": "樓梯"
  },
  {
    "num": 594,
    "english": "stamp",
    "chinese": "郵票"
  },
  {
    "num": 595,
    "english": "stand",
    "chinese": "站立"
  },
  {
    "num": 596,
    "english": "start",
    "chinese": "開始"
  },
  {
    "num": 597,
    "english": "station",
    "chinese": "車站"
  },
  {
    "num": 598,
    "english": "stationery",
    "chinese": "文具"
  },
  {
    "num": 599,
    "english": "stay",
    "chinese": "待/停留"
  },
  {
    "num": 600,
    "english": "steak",
    "chinese": "牛排"
  },
  {
    "num": 601,
    "english": "still",
    "chinese": "仍然"
  },
  {
    "num": 602,
    "english": "stomach",
    "chinese": "胃"
  },
  {
    "num": 603,
    "english": "storm",
    "chinese": "暴風雨"
  },
  {
    "num": 604,
    "english": "stormy",
    "chinese": "暴風的"
  },
  {
    "num": 605,
    "english": "strange",
    "chinese": "奇怪的"
  },
  {
    "num": 606,
    "english": "stranger",
    "chinese": "陌生人"
  },
  {
    "num": 607,
    "english": "strawberry",
    "chinese": "草莓"
  },
  {
    "num": 608,
    "english": "strike",
    "chinese": "敲擊"
  },
  {
    "num": 609,
    "english": "subject",
    "chinese": "科目"
  },
  {
    "num": 610,
    "english": "successful",
    "chinese": "成功的"
  },
  {
    "num": 611,
    "english": "suggest",
    "chinese": "建議"
  },
  {
    "num": 612,
    "english": "Sunday",
    "chinese": "星期日"
  },
  {
    "num": 613,
    "english": "supermarket",
    "chinese": "超市"
  },
  {
    "num": 614,
    "english": "support",
    "chinese": "支持"
  },
  {
    "num": 615,
    "english": "sure",
    "chinese": "確定的"
  },
  {
    "num": 616,
    "english": "surf",
    "chinese": "衝浪"
  },
  {
    "num": 617,
    "english": "surprise",
    "chinese": "使驚訝"
  },
  {
    "num": 618,
    "english": "surprised",
    "chinese": "感到驚訝的"
  },
  {
    "num": 619,
    "english": "sweep",
    "chinese": "掃"
  },
  {
    "num": 620,
    "english": "swing",
    "chinese": "搖擺"
  },
  {
    "num": 621,
    "english": "symbol",
    "chinese": "象徵"
  },
  {
    "num": 622,
    "english": "system",
    "chinese": "系統"
  },
  {
    "num": 623,
    "english": "table",
    "chinese": "桌子"
  },
  {
    "num": 624,
    "english": "talkative",
    "chinese": "多話的"
  },
  {
    "num": 625,
    "english": "tangerine",
    "chinese": "橘子"
  },
  {
    "num": 626,
    "english": "tape",
    "chinese": "錄音帶"
  },
  {
    "num": 627,
    "english": "teenager",
    "chinese": "青少年"
  },
  {
    "num": 628,
    "english": "telephone (phone)",
    "chinese": "電話"
  },
  {
    "num": 629,
    "english": "television (TV)",
    "chinese": "電視"
  },
  {
    "num": 630,
    "english": "temperature",
    "chinese": "溫度"
  },
  {
    "num": 631,
    "english": "temple",
    "chinese": "寺廟"
  },
  {
    "num": 632,
    "english": "tenth",
    "chinese": "第十的"
  },
  {
    "num": 633,
    "english": "terrible",
    "chinese": "可怕的"
  },
  {
    "num": 634,
    "english": "terrific",
    "chinese": "極佳的"
  },
  {
    "num": 635,
    "english": "theater",
    "chinese": "戲院"
  },
  {
    "num": 636,
    "english": "therefore",
    "chinese": "因此"
  },
  {
    "num": 637,
    "english": "third",
    "chinese": "第三的"
  },
  {
    "num": 638,
    "english": "thirsty",
    "chinese": "口渴的"
  },
  {
    "num": 639,
    "english": "thirteen",
    "chinese": "十三"
  },
  {
    "num": 640,
    "english": "thirteenth",
    "chinese": "第十三"
  },
  {
    "num": 641,
    "english": "thirty",
    "chinese": "三十"
  },
  {
    "num": 642,
    "english": "those",
    "chinese": "那些"
  },
  {
    "num": 643,
    "english": "though",
    "chinese": "雖然"
  },
  {
    "num": 644,
    "english": "thousand",
    "chinese": "千"
  },
  {
    "num": 645,
    "english": "Thursday",
    "chinese": "星期四"
  },
  {
    "num": 646,
    "english": "time",
    "chinese": "時間"
  },
  {
    "num": 647,
    "english": "tired",
    "chinese": "累的"
  },
  {
    "num": 648,
    "english": "to",
    "chinese": "prep. 向、往、到"
  },
  {
    "num": 649,
    "english": "together",
    "chinese": "一起"
  },
  {
    "num": 650,
    "english": "tomato",
    "chinese": "番茄"
  },
  {
    "num": 651,
    "english": "tomorrow",
    "chinese": "明天"
  },
  {
    "num": 652,
    "english": "tonight",
    "chinese": "今晚"
  },
  {
    "num": 653,
    "english": "too",
    "chinese": "也/太"
  },
  {
    "num": 654,
    "english": "toothache",
    "chinese": "牙痛"
  },
  {
    "num": 655,
    "english": "toothbrush",
    "chinese": "牙刷"
  },
  {
    "num": 656,
    "english": "touch",
    "chinese": "碰觸"
  },
  {
    "num": 657,
    "english": "towel",
    "chinese": "毛巾"
  },
  {
    "num": 658,
    "english": "town",
    "chinese": "城鎮"
  },
  {
    "num": 659,
    "english": "trace",
    "chinese": "痕跡/追蹤"
  },
  {
    "num": 660,
    "english": "trade",
    "chinese": "貿易"
  },
  {
    "num": 661,
    "english": "tradition",
    "chinese": "傳統"
  },
  {
    "num": 662,
    "english": "traditional",
    "chinese": "傳統的"
  },
  {
    "num": 663,
    "english": "traffic",
    "chinese": "交通"
  },
  {
    "num": 664,
    "english": "trash",
    "chinese": "垃圾"
  },
  {
    "num": 665,
    "english": "travel",
    "chinese": "旅行"
  },
  {
    "num": 666,
    "english": "treasure",
    "chinese": "寶物"
  },
  {
    "num": 667,
    "english": "treat",
    "chinese": "對待"
  },
  {
    "num": 668,
    "english": "Tuesday",
    "chinese": "星期二"
  },
  {
    "num": 669,
    "english": "tunnel",
    "chinese": "隧道"
  },
  {
    "num": 670,
    "english": "twelfth",
    "chinese": "第十二"
  },
  {
    "num": 671,
    "english": "twelve",
    "chinese": "十二"
  },
  {
    "num": 672,
    "english": "twenty",
    "chinese": "二十"
  },
  {
    "num": 673,
    "english": "understand",
    "chinese": "了解"
  },
  {
    "num": 674,
    "english": "unique",
    "chinese": "獨一無二的"
  },
  {
    "num": 675,
    "english": "universe",
    "chinese": "宇宙"
  },
  {
    "num": 676,
    "english": "university",
    "chinese": "大學"
  },
  {
    "num": 677,
    "english": "upper",
    "chinese": "較高的"
  },
  {
    "num": 678,
    "english": "upstairs",
    "chinese": "在樓上"
  },
  {
    "num": 679,
    "english": "use",
    "chinese": "使用"
  },
  {
    "num": 680,
    "english": "useful",
    "chinese": "有用的"
  },
  {
    "num": 681,
    "english": "usually",
    "chinese": "通常"
  },
  {
    "num": 682,
    "english": "vacation",
    "chinese": "假期"
  },
  {
    "num": 683,
    "english": "vegetable",
    "chinese": "蔬菜"
  },
  {
    "num": 684,
    "english": "victory",
    "chinese": "勝利"
  },
  {
    "num": 685,
    "english": "village",
    "chinese": "村莊"
  },
  {
    "num": 686,
    "english": "vinegar",
    "chinese": "醋"
  },
  {
    "num": 687,
    "english": "visit",
    "chinese": "拜訪"
  },
  {
    "num": 688,
    "english": "volleyball",
    "chinese": "排球"
  },
  {
    "num": 689,
    "english": "wallet",
    "chinese": "皮夾"
  },
  {
    "num": 690,
    "english": "warm",
    "chinese": "溫暖的"
  },
  {
    "num": 691,
    "english": "wash",
    "chinese": "清洗"
  },
  {
    "num": 692,
    "english": "waterfalls",
    "chinese": "瀑布"
  },
  {
    "num": 693,
    "english": "watermelon",
    "chinese": "西瓜"
  },
  {
    "num": 694,
    "english": "Wednesday",
    "chinese": "星期三"
  },
  {
    "num": 695,
    "english": "well",
    "chinese": "安好的/很好地"
  },
  {
    "num": 696,
    "english": "whale",
    "chinese": "鯨魚"
  },
  {
    "num": 697,
    "english": "when",
    "chinese": "何時"
  },
  {
    "num": 698,
    "english": "whether",
    "chinese": "是否"
  },
  {
    "num": 699,
    "english": "winter",
    "chinese": "冬天"
  },
  {
    "num": 700,
    "english": "wonderful",
    "chinese": "極好的"
  }
];
