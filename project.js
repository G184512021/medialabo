
  
  /////////// 課題3-2 ここからプログラムを書こう
let b = document.querySelector('#print');
b.addEventListener('click', sendRequest);


// 2. イベントハンドラの定義

// 通信を開始する処理
function sendRequest() {

  let i = document.querySelector('input[name="genre"]');
  let genre = i.value;
	// URL を設定


	let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

function showResult(resp) {
	// サーバから送られてきたデータを出力
  let count =0;
	let data = resp.data;
  let result = ("検索結果：");
  let v = document.querySelector('span#aa');
  v.textContent = result;
  let dp = document.querySelector('div#placeholder');
  let ddp = document.querySelector('div#aaa');
  for(let n of data.results.shop){
    count ++;
    console.log(n.name);
    p.textContent =(count+"店目: "+n.name);
    let p = document.createElement('p');
    let d = document.createElement('div');
    d.insertAdjacentElement('beforeend', p);
    dp.insertAdjacentElement('beforeend', d);
    let pp = document.createElement('pp');
    pp.textContent =("アクセス情報: "+n.access);
    let dd = document.createElement('div');
    dd.insertAdjacentElement('beforeend', pp);
    ddp.insertAdjacentElement('beforeend', dd);
  }
	
}

function showError(err) {
	console.log(err);
}	

function finish() {
	console.log('該当する店舗は以上です。');
}