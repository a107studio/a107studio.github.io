function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+365)
    document.cookie=c_name+ "=" +escape(value)+";expires="+exdate.toGMTString()+";path=/";
}

function getCookie(c_name)
{
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){ 
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        } 
    }
    return "";
}

function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    document.cookie= name + "=;expires="+exp.toGMTString();
}


( function() {
	var ua = navigator.userAgent.toLowerCase();
	var is = (ua.match(/\b(chrome|opera|safari|msie|firefox)\b/) || [ '',
			'mozilla' ])[1];
	var r = '(?:' + is + '|version)[\\/: ]([\\d.]+)';
	var v = (ua.match(new RegExp(r)) || [])[1];
	jQuery.browser.is = is;
	jQuery.browser.ver = v;
	jQuery.browser[is] = true;

})();

var speed = 5;
var autopage;// = $.cookie("autopage");
var night;
var timer;
var temPos=1;

$(document).ready(function(){
	if(typeof(next_page) != "undefined" ) {
		next_page = next_page;
		autopage = getCookie("autopage");
		
		sbgcolor = getCookie("bcolor");
		setBGColor(sbgcolor);
		
		font = getCookie("font");
		setFont(font);
		
		size = getCookie("size");
		setSize(size);
		
		fontcolor = getCookie("fontcolor");
		setColor(fontcolor);
		
		width = getCookie("width");
		setWidth(width);
		
		speed = getCookie("scrollspeed");
		
		if(autopage==1) {
			$('#autopage').attr("checked",true);
			speed = getCookie("scrollspeed");
			scrollwindow();
		}
		
		night = getCookie('night');
		if(night==1) {
			$('#night').attr('checked',true);
			setNight();
		}
		document.onmousedown=sc;
		document.ondblclick=scrollwindow;
	}
});

if (getCookie("bgcolor") != '') {
    wrapper.style.background = getCookie("bgcolor");
    document.getElementById("bcolor").value = getCookie("bgcolor")
}

function changebgcolor(id) {
    wrapper.style.background = id.options[id.selectedIndex].value;
    setCookie("bgcolor", id.options[id.selectedIndex].value, 365)
}

function setBGColor(sbgcolor){
	$('#wrapper').css("backgroundColor",sbgcolor);
	setCookie("bcolor",sbgcolor,365);
}

function setColor(fontcolor) {
	$("#content").css("color",fontcolor);
	setCookie("fontcolor",fontcolor,365);
}

function setSize(size) {
	$("#content").css("fontSize",size);
	setCookie("size",size,365);
}
function setFont(font) {
	$("#content").css("fontFamily",font);
	setCookie("font",font,365);
}
function setWidth(width){
	$('#content').css("width",width);
	setCookie("width",width,365);
}
function setNight(){
	if($('#night').is(':checked')==true) {
		$('body,div,.this').css("backgroundColor","#111111");
		$('div,a').css("color","#999999");
		setCookie("night",1,{path:'/',expires:365});
	} else {
		$('body,div,.this').css("backgroundColor","");
		$('div,a').css("color","");
		setCookie("night",0,{path:'/',expires:365});
	}
}

function scrolling() 
{  
	var currentpos=1;
	if($.browser.is=="chrome" |document.compatMode=="BackCompat" ){
		currentpos=document.body.scrollTop;
	}else{
		currentpos=document.documentElement.scrollTop;
	}

	window.scroll(0,++currentpos);
	if($.browser.is=="chrome" || document.compatMode=="BackCompat" ){
		temPos=document.body.scrollTop;
	}else{
		temPos=document.documentElement.scrollTop;
	}

	if(currentpos!=temPos){
        ///msie/.test( userAgent )
        var autopage = getCookie("autopage");
        if(autopage==1&&/next_page/.test( document.referrer ) == false) location.href=next_page;
		sc();
	}
}

function scrollwindow(){
	timer=setInterval("scrolling()",250/speed);
}

function sc(){ 
	clearInterval(timer); 
}

function setSpeed(ispeed){ 
	if(ispeed==0)ispeed=5;
	speed=ispeed;
	setCookie("scrollspeed",ispeed,365);
}

function setAutopage(){
	if($('#autopage').is(":checked") == true){
		$('#autopage').attr("checked",true);	
		setCookie("autopage",1,365);
	}else{
		$('#autopage').attr("checked",false);
		setCookie("autopage",0,365);
	}
}

var timestamp = Math.ceil((new Date()).valueOf()/1000); //当前时间戳
var flag_overtime = -1;

		
function textselect(){
document.writeln("<div id=\"page_set\">");
document.writeln("<select onchange=\"javascript:setFont(this.options[this.selectedIndex].value);\" id=\"bcolor\" name=\"bcolor\"><option value=\"宋体\">字体</option><option value=\"方正启体简体\">默认</option><option value=\"黑体\">黑体</option><option value=\"楷体_GB2312\">楷体</option><option value=\"微软雅黑\">雅黑</option><option value=\"方正启体简体\">启体</option><option value=\"宋体\">宋体</option></select>");
document.writeln("<select onchange=\"javascript:setColor(this.options[this.selectedIndex].value);\" id=\"bcolor\" name=\"bcolor\"><option value=\"#000\">颜色</option><option value=\"#000\">默认</option><option value=\"#9370DB\">暗紫</option><option value=\"#2E8B57\">藻绿</option><option value=\"#2F4F4F\">深灰</option><option value=\"#778899\">青灰</option><option value=\"#800000\">栗色</option><option value=\"#6A5ACD\">青蓝</option><option value=\"#BC8F8F\">玫褐</option><option value=\"#F4A460\">黄褐</option><option value=\"#F5F5DC\">米色</option><option value=\"#F5F5F5\">雾白</option></select>");
document.writeln("<select onchange=\"javascript:setSize(this.options[this.selectedIndex].value);\" id=\"bcolor\" name=\"bcolor\"><option value=\"#E9FAFF\">大小</option><option value=\"19pt\">默认</option><option value=\"10pt\">10pt</option><option value=\"12pt\">12pt</option><option value=\"14pt\">14pt</option><option value=\"16pt\">16pt</option><option value=\"18pt\">18pt</option><option value=\"20pt\">20pt</option><option value=\"22pt\">22pt</option><option value=\"25pt\">25pt</option><option value=\"30pt\">30pt</option></select>");
document.write('<select name=scrollspeed id=scrollspeed  onchange="javascript:setSpeed(this.options[this.selectedIndex].value);" ><option value=5>滚屏</option><option value=1>最慢</option><option value=2>慢2</option><option value=3>慢3</option><option value=4>中4</option><option value=5>中5</option><option value=6>中6</option><option value=7>快7</option><option value=8>快8</option><option value=9>快9</option><option value=10>最快</option></select>');
document.writeln("<select onchange=\"javascript:setBGColor(this.options[this.selectedIndex].value);\" id=\"bcolor\" name=\"bcolor\"><option value=\"#E9FAFF\" style=\"background-color: #E9FAFF;\">背景</option><option value=\"#E9FAFF\" style=\"background-color: #E9FAFF;\">默认</option><option value=\"#FFFFFF\" style=\"background-color: #FFFFFF;\">白雪</option><option value=\"#000000\" style=\"background-color: #000000;color:#FFFFFF;\">漆黑</option><option value=\"#FFFFED\" style=\"background-color: #FFFFED;\">明黄</option><option value=\"#EEFAEE\" style=\"background-color: #EEFAEE;\">淡绿</option><option value=\"#CCE8CF\" style=\"background-color: #CCE8CF;\">草绿</option><option value=\"#FCEFFF\" style=\"background-color: #FCEFFF;\">红粉</option><option value=\"#EFEFEF\" style=\"background-color: #EFEFEF;\">深灰</option><option value=\"#F5F5DC\" style=\"background-color: #F5F5DC;\">米色</option><option value=\"#D2B48C\" style=\"background-color: #D2B48C;\">茶色</option><option value=\"#C0C0C0\" style=\"background-color: #E7F4FE;\">银色</option></select>");
document.writeln("<select onchange=\"javascript:setWidth(this.options[this.selectedIndex].value);\" id=\"bcolor\" name=\"bcolor\"><option value=\"95%\">宽度</option><option value=\"95%\">默认</option><option value=\"85%\">85%</option><option value=\"76%\">75%</option><option value=\"67%\">65%</option><option value=\"53%\">50%</option><option value=\"41%\">40%</option></select>");
document.writeln("</select>翻页<input type=checkbox name=autopage id=autopage onchange=\"javascript:setAutopage();\" value=\"\" />&nbsp;夜间<input type=checkbox name=night id=night onchange=\"javascript:setNight();\" value=\"\" /></div>");
}


function LastRead(){this.bookList="bookList"}
LastRead.prototype={
	set:function(bid,tid,title,texttitle,author,sortname){
		if(!(bid&&tid&&title&&texttitle&&author&&sortname))return;
		var v=bid+'#'+tid+'#'+title+'#'+texttitle+'#'+author+'#'+sortname;
		this.setItem(bid,v);
		this.setBook(bid)
	},
	get:function(k){
		return this.getItem(k)?this.getItem(k).split("#"):"";
	},
	remove:function(k){
		this.removeItem(k);
		this.removeBook(k)
	},
	setBook:function(v){
		var reg=new RegExp("(^|#)"+v);
		var books =	this.getItem(this.bookList);
		if(books==""){
			books=v
			}
		 else{
			 if(books.search(reg)==-1){
				 books+="#"+v
				 }
			 else{
				  books.replace(reg,"#"+v)
				 }
			 }
		this.setItem(this.bookList,books)
	},
	getBook:function(){
		var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array();
		var books=Array();
		if(v.length){
			for(var i=0;i<v.length;i++){
				var tem=this.getItem(v[i]).split('#');
				if (tem.length>3)books.push(tem);
				}
			}
		return books
	},
	removeBook:function(v){
	    var reg=new RegExp("(^|#)"+v);
		var books=this.getItem(this.bookList);
		if(!books){
			books=""
			}
		 else{
			 if(books.search(reg)!=-1){
			      books=books.replace(reg,"")
				 }
			 }
		this.setItem(this.bookList,books)
	},
	setItem:function(k,v){
		if(!!window.localStorage){
			localStorage.setItem(k,v);
		}
		else{
			var expireDate=new Date();
			  var EXPIR_MONTH=30*24*3600*1000;
			  expireDate.setTime(expireDate.getTime()+12*EXPIR_MONTH)
			  document.cookie=k+"="+encodeURIComponent(v)+";expires="+expireDate.toGMTString()+"; path=/";
		}
	},
	getItem:function(k){
		var value=""
		var result=""
		if(!!window.localStorage){
			result=window.localStorage.getItem(k);
			 value=result||"";
		}
		else{
			var reg=new RegExp("(^| )"+k+"=([^;]*)(;|\x24)");
			var result=reg.exec(document.cookie);
			if(result){
				value=decodeURIComponent(result[2])||""}
		}
		return value
	},
	removeItem:function(k){
		if(!!window.localStorage){
		 window.localStorage.removeItem(k);
		}
		else{
			var expireDate=new Date();
			expireDate.setTime(expireDate.getTime()-1000)
			document.cookie=k+"= "+";expires="+expireDate.toGMTString()
		}
	},
	removeAll:function(){
		if(!!window.localStorage){
		 window.localStorage.clear();
		}
		else{
		var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array();
		var books=Array();
		if(v.length){
			for( i in v ){
				var tem=this.removeItem(v[k])
				}
			}
			this.removeItem(this.bookList)
		}
	}
}
window.lastread = new LastRead();
