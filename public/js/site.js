$(function(){function e(e,t){e.find(".active").removeClass("active"),t.addClass("active")}function t(){function t(t){e(i,t),n(t)}function n(e){var t=e.position().left+parseInt(e.css("paddingLeft"))+.5;a.css({width:e.width(),transform:"translate("+t+"px,0)"})}var i=$(".header .nav"),o=i.find(".active"),a=i.find(".slideblock");n(o),setTimeout(function(){a.addClass("animation").removeClass("hidden")},0),i.find("a").hover(function(){t($(this))},function(){t(o)}),$(window).resize(function(){clearTimeout(this.timer),this.timer=setTimeout(function(){n(i.find(".active"))},400)})}function n(){$("body").height()>$(".page-header").outerHeight()+$(".page-content").outerHeight()+$(".page-footer").outerHeight()&&$(".page-footer").css({width:"100%",position:"absolute",bottom:0}),$(".page-footer").show()}function i(e,t){var n=document.createElement("script");n.onload=t,n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}function o(e,t){var n=document.createElement("link");n.onload=t,n.href=e,n.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(n)}t(),n(),$("#open").click(function(){d.open()}),$("#pause").click(function(){d.pause()}),o("//cdn.bootcss.com/prettify/r298/prettify.min.css"),i("//cdn.bootcss.com/prettify/r298/prettify.min.js",function(){$(".prettyprint").length?prettyPrint():$(".quick-getting").length&&"import use use-method config-default".split(" ").forEach(function(e){$.get("/code-demo/"+e+".html",function(t){$("."+e).text(t).addClass("prettyprint"),prettyPrint(),"use"===e&&(window.d=new Particleground.particle("#demo",{dis:80,range:60}))})})}),/\/examples\/quick-getting/i.test(location.href)?window.localStorage.setItem("read",!0):window.localStorage.getItem("read")||$(".eg-container >.menu >h5:eq(1)").append('<i class="essential pa">必读</i>')});
//# sourceMappingURL=map/site.js.map