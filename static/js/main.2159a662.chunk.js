(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(12),r=n.n(s),i=(n(23),n(24),n(13)),c=n(14),l=n(16),d=n(15),h=n(5),m=n(17),u=(n(25),n(26)),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={text:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({text:"# Welcome to my React Markdown Previewer!\n  \n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n    \n  Heres some code, `<div></div>`, between 2 backticks.\n  \n  ```\n  // this is multi-line code:\n  \n  function anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n      return multiLineCode;\n    }\n  }\n  ```\n    \n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n  \n  There's also [links](https://www.freecodecamp.com), and\n  > Block Quotes!\n  \n  And if you want to get really crazy, even tables:\n  \n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | ------------- \n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n  \n  - And of course there are lists.\n    - Some are bulleted.\n        - With different indentation levels.\n          - That look like this.\n  \n  \n  1. And there are numbererd lists too.\n  1. Use just 1s if you want! \n  1. But the list goes on...\n  - Even if you use dashes or asterisks.\n  * And last but not least, let's not forget embedded images:\n  \n  ![React](https://goo.gl/Umyytc)\n\n  "})}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container App"},o.a.createElement("h3",{className:"text-center"},"MARKDOWN PREVIEWER"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-lg-6"},o.a.createElement("h3",{className:"text-center"},"Markdown"),o.a.createElement("textarea",{id:"editor",value:this.state.text,onChange:this.handleChange,className:"mt-2 p-5"})),o.a.createElement("div",{className:"col-sm-12 col-lg-6"},o.a.createElement("h3",{className:"text-center"},"Previewer"),o.a.createElement("div",{className:"preview mt-3 p-5",id:"preview",dangerouslySetInnerHTML:{__html:u(this.state.text)}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2159a662.chunk.js.map