var $ = function(id){
	return "string" == typeof id ? document.getElementById(id) : id; //如果id是字符串类型，那么返回id对应的html元素，否则返回id本身
}
var Class = {
	create: function(){
		return function(){
			this.initialize.apply(this,arguments);	
		}	
	}	
}

Object.extend = function(destination, source) { // 继承, 目标对象destination将拥有源对象source的所有属性和方法
	for (var property in source) {
		destination[property] = source[property];   // 利用动态语言的特性, 通过赋值动态添加属性与方法
	}
	return destination;   // 返回扩展后的对象
}

Object.prototype.extend   =   function(object)   {   
	return   Object.extend.apply(this,   [this,   object]);     //extend作为Object的实例成员
}   



var Scroll = Class.create();
Scroll.prototype = {
	initialize: function(v){
		this.value = v;
	},
	showvalue: function(){
		alert(this.value);	
	}
}