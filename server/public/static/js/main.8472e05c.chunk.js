(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(27),o=n.n(i),a=n(33),d=n(52),s=(n(39),n(40),n(3)),u=n(4),l=n(5),b=n(6),f=n(25),j=n(9),p=function(e,t){return e.findIndex((function(e){return e.id===t}))},O=function(e,t,n){var r=e[t];return function(e,t,n){var r=Object(j.cloneDeep)(e);return r.splice(n,0,t),r}(function(e,t){var n=Object(j.cloneDeep)(e);return n.splice(t,1),n}(e,t),r,n)},x=function(e,t){switch(t.type){case"ADD_LIST":var n=e.lists.slice();return n.push({id:Object(f.a)(),text:t.payload,tasks:[]}),Object(l.a)(Object(l.a)({},e),{},{lists:n});case"ADD_TASK":var r=Object(j.cloneDeep)(e.lists);return r[p(r,t.payload.listId)].tasks.push({id:Object(f.a)(),text:t.payload.text}),Object(l.a)(Object(l.a)({},e),{},{lists:r});case"MOVE_LIST":var c=t.payload,i=c.draggedId,o=c.hoverId,a=p(e.lists,i),d=p(e.lists,o),s=O(e.lists,a,d);return Object(l.a)(Object(l.a)({},e),{},{lists:s});case"SET_DRAGGED_ITEM":var u=t.payload;return Object(l.a)(Object(l.a)({},e),{},{draggedItem:u});case"MOVE_TASK":var b=t.payload,x=b.draggedItemId,g=b.hoveredItemId,h=b.sourceColumnId,v=b.targetColumnId,m=e.lists,y=p(m,h),I=p(m[y].tasks,x),k=p(m,v),C=g?p(m[k].tasks,g):0,w=Object(j.cloneDeep)(m),A=w[y].tasks[I];return w[y].tasks.splice(I,1),w[k].tasks.splice(C,0,A),Object(l.a)(Object(l.a)({},e),{},{lists:w});default:return e}},g="https://cyh-trello-clone.herokuapp.com",h=n(21),v=n.n(h),m=n(28),y=n(2);var I,k,C,w,A,D,S,T,E,L,M,R=Object(r.createContext)({}),_=(I=function(e){var t=e.children,n=e.initialState,c=Object(r.useReducer)(x,n),i=Object(b.a)(c,2),o=i[0],a=i[1],d=o.lists,s=o.draggedItem;return Object(r.useEffect)((function(){var e;e={lists:o.lists},fetch("".concat(g,"/api/save"),{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}),[o]),Object(y.jsx)(R.Provider,{value:{lists:d,draggedItem:s,getTasksByListId:function(e){var t;return(null===(t=d.find((function(t){return t.id===e})))||void 0===t?void 0:t.tasks)||[]},dispatch:a},children:t})},function(e){var t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],i=n[1],o=Object(r.useState)(!0),a=Object(b.a)(o,2),d=a[0],s=a[1],u=Object(r.useState)(),f=Object(b.a)(u,2),j=f[0],p=f[1];if(Object(r.useEffect)((function(){!function(){var e=Object(m.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(g,"/api/load"),{method:"get"}).then((function(e){return e.json()}));case 3:t=e.sent,i(t.lists),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof Error&&p(e.t0);case 10:s(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]),d)return Object(y.jsx)("div",{children:"Loading"});if(j)return Object(y.jsx)("div",{children:"error"});var O={draggedItem:null,lists:c};return Object(y.jsx)(I,Object(l.a)(Object(l.a)({},e),{},{initialState:O}))}),P=function(){return Object(r.useContext)(R)},B=u.b.div(k||(k=Object(s.a)(["\n  opacity: ",";\n  transform: ",";\n"])),(function(e){return e.isHidden?0:1}),(function(e){return e.isPreview?"rotate(5deg)":null})),N=u.b.div(C||(C=Object(s.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  z-index: 100;\n"]))),K=u.b.div.attrs((function(e){return{style:{transform:"translate(".concat(e.position.x,"px,").concat(e.position.y,"px)")}}}))(w||(w=Object(s.a)([""]))),U=function(e,t,n,r){return Boolean(!r&&e&&e.id===n&&e.type===t)},G=n(53),V=function(e){return{type:"SET_DRAGGED_ITEM",payload:e}},H=function(e,t,n,r){return{type:"MOVE_TASK",payload:{draggedItemId:e,hoveredItemId:t,sourceColumnId:n,targetColumnId:r}}},J=function(e){var t=P().dispatch,n=Object(G.a)({type:e.type,item:function(){return t(V(e)),e},end:function(){t(V(null))}});return{drag:Object(b.a)(n,2)[1]}},z=n(54),q=Object(u.b)(B)(A||(A=Object(s.a)(["\n  width: ",";\n  background-color: #fff;\n  cursor: pointer;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 3px;\n  box-shadow: #091e4240 0.5px 1px 0px 0px;\n"])),(function(e){return e.isPreview?"276px":null})),F=function(e){var t=e.id,n=e.text,c=e.columnId,i=e.isPreview,o=P(),a=o.draggedItem,d=o.dispatch,s=Object(r.useRef)(null),u=J({id:t,text:n,columnId:c,type:"CARD"}).drag,f=Object(z.a)({accept:"CARD",hover:function(){a&&"CARD"===a.type&&a.id!==t&&(d(H(a.id,t,a.columnId,c)),d(V(Object(l.a)(Object(l.a)({},a),{},{columnId:c}))))}});return u((0,Object(b.a)(f,2)[1])(s)),Object(y.jsx)(q,{ref:s,isPreview:i,isHidden:U(a,"CARD",t,i),children:n})};var Q,W,X,Y,Z,$,ee,te=u.b.div(D||(D=Object(s.a)(["\n  min-width: 276px;\n  display: flex;\n  flex-direction: column;\n"]))),ne=u.b.input(S||(S=Object(s.a)(["\n  padding: 8px;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n\n  &:focus {\n    border-color: #86b7fe;\n    outline: 0;\n    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);\n  }\n  margin-bottom: 0.5rem;\n"]))),re=u.b.button(T||(T=Object(s.a)(["\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n  padding: 0.15rem 0.35rem;\n  margin-left: 10px;\n  ","\n  ","\n"])),(function(e){return e.primary&&Object(u.a)(E||(E=Object(s.a)(["\n      color: #fff;\n      background-color: #1890ff;\n      border-color: #1890ff;\n    "])))}),(function(e){return e.danger&&Object(u.a)(L||(L=Object(s.a)(["\n      color: #fff;\n      background-color: #ff4d4f;\n      border-color: #ff4d4f;\n    "])))})),ce=u.b.div(M||(M=Object(s.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),ie=function(e){var t=e.onCancel,n=e.onAdd,c=Object(r.useState)(""),i=Object(b.a)(c,2),o=i[0],a=i[1],d=function(){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t;null===(t=e.current)||void 0===t||t.focus()}),[]),e}();return Object(y.jsxs)(te,{children:[Object(y.jsx)(ne,{type:"text",value:o,onChange:function(e){return a(e.target.value)},ref:d,onKeyPress:function(e){"Enter"===e.key&&n(o)}}),Object(y.jsxs)(ce,{children:[Object(y.jsx)(re,{primary:!0,onClick:function(){return function(e){e&&n(e)}(o)},children:"Create"}),Object(y.jsx)(re,{danger:!0,onClick:t,children:"Cancel"})]})]})},oe=u.b.div(Q||(Q=Object(s.a)(["\n  min-width: 276px;\n  padding: 8px;\n  background-color: #ffffff3d;\n  &:hover {\n    background-color: #ffffff52;\n  }\n  border-radius: 3px;\n  cursor: pointer;\n"]))),ae=u.b.div(W||(W=Object(s.a)(["\n  color: ",";\n  text-align: left;\n  transition: background 85ms ease-in;\n"])),(function(e){return e.dark?"#000":"#fff"})),de=function(e){var t=Object(r.useState)(!1),n=Object(b.a)(t,2),c=n[0],i=n[1];return c?Object(y.jsx)(ie,{onCancel:function(){i(!1)},onAdd:function(t){i(!1),e.onAdd(t)}}):Object(y.jsx)(oe,{children:Object(y.jsx)(ae,{dark:e.dark,onClick:function(){i(!0)},children:e.toggleButtonText})})},se=u.b.div(X||(X=Object(s.a)(["\n  min-width: 320px;\n  width: 320px;\n  padding-right: 20px;\n"]))),ue=Object(u.b)(B)(Y||(Y=Object(s.a)(["\n  border-radius: 3px;\n  padding: 12px;\n  background-color: #ebecf0;\n"]))),le=u.b.div(Z||(Z=Object(s.a)(["\n  font-weight: bold;\n  margin-bottom: 8px;\n"]))),be=function(e){var t=e.id,n=e.text,c=e.isPreview,i=P(),o=i.getTasksByListId,a=i.dispatch,d=i.draggedItem,s=o(t),u=Object(r.useRef)(null),f=J({id:t,text:n,type:"COLUMN"}).drag,j=Object(z.a)({accept:["COLUMN","CARD"],hover:function(){if(d)if("COLUMN"!==d.type){if("CARD"===d.type){if(d.columnId===t)return;if(s.length)return;a(H(d.id,null,d.columnId,t)),a(V(Object(l.a)(Object(l.a)({},d),{},{columnId:t})))}}else{if(d.id===t)return;a({type:"MOVE_LIST",payload:{draggedId:d.id,hoverId:t}})}}});return f((0,Object(b.a)(j,2)[1])(u)),Object(y.jsx)(se,{children:Object(y.jsxs)(ue,{ref:u,isHidden:U(d,"COLUMN",t,c),isPreview:c,children:[Object(y.jsx)(le,{children:n}),s.map((function(e){return Object(y.jsx)(F,{text:e.text,columnId:t,id:e.id},e.id)})),Object(y.jsx)(de,{toggleButtonText:"+ add another item",onAdd:function(e){return a(function(e,t){return{type:"ADD_TASK",payload:{text:e,listId:t}}}(e,t))},dark:!0})]})})},fe=n(51),je=function(){var e=P().draggedItem,t=Object(fe.a)((function(e){return{currentOffset:e.getSourceClientOffset()}})).currentOffset;return e&&t?"COLUMN"===e.type?Object(y.jsx)(N,{children:Object(y.jsx)(K,{position:t,children:Object(y.jsx)(be,{id:e.id,text:e.text,isPreview:!0})})}):Object(y.jsx)(N,{children:Object(y.jsx)(K,{position:t,children:Object(y.jsx)(F,{id:e.id,text:e.text,columnId:e.columnId,isPreview:!0})})}):null},pe=u.b.div($||($=Object(s.a)(["\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  flex: 0 0 320px;\n  padding: 20px;\n"]))),Oe=u.b.div(ee||(ee=Object(s.a)(["\n  padding-right: 20px;\n"])));var xe=function(){var e=P(),t=e.lists,n=e.dispatch;return Object(y.jsxs)(pe,{children:[Object(y.jsx)(je,{}),t.map((function(e){return Object(y.jsx)(be,{text:e.text,id:e.id},e.id)})),Object(y.jsx)(Oe,{children:Object(y.jsx)(de,{onAdd:function(e){return n(function(e){return{type:"ADD_LIST",payload:e}}(e))},toggleButtonText:"+ add another list"})})]})};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(d.a,{backend:a.a,children:Object(y.jsx)(_,{children:Object(y.jsx)(xe,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.8472e05c.chunk.js.map