(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),c=n(8),s=n.n(c),i=(n(23),n(13)),r=n(4),d=n(5),l=n(7),u=n(6),j=(n(24),n.p+"static/media/check-list.e5289047.png"),h=(n(25),n(16)),p=n(0),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"list-container",children:Object(p.jsx)("ul",{className:"todo-list",children:Object(p.jsxs)("li",{children:[Object(p.jsxs)("label",{className:"check-container",children:[Object(p.jsx)("input",{type:"checkbox",defaultChecked:this.props.todo.completed,onChange:function(){return e.props.completedItem(e.props.todo)}}),Object(p.jsx)("span",{className:"checkmark"}),Object(p.jsx)("p",{children:this.renderItem()})]}),Object(p.jsx)("button",{className:"icon-button",children:Object(p.jsx)(h.a,{className:"fawicon",icon:"times-circle",onClick:function(){return e.props.deleteItem(e.props.todo.id)}})})]})})})})}},{key:"renderItem",value:function(){return this.props.todo.completed?Object(p.jsx)("s",{children:this.props.todo.value}):this.props.todo.value}}]),n}(o.a.Component),m=b,O=(n(32),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:e.props.addTodoValue},e.handleChange=function(t){e.setState({value:t.target.value})},e.clearInput=function(){document.getElementById("inputValue").value="",e.setState({value:""})},e.addItem=function(t){t.preventDefault(),e.props.addItem(e.state.value.trim()),e.clearInput()},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("section",{className:"add-task",children:Object(p.jsxs)("form",{id:"form",onSubmit:this.addItem,children:[Object(p.jsx)("input",{type:"text",placeholder:"Enter new task...",id:"inputValue",onChange:this.handleChange}),Object(p.jsx)("button",{type:"button",onClick:this.addItem,children:"Add"})]})})})}}]),n}(o.a.Component)),f=O,v=n(3),x=n(17),g=n(18),k=n(12),I=n.n(k);v.b.add(x.a);var C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){var t=a.state.todos.filter((function(t){return t.id!==e}));a.setState({todos:t})},a.addNewTodo=function(e){if(e){var t=Object(i.a)(a.state.todos);t.some((function(t){return t.value===e}))?I.a.fire({icon:"error",title:"Oops...",text:"That task already exists!"}):t.push({id:Date.now(),value:e,completed:!1}),a.setState({addTodoValue:"",todos:t})}else I.a.fire({icon:"error",title:"Uh uh...",text:"You need to write something!"})},a.handleCompleted=function(e){var t=Object(i.a)(a.state.todos);t.map((function(t){return t.id===e.id&&(t.completed=!t.completed),t})),a.setState({todos:t})},a.state={addTodoValue:"",todos:[{id:0,value:"",completed:!1}]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return 0===t.id?null:Object(p.jsx)(m,{todo:t,deleteItem:e.handleDelete,completedItem:e.handleCompleted},t.id)}));return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("header",{className:"title",children:[Object(p.jsx)("img",{src:j,alt:""}),Object(p.jsx)("h3",{children:"My TODO List"})]}),Object(p.jsx)(f,{addItem:this.addNewTodo,addTodoValue:this.state.addTodoValue}),Object(p.jsx)(g.a,{duration:300,easing:"linear",children:t})]})}}]),n}(o.a.Component);var y=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(C,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),N()}},[[43,1,2]]]);
//# sourceMappingURL=main.1feed007.chunk.js.map