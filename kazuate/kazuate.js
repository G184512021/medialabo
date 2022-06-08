// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する

// ボタンを押した後の処理をする関数 hantei() の定義
let b = document.querySelector('#print');
b.addEventListener('click', hantei);


function hantei() {
    let i = document.querySelector('input[name="genre"]');
	let yoso = i.value;
 // 第5回課題:テキストボックスの数値をここに代入
    let pre =(kaisu + "回目の予想：　"+ yoso);
    let s = document.querySelector('span#pre');
    s.textContent = pre;
    if(kotae ==yoso&&kaisu!==5){
        ans =("正解。おめでとう！");
    }else if(yoso!== kotae && kaisu === 4){
        ans =("間違い、答えは　"+kotae+"です。");
    }else if(kaisu >=4){
        ans =("答えは　"+kotae+"でした。すでにゲームは終了しています。");
    }else if(kotae>yoso){
        ans =("間違い。答えはもっと大きいですよ");
    }else if(kotae<yoso){
        ans =("間違い。答えはもっと小さいですよ");
    }else if(yoso!== kotae && kaisu === 4){
        ans =("間違い、答えは　"+kotae+"です。");
    }
    let d = document.querySelector('span#ans');
    d.textContent =ans;
    kaisu++;
}
