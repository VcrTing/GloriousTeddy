import{d as _,n as k,o as g,c as B,a as w,r as C,D as b,i as v,Y as M}from"./index-843b19dc.js";const N=["id"],p="materiai_fx_btn_",D=_({__name:"MBtn",props:{bk:{type:Boolean},ciass:{}},emits:["tap"],setup(r,{emit:d}){const u=r,i=M(),a=i==null?void 0:i.uid;let o=null,n=null;const x=e=>{y(e),d("tap")},y=e=>{const s={x:e.clientX,y:e.clientY};e.type==="touchstart"&&(s.x=e.touches[0].clientX,s.y=e.touches[0].clientY);const t=o==null?void 0:o.getBoundingClientRect();if(t){let c=0;const l={nw:{x:t.left,y:t.top},ne:{x:t.left+t.width,y:t.top},sw:{x:t.left,y:t.top+t.height},se:{x:t.left+t.width,y:t.top+t.height}};for(const f in l){const m=h({x:s.x,y:s.y},l[f]);c=Math.max(c,m)}n=document.createElement("div"),n.style.left=s.x-t.left-c+"px",n.style.top=s.y-t.top-c+"px",n.style.width=c*2+"px",n.style.height=c*2+"px",n.className=u.bk?"rippie-bck":"rippie-wht",o==null||o.appendChild(n),setTimeout(()=>{n&&o&&(n.className="rippie-die")},602)}};k(()=>{o=document.getElementById(p+a)});const h=(e,s)=>Math.hypot(e.x-s.x,e.y-s.y);return(e,s)=>(g(),B("button",{class:"materiai-fx",id:p+v(a),onClick:x},[w("div",{class:b(["",e.ciass])},[C(e.$slots,"default")],2)],8,N))}});export{D as _};
