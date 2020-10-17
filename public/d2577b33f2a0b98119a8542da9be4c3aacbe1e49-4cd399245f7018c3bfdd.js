/*! For license information please see d2577b33f2a0b98119a8542da9be4c3aacbe1e49-4cd399245f7018c3bfdd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1eu9":function(e,t,r){"use strict";var n=r("5NKs");t.__esModule=!0,t.default=void 0;var a=n(r("uDP2")),i=n(r("j8BX")),o=n(r("v06X")),s=n(r("XEEL")),c=n(r("q1tI")),u=n(r("17x9")),l=n(r("yBBL")),d=r("uXx/"),f=r("EFel"),g=r("vD7z"),p=r("BfiH"),m=r("perC"),h=r("NVWv"),y=r("QxZ1"),v=r("oFdo"),b=r("lOcZ"),S=function(e){function t(t){var r;(r=e.call(this,t)||this).intersectionListener=function(){var e=(0,g.inImageCache)(r.props);r.state.isVisible||"function"!=typeof r.props.onStartLoad||r.props.onStartLoad({wasCached:e}),r.imageRef=(0,p.activatePictureRef)(r.imageRef,r.props,r.selfRef),r.setState((function(e){return{isVisible:!0,imageState:e.imageState+1}}),(function(){r.setState((function(t){return{imgLoaded:e,imgCached:(0,p.hasActivatedPictureRefs)(r.imageRef),imageState:t.imageState+1}}))}))};var n=(0,d.convertProps)(t),a=!0,s=!1,c=n.fadeIn,u=(0,g.inImageCache)(n);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,s=!0),"undefined"==typeof window&&(a=!1),n.critical&&(a=!0,s=!1);var f=!(n.critical&&!c),m=(0,h.fixClassName)(n)[0];return r.backgroundStyles=(0,h.presetBackgroundStyles)((0,l.default)(n.className)),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r.imageRef=(0,p.createPictureRef)((0,i.default)({},n,{isVisible:a}),r.handleImageLoaded),r.selfRef=null,r.state={isVisible:a,imgLoaded:!1,IOSupported:s,fadeIn:c,hasNoScript:f,seenBefore:u,imageState:0,currentClassNames:m},r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.backgroundStyles=(0,h.presetBackgroundStyles)((0,l.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,g.inImageCache)(this.props)}),(this.props.critical||this.state.seenBefore)&&(0,p.imageReferenceCompleted)(this.imageRef,this.props)&&this.handleImageLoaded();var e=(0,h.fixClassName)(this.props)[0];this.setState({currentClassNames:e})},r.componentDidUpdate=function(e){var t=this;if((0,f.imagePropsChanged)(this.props,e)){var r=(0,d.convertProps)(this.props),n=(0,g.inImageCache)(r),a=(0,h.fixClassName)(r)[0];this.setState({isVisible:n||r.critical,imgLoaded:n,seenBefore:n,currentClassNames:a},(function(){t.bgImage=(0,f.getCurrentFromData)({data:t.imageRef,propName:"currentSrc",returnArray:!0})||(0,f.getCurrentFromData)({data:t.imageRef,propName:"src",returnArray:!0}),t.imageRef=(0,p.createPictureRef)((0,i.default)({},r,{isVisible:t.state.isVisible}),t.handleImageLoaded)}))}},r.componentWillUnmount=function(){this.imageRef&&(Array.isArray(this.imageRef)?this.imageRef.forEach((function(e){e&&!(0,b.isString)(e)&&(e.onload=null)})):this.imageRef.onload=null),this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){this.selfRef=e,this.state.IOSupported&&e&&(this.cleanUpListeners=(0,v.listenToIntersections)(e,this.intersectionListener,this.props.rootMargin))},r.handleImageLoaded=function(){(0,g.activateCacheForImage)(this.props),this.setState((function(e){return{imgLoaded:!0,imageState:e.imageState+1}})),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=(0,h.fixOpacity)((0,d.convertProps)(this.props),this.props.preserveStackingContext),t=(e.className,e.style),r=void 0===t?{}:t,n=e.fluid,o=e.fixed,s=e.backgroundColor,u=e.durationFadeIn,l=e.Tag,g=e.children,p=(0,a.default)(e,["className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children"]),v=(0,d.stripRemainingProps)(p),b="boolean"==typeof s?"lightgray":void 0!==s?s:"",S=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,A=S?u/2+"ms":"none",C=(0,i.default)({position:"relative"},r);this.props.preserveStackingContext||(C.opacity=.99);var w=(0,f.getCurrentSrcData)({fluid:n,fixed:o,returnArray:!0}),x=(0,f.getCurrentSrcData)({fluid:n,fixed:o});if(!n&&!o)return null;o&&(C.width=r.width||w.width,C.height=r.height||w.height,C.display="inline-block","inherit"===r.display&&delete C.display);var I=(0,m.switchImageSettings)({image:w,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=I.nextImageArray||I.nextImage||this.bgImage;var k=(0,y.createPseudoStyles)((0,i.default)({className:this.state.currentClassNames,transitionDelay:A,bgColor:b,backgroundStyles:this.backgroundStyles,style:r,fadeIn:S},I,{originalData:n||o})),O=(0,y.createNoScriptStyles)({image:w,bgColor:b,className:this.state.currentClassNames,backgroundStyles:this.backgroundStyles,style:r}),E=(n?"fluid":"")+(o?"fixed":"")+"-"+JSON.stringify(x.srcSet),R=(0,i.default)({},this.backgroundStyles,C);return c.default.createElement(l,(0,i.default)({className:this.state.currentClassNames,style:R,ref:this.handleRef,key:E},v),c.default.createElement("style",{dangerouslySetInnerHTML:{__html:k}}),this.state.hasNoScript&&c.default.createElement("noscript",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:O}})),g)},t}(c.default.Component);S.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,Tag:"div",preserveStackingContext:!1,rootMargin:"200px"};var A=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});S.propTypes={fixed:u.default.oneOfType([A,u.default.arrayOf(A),u.default.arrayOf(u.default.oneOfType([A,u.default.string]))]),fluid:u.default.oneOfType([C,u.default.arrayOf(C),u.default.arrayOf(u.default.oneOfType([C,u.default.string]))]),fadeIn:u.default.oneOfType([u.default.string,u.default.bool]),durationFadeIn:u.default.number,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.oneOfType([u.default.object,u.default.array]),backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.oneOfType([u.default.string,u.default.func]),preserveStackingContext:u.default.bool,rootMargin:u.default.string};var w=S;t.default=w},"4fRq":function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);e.exports=function(){return r(n),n}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},BfiH:function(e,t,r){"use strict";t.__esModule=!0,t.imageReferenceCompleted=t.hasPictureRef=t.hasActivatedPictureRefs=t.activateMultiplePictureRefs=t.activatePictureRef=t.createMultiplePictureRefs=t.createPictureRef=void 0;var n=r("uXx/"),a=r("EFel"),i=r("K9wq"),o=r("lOcZ"),s=r("vD7z"),c=function(e,t,r,s){void 0===s&&(s=!1);var c=(0,n.convertProps)(e);if((0,o.isBrowser)()&&(void 0!==c.fluid||void 0!==c.fixed)){if((0,a.hasImageArray)(c)&&!(0,i.hasArtDirectionArray)(c)&&!s)return u(e,t);var d=new Image;return d.onload=function(){return t()},d.complete||"function"!=typeof c.onLoad||d.addEventListener("load",c.onLoad),"function"==typeof c.onError&&d.addEventListener("error",c.onError),c.crossOrigin&&(d.crossOrigin=c.crossOrigin),!c.critical&&!c.isVisible||s?d:l(d,c,r,s)}return null};t.createPictureRef=c;var u=function(e,t){var r=(0,n.convertProps)(e),a=(r.fluid||r.fixed).map((function(e,n){return c(r,t,n,!0)}));return r.critical||r.isVisible?l(a,r):a};t.createMultiplePictureRefs=u;var l=function(e,t,r,s,c){void 0===r&&(r=null),void 0===s&&(s=0),void 0===c&&(c=!1);var u=(0,n.convertProps)(t);if((0,o.isBrowser)()&&(void 0!==u.fluid||void 0!==u.fixed)){var l=(0,a.hasImageArray)(u)&&!(0,i.hasArtDirectionArray)(u);if(l&&!c)return d(e,t,r);var f=document.createElement("body"),g=l?(0,a.getSelectedImage)(u,s):(0,a.getCurrentSrcData)(u);if(!g)return null;if((0,o.isString)(g))return g;if((0,a.hasPictureElement)()){var p=document.createElement("picture");if(r&&(e.width=r.offsetWidth,e.height=r.offsetHeight,p.width=e.width,p.height=e.height),(0,i.hasArtDirectionArray)(u))(0,i.createArtDirectionSources)(u).reverse().forEach((function(e){return p.appendChild(e)}));if(g.srcSetWebp){var m=document.createElement("source");m.type="image/webp",m.srcset=g.srcSetWebp,m.sizes=g.sizes,p.appendChild(m)}p.appendChild(e),f.appendChild(p)}else r&&(e.width=r.offsetWidth,e.height=r.offsetHeight);return e.sizes=g.sizes||"",e.srcset=g.srcSet||"",e.src=g.src||"",e}return null};t.activatePictureRef=l;var d=function(e,t,r){return e.map((function(e,n){return l(e,t,r,n,!0)}))};t.activateMultiplePictureRefs=d;t.hasActivatedPictureRefs=function(e){return Array.isArray(e)?e.every((function(e){return f(e)})):f(e)};var f=function(e){return(0,o.isString)(e)||!!e&&!!e.currentSrc};t.hasPictureRef=f;t.imageReferenceCompleted=function(e,t){return e?Array.isArray(e)?e.every((function(e){return(0,a.imageLoaded)(e)}))||(0,s.inImageCache)(t):(0,a.imageLoaded)(e)||(0,s.inImageCache)(t):(0,o.isString)(e)}},EFel:function(e,t,r){"use strict";t.__esModule=!0,t.imageLoaded=t.createDummyImageArray=t.imageArrayPropsChanged=t.imagePropsChanged=t.hasImageUrl=t.isBase64=t.getUrlString=t.getSelectedImage=t.getCurrentSrcData=t.getImageSrcKey=t.getCurrentFromData=t.hasImageArray=t.hasPictureElement=void 0;var n=r("K9wq"),a=r("lOcZ");t.hasPictureElement=function(){return"undefined"!=typeof HTMLPictureElement||"undefined"==typeof window};var i=function(e){return Boolean(e.fluid&&Array.isArray(e.fluid)||e.fixed&&Array.isArray(e.fixed))};t.hasImageArray=i;t.getCurrentFromData=function(e){var t=e.data,r=e.propName,i=e.addUrl,c=void 0===i||i,u=e.returnArray,l=void 0!==u&&u,f=e.checkLoaded,g=void 0===f||f;if(!t||!r)return"";var p="tracedSVG"===r;if(Array.isArray(t)&&!(0,n.hasArtDirectionArray)({fluid:t})){var m=t.map((function(e){return"currentSrc"===r||"src"===r?g?d(e)&&e[r]||"":e[r]:"CSS_STRING"===r&&(0,a.isString)(e)||(0,a.isString)(e)?e:e&&r in e?e[r]:""}));return s({imageString:m,tracedSVG:p,addUrl:c,returnArray:l})}if((0,n.hasArtDirectionArray)({fluid:t})&&("currentSrc"===r||"src"===r||"base64"===r||p)){var h=o({fluid:t});return r in h?s({imageString:h[r],tracedSVG:p,addUrl:c}):""}return"currentSrc"!==r&&"src"!==r||!(r in t)?r in t?s({imageString:t[r],tracedSVG:p,addUrl:c}):"":s({imageString:g?d(t)&&t[r]||"":t[r],addUrl:c})};t.getImageSrcKey=function(e){var t=e.fluid,r=e.fixed,n=o({fluid:t,fixed:r});return n&&n.src||null};var o=function(e,t){var r=e.fluid,o=e.fixed,s=e.returnArray;void 0===t&&(t=0);var c=r||o;if(i({fluid:r,fixed:o})){if(s)return c;if((0,a.isBrowser)()&&(0,n.hasArtDirectionArray)({fluid:r,fixed:o})){var u=c.slice().reverse(),l=u.findIndex(n.matchesMedia);if(-1!==l)return u[l]}return c[t]}return c};t.getCurrentSrcData=o;t.getSelectedImage=function(e,t){var r=e.fluid,n=e.fixed;void 0===t&&(t=0);var a=r||n;return i({fluid:r,fixed:n})?a[t]||a[0]:a};var s=function(e){var t=e.imageString,r=e.tracedSVG,n=void 0!==r&&r,i=e.addUrl,o=void 0===i||i,s=e.returnArray,l=void 0!==s&&s,d=e.hasImageUrls,f=void 0!==d&&d;if(Array.isArray(t)){var g=t.map((function(e){if(e){var r=c(e),a=f||u(t),i=e&&n?'"'+e+'"':e&&!r&&!n&&a?"'"+e+"'":e;return o&&e?"url("+i+")":i}return e}));return l?g:(0,a.filteredJoin)(g)}var p=c(t),m=f||u(t),h=t&&n?'"'+t+'"':t&&!p&&!n&&m?"'"+t+"'":t;return t?o?"url("+h+")":h:""};t.getUrlString=s;var c=function(e){return(0,a.isString)(e)&&-1!==e.indexOf("base64")};t.isBase64=c;var u=function(e){return(0,a.isString)(e)&&"http"===e.substr(0,4)};t.hasImageUrl=u;t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||l(e,t)||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src};var l=function(e,t){var r=Array.isArray(e.fluid),n=Array.isArray(t.fluid),a=Array.isArray(e.fixed),i=Array.isArray(t.fixed);return!!(r&&!n||a&&!i||!r&&n||!a&&i)||(r&&n?e.fluid.length!==t.fluid.length||e.fluid.some((function(e,r){return e.src!==t.fluid[r].src})):a&&i?e.fixed.length!==t.fixed.length||e.fixed.some((function(e,r){return e.src!==t.fixed[r].src})):void 0)};t.imageArrayPropsChanged=l;t.createDummyImageArray=function(e){var t=s({imageString:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});return Array(e).fill(t)};var d=function(e){return!!e&&((0,a.isString)(e)||e.complete&&0!==e.naturalWidth&&0!==e.naturalHeight)};t.imageLoaded=d},I2ZF:function(e,t){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,a=r;return[a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]]].join("")}},I59i:function(e,t,r){var n=r("UfPM");function a(e,t){var r=new n(e,t);return function(e){return r.convert(e)}}a.BIN="01",a.OCT="01234567",a.DEC="0123456789",a.HEX="0123456789abcdef",e.exports=a},IFaA:function(e,t,r){"use strict";e.exports={abbr:"abbr",accept:"accept",acceptCharset:"accept-charset",accessKey:"accesskey",action:"action",allowFullScreen:"allowfullscreen",allowTransparency:"allowtransparency",alt:"alt",async:"async",autoComplete:"autocomplete",autoFocus:"autofocus",autoPlay:"autoplay",cellPadding:"cellpadding",cellSpacing:"cellspacing",challenge:"challenge",charset:"charset",checked:"checked",cite:"cite",class:"class",className:"class",cols:"cols",colSpan:"colspan",command:"command",content:"content",contentEditable:"contenteditable",contextMenu:"contextmenu",controls:"controls",coords:"coords",crossOrigin:"crossorigin",data:"data",dateTime:"datetime",default:"default",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",dropzone:"dropzone",encType:"enctype",for:"for",form:"form",formAction:"formaction",formEncType:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",frameBorder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hrefLang:"hreflang",htmlFor:"for",httpEquiv:"http-equiv",icon:"icon",id:"id",inputMode:"inputmode",isMap:"ismap",itemId:"itemid",itemProp:"itemprop",itemRef:"itemref",itemScope:"itemscope",itemType:"itemtype",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",manifest:"manifest",max:"max",maxLength:"maxlength",media:"media",mediaGroup:"mediagroup",method:"method",min:"min",minLength:"minlength",multiple:"multiple",muted:"muted",name:"name",noValidate:"novalidate",open:"open",optimum:"optimum",pattern:"pattern",ping:"ping",placeholder:"placeholder",poster:"poster",preload:"preload",radioGroup:"radiogroup",readOnly:"readonly",rel:"rel",required:"required",role:"role",rows:"rows",rowSpan:"rowspan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",sortable:"sortable",span:"span",spellCheck:"spellcheck",src:"src",srcDoc:"srcdoc",srcSet:"srcset",start:"start",step:"step",style:"style",tabIndex:"tabindex",target:"target",title:"title",translate:"translate",type:"type",typeMustMatch:"typemustmatch",useMap:"usemap",value:"value",width:"width",wmode:"wmode",wrap:"wrap"}},K2nb:function(e,t,r){"use strict";r.r(t);var n=r("AcpX"),a=r("q1tI"),i=r.n(a),o=(r("Wbzz"),r("1eu9"),r("vOnD")),s=r("qtTT"),c=r("BtB6"),u=r("dE6H"),l=r("FT44");r("cTKx"),r("kWWS");function d(){var e=Object(n.a)(["\n  background: url(",');\n  background-size: "cover";\n  background-position: "center";\n  background-repeat: "no-repeat";\n']);return d=function(){return e},e}function f(){var e=Object(n.a)(["\n      min-height: 420px;\n    "]);return f=function(){return e},e}function g(){var e=Object(n.a)(["\n      min-height: 364px;\n      padding: 40px;\n    "]);return g=function(){return e},e}function p(){var e=Object(n.a)(["\n      order: ",";\n      width: 50%;\n      min-height: 280px;\n      padding: 32px 24px;\n    "]);return p=function(){return e},e}function m(){var e=Object(n.a)(["\n      order: ",";\n      width: 50%;\n      height: initial;\n    "]);return m=function(){return e},e}function h(){var e=Object(n.a)(["\n      flex-wrap: no-wrap;\n    "]);return h=function(){return e},e}function y(){var e=Object(n.a)(["\n    margin-bottom: 80px;\n  "]);return y=function(){return e},e}function v(){var e=Object(n.a)(["\n  margin-bottom: 32px;\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  &:hover {\n    \n    .case-study__image {\n\n      &::before,\n      &::after {\n        transform: scale(1.05);\n      }\n    }\n\n    .case-study__details {\n      .link {\n        svg {\n          circle {\n            fill: ",";\n          }\n        }\n      }\n    }\n  }\n\n  ","\n\n  > a { \n    display: flex;\n    flex-wrap: wrap;\n\n    ","\n  }\n\n  .case-study__image {\n    width: 100%;\n    height: 224px;\n    transition: all 0.3s;\n    overflow: hidden;\n\n    ","\n\n    &::before,\n    &::after {\n      transition: all .3s!important;\n    }\n  }\n\n  .case-study__details {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 32px 16px;\n    background-color: ",";\n    color: ",";\n\n    ","\n\n    ","\n\n    ","\n\n    .client {\n      margin-bottom: 12px;\n      color: ",";\n      font-weight: 700;\n      text-transform: uppercase;\n    }\n\n    > div {\n      margin-bottom: 32px;\n    }\n\n    .link {\n      align-self: flex-end;\n      display: inline-flex;\n      align-items: center;\n      font-size: 18px;\n      font-weight: 500;\n      line-height: 1.3em;\n\n      &:hover {\n\n        svg {\n\n          circle {\n            fill: ",";\n          }\n        }\n      }\n\n      svg {\n        flex-shrink: 0;\n        width: 24px;\n        height: 24px;\n        display: inline-block;\n        margin-right: 8px;\n        circle {\n          fill: ",";\n          transition: all .3s;\n        }\n      }\n    }\n  }\n"]);return v=function(){return e},e}function b(){var e=Object(n.a)(["\n      margin-top: 56px;\n    "]);return b=function(){return e},e}function S(){var e=Object(n.a)(["\n    padding-bottom: 80px;\n    padding-bottom: 80px;\n  "]);return S=function(){return e},e}function A(){var e=Object(n.a)(["\n  padding-bottom: 64px;\n  padding-top: 64px;\n\n  ","\n\n  .see-more {\n    margin: 32px auto 0 auto;\n    text-align: center;\n\n    ","\n  }\n"]);return A=function(){return e},e}var C=o.c.section(A(),s.a.medium(S()),s.a.small(b()));o.c.article(v(),c.b.midnight,s.a.large(y()),s.a.small(h()),s.a.small(m(),(function(e){return e.imageOnRight?"1":"0"})),c.b.cream,c.b.stout,s.a.small(p(),(function(e){return e.imageOnRight?"0":"1"})),s.a.medium(g()),s.a.large(f()),c.b.indiblue,c.b.midnight,c.b.indiblue),o.c.div(d(),(function(e){return e.imageUrl}));t.default=function(){return i.a.createElement(C,null,i.a.createElement(u.a,null,i.a.createElement("div",{class:"subtitle"},i.a.createElement("h2",null,"Case Studies"),i.a.createElement("p",null,"While I would love to share all the work I have done here, I have signed NDAs that prevent me from doing so. For a sampler of some of my works, you can view my Behance and my Dribbble. If you want to know more about me, my experience or my process, get in touch via LinkedIn and let's have a virtual coffee.")),i.a.createElement("div",{className:"see-more"},i.a.createElement(l.a,{to:"https://www.linkedin.com/in/kerriehui",backgroundColor:c.b.indiblue,color:c.b.white,hoverBackgroundColor:c.b.midnight,text:"Let's chat"}))))}},K9wq:function(e,t,r){"use strict";var n=r("5NKs");t.__esModule=!0,t.matchesMedia=t.hasArtDirectionArray=t.hasArtDirectionSupport=t.createArtDirectionSources=t.groupByMedia=void 0;var a=n(r("auJE")),i=r("lOcZ");t.groupByMedia=function(e){var t=[],r=(0,a.default)(e,"media");return r.forEach((function(e){return!e.media&&t.push(e)})),t.length,r};t.createArtDirectionSources=function(e){var t=e.fluid,r=e.fixed;return(t||r).reduce((function(e,t){if(!t.media)return e;var r=document.createElement("source");return t.srcSetWebp&&(r.type="image/webp",r.srcset=t.srcSetWebp),t.sizes&&(r.sizes=t.sizes),r.media=t.media,e.push(r),e}),[])};var o=function(e,t){return e[t]&&Array.isArray(e[t])&&e[t].some((function(e){return!!e&&void 0!==e.media}))};t.hasArtDirectionSupport=o;t.hasArtDirectionArray=function(e){return o(e,"fluid")||o(e,"fixed")};t.matchesMedia=function(e){var t=e.media;return!!t&&((0,i.isBrowser)()&&void 0!==window.matchMedia&&!!window.matchMedia(t).matches)}},NVWv:function(e,t,r){"use strict";var n=r("5NKs");t.__esModule=!0,t.presetBackgroundStyles=t.fixOpacity=t.setTransitionStyles=t.kebabifyBackgroundStyles=t.escapeClassNames=t.fixClassName=void 0;var a=n(r("j8BX")),i=n(r("uDP2")),o=n(r("gv3/")),s=r("uXx/"),c=r("YWaw"),u=r("EFel"),l=r("lOcZ");t.fixClassName=function(e){var t=e.className,r=(0,i.default)(e,["className"]),n=(0,s.convertProps)(r),a=(0,c.inComponentClassCache)(t),d=(0,u.getCurrentSrcData)(n),f=o.default.generate(),g=" gbi-"+(0,l.hashString)(d&&d.srcSet||t||"noclass")+"-"+f,p=(""+(t||"")+((a||!t?g:"")||"")).trim();return a||(0,c.activateCacheForComponentClass)(t),[p]};t.escapeClassNames=function(e){if(e){var t=(0,l.isBrowser)()&&window._gbiSpecialChars?window._gbiSpecialChars:"undefined"!=typeof __GBI_SPECIAL_CHARS__?__GBI_SPECIAL_CHARS__:":/",r=new RegExp("["+t+"]","g");return e.replace(r,"\\$&")}return e};t.kebabifyBackgroundStyles=function(e){return(0,l.isString)(e)?e:e instanceof Object?Object.keys(e).filter((function(t){return 0===t.indexOf("background")&&""!==e[t]})).reduce((function(t,r){return""+t+(0,l.toKebabCase)(r)+": "+e[r]+";\n"}),""):""};t.setTransitionStyles=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition: opacity 0.5s ease "+e+";":"transition: none;"};t.fixOpacity=function(e){var t=(0,a.default)({},e);if(!t.preserveStackingContext)try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(r){}return t};t.presetBackgroundStyles=function(e){return(0,a.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},e)}},QxZ1:function(e,t,r){"use strict";var n=r("5NKs");t.__esModule=!0,t.createNoScriptStyles=t.createStyleImage=t.createPseudoStyles=t.createPseudoElementMediaQuery=t.createPseudoElementWithContent=t.createPseudoElement=void 0;var a=n(r("j8BX")),i=r("NVWv"),o=r("EFel"),s=r("K9wq"),c=r("lOcZ"),u=function(e,t){void 0===t&&(t=":before");var r=(0,i.escapeClassNames)(e),n=(0,c.stringToArray)(r),a="";return Array.isArray(n)&&(n=n.filter((function(e){return""!==e}))).length>0&&(a="."+n.join(".")+t),a};t.createPseudoElement=u;var l=function(e,t){return"\n    "+e+" {\n      opacity: 1;\n      background-image: "+t+";\n    }"};t.createPseudoElementWithContent=l;var d=function(e,t,r,n){return"\n      @media "+t+" {\n        "+l(e,r)+"\n      }\n      "+(n&&"@media "+t+" {\n          "+l(e,n)+"\n        }")+"\n    "};t.createPseudoElementMediaQuery=d;t.createPseudoStyles=function(e){var t=e.className,r=e.transitionDelay,n=e.lastImage,o=e.nextImage,s=e.afterOpacity,c=e.bgColor,l=e.fadeIn,d=e.backgroundStyles,g=e.style,p=e.finalImage,m=e.originalData,h=u(t),y=u(t,":after"),v=(0,a.default)({},d,g);return"\n          "+h+",\n          "+y+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+(c&&"background-color: "+c+";")+"\n            "+(0,i.setTransitionStyles)(r,l)+"\n            "+(0,i.kebabifyBackgroundStyles)(v)+"\n          }\n          "+h+" {\n            z-index: -100;\n            "+((!s||p)&&f(o,m)||"")+"\n            "+(s&&n&&f(n,m)||"")+"\n            opacity: "+Number(!s)+"; \n          }\n          "+y+" {\n            z-index: -101;\n            "+((s||p)&&f(o,m)||"")+"\n            "+(!s&&n&&f(n,m)||"")+"\n            "+(p?"opacity: "+Number(s)+";":"")+"\n          }\n        "};var f=function(e,t){var r=(0,o.hasImageArray)({fluid:t})&&!(0,s.hasArtDirectionArray)({fluid:t});return((0,c.isBrowser)()||r)&&e?"background-image: "+e+";":""};t.createStyleImage=f;t.createNoScriptStyles=function(e){var t=e.className,r=e.image;if(r){var n=Array.isArray(r)&&!(0,s.hasArtDirectionArray)({fluid:r}),a=(0,o.getCurrentFromData)({data:r,propName:"src",checkLoaded:!1,addUrl:!1,returnArray:n}),i=(0,o.getUrlString)({imageString:a,hasImageUrls:!0,returnArray:n}),f="";if(n){var g=(0,o.getCurrentFromData)({data:r,propName:"CSS_STRING",addUrl:!1,returnArray:n});f=(0,c.filteredJoin)((0,c.combineArray)(i,g))}var p=u(t);return(0,s.hasArtDirectionArray)({fluid:r})?r.map((function(e){var t=(0,o.getUrlString)({imageString:e.src}),r=(0,o.getUrlString)({imageString:e.srcWebp||""});return e.media?d(p,e.media,t,r):d(p,"screen",t,r)})).join(""):l(p,f||i)}return""}},Ros5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&s(r)&&(t[r]=e[r]);return t};var n,a=r("IFaA"),i=(n=a)&&n.__esModule?n:{default:n};var o={onCopy:!0,onCut:!0,onPaste:!0,onLoad:!0,onError:!0,onWheel:!0,onScroll:!0,onCompositionEnd:!0,onCompositionStart:!0,onCompositionUpdate:!0,onKeyDown:!0,onKeyPress:!0,onKeyUp:!0,onFocus:!0,onBlur:!0,onChange:!0,onInput:!0,onSubmit:!0,onClick:!0,onContextMenu:!0,onDoubleClick:!0,onDrag:!0,onDragEnd:!0,onDragEnter:!0,onDragExit:!0,onDragLeave:!0,onDragOver:!0,onDragStart:!0,onDrop:!0,onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOut:!0,onMouseOver:!0,onMouseUp:!0,onSelect:!0,onTouchCancel:!0,onTouchEnd:!0,onTouchMove:!0,onTouchStart:!0,onAnimationStart:!0,onAnimationEnd:!0,onAnimationIteration:!0,onTransitionEnd:!0};function s(e){return o[e]||i.default[e]||/^(data|aria)-/.test(e)}},U6jy:function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var a in n)r.call(n,a)&&(e[a]=n[a])}return e};var r=Object.prototype.hasOwnProperty},UfPM:function(e,t,r){"use strict";function n(e,t){if(!(e&&t&&e.length&&t.length))throw new Error("Bad alphabet");this.srcAlphabet=e,this.dstAlphabet=t}n.prototype.convert=function(e){var t,r,n,a={},i=this.srcAlphabet.length,o=this.dstAlphabet.length,s=e.length,c="string"==typeof e?"":[];if(!this.isValid(e))throw new Error('Number "'+e+'" contains of non-alphabetic digits ('+this.srcAlphabet+")");if(this.srcAlphabet===this.dstAlphabet)return e;for(t=0;t<s;t++)a[t]=this.srcAlphabet.indexOf(e[t]);do{for(r=0,n=0,t=0;t<s;t++)(r=r*i+a[t])>=o?(a[n++]=parseInt(r/o,10),r%=o):n>0&&(a[n++]=0);s=n,c=this.dstAlphabet.slice(r,r+1).concat(c)}while(0!==n);return c},n.prototype.isValid=function(e){for(var t=0;t<e.length;++t)if(-1===this.srcAlphabet.indexOf(e[t]))return!1;return!0},e.exports=n},YWaw:function(e,t,r){"use strict";t.__esModule=!0,t.resetComponentClassCache=t.activateCacheForComponentClass=t.inComponentClassCache=void 0;var n=Object.create({});t.inComponentClassCache=function(e){return n[e]||!1};t.activateCacheForComponentClass=function(e){e&&(n[e]=!0)};t.resetComponentClassCache=function(){for(var e in n)delete n[e]}},auJE:function(e,t,r){var n=r("U6jy"),a=["blank","all","minWidth","minHeight","maxWidth","maxHeight","print"];function i(e){return function(t,r){var n=t.sortVal,a=r.sortVal,i=t.item.__media,o=r.item.__media;if(e=void 0!==e&&e,n===a){if(i.match(/print/))return 1;if(o.match(/print/))return-1}return e?a-n:n-a}}function o(e,t,r){switch(function(e,t,r){return e&&e.length&&"string"!=typeof e?("object"!==t||r&&"string"==typeof r)&&function(e,t,r){for(var n=!0,a=0,i=e.length;a<i;a++)if(typeof e[a]!==t||r&&!e[a].hasOwnProperty(r)){n=!1;break}return n}(e,t,r)?"all":"some":"none"}(e,t,r)){case"none":return[];case"some":return e}var o=function(){for(var e={},t=0,r=a.length;t<r;t++)e[a[t]]=[];return e}();return e=function(e,t,r){for(var a=[],i={},o=0,s=e.length;o<s;o++)"string"===t?i=n({},{__media:e[o]}):(i=n({},e[o])).__media=e[o][r],a.push(i);return a}(e,t,r),function(e,t){for(var r=0,n=t.length;r<n;r++){var a=t[r],i=a.__media,o="blank",s=i.match(/\d+/g);i.match(/min-width/)?o="minWidth":i.match(/min-height/)?o="minHeight":i.match(/max-width/)?o="maxWidth":i.match(/max-height/)?o="maxHeight":i.match(/print/)?o="print":i.match(/all/)&&(o="all"),e[o].push({item:a,sortVal:s?s[0]:0})}}(o,e),function(e){var t;for(var r in e)e.hasOwnProperty(r)&&(t=i(!1),"maxWidth"!==r&&"maxHeight"!==r||(t=i(!0)),e[r].sort(t))}(o),function(e,t,r){var n=[];function i(e){for(var r,a=0,i=e.length;a<i;a++)"string"===t?r=e[a].item.__media:delete(r=e[a].item).__media,n.push(r)}for(var o=0,s=a.length;o<s;o++)i(e[a[o]]);return n}(o,t)}e.exports=function(e,t){return e?t?o(e,"object",t):o(e,"string"):[]}},cTKx:function(e,t,r){var n=r("q1tI");function a(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"keyboard arrow right"),n.createElement("g",{className:"nc-icon-wrapper",key:1},[n.createElement("path",{className:"a",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M23.25 12.497H.75",key:0}),n.createElement("path",{className:"a",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 16.247l3.75-3.75-3.75-3.75",key:1})])])}a.defaultProps={viewBox:"0 0 24 24",width:"24",height:"24"},e.exports=a,a.default=a},"gv3/":function(e,t,r){var n,a=r("I59i"),i=r("xk4V"),o="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";function s(e,t){return t(e.toLowerCase().replace(/-/g,""))}e.exports=function(){function e(e){var t=e||o,r=a(a.HEX,t),n=a(t,a.HEX),c=function(){return s(i(),r)};return{new:c,generate:c,uuid:i,fromUUID:function(e){return s(e,r)},toUUID:function(e){return function(e,t){for(var r,n=t(e),a="",i=0,o=32-n.length;i<o;++i)a+="0";return[(r=(a+n).match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/))[1],r[2],r[3],r[4],r[5]].join("-")}(e,n)},alphabet:t}}return e.constants={flickrBase58:o,cookieBase90:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~"},e.uuid=i,e.generate=function(){return n||(n=a(a.HEX,o)),s(i(),n)},e}()},kWWS:function(e,t,r){e.exports=r.p+"static/test-be02a24ef8a74348df329d77a22524f6.png"},lOcZ:function(e,t,r){"use strict";t.__esModule=!0,t.combineArray=t.filteredJoin=t.hashString=t.stringToArray=t.toKebabCase=t.toCamelCase=t.isObject=t.isString=t.isBrowser=void 0;t.isBrowser=function(){return"undefined"!=typeof window};var n=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=n;t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)};t.toCamelCase=function(e){return n(e)&&-1!==e.indexOf("-")&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s|\W+/g,"")||e};t.toKebabCase=function(e){return n(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!n(e)&&(e.includes(t)?e.split(t):[e])};t.hashString=function(e){return n(e)&&[].reduce.call(e,(function(e,t){return 0|(e=(e<<5)-e+t.charCodeAt(0))}),0)};t.filteredJoin=function(e){return e.filter((function(e){return""!==e})).join()};t.combineArray=function(e,t){return Array.isArray(e)?e.map((function(e,r){return e||t&&t[r]})):[e]}},oFdo:function(e,t,r){"use strict";var n;t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var a=new WeakMap,i=function(e){e.forEach((function(e){if(a.has(e.target)){var t=a.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),a.delete(e.target),t())}}))};t.callbackIO=i;var o=function(e){return void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(i,{rootMargin:e})),n};t.getIO=o;t.listenToIntersections=function(e,t,r){void 0===r&&(r="200px");var n=o(r);return n?(n.observe(e),a.set(e,t),function(){n.unobserve(e),a.delete(e)}):function(){}}},perC:function(e,t,r){"use strict";t.__esModule=!0,t.switchImageSettings=void 0;var n=r("EFel"),a=r("K9wq"),i=r("lOcZ");t.switchImageSettings=function(e){var t,r,o=e.image,s=e.bgImage,c=e.imageRef,u=e.state,l=(0,n.getCurrentFromData)({data:c,propName:"currentSrc"}),d=Array.isArray(o)&&!(0,a.hasArtDirectionArray)({fluid:o}),f=Array.isArray(s)?(0,i.filteredJoin)(s):s,g=d&&u.seenBefore&&!!l;if(d){l||(t=(0,n.getCurrentFromData)({data:o,propName:"tracedSVG",returnArray:d}),t=(0,i.combineArray)((0,n.getCurrentFromData)({data:o,propName:"base64",returnArray:d}),t)),t=(0,i.combineArray)((0,n.getCurrentFromData)({data:o,propName:"CSS_STRING",addUrl:!1,returnArray:d}),t),(u.imgLoaded||l)&&u.isVisible&&(l?(t=(0,i.combineArray)((0,n.getCurrentFromData)({data:c,propName:"currentSrc",returnArray:d}),t),g=!0):(t=(0,i.combineArray)((0,n.getCurrentFromData)({data:c,propName:"src",returnArray:d}),t),g=!0)),t=(0,i.combineArray)(t,s);var p=(0,n.createDummyImageArray)(o.length);r=t=(0,i.combineArray)(t,p),t=(0,i.filteredJoin)(t)}else t="",t=(0,n.getCurrentFromData)({data:o,propName:"tracedSVG"})||(0,n.getCurrentFromData)({data:o,propName:"base64"}),u.imgLoaded&&u.isVisible&&(t=l,g=!0);var m=u.imageState%2;!d&&""===t&&u.imgLoaded&&u.isVisible&&c&&!c.currentSrc&&(t=(0,n.getCurrentFromData)({data:c,propName:"src",checkLoaded:!1}),g=!0),t||(t=f);var h={lastImage:f,nextImage:t,afterOpacity:m,finalImage:g};return r&&(h.nextImageArray=r),h}},"uXx/":function(e,t,r){"use strict";var n=r("5NKs");t.__esModule=!0,t.convertProps=t.stripRemainingProps=void 0;var a=n(r("j8BX")),i=n(r("Ros5")),o=r("K9wq");t.stripRemainingProps=function(e){return(0,i.default)(e)};t.convertProps=function(e){var t=(0,a.default)({},e),r=t.fixed;return t.fluid&&(0,o.hasArtDirectionSupport)(e,"fluid")&&(t.fluid=(0,o.groupByMedia)(t.fluid)),r&&(0,o.hasArtDirectionSupport)(e,"fixed")&&(t.fixed=(0,o.groupByMedia)(t.fixed)),t}},vD7z:function(e,t,r){"use strict";t.__esModule=!0,t.resetImageCache=t.activateCacheForMultipleImages=t.activateCacheForImage=t.allInImageCache=t.inImageCache=void 0;var n=r("uXx/"),a=r("K9wq"),i=r("EFel"),o=r("lOcZ"),s=Object.create({}),c=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var c=(0,n.convertProps)(e),l=(0,i.hasImageArray)(c)&&!(0,a.hasArtDirectionArray)(c);if(l&&!r)return u(e);var d=l?(0,i.getSelectedImage)(c,t):(0,i.getImageSrcKey)(c);if((0,o.isObject)(d)){var f=(0,i.getImageSrcKey)({fluid:d,fixed:d});return s[f]||!1}return s[d]||!1};t.inImageCache=c;var u=function(e){var t=(0,n.convertProps)(e);return(t.fluid||t.fixed).every((function(e,r){return c(t,r,!0)}))};t.allInImageCache=u;var l=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var c=(0,n.convertProps)(e),u=(0,i.hasImageArray)(c)&&!(0,a.hasArtDirectionArray)(c);if(u&&!r)return d(e);var l=u?(0,i.getSelectedImage)(c,t):(0,i.getImageSrcKey)(c);if(l)if((0,o.isObject)(l)){var f=(0,i.getImageSrcKey)({fluid:l,fixed:l});s[f]=!0}else s[l]=!0};t.activateCacheForImage=l;var d=function(e){var t=(0,n.convertProps)(e);(t.fluid||t.fixed).forEach((function(e,r){return l(t,r,!0)}))};t.activateCacheForMultipleImages=d;t.resetImageCache=function(){for(var e in s)delete s[e]}},xk4V:function(e,t,r){var n=r("4fRq"),a=r("I2ZF");e.exports=function(e,t,r){var i=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||a(o)}},yBBL:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.getStyleRulesForClassName=void 0;var n=r("lOcZ"),a=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],r=0;r<t.length;r++){var n=void 0;try{n=void 0!==t[r].rules?t[r].rules:void 0!==t[r].cssRules?t[r].cssRules:""}catch(i){}if(n){var a=Array.prototype.slice.call(n).reduce((function(t,r){return r.selectorText===e&&t.push(r),t}),[]);if(a.length)return a}}return[]};t.getStyleRulesForClassName=a;var i=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name||e[0].style.constructor.toString()){case"CSS2Properties":case"[object MSStyleCSSProperties]":Object.values(e[0].style).forEach((function(r){t[(0,n.toCamelCase)(r)]=e[0].style[r]}));break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=i;var o=function(e){if(e&&(0,n.isString)(e)){var t=a("."+e);if((null==t?void 0:t.length)>0&&void 0!==t[0].style)return Object.keys(i(t)).filter((function(e){return 0===e.indexOf("background")&&""!==t[0].style[e]})).reduce((function(e,r){return e[(0,n.toCamelCase)(r)]=t[0].style[r],e}),{})}return{}};t.getBackgroundStylesForSingleClass=o;var s=function(e){if("undefined"!=typeof window){var t=(0,n.stringToArray)(e);if(t instanceof Array){var r=[];return t.forEach((function(e){return r.push(o(e))})),Object.assign.apply(Object,r)}return o(e)}return{}};t.default=s}}]);