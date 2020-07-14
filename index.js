const time = document.getElementById('time');



function showTime() {

	let hour = new Date().getHours();
	let minute = new Date().getMinutes();
	let second = new Date().getSeconds();
	
	if ( hour > 12 ) {		
		hour = hour - 12;
	}

	if ( hour < 10 ) {
		hour = '0' + hour;
	} 

	if ( minute < 10 ) {
		minute = '0' + minute;
	}
	 
	if ( second < 10 ) {
		second = '0' + second;
	}

	time.innerHTML = `${hour}:${minute}:${second}`;

}

setInterval(showTime, 1000);