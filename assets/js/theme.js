"use strict";var theme={init:function(){theme.stickyHeader(),theme.subMenu(),theme.offCanvas(),theme.isotope(),theme.onepageHeaderOffset(),theme.anchorSmoothScroll(),theme.svgInject(),theme.backgroundImage(),theme.backgroundImageMobile(),theme.imageHoverOverlay(),theme.rellax(),theme.scrollCue(),theme.swiperSlider(),theme.lightbox(),theme.plyr(),theme.progressBar(),theme.loader(),theme.pageProgress(),theme.counterUp(),theme.bsTooltips(),theme.bsPopovers(),theme.bsModal(),theme.iTooltip(),theme.forms(),theme.passVisibility(),theme.pricingSwitcher(),theme.textRotator(),theme.codeSnippet()},stickyHeader:()=>{if(null!=document.querySelector(".navbar"))new Headhesive(".navbar",{offset:350,offsetSide:"top",classes:{clone:"navbar-clone fixed",stick:"navbar-stick",unstick:"navbar-unstick"},onStick:function(){var e=this.clonedElem.classList;e.contains("transparent")&&e.contains("navbar-dark")&&(this.clonedElem.className=this.clonedElem.className.replace("navbar-dark","navbar-light"))}})},subMenu:()=>{!function(e){const t="has-child-dropdown-show";var o;e.Dropdown.prototype.toggle=(o=e.Dropdown.prototype.toggle,function(){document.querySelectorAll("."+t).forEach((function(e){e.classList.remove(t)}));let e=this._element.closest(".dropdown").parentNode.closest(".dropdown");for(;e&&e!==document;e=e.parentNode.closest(".dropdown"))e.classList.add(t);return o.call(this)}),document.querySelectorAll(".dropdown").forEach((function(e){e.addEventListener("hide.bs.dropdown",(function(e){this.classList.contains(t)&&(this.classList.remove(t),e.preventDefault()),e.stopPropagation()}))}))}(bootstrap)},offCanvas:()=>{const e=document.querySelectorAll(".offcanvas-nav-btn"),t=document.querySelector(".navbar:not(.navbar-clone) .offcanvas-nav"),o=new bootstrap.Offcanvas(t,{scroll:!0}),r=document.querySelectorAll(".onepage .navbar li a.scroll"),a=document.getElementById("offcanvas-search");e.forEach((e=>{e.addEventListener("click",(e=>{o.show()}))})),r.forEach((e=>{e.addEventListener("click",(e=>{o.hide()}))})),null!=a&&a.addEventListener("shown.bs.offcanvas",(function(){document.getElementById("search-form").focus()}))},isotope:()=>{var e=document.querySelectorAll(".grid");null!=e&&e.forEach((e=>{var t=e.querySelector(".isotope"),o=e.querySelector(".isotope-filter"),r=e.querySelectorAll(".isotope-filter"),a=new Isotope(t,{itemSelector:".item",layoutMode:"masonry",masonry:{columnWidth:t.offsetWidth/12},percentPosition:!0,transitionDuration:"0.7s"});if(imagesLoaded(t).on("progress",(function(){a.layout({masonry:{columnWidth:t.offsetWidth/12}})})),window.addEventListener("resize",(function(){a.arrange({masonry:{columnWidth:t.offsetWidth/12}})}),!0),null!=o){o.addEventListener("click",(function(e){if(matchesSelector(e.target,".filter-item")){var t=e.target.getAttribute("data-filter");a.arrange({filter:t})}}));for(var n=0,i=r.length;n<i;n++){var l=r[n];l.addEventListener("click",(function(e){matchesSelector(e.target,".filter-item")&&(l.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))}}}))},onepageHeaderOffset:()=>{const e=document.querySelector(".navbar").offsetHeight;document.querySelectorAll(".onepage section").forEach((e=>{e.style.paddingTop="75px",e.style.marginTop="-75px"}));const t=document.querySelector(".onepage section:first-of-type");null!=t&&(t.style.paddingTop=e+"px",t.style.marginTop="-"+e+"px")},anchorSmoothScroll:()=>{const e=document.querySelectorAll(".scroll");for(const o of e)o.addEventListener("click",t);function t(e){e.preventDefault(),this.blur();const t=this.getAttribute("href"),o=document.querySelector(t).offsetTop;scroll({top:o,behavior:"smooth"})}},svgInject:()=>{SVGInject.setOptions({onFail:function(e,t){e.classList.remove("svg-inject")}}),document.addEventListener("DOMContentLoaded",(function(){SVGInject(document.querySelectorAll("img.svg-inject"),{useCache:!0})}))},backgroundImage:()=>{for(var e=document.querySelectorAll(".bg-image"),t=0;t<e.length;t++){var o=e[t].getAttribute("data-image-src");e[t].style.backgroundImage="url('"+o+"')"}},backgroundImageMobile:()=>{!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i))&&document.querySelectorAll(".image-wrapper").forEach((e=>{e.classList.add("mobile")}))},imageHoverOverlay:()=>{for(var e=document.querySelectorAll(".overlay > a, .overlay > span"),t=0;t<e.length;t++){var o=document.createElement("span");o.className="bg",e[t].appendChild(o)}},rellax:()=>{null!=document.querySelector(".rellax")&&(window.onload=function(){var e=new Rellax(".rellax",{speed:2,center:!0,breakpoints:[576,992,1201]}),t=document.querySelectorAll(".projects-overflow");imagesLoaded(t,(function(){e.refresh()}))})},scrollCue:()=>{scrollCue.init({interval:-400,duration:700,percentage:.8}),scrollCue.update()},swiperSlider:function(){for(var e=document.querySelectorAll(".swiper-container"),t=0;t<e.length;t++){var o=e[t];o.classList.add("swiper-container-"+t);var r=document.createElement("div");r.className="swiper-controls";var a=document.createElement("div");a.className="swiper-pagination";var n=document.createElement("div");n.className="swiper-navigation";var i=document.createElement("div");i.className="swiper-button swiper-button-prev";var l=document.createElement("div");l.className="swiper-button swiper-button-next",o.appendChild(r),r.appendChild(n),n.appendChild(i),n.appendChild(l),r.appendChild(a);var s=o.getAttribute("data-effect")?o.getAttribute("data-effect"):"slide",c=o.getAttribute("data-items")?o.getAttribute("data-items"):3,d=o.getAttribute("data-items-xs")?o.getAttribute("data-items-xs"):1,u=o.getAttribute("data-items-sm")?o.getAttribute("data-items-sm"):Number(d),m=o.getAttribute("data-items-md")?o.getAttribute("data-items-md"):Number(u),p=o.getAttribute("data-items-lg")?o.getAttribute("data-items-lg"):Number(m),g=o.getAttribute("data-items-xl")?o.getAttribute("data-items-xl"):Number(p),h=o.getAttribute("data-items-xxl")?o.getAttribute("data-items-xxl"):Number(g),f=o.getAttribute("data-speed")?o.getAttribute("data-speed"):500,v=(o.getAttribute("data-autoplay"),o.getAttribute("data-autoplaytime")?o.getAttribute("data-autoplaytime"):5e3),b="true"===o.getAttribute("data-autoheight"),y=o.getAttribute("data-margin")?o.getAttribute("data-margin"):30,w="true"===o.getAttribute("data-loop"),S="true"===o.getAttribute("data-centered"),A=o.querySelector(".swiper:not(.swiper-thumbs)"),E=o.querySelector(".swiper-thumbs"),q=new Swiper(E,{slidesPerView:5,spaceBetween:10,loop:!1,threshold:2,slideToClickedSlide:!0});if("true"===o.getAttribute("data-thumbs")){var L=q,k=document.createElement("div");k.className="swiper-main",A.parentNode.insertBefore(k,A),k.appendChild(A),o.removeChild(r),k.appendChild(r)}else L=null;new Swiper(A,{on:{beforeInit:function(){"true"!==o.getAttribute("data-nav")&&"true"!==o.getAttribute("data-dots")&&r.remove(),"true"!==o.getAttribute("data-dots")&&a.remove(),"true"!==o.getAttribute("data-nav")&&n.remove()},init:function(){"true"!==o.getAttribute("data-autoplay")&&this.autoplay.stop(),this.update()}},autoplay:{delay:v,disableOnInteraction:!1},speed:f,slidesPerView:c,loop:w,centeredSlides:S,spaceBetween:Number(y),effect:s,autoHeight:b,grabCursor:!0,resizeObserver:!1,breakpoints:{0:{slidesPerView:Number(d)},576:{slidesPerView:Number(u)},768:{slidesPerView:Number(m)},992:{slidesPerView:Number(p)},1200:{slidesPerView:Number(g)},1400:{slidesPerView:Number(h)}},pagination:{el:e[t].querySelector(".swiper-pagination"),clickable:!0},navigation:{prevEl:o.querySelector(".swiper-button-prev"),nextEl:o.querySelector(".swiper-button-next")},thumbs:{swiper:L}})}},lightbox:()=>{GLightbox({selector:"*[data-glightbox]",touchNavigation:!0,loop:!1,zoomable:!1,autoplayVideos:!0,moreLength:0,slideExtraAttributes:{poster:""},plyr:{css:"",js:"",config:{ratio:"",fullscreen:{enabled:!1,iosNative:!1},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}}})},plyr:()=>{Plyr.setup(".player",{loadSprite:!0})},progressBar:()=>{const e=document.querySelectorAll(".progressbar.line"),t=document.querySelectorAll(".progressbar.semi-circle");e.forEach((e=>{var t=new ProgressBar.Line(e,{strokeWidth:6,trailWidth:6,duration:3e3,easing:"easeInOut",text:{style:{color:"inherit",position:"absolute",right:"0",top:"-30px",padding:0,margin:0,transform:null},autoStyleContainer:!1},step:(e,t)=>{t.setText(Math.round(100*t.value())+" %")}}),o=e.getAttribute("data-value")/100;new Waypoint({element:e,handler:function(){t.animate(o)},offset:"bottom-in-view"})})),t.forEach((e=>{var t=new ProgressBar.SemiCircle(e,{strokeWidth:6,trailWidth:6,duration:2e3,easing:"easeInOut",step:(e,t)=>{t.setText(Math.round(100*t.value()))}}),o=e.getAttribute("data-value")/100;new Waypoint({element:e,handler:function(){t.animate(o)},offset:"bottom-in-view"})}))},loader:()=>{var e=document.querySelector(".page-loader");null!=e&&(document.body.onload=function(){setTimeout((function(){e.classList.contains("done")||e.classList.add("done")}),1e3)})},pageProgress:()=>{var e=document.querySelector(".progress-wrap"),t=document.querySelector(".progress-wrap path"),o=t.getTotalLength();null!=e&&(t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray=o+" "+o,t.style.strokeDashoffset=o,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",(function(r){var a=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=o-a*o/n;t.style.strokeDashoffset=i,(document.body.scrollTop||document.documentElement.scrollTop)>=50?e.classList.add("active-progress"):e.classList.remove("active-progress")})),e.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})})))},counterUp:()=>{var e=window.counterUp.default;document.querySelectorAll(".counter").forEach((t=>{new Waypoint({element:t,handler:function(){e(t,{duration:1e3,delay:50}),this.destroy()},offset:"bottom-in-view"})}))},bsTooltips:()=>{[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e,{trigger:"hover"})})),[].slice.call(document.querySelectorAll('[data-bs-toggle="white-tooltip"]')).map((function(e){return new bootstrap.Tooltip(e,{customClass:"white-tooltip",trigger:"hover",placement:"left"})}))},bsPopovers:()=>{[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(e){return new bootstrap.Popover(e)}))},bsModal:()=>{if(null!=document.querySelector(".modal-popup")){var e=new bootstrap.Modal(document.querySelector(".modal-popup"));setTimeout((function(){e.show()}),200)}var t=window.innerWidth-document.body.clientWidth,o=document.querySelectorAll(".modal"),r=document.querySelector(".navbar.fixed"),a=document.querySelector(".progress-wrap");o.forEach((e=>{e.addEventListener("show.bs.modal",(function(e){null!=r&&(r.style.paddingRight=t+"px"),null!=a&&(a.style.marginRight=t+"px")})),e.addEventListener("hidden.bs.modal",(function(e){null!=r&&(r.style.paddingRight=""),null!=a&&(a.style.marginRight="")}))}))},iTooltip:()=>{new iTooltip(".itooltip").init({className:"itooltip-inner",indentX:15,indentY:15,positionX:"right",positionY:"bottom"})},forms:()=>{window.addEventListener("load",(function(){var e=document.querySelectorAll(".needs-validation"),t=document.querySelector("input[data-recaptcha]");window.verifyRecaptchaCallback=function(e){t.value=e,t.dispatchEvent(new Event("change"))},window.expiredRecaptchaCallback=function(){t.value="",t.dispatchEvent(new Event("change"))},Array.prototype.filter.call(e,(function(e){e.addEventListener("submit",(function(t){if(t.preventDefault(),t.stopPropagation(),!1!==e.checkValidity()){if(e.classList.add("was-validated"),e.classList.remove("was-validated"),e.classList.contains("contact-form")){var o=new FormData(e),r={name:o.get("name"),email:o.get("email"),phone:o.get("phone"),service:o.get("servico")||"",message:o.get("message"),lgpt:o.get("lgpt")};fetch("https://api-sendemail.onrender.com/send",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.text();throw new Error("Erro ao enviar o email.")})).then((function(t){Toastify({text:"Email enviado com sucesso!",className:"info",style:{background:"#fff",color:"#000"}}).showToast(),e.reset()})).catch((function(e){console.log(e)}))}}else e.classList.add("was-validated")}))}))}),!1)},passVisibility:()=>{let e=document.querySelectorAll(".password-field");for(let t=0;t<e.length;t++){let o=e[t].querySelector(".form-control"),r=e[t].querySelector(".password-toggle > i");r.addEventListener("click",(e=>{"password"===o.type?(o.type="text",r.classList.remove("uil-eye"),r.classList.add("uil-eye-slash")):(o.type="password",r.classList.remove("uil-eye-slash"),r.classList.add("uil-eye"))}),!1)}},pricingSwitcher:()=>{if(null!=document.querySelector(".pricing-switchers")){document.querySelectorAll(".pricing-wrapper").forEach((e=>{const t=e.querySelector(".pricing-switchers"),o=e.querySelectorAll(".pricing-switcher"),r=e.querySelectorAll(".price");t.addEventListener("click",(e=>{o.forEach((e=>{e.classList.toggle("pricing-switcher-active")})),r.forEach((e=>{e.classList.remove("price-hidden"),e.classList.toggle("price-show"),e.classList.toggle("price-hide")}))}))}))}},textRotator:()=>{if(null!=document.querySelector(".rotator-zoom"))new ReplaceMe(document.querySelector(".rotator-zoom"),{animation:"animate__animated animate__zoomIn",speed:2500,separator:",",clickChange:!1,loopCount:"infinite"});if(null!=document.querySelector(".rotator-fade"))new ReplaceMe(document.querySelector(".rotator-fade"),{animation:"animate__animated animate__fadeInDown",speed:2500,separator:",",clickChange:!1,loopCount:"infinite"})},codeSnippet:()=>{document.querySelectorAll(".code-wrapper-inner").forEach((function(e){e.insertAdjacentHTML("beforebegin",'<button type="button" class="btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>')})),new ClipboardJS(".btn-clipboard",{target:function(e){return e.nextElementSibling}}).on("success",(e=>{e.trigger.textContent="Copied!",e.clearSelection(),setTimeout((function(){e.trigger.textContent="Copy"}),2e3)})),new ClipboardJS(".btn-copy-icon").on("success",(function(e){e.clearSelection(),e.trigger.textContent="Copied!",window.setTimeout((function(){e.trigger.textContent="Copy"}),2300)}))}};theme.init(),$(document).ready((function(){!localStorage.getItem("smf_cookies")&&$("#modal-01").modal("show")}));const button=document.querySelector("#button-modal");button.addEventListener("click",(()=>{localStorage.setItem("smf_cookies",JSON.stringify("cookiesAceito")),console.log("fui clicado")}));