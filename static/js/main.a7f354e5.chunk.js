(this.webpackJsonphistory=this.webpackJsonphistory||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/passport.a2d1f06e.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/404.e1001140.svg"},26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r);a(31);var s=function(){return l.a.createElement("div",{className:"App"},"landing page")},m=a(10),o=a(11),i=a(12),d=a(14),u=a(13),h=a(15),p=function(e){return l.a.createElement("div",{className:"shadow-md w-full py-4 px-2"},l.a.createElement("form",{className:"flex flex-wrap",onSubmit:e.handleSubmission},l.a.createElement("div",{className:"w-full md:w-1/2 lg:w-1/4 p-2"},l.a.createElement("label",{className:"block text-gray-800 font-bold text-sm mb-2"},"Username"),l.a.createElement("input",{placeholder:"@bundayyo",type:"text",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700",value:e.data.username,name:"username",onChange:e.handleChange})),l.a.createElement("div",{className:"w-full md:w-1/2 lg:w-1/4 p-2"},l.a.createElement("label",{className:"block text-gray-800 font-bold text-sm mb-2"},"From"),l.a.createElement("input",{placeholder:"01-01-2018",type:"date",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700",value:e.data.startDate,name:"startDate",onChange:e.handleChange})),l.a.createElement("div",{className:"w-full md:w-1/2 lg:w-1/4 p-2"},l.a.createElement("label",{className:"block text-gray-800 font-bold text-sm mb-2"},"To"),l.a.createElement("input",{placeholder:"01-01-2019",type:"date",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700",value:e.data.endDate,name:"endDate",onChange:e.handleChange})),l.a.createElement("div",{className:"w-full md:w-1/2 lg:w-1/4 p-2 flex justify-center"},l.a.createElement("button",{className:"bg-blue-500 px-4 py-2 rounded text-white mt-8"},"Fetch Tweets \ud83c\udf89"))))},f=a(22),E=a.n(f),v=a(4),x=function(e){return l.a.createElement("div",{className:"shadow-md rounded w-full md:w-1/2 lg:w-1/3"},l.a.createElement("div",null,l.a.createElement("div",{className:"bg-blue-400 rounded-t text-sm py-2 px-3 text-white flex justify-between"},l.a.createElement("p",null,"2018-04-16 07:56 AM"),l.a.createElement("a",{href:"#"},l.a.createElement(v.b,null))),l.a.createElement("p",{className:"text-gray-800 text-sm py-2 px-3"},"Content goes here sdfghfd sdfghrew dertgtre dfg fdsdrftgh trert Content goes here sdfghfd sdfghrew dertgtre dfg fdsdrftgh trert"),l.a.createElement("div",{className:"py-1 px-3 flex border-t-2"},l.a.createElement("img",{src:E.a,className:"w-12 h-12 mr-1 rounded-full object-contain"}),l.a.createElement("div",null,l.a.createElement("p",{className:"text-gray-600 text-sm"},"Bundayy Olayinka"),l.a.createElement("a",{href:"#",className:"text-blue-400"}," @bundayyo "))),l.a.createElement("div",{className:"bg-blue-100 rounded-b text-sm py-1 px-3 text-gray-700 flex justify-between"},l.a.createElement("p",null,"Twitter For iPhone"),l.a.createElement("div",{className:"inline-flex text-teal-500"},l.a.createElement(v.e,{className:"mt-1 mr-1"})," 16"),l.a.createElement("div",{className:"inline-flex text-purple-500"},l.a.createElement(v.f,{className:"mt-1 mr-1"})," 4"),l.a.createElement("div",{className:"inline-flex text-red-500"},l.a.createElement(v.c,{className:"mt-1 mr-1"})," 4k"))))},y=function(e){return l.a.createElement("div",{className:"text-blue-500 text-sm w-full md:w-1/3 lg:w-full"},l.a.createElement("a",{href:"#"}," #WelcomeToNigeria ",l.a.createElement("span",{className:"text-gray-600"}," 500k Tweets")," "))},w=a(7),g=function(e){return l.a.createElement("header",{className:"bg-blue-500 px-12 py-4 text-white flex justify-between"},l.a.createElement("div",{className:""},e.title),l.a.createElement("div",null,l.a.createElement(w.c,{activeClassName:"active",to:"/twitter"}," Twitter "),l.a.createElement(w.c,{activeClassName:"active",to:"/movies",className:"ml-3"}," Movies ")))},N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",startDate:"",endDate:""},a.header={method:"post",headers:new Headers({Authorization:"Bearer AAAAAAAAAAAAAAAAAAAAABWwAwEAAAAAwpR5bj91XGI6HnNczREqg4isd5M%3DEZON7bu5E3dsGhDowTuta7itBPCwS2gpe0r5hHpZyiLJTluu6t","Content-Type":"application/json;charset=utf-8"}),body:a.data},a.data={query:"from:bundayyo lang:en",maxResults:"100",fromDate:"201909010000",toDate:"201911152359"},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.handleSubmission=function(e){e.preventDefault(),console.log(a.state)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/tweets/search/fullarchive/Dev.json",this.header).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,{title:"Twitter Today in History"}),l.a.createElement("main",{className:"px-12 py-5 "},l.a.createElement("div",{className:"py-4"},l.a.createElement("h2",{className:"text-blue-500 text-2xl"},"Fetch Twitter History on Specific Dates")),l.a.createElement("div",{className:"flex flex-wrap"},l.a.createElement("div",{className:"w-full lg:w-3/4"},l.a.createElement(p,{data:this.state,handleChange:this.handleChange,handleSubmission:this.handleSubmission}),l.a.createElement("div",{className:"flex flex-wrap w-full mt-4"},l.a.createElement(x,null))),l.a.createElement("div",{className:"w-full lg:w-1/4"},l.a.createElement("div",{className:"shadow-lg md:mt-4 sm:mt-4 lg:ml-4 py-4 px-2"},l.a.createElement("p",{className:"text-blue-500 text-lg"},"Latest Trends"),l.a.createElement("p",{className:"text-gray-400 text-sm"},"Checkout What is Trending"),l.a.createElement("div",{className:"flex flex-wrap pt-4"},l.a.createElement(y,null)))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(6),A=function(e){return l.a.createElement("div",{className:"md:w-1/2 xl:w-1/3 sm:w-full"},l.a.createElement("div",{className:" p-2"},l.a.createElement("img",{className:"rounded-t",src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.movie.poster_path)}),l.a.createElement("div",{className:"bg-gray-800 rounded-b text-center"},l.a.createElement("p",{className:"text-white text-2xl py-1"},"".concat(e.movie.title)),l.a.createElement("p",{className:"text-white text-md my-2"}," ","".concat(e.movie.overview)),l.a.createElement("div",{className:"flex bg-gray-900 rounded-b justify-between p-2"},l.a.createElement("span",{className:"text-purple-300 inline-flex"},l.a.createElement(v.a,{className:"mt-1 mr-1"})," ","".concat(e.movie.release_date)),l.a.createElement("span",{className:"text-pink-300 inline-flex"},l.a.createElement(v.c,{className:"mt-1 mr-1"})," ","".concat(e.movie.vote_count)),l.a.createElement("span",{className:"text-purple-300 inline-flex"},l.a.createElement(v.g,{className:"mt-1 mr-1"})," ","".concat(e.movie.vote_average),"%")))))},C=function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit,className:"flex flex-wrap"},l.a.createElement("div",{className:"w-3/4"},l.a.createElement("input",{name:"search",value:e.state.search,onChange:e.handleChange,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700",placeholder:"search..."})),l.a.createElement("div",{className:"w-1/4 flex justify-center "},l.a.createElement("button",{className:"bg-blue-500 px-4 py-2 rounded"},"Go \ud83d\udca5 ")))},j=function(e){return l.a.createElement("div",{className:"".concat("inline-flex w-full rounded p-2 mt-4 text-white ").concat(e.style)},l.a.createElement(v.d,{className:"mt-1 mr-2"})," ",e.content)},k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).API_URL="https://api.themoviedb.org/3/",a.API_KEY="b5fe6f43e3714159d2209d0fe8c3a695",a.header={headers:new Headers({Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWZlNmY0M2UzNzE0MTU5ZDIyMDlkMGZlOGMzYTY5NSIsInN1YiI6IjU5MGIwOTc5OTI1MTQxNGZhODAxMzE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldVdrLz-iWpzmEgMvf_7IwT9pdfh14Pdqr_r2TGuMzg","Content-Type":"application/json;charset=utf-8"})},a.state={movies:[],search:"",notificationContent:"Loading, Please Wait ...",notify:!0,notifyStyle:"bg-teal-500"},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault();var t="".concat(a.API_URL,"search/movie?api_key=").concat(a.API_KEY,"&query=").concat(a.state.search);a.fetchMovies(t)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=(new Date).getFullYear(),t="".concat(this.API_URL,"discover/movie?sort_by=popularity.desc&year=").concat(e,"?api_key=").concat(this.API_KEY);this.fetchMovies(t)}},{key:"fetchMovies",value:function(e){var t=this;this.setState({movies:[],notificationContent:"Loading, Please Wait ...",notify:!0,notifyStyle:"bg-teal-500"}),fetch(e,this.header).then((function(e){return e.json()})).then((function(e){e.results.length>0?(e.results.map((function(e){return e.vote_average*=10})),t.setState({movies:e.results,notify:!1,notificationContent:"",notifyStyle:"bg-red-500"})):t.setState((function(t){return{movies:e.results,notify:!0,notificationContent:"No Movies Found with title ".concat(t.search),notifyStyle:"bg-red-500"}}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,{title:"Check Out Movies"}),l.a.createElement("main",{className:"px-12 py-5 "},l.a.createElement("div",{className:"py-4"},l.a.createElement("h2",{className:"text-blue-500 text-2xl"},"Check Out Movies ")),l.a.createElement("div",{className:"flex flex-wrap"},l.a.createElement("div",{className:"w-full"},l.a.createElement(C,{handleChange:this.handleChange,state:this.state,handleSubmit:this.handleSubmit}),this.state.notify?l.a.createElement(j,{content:this.state.notificationContent,style:this.state.notifyStyle}):null,l.a.createElement("div",{className:"flex flex-wrap mt-3"},this.state.movies.length>0?this.state.movies.map((function(e){if(e&&e.poster_path)return l.a.createElement(A,{key:e.id,movie:e})})):null)))))}}]),t}(n.Component),S=a(25),T=a.n(S),I=function(){return l.a.createElement("main",{className:"bg-gray-500 h-screen"},l.a.createElement("div",{className:"flex flex-wrap pt-64 px-5"},l.a.createElement("div",{className:"sm:w-2/3 w-full"},l.a.createElement("img",{alt:"404",src:T.a})),l.a.createElement("div",{className:"sm:w-1/3 sm:p-0 w-full text-center"},l.a.createElement("p",{className:"text-white text-white py-4"},"We cant figure out where you want to go \ud83e\udd74"),l.a.createElement(w.b,{to:"/twitter",className:"text-white bg-gray-600 font-bold rounded px-3 py-2"},"Take me to a safe haven \ud83d\ude0c"))))},M=l.a.createElement(w.a,null,l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",component:s}),l.a.createElement(b.a,{path:"/twitter",component:N}),l.a.createElement(b.a,{path:"/movies",component:k}),l.a.createElement(b.a,{component:I})));c.a.render(M,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a7f354e5.chunk.js.map