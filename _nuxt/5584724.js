(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{403:function(e,t,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(58).default)("7af71988",content,!0,{sourceMap:!1})},410:function(e,t,n){"use strict";n(403)},411:function(e,t,n){var o=n(57)(!1);o.push([e.i,".red[data-v-2c3bc546]{background:#df0000;background:linear-gradient(150deg,#e90000,#900505)}button[data-v-2c3bc546]{margin:0 auto}.new-user-image[data-v-2c3bc546]{width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:100%;background-color:hsla(0,0%,100%,.1);margin-bottom:1rem}.new-user-image span[data-v-2c3bc546]{font-size:2rem}.inputs-wrapper[data-v-2c3bc546]{margin:2rem 0;display:flex;flex-flow:column;align-items:center;justify-content:center}.icon[data-v-2c3bc546]{font-size:2rem;color:#fff;margin-bottom:.25rem}.container[data-v-2c3bc546]{width:100%;height:100%;display:flex;flex-flow:column;align-items:center;justify-content:center}p[data-v-2c3bc546]{color:hsla(0,0%,100%,.5);margin:1.8rem 0;font-size:1.3rem}",""]),e.exports=o},417:function(e,t,n){"use strict";n.r(t);var o={layout:"landing",data:function(){return{roomCode:null}},methods:{joinRoomLocal:function(){this.$router.push("/".concat(this.roomCode))}}},r=(n(410),n(35)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("span",{staticClass:"mdi mdi-set-center icon"}),e._v(" "),e._m(0),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.joinRoomLocal.apply(null,arguments)}}},[n("div",{staticClass:"inputs-wrapper",staticStyle:{margin:"3rem 0"}},[n("div",{ref:"newUserImage",staticClass:"new-user-image"},[n("span",{staticClass:"mdi mdi-jellyfish"})]),e._v(" "),n("div",{staticClass:"input-wrapper"},[n("label",[e._v("Room code*")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.roomCode,expression:"roomCode"}],attrs:{type:"text",placeholder:"Room code*",minlength:"6",maxlength:"6",required:""},domProps:{value:e.roomCode},on:{input:function(t){t.target.composing||(e.roomCode=t.target.value)}}})])]),e._v(" "),n("button",[e._v("Join")])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("span",{staticStyle:{"font-weight":"300"}},[e._v("Join")]),e._v("Room")])}],!1,null,"2c3bc546",null);t.default=component.exports}}]);