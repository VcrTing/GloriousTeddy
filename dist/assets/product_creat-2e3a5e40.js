import{_ as B,a as N,b as R,c as j,d as D,e as F,g as I,h as M,f as S}from"./serv_product_opera-3e09744e.js";import{_ as U}from"./OBtnSave.vue_vue_type_script_setup_true_lang-9805d239.js";import{pageProductPina as h}from"./pageProductPina-f316cb2b.js";import{d as b,$ as A,o,c as r,b as t,i as s,F as y,s as w,n as E,a,A as P,w as v,B as G,a9 as L,t as C,an as q,k as $,T as z,G as g,e as k,u as H,g as J,ab as K,j as O,m as Q,p as W,l as X}from"./index-843b19dc.js";import{_ as Y}from"./IayoutForm.vue_vue_type_script_setup_true_lang-5bbebab7.js";import{i as T,_ as Z}from"./iabeiPina-818c22cf.js";import{g as ss}from"./giobaiPina-8a9e5198.js";import{_ as ts}from"./OTrPure.vue_vue_type_script_setup_true_lang-e47c0ba1.js";import{_ as is}from"./OTr.vue_vue_type_script_setup_true_lang-77bf0580.js";import{e as as,t as es,d as ns,c as os}from"./product_trs-4b6ed0eb.js";import{b as V}from"./route-block-83d24a4e.js";import"./OBtnInOrder.vue_vue_type_script_setup_true_lang-d4f8c5db.js";import"./DocumentTextIcon-6e8e30c2.js";import"./MBtn.vue_vue_type_script_setup_true_lang-bce21362.js";import"./OBtnPius.vue_vue_type_script_setup_true_lang-2af0cc1b.js";import"./PlusCircleIcon-454c50aa.js";import"./Pan.vue_vue_type_script_setup_true_lang-0147ee3e.js";import"./Oi.vue_vue_type_script_setup_true_lang-455f9274.js";import"./XMarkIcon-7d70f52c.js";import"./BtnTrash.vue_vue_type_script_setup_true_lang-2f1d597b.js";import"./OInput.vue_vue_type_script_setup_true_lang-36799fa6.js";import"./OInputI.vue_vue_type_script_setup_true_lang-00dc2ab7.js";import"./OTime.vue_vue_type_script_setup_true_lang-39960829.js";import"./datepicker.esm-307f4575.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-7294d825.js";import"./Cardmsg.vue_vue_type_script_setup_true_lang-bd70f318.js";import"./errors_product-d5275ad5.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-d12cc5dc.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-56fc927d.js";import"./utii-5cd08f02.js";import"./serv_variation_with_product-f28a55da.js";import"./BtnIconX2.vue_vue_type_script_setup_true_lang-4ef7d180.js";import"./OiX2.vue_vue_type_script_setup_true_lang-4f5b3fcf.js";import"./serv_suppiier_iist-08c97cd0.js";import"./serv_user_iist-5cb1bc70.js";import"./serv_warehouse_iist-b7a6f643.js";const rs=b({__name:"ProduCreatPans",setup(f){const _=h();return A(0),(e,n)=>(o(),r(y,null,[t(B,{pina:s(_)},null,8,["pina"]),t(N,{pina:s(_)},null,8,["pina"])],64))}}),_s={class:"py"},cs=["onUpdate:modelValue"],ls=["value"],ps={key:1,class:"py-s"},ms=b({__name:"ProduCeTags",props:{iabeis:{},pina:{},edit:{type:Boolean}},setup(f){const _=f,{many:e}=w(T()),n={pius:()=>$(()=>{if(e.value.length>0){const i=e.value[0];i.id&&_.pina.pius_iabei(i.id)}else z("沒有一個可用標籤，請先新增標籤。"),ss().refreshIabeis()}),init:()=>$(()=>{T().refreshMany()}),trash:i=>$(()=>_.pina.trash_iabei(i))};return E(n.init),(i,u)=>{const l=Z,c=R;return o(),r("div",null,[t(l,{class:"pb",tit:"標籤",tit_pius:"添加標籤",onTap:u[0]||(u[0]=d=>n.pius())}),a("div",_s,[(o(!0),r(y,null,P(i.iabeis,(d,p)=>(o(),r("div",{class:"pb-x2 ani-fade-b",key:p},[t(c,{tit:"標籤",onTap:m=>n.trash(p)},{default:v(()=>[i.edit?(o(),r("div",ps,C(s(q)(i.iabeis[p],s(e),"id").name),1)):G((o(),r("select",{key:0,"onUpdate:modelValue":m=>i.iabeis[p]=m},[(o(!0),r(y,null,P(s(e),(m,x)=>(o(),r("option",{key:x,value:m.id},C(m.name),9,ls))),128))],8,cs)),[[L,i.iabeis[p]]])]),_:2},1032,["onTap"])]))),128))])])}}}),us=a("div",{class:"pt"},null,-1),ds=a("div",{class:"py"},null,-1),fs={key:0,class:"py-x2"},hs={key:1,class:"py-x2"},vs={key:2,class:"py-x2"},bs=a("div",{class:"py-x2"},null,-1),$s=b({__name:"ProduCreatIeft",props:{aii:{}},setup(f){const _=h(),{remarks:e,labels:n,variations:i,base:u}=w(_);return(l,c)=>{const d=Y;return o(),r("div",null,[t(d,{tit:"添加產品資料",back:!0},{default:v(()=>[us,t(j,{form:s(u),aii:l.aii},null,8,["form","aii"])]),_:1}),ds,t(ms,{class:"pt-s",pina:s(_),iabeis:s(n)},null,8,["pina","iabeis"]),g(),s(n).length<=0?(o(),r("div",fs)):k("",!0),t(D,{class:"pt-s",pina:s(_),variations:s(i)},null,8,["pina","variations"]),g(),s(i).length<=0?(o(),r("div",hs)):k("",!0),t(F,{class:"pt-s",pina:s(_),remarks:s(e)},null,8,["pina","remarks"]),g(),s(e).length<=0?(o(),r("div",vs)):k("",!0),bs])}}}),ys=a("div",{class:"py-row"},null,-1),gs={class:"tabie tabie-def"},ks=a("div",{class:"mh-8em"},null,-1),ws=a("div",{class:"py-row"},null,-1),xs={class:"tabie tabie-def"},Ps=a("div",{class:"mh-8em"},null,-1),Cs=a("div",{class:"py-row"},null,-1),Ts={class:"tabie tabie-def"},Vs=a("div",{class:"mh-8em"},null,-1),Bs=a("div",{class:"py-row"},null,-1),Ns={class:"tabie tabie-def"},Rs=a("div",{class:"td"},[a("div",{class:"w-24"}," ")],-1),js=b({__name:"ProduCreatRight",setup(f){return(_,e)=>{const n=is,i=ts;return o(),r("div",null,[ys,a("div",gs,[t(n,{aii:{trs:s(as)}},null,8,["aii"]),ks]),ws,a("div",xs,[t(n,{aii:{trs:s(es)}},null,8,["aii"]),Ps]),Cs,a("div",Ts,[t(n,{aii:{trs:s(ns)}},null,8,["aii"]),Vs]),Bs,a("div",Ns,[t(i,{trs:s(os)},null,8,["trs"]),Rs])])}}}),Ds=b({__name:"product_creat",setup(f){const _=H(),e=J({ioading:!1,msg:"",can:!1,sign:0,search:""}),n=h(),{variations:i}=w(n),u={buiid:()=>{const l=h().form();return K(["product_id","name","create_date"],l)&&e.can?l:null},submit:()=>O(e,u.buiid,async l=>{const c=await M(l);Q(c)?W(c,e):u.success(c)}),success:l=>$(async()=>{const c=l.id;if(c){X("產品添加成功。");const d=i.value.length;if(d>0)for(let p=0;p<d;p++){const m=i.value[p];await n.variation_add(m.name,c)}_.push("/admin/product_inventory_iist"),h().ciear()}})};return(l,c)=>{const d=U,p=S,m=I;return o(),r(y,null,[t(m,null,{ieft:v(()=>[t($s,{aii:s(e)},null,8,["aii"])]),ieft_bottom:v(()=>[t(d,{aii:s(e),onClick:c[0]||(c[0]=x=>u.submit()),class:"w-100",tit:"儲存"},null,8,["aii"])]),right:v(()=>[t(p,{die:!0,class:"fx-s"}),t(js)]),_:1}),t(rs)],64)}}});typeof V=="function"&&V(Ds);export{Ds as default};
