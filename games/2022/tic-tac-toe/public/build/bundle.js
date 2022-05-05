var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}function u(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function f(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function a(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function $(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function y(t){m=t}const b=[],x=[],v=[],w=[],_=Promise.resolve();let k=!1;function E(t){v.push(t)}function C(t){w.push(t)}const S=new Set;let N=0;function T(){const t=m;do{for(;N<b.length;){const t=b[N];N++,y(t),A(t.$$)}for(y(null),b.length=0,N=0;x.length;)x.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];S.has(n)||(S.add(n),n())}v.length=0}while(b.length);for(;w.length;)w.pop()();k=!1,S.clear(),y(t)}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const O=new Set;let j;function q(){j={r:0,c:[],p:j}}function B(){j.r||r(j.c),j=j.p}function P(t,n){t&&t.i&&(O.delete(t),t.i(n))}function L(t,n,e,r){if(t&&t.o){if(O.has(t))return;O.add(t),j.c.push((()=>{O.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function M(t,n,e){const r=t.$$.props[n];void 0!==r&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function G(t){t&&t.c()}function W(t,e,c,i){const{fragment:u,on_mount:l,on_destroy:s,after_update:f}=t.$$;u&&u.m(e,c),i||E((()=>{const e=l.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]})),f.forEach(E)}function X(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function z(t,n){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,_.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function D(n,o,c,i,u,l,f,a=[-1]){const p=m;y(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:e(),dirty:a,skip_bound:!1,root:o.target||p.$$.root};f&&f(d.root);let $=!1;if(d.ctx=c?c(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),$&&z(n,t)),e})):[],d.update(),$=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(s)}else d.fragment&&d.fragment.c();o.intro&&P(n.$$.fragment),W(n,o.target,o.anchor,o.customElement),T()}y(p)}class F{$destroy(){X(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(n){let e,o,c,i,f,m,y,b,x,v,w,_,k,E,C=n[0][0]+"",S=n[0][1]+"";return{c(){e=a("ul"),o=a("li"),c=p("Player 1: "),i=p(C),f=d(),m=a("li"),y=p("Player 2: "),b=p(S),x=d(),v=a("input"),w=d(),_=a("input"),h(v,"type","button"),v.value="Swap",h(_,"type","button"),_.value="Confirm"},m(t,r){l(t,e,r),u(e,o),u(o,c),u(o,i),u(e,f),u(e,m),u(m,y),u(m,b),l(t,x,r),l(t,v,r),l(t,w,r),l(t,_,r),k||(E=[$(v,"click",n[2]),$(_,"click",n[3])],k=!0)},p(t,[n]){1&n&&C!==(C=t[0][0]+"")&&g(i,C),1&n&&S!==(S=t[0][1]+"")&&g(b,S)},i:t,o:t,d(t){t&&s(e),t&&s(x),t&&s(v),t&&s(w),t&&s(_),k=!1,r(E)}}}function I(t,n,e){let{players:r}=n,{screen:o}=n;return t.$$set=t=>{"players"in t&&e(0,r=t.players),"screen"in t&&e(1,o=t.screen)},[r,o,()=>{e(0,r[0]+=r[1],r),e(0,r[1]=r[0][0],r),e(0,r[0]=r[0][1],r)},()=>e(1,o="Game")]}class J extends F{constructor(t){super(),D(this,t,I,H,c,{players:0,screen:1})}}function K(n){let e,r,o,c,f,d=n[0][n[2]][n[3]]+"";return{c(){e=a("td"),r=p(d),h(e,"class",o=i(n[1].coords[n[2]][n[3]]?"winner":"normal")+" svelte-1hq96n8")},m(t,o){l(t,e,o),u(e,r),c||(f=$(e,"click",n[4]),c=!0)},p(t,[n]){13&n&&d!==(d=t[0][t[2]][t[3]]+"")&&g(r,d),14&n&&o!==(o=i(t[1].coords[t[2]][t[3]]?"winner":"normal")+" svelte-1hq96n8")&&h(e,"class",o)},i:t,o:t,d(t){t&&s(e),c=!1,f()}}}function Q(t,n,e){let{ri:r}=n,{ci:o}=n,{grid:c}=n,{players:i}=n,{win:u}=n,{turn:l}=n;return t.$$set=t=>{"ri"in t&&e(2,r=t.ri),"ci"in t&&e(3,o=t.ci),"grid"in t&&e(0,c=t.grid),"players"in t&&e(6,i=t.players),"win"in t&&e(1,u=t.win),"turn"in t&&e(5,l=t.turn)},[c,u,r,o,()=>{if(" "==c[r][o]&&!u.exists){e(0,c[r][o]=i[l],c),e(5,l=1==l?0:1);for(let t=0;t<2;t++)for(let n=0;n<3;n++){let r="none";for(let e=0;e<3;e++){let o=0==t?c[n][e]:c[e][n];if(" "==o){r="none";break}if(0==e&&(r=o),o!=r){r="none";break}}"none"!=r&&(e(1,u.exists=!0,u),0==t?(e(1,u.coords[n][0]=!0,u),e(1,u.coords[n][1]=!0,u),e(1,u.coords[n][2]=!0,u)):(e(1,u.coords[0][n]=!0,u),e(1,u.coords[1][n]=!0,u),e(1,u.coords[2][n]=!0,u)))}for(let t=0;t<2;t++){let n="none";for(let e=0;e<3;e++){let r=0==t?c[e][e]:c[2-e][e];if(" "==r){n="none";break}if(0==e&&(n=r),r!=n){n="none";break}}"none"!=n&&(e(1,u.exists=!0,u),0==t?(e(1,u.coords[0][0]=!0,u),e(1,u.coords[1][1]=!0,u),e(1,u.coords[2][2]=!0,u)):(e(1,u.coords[2][0]=!0,u),e(1,u.coords[1][1]=!0,u),e(1,u.coords[0][2]=!0,u)))}}},l,i]}class R extends F{constructor(t){super(),D(this,t,Q,K,c,{ri:2,ci:3,grid:0,players:6,win:1,turn:5})}}function U(t,n,e){const r=t.slice();return r[7]=n[e],r[9]=e,r}function V(t,n,e){const r=t.slice();return r[10]=n[e],r[12]=e,r}function Y(t){let n,e,r,o=t[0][t[1]]+"";return{c(){n=a("p"),e=p("Current turn: "),r=p(o)},m(t,o){l(t,n,o),u(n,e),u(n,r)},p(t,n){3&n&&o!==(o=t[0][t[1]]+"")&&g(r,o)},d(t){t&&s(n)}}}function Z(t){let n,e,r,o=t[0][1==t[1]?0:1]+"";return{c(){n=a("p"),e=p("Winner: "),r=p(o)},m(t,o){l(t,n,o),u(n,e),u(n,r)},p(t,n){3&n&&o!==(o=t[0][1==t[1]?0:1]+"")&&g(r,o)},d(t){t&&s(n)}}}function tt(t){let n,e,r,o,c;function i(n){t[4](n)}function u(n){t[5](n)}function l(n){t[6](n)}let s={ri:t[9],ci:t[12],players:t[0]};return void 0!==t[2]&&(s.grid=t[2]),void 0!==t[1]&&(s.turn=t[1]),void 0!==t[3]&&(s.win=t[3]),n=new R({props:s}),x.push((()=>M(n,"grid",i))),x.push((()=>M(n,"turn",u))),x.push((()=>M(n,"win",l))),{c(){G(n.$$.fragment)},m(t,e){W(n,t,e),c=!0},p(t,c){const i={};1&c&&(i.players=t[0]),!e&&4&c&&(e=!0,i.grid=t[2],C((()=>e=!1))),!r&&2&c&&(r=!0,i.turn=t[1],C((()=>r=!1))),!o&&8&c&&(o=!0,i.win=t[3],C((()=>o=!1))),n.$set(i)},i(t){c||(P(n.$$.fragment,t),c=!0)},o(t){L(n.$$.fragment,t),c=!1},d(t){X(n,t)}}}function nt(t){let n,e,r,o=t[7],c=[];for(let n=0;n<o.length;n+=1)c[n]=tt(V(t,o,n));const i=t=>L(c[t],1,1,(()=>{c[t]=null}));return{c(){n=a("tr");for(let t=0;t<c.length;t+=1)c[t].c();e=d()},m(t,o){l(t,n,o);for(let t=0;t<c.length;t+=1)c[t].m(n,null);u(n,e),r=!0},p(t,r){if(15&r){let u;for(o=t[7],u=0;u<o.length;u+=1){const i=V(t,o,u);c[u]?(c[u].p(i,r),P(c[u],1)):(c[u]=tt(i),c[u].c(),P(c[u],1),c[u].m(n,e))}for(q(),u=o.length;u<c.length;u+=1)i(u);B()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)P(c[t]);r=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)L(c[t]);r=!1},d(t){t&&s(n),f(c,t)}}}function et(t){let n,e,r;function o(t,n){return t[3].exists?Z:Y}let c=o(t),i=c(t),u=t[2],p=[];for(let n=0;n<u.length;n+=1)p[n]=nt(U(t,u,n));const $=t=>L(p[t],1,1,(()=>{p[t]=null}));return{c(){i.c(),n=d(),e=a("table");for(let t=0;t<p.length;t+=1)p[t].c()},m(t,o){i.m(t,o),l(t,n,o),l(t,e,o);for(let t=0;t<p.length;t+=1)p[t].m(e,null);r=!0},p(t,[r]){if(c===(c=o(t))&&i?i.p(t,r):(i.d(1),i=c(t),i&&(i.c(),i.m(n.parentNode,n))),15&r){let n;for(u=t[2],n=0;n<u.length;n+=1){const o=U(t,u,n);p[n]?(p[n].p(o,r),P(p[n],1)):(p[n]=nt(o),p[n].c(),P(p[n],1),p[n].m(e,null))}for(q(),n=u.length;n<p.length;n+=1)$(n);B()}},i(t){if(!r){for(let t=0;t<u.length;t+=1)P(p[t]);r=!0}},o(t){p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)L(p[t]);r=!1},d(t){i.d(t),t&&s(n),t&&s(e),f(p,t)}}}function rt(t,n,e){let{players:r}=n,o=0,c=[[" "," "," "],[" "," "," "],[" "," "," "]],i={exists:!1,coords:[[!1,!1,!1],[!1,!1,!1],[!1,!1,!1]]};return t.$$set=t=>{"players"in t&&e(0,r=t.players)},[r,o,c,i,function(t){c=t,e(2,c)},function(t){o=t,e(1,o)},function(t){i=t,e(3,i)}]}class ot extends F{constructor(t){super(),D(this,t,rt,et,c,{players:0})}}function ct(t){let n,e,r;function o(n){t[4](n)}let c={};return void 0!==t[1]&&(c.players=t[1]),n=new ot({props:c}),x.push((()=>M(n,"players",o))),{c(){G(n.$$.fragment)},m(t,e){W(n,t,e),r=!0},p(t,r){const o={};!e&&2&r&&(e=!0,o.players=t[1],C((()=>e=!1))),n.$set(o)},i(t){r||(P(n.$$.fragment,t),r=!0)},o(t){L(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function it(t){let n,e,r,o;function c(n){t[2](n)}function i(n){t[3](n)}let u={};return void 0!==t[0]&&(u.screen=t[0]),void 0!==t[1]&&(u.players=t[1]),n=new J({props:u}),x.push((()=>M(n,"screen",c))),x.push((()=>M(n,"players",i))),{c(){G(n.$$.fragment)},m(t,e){W(n,t,e),o=!0},p(t,o){const c={};!e&&1&o&&(e=!0,c.screen=t[0],C((()=>e=!1))),!r&&2&o&&(r=!0,c.players=t[1],C((()=>r=!1))),n.$set(c)},i(t){o||(P(n.$$.fragment,t),o=!0)},o(t){L(n.$$.fragment,t),o=!1},d(t){X(n,t)}}}function ut(t){let n,e,r,o,c,i,u,f,p,$,h;const g=[it,ct],m=[];function y(t,n){return"Setup"==t[0]?0:1}return c=y(t),i=m[c]=g[c](t),{c(){n=a("h1"),n.textContent="Tic-Tac-Toe",e=d(),r=a("hr"),o=d(),i.c(),u=d(),f=a("hr"),p=d(),$=a("p"),$.textContent="by Michael Skyba"},m(t,i){l(t,n,i),l(t,e,i),l(t,r,i),l(t,o,i),m[c].m(t,i),l(t,u,i),l(t,f,i),l(t,p,i),l(t,$,i),h=!0},p(t,[n]){let e=c;c=y(t),c===e?m[c].p(t,n):(q(),L(m[e],1,1,(()=>{m[e]=null})),B(),i=m[c],i?i.p(t,n):(i=m[c]=g[c](t),i.c()),P(i,1),i.m(u.parentNode,u))},i(t){h||(P(i),h=!0)},o(t){L(i),h=!1},d(t){t&&s(n),t&&s(e),t&&s(r),t&&s(o),m[c].d(t),t&&s(u),t&&s(f),t&&s(p),t&&s($)}}}function lt(t,n,e){let r="Setup",o=["X","O"];return[r,o,function(t){r=t,e(0,r)},function(t){o=t,e(1,o)},function(t){o=t,e(1,o)}]}return new class extends F{constructor(t){super(),D(this,t,lt,ut,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
