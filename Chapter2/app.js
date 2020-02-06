var hello = "Hello World"
alert(hello);


var orange = 100;
var apple = 120;

if (orange < apple){
  alert('みかんの値段がりんごより安い')
} else if(orange == apple){
  alert('みかんとりんごが同じ値段')
} else {
  alert('みかんの値段がりんごより高い')
}


var max = 100;
var num = 1;
var count = 0;

// numの値が maxより小さいとき、延々と{}の中の処理が実行される
while(num < max) {
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です')

