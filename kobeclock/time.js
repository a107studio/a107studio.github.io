window.onload = function() {
		var oDiv = document.getElementById("main");
		var imgs = document.getElementsByTagName("img");
		var timer = null;
		/*判断获取到的数字是否小于10*/
		function checkTime(x) {
			if(x<10) return "0" + x;
			else return "" + x;
		}
		/*鼠标点击事件*/
		oDiv.onmouseover = function() {
			clearInterval(timer);
			fnDate();
		};
		oDiv.onmouseout = function() {
			clearInterval(timer);
			fnTime();
		};
		
		/*获取的日期函数*/
		function oShowDate() {
		 	var oDate = new Date();
		 	var oYea = oDate.getFullYear();
		 	oYea = oYea.toString();
			var oMon = oDate.getMonth()+1;
			var oDay = oDate.getDate();
			var str = oYea.substr(2,2) + checkTime(oMon) + checkTime(oDay);
			var aPar = document.getElementsByTagName("span");
			for (var i=0; i<imgs.length; i++) {
				imgs[i].src = "images/" + str[i] + ".JPG";
			}
			
			for (var j=0; j<aPar.length; j++) {
				aPar[j].innerHTML = "-";
			}
		}
		
		/*获取的时间函数*/
		function oShowTime() {
			var oDate = new Date();
			var oHou = oDate.getHours();
			var oMin = oDate.getMinutes();
			var oSec = oDate.getSeconds();
			var str = checkTime(oHou) + checkTime(oMin) + checkTime(oSec);
			var aPar = document.getElementsByTagName("span");
			for (var i=0; i<imgs.length; i++) {
				imgs[i].src = "images/" + str[i] + ".JPG";
			}
			for (var j=0; j<aPar.length; j++) {
				aPar[j].innerHTML = ":";
			}
		}
		
		function fnDate() {
			timer = setInterval(oShowDate, 1000);
			oShowDate();
		}
		function fnTime() {
			timer = setInterval(oShowTime, 1000);
			oShowTime();
		}	
		fnTime();
		
	};