(this["webpackJsonp2.randomquote"]=this["webpackJsonp2.randomquote"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),r=a.n(c),s=(a(12),a(13),a(3)),i=a(4),l=a(6),m=a(5),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getRandomNumber=function(){var e=n.state.quotes;if(e.length>1){var t=Math.floor(Math.random()*e.length);n.setState({index:t})}},n.state={quotes:[],index:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(t){e.setState({quotes:t.quotes},e.getRandomNumber)}))}},{key:"render",value:function(){var e=this.state,t=e.quotes[e.index];return o.a.createElement("div",{className:"col-6 box p-4 rounded",id:"quote-box"},o.a.createElement("div",{className:"text-center",id:"text"},o.a.createElement("i",{className:"fas fa-quote-left"}),t&&o.a.createElement("div",null," ",o.a.createElement("p",null,t.quote)," ",o.a.createElement("cite",{className:"text-right",id:"author"},t.author))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("button",{className:"btn btn-primary",id:"new-quote",onClick:this.getRandomNumber},o.a.createElement("i",{className:"fas fa-random"})," Get quote")),o.a.createElement("div",{className:"col-sm-2"},o.a.createElement("a",{href:"twitter.com/intent/tweet",target:"_blank",id:"tweet-quote"},o.a.createElement("button",{className:"btn btn-primary"},o.a.createElement("i",{className:"fab fa-twitter"})," Tweet quote"))))))}}]),a}(n.Component);var d=function(){return o.a.createElement("div",{className:"wrapper d-flex align-items-center justify-content-center"},o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.5eca76ed.chunk.js.map