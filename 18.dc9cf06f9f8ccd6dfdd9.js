(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{LP69:function(l,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return s});var t=e("CcnG"),u=e("Ip0R"),i=(e("gIcY"),e("mGh+"),t.qb({encapsulation:2,styles:[],data:{}}));function s(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,5,"label",[["class","jigsaw-checkbox-wrapper"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component._$onCheckboxClick(e)&&t),t},null,null)),(l()(),t.sb(1,0,null,null,2,"span",[],null,null,null,null,null)),t.Gb(512,null,u.w,u.x,[t.t,t.u,t.l,t.F]),t.rb(3,278528,null,0,u.i,[u.w],{ngClass:[0,"ngClass"]},null),(l()(),t.sb(4,0,null,null,1,"span",[["class","jigsaw-checkbox-label"]],null,null,null,null,null)),t.Bb(null,0)],function(l,n){l(n,3,0,n.component._$checkboxClass)},null)}},b1mY:function(l,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"d",function(){return c}),e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r});var t=e("CcnG"),u=(e("cVNz"),e("Ip0R")),i=(e("gIcY"),t.qb({encapsulation:2,styles:[],data:{}}));function s(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,0,"div",[["class","jigsaw-list-disabled"]],null,null,null,null,null))],null,null)}function c(l){return t.Lb(0,[(l()(),t.hb(16777216,null,null,1,null,s)),t.rb(1,16384,null,0,u.k,[t.R,t.N],{ngIf:[0,"ngIf"]},null),t.Bb(null,0)],function(l,n){l(n,1,0,n.component.disabled)},null)}var a=t.qb({encapsulation:2,styles:[],data:{}});function o(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,6,"div",[["class","jigsaw-list-option-wrapper"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,4,"div",[["class","jigsaw-list-option-title-box"]],null,null,null,null,null)),(l()(),t.sb(2,0,null,null,1,"div",[["class","jigsaw-list-option-title"]],null,null,null,null,null)),t.Bb(null,0),(l()(),t.sb(4,0,null,null,1,"div",[["class","jigsaw-list-option-sub-title"]],null,null,null,null,null)),t.Bb(null,1),t.Bb(null,2)],null,null)}function b(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,0,"span",[["class","jigsaw-list-option-separator-line"]],null,null,null,null,null))],null,null)}function r(l){return t.Lb(0,[(l()(),t.hb(16777216,null,null,1,null,o)),t.rb(1,16384,null,0,u.k,[t.R,t.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.hb(0,[["optionSeparator",2]],null,0,null,b))],function(l,n){l(n,1,0,n.component.value,t.Cb(n,2))},null)}},"mGh+":function(l,n,e){"use strict";e.d(n,"a",function(){return a});var t=e("mrSG"),u=e("CcnG"),i=e("I3jX"),s=e("c8/S"),c=e("qoVZ"),a=function(l){function n(n,e){var t=l.call(this)||this;return t._renderer=n,t._elementRef=e,t._enableIndeterminate=!1,t._checked=s.a.unchecked,t.checkedChange=new u.n,t.change=t.checkedChange,t._disabled=!1,t.valid=!0,t._valueCandidates=[s.a.unchecked,s.a.checked],t._propagateChange=function(){},t}return t.c(n,l),Object.defineProperty(n.prototype,"enableIndeterminate",{get:function(){return this._enableIndeterminate},set:function(l){this._enableIndeterminate=l,this._valueCandidates=[s.a.unchecked,s.a.checked],l&&this._valueCandidates.push(s.a.indeterminate)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"checked",{get:function(){return this._checked},set:function(l){this.writeValue(l)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(l){this._disabled=l,this._setCheckBoxClass()},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this._setCheckBoxClass()},n.prototype.ngAfterContentInit=function(){var l=this._elementRef.nativeElement.querySelector(".jigsaw-checkbox-label");""===l.innerText.trim()&&this._renderer.setStyle(l,"padding","0")},n.prototype._toggle=function(){var l=this._valueCandidates.indexOf(this._checked);this._checked=-1==l?this._valueCandidates[1]:this._valueCandidates[(l+1)%this._valueCandidates.length],this.checkedChange.emit(this._checked),this._propagateChange(this._checked)},n.prototype._fixCheckValue=function(l){return c.a.isUndefined(l)?s.a.unchecked:"number"==typeof l?l>s.a.indeterminate?s.a.checked:l:l?s.a.checked:s.a.unchecked},n.prototype._$onCheckboxClick=function(l){l.stopPropagation(),l.preventDefault(),this.disabled||(this._toggle(),this._setCheckBoxClass())},n.prototype._setCheckBoxClass=function(){this._$checkboxClass={"jigsaw-checkbox":"true","jigsaw-checkbox-checked":this._checked,"jigsaw-checkbox-indeterminate":this._checked===s.a.indeterminate,"jigsaw-checkbox-disabled":this.disabled}},n.prototype.writeValue=function(l){this._checked=this._fixCheckValue(l),this._setCheckBoxClass()},n.prototype.registerOnChange=function(l){this._propagateChange=l},n.prototype.registerOnTouched=function(l){},n}(i.a)},sWD5:function(l,n,e){"use strict";e.d(n,"a",function(){return t}),e("mGh+");var t=function(){return function(){}}()},tPSH:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("SzOP"),i=e("pMnS"),s=e("b1mY"),c=e("cVNz"),a=e("Ip0R"),o=e("LP69"),b=e("gIcY"),r=e("mGh+"),d=e("KyW8"),h=e("fd8S"),g=e("Ln9g"),p=e("9qYQ"),m=e("DPdp"),f=e("cys3"),C=t.qb({encapsulation:0,styles:[[".goods-box[_ngcontent-%COMP%]{height:40px}.goods-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:inline-block;width:40px;height:40px;vertical-align:middle;margin:0 4px;line-height:40px;text-align:center;font-size:26px}.goods-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:210px;height:40px;overflow:hidden;line-height:1.5;padding:3px 0 4px}"]],data:{}});function k(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"j-list-option",[],[[2,"jigsaw-list-option",null],[2,"jigsaw-list-option-active",null],[2,"jigsaw-list-option-disabled",null],[2,"jigsaw-list-option-separator",null]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,1)._$handleClick()&&u),u},s.c,s.b)),t.rb(1,245760,[[1,4]],0,c.c,[t.h,t.l],{value:[0,"value"]},null),(l()(),t.Jb(2,2,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,0,0,!0,t.Cb(n,1).selected,t.Cb(n,1).disabled,!t.Cb(n,1).value),l(n,2,0,n.context.$implicit.name)})}function v(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,0,"span",[["class","fa fa-angle-right"]],null,null,null,null,null))],null,null)}function w(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,7,"j-list-option",[],[[2,"jigsaw-list-option",null],[2,"jigsaw-list-option-active",null],[2,"jigsaw-list-option-disabled",null],[2,"jigsaw-list-option-separator",null]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,1)._$handleClick()&&u),u},s.c,s.b)),t.rb(1,245760,[[2,4]],0,c.c,[t.h,t.l],{value:[0,"value"]},null),(l()(),t.sb(2,0,null,0,1,"span",[["j-title",""]],null,null,null,null,null)),(l()(),t.Jb(3,null,["",""])),(l()(),t.sb(4,0,null,1,3,"div",[["j-sub-title",""]],null,null,null,null,null)),(l()(),t.Jb(5,null,[""," "])),(l()(),t.hb(16777216,null,null,1,null,v)),t.rb(7,16384,null,0,a.k,[t.R,t.N],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.context.$implicit),l(n,7,0,n.context.$implicit.subMenu)},function(l,n){l(n,0,0,!0,t.Cb(n,1).selected,t.Cb(n,1).disabled,!t.Cb(n,1).value),l(n,3,0,n.context.$implicit.title),l(n,5,0,n.context.$implicit.subTitle)})}function j(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,8,"j-list-option",[],[[2,"jigsaw-list-option",null],[2,"jigsaw-list-option-active",null],[2,"jigsaw-list-option-disabled",null],[2,"jigsaw-list-option-separator",null]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,1)._$handleClick()&&u),u},s.c,s.b)),t.rb(1,245760,[[3,4],["listItem",4]],0,c.c,[t.h,t.l],{value:[0,"value"],disabled:[1,"disabled"]},null),(l()(),t.sb(2,0,null,2,6,"div",[["class","goods-box"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,2,"j-checkbox",[],[[4,"width",null],[2,"jigsaw-checkbox-host",null],[2,"jigsaw-checkbox-error",null]],[[null,"checkedChange"]],function(l,n,e){var u=!0;return"checkedChange"===n&&(u=!1!==(t.Cb(l,1).selected=e)&&u),"checkedChange"===n&&(u=!1!==t.Cb(l.parent,38).update(l.context.$implicit,e)&&u),u},o.b,o.a)),t.Gb(5120,null,b.h,function(l){return[l]},[r.a]),t.rb(5,1294336,null,0,r.a,[t.F,t.l],{checked:[0,"checked"],disabled:[1,"disabled"]},{checkedChange:"checkedChange"}),(l()(),t.sb(6,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),t.sb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit,n.context.$implicit.disabled),l(n,5,0,t.Cb(n,1).selected,n.context.$implicit.disabled)},function(l,n){l(n,0,0,!0,t.Cb(n,1).selected,t.Cb(n,1).disabled,!t.Cb(n,1).value),l(n,3,0,t.Cb(n,5).width,!0,!t.Cb(n,5).valid),l(n,6,0,t.ub(1,"logo fa fa-",n.context.$implicit.logo,"")),l(n,8,0,n.context.$implicit.desc)})}function I(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,8,"j-list-option",[],[[2,"jigsaw-list-option",null],[2,"jigsaw-list-option-active",null],[2,"jigsaw-list-option-disabled",null],[2,"jigsaw-list-option-separator",null]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,1)._$handleClick()&&u),u},s.c,s.b)),t.rb(1,245760,[[5,4],["listItem",4]],0,c.c,[t.h,t.l],{value:[0,"value"],disabled:[1,"disabled"]},null),(l()(),t.sb(2,0,null,2,6,"div",[["class","goods-box"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,2,"j-checkbox",[],[[4,"width",null],[2,"jigsaw-checkbox-host",null],[2,"jigsaw-checkbox-error",null]],[[null,"checkedChange"]],function(l,n,e){var u=!0;return"checkedChange"===n&&(u=!1!==(t.Cb(l,1).selected=e)&&u),u},o.b,o.a)),t.Gb(5120,null,b.h,function(l){return[l]},[r.a]),t.rb(5,1294336,null,0,r.a,[t.F,t.l],{checked:[0,"checked"],disabled:[1,"disabled"]},{checkedChange:"checkedChange"}),(l()(),t.sb(6,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null)),(l()(),t.sb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit,n.context.$implicit.disabled),l(n,5,0,t.Cb(n,1).selected,n.context.$implicit.disabled)},function(l,n){l(n,0,0,!0,t.Cb(n,1).selected,t.Cb(n,1).disabled,!t.Cb(n,1).value),l(n,3,0,t.Cb(n,5).width,!0,!t.Cb(n,5).valid),l(n,6,0,t.ub(1,"logo fa fa-",n.context.$implicit.logo,"")),l(n,8,0,n.context.$implicit.desc)})}function x(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,5,"j-list",[["trackItemBy","name"]],[[2,"jigsaw-list",null],[2,"jigsaw-list-error",null],[4,"width",null],[4,"height",null]],[[null,"selectedItemsChange"]],function(l,n,e){var t=!0;return"selectedItemsChange"===n&&(t=!1!==(l.component.selectedItems4=e)&&t),t},s.d,s.a)),t.Gb(5120,null,b.h,function(l){return[l]},[c.a]),t.rb(2,1294336,null,1,c.a,[],{trackItemBy:[0,"trackItemBy"],multipleSelect:[1,"multipleSelect"],selectedItems:[2,"selectedItems"]},{selectedItemsChange:"selectedItemsChange"}),t.Hb(603979776,5,{_items:1}),(l()(),t.hb(16777216,[[4,2]],0,1,null,I)),t.rb(5,278528,null,0,a.j,[t.R,t.N,t.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,2,0,"name",!0,e.selectedItems4),l(n,5,0,e.goodsList)},function(l,n){l(n,0,0,!0,!t.Cb(n,2).valid,t.Cb(n,2).width,t.Cb(n,2).height)})}function _(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,2,"j-list-option",[],[[2,"jigsaw-list-option",null],[2,"jigsaw-list-option-active",null],[2,"jigsaw-list-option-disabled",null],[2,"jigsaw-list-option-separator",null]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,1)._$handleClick()&&u),u},s.c,s.b)),t.rb(1,245760,[[6,4]],0,c.c,[t.h,t.l],{value:[0,"value"]},null),(l()(),t.Jb(2,2,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,0,0,!0,t.Cb(n,1).selected,t.Cb(n,1).disabled,!t.Cb(n,1).value),l(n,2,0,n.context.$implicit.name)})}function y(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"jigsaw-demo-description",[],null,null,null,d.b,d.a)),t.rb(1,114688,null,0,h.a,[],{content:[0,"content"],summary:[1,"summary"]},null),(l()(),t.sb(2,0,null,null,64,"div",[["class","live-demo-wrap"]],null,null,null,null,null)),(l()(),t.sb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["List"])),(l()(),t.sb(5,0,null,null,26,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t.sb(6,0,null,null,12,"div",[["class","demo-1 live-demo live-demo-block"]],null,null,null,null,null)),(l()(),t.sb(7,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u57fa\u7840\u7528\u6cd5"])),(l()(),t.sb(9,0,null,null,5,"j-list",[["trackItemBy","name"],["width","200"]],[[2,"jigsaw-list",null],[2,"jigsaw-list-error",null],[4,"width",null],[4,"height",null]],[[null,"selectedItemsChange"]],function(l,n,e){var t=!0;return"selectedItemsChange"===n&&(t=!1!==l.component.handleSelect(e)&&t),t},s.d,s.a)),t.Gb(5120,null,b.h,function(l){return[l]},[c.a]),t.rb(11,1294336,null,1,c.a,[],{width:[0,"width"],trackItemBy:[1,"trackItemBy"]},{selectedItemsChange:"selectedItemsChange"}),t.Hb(603979776,1,{_items:1}),(l()(),t.hb(16777216,null,0,1,null,k)),t.rb(14,278528,null,0,a.j,[t.R,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(15,0,null,null,3,"p",[["class","message"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u9009\u4e2d\u7684\u6761\u76ee\u662f: "])),(l()(),t.sb(17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(18,null,["",""])),(l()(),t.sb(19,0,null,null,12,"div",[["class","demo-2 live-demo live-demo-block"]],null,null,null,null,null)),(l()(),t.sb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u4f2a\u88c5\u6210\u83dc\u5355"])),(l()(),t.sb(22,0,null,null,5,"j-list",[["trackItemBy","title"],["width","200"]],[[2,"jigsaw-list",null],[2,"jigsaw-list-error",null],[4,"width",null],[4,"height",null]],[[null,"selectedItemsChange"]],function(l,n,e){var t=!0;return"selectedItemsChange"===n&&(t=!1!==l.component.handleSelect2(e)&&t),t},s.d,s.a)),t.Gb(5120,null,b.h,function(l){return[l]},[c.a]),t.rb(24,1294336,null,1,c.a,[],{width:[0,"width"],trackItemBy:[1,"trackItemBy"]},{selectedItemsChange:"selectedItemsChange"}),t.Hb(603979776,2,{_items:1}),(l()(),t.hb(16777216,null,0,1,null,w)),t.rb(27,278528,null,0,a.j,[t.R,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(28,0,null,null,3,"p",[["class","message"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u9009\u4e2d\u7684\u83dc\u5355\u662f: "])),(l()(),t.sb(30,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(31,null,["",""])),(l()(),t.sb(32,0,null,null,34,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),t.sb(33,0,null,null,12,"div",[["class","demo-3 live-demo live-demo-block"]],null,null,null,null,null)),(l()(),t.sb(34,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u591a\u7ec4\u4ef6\u590d\u5408\u7528\u6cd5"])),(l()(),t.sb(36,0,null,null,5,"j-list",[["trackItemBy","name"]],[[2,"jigsaw-list",null],[2,"jigsaw-list-error",null],[4,"width",null],[4,"height",null]],[[null,"selectedItemsChange"]],function(l,n,e){var t=!0;return"selectedItemsChange"===n&&(t=!1!==l.component.handleSelect3(e)&&t),t},s.d,s.a)),t.Gb(5120,null,b.h,function(l){return[l]},[c.a]),t.rb(38,1294336,[["listGroup",4]],1,c.a,[],{trackItemBy:[0,"trackItemBy"],multipleSelect:[1,"multipleSelect"],selectedItems:[2,"selectedItems"]},{selectedItemsChange:"selectedItemsChange"}),t.Hb(603979776,3,{_items:1}),(l()(),t.hb(16777216,null,0,1,null,j)),t.rb(41,278528,null,0,a.j,[t.R,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(42,0,null,null,3,"p",[["class","message"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u9009\u4e2d\u7684\u83dc\u5355\u662f: "])),(l()(),t.sb(44,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(45,null,["",""])),(l()(),t.sb(46,0,null,null,7,"div",[["class","demo-4 live-demo live-demo-block"]],null,null,null,null,null)),(l()(),t.sb(47,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u4e0ecombo-select\u7ec4\u5408\u4f7f\u7528"])),(l()(),t.sb(49,0,null,null,4,"j-combo-select",[["labelField","name"],["maxWidth","500"]],[[4,"min-width",null],[2,"jigsaw-combo-select-host",null],[2,"jigsaw-combo-select-error",null]],[[null,"valueChange"]],function(l,n,e){var t=!0;return"valueChange"===n&&(t=!1!==(l.component.selectedItems4=e)&&t),t},g.b,g.a)),t.Gb(5120,null,b.h,function(l){return[l]},[p.a]),t.rb(51,4440064,null,1,p.a,[t.F,t.l,m.e],{value:[0,"value"],labelField:[1,"labelField"],maxWidth:[2,"maxWidth"],clearable:[3,"clearable"]},{valueChange:"valueChange"}),t.Hb(603979776,4,{_$contentTemplateRef:0}),(l()(),t.hb(0,[[4,2]],0,0,null,x)),(l()(),t.sb(54,0,null,null,12,"div",[["class","demo-5 live-demo live-demo-block"]],null,null,null,null,null)),(l()(),t.sb(55,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["disabled\u5c5e\u6027\u4e3atrue"])),(l()(),t.sb(57,0,null,null,5,"j-list",[["trackItemBy","name"],["width","200"]],[[2,"jigsaw-list",null],[2,"jigsaw-list-error",null],[4,"width",null],[4,"height",null]],[[null,"selectedItemsChange"]],function(l,n,e){var t=!0;return"selectedItemsChange"===n&&(t=!1!==l.component.handleSelect(e)&&t),t},s.d,s.a)),t.Gb(5120,null,b.h,function(l){return[l]},[c.a]),t.rb(59,1294336,null,1,c.a,[],{width:[0,"width"],trackItemBy:[1,"trackItemBy"],disabled:[2,"disabled"]},{selectedItemsChange:"selectedItemsChange"}),t.Hb(603979776,6,{_items:1}),(l()(),t.hb(16777216,null,0,1,null,_)),t.rb(62,278528,null,0,a.j,[t.R,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(63,0,null,null,3,"p",[["class","message"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u9009\u4e2d\u7684\u6761\u76ee\u662f: "])),(l()(),t.sb(65,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(66,null,["",""]))],function(l,n){var e=n.component;l(n,1,0,e.description,e.summary),l(n,11,0,"200","name"),l(n,14,0,e.goodsList),l(n,24,0,"200","title"),l(n,27,0,e.titles),l(n,38,0,"name",!0,e.selectedItems3),l(n,41,0,e.goodsList),l(n,51,0,e.selectedItems4,"name","500",!0),l(n,59,0,"200","name",!0),l(n,62,0,e.goodsList)},function(l,n){var e=n.component;l(n,9,0,!0,!t.Cb(n,11).valid,t.Cb(n,11).width,t.Cb(n,11).height),l(n,18,0,e.selectedItems1),l(n,22,0,!0,!t.Cb(n,24).valid,t.Cb(n,24).width,t.Cb(n,24).height),l(n,31,0,e.selectedItems2),l(n,36,0,!0,!t.Cb(n,38).valid,t.Cb(n,38).width,t.Cb(n,38).height),l(n,45,0,e.selectedItemsStr3),l(n,49,0,t.Cb(n,51).width,!0,!t.Cb(n,51).valid),l(n,57,0,!0,!t.Cb(n,59).valid,t.Cb(n,59).width,t.Cb(n,59).height),l(n,66,0,e.selectedItems1)})}function $(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"ng-component",[],null,null,null,y,C)),t.rb(1,49152,null,0,f.a,[],null,null)],null,null)}var B=t.ob("ng-component",f.a,$,{},{},[]),J=e("ZYCi"),L=e("sWD5"),O=e("qJnk"),A=e("rPGS"),G=e("5ME4"),S=e("bse0"),F=e("lYC7"),P=e("W37J"),R=function(){return function(){}}();e.d(n,"ListDemoModuleNgFactory",function(){return N});var N=t.pb(u.a,[],function(l){return t.zb([t.Ab(512,t.j,t.cb,[[8,[i.a,B]],[3,t.j],t.y]),t.Ab(4608,a.m,a.l,[t.v,[2,a.B]]),t.Ab(4608,b.s,b.s,[]),t.Ab(4608,m.e,m.e,[t.j,t.A,[2,J.l],[2,J.a]]),t.Ab(1073742336,J.o,J.o,[[2,J.t],[2,J.l]]),t.Ab(1073742336,a.b,a.b,[]),t.Ab(1073742336,b.r,b.r,[]),t.Ab(1073742336,b.e,b.e,[]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,L.a,L.a,[]),t.Ab(1073742336,O.b,O.b,[]),t.Ab(1073742336,A.b,A.b,[]),t.Ab(1073742336,G.b,G.b,[]),t.Ab(1073742336,S.c,S.c,[]),t.Ab(1073742336,F.a,F.a,[]),t.Ab(1073742336,P.b,P.b,[]),t.Ab(1073742336,h.b,h.b,[]),t.Ab(1073742336,R,R,[]),t.Ab(1073742336,u.a,u.a,[]),t.Ab(1024,J.j,function(){return[[{path:"full",component:f.a}]]},[])])})}}]);