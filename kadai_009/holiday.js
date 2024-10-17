const holidays = ["元日", "成人の日", "建国記念の日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"]

for (let i = 0; i <= 15 ; i++) {
    console.log(holidays[i]);
  }

  let num = Math.floor(Math.random() * 15);

  // 変数numの値が0以外である間、変数numの値を出力し続ける
  while (num !== 0) {
    num = Math.floor(Math.random() * 15);
    console.log(holidays[num]);
  }