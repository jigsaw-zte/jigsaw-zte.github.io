(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"9+SE":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t("CcnG"),u=function(){function n(){this.valid=!0,this.size="default",this._checked=!1,this.checkedChange=new e.n,this.change=this.checkedChange,this._disabled=!1,this._propagateChange=function(){}}return Object.defineProperty(n.prototype,"checked",{get:function(){return this._checked},set:function(n){this.writeValue(n),this._propagateChange(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=n,this._setSwitchClass()},enumerable:!0,configurable:!0}),n.prototype._$switchClick=function(){this.disabled||(this.checked=!this.checked,this.checkedChange.emit(this.checked),this._propagateChange(this.checked))},n.prototype._setSwitchClass=function(){this._$switchClass={"jigsaw-switch":"true","jigsaw-switch-small":"small"===this.size,"jigsaw-switch-checked":this.checked,"jigsaw-switch-disabled":this.disabled}},n.prototype._setInnerValue=function(){this._$content=this.checked?this.onLabel:this.offLabel},n.prototype.ngOnInit=function(){this._setSwitchClass(),this._setInnerValue()},n.prototype.writeValue=function(n){this._checked=!!n,this._setSwitchClass(),this._setInnerValue()},n.prototype.registerOnChange=function(n){this._propagateChange=n},n.prototype.registerOnTouched=function(n){},n}()},HdtV:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("6rrs"),i=t("pMnS"),s=t("KyW8"),c=t("fd8S"),a=t("Vt3L"),r=t("gIcY"),o=t("9+SE"),h=t("9qx6"),b=e.qb({encapsulation:2,styles:[],data:{}});function d(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,1,"jigsaw-demo-description",[],null,null,null,s.b,s.a)),e.rb(1,114688,null,0,c.a,[],{content:[0,"content"],summary:[1,"summary"]},null),(n()(),e.sb(2,0,null,null,2,"jigsaw-switch",[],[[2,"jigsaw-switch-host",null],[2,"jigsaw-switch-error",null]],null,null,a.b,a.a)),e.Gb(5120,null,r.h,function(n){return[n]},[o.a]),e.rb(4,114688,null,0,o.a,[],{checked:[0,"checked"],disabled:[1,"disabled"]},null),(n()(),e.sb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.sb(6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.sb(7,0,null,null,2,"jigsaw-switch",[["id","test-switch1"]],[[2,"jigsaw-switch-host",null],[2,"jigsaw-switch-error",null]],[[null,"checkedChange"]],function(n,l,t){var e=!0;return"checkedChange"===l&&(e=!1!==(n.component.checked=t)&&e),e},a.b,a.a)),e.Gb(5120,null,r.h,function(n){return[n]},[o.a]),e.rb(9,114688,null,0,o.a,[],{checked:[0,"checked"]},{checkedChange:"checkedChange"}),(n()(),e.sb(10,0,null,null,1,"span",[["id","result-message"]],null,null,null,null,null)),(n()(),e.Jb(11,null,["result: ",""])),(n()(),e.sb(12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.sb(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.sb(14,0,null,null,2,"jigsaw-switch",[["id","test-switch2"]],[[2,"jigsaw-switch-host",null],[2,"jigsaw-switch-error",null]],null,null,a.b,a.a)),e.Gb(5120,null,r.h,function(n){return[n]},[o.a]),e.rb(16,114688,null,0,o.a,[],{checked:[0,"checked"],disabled:[1,"disabled"]},null),(n()(),e.sb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.sb(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.sb(19,0,null,null,2,"jigsaw-switch",[["id","test-switch3"],["offLabel","Jigsaw is perfect!"],["onLabel","Jigsaw is great!"]],[[2,"jigsaw-switch-host",null],[2,"jigsaw-switch-error",null]],null,null,a.b,a.a)),e.Gb(5120,null,r.h,function(n){return[n]},[o.a]),e.rb(21,114688,null,0,o.a,[],{onLabel:[0,"onLabel"],offLabel:[1,"offLabel"]},null)],function(n,l){var t=l.component;n(l,1,0,t.description,t.summary),n(l,4,0,!0,!1),n(l,9,0,t.checked),n(l,16,0,!0,!0),n(l,21,0,"Jigsaw is great!","Jigsaw is perfect!")},function(n,l){var t=l.component;n(l,2,0,!0,!e.Cb(l,4).valid),n(l,7,0,!0,!e.Cb(l,9).valid),n(l,11,0,t.checked),n(l,14,0,!0,!e.Cb(l,16).valid),n(l,19,0,!0,!e.Cb(l,21).valid)})}function w(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,d,b)),e.rb(1,49152,null,0,h.a,[],null,null)],null,null)}var f=e.ob("ng-component",h.a,w,{},{},[]),g=t("Ip0R"),p=t("ZYCi"),k=t("Ya/H"),C=t("W37J"),m=function(){return function(){}}();t.d(l,"SwitchDemoModuleNgFactory",function(){return j});var j=e.pb(u.a,[],function(n){return e.zb([e.Ab(512,e.j,e.cb,[[8,[i.a,f]],[3,e.j],e.y]),e.Ab(4608,g.m,g.l,[e.v,[2,g.B]]),e.Ab(1073742336,p.o,p.o,[[2,p.t],[2,p.l]]),e.Ab(1073742336,g.b,g.b,[]),e.Ab(1073742336,k.a,k.a,[]),e.Ab(1073742336,C.b,C.b,[]),e.Ab(1073742336,c.b,c.b,[]),e.Ab(1073742336,m,m,[]),e.Ab(1073742336,u.a,u.a,[]),e.Ab(1024,p.j,function(){return[[{path:"basic",component:h.a}]]},[])])})},Vt3L:function(n,l,t){"use strict";t.d(l,"a",function(){return i}),t.d(l,"b",function(){return s});var e=t("CcnG"),u=t("Ip0R"),i=(t("gIcY"),t("9+SE"),e.qb({encapsulation:2,styles:[],data:{}}));function s(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,4,"div",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component._$switchClick()&&e),e},null,null)),e.Gb(512,null,u.w,u.x,[e.t,e.u,e.l,e.F]),e.rb(2,278528,null,0,u.i,[u.w],{ngClass:[0,"ngClass"]},null),(n()(),e.sb(3,0,null,null,1,"div",[["class","jigsaw-switch-inner"]],null,null,null,null,null)),(n()(),e.Jb(4,null,["",""]))],function(n,l){n(l,2,0,l.component._$switchClass)},function(n,l){n(l,4,0,l.component._$content)})}},"Ya/H":function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("9+SE");var e=function(){return function(){}}()}}]);