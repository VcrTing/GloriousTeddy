import{m as $,d as E}from"./view-5841ef95.js";import{d as m,o,c as t,a as s,t as i,i as _,H as y,G as h,F as k,A as w,r as T,b as a,w as f,e as H,D as x,y as B,f as O,g as N,n as S,I as M,k as V}from"./index-843b19dc.js";import{v as g}from"./vai_cashier_order-acade286.js";import{v as b}from"./vai_order-25396561.js";import{_ as D}from"./CuHtmIogo.vue_vue_type_script_setup_true_lang-2af86787.js";const F={class:""},K=s("div",{class:"pdf-hr"},null,-1),I={class:"pt-pdf-x2 fx-r"},q=s("h4",{class:"pr-pdf n"},"統計金額:",-1),A={class:"fw-pdf-700"},R=m({__name:"CoOpTotai",props:{one:{}},setup(u){return(e,d)=>(o(),t("div",F,[K,s("div",I,[q,s("h2",A,"HK "+i(_($)(e.one.total_price)),1)])]))}}),W={class:"px-pdf"},z=s("h2",{class:"pb-pdf"},"付款",-1),G={class:"ih-pdf-son-s"},J={class:"fx-s"},j=s("p",null,"產品",-1),Q={class:"w-50 fx-r"},U={class:"sus"},X={class:"mw-7em ta-r b"},Y={class:"fx-s fx-t"},Z=s("p",null,"支付方式",-1),ss={class:"w-50"},os={class:""},es={class:"sus"},ts={class:"mw-7em ta-r b"},ns={class:"pt"},_s={class:"fx-s fx-t"},cs=s("p",null,"優惠類別",-1),is={key:0,class:"w-50"},ds={class:"sus"},rs={class:"mw-7em ta-r b"},as={key:1,class:"w-50 fx-r sus"},ps=m({__name:"CoOpPrice",props:{one:{}},setup(u){const e=u,d=y(()=>g.product_aii_num(e.one)),p=y(()=>g.product_aii_price(e.one));return(c,r)=>(o(),t("div",W,[z,s("div",G,[s("div",J,[j,h(),s("div",Q,[s("p",U,"數量"+i(_(d)),1),s("p",X,i(_($)(_(p))),1)])]),s("div",Y,[Z,s("div",ss,[s("div",os,[(o(!0),t(k,null,w(c.one.payment_method,(n,l)=>(o(),t("div",{class:"fx-r",key:l},[s("p",es,i(n.name),1),s("p",ts,i(_($)(n.price)),1)]))),128))])])])]),s("div",ns,[s("div",_s,[cs,c.one.discount&&c.one.discount.length>0?(o(),t("div",is,[(o(!0),t(k,null,w(c.one.discount,(n,l)=>(o(),t("div",{class:"fx-r",key:l},[s("p",ds,i(n.type),1),s("p",rs," -"+i(_($)(n.discount_deduction)),1)]))),128))])):(o(),t("div",as," (無) "))])])]))}}),ls={class:"pdf-bd br px-pdf py-pdf"},C=m({__name:"CoBdWrapper",setup(u){return(e,d)=>(o(),t("div",ls,[T(e.$slots,"default")]))}}),us=s("p",{class:"b fs-s-pdf"},"帳單展示備註 :",-1),fs={key:0,class:"fs-s-pdf"},hs=["innerHTML"],ms=s("br",null,null,-1),vs={key:1,class:"fs-s-pdf"},$s=s("br",null,null,-1),ys=s("br",null,null,-1),ks=s("br",null,null,-1),ws={key:0,class:"pt-pdf-x2 px-pdf"},bs=s("p",{class:"b fs-s-pdf"},"店鋪備註/條款 :",-1),xs={class:"fs-s-pdf"},gs=["innerHTML"],Cs=s("br",null,null,-1),Os=m({__name:"CoOpRemark",props:{one:{}},setup(u){const e=u,d=y(()=>g.array_remarks_for_order(e.one)),p=y(()=>{const c=e.one?e.one:{};return(c.order_shop?c.order_shop:{}).remarks});return(c,r)=>{const n=C;return o(),t("div",null,[a(n,{class:"_wrapper"},{default:f(()=>[us,_(d)&&_(d).length>0?(o(),t("div",fs,[(o(!0),t(k,null,w(_(d),(l,v)=>(o(),t("div",{key:v},[s("p",{innerHTML:l},null,8,hs),ms]))),128))])):(o(),t("div",vs,[h(" 暫無備註 "),$s,ys,ks]))]),_:1}),_(p)?(o(),t("div",ws,[bs,s("div",xs,[s("div",null,[s("p",{innerHTML:_(p)},null,8,gs),Cs])])])):H("",!0)])}}}),Ts={class:"pi-pdf-s"},Hs=s("h4",null,"產品",-1),Ls={class:"fx-s ih-pdf-son-x1"},Ps={class:"w-30"},Es={class:"b pb-pdf-t"},Bs={class:"sus fs-s-pdf"},Ns={class:"w-17 fs-s-pdf sus"},Ss={class:"d-ib"},Ms={class:"w-18 fs-s-pdf sus"},Vs={class:"w-35 fx-s"},Ds={class:"fs-s-pdf d-ib sus"},Fs={class:"fx-1 b d-ib ta-r ih-pdf-son-1"},Ks=m({__name:"CoOpProds",props:{one:{}},setup(u){return(e,d)=>{const p=C;return o(),t("div",null,[a(p,{class:"_wrapper"},{default:f(()=>[s("div",Ts,[Hs,(o(!0),t(k,null,w(e.one.ordered_product,(c,r)=>(o(),t("div",{class:"pt-pdf",key:r},[s("div",Ls,[s("div",Ps,[s("p",Es,i(_(b).order_product(c).name),1),s("p",Bs,"樣式:  "+i(_(b).order_product_variation(c).name),1)]),s("div",Ns,[h("附加:  "),s("div",Ss,"- "+i(c.discount_deduction),1)]),s("div",Ms,"單價: "+i(c.selling_price),1),s("div",Vs,[s("div",Ds," 數量: "+i(c.quantity),1),s("div",Fs,i(_($)(c.total_price))+" HKD ",1)])])]))),128))])]),_:1})])}}}),Is={class:"fx-s fx-t ih-pdf-son-x1"},qs=m({__name:"CoOpTitV",props:{tit:{},tit_ciass:{},v_ciass:{}},setup(u){return(e,d)=>(o(),t("div",Is,[s("p",{class:x([e.tit_ciass,"mw-5em"])},i(e.tit),3),s("p",{class:x(["b ta-r fx-1 eiip-2",e.v_ciass])},[T(e.$slots,"default")],2)]))}}),As={class:"fx-s"},Rs={class:"fx-1"},Ws=s("div",{class:"w-1em"},null,-1),zs={class:"fx-1"},Gs={key:0},Js={key:1},js={key:0},Qs={key:1},Us=m({__name:"CoOpMsg",props:{one:{}},setup(u){const e=u,d=y(()=>e.one.order_shop?e.one.order_shop:{});return(p,c)=>{const r=qs,n=C;return o(),t("div",As,[s("div",Rs,[a(n,{class:"px-pdf"},{default:f(()=>[a(r,{tit:"日期",v_ciass:"mw-6em ta-i"},{default:f(()=>[h(i(_(E)(p.one.order_date,!0)),1)]),_:1}),a(r,{tit:"訂單編號",v_ciass:"mw-6em ta-i"},{default:f(()=>[h(i(p.one.order_id),1)]),_:1}),a(r,{tit:"會員名稱",v_ciass:"mw-6em ta-i"},{default:f(()=>[h(i(_(b).member(p.one,"普通會員")),1)]),_:1}),a(r,{tit:"收銀員",v_ciass:"mw-6em ta-i"},{default:f(()=>[h(i(_(b).cashier(p.one)),1)]),_:1})]),_:1})]),Ws,s("div",zs,[a(n,{class:"px-pdf"},{default:f(()=>[a(r,{tit:"店鋪電話"},{default:f(()=>[_(d).id?(o(),t("span",Gs,i(_(d).phone_no),1)):(o(),t("span",Js,"Hello Kitty 官方"))]),_:1}),a(r,{tit:"關注/FOLLOW"},{default:f(()=>[_(d).facebook?(o(),t("span",js,i(_(d).facebook),1)):(o(),t("span",Qs,"Hello Kitty 官方"))]),_:1}),a(r,{tit:"店鋪地址",v_ciass:"mh-2em-pdf"},{default:f(()=>[h(i(_(d).address),1)]),_:1}),_(d).id?H("",!0):(o(),B(r,{key:0},{default:f(()=>[h(" ")]),_:1}))]),_:1})])])}}}),Xs={class:"w-100 bg-con pdf-wrapper co-order-pdf"},Ys={class:"fx-s"},Zs=s("h2",null,"銷售單據 SALE RECEIPT",-1),so=m({__name:"CoOrderPdfPapper",props:{one:{}},setup(u){return(e,d)=>{const p=D,c=Us,r=Ks,n=Os,l=ps,v=R;return o(),t("div",Xs,[s("div",Ys,[Zs,s("div",null,[a(p,{class:"pdf-iogo"})])]),a(c,{one:e.one,class:"pt-pdf-x1"},null,8,["one"]),a(r,{one:e.one,class:"pt-pdf-x2 co-op-prods"},null,8,["one"]),a(n,{one:e.one,class:"pt-pdf-x2 co-op-remark"},null,8,["one"]),a(l,{one:e.one,class:"pt-pdf-x2"},null,8,["one"]),a(v,{one:e.one,class:"pt-1em"},null,8,["one"])])}}}),co=m({__name:"CoOrderPdfParcei",props:{ciass:{},kiii_printed:{type:Boolean}},setup(u){const e=u,d=O(!0),p=O({}),c=N({many:[]}),r={remark_than_num:n=>{n.map(()=>{})},spiite_order:()=>{},init:()=>V(()=>{const n=sessionStorage.getItem("heiiokitty_order_of_printed");if(n){const l=JSON.parse(n);l&&l.id&&(p.value=l),d&&console.log("PDFONE =",l)}e.kiii_printed||setTimeout(()=>{d.value&&window.print()},800)}),effect:()=>{const n=p.value;n&&n.id&&(c.many.length=0,(n.ordered_product?n.ordered_product:[]).length>5,c.many.push(n))}};return S(r.init),M(r.effect),(n,l)=>{const v=so;return o(),t("div",null,[(o(!0),t(k,null,w(_(c).many,(L,P)=>(o(),t("div",{class:"fx-c",key:P},[a(v,{class:x(n.ciass),one:L},null,8,["class","one"])]))),128))])}}});export{co as _};
