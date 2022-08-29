(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),o=c(4),a=c(2),r=c(3),i=c.n(r),l=c(1),u=c(5),d=c.n(u),j=(c(15),c(16),"https://mate.academy/students-api"),b=function(){var e=Object(o.a)(i.a.mark((function e(t){var c,n,s,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{method:"GET"},console.log("request to: ".concat(j).concat(t)),console.log("request options:",n),e.next=5,fetch("".concat(j).concat(t),n);case 5:if((s=e.sent).ok){e.next=8;break}return e.abrupt("return",Promise.reject("".concat(s.status," - ").concat(s.statusText)));case 8:if(null!==(c=s.headers.get("content-type"))&&void 0!==c&&c.includes("application/json")){e.next=10;break}return e.abrupt("return",Promise.reject("Content-type is not supported"));case 10:return e.abrupt("return",s.json());case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return b("/posts/".concat(e))},p=(c(17),c(0)),O=function(){return Object(p.jsx)("div",{className:"Loader",children:Object(p.jsx)("div",{className:"Loader__content"})})},h=(c(19),function(e){var t=e.currentUserId,c=e.selectedPostId,n=e.setSelectedPostId,s=e.setShowPostDetails,r=Object(l.useState)([]),u=Object(a.a)(r,2),j=u[0],m=u[1],h=Object(l.useState)(!1),f=Object(a.a)(h,2),x=f[0],v=f[1],_=function(){var e=Object(o.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,b("All"===(n=t)?"/posts":"/posts?userId=".concat(n));case 4:c=e.sent,m(c),v(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),v(!1),console.log("error",e.t0);case 13:case"end":return e.stop()}var n}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){console.log("mounted",t),_(),console.log("postsList = ",j)}),[t]);return Object(p.jsxs)("div",{className:"PostsList",children:[Object(p.jsx)("h2",{children:"Posts:"}),x?Object(p.jsx)(O,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:"Count posts: ".concat(j.length)}),Object(p.jsx)("ul",{className:"PostsList__list",children:j.map((function(e){return Object(p.jsxs)("li",{className:d()("PostsList__item",{"PostsList__item--active":e.id===c}),"data-cy":"postDetails",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),Object(p.jsx)("strong",{children:e.title}),":",Object(p.jsx)("br",{}),"".concat(e.id," : ").concat(e.body)]}),Object(p.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return function(e){switch(console.log("postId =",e),console.log("selectedPostId before = ",c),!0){case c&&e===c:n(""),s(!1),console.log("postId === selectedPostId",e,c);break;case c&&e!==c:n(e),s(!0),console.log("postId !== selectedPostId",e,c);break;default:n(e),s(!0),console.log("selectedPostId undefined =",e,c)}console.log("selectedPostId after =",c)}(e.id)},children:c===e.id?"Close":"Open"})]},e.id)}))})]})]})}),f=function(e){return t=e,b("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify(t)});var t},x=function(e){return console.log("commentId = ",e),t="/comments/".concat(e),b(t,{method:"DELETE"});var t},v=c(6),_=c(8),P=(c(20),function(e){var t=e.selectedPostId,c=e.loadData,n={postId:t,name:"",email:"",body:""},s=Object(l.useState)(n),o=Object(a.a)(s,2),r=o[0],i=o[1];Object(l.useEffect)((function(){i(n)}),[t]);var u=function(e){i(Object(_.a)(Object(_.a)({},r),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("form",{className:"NewCommentForm",method:"POST",onSubmit:function(e){e.preventDefault(),f(r).then((function(){return c()})),i(n)},children:["postId: ".concat(t),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:r.name,onChange:u})}),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:r.email,onChange:u})}),Object(p.jsx)("div",{className:"form-field",children:Object(p.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input NewCommentForm__input--textarea",value:r.body,onChange:u})}),Object(p.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),g=(c(21),{id:"",userId:"",title:"",body:"",createdAt:"",updatedAt:""}),N=function(e){var t=e.selectedPostId;console.log("render PostDetails");var c=Object(l.useState)([]),n=Object(a.a)(c,2),s=n[0],r=n[1],u=Object(l.useState)(g),d=Object(a.a)(u,2),j=d[0],h=d[1],f=Object(l.useState)(!0),v=Object(a.a)(f,2),_=v[0],N=v[1],y=Object(l.useState)(!1),I=Object(a.a)(y,2),w=I[0],S=I[1],D=s.length,C=function(){var e=Object(o.a)(i.a.mark((function e(){var c,n,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),console.log("selectedPostId =",t),e.prev=2,e.next=5,Promise.all([(i=t,b("/comments?postId=".concat(i))),m(t)]);case 5:c=e.sent,n=Object(a.a)(c,2),s=n[0],o=n[1],r(s),h(o),S(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("error",e.t0),S(!1);case 18:case"end":return e.stop()}var i}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){t&&(console.log("mounted new comment by postId = ",t),C())}),[t]);return Object(p.jsxs)("div",{className:"PostDetails",children:[Object(p.jsx)("h2",{children:"Post details:"}),w?Object(p.jsx)(O,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("section",{className:"PostDetails__post",children:[Object(p.jsx)("strong",{children:"".concat(j.id," : ").concat(j.title)}),Object(p.jsx)("p",{children:j.body})]}),Object(p.jsxs)("section",{className:"PostDetails__comments",children:[Object(p.jsx)("button",{type:"button",className:"PostDetails__button button",onClick:function(){return N(!_)},children:_?"Hide ".concat(D," comments"):"Show comments"}),_&&Object(p.jsx)("ul",{className:"PostDetails__list","data-cy":"postList",children:s.map((function(e){return Object(p.jsxs)("li",{className:"PostDetails__list-item",children:[Object(p.jsx)("button",{type:"button",className:"PostDetails__remove-button button",formMethod:"DELETE",onClick:function(){return t=e.id,void x(t).then((function(e){console.log(e,"loadData"),C()}));var t},children:"X"}),Object(p.jsx)("p",{children:"".concat(e.id," : ").concat(e.body)})]},e.id)}))})]})]}),Object(p.jsx)("section",{children:Object(p.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(p.jsx)(P,{selectedPostId:t,loadData:C})})})]})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return b("/users".concat(e))},I=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(l.useState)(!1),r=Object(a.a)(s,2),u=r[0],j=r[1],b=Object(l.useState)(""),m=Object(a.a)(b,2),f=m[0],x=m[1],v=Object(l.useState)(""),_=Object(a.a)(v,2),P=_[0],g=_[1],I=Object(l.useState)(!1),w=Object(a.a)(I,2),S=w[0],D=w[1],C=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,y();case 4:t=e.sent,n(t),j(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error",e.t0),j(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){C()}),[]);return Object(p.jsxs)("div",{className:"App",children:[u?Object(p.jsx)(O,{}):Object(p.jsx)("header",{className:"App__header",children:Object(p.jsxs)("label",{children:["Select a user: \xa0",Object(p.jsxs)("select",{className:"App__user-selector",defaultValue:"DEFAULT",onChange:function(e){return t=e.target.value,x(t),void D(!1);var t},children:[Object(p.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Choose..."}),Object(p.jsx)("option",{value:"All",children:"All users"}),c.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(p.jsxs)("main",{className:"App__main",children:[f&&Object(p.jsx)("div",{className:"App__sidebar",children:Object(p.jsx)(h,{currentUserId:f,selectedPostId:P,setSelectedPostId:g,setShowPostDetails:D})}),Object(p.jsx)("div",{className:d()("App__content",{"App__content--hidden":!S}),children:P&&Object(p.jsx)(N,{selectedPostId:P})})]})]})};s.a.render(Object(p.jsx)(I,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.8d795fcf.chunk.js.map