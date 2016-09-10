/*模糊搜索*/
oBtnSearch.onclick = function () 
{
	/*若输入内容非法，则重置列表并跳出fun*/
	if (checkSpace(oSearch.value,defValSc) === true) 
	{
	 	alert('请输入搜索内容！');
	 	for (var k = 0; k < oTab.tBodies[0].rows.length; k++) 
	 	{
	 		oTab.tBodies[0].rows[k].style.backgroundColor = '#f2f7fc';
	 	}
	 	return false;
	} 
	var flag = 0;
	var sTxt = oSearch.value.toLowerCase(); 
	var arr = sTxt.split(' ');
	for (var i = 0; i < oTab.tBodies[0].rows.length; i++) 
	{
		var sTab = oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
		oTab.tBodies[0].rows[i].style.backgroundColor = '#f2f7fc'; //首先把背景色重置
		for (var j = 0; j < arr.length; j++) //遍历查找多个关键字是否匹配
		{
			if (sTab.search(arr[j])!=-1 && arr[j]!=='') //匹配到空串以外的东西
			{
				// alert(sTab.search(arr[j]));
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

/*筛选*/
oBtnFilter.onclick = function () 
{
	/*若输入内容非法，则重置列表并跳出fun*/
	if (checkSpace(oSearch.value, defValSc) === true) 
	{
	 	for (var k = 0; k < oTab.tBodies[0].rows.length; k++) 
	 	{
	 		oTab.tBodies[0].rows[k].style.display = '';
	 	}
	 	return 0;
	} 
	var sTxt = oSearch.value.toLowerCase(); 
	var arr = sTxt.split(' ');
	for (var i = 0; i < oTab.tBodies[0].rows.length; i++) 
	{
		var sTab = oTab.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
		oTab.tBodies[0].rows[i].style.display = 'none';
		for (var j = 0; j < arr.length; j++) //遍历查找多个关键字是否匹配
		{
			if (sTab.search(arr[j])!=-1 && arr[j]!=='') //匹配到空以外的
			{
				oTab.tBodies[0].rows[i].style.display = '';
			}
		}
	}
};
