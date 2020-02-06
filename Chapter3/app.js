// ジャンケンのやつ
var user_hand = prompt('じゃんけんの手をぐー、チョキ、パーから選択してください')

while(user_hand != 'グー' && user_hand != 'チョキ' && user_hand != 'パー' && user_hand != null){
  alert('グー・チョキ・パーのいずれかを入力してください')
  user_hand = prompt('じゃんけんの手をぐー、チョキ、パーから選択してください')
}

var js_hand = getJShand();
var judge = winLose(user_hand,js_hand);


// メッセージ出力をするときの判定
if(user_hand == "グー" || user_hand == "チョキ" || user_hand == "パー"){
  alert('あなたの選んだ手は' + user_hand + 'です。\n JavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else if(user_hand == null){
  alert('またチャレンジしてね');
}

function getJShand(){
  // 相手のジャンケンの手を作る関数
  // floor関数で引数として与えた数以下の最大の整数を返します。
  // Math.random()関数は、0~0.99までしか生成されないず、1は作られない。
  // 0~2のランダム値を作りたい場合は、「 * 3 」 を行うことで 0~2.97までの数値が作られるよ
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else{
    hand_name = "パー";
  }
  return hand_name;
}


function winLose(user,js) {
  var winLoseStr;

  if(user == "グー"){
      if(js == "グー"){
        winLoseStr = "あいこ"
      }else if(js == "チョキ") {
        winLoseStr = "あなたの勝ち"
      }else{
        winLoseStr = "あなたの負け"
      }
  }else if(user == "チョキ"){
      if(js == "グー"){
        winLoseStr = "あなたの負け"
      }else if(js == "チョキ") {
        winLoseStr = "あいこ"
      }else{
        winLoseStr = "あなたの勝ち"
      }    
  }else if(user == "パー"){
      if(js == "グー"){
        winLoseStr = "あなたの勝ち"
      }else if(js == "チョキ") {
        winLoseStr = "あなたの負け"
      }else{
        winLoseStr = "あいこ"
      }    
  }
  return winLoseStr
}