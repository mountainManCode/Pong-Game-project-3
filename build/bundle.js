!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.boardGap=10,e.paddleWidth=8,e.paddleHeight=56,e.ballRadius=8,e.KEYS={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" "}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=i(6),l=n(a),u=i(7),h=n(u),d=i(5),c=n(d),f=i(8),p=n(f),b=i(9),v=n(b),y=function(){function t(e,i,n){var s=this;r(this,t),this.element=e,this.width=i,this.height=n,this.gameElement=document.getElementById(this.element),this.score1=new p.default(196,20,30),this.score2=new p.default(286,20,30),this.winner=new v.default(20,120,50),this.board=new l.default(this.width,this.height),this.boardGap=o.boardGap,this.paddleWidth=o.paddleWidth,this.paddleHeight=o.paddleHeight,this.ballRadius=o.ballRadius,this.paddleOne=new h.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,o.KEYS.a,o.KEYS.z),this.paddleTwo=new h.default(this.height,this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2,o.KEYS.up,o.KEYS.down),this.ball=new c.default(this.ballRadius,this.width,this.height),this.ball2=new c.default(2*this.ballRadius,this.width,this.height),document.addEventListener("keydown",function(t){t.key===o.KEYS.spaceBar&&(s.pause=!s.pause)})}return s(t,[{key:"champion",value:function(t,e){this.winner.render(t,e+" Wins!!!"),this.pause=!0}},{key:"render",value:function(){if(!this.pause){this.gameElement.innerHTML=" ";var t=document.createElementNS(o.SVG_NS,"svg");t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewbox","0 0 "+this.width+" "+this.height),t.setAttributeNS(null,"version","1.1"),this.gameElement.appendChild(t),this.board.render(t),this.paddleOne.render(t),this.paddleTwo.render(t),this.ball.render(t,this.paddleOne,this.paddleTwo),this.ball2.render(t,this.paddleOne,this.paddleTwo),this.score1.render(t,this.paddleOne.score),this.score2.render(t,this.paddleTwo.score),3===this.paddleOne.score?this.champion(t,"Player 1"):3===this.paddleTwo.score&&this.champion(t,"Player 2")}}}]),t}();e.default=y},function(t,e,i){var n=i(10);"string"==typeof n&&(n=[[t.i,n,""]]);i(15)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){"use strict";i(3);var n=i(2),r=function(t){return t&&t.__esModule?t:{default:t}}(n),s=new r.default("game",512,256);!function t(){s.render(),requestAnimationFrame(t)}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){n(this,t),this.ballRadius=e,this.boardWidth=i,this.boardHeight=r,this.direction=1,this.ping=new Audio("public/sounds/pong-01.wav"),this.reset()}return r(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"wallCollision",value:function(t,e){var i=this.x-this.ballRadius<=0,n=this.x+this.ballRadius>=this.boardWidth,r=this.y-this.ballRadius<=0,s=this.y+this.ballRadius>=this.boardHeight;i?(this.direction=1,this.goal(e)):n?(this.direction=-1,this.goal(t)):(r||s)&&(this.vy=-this.vy)}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=e.coordinates(e.x,e.y,e.width,e.height),n=i.leftX,r=i.topY,s=i.bottomY;this.x+this.ballRadius>=n&&this.y>=r&&this.y<=s&&(this.vx=-this.vx,this.ping.play())}else{var o=t.coordinates(t.x,t.y,t.width,t.height),a=o.rightX,l=o.topY,u=o.bottomY;this.x-this.ballRadius<=a&&this.y>=l&&this.y<=u&&(this.vx=-this.vx,this.ping.play())}}},{key:"goal",value:function(t){t.score++,this.reset()}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.wallCollision(e,i),this.paddleCollision(e,i);var n=document.createElementNS(s.SVG_NS,"circle");n.setAttributeNS(null,"r",this.ballRadius),n.setAttributeNS(null,"fill","orange"),n.setAttributeNS(null,"cx",this.x),n.setAttributeNS(null,"cy",this.y),t.appendChild(n)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","gradient(red, blue)"),t.appendChild(e);var i=document.createElementNS(s.SVG_NS,"line");i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","white"),i.setAttributeNS(null,"stroke-dasharray","25, 20"),i.setAttributeNS(null,"stroke-width","5"),t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r,s,o,a,l){var u=this;n(this,t),this.boardHeight=e,this.width=i,this.height=r,this.x=s,this.y=o,this.speed=10,this.score=0,document.addEventListener("keydown",function(t){switch(t.key){case a:u.up();break;case l:u.down()}})}return r(t,[{key:"coordinates",value:function(t,e,i,n){return{leftX:t,rightX:t+i,topY:e,bottomY:e+n}}},{key:"up",value:function(){this.y=Math.max(this.y-this.speed,0)}},{key:"down",value:function(){this.y=Math.min(this.y+this.speed,this.boardHeight-this.height)}},{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),e.setAttributeNS(null,"fill","yellow"),t.appendChild(e)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.size=r}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(s.SVG_NS,"text");i.setAttributeNS(null,"fill","white"),i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"font-size",this.size),i.setAttributeNS(null,"font-family","Silkscreen Web"),i.textContent=e,t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.size=r}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(s.SVG_NS,"text");i.setAttributeNS(null,"fill","blue"),i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"font-size",this.size),i.setAttributeNS(null,"font-family","Silkscreen Web"),i.textContent=e,t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){e=t.exports=i(11)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(14)+') format("woff"),url('+i(13)+') format("truetype"),url('+i(12)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%;background-image:linear-gradient(90deg,#7b920a,#12fff7)}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}h2{font-size:1.5rem;margin-top:1rem}.players{display:flex;flex-flow:row nowrap;justify-content:space-around}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=c[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(l(n.parts[s],e))}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(l(n.parts[s],e));c[n.id]={id:n.id,refs:1,parts:o}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],s=r[0],o=r[1],a=r[2],l=r[3],u={css:o,media:a,sourceMap:l};i[s]?i[s].parts.push(u):e.push(i[s]={id:s,parts:[u]})}return e}function r(t,e){var i=b(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var i,n,r;if(e.singleton){var l=y++;i=v||(v=o(e)),n=u.bind(null,i,l,!1),r=u.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=a(e),n=d.bind(null,i),r=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=o(e),n=h.bind(null,i),r=function(){s(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function u(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function h(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function d(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var c={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var r=n(t);return i(r,e),function(t){for(var s=[],o=0;o<r.length;o++){var a=r[o],l=c[a.id];l.refs--,s.push(l)}if(t){i(n(t),e)}for(var o=0;o<s.length;o++){var l=s[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}]);