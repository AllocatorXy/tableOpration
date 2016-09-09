window.onload = function () 
{
	var oTab = document.getElementById('tab1');
	var exColor = '';
	var oBtnInsert = document.getElementById('btn1');
	var id = oTab.tBodies[0].rows.length+1;
	var oName = document.getElementById('name');
	var oAge = document.getElementById('age');
	var aDel = document.getElementsByTagName('a');

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

	oBtnInsert.onclick = function () //插入新行
	{
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

};