(this.webpackJsonpfilmapp=this.webpackJsonpfilmapp||[]).push([[0],{29:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),r=n(19),o=n.n(r),s=(n(29),"ee863a1563e04349c7de9fd11eaf7ac5"),l={fetchTrending:"/trending/all/week?api_key=".concat(s,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(s,"&with_networks=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(s,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(s,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(s,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(s,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(s,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(s,"&with_genres=99")},d=n(5),u=n.n(d),v=n(6),h=n(4),b=n(7),j=n.n(b),p=j.a.create({baseURL:"https://api.themoviedb.org/3"}),f=n(20);n(61),n(62);var m=function(e){var t=e.trailerMovieName,n=e.trailerMovieDescription;return Object(a.jsxs)("div",{className:"trailer__details",children:[Object(a.jsx)("h1",{className:"trailer__title",children:t}),Object(a.jsx)("p",{className:"trailer__description",children:n}),Object(a.jsxs)("div",{className:"trailer__buttons",children:[Object(a.jsx)("button",{className:"trailer__button",children:"Play"}),Object(a.jsx)("button",{className:"trailer__button",children:"My List"})]})]})},_=n(23),g=n.n(_);var O=function(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,r=Object(i.useState)([]),o=Object(h.a)(r,2),s=o[0],l=o[1],d=Object(i.useState)(""),b=Object(h.a)(d,2),_=b[0],O=b[1],x=Object(i.useState)({}),w=Object(h.a)(x,2),N=w[0],y=w[1];return Object(i.useEffect)((function(){function e(){return(e=Object(v.a)(u.a.mark((function e(){var t,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(n);case 2:for(t=e.sent,a=[],i=0;i<t.data.results.length;i++)null!==t.data.results[i].poster_path&&null!==t.data.results[i].backdrop_path&&a.push(t.data.results[i]);return l(a),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(a.jsx)("img",{onClick:function(){return function(e){if(_)O("");else{var t=(null===e||void 0===e?void 0:e.original_title)||(null===e||void 0===e?void 0:e.original_name);if(null==t)return;function n(){return(n=Object(v.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB4fxFbEZqA9Fc-xBZU_TclTvHDvm21Qic&type=video&videoDefinition=high&q="+t+" latest trailer",j.a.get(n).then((function(e){O(e.data.items[0].id.videoId)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){n.apply(this,arguments)}(t);for(var a=0;a<s.length;a++)if(s[a].original_title===t||s[a].original_name===t){var i,c={name:t,description:(r=null===(i=s[a])||void 0===i?void 0:i.overview,o=250,(null===r||void 0===r?void 0:r.length)>o?r.substr(0,o-1)+"...":r)};y(c);break}}var r,o}(e)},className:"row__poster ".concat(c&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),_&&Object(a.jsxs)("div",{className:"trailer",children:[_&&Object(a.jsx)(f.a,{videoId:_,opts:{height:"390",width:"640",playerVars:{autoplay:1}}}),Object(a.jsx)(g.a,{right:!0,duration:1500,children:Object(a.jsx)(m,{trailerMovieName:N.name,trailerMovieDescription:N.description})})]})]})};n(65);var x=function(){var e,t,n=Object(i.useState)([]),c=Object(h.a)(n,2),r=c[0],o=c[1],s={backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===r||void 0===r?void 0:r.backdrop_path,'")')};return Object(i.useEffect)((function(){function e(){return(e=Object(v.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(l.fetchNetflixOriginals);case 2:t=e.sent,console.log("Banner",t.data.results),o(t.data.results[Math.floor(Math.random()*t.data.results.length)]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log("movie",r),console.log("movie1",r.name),console.log("movie2",null===r||void 0===r?void 0:r.name),Object(a.jsx)("header",{className:"banner",style:s,children:Object(a.jsxs)("div",{className:"banner__contents",children:[Object(a.jsx)("h1",{className:"banner__title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(a.jsxs)("div",{className:"banner__buttons",children:[Object(a.jsx)("button",{className:"banner__button",children:"Play"}),Object(a.jsx)("button",{className:"banner__button",children:"My List "})]}),Object(a.jsx)("h1",{className:"banner__description",children:(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+" ...":e)}),Object(a.jsx)("div",{className:"banner--fadeBottom",children:" "})]})})};n(66);var w=function(){var e=Object(i.useState)(),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(a.jsxs)("div",{className:"nav ".concat(n?"nav__black":""),children:[Object(a.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(a.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})};n(67);var N=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(w,{}),Object(a.jsx)(x,{}),Object(a.jsx)(O,{title:"Trending Now",fetchUrl:l.fetchTrending,isLargeRow:!0}),Object(a.jsx)(O,{title:"Top Rated",fetchUrl:l.fetchTopRated}),Object(a.jsx)(O,{title:"Action Movies",fetchUrl:l.fetchActionMovies}),Object(a.jsx)(O,{title:"Comedy Movies",fetchUrl:l.fetchComedyMovies}),Object(a.jsx)(O,{title:"Horror Movies",fetchUrl:l.fetchHorrorMovies}),Object(a.jsx)(O,{title:"Romance Movies",fetchUrl:l.fetchRomanceMovies}),Object(a.jsx)(O,{title:"Documentaries",fetchUrl:l.fetchDocumentaries})]})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.8987396d.chunk.js.map