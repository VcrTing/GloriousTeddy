import{_ as l}from"./IayoutPan.vue_vue_type_script_setup_true_lang-6d2583dc.js";import{_ as d}from"./OBtnSave.vue_vue_type_script_setup_true_lang-e1463eeb.js";import{_ as b}from"./OBtnBack.vue_vue_type_script_setup_true_lang-f82a7d3f.js";import{_ as k}from"./BadGoodsCreatBase.vue_vue_type_script_setup_true_lang-e222e657.js";import{d as x,u as g,g as n,n as y,o as v,y as w,w as $,b as r,i as s,a as e,ac as h,j as B,m as C,p as N,k as V}from"./index-337f7f81.js";import{s as j}from"./serv_bad_opera-b3f2cf86.js";import{c as q}from"./choiseOnePina-63ef4ee9.js";import{b as p}from"./route-block-83d24a4e.js";import"./OIoadDot.vue_vue_type_script_setup_true_lang-88fa6bb8.js";import"./OIoadCir.vue_vue_type_script_setup_true_lang-97bf9dac.js";import"./MBtn.vue_vue_type_script_setup_true_lang-0750471d.js";import"./CoProduChoiseMod.vue_vue_type_script_setup_true_lang-8a327d51.js";import"./ModInner.vue_vue_type_script_setup_true_lang-35079fea.js";import"./OPager.vue_vue_type_script_setup_true_lang-e8db0948.js";import"./OiX2.vue_vue_type_script_setup_true_lang-e107cdd6.js";import"./DocumentTextIcon-4065dfc9.js";import"./PlusCircleIcon-82179b65.js";import"./IayoutTabie.vue_vue_type_script_setup_true_lang-053a05e3.js";import"./InboxIcon-969d6f5e.js";import"./OTr.vue_vue_type_script_setup_true_lang-c614ec9c.js";import"./Itemdash.vue_vue_type_script_setup_true_lang-af92ca41.js";import"./cioseitem.vue_vue_type_script_setup_true_lang-4f4093d2.js";import"./Oi.vue_vue_type_script_setup_true_lang-1b79ed73.js";import"./XMarkIcon-68aaf1a8.js";import"./serv_product_iist-7f1632b0.js";import"./errors_product-d5275ad5.js";import"./view-ff4549d6.js";import"./CoWarehouseSeiect.vue_vue_type_script_setup_true_lang-15ca1457.js";import"./Dropdown.vue_vue_type_script_setup_true_lang-a0c6c958.js";import"./OTabieEmptyTwo.vue_vue_type_script_setup_true_lang-f57fa3cb.js";import"./ODropdownNetItem.vue_vue_type_script_setup_true_lang-1c8b131e.js";import"./BtnIcon.vue_vue_type_script_setup_true_lang-78d6e800.js";import"./giobaiPina-a7af486b.js";import"./serv_suppiier_iist-d0b7b21c.js";import"./serv_user_iist-c2c55f37.js";import"./serv_warehouse_iist-0cdc9478.js";import"./OTime.vue_vue_type_script_setup_true_lang-4c016366.js";import"./datepicker.esm-327ec920.js";import"./OInput.vue_vue_type_script_setup_true_lang-ef8a80a3.js";import"./OInputI.vue_vue_type_script_setup_true_lang-81fc1593.js";const O={class:"fx-s py"},P=e("span",{class:"px-s"},null,-1),R=x({__name:"bad_goods_creat",setup(T){const c=g(),t=n({ioading:!1,msg:"",can:!1,sign:0}),a=n({product_id:null,variation:0,product_name:"",quantity:1,storehouse_id:null,date:"",remarks:""}),i={buiid:()=>t.can?h(a):null,submit:()=>B(t,i.buiid,async m=>{const o=await j(m);C(o)?N(o,t):i.success()}),success:()=>c.back(),init:()=>V(()=>{q().ciear_for_creat()})};return y(i.init),(m,o)=>{const _=b,u=d,f=l;return v(),w(f,{tit:"添加壞貨",ciass:"w-45 w-55-p"},{default:$(()=>[r(k,{form:s(a),aii:s(t),class:"py-row"},null,8,["form","aii"]),e("div",O,[r(_,{class:"fx-1",sure:s(t).sign>0},null,8,["sure"]),P,r(u,{aii:s(t),tit:"儲存",class:"fx-1",onClick:o[0]||(o[0]=z=>i.submit())},null,8,["aii"])])]),_:1})}}});typeof p=="function"&&p(R);export{R as default};