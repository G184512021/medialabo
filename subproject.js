let b = document.querySelector('#print');
b.addEventListener('click', sendRequest);


// 2. イベントハンドラの定義

// 通信を開始する処理
function sendRequest() {

  let i = document.querySelector('input[name="genre"]');
  let genre = i.value;
	// URL を設定


	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+genre+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

function showResult(resp) {
	// サーバから送られてきたデータを出力
    let data = resp.data;
    console.log(data);
    let t = document.querySelector('span#t');
    t.textContent = data.name;
    let i =document.querySelector('span#i')
    i.textContent= data.coord.lon+"度";
    let k =document.querySelector('span#k')
    k.textContent= data.coord.lat+"度";
    let tk =document.querySelector('span#tk')
    tk.textContent= data.weather.description;
    let max =document.querySelector('span#max')
    max.textContent= data.main.temp_max+"度";
    let min =document.querySelector('span#min')
    min.textContent= data.main.temp_min+"度";
    let s =document.querySelector('span#s')
    s.textContent= data.main.humidity+"パーセント";
}

function showError(err) {
	console.log(err);
}	

function finish() {
	console.log('終了');
}