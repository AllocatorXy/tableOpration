window.onload = function () 
{
	var oTab = document.getElementById('tab1');
	var exColor = '';
	var oBtnInsert = document.getElementById('btn1');
	var oBtnSearch = document.getElementById('btn2');
	var id = oTab.tBodies[0].rows.length+1;
	var oName = document.getElementById('name');
	var oAge = document.getElementById('age');
	var oSearch = document.getElementById('searchName');
	var aDel = document.getElementsByTagName('a');
	var defValNm = oName.value;
	var defValAg = oAge.value;
	var defValSc = oSearch.value;

	function checkSpace(str, defVal) //判断输入是否合理(是否全为空格或没有填)
	{
		while(str.lastIndexOf(" ")>=0)
		{
		str = str.replace(" ","");
		}
		if(str.length === 0||str == defVal)
		{
		return true;
		}
	}
	function checkAge(id) //判断字符串是否为正整数
	{
	　　var re = /^[1-9]+[0-9]*]*$/; 
	　　var num = document.getElementById(id).value;
	　　if (!re.test(num)) 
		{
	　　　　return true;
	　　}
	}

	var delTr = function () //删除操作
	{
		oTab.tBodies[0].removeChild(this.parentNode.parentNode);
	};
	var hiLight = function () //鼠标划过高亮
	{
		exColor = this.style.backgroundColor;
		this.style.backgroundColor = 'yellow';
	};
	var resetColor = function() //鼠标移出恢复bgc
	{
		this.style.backgroundColor = exColor;
	};
	for (var i = 0; i < aDel.length; i++) //添加点击删除事件
	{
		aDel[i].onclick = delTr; //避免循环定义函数
	}
	for (var j = 0; j < oTab.tBodies[0].rows.length; j++) //添加划过高亮效果
	{
		oTab.tBodies[0].rows[j].onmouseover = hiLight;
		oTab.tBodies[0].rows[j].onmouseout = resetColor;
	}

	/*txt框聚焦失焦效果，这里不能用一个函数代替因为js是单线程运行的*/
	oName.onfocus = function () 
	{
		if (this.value == defValNm) 
		{
			this.value = '';
		}	
	};
	oAge.onfocus = function () 
	{
		if (this.value == defValAg) 
		{
			this.value = '';
		}
	};
	oSearch.onfocus = function () 
	{
		if (this.value == defValSc) 
		{
			this.value = '';
		}	
	};
	oName.onblur = function () 
	{
		if (this.value === '') 
		{
			this.value = defValNm;
		}
	};
	oAge.onblur = function () 
	{
		if (this.value === '') 
		{
			this.value = defValAg;
		}
	};
	oSearch.onblur = function () 
	{
		if (this.value === '') 
		{
			this.value = defValSc;
		}
	};

	/*插入新行*/
	oBtnInsert.onclick = function () 
	{
		/*阻止非法内容*/
		if (checkSpace(oName.value, defValNm) === true) 
		{
			alert("名字不能为空！");
			return false;
		}
		else if (checkAge('age') === true) 
		{
			alert("请输入正确的年龄！年龄为正整数。");
			return false;
		}
		
		var oTr = document.createElement('tr');

		/*创建id项并插入到新建的oTr*/
		var oTd = document.createElement('td');
		oTd.innerHTML = id;id++; //这里不直接用行数计算，避免在删除小id时再次添加导致id混乱。
		oTr.appendChild(oTd);

		/*创建name项并插入到oTr*/
		oTd = document.createElement('td');
		oTd.innerHTML = oName.value;
		oTr.appendChild(oTd);

		/*创建age项并插入到oTr*/
		oTd = document.createElement('td');
		oTd.innerHTML = oAge.value;
		oTr.appendChild(oTd);

		/*创建删除项并插入oTr*/
		oTd = document.createElement('td');
		oTd.innerHTML = '<a href="javascript:;">删除</a>';
		oTr.appendChild(oTd);
		oTd.getElementsByTagName('a')[0].onclick = delTr;

		/*给新tr添加鼠标划过效果*/
		oTr.onmouseover = hiLight;
		oTr.onmouseout = resetColor;

		oTab.tBodies[0].appendChild(oTr); //插入到tbodies
	};

	/*模糊匹配*/
	oBtnSearch.onclick = function () 
	{
		var flag = 0;
		var sTxt = oSearch.value.toLowerCase(); 
		if (checkSpace(sTxt,defValSc) === true) 
		{
		 	alert('请输入搜索内容');
		 	return false;
		} 
		var arr = sTxt.split(' ');
		for (var i = 0; i < oTab.tBodies[0].rows.length; i++) 
		{
			var sTab = oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
			oTab.tBodies[0].rows[i].style.backgroundColor = '#f2f7fc'; //首先把背景色重置
			for (var j = 0; j < arr.length; j++) //遍历查找多个关键字是否匹配
			{
				if (sTab.search(arr[j])!=-1) //哪个匹配就高亮哪行
				{
					oTab.tBodies[0].rows[i].style.backgroundColor = 'yellow';
					flag++;
				}
			}
		}
		if (flag === 0) 
		{
			alert('not found');
		}
	};

};