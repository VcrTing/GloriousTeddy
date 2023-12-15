import{_ as w}from"./OInput.vue_vue_type_script_setup_true_lang-36799fa6.js";import{_ as N}from"./OInputI.vue_vue_type_script_setup_true_lang-00dc2ab7.js";import{_ as R}from"./OTime.vue_vue_type_script_setup_true_lang-39960829.js";import{d as V,g as h,a8 as y,h as u,o as U,c as C,b as n,w as i,i as p,B as m,C as l,a as d,ag as c,q as $,v as k,x as B,E}from"./index-843b19dc.js";import{v as M}from"./verify-18da9a0d.js";const b={class:"o-form"},T=V({__name:"SuppiierCreatBase",props:{form:{},aii:{}},setup(s){const r=s,a=h(y(r.form)),f=["supplier_id","name","phone_no","contact_person","create_date"];return u(()=>r.aii.sign,()=>{let e=!0;r.aii.can=!1,f.map(o=>{c(a,o,r.form[o],r.aii)&&(e=!1)}),r.aii.can=e}),u(()=>r.form.supplier_id,e=>c(a,"supplier_id",e,r.aii)),u(()=>r.form.name,e=>c(a,"name",e,r.aii)),u(()=>r.form.phone_no,e=>c(a,"phone_no",e,r.aii,()=>!M(e))),u(()=>r.form.contact_person,e=>c(a,"contact_person",e,r.aii)),u(()=>r.form.create_date,e=>c(a,"create_date",e,r.aii)),(e,o)=>{const v=R,g=N,_=w;return U(),C("div",b,[n(g,{tit:"建檔日期",err:p(a).create_date,icon:"date"},{default:i(()=>[n(v,{form:e.form,pk:"create_date"},null,8,["form"])]),_:1},8,["err"]),n(_,{tit:"供應商編號*",err:p(a).supplier_id},{default:i(()=>[m(d("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.supplier_id=t),placeholder:"請輸入"},null,512),[[l,e.form.supplier_id]])]),_:1},8,["err"]),n(_,{tit:"供應商名稱*",err:p(a).name},{default:i(()=>[m(d("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.name=t),placeholder:"請輸入"},null,512),[[l,e.form.name]])]),_:1},8,["err"]),n(_,{tit:"聯絡電話*",err:p(a).phone_no},{default:i(()=>[m(d("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>e.form.phone_no=t),placeholder:"請輸入"},null,512),[[l,e.form.phone_no]])]),_:1},8,["err"]),n(_,{tit:"登錄郵箱",err:p(a).email},{default:i(()=>[m(d("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.email=t),placeholder:"自由填寫"},null,512),[[l,e.form.email]])]),_:1},8,["err"]),n(_,{tit:"聯繫人*",err:p(a).contact_person},{default:i(()=>[m(d("input",{"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.contact_person=t),placeholder:"請輸入"},null,512),[[l,e.form.contact_person]])]),_:1},8,["err"]),n(_,{tit:"備註",err:p(a).remarks},{default:i(()=>[m(d("textarea",{rows:"3","onUpdate:modelValue":o[5]||(o[5]=t=>e.form.remarks=t),placeholder:"請輸入"},null,512),[[l,e.form.remarks]])]),_:1},8,["err"])])}}}),A={class:"o-form"},z=V({__name:"SuppiierCreatCompany",props:{form:{},aii:{}},setup(s){const a=h(y(s.form));return(f,e)=>{const o=w;return U(),C("div",A,[n(o,{tit:"詳細地址",err:p(a).office_address},{default:i(()=>[m(d("textarea",{rows:"4","onUpdate:modelValue":e[0]||(e[0]=v=>f.form.office_address=v),placeholder:"請輸入"},null,512),[[l,f.form.office_address]])]),_:1},8,["err"])])}}}),D={class:"o-form"},G=V({__name:"SuppiierCreatFactory",props:{form:{},aii:{}},setup(s){const a=h(y(s.form));return(f,e)=>{const o=w;return U(),C("div",D,[n(o,{tit:"詳細地址",err:p(a).factory_address},{default:i(()=>[m(d("textarea",{rows:"4","onUpdate:modelValue":e[0]||(e[0]=v=>f.form.factory_address=v),placeholder:"請輸入"},null,512),[[l,f.form.factory_address]])]),_:1},8,["err"])])}}}),S="suppiiers",H=async(s,r)=>$(E,async()=>(delete s.password,k(await B.put(S,s,r+"")))),J=async s=>$(E,async()=>k(await B.pos(S,s)));export{T as _,z as a,G as b,J as c,H as s};
