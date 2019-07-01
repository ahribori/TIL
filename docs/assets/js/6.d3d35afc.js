(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{239:function(a,s,t){"use strict";t.r(s);var n=t(0),r=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"함수-지향-프로그래밍-functional-programing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#함수-지향-프로그래밍-functional-programing","aria-hidden":"true"}},[a._v("#")]),a._v(" 함수 지향 프로그래밍(Functional programing)")]),a._v(" "),t("p",[a._v("함수지향 프로그래밍은 함수를 통한 연산에 중점을 두고 변수와 상태(state)의\n사용을 최소화하려는 프로그래밍 패러다임이다. 함수형 프로그래밍의 핵심은\n불변성(Immutability)인데, 변수와 상태(state)와 대비되는 개념으로\n상수와 무상태(stateless)를 의미한다.\n각 함수들 사이에서 공유하는 값이나 상태가 없기 때문에 함수에 대한 테스트가\n쉽고 멀티 쓰레드 환경에서도 견고함을 유지하기 객체지향과 비교해서 상대적으로 쉽다.")]),a._v(" "),t("h2",{attrs:{id:"_1-순수한-함수-pure-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-순수한-함수-pure-function","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 순수한 함수 (Pure Function)")]),a._v(" "),t("p",[a._v("함수형 프로그래밍에서의 함수는 '순수'해야됨.")]),a._v(" "),t("h3",{attrs:{id:"순수-함수의-조건"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#순수-함수의-조건","aria-hidden":"true"}},[a._v("#")]),a._v(" 순수 함수의 조건")]),a._v(" "),t("ol",[t("li",[a._v("매개변수로 받은 값 이외의 외부 변수는 수정하거나 참조해서도 안됨")])]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" z "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 함수 외부 변수 z를 참조했기 때문에 순수 함수가 아니다.")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("무언가를 반환해야 함")])]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// a와 b를 더했지만 아무것도 반환하지 않았으므로 순수 함수가 아니다.")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("같은 입력 값을 넣었을 때 항상 같은 출력 값을 반환")])]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1, 2를 입력하면 항상 3이라는 결과가 나오는 순수함수")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"why-순수-함수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-순수-함수","aria-hidden":"true"}},[a._v("#")]),a._v(" Why 순수 함수?")]),a._v(" "),t("blockquote",[t("p",[a._v("외부 변수를 참조하는 순수하지 않은 함수는\n언제든지 외부 변수가 변할 위험이 있기 때문에 부작용이 생길 수 있지만\n순수함수는 입력에 대한 출력이 보장되어있기 때문에 부작용이 없다.")])]),a._v(" "),t("h2",{attrs:{id:"_2-불변-immutable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-불변-immutable","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 불변 (Immutable)")])])},[],!1,null,null,null);s.default=r.exports}}]);