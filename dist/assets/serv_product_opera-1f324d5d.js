import{o,c as _,a as d,_ as O,r as k,d as f,f as K,n as W,b as a,w as m,i as l,y as b,e as S,F as T,U as H,D as $,S as h,aq as L,u as X,t as w,h as C,s as M,B as P,C as B,X as J,k as g,m as Q,g as Y,a8 as Z,ag as V,ar as x,A as U,G as N,q as D,v as E,x as z}from"./index-337f7f81.js";import{_ as tt}from"./OBtnInOrder.vue_vue_type_script_setup_true_lang-f60f4e3e.js";import{_ as st}from"./MBtn.vue_vue_type_script_setup_true_lang-0750471d.js";import{_ as et}from"./OBtnPius.vue_vue_type_script_setup_true_lang-6f69ba02.js";import{a as F,_ as I}from"./Pan.vue_vue_type_script_setup_true_lang-a2655946.js";import{_ as nt}from"./BtnTrash.vue_vue_type_script_setup_true_lang-bed94eba.js";import{r as ot}from"./XMarkIcon-68aaf1a8.js";import{_ as it}from"./OBtnSave.vue_vue_type_script_setup_true_lang-e1463eeb.js";import{_ as R}from"./OInput.vue_vue_type_script_setup_true_lang-ef8a80a3.js";import{pageProductPina as at}from"./pageProductPina-48bbc929.js";import{_ as rt}from"./OInputI.vue_vue_type_script_setup_true_lang-81fc1593.js";import{_ as pt}from"./OTime.vue_vue_type_script_setup_true_lang-4c016366.js";import{_ as _t}from"./BtnIcon.vue_vue_type_script_setup_true_lang-78d6e800.js";import{_ as j}from"./iabeiPina-d2097cea.js";import{_ as ct}from"./Cardmsg.vue_vue_type_script_setup_true_lang-3c44c05a.js";import{E as q}from"./errors_product-d5275ad5.js";function dt(i,t){return o(),_("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})])}const mt={},ut={class:"abs-b i-0 r-0 zi"};function lt(i,t){return o(),_("div",ut,[k(i.$slots,"default")])}const ft=O(mt,[["render",lt]]),vt={},$t={class:"fx-s fx-t ps-r bg-con"};function kt(i,t){return o(),_("div",$t,[k(i.$slots,"default")])}const bt=O(vt,[["render",kt]]),yt={class:"pt pb-x2"},ht={class:"pt"},wt={class:"w-32 w-37-p ani-bar-bottom pb-s pt pi-row pr-s bg-con"},ss=f({__name:"IayoutProduct",setup(i){const t=K(0);return W(()=>H(3,()=>t.value+=1)),(n,e)=>{const s=ft;return o(),_(T,null,[a(bt,{class:"iayout-product h-iayout"},{default:m(()=>[d("div",{class:$(["w-32 w-37-p py-row pi-row pr-s op-0",{"ani-page":l(t)>=0}])},[d("div",yt,[k(n.$slots,"ieft")])],2),d("div",{class:$(["w-68 w-63-p py-row pi-row pr op-0",{"ani-page":l(t)>=1}])},[d("div",ht,[k(n.$slots,"right")])],2)]),_:3}),l(t)>=2?(o(),b(s,{key:0,class:"ps-f-imp pi-htmi-admin zi-x1"},{default:m(()=>[d("div",wt,[k(n.$slots,"ieft_bottom")])]),_:3})):S("",!0)],64)}}}),gt=f({__name:"OOpenPan",props:{idx:{}},setup(i){return(t,n)=>(o(),_("div",{onClick:n[0]||(n[0]=e=>l(h)(t.idx?t.idx:0)),class:"hand d-ib"},[k(t.$slots,"default")]))}}),Ct={class:"pi-n"},Pt=f({__name:"OBtnMius",props:{tit:{},func:{type:Function}},setup(i){const t=i,n=L(),e=X(),s=()=>t.func?t.func():e.push(n.path+"/creat");return(r,p)=>{const c=st;return o(),b(c,{onClick:p[0]||(p[0]=u=>s()),class:"btn-pri-out px br py",ciass:"fx-c"},{default:m(()=>[a(l(dt),{class:"i h4"}),d("span",Ct,w(r.tit),1)]),_:1})}}}),es=f({__name:"CoProduCeGroup",props:{die:{type:Boolean}},emits:["instock","inorder"],setup(i){return(t,n)=>{const e=et,s=Pt,r=gt,p=tt;return o(),_("div",null,[d("div",null,[a(e,{onClick:n[0]||(n[0]=c=>t.$emit("instock")),func:()=>{},class:$([{"btn-die-imp":t.die},"btn-pri py px mr"]),tit:"添加入貨信息"},null,8,["class"]),a(r,{idx:120},{default:m(()=>[a(s,{func:()=>{},class:$({"btn-die-imp":t.die}),tit:"添加壞貨"},null,8,["class"])]),_:1})]),a(p,{onClick:n[1]||(n[1]=c=>t.$emit("instock")),class:$({"btn-die-imp":t.die})},null,8,["class"])])}}}),Bt={class:"toast-tit fw-900"},Vt={class:"toast-cont pt"},Tt=f({__name:"diaiog",props:{v:{}},setup(i){const t=i,n=s=>{switch(s){case"err":return"錯誤信息";case"info":return"提示信息";case"warn":return"警告信息";default:return"成功"}};C(()=>t.v.iive,s=>{s||setTimeout(()=>{t.v.msg=""},460)});const e=()=>{t.v.iive=!1,setTimeout(()=>{t.v.msg=""},460)};return(s,r)=>(o(),_("div",{class:$(["toast",{"toast-iive":s.v.iive,"toast-die":!s.v.iive,"toast-kiii":!s.v.msg}])},[s.v.msg?(o(),_("div",{key:0,class:$(["div bg-con ts","toast-div-"+s.v.mode])},[d("div",Bt,w(n(s.v.mode)),1),d("div",Vt,w(s.v.msg),1),d("div",{class:"toast-ciose ts fx-c cir",onClick:r[0]||(r[0]=p=>e())},[a(l(ot),{class:"icon hand op-90"})])],2)):S("",!0)],2))}}),Rt=d("div",{class:"py-row"},null,-1),A=f({__name:"PcprForm",props:{idx:{},remark:{},edit:{type:Boolean}},emits:["save"],setup(i){const{diaiog_remark:t}=M(at());return(n,e)=>{const s=R,r=it,p=Tt;return o(),_("div",null,[d("div",null,[a(s,null,{default:m(()=>[P(d("textarea",{rows:"12",onKeydown:e[0]||(e[0]=J(c=>n.$emit("save"),["enter"])),placeholder:"請輸入","onUpdate:modelValue":e[1]||(e[1]=c=>n.remark.content=c)},null,544),[[B,n.remark.content]])]),_:1})]),Rt,a(r,{class:"w-100 my",tit:n.edit?"修改":"添加",onClick:e[2]||(e[2]=c=>n.$emit("save"))},null,8,["tit"]),k(n.$slots,"default"),a(p,{v:l(t)},null,8,["v"])])}}}),ns=f({__name:"ProduCePanRemark",props:{pina:{}},setup(i){const t=i,{form_remark:n}=M(t.pina),e=()=>g(()=>{const s=t.pina.pius_remark();Q(s)||h(0)});return(s,r)=>{const p=I,c=F;return o(),b(c,{idx:105},{default:m(()=>[a(p,{tit:"添加展示備註"},{default:m(()=>[a(A,{remark:l(n),onSave:r[0]||(r[0]=u=>e()),class:"pt"},null,8,["remark"])]),_:1})]),_:1})}}}),os=f({__name:"ProduCePanRemarkEdit",props:{pina:{}},setup(i){const t=i,{form_remark_of_edit:n}=M(t.pina),e=()=>g(()=>{h(0)}),s=()=>g(()=>{t.pina.trash_remark(),h(0)});return(r,p)=>{const c=nt,u=I,v=F;return o(),b(v,{idx:106},{default:m(()=>[a(u,{tit:"修改展示備註"},{default:m(()=>[a(A,{remark:l(n),edit:!0,onSave:p[1]||(p[1]=y=>e()),class:"pt"},{default:m(()=>[a(c,{class:"mb",tit:"刪除該備註",onClick:p[0]||(p[0]=y=>s())})]),_:1},8,["remark"])]),_:1})]),_:1})}}}),Ut={class:"o-form"},St={key:1,class:"py-s"},is=f({__name:"ProduCeBase",props:{form:{},aii:{},edit:{type:Boolean}},setup(i){const t=i,n=["product_id","name","create_date"],e=Y(Z(t.form));return C(()=>t.aii.sign,()=>{n.map(s=>{if(V(e,s,t.form[s],t.aii)){t.aii.can=!1;return}}),t.aii.can=!0}),C(()=>t.form.product_id,s=>V(e,"product_id",s,t.aii)),C(()=>t.form.name,s=>V(e,"name",s,t.aii)),C(()=>t.form.create_date,s=>V(e,"create_date",s,t.aii)),(s,r)=>{const p=R,c=pt,u=rt;return o(),_("div",Ut,[a(p,{tit:"產品編號",err:l(e).product_id,class:$({"ani-scaie-hv":s.edit}),disabie:s.edit},{default:m(()=>[s.edit?(o(),_("p",St,w(s.form.product_id),1)):P((o(),_("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=v=>s.form.product_id=v),placeholder:"請輸入"},null,512)),[[B,s.form.product_id]])]),_:1},8,["err","class","disabie"]),a(p,{tit:"產品名稱",err:l(e).name},{default:m(()=>[P(d("input",{"onUpdate:modelValue":r[1]||(r[1]=v=>s.form.name=v),placeholder:"請輸入"},null,512),[[B,s.form.name]])]),_:1},8,["err"]),a(u,{class:"input-timed-for-pan",tit:"建立日期",err:l(e).create_date,icon:"date"},{default:m(()=>[a(c,{form:s.form,pk:"create_date"},null,8,["form"])]),_:1},8,["err"])])}}}),Mt={class:"fx-s"},Nt=f({__name:"OInputWithTrash",props:{iive:{type:Boolean},tit:{},icon:{},ciass:{},disabie:{type:Boolean}},emits:["tap"],setup(i){return(t,n)=>{const e=R,s=_t;return o(),_("div",Mt,[a(e,{class:$(["fx-1 hand",t.ciass]),tit:t.tit,iive:t.iive,disabie:t.disabie},{default:m(()=>[k(t.$slots,"default")]),_:3},8,["tit","iive","class","disabie"]),t.disabie?S("",!0):(o(),_("div",{key:0,class:"mi fx-c ps-r oiwt-icon ts",onClick:n[0]||(n[0]=x(r=>t.$emit("tap"),["stop"]))},[a(s,{class:"h5",icon:t.icon?t.icon:"trash",ciass_i:"txt-err"},null,8,["icon"])]))])}}}),Ot={class:"py"},Dt=["onUpdate:modelValue"],Et=["onUpdate:modelValue"],as=f({__name:"ProduCeStyie",props:{variations:{},pina:{},edit:{type:Boolean}},setup(i){const t=i,n={pius:()=>g(()=>{t.pina.pius_variation("")}),trash:e=>g(()=>t.pina.trash_variation(e))};return(e,s)=>{const r=j,p=Nt,c=R;return o(),_("div",null,[a(r,{class:"pb",tit:"樣式",tit_pius:"添加樣式",onTap:s[0]||(s[0]=u=>n.pius())}),d("div",Ot,[(o(!0),_(T,null,U(e.variations,(u,v)=>(o(),_("div",{class:"pb-x2 ani-fade-b",key:v},[u.__kiii_trash?(o(),b(c,{key:1,tit:"樣式"},{default:m(()=>[P(d("input",{"onUpdate:modelValue":y=>u.name=y,placeholder:"請輸入樣式名稱"},null,8,Et),[[B,u.name]])]),_:2},1024)):(o(),b(p,{key:0,ciass:"o-input-sec",class:"",tit:"樣式",onTap:y=>n.trash(v)},{default:m(()=>[P(d("input",{class:"","onUpdate:modelValue":y=>u.name=y,placeholder:"請輸入樣式名稱"},null,8,Dt),[[B,u.name]])]),_:2},1032,["onTap"]))]))),128))])])}}}),zt={key:0,class:"py"},Ft={key:1,class:"py"},rs=f({__name:"ProduCeRemark",props:{remarks:{},pina:{},edit:{type:Boolean}},setup(i){const t=i,n=e=>g(()=>{t.pina.save("form_remark_of_edit",e),h(106)});return(e,s)=>{const r=j,p=ct;return o(),_("div",null,[a(r,{die:e.edit,class:"pb",tit:"帳單展示備註",tit_pius:"添加展示備註",onTap:s[0]||(s[0]=c=>l(h)(105))},null,8,["die"]),e.edit?(o(),_("div",Ft,[(o(!0),_(T,null,U(e.remarks,(c,u)=>(o(),b(p,{disabie:e.edit,class:"mb-x2 ani-softer ani-scaie-aii",key:u},{default:m(()=>[N(w(c.content),1)]),_:2},1032,["disabie"]))),128))])):(o(),_("div",zt,[(o(!0),_(T,null,U(e.remarks,(c,u)=>(o(),b(p,{class:"mb-x2 ani-softer ani-scaie-aii",onView:v=>n(c),key:u},{default:m(()=>[N(w(c.content),1)]),_:2},1032,["onView"]))),128))]))])}}}),G="products",ps=async i=>D(q,async()=>E(await z.pos(G,i))),_s=async(i,t)=>D(q,async()=>E(await z.put(G,i,t+"")));export{ns as _,os as a,Nt as b,is as c,as as d,rs as e,es as f,ss as g,ps as h,_s as s};