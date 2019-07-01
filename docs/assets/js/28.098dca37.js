(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{219:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker-registry-로컬-서버에-구축하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry-로컬-서버에-구축하기","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker registry 로컬 서버에 구축하기")]),t._v(" "),e("h2",{attrs:{id:"_1-docker-registry-구축"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-registry-구축","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Docker registry 구축")]),t._v(" "),e("p",[t._v("docker registry 이미지를 pull 받는다.")]),t._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[t._v("docker pull registry\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("registry 실행")]),t._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[t._v("docker run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dit "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 5000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5000 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry registry\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("이제 localhost:5000가 docker registry 주소가 된다.")]),t._v(" "),e("h2",{attrs:{id:"_2-docker-registry-web-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-registry-web-ui","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Docker registry Web UI")]),t._v(" "),e("p",[t._v("docker registry web ui 이미지를 pull 받는다.")]),t._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[t._v("docker pull hyper/docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("registry 실행")]),t._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[t._v("docker run "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("it "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 8080"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8080 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("link docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("e REGISTRY_URL=http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5000/v2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("e REGISTRY_NAME=localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5000 hyper/docker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("브라우저에서 localhost:8080으로 접속해보면 docker regsitry web ui를 확인할 수 있다.")])])},[],!1,null,null,null);s.default=a.exports}}]);