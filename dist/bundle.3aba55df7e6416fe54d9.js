(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2To+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r("q1tI"));t.default=function(e){switch(e.type){case"simple":var t=e.value>=0?e.value.toFixed(2):e.value;return n.default.createElement("div",{className:"form-group"},n.default.createElement("label",null,e.label),n.default.createElement("input",{type:"text",readOnly:!0,className:"form-control",value:t}));case"simple1":return n.default.createElement("div",{className:"form-group  col-sm-4"},n.default.createElement("label",null,e.label),n.default.createElement("input",{type:"text",readOnly:!0,className:"form-control",value:e.value}));case"simple2":var r="";return r=e.value.maxCurrName?n.default.createElement("input",{type:"text",readOnly:!0,className:"form-control",value:e.value.maxCurrCode+" | "+e.value.maxCurrName}):n.default.createElement("input",{type:"text",readOnly:!0,className:"form-control",value:"Not available"}),n.default.createElement("div",{className:"form-group col-sm-4"},n.default.createElement("label",null,e.label),r);case"error":return n.default.createElement("div",{className:"alert alert-danger",role:"alert"},e.label)}}},GK7P:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,".stats {\n    margin-top: 80px;\n}",""])},JkZA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r("q1tI"),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={amount:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"render",value:function(){var e=this;return o.default.createElement("input",{type:"text",className:"form-control",id:"FormControlInput",placeholder:"Type amount",value:this.state.amount,onChange:function(t){e.onInputChange(t.target.value)}})}},{key:"onInputChange",value:function(e){(/^\d+$/.test(e)||/^$/.test(e))&&(this.setState({amount:e}),this.props.onAmountChange(e))}}]),t}();t.default=u},"Qo/l":function(e,t,r){var n=r("GK7P");"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,a);n.locals&&(e.exports=n.locals)},"b/rV":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r("q1tI"),o=s(a),u=s(r("2To+")),l=s(r("oHge"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={hasError:!1,info:"",error:""},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,info:t,error:e})}},{key:"render",value:function(){return this.state.hasError?o.default.createElement(u.default,{label:l.default.renderingErrorMessage,type:"error"}):this.props.children}}]),t}();t.default=c},"kr/T":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r("q1tI"),o=function(e){return e&&e.__esModule?e:{default:e}}(a);var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"render",value:function(){var e=this,t=[o.default.createElement("option",{value:""},"Select currency code")];for(var r in this.props.currencies)t.push(o.default.createElement("option",{value:r},r," | ",this.props.currencies[r]));return o.default.createElement("select",{className:"form-control",id:"FormControlCurrSelect",onChange:function(t){return e.props.onSelect(t.target.value,e.props.boxType)}},t)}}]),t}();t.default=u},oHge:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={getCurrListURL:"http://localhost:3000/getCurrencies",getStatsURL:"http://localhost:3000/stats",conversionURL:"http://localhost:3000/convert",masterErrorMessage:"We are sorry, but something went really wrong. We have a problem to load your app. Please try it later",getStatsErrorMessage:"Sorry, we can not get statistics right now. What you may see is probably not correct",convertErrorMessage:"Sorry, we can not get convert right now. What you may see is probably not correct",renderingErrorMessage:"We are sorry, but something went really wrong. We have a problem to load your app. Please try it later"};t.default=n},tjUo:function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r("q1tI"),o=d(a),u=d(r("i8i4")),l=d(r("vDqi")),s=d(r("JkZA")),c=d(r("kr/T")),i=d(r("2To+")),f=d(r("b/rV"));r("Qo/l");var m=d(r("oHge"));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={amount:0,fromCurr:null,toCurr:null,currenciesList:{},stats:{amount:0,requests:0,maxCurrCode:"Not available"},masterError:!1,error:!1,errorMessage:""},r.getCurrencies(),r.getStats(),r.amountSet=r.amountSet.bind(r),r.currencySet=r.currencySet.bind(r),r.convertAmount=r.convertAmount.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),n(t,[{key:"getCurrencies",value:function(){var e=this;l.default.get(m.default.getCurrListURL).then(function(t){200===t.data.status&&e.setState({currenciesList:t.data.data})}).catch(function(t){e.setState({masterError:!0,errorMessage:m.default.masterErrorMessage}),console.log("message:",t.message)})}},{key:"getStats",value:function(){var e=this;l.default.get(m.default.getStatsURL).then(function(t){if(200!==t.data.status)throw new Error({message:"Getting bad response from: "+m.default.getStatsURL,error:t.data});e.setState({stats:t.data.data})}).catch(function(t){e.setState({error:!0,errorMessage:m.default.getStatsErrorMessage})})}},{key:"amountSet",value:function(e){this.setState({amount:e}),this.convertAmount(e,this.state.fromCurr,this.state.toCurr),this.setState({error:!1,errorMessage:""})}},{key:"currencySet",value:function(e,t){switch(t){case"from":this.setState({fromCurr:e}),this.convertAmount(this.state.amount,e,this.state.toCurr);break;case"to":this.setState({toCurr:e}),this.convertAmount(this.state.amount,this.state.fromCurr,e)}this.setState({error:!1,errorMessage:""})}},{key:"convertAmount",value:function(e,t,r){var n=this;if(e&&t&&r){var a=m.default.conversionURL+"?amount="+e+"&from="+t+"&to="+r;l.default.get(a).then(function(e){if(200!==e.data.status)throw new Error({message:"Getting bad response from: "+m.default.conversionURL,error:e.data});n.setState({convertedAmount:e.data.data.convertedData.amount,stats:e.data.data.stats})}).catch(function(e){n.setState({error:!0,errorMessage:m.default.convertErrorMessage}),console.log("message:",e)})}}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-sm-12"},o.default.createElement("h1",null,"Currency Convertor"))),o.default.createElement("div",null,o.default.createElement(f.default,null,this.state.masterError&&o.default.createElement(i.default,{label:this.state.errorMessage,type:"error"}),!this.state.masterError&&o.default.createElement("div",null,this.state.error&&o.default.createElement(i.default,{label:this.state.errorMessage,type:"error"}),o.default.createElement("form",null,o.default.createElement("div",{class:"form-group"},o.default.createElement("label",{for:"FormControlInput"},"Amount for conversion"),o.default.createElement(s.default,{onAmountChange:this.amountSet})),o.default.createElement("div",{class:"form-group"},o.default.createElement("label",{for:"FormControlFromCurrSelect"},"Amount currency"),o.default.createElement(c.default,{currencies:this.state.currenciesList,boxType:"from",onSelect:this.currencySet})),o.default.createElement("div",{class:"form-group"},o.default.createElement("label",{for:"FormControlFromCurrSelect"},"Destination currency"),o.default.createElement(c.default,{currencies:this.state.currenciesList,boxType:"to",onSelect:this.currencySet})),o.default.createElement("hr",null),o.default.createElement("div",{className:"form-row"},o.default.createElement(i.default,{label:"Converted Amount",type:"simple",value:this.state.convertedAmount})),o.default.createElement("hr",null),o.default.createElement("div",{className:"form-row stats"},o.default.createElement(i.default,{label:"Total amount converted",type:"simple1",value:this.state.stats.amount.toFixed(2)}),o.default.createElement(i.default,{label:"Total number of conversions",type:"simple1",value:this.state.stats.requests}),o.default.createElement(i.default,{label:"Most popular destination currency",type:"simple2",value:{maxCurrCode:this.state.stats.maxCurrCode,maxCurrName:this.state.currenciesList[this.state.stats.maxCurrCode]}})))))))}}]),t}();u.default.render(o.default.createElement(p,null),document.querySelector(".container"))}},[["tjUo",0,1]]]);