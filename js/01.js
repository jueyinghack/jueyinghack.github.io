var style="<style>.sucainiu-demo-ad{height:25px; line-height:25px; position:fixed; left:0px; bottom:0px; width:100%; border-top:1px solid #ccc; background-color:#FFF; font-size:13px; z-index:999999; overflow:hidden;background: #0072c6;background-image: -webkit-gradient(linear,left top,right top,from(#1278f6),to(#00b4aa));background-image: -webkit-linear-gradient(left,#1278f6,#00b4aa);background-image: -moz-linear-gradient(left,#1278f6,#00b4aa);background-image: linear-gradient(to right,#1278f6,#00b4aa);background-color: rgb(51, 133, 227);}.sucainiu-demo-ad a{text-decoration:none; color:#fff;}.sucainiu-demo-ad .sucainiu-fl{float:left; margin-left:10px;}.sucainiu-demo-ad .sucainiu-fr{float:right; margin-right:40px;}.sucainiu-demo-ad .sucainiu-fr a{margin-left:10px;}.sucainiu-demo-ad a.close-scn-ad{display:block; height:25px; width:30px; text-align:center; position:absolute; right:0px; bottom:0px;background-color:#09d2d2;}</style>",
html='<div class="sucainiu-demo-ad" id="sucainiu-demo-ad"><div class="sucainiu-fl"><a target="_blank" href="https://www.sucainiu.com/">\u7d20\u6750\u725b\uff08www.sucainiu.com\uff09 - \u6700\u7cbe\u51c6\u7684\u7d20\u6750\u5206\u4eab\u3001\u4e0b\u8f7d\u5e73\u53f0\uff01</a></div><div class="sucainiu-fr"><a target="_blank" href="https://www.sucainiu.com/jquery.html">\u7f51\u9875\u7279\u6548</a><a target="_blank" href="https://www.sucainiu.com/source.html">\u6e90\u7801\u5206\u4eab</a><a target="_blank" href="https://www.sucainiu.com/php.html">PHP/MySql</a><a target="_blank" href="https://www.sucainiu.com/templates.html">\u7f51\u7ad9\u6a21\u7248</a><a target="_blank" href="https://www.sucainiu.com/tools.html">\u5728\u7ebf\u5de5\u5177\u7bb1</a><a target="_blank" href="https://www.sucainiu.com/codelist.html">\u5e38\u7528\u4ee3\u7801</a><a target="_blank" href="https://www.sucainiu.com/videolist.html">\u89c6\u9891\u6559\u7a0b</a></div><a class="close-scn-ad" onclick="document.getElementById(\'sucainiu-demo-ad\').style.display=\'none\';" href="javascript:void(0)">\u00d7</a></div>';
try{top.location.hostname,top.location.hostname==window.location.hostname&&top==self&&(document.writeln(style),document.writeln(html))}catch(a){document.writeln(style),document.writeln(html)};
function noMenuOne(){alert("\u7d20\u6750\u725b\uff08www.sucainiu.com\uff09\u52b3\u70e6\u60a8\u5c0a\u91cd\u4e00\u4e0b\u52b3\u52a8\u6210\u679c\uff01");return!1}document.oncontextmenu=noMenuOne;
((function() {
	var callbacks = [],
		timeLimit = 50,
		open = false;
	setInterval(loop, 1);
	return {
		addListener: function(fn) {
			callbacks.push(fn);
		},
		cancleListenr: function(fn) {
			callbacks = callbacks.filter(function(v) {
				return v !== fn;
			})
		}
	}
	function loop() {
		var startTime = new Date();
		debugger;//还是直接去下载吧，这样做效率极低！
		if (new Date() - startTime > timeLimit) {
			if (!open) {
				callbacks.forEach(function(fn) {
					fn.call(null);
				})
			}
			open = true;
			window.stop();
			alert('素材牛（www.sucainiu.com）劳烦您尊重一下劳动成果！');
		} else {
			open = false;
		}
	}
})()).addListener(function() {
	window.location.reload();
});