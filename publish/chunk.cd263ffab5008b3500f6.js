/*! For license information please see chunk.cd263ffab5008b3500f6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{256:function(t,s,e){"use strict";e.d(s,"a",(function(){return a})),e.d(s,"b",(function(){return i}));var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"gallery"},[e("div",{staticClass:"gallery__thumbs",attrs:{id:"thumbimage"}},[t.videoSrc?e("div",{staticClass:"gallery__item gallery__item--video",class:{"gallery__item--selected":t.localPictures.length===t.activeIndex},on:{click:function(s){t.activeIndex=t.localPictures.length}}},[e("i",{staticClass:"fas fa-play"}),e("span",[t._v(t._s(t.i19video))])]):t._e(),t._l(t.localPictures,(function(s,a){return e("div",{key:"img-"+a,staticClass:"gallery__item",class:{"gallery__item--selected":a===t.activeIndex},on:{click:function(s){t.activeIndex=a}}},[a<4?e("a-picture",{staticClass:"gallery__thumb",attrs:{src:t.getImg(s,null,"small")}}):t._e()],1)})),t.localPictures.length>4?e("button",{staticClass:"gallery__open btn btn-dark",attrs:{type:"button",title:t.i19openGallery},on:{click:function(s){return s.preventDefault(),t.openZoom(4)}}},[t._v(" +"+t._s(t.localPictures.length-4)+" ")]):t._e()],2),e("div",{staticClass:"gallery__stage"},[e("div",{ref:"glide",staticClass:"glide"},[e("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[e("ul",{staticClass:"glide__slides"},[t._l(t.localPictures,(function(s,a){return e("li",{key:"slide-"+a,staticClass:"glide__slide"},[e("div",{on:{click:function(s){return t.openZoom(a)}}},[0!==a||t.isSliderMoved?e("a-picture",{staticClass:"gallery__big-image",attrs:{src:t.getImg(s,null,"zoom")}}):t._t("default",[t.elFirstPicture?e("div",{ref:"firstPicture",refInFor:!0,staticClass:"gallery__big-image"}):e("a-picture",{staticClass:"gallery__big-image",attrs:{src:t.getImg(s,null,"zoom")}})])],2)])})),t.videoSrc?e("li",{key:"slide-"+t.localPictures.length,staticClass:"glide__slide"},[e("div",{staticClass:"embed-responsive",class:"embed-responsive-"+t.videoAspectRatio},[e("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.videoSrc,allowfullscreen:""}})])]):t._e()],2)])])]),t._m(4)])},i=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pswp__container"},[s("div",{staticClass:"pswp__item"}),s("div",{staticClass:"pswp__item"}),s("div",{staticClass:"pswp__item"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pswp__preloader"},[s("div",{staticClass:"pswp__preloader__icn"},[s("div",{staticClass:"pswp__preloader__cut"},[s("div",{staticClass:"pswp__preloader__donut"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[s("div",{staticClass:"pswp__share-tooltip"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pswp__caption"},[s("div",{staticClass:"pswp__caption__center"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"pswp",staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"pswp__bg"}),e("div",{staticClass:"pswp__scroll-wrap"},[t._m(0),e("div",{staticClass:"pswp__ui pswp__ui--hidden"},[e("div",{staticClass:"pswp__top-bar"},[e("div",{staticClass:"pswp__counter"}),e("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:t.i19close+" (Esc)"}}),e("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:t.i19share}}),e("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:t.i19fullscreen}}),e("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._m(1)]),t._m(2),e("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:t.i19previous}}),e("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:t.i19next}}),t._m(3),t.canAddToCart?e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.buy}},[e("i",{staticClass:"fas fa-cart-arrow-down"}),e("span",{staticClass:"d-none d-md-inline ml-1"},[t._v(" "+t._s(t.i19addToCart)+" ")])]):t._e()])])])}]},350:function(t,s,e){"use strict";e.r(s);var a=e(31),i=e.n(a),l=e(80),n=e(250);s.default=(t={},s="product")=>{const e=document.getElementById(s);if(e){const a=document.getElementById(`${s}-dock`),c=Boolean(a),{storefront:r}=window;let o,_;r&&(o=r.getScopedSlots,_=r.context&&r.context.body);const p={render:i=>i(n.a,{attrs:{id:a?null:s},props:{...t.props,product:c&&_&&_.available&&Object(l.a)(_)?_:null,buyText:t.buyText,isSSR:c},scopedSlots:Object.assign({buy:t.buy?function(){return i("span",{domProps:{innerHTML:t.buy}})}:void 0},"function"==typeof o?o(e,i,!a):{})})},d=()=>{const t=document.getElementById("product-loading");t&&t.remove(),delete e.dataset.toRender};c?p.mounted=d:p.render.on={"update:product":d},new i.a(p).$mount(a||e)}}}}]);
//# sourceMappingURL=chunk.cd263ffab5008b3500f6.js.map