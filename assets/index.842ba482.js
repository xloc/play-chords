var S=Object.defineProperty;var y=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))j.call(t,o)&&b(e,o,t[o]);if(y)for(var o of y(t))A.call(t,o)&&b(e,o,t[o]);return e};import{P as C,S as D,j as v,c as N,a as p,n as a,r as O,b as u,R,d as T}from"./vendor.11af40c0.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};k();const w=new C(D).toDestination(),f=200,c=v.exports.jsx,m=v.exports.jsxs,E=e=>{e.indexOf(":")===-1&&(e=e+":00112345");const[t,o]=e.split(":"),l=o.split("").map(Number).map(N.degrees(t)),s=l.map(a.chroma);let r=1,n=[];return l.forEach((i,d)=>{if(i===""){r+=1;return}d>0&&s[d]<=s[d-1]&&(r+=1),n.push(`${i}${r}`)}),g({playedNotes:n},N.get(t))};function K(e){const{onActivate:t,text:o}=e,{playedNotes:l,symbol:s}=E(o),r="ontouchstart"in window?!0:void 0,n=i=>{w.triggerAttackRelease(l,f/1e3),t&&t(l)};return m("button",{className:p("h-40 w-40 shadow-md border rounded-md p-3 select-none",{"bg-red-200":l.length===0}),onMouseDown:r?void 0:n,onTouchStart:r?n:void 0,children:[c("p",{className:"text-5xl",children:s}),c("p",{className:"text-xs pt-2",children:l.join(" ")})]})}const L=(e,t)=>(e=a.simplify(e),(e.includes("#")||e.includes("b"))&&(e=a.transpose(e,"2m"),e=a.simplify(e)),t=a.simplify(t),(t.includes("#")||t.includes("b"))&&(t=a.transpose(t,"2m"),t=a.simplify(t)),[e,t]),P=e=>e.includes("b")||e.includes("#");function M(e){var r;const[t,o]=L(e.start,e.end),l=O.chromatic([t,o],{sharps:!0}),s=new Set((r=e.pressedKeys)==null?void 0:r.map(a.midi));return c("div",{className:"flex h-full justify-center min-w-min",children:l.map(n=>{u.exports.useState(!1);const[i,d]=u.exports.useState(!1),h=P(n),x=s.has(a.midi(n))||i;return c("button",{onClick:()=>{d(!0),w.triggerAttackRelease(n,f/1e3),setTimeout(()=>{d(!1)},f)},className:p("flex justify-center items-end  h-full w-10 rounded-b-xl border-white",{"-mx-5 h-3/5 z-10 w-10 border-x-[4px] border-b-[4px]":h,"mx-[2px]":!h,"bg-orange-50":!x,"bg-orange-200":x}),children:c("p",{className:"text-xs m-2",children:n})},n)})})}function _(){const[e,t]=u.exports.useState("Fmaj7:001134 G6 Em Am:001124 Dm G7:01131234 C6:00131412"),[o,l]=u.exports.useState(!1),[s,r]=u.exports.useState([]);return m("div",{className:"flex flex-col h-screen w-full relative",children:[m("div",{className:"flex absolute w-full t-0 l-0 h-16",children:[c("button",{className:"w-16 m-2 border rounded",onClick:()=>l(n=>!n),children:"EDIT"}),c("input",{className:p("flex-1 m-2 px-2 border rounded",{hidden:!o}),type:"text",value:e,onChange:n=>{t(n.target.value)}})]}),c("div",{className:"flex flex-col flex-1 overflow-y-scroll",children:c("div",{className:"flex items-center flex-wrap justify-center gap-5 p-10",children:e.split(" ").map(n=>c(K,{text:n,onActivate:i=>r(i)},n))})}),c("div",{className:"h-40 w-full border-t overflow-x-scroll",children:c(M,{start:"A2",end:"D6",pressedKeys:s})})]})}R.render(c(T.StrictMode,{children:c(_,{})}),document.getElementById("root"));
