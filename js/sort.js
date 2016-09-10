/*按照id排序*/
oBtnById.onclick = function () 
{
	/*将tr元素集合放入数组arr[]*/
	var arr=[];
	for (var i = 0; i < oTab.tBodies[0].rows.length; i++) 
	{
		arr[i] = oTab.tBodies[0].rows[i];
	}

	/*在数组中对arr的id列进行升序排序*/
	arr.sort(function (r1,r2) 
	{
		var num1 = parseInt(r1.cells[0].innerHTML);
		var num2 = parseInt(r2.cells[0].innerHTML);

		return num1-num2;
	});

	if (flag === 1) 
	{
		/*按数组arr中的顺序将rows重新放入tbody*/
		for (var j = 0; j < arr.length; j++) 
		{
			oTab.tBodies[0].appendChild(arr[j]);
		}
		flag = 0;
	}
	else
	{
		for (var k = 0; k < arr.length; k++) 
		{
			oTab.tBodies[0].insertBefore(arr[k],oTab.tBodies[0].rows[0]);
		}
		flag = 1;
	}
};