webpackJsonp([9],{FpEw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"typography",components:{NaviToolbar:a("avjN").a},data:function(){return{propsText:"",lgAlignRadio:"",mdAlignRadio:"",xsAlignRadio:"",weightsRadio:"",sizesRadio:"",italic:"",transformSelected:"",truncate:"",noWrap:"",lgAligns:["text-lg-right","text-lg-center","text-lg-left",""],mdAligns:["text-md-right","text-md-center","text-md-left",""],xsAligns:["text-xs-right","text-xs-center","text-xs-left",""],weightsProps:["font-weight-thin","font-weight-light","font-weight-regular","font-weight-medium","font-weight-bold","font-weight-black"],sizesProps:["display-4","display-3","display-2","display-1","headline","title","subheading","body-2","body-1","caption"],transforms:["text-capitalize","text-lowercase","text-uppercase","text-none"]}},methods:{refreshProps:function(){this.propsText=this.lgAlignRadio+" "+this.mdAlignRadio+" "+this.xsAlignRadio+"  "+this.weightsRadio+" "+this.sizesRadio+" "+this.italic+"  "+this.transformSelected+" "+this.noWrap+" "+this.truncate,console.log(this.propsText)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-container",{attrs:{fluid:"fluid"}},[a("v-layout",{attrs:{wrap:"wrap"}},[a("v-flex",{attrs:{xs12:"xs12",md6:"md6",lg6:"lg6"}},[a("code",{staticClass:"title text-xs-center"},[t._v('h1( class="'+t._s(t.propsText)+'" ) ')]),a("h1",{class:t.propsText},[t._v("Alinhamento e Tipografia dos textos.")])])],1),a("v-layout",{attrs:{wrap:"wrap"}},[a("v-flex",{attrs:{md2:"md2",xs4:"xs4"}},[a("v-radio-group",{attrs:{column:"column"},on:{click:t.refreshProps},model:{value:t.lgAlignRadio,callback:function(e){t.lgAlignRadio=e},expression:"lgAlignRadio"}},t._l(t.lgAligns,function(t){return a("v-radio",{key:t,attrs:{label:""===t?"Nothing":t,value:t}})}),1)],1),a("v-flex",{attrs:{md2:"md2",xs4:"xs4"}},[a("v-radio-group",{attrs:{column:"column"},on:{click:t.refreshProps},model:{value:t.mdAlignRadio,callback:function(e){t.mdAlignRadio=e},expression:"mdAlignRadio"}},t._l(t.mdAligns,function(t){return a("v-radio",{key:t,attrs:{label:""===t?"Nothing":t,value:t}})}),1)],1),a("v-flex",{attrs:{md2:"md2",xs4:"xs4"}},[a("v-radio-group",{attrs:{column:"column"},on:{click:t.refreshProps},model:{value:t.xsAlignRadio,callback:function(e){t.xsAlignRadio=e},expression:"xsAlignRadio"}},t._l(t.xsAligns,function(t){return a("v-radio",{key:t,attrs:{label:""===t?"Nothing":t,value:t}})}),1)],1),a("v-flex",{attrs:{md2:"md2",xs4:"xs4"}},[a("v-radio-group",{attrs:{column:"column"},on:{click:t.refreshProps},model:{value:t.weightsRadio,callback:function(e){t.weightsRadio=e},expression:"weightsRadio"}},t._l(t.weightsProps,function(t){return a("v-radio",{key:t.id,attrs:{label:""===t?"Nothing":t,value:t}})}),1)],1),a("v-flex",{attrs:{md2:"md2",xs4:"xs4"}},[a("v-radio-group",{attrs:{column:"column"},on:{click:t.refreshProps},model:{value:t.sizesRadio,callback:function(e){t.sizesRadio=e},expression:"sizesRadio"}},t._l(t.sizesProps,function(t){return a("v-radio",{key:t.id,attrs:{label:""===t?"Nothing":t,value:t}})}),1)],1),a("v-flex",{attrs:{md2:"md2",xs4:"xs4"},on:{click:t.refreshProps}},[a("v-switch",{attrs:{label:"italic",value:"font-italic"},model:{value:t.italic,callback:function(e){t.italic=e},expression:"italic"}}),a("v-switch",{attrs:{label:"text-no-wrap",value:"text-no-wrap"},model:{value:t.noWrap,callback:function(e){t.noWrap=e},expression:"noWrap"}}),a("v-switch",{attrs:{label:"text-truncate",value:"text-truncate"},model:{value:t.truncate,callback:function(e){t.truncate=e},expression:"truncate"}}),a("v-radio-group",{model:{value:t.transformSelected,callback:function(e){t.transformSelected=e},expression:"transformSelected"}},t._l(t.transforms,function(t){return a("v-radio",{key:t,attrs:{label:t,value:t}})}),1)],1)],1),a("v-layout",{staticClass:"display-1",attrs:{wrap:"wrap"}},[a("v-flex",[a("blockquote",{staticClass:"blockquote"},[t._v("Tag blockquote, mais class blockquote, com "),a("kbd",[t._v("tag kbd e ")]),a("code",[t._v("tag code")])])]),a("v-flex",[a("span",[t._v("Alterando cores de texto com a  "),a("span",{staticClass:"red--text"},[t._v("classe red--text ")])]),a("span",[t._v("e texto destacado com a "),a("strong",[t._v("Tag strong, "),a("strong",{staticClass:"indigo--text text--darken"},[t._v("e strong com classe de cores ")])])])])],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(s,o,!1,function(t){a("XTuU")},"data-v-06bfa30d",null);e.default=i.exports},XTuU:function(t,e){}});
//# sourceMappingURL=9.bb040c38ffa80b6f65c6.js.map