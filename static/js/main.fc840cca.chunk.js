(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),c=a.n(o),r=(a(13),a(14),a(15),a(5)),u=a(1),i=function(e){var t=e.sendTodo,a=Object(n.useState)(""),o=Object(u.a)(a,2),c=o[0],r=o[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({id:+new Date,title:c.trim(),completed:!1}),r("")}},l.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:c,onChange:function(e){var t=e.target;r(t.value)}}))},s=a(2),d=a.n(s),m=function(e){var t=e.todo,a=e.changeProperty,n=e.editTitle,o=e.todosTools,c=t.id,r=t.title,u=t.completed,i=o.todos,s=o.updateTodos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",checked:u,onChange:function(){a(c)}}),l.a.createElement("label",{onDoubleClick:function(e){e.preventDefault(),n(c)}},r),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){!function(e){var t=i.filter((function(t){return t.id!==e}));s(t),localStorage.clear("todos")}(t.id)}})),l.a.createElement("input",{type:"text",className:"edit",defaultValue:r,onBlur:function(e){var t=e.target;a(c,t.value),n(null)},onKeyDown:function(e){var t=e.key,l=e.target;"Enter"===t&&(a(c,l.value),n(null)),"Escape"===t&&n(null)}}))},p=function(e){var t=e.changeProperty,a=e.todosTools,o=e.todos,c=Object(n.useState)(null),r=Object(u.a)(c,2),i=r[0],s=r[1];return l.a.createElement("ul",{className:"todo-list"},o.map((function(e){return l.a.createElement("li",{key:e.id,className:d()({completed:e.completed},{editing:i===e.id})},l.a.createElement(m,{todo:e,changeProperty:t,editTitle:s,todosTools:a}))})))},f=function(e){var t=e.todoTools,a=e.filter,n=e.selectedFilter,o=e.selectFilter,c=t.todos,r=t.updateTodos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"todo-count"},"".concat(c.filter((function(e){return!e.completed})).length," items left")),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("button",{className:d()({selected:"All"===n}),value:"All",type:"button",onClick:function(e){var t=e.target;a(t.value)}},"All")),l.a.createElement("li",null,l.a.createElement("button",{className:d()({selected:"Active"===n}),value:"Active",type:"button",onClick:function(e){var t=e.target;o(t.value),a(t.value)}},"Active")),l.a.createElement("li",null,l.a.createElement("button",{className:d()({selected:"Completed"===n}),value:"Completed",type:"button",onClick:function(e){var t=e.target;o(t.value),a(t.value)}},"Completed"))),l.a.createElement("button",{hidden:!c.some((function(e){return e.completed})),type:"button",className:"clear-completed",onClick:function(){var e=c.filter((function(e){return!e.completed}));r(e),localStorage.setItem("todos",JSON.stringify(e))}},"Clear completed"))};var v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),s=Object(u.a)(c,2),d=s[0],m=s[1],v=Object(n.useState)("All"),g=Object(u.a)(v,2),E=g[0],b=g[1],h={todos:a,updateTodos:o};function y(e){b(e);var t=a.filter((function(t){switch(e){case"Active":return!t.completed;case"Completed":return t.completed;default:return t}}));return m(t)}return Object(n.useEffect)((function(){var e=localStorage.getItem("todos"),t=!e||JSON.parse(e);!a.length&&t.length&&o(t),m(a),y(E),!a.length||localStorage.setItem("todos",JSON.stringify(Object(r.a)(a)))}),[a]),l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos App"),l.a.createElement(i,{sendTodo:function(e){o(a?[e].concat(Object(r.a)(a)):[e])}})),l.a.createElement("section",{hidden:0===a.length,className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:a.every((function(e){return e.completed})),onChange:function(){var e=document.getElementById("toggle-all"),t=a.map((function(t){var a=t;return a.completed=e.checked,a}));o(t)}}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(p,{changeProperty:function(e,t){var n=a.map((function(a){var n=a;return a.id===e&&(t&&(n.title=t),t||(n.completed=!a.completed)),n}));o(n)},todosTools:h,todos:d})),l.a.createElement("footer",{hidden:!a.length,className:"footer"},l.a.createElement(f,{todoTools:h,filter:y,selectedFilter:E,selectFilter:b})))};c.a.render(l.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.fc840cca.chunk.js.map