(this.webpackJsonphotels=this.webpackJsonphotels||[]).push([[0],{12:function(e,a,t){e.exports=t(24)},17:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),s=t.n(i),o=(t(17),t(1)),l=t(2),c=t(5),m=t(4),h=t(3),u=(t(9),t(6)),d=(t(19),t(20),new Date),p=t(11),v=t.n(p);u.updateLocale("es",v.a);var f=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).props={filters:{dateFrom:new Date,dateTo:new Date,country:void 0,price:void 0,rooms:void 0}},n}return Object(l.a)(t,[{key:"render",value:function(){var e=u(this.props.filters.dateFrom).format("dddd, LL"),a=u(this.props.filters.dateTo).format("dddd, LL"),t=this.props.filters.country,n=this.props.filters.price,i=this.props.filters.rooms;return r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Hoteles"),r.a.createElement("h2",{className:"subtitle"},"Desde",""!==this.props.filters.dateFrom?r.a.createElement("strong",null," "+e):" Cualquier fecha"," hasta",""!==this.props.filters.dateTo?r.a.createElement("strong",null," "+a):" Cualquier fecha",void 0!==t?" en ".concat(t):"",void 0!==n?" desde ".concat(n):"",void 0!==i?" con m\xe1ximo ".concat(i," habitaciones"):""))))}}]),t}(r.a.Component),g=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleDateChange=n.handleDateChange.bind(Object(c.a)(n)),n}return Object(l.a)(t,[{key:"handleDateChange",value:function(e){this.props.onDateChange(e)}},{key:"render",value:function(){var e=u(this.props.date).format("YYYY-MM-DD");return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"date",value:e,onChange:this.handleDateChange,name:this.props.name}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas "+this.props.icon}))))}}]),t}(r.a.Component),b=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleOptionChange=n.handleOptionChange.bind(Object(c.a)(n)),n}return Object(l.a)(t,[{key:"handleOptionChange",value:function(e){this.props.onOptionChange(e)}},{key:"render",value:function(){var e=this.props.options.map((function(e){return r.a.createElement("option",{value:e.value},e.name)}));return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control has-icons-left"},r.a.createElement("div",{className:"select",style:{width:"100%"}},r.a.createElement("select",{style:{width:"100%"},onChange:this.handleOptionChange,name:this.props.name},e)),r.a.createElement("div",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas "+this.props.icon}))))}}]),t}(r.a.Component),E=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleDateChange=n.handleDateChange.bind(Object(c.a)(n)),n.handleOptionChange=n.handleOptionChange.bind(Object(c.a)(n)),n}return Object(l.a)(t,[{key:"compareDates",value:function(e,a){var t=Math.floor(e/864e5),n=Math.floor(a.getTime()/864e5);return t>n?1:t<n?-1:0}},{key:"handleDateChange",value:function(e){var a=this.props.filters;switch(e.target.name){case"dateFrom":-1!=this.compareDates(Date.parse(e.target.value),new Date)?(a[e.target.name]=e.target.value,a.dateTo=e.target.value,this.props.onFilterChange(a)):this.props.onFilterChange(a);break;case"dateTo":Date.parse(e.target.value)<Date.parse(this.props.filters.dateFrom)?(this.props.onFilterChange(a),console.log("entr\xf3")):(a[e.target.name]=e.target.value,this.props.onFilterChange(a));break;default:console.log("default")}}},{key:"handleOptionChange",value:function(e){var a=this.props.filters;a[e.target.name]=e.target.value,this.props.onFilterChange(a)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar is-info",style:{justifyContent:"center"}},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{date:this.props.filters.dateFrom,icon:"fa-sign-in-alt",onDateChange:this.handleDateChange,name:"dateFrom"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(g,{date:this.props.filters.dateTo,icon:"fa-sign-out-alt",onDateChange:this.handleDateChange,name:"dateTo"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b,{options:[{value:void 0,name:"Todos los pa\xedses"},{value:"Argentina",name:"Argentina"},{value:"Brasil",name:"Brasil"},{value:"Chile",name:"Chile"},{value:"Uruguay",name:"Uruguay"}],selected:this.props.filters.country,icon:"fa-globe",onOptionChange:this.handleOptionChange,name:"country"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b,{options:[{value:void 0,name:"Cualquier precio"},{value:1,name:"$"},{value:2,name:"$$"},{value:3,name:"$$$"},{value:4,name:"$$$$"}],selected:this.props.filters.price,icon:"fa-dollar-sign",onOptionChange:this.handleOptionChange,name:"price"})),r.a.createElement("div",{className:"navbar-item"},r.a.createElement(b,{options:[{value:void 0,name:"Cualquier tama\xf1o"},{value:10,name:"Hotel peque\xf1o"},{value:20,name:"Hotel mediano"},{value:30,name:"Hotel grande"}],selected:this.props.filters.rooms,icon:"fa-bed",onOptionChange:this.handleOptionChange,name:"rooms"})))}}]),t}(r.a.Component),C=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag is-medium is-info"},r.a.createElement("i",{className:"fas "+this.props.icon})),r.a.createElement("span",{className:"tag is-medium"},this.props.descripcion)))}}]),t}(r.a.Component),O=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.hotel;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:e.photo,alt:e.slug}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title is-4"},e.name),r.a.createElement("p",null,e.description),r.a.createElement("div",{className:"field is-grouped is-grouped-multiline",style:{marginTop:"1em"}},r.a.createElement(C,{icon:"fa-map-marker",descripcion:e.city}),r.a.createElement(C,{icon:"fa-bed",descripcion:e.rooms+" Habitaciones"}),r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"tags"},r.a.createElement("span",{className:"tag is-medium is-info"},r.a.createElement("i",{className:"fas fa-dollar-sign",style:{margin:"0 .125em"}}),r.a.createElement("i",{className:"fas fa-dollar-sign",style:e.price>=2?{margin:"0 .125em"}:{margin:"0 .125em",opacity:".25"}}),r.a.createElement("i",{className:"fas fa-dollar-sign",style:e.price>=3?{margin:"0 .125em"}:{margin:"0 .125em",opacity:".25"}}),r.a.createElement("i",{className:"fas fa-dollar-sign",style:e.price>=4?{margin:"0 .125em"}:{margin:"0 .125em",opacity:".25"}})))))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("a",{href:"javascript:alert('No implementamos esto a\xfan :(')",className:"card-footer-item has-background-primary has-text-white has-text-weight-bold"},"Reservar")))}}]),t}(r.a.Component),y=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.hotels;return r.a.createElement("section",{className:"section",style:{marginTop:"3em"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-multiline"},0===e.length?r.a.createElement("article",{className:"message is-warning"},r.a.createElement("div",{className:"message-body"},"No se han encontrado hoteles que coincidan con los par\xe1metros de b\xfasqueda.")):e.map((function(e){return r.a.createElement("div",{className:"column is-one-third"},r.a.createElement(O,{hotel:e}))})))))}}]),t}(r.a.Component),N=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={filters:{dateFrom:d,dateTo:new Date(d.valueOf()+864e5),country:void 0,price:void 0,rooms:void 0},hotels:[],initialHotels:[]},n.handleFilterChange=n.handleFilterChange.bind(Object(c.a)(n)),n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica").then((function(e){return e.json()})).then((function(a){return e.setState({hotels:a,initialHotels:a})})).catch((function(e){return console.error(e)}))}},{key:"filtraHoteles",value:function(e,a){return a.filter((function(a){return(void 0===e.country||"Todos los pa\xedses"===e.country||e.country===a.country)&&(e.price==a.price||(void 0===e.price||"Cualquier precio"==e.price))&&(""==e.dateFrom||u(e.dateFrom).toDate().valueOf()>=a.availabilityFrom)&&(""==e.dateTo||u(e.dateTo).toDate().valueOf()<=a.availabilityTo)&&(void 0===e.rooms||"Cualquier tama\xf1o"==e.rooms||(a.rooms<e.rooms&&a.rooms>=e.rooms-10||e.rooms>20&&a.rooms>20))}))}},{key:"handleFilterChange",value:function(e){console.log(e),this.setState({filters:e,hotels:this.filtraHoteles(e,this.state.initialHotels)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{filters:this.state.filters}),r.a.createElement(E,{filters:this.state.filters,onFilterChange:this.handleFilterChange}),r.a.createElement(y,{hotels:this.state.hotels}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.2b932ce4.chunk.js.map