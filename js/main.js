function loadItems(e,t){$.getJSON("../"+e+".json",(function(e){console.log(e);var s="";for(var i in e)s+='<div class = "slide">',s+='<img src="'+e[i].images+'">',s+="<h2>"+e[i].name+"</h2>",s+="<span><strike>"+e[i].discount+"</strike></span>",s+="<span>"+e[i].cost+"</span>",s+="</div>";$("#"+t).slick("slickAdd",s)}))}function loadSmallItems(e,t){$.getJSON("../"+e+".json",(function(e){console.log(e);var s="";for(var i in e)s+='<div class = "slide">',s+='<img src="'+e[i].images+'">',s+='<div class = "right-side">',s+="<h2>"+e[i].name+"</h2>",s+="<span><strike>"+e[i].discount+"</strike></span><br>",s+="<span>"+e[i].cost+"</span>",s+="</div>",s+="</div>";$("#"+t).slick("slickAdd",s)}))}function ibg(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}!function(){let e=[],t=document.querySelectorAll("[data-da]"),s=[],i=[];if(t.length>0){let l=0;for(let i=0;i<t.length;i++){const o=t[i],r=o.getAttribute("data-da");if(""!=r){const t=r.split(","),i=t[1]?t[1].trim():"last",d=t[2]?t[2].trim():"767",c="min"===t[3]?t[3].trim():"max",u=document.querySelector("."+t[0].trim());t.length>0&&u&&(o.setAttribute("data-da-index",l),e[l]={parent:o.parentNode,index:(n=o,a=void 0,a=Array.prototype.slice.call(n.parentNode.children),a.indexOf(n))},s[l]={element:o,destination:document.querySelector("."+t[0].trim()),place:i,breakpoint:d,type:c},l++)}}(o=s).sort((function(e,t){return e.breakpoint>t.breakpoint?-1:1})),o.sort((function(e,t){return e.place>t.place?1:-1}));for(let e=0;e<s.length;e++){const t=s[e],o=t.breakpoint,n=t.type;i.push(window.matchMedia("("+n+"-width: "+o+"px)")),i[e].addListener(r)}}var o,n,a;function r(e){for(let e=0;e<s.length;e++){const t=s[e],o=t.element,n=t.destination,a=t.place,r="_dynamic_adapt_"+t.breakpoint;if(i[e].matches){if(!o.classList.contains(r)){let e=d(n)[a];"first"===a?e=d(n)[0]:"last"===a&&(e=d(n)[d(n).length]),n.insertBefore(o,n.children[e]),o.classList.add(r)}}else o.classList.contains(r)&&(l(o),o.classList.remove(r))}}function l(t){const s=t.getAttribute("data-da-index"),i=e[s],o=i.parent,n=i.index,a=d(o,!0)[n];o.insertBefore(t,o.children[a])}function d(e,t){const s=e.children,i=[];for(let e=0;e<s.length;e++){const o=s[e];(t||null==o.getAttribute("data-da"))&&i.push(e)}return i}r()}(),$(document).ready((function(){$(".header__top-header_burger").click((function(){$(".menu__link,.input-value,.menu__search_button,.header__top-header_burger,.header__menu,.header__top-header_title,.menu__bottom").toggleClass("active")})),$(".main__categories_type").click((function(){$(this).find(".main__categories_hidden").toggleClass("active")})),loadItems("new-product","new-product"),loadItems("new-product","latest-product"),loadItems("items","items"),loadItems("items","items2"),loadSmallItems("new-product","featured-product"),loadSmallItems("new-product","second-featured-product"),$(".big-column__new-products_slider").slick({arrows:!0,dots:!1,infinite:!0,autoplay:!1,autoplaySpeed:5e3,draggable:!1,touchMove:!1,waitForAnimate:!0,accessibylity:!0,fade:!1,slidesToShow:4,focusOnSelect:!1,responsive:[{breakpoint:1590,settings:{slidesToShow:3}},{breakpoint:1490,settings:{slidesToShow:2}},{breakpoint:880,settings:{slidesToShow:1}}]}),$(".small-column__item-sell_first-slider").slick({arrows:!0,dots:!1,infinite:!0,autoplay:!1,autoplaySpeed:5e3,draggable:!1,touchMove:!1,waitForAnimate:!0,accessibylity:!0,fade:!1,slidesToShow:1,focusOnSelect:!1}),$(".big-column__latest-products_slider").slick({arrows:!0,dots:!1,infinite:!0,autoplay:!1,autoplaySpeed:5e3,draggable:!1,touchMove:!1,waitForAnimate:!0,accessibylity:!0,fade:!1,slidesToShow:4,focusOnSelect:!1,responsive:[{breakpoint:1590,settings:{slidesToShow:3}},{breakpoint:1490,settings:{slidesToShow:2}},{breakpoint:880,settings:{slidesToShow:1}}]}),$(".big-column__featured-products_slider").slick({arrows:!0,dots:!1,infinite:!0,autoplay:!1,autoplaySpeed:5e3,draggable:!1,touchMove:!1,waitForAnimate:!0,accessibylity:!0,fade:!1,slidesToShow:4,focusOnSelect:!1,asNavFor:".big-column__featured-products_second-slider",responsive:[{breakpoint:1590,settings:{slidesToShow:3}},{breakpoint:1490,settings:{slidesToShow:2}},{breakpoint:880,settings:{slidesToShow:2}}]}),$(".big-column__featured-products_second-slider").slick({arrows:!1,dots:!1,fade:!1,slidesToShow:4,focusOnSelect:!1,asNavFor:".big-column__featured-products_slider",responsive:[{breakpoint:1590,settings:{slidesToShow:3}},{breakpoint:1490,settings:{slidesToShow:2}},{breakpoint:880,settings:{slidesToShow:2}}]})})),ibg();
//# sourceMappingURL=main.js.map