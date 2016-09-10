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
