(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,n,e){t.exports={ContactForm:"ContactForm_ContactForm__334f8",ContactLabel:"ContactForm_ContactLabel__236TT",ContactInput:"ContactForm_ContactInput__1DRCB",ContactBtn:"ContactForm_ContactBtn__1fMK0"}},20:function(t,n,e){t.exports={ContactListLi:"ContactList_ContactListLi__wVnYE",ContactBtnDel:"ContactList_ContactBtnDel__1v9Sm"}},36:function(t,n,e){t.exports={filterLabel:"Filter_filterLabel__2UEsk"}},67:function(t,n,e){},70:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e.n(c),r=e(16),o=e.n(r),u=e(39),s=e(25),i=e(72),b=e(10),l=e.n(b),j=e(9),f=e(23),d=e.n(f),O=e(35),C=e(15),h=e.n(C),m=e(3),p=Object(m.b)("contacts/fetchContactRequest"),v=Object(m.b)("contacts/fetchContactSuccess"),x=Object(m.b)("contacts/fetchContactError"),_=Object(m.b)("contacts/addContactRequest"),L=Object(m.b)("contacts/addContactSuccess"),g=Object(m.b)("contacts/addContactError"),k=Object(m.b)("contacts/deleteContactRequest"),N=Object(m.b)("contacts/deleteContactSuccess"),w=Object(m.b)("contacts/deleteContactError"),y=Object(m.b)("contacts/filter");h.a.defaults.baseURL="http://localhost:4040";var F=function(){return function(){var t=Object(O.a)(d.a.mark((function t(n){var e,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(p()),t.prev=1,t.next=4,h.a.get("/contacts");case 4:e=t.sent,c=e.data,n(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(x(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}()},A=e(1),S=Object(j.b)(null,(function(t){return{onAddSubmit:function(n,e){return t(function(t,n){return function(e){var c={name:t,number:n};e(_()),h.a.post("/contacts",c).then((function(t){var n=t.data;return e(L(n))})).catch((function(t){return e(g(t))}))}}(n,e))}}}))((function(t){var n=t.onAddSubmit,e=Object(c.useState)(""),a=Object(s.a)(e,2),r=a[0],o=a[1],u=Object(c.useState)(""),b=Object(s.a)(u,2),j=b[0],f=b[1],d=Object(i.a)(),O=Object(i.a)(),C=function(t){var n=t.currentTarget,e=n.name,c=n.value;switch(e){case"name":o(c);break;case"number":f(c);break;default:return}},h=function(){f(""),o("")};return Object(A.jsxs)("form",{className:l.a.ContactForm,onSubmit:function(t){return t.preventDefault(),n(r,j),h()},children:[Object(A.jsxs)("label",{className:l.a.ContactLabel,htmlFor:d,children:["\u0418\u043c\u044f",Object(A.jsx)("input",{className:l.a.ContactInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:d,value:r,onChange:C})]}),Object(A.jsxs)("label",{htmlFor:O,className:l.a.ContactLabel,children:["\u041d\u043e\u043c\u0435\u0440",Object(A.jsx)("input",{className:l.a.ContactInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:C,id:O})]}),Object(A.jsx)("button",{className:l.a.ContactBtn,type:"submit",children:"Add contact"})]})})),B=e(20),D=e.n(B),E=function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))},I=Object(j.b)((function(t){var n=t.contacts,e=n.items,c=n.filter;return{contacts:E(e,c)}}),(function(t){return{fetchContact:function(){return t(F())},onDeleteContact:function(n){return t((e=n,function(t){t(k()),h.a.delete("/contacts/".concat(e)).then((function(){return t(N(e))})).catch((function(n){return t(w(n))}))}));var e}}}))((function(t){var n=t.contacts,e=t.onDeleteContact;return Object(c.useEffect)((function(){F()})),Object(A.jsx)("ul",{className:D.a.ContactListUl,children:n.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(A.jsxs)("li",{className:D.a.ContactListLi,children:[Object(A.jsxs)("p",{children:[c,":",Object(A.jsx)("span",{children:a})]}),Object(A.jsx)("button",{className:D.a.ContactBtnDel,onClick:function(){return e(n)},children:"Delete"})]},n)}))})})),q=e(36),z=e.n(q),R=Object(j.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(n){return t(y(n.target.value))}}}))((function(t){var n=t.value,e=t.onChange;return Object(A.jsxs)("label",{className:z.a.filterLabel,children:["Find contacts by name",Object(A.jsx)("input",{type:"text",value:n,onChange:e,className:"filterInput"})]})}));e(67);function T(){return Object(A.jsxs)("div",{className:"divApp",children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(S,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(I,{}),Object(A.jsx)(R,{})]})}var J,M,U=e(19),Z=e(6),K=e(4),P=Object(m.c)([],(J={},Object(Z.a)(J,v,(function(t,n){return n.payload})),Object(Z.a)(J,L,(function(t,n){var e=n.payload;return[].concat(Object(U.a)(t),[e])})),Object(Z.a)(J,N,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),J)),V=Object(m.c)("",Object(Z.a)({},y,(function(t,n){return n.payload}))),Y=Object(m.c)(!1,(M={},Object(Z.a)(M,p,(function(){return!0})),Object(Z.a)(M,v,(function(){return!1})),Object(Z.a)(M,x,(function(){return!1})),Object(Z.a)(M,_,(function(){return!0})),Object(Z.a)(M,L,(function(){return!1})),Object(Z.a)(M,g,(function(){return!1})),Object(Z.a)(M,k,(function(){return!0})),Object(Z.a)(M,N,(function(){return!1})),Object(Z.a)(M,w,(function(){return!1})),M)),$=Object(m.c)(null,{}),G=Object(K.b)({items:P,filter:V,loading:Y,error:$}),H=e(37),Q=e.n(H),W=e(11),X=[].concat(Object(U.a)(Object(m.d)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}})),[function(t){return function(t){return function(n){console.log("\u043c\u043e\u044f \u043f\u0440\u043e\u0441\u043b\u043e\u0439\u043a\u0430",n),t(n)}}},Q.a]),tt=Object(m.a)({reducer:{contacts:G},middleware:X,devTools:!1});e(68);o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(j.a,{store:tt,children:Object(A.jsx)(u.a,{children:Object(A.jsx)(T,{})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.4b749da8.chunk.js.map