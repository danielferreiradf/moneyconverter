(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo.7c96eaca.png"},18:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),o=t(2),u=t(3),s=t(5),i=t(4),m=t(6),v=t(7),h=t(9),E=t.n(h),y=function(e){var a=e.value,t=e.currency;return r.a.createElement("option",{value:a},t)},p=function(e){var a=e.option,t=e.action;return r.a.createElement("select",{name:a,onChange:t},r.a.createElement(y,{value:"",currency:"Select an option"}),r.a.createElement(y,{value:"AUD",currency:"Australian Dollar"}),r.a.createElement(y,{value:"BGN",currency:"Bulgarian Lev"}),r.a.createElement(y,{value:"BRL",currency:"Brazilian Real"}),r.a.createElement(y,{value:"CAD",currency:"Canada Dollar"}),r.a.createElement(y,{value:"CHF",currency:"Swiss Franc"}),r.a.createElement(y,{value:"CNY",currency:"Chinese Yuan Renminbi"}),r.a.createElement(y,{value:"CZK",currency:"Czech Koruna"}),r.a.createElement(y,{value:"DKK",currency:"Danish Krone"}),r.a.createElement(y,{value:"EUR",currency:"European Euro"}),r.a.createElement(y,{value:"GBP",currency:"British Pound"}),r.a.createElement(y,{value:"HKD",currency:"Hong Kong Dollar"}),r.a.createElement(y,{value:"HRK",currency:"Croatian Kuna"}),r.a.createElement(y,{value:"HUF",currency:"Hungarian Forint"}),r.a.createElement(y,{value:"IDR",currency:"Indonesian Rupiah"}),r.a.createElement(y,{value:"ILS",currency:"Israeli Shekel"}),r.a.createElement(y,{value:"INR",currency:"Indian Rupee"}),r.a.createElement(y,{value:"ISK",currency:"Icelandic Krona"}),r.a.createElement(y,{value:"JPY",currency:"Japanese Yen"}),r.a.createElement(y,{value:"KRW",currency:"South Korean Won"}),r.a.createElement(y,{value:"MXN",currency:"Mexican Peso"}),r.a.createElement(y,{value:"MYR",currency:"Malaysian Ringgit"}),r.a.createElement(y,{value:"NOK",currency:"Norwegian Krone"}),r.a.createElement(y,{value:"NZD",currency:"New Zealand Dollar"}),r.a.createElement(y,{value:"PHP",currency:"Philippine Peso"}),r.a.createElement(y,{value:"PLN",currency:"Polish Zloty"}),r.a.createElement(y,{value:"RON",currency:"Romanian Leu"}),r.a.createElement(y,{value:"RUB",currency:"Russian Ruble"}),r.a.createElement(y,{value:"SEK",currency:"Swedish Krona"}),r.a.createElement(y,{value:"SGD",currency:"Singapore Dollar"}),r.a.createElement(y,{value:"THB",currency:"Thai Baht"}),r.a.createElement(y,{value:"TRY",currency:"Turkish Lira"}),r.a.createElement(y,{value:"USD",currency:"US Dollar"}),r.a.createElement(y,{value:"ZAR",currency:"South African Rand"}))},d=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"footer"},r.a.createElement("h1",{className:"footer__title"},"Developed by Daniel Ferreira - ",e),r.a.createElement("div",{className:"footer__social"},r.a.createElement("a",{href:"https://twitter.com/danferreira32",target:"blank",className:"footer__social-icon"},r.a.createElement("i",{className:"fab fa-twitter-square"})),r.a.createElement("a",{href:"https://github.com/danielferreiradf",target:"blank",className:"footer__social-icon"},r.a.createElement("i",{className:"fab fa-github-square"}))))},f=t(17),g=t.n(f),b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={currency:"",data:[],query:[],amount:"",from:"",to:"",total:"",showResult:!1},t.handleChange=function(e){var a;t.setState((a={},Object(v.a)(a,e.target.name,e.target.value),Object(v.a)(a,"showResult",!1),Object(v.a)(a,"data",[]),a))},t.handleSubmit=function(e){e.preventDefault(),t.getData()},t.getData=function(){E.a.get("https://api.exchangeratesapi.io/latest?base=".concat(t.state.from)).then(function(e){return t.setState({data:e.data.rates})}).then(t.calculateResult())},t.calculateResult=function(){var e=parseInt(t.state.amount),a=t.state.data[t.state.to];t.setState({total:(e*a).toFixed(2),showResult:!0}),console.log(e,a)},t}return Object(m.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://api.exchangeratesapi.io/latest?base=".concat(this.state.from)).then(function(a){return e.setState({query:a.data})})}},{key:"render",value:function(){var e;console.log(this.state.query);var a=this.state.amount,t=this.state.from,c=this.state.to,l=this.state.total;return this.state.showResult&&!isNaN(this.state.total)&&(e=r.a.createElement("div",{className:"converter__display"},r.a.createElement("h3",null,a,"  ",t),r.a.createElement("h1",null,l)," ",r.a.createElement("h2",null,"  ",c))),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"converter"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:g.a,alt:"",className:"converter__logo"}),r.a.createElement("p",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"converter__amount"},r.a.createElement("label",{htmlFor:"value",className:"converter__amount-label"},"Amount"),r.a.createElement("input",{type:"text",name:"amount",autoComplete:"off",onChange:this.handleChange,value:this.state.amount,className:"converter__amount-input"})),r.a.createElement("div",{className:"converter__options"},r.a.createElement("div",{className:"converter__select"},r.a.createElement("label",{htmlFor:"selectFrom",className:"converter__amount-label-2"},"From"),r.a.createElement(p,{name:"selectFrom",action:this.handleChange,option:"from",value:this.state.from,className:"converter__select"})),r.a.createElement("div",{className:"converter__select"},r.a.createElement("label",{htmlFor:"selectTo",className:"converter__amount-label-2"},"To"),r.a.createElement(p,{name:"selectTo",action:this.handleChange,option:"to",value:this.state.to}))),r.a.createElement("button",{type:"submit",className:"converter__button"},"Convert"),e))),r.a.createElement(d,null))}}]),a}(n.Component),N=(t(42),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.4b567f0e.chunk.js.map