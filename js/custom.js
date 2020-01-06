// navgation
$(".menu li").hover(
	function () {
		$(this).find('ul:first').css({
			visibility: "visible",
			display: "none"
		}).stop(true, true).fadeIn(100);
	},
	function () {
		$(this).find('ul:first').css({
			visibility: "visible",
			display: "block"
		}).stop(true, true).fadeOut(100);
	}
);

$("select.selectnav").change(function() {
	window.location = $(this).find("option:selected").val();
});

//#@+livechat-zenith-content
document.write('<script src="https://mqg.zoosnet.net/JS/LsJS.aspx?siteid=MQG10186802&float=1&lng=en"><\/script>');   
//#@-livechat-zenith-content

document.oncontextmenu=new Function("event.returnValue=false");
document.onselectstart=new Function("event.returnValue=false");

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-54928938-11', 'auto');
  ga('send', 'pageview');
