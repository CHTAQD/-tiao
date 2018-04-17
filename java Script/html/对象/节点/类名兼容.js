// 解决类名兼容性函数,classname为形参
function getClass(classname){
	// 判断浏览器对获取类名方法的支持情况
	// 如果浏览器支持获取类名的方法
	if(document.getElementsByClassName){
		// 返回用这个方法获取的类名
		return document.getElementsByClassName(classname)
		// 否则
	}else{
		// 获取所有的标签名
		var tags=document.getElementsByTagName('*');
		// 建立一个新数组，放筛选到的标签
		var arr=[];
		// 遍历获取到的标签集合
		for(var i=0;i<tags.length;i++){
			// 判断每一个标签里的类名和实际传入的类名是否一致
			if(tags[i].className==classname){
				// 如果一致，将选择好的标签放入空数组
				arr.push(tags[i])
			}	
		}
		// 选择完毕，返回数组
		return arr;
	}
}

// 获取样式的兼容函数
// obj:对象    // attr:样式
function getStyle(obj,attr){
	if(document.getElementsByClassName){
		return getComputedStyle(obj,null)[attr]
	}else{
		return  obj.currentStyle[attr] 
	}
}


// 节点的兼容问题
// 获取子节点
function getChilds(obj){
	var childs=obj.childNodes;
	var arr=[];
	for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==3 && /^\s+$/.test(childs[i].nodeValue)){
			continue;
		}else{
			arr.push(childs[i])
		}
	}
	return arr;
}
// 获取第一个孩子
function getFirst(obj){
	return getChilds(obj)[0];
}
// 获取最后一个孩子
function getLast(){
	return getChilds(obj)[getChilds(obj).length-1];
}
// 获取下一个兄弟
function getNext(obj){
	var next=obj.nextSibling;
	// 代表next没有下一个兄弟
	if(next==null){
		return null;
	}
	// 代表有下一个兄弟
	while(next.nodeType!=1){
		var next=next.nextSibling;
		if(next==null){
			return null;
		}
	}
	return next;
}
// 获取上一个兄弟
function getPrevious(obj){
	var previous=obj.previousSibling;
	// 代表previous没有上一个兄弟
	if(previous==null){
		return null;
	}
	// 代表有上一个兄弟
	while(previous.nodeType!=1){
		var previous=previous.previousSibling;
		if(previous==null){
			return null;
		}
	}
	return previous;
}
// 获取父节点
function getParent(obj){
	return obj.parentNode;
}
// 解决类名兼容性函数,classname为形参
function getClass(classname){
	// 判断浏览器对获取类名方法的支持情况
	// 如果浏览器支持获取类名的方法
	if(document.getElementsByClassName){
		// 返回用这个方法获取的类名
		return document.getElementsByClassName(classname)
		// 否则
	}else{
		// 获取所有的标签名
		var tags=document.getElementsByTagName('*');
		// 建立一个新数组，放筛选到的标签
		var arr=[];
		// 遍历获取到的标签集合
		for(var i=0;i<tags.length;i++){
			// 判断每一个标签里的类名和实际传入的类名是否一致
			if(tags[i].className==classname){
				// 如果一致，将选择好的标签放入空数组
				arr.push(tags[i])
			}	
		}
		// 选择完毕，返回数组
		return arr;
	}
}

// 获取样式的兼容函数
// obj:对象    // attr:样式
function getStyle(obj,attr){
	if(document.getElementsByClassName){
		return getComputedStyle(obj,null)[attr]
	}else{
		return  obj.currentStyle[attr] 
	}
}


// 节点的兼容问题
// 获取子节点
function getChilds(obj){
	var childs=obj.childNodes;
	var arr=[];
	for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==3 && /^\s+$/.test(childs[i].nodeValue)){
			continue;
		}else{
			arr.push(childs[i])
		}
	}
	return arr;
}
// 获取第一个孩子
function getFirst(obj){
	return getChilds(obj)[0];
}
// 获取最后一个孩子
function getLast(){
	return getChilds(obj)[getChilds(obj).length-1];
}
// 获取下一个兄弟
function getNext(obj){
	var next=obj.nextSibling;
	// 代表next没有下一个兄弟
	if(next==null){
		return null;
	}
	// 代表有下一个兄弟
	while(next.nodeType!=1){
		var next=next.nextSibling;
		if(next==null){
			return null;
		}
	}
	return next;
}
// 获取上一个兄弟
function getPrevious(obj){
	var previous=obj.previousSibling;
	// 代表previous没有上一个兄弟
	if(previous==null){
		return null;
	}
	// 代表有上一个兄弟
	while(previous.nodeType!=1){
		var previous=previous.previousSibling;
		if(previous==null){
			return null;
		}
	}
	return previous;
}
// 获取父节点
function getParent(obj){
	return obj.parentNode;
}