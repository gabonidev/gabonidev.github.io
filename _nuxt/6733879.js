(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{365:function(t,e,o){var content=o(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("dc86cc70",content,!0,{sourceMap:!1})},384:function(t,e,o){"use strict";o(365)},385:function(t,e,o){var n=o(57)(!1);n.push([t.i,".container[data-v-6f8185fb],.setup-bg[data-v-6f8185fb]{width:100%;max-width:100%;flex:1;display:flex}.setup-bg[data-v-6f8185fb]{flex-flow:column;align-items:center;justify-content:center;margin:0 auto;border-radius:1.5rem;background-color:rgba(2,1,5,.2);border:2px solid hsla(0,0%,100%,.1);-webkit-backdrop-filter:blur(40px);backdrop-filter:blur(40px);box-shadow:0 3rem 4rem rgba(0,0,0,.4);overflow:hidden;padding:2rem}h3[data-v-6f8185fb]{font-size:2rem;margin-bottom:2rem}.content[data-v-6f8185fb]{width:100%}.content[data-v-6f8185fb],.join[data-v-6f8185fb],.room-info[data-v-6f8185fb]{display:flex;align-items:center;justify-content:center}.join[data-v-6f8185fb],.room-info[data-v-6f8185fb]{flex-flow:column;width:50%;padding:2rem}.room-info[data-v-6f8185fb]{border-right:1px solid hsla(0,0%,100%,.1)}.room-info .thumbnail[data-v-6f8185fb]{width:200px;height:200px;background-color:rgba(22,25,46,.2);background-size:cover;background-position:50%;box-sizing:unset;border:1px solid #25242e;box-shadow:0 1rem 2rem rgba(0,0,0,.3);border-radius:.75rem;margin-bottom:1rem;display:flex;align-items:center;justify-content:center}.room-info .room-name[data-v-6f8185fb]{max-width:220px;text-align:center;line-height:1.6;margin-bottom:1rem}.room-info .online[data-v-6f8185fb]{display:flex;align-items:center;padding:.5rem 1rem;background:hsla(0,0%,100%,.07);border-radius:200px;line-height:1}.room-info .online span[data-v-6f8185fb]{font-size:1.5rem;margin-right:.5rem}.join-button[data-v-6f8185fb]{margin-top:1rem;margin-left:auto;margin-right:auto}.room-not-exist[data-v-6f8185fb]{display:flex;flex-flow:column;align-items:center;justify-content:center}.room-not-exist .alert-icon[data-v-6f8185fb]{font-size:4rem;color:#ffd001}.room-not-exist p[data-v-6f8185fb]{margin-top:.5rem;margin-bottom:3rem}",""]),t.exports=n},398:function(t,e,o){"use strict";o.r(e);o(47),o(36),o(46),o(13),o(59),o(29),o(60);var n=o(20),r=o(37);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:function(){return{nickName:null}},computed:l({},Object(r.c)(["loggedIn","room"])),methods:l({},Object(r.b)(["joinRoom","fetchRoom"])),created:function(){}},f=(o(384),o(35)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"setup-bg"},[o("h3",[t._v("Join Room")]),t._v(" "),t.room.started?o("div",{staticClass:"content"},[o("div",{staticClass:"room-info"},[o("div",{staticClass:"thumbnail",style:"background-image: url("+t.room.imageLink+")"}),t._v(" "),o("p",{staticClass:"room-name"},[t._v(t._s(t.room.name))]),t._v(" "),o("p",{staticClass:"online"},[o("span",{staticClass:"mdi mdi-access-point"}),t._v(t._s(t.room.participants.length)+" online\n        ")])]),t._v(" "),o("div",{staticClass:"join"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.joinRoom(t.nickName)}}},[t.loggedIn?t._e():o("div",{staticClass:"input-wrapper"},[o("label",[t._v("Nickname*")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.nickName,expression:"nickName"}],attrs:{type:"text",placeholder:"Nickname*"},domProps:{value:t.nickName},on:{input:function(e){e.target.composing||(t.nickName=e.target.value)}}})]),t._v(" "),t._m(0)])])]):o("div",{staticClass:"content"},[o("div",{staticClass:"room-not-exist"},[o("span",{staticClass:"mdi mdi-alert alert-icon"}),t._v(" "),o("p",[t._v("Room hasn't started or has ended")]),t._v(" "),o("button",{on:{click:function(e){return t.$router.push("/")}}},[o("span",{staticClass:"mdi mdi-home"}),t._v("Home\n        ")])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"join-button"},[o("span",{staticClass:"mdi mdi-set-center"}),t._v("Join\n          ")])}],!1,null,"6f8185fb",null);e.default=component.exports}}]);