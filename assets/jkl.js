var script_loaded=!1;function loadJSscripts(){if(!script_loaded){script_loaded=!0;var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)null!==t[i].getAttribute("rdata-src")&&(t[i].setAttribute("src",t[i].getAttribute("rdata-src")),delete t[i].dataset.src);var e=document.getElementsByTagName("link");for(i=0;i<e.length;i++)null!==e[i].getAttribute("data-href")&&(e[i].setAttribute("href",e[i].getAttribute("data-href")),delete e[i].dataset.href);document.dispatchEvent(new CustomEvent("StartKernelLoading")),setTimeout(function(){document.dispatchEvent(new CustomEvent("StartAsyncLoading"))},600),document.querySelectorAll(".lazyload_image").forEach(t=>{void 0!==t.dataset.src&&(t.src=t.dataset.src),void 0!==t.dataset.srcset&&(t.srcset=t.dataset.srcset),t.classList.remove("lazyload_image")})}}window.addEventListener("scroll",function(t){loadJSscripts()}),window.addEventListener("mousemove",function(){loadJSscripts()}),window.addEventListener("touchstart",function(){loadJSscripts()}),window.addEventListener?window.addEventListener("load",function(){setTimeout(loadJSscripts,9e3)},!1):window.attachEvent?window.attachEvent("onload",function(){setTimeout(loadJSscripts,9e3)}):window.onload=loadJSscripts;

var windowWidth,lazyImages,lazyBackground,lazyIframe,lazyScripts,navigator_platform,src,style,datasrc,urls,analytics,s,x,i,j,flag;function ks_init(){flag&&(flag=0,lazyLoadImg(),lazyLoadBackground(),lazyLoadIframe(),load_all_js())}function isElementInViewport(t){var a=t.getBoundingClientRect();return a.top>=0&&a.left>=0&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&a.right<=(window.innerWidth||document.documentElement.clientWidth)}function lazyLoadImg(){lazyImages.forEach(function(t){null!=(src=windowWidth<600?null==t.dataset.mobsrc?t.dataset.src:t.dataset.mobsrc:t.dataset.src)&&(t.src=src),t.classList.remove("opt_lazy")})}function lazyLoadImg2(){lazyImages.forEach(function(t){isElementInViewport(t)&&(null!=(src=windowWidth<600?null==t.dataset.mobsrc?t.dataset.src:t.dataset.mobsrc:t.dataset.src)&&(t.src=src),t.classList.remove("lazy"))})}function lazyLoadBackground(){lazyBackground.forEach(function(t){lazybg=windowWidth<600?null==t.dataset.mobstyle?t.dataset.style:t.dataset.mobstyle:t.dataset.style,null!=lazybg&&(t.style=lazybg),t.classList.remove("lazybg")})}function lazyLoadIframe(){lazyIframe.forEach(function(t){null!=t.dataset.src&&(t.src=t.dataset.src)})}function lazyLoadScripts(){j!=lazyScripts.length&&("lazyload2"==lazyScripts[j].getAttribute("type")?(lazyScripts[j].setAttribute("type","lazyloaded"),void 0!==lazyScripts[j].dataset.src?((s=document.createElement("script")).src=lazyScripts[j].dataset.src,document.body.appendChild(s),s.onload=function(){j++,lazyLoadScripts()}):((s=document.createElement("script")).innerHTML=lazyScripts[j].innerHTML,document.body.appendChild(s),j++,lazyLoadScripts())):(j++,lazyLoadScripts()))}function lazyLoadCss(t){(s=document.createElement("link")).rel="stylesheet",s.href=t,document.getElementsByTagName("head")[0].appendChild(s)}function lazyLoadJS(t){(s=document.createElement("script")).src=t,document.body.appendChild(s)}document.addEventListener("DOMContentLoaded",function(){windowWidth=screen.width,lazyImages=document.querySelectorAll("img.opt_lazy"),nolazyImages=document.querySelectorAll("img.opt_lazy"),lazyBackground=document.querySelectorAll(".lazybg"),lazyIframe=document.querySelectorAll("iframe"),lazyScripts=document.getElementsByTagName("script"),navigator_platform=navigator.platform,i=0,j=0,flag=1,window.addEventListener("scroll",function(){ks_init()}),window.addEventListener("mousemove",function(){ks_init()}),window.addEventListener("touchstart",function(){ks_init()}),"Linux x86_64"!=navigator_platform&&ks_init()});

function load_all_js() {
	document.body.click();
	lazyLoadCss("https://cdn.shopify.com/s/files/1/0284/2391/3547/t/32/compiled_assets/styles.css?19443");

	if (window.location.href.indexOf("petsmont.myshopify.com") > -1 || window.location.href.indexOf("/cart") > -1 || window.location.href.indexOf("/checkout") > -1) {
		
	} else {
		
		setTimeout(function() {
			const ks_load = new Event('ks_load');
			window.dispatchEvent(ks_load);
            $("body").trigger("mousemove");
		}, 200);

		//lazyLoadJS("https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/load_feature-24ff1222c9aa13bb217653c0d3ea28c40a796a280e6da29ad421eec2a6075c86.js");
	}

	j=0;
	lazyScripts = document.getElementsByTagName("script");
	lazyLoadScripts('https://cdn.shopify.com/shopifycloud/boomerang/shopify-boomerang-1.0.0.min.js');

	setInterval(function() {
		lazyImages = document.querySelectorAll('img.opt_lazy');
		lazyBackground = document.querySelectorAll('.lazybg');
		lazyLoadImg();
		lazyLoadBackground();
	}, 2000);
}