const __vite__fileDeps=["assets/YouTube-E_os2pNl.js","assets/index-BYUIMpDd.js","assets/index-Ce5UXbqN.css","assets/SoundCloud-BNwPYRuh.js","assets/Vimeo-Dpr7Fffs.js","assets/Mux-DeBcHdKE.js","assets/Facebook-DWnhpef7.js","assets/Streamable-CiwoXGoY.js","assets/Wistia-TfZwOW07.js","assets/Twitch-oZm8QTkC.js","assets/DailyMotion-6-kEzw8x.js","assets/Mixcloud-TxNQ6U_H.js","assets/Vidyard-CRuMZf-H.js","assets/Kaltura-BN2BROmb.js","assets/FilePlayer-BBQYTn34.js","assets/Preview-BS-5sLY8.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as j,_ as x,s as ot,t as lt,v as te,w as ct,P as g,A as ue,b as ut,x as dt,u as xe,y as ft,j as i,S as M,d as I,z as ht,h as pt,m as yt,k as mt,i as X,c as _t,B as vt,g as bt,M as gt}from"./index-BYUIMpDd.js";function Pt(e,t,r){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const wt={some:0,all:1};function Ot(e,t,{root:r,margin:a,amount:n="some"}={}){const s=Pt(e),l=new WeakMap,u=p=>{p.forEach(c=>{const h=l.get(c.target);if(c.isIntersecting!==!!h)if(c.isIntersecting){const m=t(c);typeof m=="function"?l.set(c.target,m):o.unobserve(c.target)}else h&&(h(c),l.delete(c.target))})},o=new IntersectionObserver(u,{root:r,rootMargin:a,threshold:typeof n=="number"?n:wt[n]});return s.forEach(p=>o.observe(p)),()=>o.disconnect()}function xt(e,{root:t,margin:r,amount:a,once:n=!1}={}){const[s,l]=j.useState(!1);return j.useEffect(()=>{if(!e.current||n&&s)return;const u=()=>(l(!0),n?void 0:()=>l(!1)),o={root:t&&t.current||void 0,margin:r,amount:a};return Ot(e.current,u,o)},[t,e,r,n,a]),s}var jt=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},s.type=r.type||"text/javascript",s.charset=r.charset||"utf8",s.async="async"in r?!!r.async:!0,s.src=t,r.attrs&&St(s,r.attrs),r.text&&(s.text=""+r.text);var l="onload"in s?_e:Tt;l(s,a),s.onload||_e(s,a),n.appendChild(s)};function St(e,t){for(var r in t)e.setAttribute(r,t[r])}function _e(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Tt(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Et=function(t){return At(t)&&!Nt(t)};function At(e){return!!e&&typeof e=="object"}function Nt(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Rt(e)}var Ct=typeof Symbol=="function"&&Symbol.for,Mt=Ct?Symbol.for("react.element"):60103;function Rt(e){return e.$$typeof===Mt}function $t(e){return Array.isArray(e)?[]:{}}function z(e,t){return t.clone!==!1&&t.isMergeableObject(e)?k($t(e),e,t):e}function Lt(e,t,r){return e.concat(t).map(function(a){return z(a,r)})}function Dt(e,t){if(!t.customMerge)return k;var r=t.customMerge(e);return typeof r=="function"?r:k}function It(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function ve(e){return Object.keys(e).concat(It(e))}function je(e,t){try{return t in e}catch{return!1}}function kt(e,t){return je(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Ut(e,t,r){var a={};return r.isMergeableObject(e)&&ve(e).forEach(function(n){a[n]=z(e[n],r)}),ve(t).forEach(function(n){kt(e,n)||(je(e,n)&&r.isMergeableObject(t[n])?a[n]=Dt(n,r)(e[n],t[n],r):a[n]=z(t[n],r))}),a}function k(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||Lt,r.isMergeableObject=r.isMergeableObject||Et,r.cloneUnlessOtherwiseSpecified=z;var a=Array.isArray(t),n=Array.isArray(e),s=a===n;return s?a?r.arrayMerge(e,t,r):Ut(e,t,r):z(t,r)}k.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return k(a,n,r)},{})};var Vt=k,Se=Vt,Ht=Object.create,J=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Ft=Object.getOwnPropertyNames,Bt=Object.getPrototypeOf,Kt=Object.prototype.hasOwnProperty,Wt=(e,t)=>{for(var r in t)J(e,r,{get:t[r],enumerable:!0})},Te=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ft(t))!Kt.call(e,n)&&n!==r&&J(e,n,{get:()=>t[n],enumerable:!(a=zt(t,n))||a.enumerable});return e},de=(e,t,r)=>(r=e!=null?Ht(Bt(e)):{},Te(!e||!e.__esModule?J(r,"default",{value:e,enumerable:!0}):r,e)),Yt=e=>Te(J({},"__esModule",{value:!0}),e),Ee={};Wt(Ee,{callPlayer:()=>cr,getConfig:()=>or,getSDK:()=>sr,isBlobUrl:()=>dr,isMediaStream:()=>ur,lazy:()=>Qt,omit:()=>lr,parseEndTime:()=>ar,parseStartTime:()=>rr,queryString:()=>ir,randomString:()=>nr,supportsWebKitPresentationMode:()=>fr});var Q=Yt(Ee),Xt=de(j),qt=de(jt),Jt=de(Se);const Qt=e=>Xt.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Zt=/[?&#](?:start|t)=([0-9hms]+)/,Gt=/[?&#]end=([0-9hms]+)/,ie=/(\d+)(h|m|s)/g,er=/^\d+$/;function Ae(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(ie))return tr(a);if(er.test(a))return parseInt(a)}}function tr(e){let t=0,r=ie.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=ie.exec(e)}return t}function rr(e){return Ae(e,Zt)}function ar(e){return Ae(e,Gt)}function nr(){return Math.random().toString(36).substr(2,5)}function ir(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function re(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const $={},sr=function(t,r,a=null,n=()=>!0,s=qt.default){const l=re(r);return l&&n(l)?Promise.resolve(l):new Promise((u,o)=>{if($[t]){$[t].push({resolve:u,reject:o});return}$[t]=[{resolve:u,reject:o}];const p=c=>{$[t].forEach(h=>h.resolve(c))};if(a){const c=window[a];window[a]=function(){c&&c(),p(re(r))}}s(t,c=>{c?($[t].forEach(h=>h.reject(c)),$[t]=null):a||p(re(r))})})};function or(e,t){return(0,Jt.default)(t.config,e.config)}function lr(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const s of n)r.indexOf(s)===-1&&(a[s]=e[s]);return a}function cr(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function ur(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function dr(e){return/^blob:/.test(e)}function fr(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var fe=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyNames,yr=Object.prototype.hasOwnProperty,mr=(e,t)=>{for(var r in t)fe(e,r,{get:t[r],enumerable:!0})},_r=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of pr(t))!yr.call(e,n)&&n!==r&&fe(e,n,{get:()=>t[n],enumerable:!(a=hr(t,n))||a.enumerable});return e},vr=e=>_r(fe({},"__esModule",{value:!0}),e),Ne={};mr(Ne,{AUDIO_EXTENSIONS:()=>he,DASH_EXTENSIONS:()=>Be,FLV_EXTENSIONS:()=>Ke,HLS_EXTENSIONS:()=>ye,MATCH_URL_DAILYMOTION:()=>Ve,MATCH_URL_FACEBOOK:()=>$e,MATCH_URL_FACEBOOK_WATCH:()=>Le,MATCH_URL_KALTURA:()=>Fe,MATCH_URL_MIXCLOUD:()=>He,MATCH_URL_MUX:()=>Re,MATCH_URL_SOUNDCLOUD:()=>Ce,MATCH_URL_STREAMABLE:()=>De,MATCH_URL_TWITCH_CHANNEL:()=>Ue,MATCH_URL_TWITCH_VIDEO:()=>ke,MATCH_URL_VIDYARD:()=>ze,MATCH_URL_VIMEO:()=>Me,MATCH_URL_WISTIA:()=>Ie,MATCH_URL_YOUTUBE:()=>se,VIDEO_EXTENSIONS:()=>pe,canPlay:()=>gr});var br=vr(Ne),be=Q;const se=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Ce=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Me=/vimeo\.com\/(?!progressive_redirect).+/,Re=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,$e=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Le=/^https?:\/\/fb\.watch\/.+$/,De=/streamable\.com\/([a-z0-9]+)$/,Ie=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,ke=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Ue=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Ve=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,He=/mixcloud\.com\/([^/]+\/[^/]+)/,ze=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Fe=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,he=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,pe=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ye=/\.(m3u8)($|\?)/i,Be=/\.(mpd)($|\?)/i,Ke=/\.(flv)($|\?)/i,oe=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&oe(t)||oe(t.src))return!0;return!1}return(0,be.isMediaStream)(e)||(0,be.isBlobUrl)(e)?!0:he.test(e)||pe.test(e)||ye.test(e)||Be.test(e)||Ke.test(e)},gr={youtube:e=>e instanceof Array?e.every(t=>se.test(t)):se.test(e),soundcloud:e=>Ce.test(e)&&!he.test(e),vimeo:e=>Me.test(e)&&!pe.test(e)&&!ye.test(e),mux:e=>Re.test(e),facebook:e=>$e.test(e)||Le.test(e),streamable:e=>De.test(e),wistia:e=>Ie.test(e),twitch:e=>ke.test(e)||Ue.test(e),dailymotion:e=>Ve.test(e),mixcloud:e=>He.test(e),vidyard:e=>ze.test(e),kaltura:e=>Fe.test(e),file:oe};var me=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,wr=Object.getOwnPropertyNames,Or=Object.prototype.hasOwnProperty,xr=(e,t)=>{for(var r in t)me(e,r,{get:t[r],enumerable:!0})},jr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of wr(t))!Or.call(e,n)&&n!==r&&me(e,n,{get:()=>t[n],enumerable:!(a=Pr(t,n))||a.enumerable});return e},Sr=e=>jr(me({},"__esModule",{value:!0}),e),We={};xr(We,{default:()=>Er});var Tr=Sr(We),O=Q,P=br,Er=[{key:"youtube",name:"YouTube",canPlay:P.canPlay.youtube,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./YouTube-E_os2pNl.js").then(e=>e.Y),__vite__mapDeps([0,1,2])))},{key:"soundcloud",name:"SoundCloud",canPlay:P.canPlay.soundcloud,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./SoundCloud-BNwPYRuh.js").then(e=>e.S),__vite__mapDeps([3,1,2])))},{key:"vimeo",name:"Vimeo",canPlay:P.canPlay.vimeo,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Vimeo-Dpr7Fffs.js").then(e=>e.V),__vite__mapDeps([4,1,2])))},{key:"mux",name:"Mux",canPlay:P.canPlay.mux,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Mux-DeBcHdKE.js").then(e=>e.M),__vite__mapDeps([5,1,2])))},{key:"facebook",name:"Facebook",canPlay:P.canPlay.facebook,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Facebook-DWnhpef7.js").then(e=>e.F),__vite__mapDeps([6,1,2])))},{key:"streamable",name:"Streamable",canPlay:P.canPlay.streamable,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Streamable-CiwoXGoY.js").then(e=>e.S),__vite__mapDeps([7,1,2])))},{key:"wistia",name:"Wistia",canPlay:P.canPlay.wistia,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Wistia-TfZwOW07.js").then(e=>e.W),__vite__mapDeps([8,1,2])))},{key:"twitch",name:"Twitch",canPlay:P.canPlay.twitch,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Twitch-oZm8QTkC.js").then(e=>e.T),__vite__mapDeps([9,1,2])))},{key:"dailymotion",name:"DailyMotion",canPlay:P.canPlay.dailymotion,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./DailyMotion-6-kEzw8x.js").then(e=>e.D),__vite__mapDeps([10,1,2])))},{key:"mixcloud",name:"Mixcloud",canPlay:P.canPlay.mixcloud,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Mixcloud-TxNQ6U_H.js").then(e=>e.M),__vite__mapDeps([11,1,2])))},{key:"vidyard",name:"Vidyard",canPlay:P.canPlay.vidyard,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Vidyard-CRuMZf-H.js").then(e=>e.V),__vite__mapDeps([12,1,2])))},{key:"kaltura",name:"Kaltura",canPlay:P.canPlay.kaltura,lazyPlayer:(0,O.lazy)(()=>x(()=>import("./Kaltura-BN2BROmb.js").then(e=>e.K),__vite__mapDeps([13,1,2])))},{key:"file",name:"FilePlayer",canPlay:P.canPlay.file,canEnablePIP:e=>P.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,O.supportsWebKitPresentationMode)())&&!P.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,O.lazy)(()=>x(()=>import("./FilePlayer-BBQYTn34.js").then(e=>e.F),__vite__mapDeps([14,1,2])))}],ge=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ar(e,t){return!!(e===t||ge(e)&&ge(t))}function Nr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Ar(e[r],t[r]))return!1;return!0}function Cr(e,t){t===void 0&&(t=Nr);var r,a=[],n,s=!1;function l(){for(var u=[],o=0;o<arguments.length;o++)u[o]=arguments[o];return s&&r===this&&t(u,a)||(n=e.apply(this,u),s=!0,r=this,a=u),n}return l}const Mr=Object.freeze(Object.defineProperty({__proto__:null,default:Cr},Symbol.toStringTag,{value:"Module"})),Rr=ot(Mr);var $r=typeof Element<"u",Lr=typeof Map=="function",Dr=typeof Set=="function",Ir=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function q(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!q(e[a],t[a]))return!1;return!0}var s;if(Lr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(a=s.next()).done;)if(!t.has(a.value[0]))return!1;for(s=e.entries();!(a=s.next()).done;)if(!q(a.value[1],t.get(a.value[0])))return!1;return!0}if(Dr&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(a=s.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(Ir&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if($r&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!q(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var Ye=function(t,r){try{return q(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},kr=Object.create,Z=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Vr=Object.getOwnPropertyNames,Hr=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty,Fr=(e,t)=>{for(var r in t)Z(e,r,{get:t[r],enumerable:!0})},Xe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Vr(t))!zr.call(e,n)&&n!==r&&Z(e,n,{get:()=>t[n],enumerable:!(a=Ur(t,n))||a.enumerable});return e},Br=(e,t,r)=>(r=e!=null?kr(Hr(e)):{},Xe(!e||!e.__esModule?Z(r,"default",{value:e,enumerable:!0}):r,e)),Kr=e=>Xe(Z({},"__esModule",{value:!0}),e),qe={};Fr(qe,{defaultProps:()=>Xr,propTypes:()=>Yr});var Je=Kr(qe),Wr=Br(lt);const{string:_,bool:w,number:L,array:ae,oneOfType:U,shape:S,object:b,func:y,node:Pe}=Wr.default,Yr={url:U([_,ae,b]),playing:w,loop:w,controls:w,volume:L,muted:w,playbackRate:L,width:U([_,L]),height:U([_,L]),style:b,progressInterval:L,playsinline:w,pip:w,stopOnUnmount:w,light:U([w,_,b]),playIcon:Pe,previewTabIndex:L,previewAriaLabel:_,fallback:Pe,oEmbedUrl:_,wrapper:U([_,y,S({render:y.isRequired})]),config:S({soundcloud:S({options:b}),youtube:S({playerVars:b,embedOptions:b,onUnstarted:y}),facebook:S({appId:_,version:_,playerId:_,attributes:b}),dailymotion:S({params:b}),vimeo:S({playerOptions:b,title:_}),mux:S({attributes:b,version:_}),file:S({attributes:b,tracks:ae,forceVideo:w,forceAudio:w,forceHLS:w,forceSafariHLS:w,forceDisableHls:w,forceDASH:w,forceFLV:w,hlsOptions:b,hlsVersion:_,dashVersion:_,flvVersion:_}),wistia:S({options:b,playerId:_,customControls:ae}),mixcloud:S({options:b}),twitch:S({options:b,playerId:_}),vidyard:S({options:b})}),onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onPlaybackRateChange:y,onPlaybackQualityChange:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y},v=()=>{},Xr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:v},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v};var qr=Object.create,F=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Qr=Object.getOwnPropertyNames,Zr=Object.getPrototypeOf,Gr=Object.prototype.hasOwnProperty,ea=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ta=(e,t)=>{for(var r in t)F(e,r,{get:t[r],enumerable:!0})},Qe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Qr(t))!Gr.call(e,n)&&n!==r&&F(e,n,{get:()=>t[n],enumerable:!(a=Jr(t,n))||a.enumerable});return e},Ze=(e,t,r)=>(r=e!=null?qr(Zr(e)):{},Qe(!e||!e.__esModule?F(r,"default",{value:e,enumerable:!0}):r,e)),ra=e=>Qe(F({},"__esModule",{value:!0}),e),f=(e,t,r)=>(ea(e,typeof t!="symbol"?t+"":t,r),r),Ge={};ta(Ge,{default:()=>G});var aa=ra(Ge),we=Ze(j),na=Ze(Ye),et=Je,ia=Q;const sa=5e3;class G extends we.Component{constructor(){super(...arguments),f(this,"mounted",!1),f(this,"isReady",!1),f(this,"isPlaying",!1),f(this,"isLoading",!0),f(this,"loadOnReady",null),f(this,"startOnPlay",!0),f(this,"seekOnPlay",null),f(this,"onDurationCalled",!1),f(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),f(this,"getInternalPlayer",t=>this.player?this.player[t]:null),f(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),f(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),f(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),f(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),f(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),f(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),f(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),f(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:s,playbackRate:l,pip:u,loop:o,activePlayer:p,disableDeferredLoading:c}=this.props;if(!(0,na.default)(t.url,r)){if(this.isLoading&&!p.forceLoad&&!c&&!(0,ia.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&u&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!u&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==s&&(s?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),t.loop!==o&&this.player.setLoop&&this.player.setLoop(o)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},sa));return}if(r?r==="fraction":t>0&&t<1){const s=this.player.getDuration();if(!s){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(s*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?we.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}f(G,"displayName","Player");f(G,"propTypes",et.propTypes);f(G,"defaultProps",et.defaultProps);var oa=Object.create,B=Object.defineProperty,la=Object.getOwnPropertyDescriptor,ca=Object.getOwnPropertyNames,ua=Object.getPrototypeOf,da=Object.prototype.hasOwnProperty,fa=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ha=(e,t)=>{for(var r in t)B(e,r,{get:t[r],enumerable:!0})},tt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ca(t))!da.call(e,n)&&n!==r&&B(e,n,{get:()=>t[n],enumerable:!(a=la(t,n))||a.enumerable});return e},K=(e,t,r)=>(r=e!=null?oa(ua(e)):{},tt(!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e)),pa=e=>tt(B({},"__esModule",{value:!0}),e),d=(e,t,r)=>(fa(e,typeof t!="symbol"?t+"":t,r),r),rt={};ha(rt,{createReactPlayer:()=>Oa});var ya=pa(rt),D=K(j),ma=K(Se),ne=K(Rr),Oe=K(Ye),H=Je,at=Q,_a=K(aa);const va=(0,at.lazy)(()=>x(()=>import("./Preview-BS-5sLY8.js").then(e=>e.P),__vite__mapDeps([15,1,2]))),ba=typeof window<"u"&&window.document&&typeof document<"u",ga=typeof te<"u"&&te.window&&te.window.document,Pa=Object.keys(H.propTypes),wa=ba||ga?D.Suspense:()=>null,V=[],Oa=(e,t)=>{var r;return r=class extends D.Component{constructor(){super(...arguments),d(this,"state",{showPreview:!!this.props.light}),d(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),d(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),d(this,"showPreview",()=>{this.setState({showPreview:!0})}),d(this,"getDuration",()=>this.player?this.player.getDuration():null),d(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),d(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),d(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),d(this,"seekTo",(a,n,s)=>{if(!this.player)return null;this.player.seekTo(a,n,s)}),d(this,"handleReady",()=>{this.props.onReady(this)}),d(this,"getActivePlayer",(0,ne.default)(a=>{for(const n of[...V,...e])if(n.canPlay(a))return n;return t||null})),d(this,"getConfig",(0,ne.default)((a,n)=>{const{config:s}=this.props;return ma.default.all([H.defaultProps.config,H.defaultProps.config[n]||{},s,s[n]||{}])})),d(this,"getAttributes",(0,ne.default)(a=>(0,at.omit)(this.props,Pa))),d(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const s=this.getConfig(a,n.key);return D.default.createElement(_a.default,{...this.props,key:n.key,ref:this.references.player,config:s,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,Oe.default)(this.props,a)||!(0,Oe.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:s,previewTabIndex:l,oEmbedUrl:u,previewAriaLabel:o}=this.props;return D.default.createElement(va,{url:a,light:n,playIcon:s,previewTabIndex:l,previewAriaLabel:o,oEmbedUrl:u,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:s,height:l,fallback:u,wrapper:o}=this.props,{showPreview:p}=this.state,c=this.getAttributes(a),h=typeof o=="string"?this.references.wrapper:void 0;return D.default.createElement(o,{ref:h,style:{...n,width:s,height:l},...c},D.default.createElement(wa,{fallback:u},p?this.renderPreview(a):this.renderActivePlayer(a)))}},d(r,"displayName","ReactPlayer"),d(r,"propTypes",H.propTypes),d(r,"defaultProps",H.defaultProps),d(r,"addCustomPlayer",a=>{V.push(a)}),d(r,"removeCustomPlayers",()=>{V.length=0}),d(r,"canPlay",a=>{for(const n of[...V,...e])if(n.canPlay(a))return!0;return!1}),d(r,"canEnablePIP",a=>{for(const n of[...V,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var xa=Object.create,ee=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Sa=Object.getOwnPropertyNames,Ta=Object.getPrototypeOf,Ea=Object.prototype.hasOwnProperty,Aa=(e,t)=>{for(var r in t)ee(e,r,{get:t[r],enumerable:!0})},nt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Sa(t))!Ea.call(e,n)&&n!==r&&ee(e,n,{get:()=>t[n],enumerable:!(a=ja(t,n))||a.enumerable});return e},Na=(e,t,r)=>(r=e!=null?xa(Ta(e)):{},nt(!e||!e.__esModule?ee(r,"default",{value:e,enumerable:!0}):r,e)),Ca=e=>nt(ee({},"__esModule",{value:!0}),e),it={};Aa(it,{default:()=>La});var Ma=Ca(it),le=Na(Tr),Ra=ya;const $a=le.default[le.default.length-1];var La=(0,Ra.createReactPlayer)(le.default,$a);const Da=ct(Ma);st.propTypes={creatorInfo:g.object,threadInfo:g.object,currentUser:g.object,postInfo:g.object,setShowModal:g.func,setModalData:g.func,handleShare:g.func};function st({creatorInfo:e,threadInfo:t,currentUser:r,postInfo:a,setShowModal:n,setModalData:s,handleShare:l}){const{isAuthenticated:u,user:o}=ue(),[p,c]=j.useState(r==null?void 0:r.saved),h=ut(),m=dt(),T=xe(),A=j.useRef(),[E,N]=j.useState(!1);ft(A,()=>{N(!1)});async function R(){if(u){if(await I.delete(`/api/post/${a==null?void 0:a.id}`),m.pathname.includes("post"))return T(-1);h.invalidateQueries({queryKey:["posts"]})}else alert("You must be logged in to delete.");N(!1)}async function W(){if(!u)return alert("You must be logged in to save.");p?(await I.delete(`/api/posts/saved/${a==null?void 0:a.id}`),c(!1)):(await I.put(`/api/posts/saved/${a==null?void 0:a.id}`),c(!0)),h.invalidateQueries({queryKey:["saved"]}),N(!1)}function Y(){n(!0),s(i.jsx(ht,{isEdit:!0,postInfo:a,setShowModal:n,threadInfo:t}))}const C=u&&(e.user_name===o.username||o.roles.includes("admin")||o.roles.includes("mod")&&o.mod_in.includes(t.thread_id));return i.jsx(i.Fragment,{children:i.jsxs("div",{ref:A,className:"flex relative items-center md:cursor-pointer group",onClick:()=>N(!0),children:[i.jsx(M,{className:"w-4 h-4 md:w-6 md:h-6",type:"more"}),i.jsx("p",{className:"ml-2 text-sm md:cursor-pointer md:text-base",children:"More"}),E&&i.jsxs("ul",{className:"absolute top-full z-20 p-1 mt-1 space-y-1 w-24 list-none bg-white rounded-md border-2 border-theme-cultured",children:[i.jsx("li",{className:"p-1 text-sm md:cursor-pointer md:text-base hover:bg-theme-cultured",onClick:W,children:p?"Unsave":"Save"}),C&&i.jsx("li",{className:"p-1 text-sm text-red-500 md:cursor-pointer active:bg-theme-cultured md:text-base hover:bg-theme-cultured",onClick:R,children:"Delete"}),e.user_name===o.username&&i.jsx("li",{onClick:Y,className:"p-1 text-sm md:cursor-pointer active:bg-theme-cultured md:text-base hover:bg-theme-cultured",children:"Edit"}),i.jsx("li",{className:"p-1 text-sm md:cursor-pointer active:bg-theme-cultured md:hidden md:text-base hover:bg-theme-cultured",onClick:()=>{l().then(()=>N(!1))},children:"Share"})]})]})})}ce.propTypes={url:g.string,initialCount:g.number,intitalVote:g.bool,contentID:g.number,type:g.string};function ce({url:e,intitalVote:t,initialCount:r,contentID:a,type:n}){const[s,l]=j.useState(t),[u,o]=j.useState(r),{isAuthenticated:p}=ue(),{mutate:c}=pt({mutationFn:async({vote:m,method:T,contentID:A})=>{switch(T){case"put":return I.put(`${e}/${A}`,{is_upvote:m}).then(E=>E.data);case"patch":return I.patch(`${e}/${A}`,{is_upvote:m}).then(E=>E.data);case"delete":return I.delete(`${e}/${A}`).then(E=>E.data)}}});function h(m){if(!p)return alert("You must be logged in to vote.");s===null?(c({vote:m,method:"put",contentID:a}),o(T=>T+(m?1:-1))):m===null?(c({vote:m,method:"delete",contentID:a}),o(T=>T-(s?1:-1))):(c({vote:m,method:"patch",contentID:a}),o(T=>T+(m?2:-2))),l(m)}return n==="mobile"?i.jsxs(i.Fragment,{children:[i.jsx(M,{type:"mobileVote",className:"w-5 h-5 md:w-6 md:h-6",defaultStyle:!0,active:s===!0,onClick:()=>h(s?null:!0)}),i.jsx("p",{className:s===!0?"text-theme-red-coral":s===!1?"text-sky-600":"",children:u}),i.jsx(M,{type:"mobileVote",className:"w-5 h-5 rotate-180 md:w-6 md:h-6",defaultStyle:!1,active:s===!1,onClick:()=>h(s===!1?null:!1)})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"px-5 py-0.5 bg-orange-100 rounded-md",children:i.jsx(M,{type:"down-arrow",defaultStyle:!0,className:"w-10 h-10 rotate-180",onClick:()=>h(s?null:!0),active:s===!0})}),i.jsx("p",{className:"text-lg font-semibold",children:i.jsx("span",{className:s===!0?"text-theme-red-coral":s===!1?"text-sky-600":"",children:u})}),i.jsx("div",{className:"px-5 py-0.5 bg-blue-50 rounded-md group",children:i.jsx(M,{type:"down-arrow",className:"w-10 h-10",defaultStyle:!1,onClick:()=>h(s===!1?null:!1),active:s===!1})})]})}Ia.propTypes={post:g.object,isExpanded:g.bool,postIndex:g.number,setCommentMode:g.func};function Ia({post:e,isExpanded:t=!1,postIndex:r,setCommentMode:a}){var W,Y;const n=xe(),{isAuthenticated:s}=ue(),l=j.useRef(null),u=xt(l,{amount:"all"}),[o,p]=j.useState(!1),[c,h]=j.useState(i.jsx(i.Fragment,{}));j.useEffect(()=>(t&&(document.title=e.post_info.title),()=>{t&&(document.title="Threaddit")}),[t]);function m(C){e!=null&&e.post_info.media&&(p(!0),h(i.jsx("img",{className:"object-cover w-11/12 max-h-5/6 md:w-max md:max-h-screen",src:e==null?void 0:e.post_info.media.replace("additional_args","c_auto,g_auto"),alt:""})))}function T(){s?a(C=>!C):alert("You must be logged in to reply.")}const A={hidden:{opacity:0,y:100},animate:{opacity:1,y:0},empty:{}};function E(C){return/(jpg|jpeg|png|webp|avif|gif|svg|image)/.test(C)}async function N(){return navigator.clipboard.writeText(`${location.host}/post/${e==null?void 0:e.post_info.id}`).then(()=>{alert("Copied Post Link to clipboard")}).catch(C=>alert(C))}const R=new Date(e==null?void 0:e.post_info.created_at);return i.jsxs(i.Fragment,{children:[i.jsxs(yt.li,{className:`flex flex-col p-1 pb-3 bg-white rounded-xl border-2 md:pb-0 hover:drop-shadow-md ${!t&&"md:flex-row"} border-theme-gray-blue`,variants:A,initial:r<5||t?"hidden":"empty",animate:r<5||t?"animate":"empty",exit:{opacity:0,y:100,transition:{duration:.25}},transition:{duration:.25,delay:r*.25},children:[e.post_info.media&&i.jsx("div",{className:`relative overflow-hidden ${t?"h-full md:h-96":"md:w-64 md:h-32"} md:pt-0 ${!E(e.post_info.media)&&"pt-[56.25%] aspect-video"} rounded-md my-auto bg-black`,ref:l,children:E(e.post_info.media)?i.jsx("img",{onClick:()=>m(),loading:"lazy",width:"auto",height:"100%",src:e.post_info.media,alt:"",className:`object-cover w-full h-full rounded-md duration-500 md:cursor-pointer ${!t&&"hover:scale-105"}`}):i.jsx(Da,{url:e.post_info.media,width:"100%",height:"100%",controls:!0,loading:"lazy",muted:!t,loop:!0,playing:l.current&&l.current.offsetWidth>256&&u,style:{position:"absolute",top:0,left:0}})}),i.jsx("div",{className:"flex flex-col flex-1 p-3 space-y-5 w-full md:space-y-0 md:space-x-4 md:flex-row",children:i.jsxs("div",{className:"flex flex-col space-y-1 w-full md:justify-between",children:[t?i.jsxs("div",{className:"flex flex-col space-y-2 w-full h-full",children:[i.jsx("div",{className:`w-full font-semibold text-ellipsis ${e.post_info.content&&"border-b-2 pb-2"}`,children:e==null?void 0:e.post_info.title}),e.post_info.content&&i.jsx("div",{className:"max-w-full text-black prose prose-sm md:prose-base prose-blue",children:i.jsx(mt,{className:"[&>*:first-child]:mt-0",children:e==null?void 0:e.post_info.content})})]}):i.jsx(X,{to:`/post/${e==null?void 0:e.post_info.id}`,className:"flex flex-col space-y-2 w-full h-full",children:i.jsx("div",{className:"w-full font-semibold text-ellipsis",children:e==null?void 0:e.post_info.title})}),i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsxs("div",{className:"flex space-x-2 w-full md:w-fit",children:[i.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[i.jsxs(X,{to:`/u/${e==null?void 0:e.user_info.user_name}`,children:["By"," ",i.jsxs("span",{className:"text-xs font-medium text-blue-600 hover:underline",children:["u/",e==null?void 0:e.user_info.user_name]})]}),i.jsx("img",{src:(e==null?void 0:e.user_info.user_avatar)||_t,alt:"",className:"object-cover w-6 h-6 rounded-full"})]}),i.jsxs("div",{className:"flex items-center space-x-2 ",children:[i.jsx("p",{className:"text-xs",children:"in"}),i.jsx(X,{to:`/${e==null?void 0:e.thread_info.thread_name}`,className:"text-xs font-medium hover:underline text-theme-orange",children:` ${e==null?void 0:e.thread_info.thread_name}`}),(e==null?void 0:e.thread_info.thread_logo)&&i.jsx("img",{src:e==null?void 0:e.thread_info.thread_logo,alt:"",className:"object-cover w-6 h-6 rounded-full"})]}),i.jsx("span",{onClick:()=>n(`/post/${e==null?void 0:e.post_info.id}`),className:"flex-1 md:hidden"})]}),i.jsxs("div",{className:"hidden space-x-1 md:flex",children:[i.jsxs("p",{className:"text-xs font-light",children:[R.toDateString()," ",R.toLocaleTimeString({hour12:!0})]}),i.jsx("p",{className:"text-xs",children:(e==null?void 0:e.post_info.is_edited)&&"Edited"})]})]}),i.jsxs("div",{className:"flex space-x-1 md:hidden",children:[i.jsxs("p",{className:"text-xs font-light",children:[R.toDateString()," ",R.toLocaleTimeString({hour12:!0})]}),i.jsx("p",{className:"text-xs",children:(e==null?void 0:e.post_info.is_edited)&&"Edited"})]})]})}),i.jsxs("div",{className:`flex ${t&&"items-center justify-between mx-5 md:-mt-4"}`,children:[i.jsxs("div",{className:`flex justify-around w-full md:w-fit md:justify-evenly  ${t?"space-x-10":"md:flex-col md:px-10"}`,children:[t?i.jsxs("div",{className:"flex items-center space-x-1",children:[i.jsx(M,{type:"comment",className:"w-4 h-4 md:w-5 md:h-5",onClick:()=>T()}),i.jsx("p",{className:"text-sm md:cursor-pointer md:text-base",children:"Reply"})]}):i.jsxs(X,{to:`/post/${e==null?void 0:e.post_info.id}`,className:"flex items-center space-x-2 md:cursor-pointer group",children:[i.jsx(M,{type:"comment",className:"w-4 h-4 md:w-5 md:h-5"}),i.jsxs("div",{className:"flex space-x-1",children:[i.jsx("span",{className:"text-sm md:text-base",children:e==null?void 0:e.post_info.comments_count}),i.jsx("p",{className:"hidden md:block",children:"Comments"})]})]}),i.jsxs("div",{className:"hidden items-center space-x-2 md:cursor-pointer md:flex group",onClick:N,children:[i.jsx(M,{type:"share",className:"w-4 h-4 md:w-5 md:h-5"}),i.jsx("p",{className:"text-sm md:cursor-pointer md:text-base",children:"Share"})]}),i.jsx(st,{creatorInfo:e==null?void 0:e.user_info,threadInfo:e==null?void 0:e.thread_info,postInfo:e==null?void 0:e.post_info,setShowModal:p,setModalData:h,handleShare:N,currentUser:e==null?void 0:e.current_user}),i.jsx("div",{className:"flex items-center space-x-3 md:hidden",children:i.jsx(ce,{intitalVote:(W=e==null?void 0:e.current_user)==null?void 0:W.has_upvoted,initialCount:e==null?void 0:e.post_info.post_karma,url:"/api/reactions/post",contentID:e==null?void 0:e.post_info.id,type:"mobile"})})]}),i.jsx("div",{className:`hidden justify-around items-center my-2 space-y-1  md:flex border-theme-gray-blue ${t?"flex-row space-x-10":"flex-col px-5 border-l"}`,children:i.jsx(ce,{intitalVote:(Y=e==null?void 0:e.current_user)==null?void 0:Y.has_upvoted,initialCount:e==null?void 0:e.post_info.post_karma,url:"/api/reactions/post",contentID:e==null?void 0:e.post_info.id,type:"full"})})]})]}),t&&i.jsx(vt,{}),i.jsx(bt,{children:o&&i.jsx(gt,{setShowModal:p,showModal:o,children:c})})]})}export{Ia as P,ce as V,br as p,Q as u};
