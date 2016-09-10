	var oTab = document.getElementById('tab1');
	var exColor = '';
	var oBtnInsert = document.getElementById('btn1');
	var oBtnSearch = document.getElementById('btn2');
	var oBtnFilter = document.getElementById('btn3');
	var oBtnById = document.getElementById('btn4');
	var flag = 0; //用于排序按钮转换正序倒序
	var id = oTab.tBodies[0].rows.length+1; //避免在添加项时出现id混乱
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
