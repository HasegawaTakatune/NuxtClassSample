(window.webpackJsonp=window.webpackJsonp||[]).push([[24,12,13],{283:function(e,t,n){"use strict";n.r(t);var r=n(27),l=n(1).default.extend({name:"InputFrame",props:{id:{type:String,required:!1},value:{type:String|Object,default:function(){return null},required:!1},label:{type:String,default:"",required:!1},type:{type:String,default:"text",required:!1},options:{type:Array,default:function(){return[]},required:!1}},data:function(){return{originValue:null}},watch:{value:function(e,t){this.originValue=e}},created:function(){this.originValue=this.value},methods:{IsObject:function(){return"object"===Object(r.a)(this.originValue)}}}),o=n(23),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.id}},[e._v(e._s(e.label)+" ")]),e._v(" "),"text"===e.type&&e.IsObject()?n("input",{directives:[{name:"model",rawName:"v-model",value:e.originValue.text,expression:"originValue.text"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{type:"text"},domProps:{value:e.originValue.text},on:{input:function(t){t.target.composing||e.$set(e.originValue,"text",t.target.value)}}}):"text"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.originValue,expression:"originValue"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{type:"text"},domProps:{value:e.originValue},on:{input:function(t){t.target.composing||(e.originValue=t.target.value)}}}):"checkbox"===e.type?n("div",e._l(e.originValue,(function(t,r){return n("span",{key:r,staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"val.checked"}],attrs:{type:"checkbox",id:t.id},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(n){var r=t.checked,l=n.target,o=!!l.checked;if(Array.isArray(r)){var c=e._i(r,null);l.checked?c<0&&e.$set(t,"checked",r.concat([null])):c>-1&&e.$set(t,"checked",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(t,"checked",o)}}}),e._v(" "),n("label",{attrs:{for:t.id}},[e._v(e._s(t.label)+" ")])])})),0):"select"===e.type?n("div",[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"mb-3 xl:w-96"},[e.IsObject()?n("select",{directives:[{name:"model",rawName:"v-model",value:e.originValue.name,expression:"originValue.name"}],staticClass:"\n            form-select\n            appearance-none\n            block\n            w-full\n            px-3\n            py-1.5\n            text-base\n            font-normal\n            text-gray-700\n            bg-white bg-clip-padding bg-no-repeat\n            border border-solid border-gray-300\n            rounded\n            transition\n            ease-in-out\n            m-0\n            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none\n          ",attrs:{"aria-label":"Default select example"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.originValue,"name",t.target.multiple?n:n[0])}}},e._l(e.options,(function(option,t){return n("option",{key:t,domProps:{selected:t===e.originValue.id}},[e._v(e._s(option))])})),0):n("select",{directives:[{name:"model",rawName:"v-model",value:e.originValue,expression:"originValue"}],staticClass:"\n            form-select\n            appearance-none\n            block\n            w-full\n            px-3\n            py-1.5\n            text-base\n            font-normal\n            text-gray-700\n            bg-white bg-clip-padding bg-no-repeat\n            border border-solid border-gray-300\n            rounded\n            transition\n            ease-in-out\n            m-0\n            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none\n          ",attrs:{"aria-label":"Default select example"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.originValue=t.target.multiple?n:n[0]}}},e._l(e.options,(function(option,t){return n("option",{key:t},[e._v(e._s(option))])})),0)])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},291:function(e,t,n){"use strict";n.r(t);var r=n(1),l=n(283),o=r.default.extend({components:{InputFrame:l.default},name:"Card",props:{inputText:{type:String,required:!0},inputCheckbox:{type:Array,required:!0},inputSelect:{type:String,required:!0},inputObject:{type:Object,required:!0}},data:function(){return{options:["スコティッシュフォールド","アメリカンショートヘア","ラグドール","ブリティッシュショートヘア","ロシアンブルー","マンチカン","ベンガル猫","シャム猫"],reactiveObj:null}}}),c=n(23),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},[e._m(0),e._v(" "),n("input-frame",{attrs:{type:"text",label:"Inpu Text",value:e.inputText}}),e._v(" "),n("br"),e._v(" "),n("input-frame",{attrs:{type:"checkbox",label:"Inpu Checkbox",value:e.inputCheckbox}}),e._v(" "),n("br"),e._v(" "),n("input-frame",{attrs:{type:"select",label:"Input Select",value:e.inputSelect,options:e.options}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("p",[e._v("Objects")]),e._v(" "),n("input-frame",{attrs:{type:"text",label:"Inpu Text",value:e.inputObject}}),e._v(" "),n("br"),e._v(" "),n("input-frame",{attrs:{type:"select",label:"Input Select",value:e.inputObject.select,options:e.options}}),e._v(" "),n("br")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h5",{staticClass:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},[e._v("Component")])])}],!1,null,null,null);t.default=component.exports},316:function(e,t,n){"use strict";n.r(t);n(136),n(47),n(108);var r=n(1),l=n(291),o=r.default.extend({layout:"default",components:{Card:l.default},name:"Prop",computed:{ShowInputCheckbox:function(){var e;return null===(e=this.inputCheckbox)||void 0===e?void 0:e.map((function(e){return" ".concat(e.label,": ").concat(e.checked," ")})).join(" ")}},data:function(){return{inputText:"Default text",inputCheckbox:[],inputSelected:"ブリティッシュショートヘア",inputObject:{text:"Default object",select:{id:3,name:"ブリティッシュショートヘア"}}}},mounted:function(){for(var i=1;i<5;i++)this.inputCheckbox.push({id:"value".concat(i),label:"Value".concat(i),checked:i%2==0})}}),c=n(23),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"m-6 p-4 border-solid border-2 border-gray-600 rounded-md"},[n("h2",{staticClass:"font-bold text-purple-900"},[e._v("Prop")]),e._v(" "),n("card",{attrs:{"input-text":e.inputText,inputCheckbox:e.inputCheckbox,inputSelect:e.inputSelected,inputObject:e.inputObject}})],1),e._v(" "),n("div",{staticClass:"ml-8"},[n("h5",{staticClass:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},[e._v("Parent values")]),e._v("\n    Text: "+e._s(e.inputText)+"\n    "),n("br"),e._v("\n    Checkbox: "+e._s(e.ShowInputCheckbox)+"\n    "),n("br"),e._v("\n    Select: "+e._s(e.inputSelected)+"\n    "),n("br"),e._v(" "),n("br"),e._v("\n    Object Text: "+e._s(e.inputObject.text)+"\n    "),n("br"),e._v("\n    Object Select: "+e._s(e.inputObject.select)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);