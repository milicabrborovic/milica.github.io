"use strict";angular.module("selectbox",[]).filter("contains",[function(){return function(a,b){return-1!==a.indexOf(b)}}]).service("SelectBox",[function(){return{counter:0,init:function(){this.counter+=1}}}]).controller("SelectBoxCtrl",["$scope","$document","$element","SelectBox",function(a,b,c,d){d.init(),a.view={},a.view.show=!1,a.view.tabindex=d.counter,a.view.instanceId="inst-"+Date.now();var e=function(b){var c=angular.element(b.target),d=c.attr("id"),e=a.multi&&"undefined"==typeof d&&c.hasClass("mad-selectbox-item");return a.view.instanceId===d||e?!1:(a.view.show=!1,a.$apply(),void h())},f=function(b){if(-1!==[13,32].indexOf(b.keyCode)&&a.view.focus)return a.selectItem(a.view.focus),a.multi||(a.view.show=!1),a.$apply(),!1;if(-1===[38,40].indexOf(b.keyCode))return!1;var d=0,e=a.list.length-1;a.view.focus="undefined"==typeof a.view.focus?-1:a.view.focus,40===b.keyCode&&(a.view.focus===e?a.view.focus=d:a.view.focus+=1),38===b.keyCode&&(a.view.focus<=d?a.view.focus=e:a.view.focus-=1),a.$apply();var f=c[0].querySelector(".mad-selectbox-dropdown"),g=f.querySelector(".focus"),h=f.offsetHeight,i=g.offsetHeight*(a.view.focus+1);i>=h?f.scrollTop=i:i<=f.scrollTop&&(f.scrollTop=0)},g=function(){"undefined"!=typeof a.list&&(a.view.selected=a.multi?a.index:a.list[a.index])};a.toggleList=function(){a.view.show=!a.view.show,a.view.show?(b.bind("click",e),c.on("keydown",f)):h()},a.selectItem=function(b){if(a.multi){var c=a.list[b].id,d=a.view.selected.indexOf(c);if(-1!==d){if(a.view.selected.length<=parseInt(a.min,10))return!1;a.view.selected.splice(d,1)}else a.view.selected.push(c);a.index=a.view.selected}else a.view.selected=a.list[b],a.index=b;a.handler()},g(),a.$watch("list.length",function(a,b){a!==b&&g()}),a.$watch("index",function(a,b){a!==b&&g()});var h=function(){a.view.focus=-1,b.unbind("click",e),c.off("keydown",f)};a.$on("$destroy",function(){h()})}]).directive("selectbox",[function(){return{restrict:"E",replace:!0,scope:{list:"=",index:"=ngModel",multi:"@",title:"@",min:"@",handler:"&"},controller:"SelectBoxCtrl",template:'<div tabindex="{{ view.tabindex }}" class="mad-selectbox" ng-class="{\'mad-selectbox-multi\': multi}"><a href id="{{ view.instanceId }}"class="mad-selectbox-toggle"ng-click="toggleList()"ng-class="{active: view.show}">{{ multi ? (title || \'Select\') : (view.selected.name || view.selected || \'Select\') }}</a><ul class="mad-selectbox-dropdown" ng-show="view.show"><li ng-repeat="item in list track by $index"ng-class="{active: multi ? (view.selected | contains:item.id) : ($index === index), focus: ($index === view.focus)}"><a href class="mad-selectbox-item" ng-click="selectItem($index)">{{ item.name || item }}</a></li><li class="mad-empty" ng-if="list.length === 0">the list is empty</li></ul></div>'}}]),angular.module("selectboxAppApp",["ngResource","selectbox"]),angular.module("selectboxAppApp").controller("MainCtrl",["$scope",function(a){a.view={},a.view.list1=[10,134,43,10093],a.view.list2=[{id:1,name:"Apple"},{id:2,name:"Pear"},{id:3,name:"Peach"},{id:4,name:"Banana"},{id:5,name:"Watermelon"},{id:6,name:"Walnut"}],a.view.selected2=1,a.view.list3=[{id:1,name:"Mercury"},{id:2,name:"Venus"},{id:3,name:"Earth"},{id:4,name:"Mars"},{id:5,name:"Jupiter"},{id:6,name:"Saturn"},{id:7,name:"Uranus"},{id:8,name:"Neptune"}],a.view.selected3=[0,2]}]);