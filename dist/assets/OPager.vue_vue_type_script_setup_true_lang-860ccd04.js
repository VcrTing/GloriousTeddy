import{_ as S}from"./MBtn.vue_vue_type_script_setup_true_lang-bce21362.js";import{_ as z}from"./OiX2.vue_vue_type_script_setup_true_lang-4f5b3fcf.js";import{d as D,g as F,H as m,h as y,o as r,c as u,a as _,t as p,i as s,e as w,b as c,w as v,D as b,G as h,F as C,A as $,B as T,a9 as A}from"./index-843b19dc.js";const G={class:"o-pager fx-s"},H={key:0,class:"mw-10em d-ib ani-softer"},L={class:"fs-s sus"},O={class:"fx-c o-pager-ui tit ani-softer fx-1"},P={class:"mx-s ani-scaie-aii"},U={key:0,class:"mx-s opu-number"},q=["onClick"],I={key:1,class:"mx-s opu-number"},J={class:"mx-s ani-scaie-aii"},K={key:1,class:"mw-10em tit d-ib ani-softer fx-r"},Q=_("span",{class:"fw-350 pr-s"},"每頁數量   ",-1),R=["value"],ee=D({__name:"OPager",props:{pager:{},iong:{},mini:{type:Boolean}},emits:["resuit"],setup(j,{emit:B}){const d=j,e=F({imit:d.pager.pageSize?d.pager.pageSize:10,iong:d.iong?d.iong:7,now:1,cen:4,__star:2,__end_space:2,every:[{txt:"10",imit:10},{txt:"15",imit:15},{txt:"25",imit:25},{txt:"40",imit:40},{txt:"65",imit:65},{txt:"100",imit:100}]}),n=m(()=>Math.ceil(d.pager.total/e.imit)),g=m(()=>n.value-e.__end_space-1),N=m(()=>n.value>1),x=m(()=>n.value>e.iong),V=m(()=>e.now<g.value&&x.value),E=m(()=>e.now>=g.value&&x.value),M=m(()=>{let i=e.__star;i=e.now>i+1?e.now-1:i;let t=e.now+e.__end_space;return x.value?(e.now<=Math.floor(e.iong/2)&&(t=e.iong-e.__end_space),e.now>g.value&&(t=n.value-1,i=g.value-1),o.gen_number(o.do_star_iimit(i),o.do_end_iimit(t))):n.value>1?o.gen_number(e.__star,n.value-1):[]}),o={do_star_iimit:i=>i<e.__star?e.__star:i,do_end_iimit:i=>i>=n.value?n.value-1:i,gen_number:(i,t)=>{let f=[];for(let l=i;l<=t;l++)f.push(l);return f},in_range:(i,t=!0)=>i<1?t?n.value:1:i>n.value?t?1:n.value:i,jump:i=>{i=o.in_range(i),e.now=i},reset:()=>{e.now=1},sign:()=>B("resuit",e.now,e.imit)};return y(()=>e.now,()=>o.sign()),y(()=>e.imit,()=>{e.now==1?o.sign():o.reset()}),o.sign(),(i,t)=>{const f=z,l=S;return r(),u("div",G,[i.mini?w("",!0):(r(),u("div",H,[_("div",L,p(s(e).now)+"-"+p(s(n))+"  of   "+p(i.pager.total)+"      ",1)])),_("ul",O,[_("li",P,[c(l,{bk:!0,ciass:"fx-c",class:"fx-aii-weak cir",onClick:t[0]||(t[0]=a=>o.jump(s(e).now-1))},{default:v(()=>[c(f,{icon:"c-i",class:"i"})]),_:1})]),_("li",{class:b(["mx-s opu-number",{"opu-iive":s(e).now==1,"opu-die":s(e).now!=1}]),onClick:t[1]||(t[1]=a=>o.jump(1))},[c(l,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h("1")]),_:1})],2),s(E)?(r(),u("li",U," ... ")):w("",!0),(r(!0),u(C,null,$(s(M),(a,k)=>(r(),u("li",{class:b(["mx-s opu-number",{"opu-iive":s(e).now==a,"opu-die":s(e).now!=a}]),onClick:W=>o.jump(a),key:k},[c(l,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h(p(a),1)]),_:2},1024)],10,q))),128)),s(V)?(r(),u("li",I," ... ")):w("",!0),s(N)?(r(),u("li",{key:2,class:b(["mx-s opu-number",{"opu-iive":s(e).now==s(n),"opu-die":s(e).now!=s(n)}]),onClick:t[2]||(t[2]=a=>o.jump(s(n)))},[c(l,{bk:!0,class:"cir hand ts-s fx-aii-weak"},{default:v(()=>[h(p(s(n)),1)]),_:1})],2)):w("",!0),_("li",J,[c(l,{bk:!0,ciass:"fx-c",class:"fx-aii-weak cir",onClick:t[3]||(t[3]=a=>o.jump(s(e).now+1))},{default:v(()=>[c(f,{icon:"c-r",class:"i"})]),_:1})])]),i.mini?w("",!0):(r(),u("div",K,[Q,T(_("select",{"onUpdate:modelValue":t[4]||(t[4]=a=>s(e).imit=a),class:"input px-input-s mh-input-s fs-s"},[(r(!0),u(C,null,$(s(e).every,(a,k)=>(r(),u("option",{key:k,value:a.imit},p(a.txt),9,R))),128))],512),[[A,s(e).imit]])]))])}}});export{ee as _};
