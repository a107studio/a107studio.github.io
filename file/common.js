if(/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
	var htmltest=document.getElementsByTagName('head')[0].innerHTML;
	var murl=htmltest.match(/format=html5; url=(.+?)"/)[1];
	location.href=murl;
}
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
var bookUserName=getCookie("username");


function search(){
document.writeln("<form action=\"https://so.biqusoso.com/s.php\" name=\"form\" id=\"sform\" target=\"_blank\" method=\"get\">");
document.writeln("<div class=\"search\">");
document.writeln("<input type=\"hidden\" name=\"siteid\" value=\"zanghaihuatxt.com\">");
document.writeln("<input type=\"hidden\" name=\"s\" value=\"5256649918672294880\">");
document.writeln("<input type=\"hidden\" name=\"ie\" value=\"gbk\">");
document.writeln("<input name=\"q\" type=\"text\" class=\"input\" value=\"输入需要搜索的小说\" onblur=\"if (value ==\'\'){value=\'输入需要搜索的小说\'}\" onfocus=\"if (value ==\'输入需要搜索的小说\'){value =\'\'}\" id=\"bdcsMain\"/><span class=\"s_btn\"><input type=\"submit\" value=\" 搜 索 \" class=\"button\"></span>");
document.writeln("</div>");
document.writeln("</form>");
document.writeln("<div class=\"srarchHot\">");
document.writeln("<strong>热门：</strong>");
document.writeln("<a target=\"_blank\" href=\"/0_819/\"\">我是至尊</a>");
document.writeln("<a target=\"_blank\" href=\"/0_4/\">极道天魔</a>");
document.writeln("<a target=\"_blank\" href=\"/0_931/\">牧神记</a>");
document.writeln("<a target=\"_blank\" href=\"/0_372/\">道君</a>");
document.writeln("<a target=\"_blank\" href=\"/0_866/\">剑来</a>");
document.writeln("<a target=\"_blank\" href=\"/0_5/\">浴血兵魂</a>");
document.writeln("<a target=\"_blank\" href=\"/0_26/\">大主宰</a>");
document.writeln("</div>");
}

function bdshare(){
document.writeln("<div class=\'bdsharebuttonbox\'><a href=\'#\' class=\'bds_qzone\' data-cmd=\'qzone\' title=\'分享到QQ空间\'>QQ空间</a><a href=\'#\' class=\'bds_tsina\' data-cmd=\'tsina\' title=\'分享到新浪微博\'>新浪微博</a><a href=\'#\' class=\'bds_tqq\' data-cmd=\'tqq\' title=\'分享到腾讯微博\'>腾讯微博</a><a href=\'#\' class=\'bds_renren\' data-cmd=\'renren\' title=\'分享到人人网\'>人人网</a><a href=\'#\' class=\'bds_sqq\' data-cmd=\'sqq\' title=\'分享到QQ好友\'>QQ好友</a><a href=\'#\' class=\'bds_weixin\' data-cmd=\'weixin\' title=\'分享到微信\'>微信</a><a href=\'#\' class=\'bds_bdysc\' data-cmd=\'bdysc\' title=\'分享到百度云收藏\'>百度云收藏</a><a href=\'#\' class=\'bds_tieba\' data-cmd=\'tieba\' title=\'分享到百度贴吧\'>百度贴吧</a><a href=\'#\' class=\'bds_ty\' data-cmd=\'ty\' title=\'分享到天涯社区\'>天涯社区</a><a href=\'#\' class=\'bds_fbook\' data-cmd=\'fbook\' title=\'分享到Facebook\'>Facebook</a><a href=\'#\' class=\'bds_isohu\' data-cmd=\'isohu\' title=\'分享到我的搜狐\'>我的搜狐</a><a href=\'#\' class=\'bds_mshare\' data-cmd=\'mshare\' title=\'分享到一键分享\'>一键分享</a><a href=\'#\' class=\'bds_copy\' data-cmd=\'copy\' title=\'分享到复制网址\'>复制网址</a><a href=\'#\' class=\'bds_more\' data-cmd=\'more\'>更多</a><a class=\"bds_count\" data-cmd=\"count\"></a></div>");
document.writeln("<script>window._bd_share_config={\'common\':{\'bdSnsKey\':{},\'bdText\':\'\',\'bdMini\':\'2\',\'bdMiniList\':false,\'bdPic\':\'\',\'bdStyle\':\'0\',\'bdSize\':\'16\'},\'share\':{\'bdSize\':16}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
}




document.writeln("<script src=\'book.js\'></script>");

function footer(){

document.writeln("<p>本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。</p>");
document.writeln("<p>Copyright &copy; 2013 zanghaihuatxt.com笔趣阁 All Rights Reserved.</p>");

}

function tj(){
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1350dc654fc1cc3362f6c5ff835b9b2a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?28a830bc50943c6d8410670daf8c3770";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var zhhbq = document.domain;

if(zhhbq.indexOf("zhhbiqu") != -1){
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?dde36e886b1c7a462710ebecc6e32714";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
}


var zhhtxt = document.domain;

if(zhhtxt.indexOf("zhhtxt") != -1){
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?a2cc5421e9822a3d76f4e66f93a245eb";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();
}


(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


function isList(){var b,a=new Array("作者：","状态：","更新：","最新：","分类：","字数：","最新章节：");for(i in a)if(b=a[i],document.body.innerText.indexOf(b)>0)return!0;return!1}function getBookId(a){var b,c;return a=a.split("?")[0],b=a.match(/([0-9]+)/gi),null==b?!1:(c=b.length,c>2?!1:2==c&&b[0]==Math.floor(b[1]/1e3)?b[1]:1==c?b[0]:!1)}var gif,ym;isList()&&(bookid=getBookId(window.location.pathname)),gif=new Image(1,1),ym=document.domain.substring(document.domain.lastIndexOf(".",5)+1),"undefined"!=typeof bookid&&0!=bookid&&(gif.src="https://www.mmkkiivv.com/cc/"+ym+"/"+bookid+"/gif");
}


$(document).ready(function(){
	$(".showall").click(function(){$(".noshow").toggle();$(".showall").html('');});
});

function login(){
document.writeln("<div class=\"ywtop\"><div class=\"ywtop_con\"><div class=\"ywtop_sethome\"><a onClick=\"this.style.behavior='url(#default#homepage)';this.setHomePage('http://'+location.hostname);\" href=\"#\">将本站设为首页</a></div>");
document.writeln("		<div class=\"ywtop_addfavorite\"><a href=\"javascript:window.external.addFavorite(\'http://"+location.hostname+"\',\'笔趣阁_书友最值得收藏的网络小说阅读网\')\">收藏笔趣阁</a></div>");
document.write('<div class="nri">');
if(bookUserName != '' && bookUserName != undefined){
  document.write('Hi,'+bookUserName+'&nbsp;&nbsp;<a href="/user/bookcase.php" target="_top">我的书架</a>');
  document.write('&nbsp;&nbsp;|&nbsp;&nbsp;<a rel="nofollow" href="javascript:;" onclick="logout();">退出登录</a>&nbsp;');
}else{
  document.write('<form name="mylogin" id="mylogin" method="post" action="/user/login.php?action=login&usecookie=1&url='+location.href+'">');
  document.write('<div class="cc"><div class="txt">账号：</div><div class="inp"><input type="text" name="LoginForm[username]" id="username" /></div></div>');
  document.write('<div class="cc"><div class="txt">密码：</div><div class="inp"><input type="password" name="LoginForm[password]" id="password" /></div></div>');
  document.write('<div class="frii"><input type="submit" class="int" value="登 陆" /></div><div class="ccc"><div class="txtt"></div><div class="txtt"><a href="/user/register.php?url='+location.href+'">用户注册</a></div></div></form>');
  }
 document.write('</div></div></div>');
}
function logout(){
	setCookie("username",'',1);location.reload();
}
function addBookCase(bookid){
	$.post("/user/addcase.php",
        { action: "addbookcase", bookid: bookid },
        function(data){
            if(data==-1)
            {
              location.href = "/user/login.php?url="+location.href;
            }
            else if(data==0)
            {
                alert("书架已满，加入书架出错！");
            }
            else if(data==1)
            {
                alert("加入书架成功！");
            }
            else if(data==2)
            {
                alert("该书已在书架中！");
           }else{alert("加入书架出错！");}
        }
    );
}
function addBookMark(bookId,chapterId,articleName,chapterName){
    $.post("/user/addcase.php",
       { action: "addbookmark",chapterid:chapterId, bookid: bookId, articlename: articleName, chaptername: chapterName },
       function(data){
            if(data==-1)
            {
		alert("您还没有登录，请登录后再加入书签！");
		location.href = "/user/login.php?url="+location.href+"#footer";
            }
            else if(data==0)
            {
                alert("书架已满，加入书架出错！");
            }
            else if(data==1)
            {
                alert("加入书签成功！");
            }else{alert("加入书签出错！");}
 
        }
    );
}

function posterror(){
	if(confirm('确定本章节错误？？')){
		gif = new Image(1,1);
        gif.src = "https://so.biqusoso.com/posterror.php?url="+document.location.href;
		alert("报送错误章节成功，我们会尽快处理！");
	}
	
}
function chaptererror(){
	document.writeln("<div align=\"center\" ><a href=\"javascript:posterror();\" style=\"text-align:center;color:red;\">章节错误,点此举报(免注册)我们会尽快处理.</a>举报后请耐心等待,并刷新页面。</div>");
}
function mchaptererror(){
	document.writeln("<div align=\"center\" ><a href=\"javascript:posterror();\" style=\"text-align:center;color:red;\">『章节错误,点此举报』</a></div>");
}