window.onload = function () 
{
	var oTab = document.getElementById('tab1');
	var exColor = '';

	for (var i = 0; i < oTab.tBodies[0].rows.length; i++) //鼠标划过高亮
	{
		oTab.tBodies[0].rows[i].onmouseover = function () 
			{
				exColor = this.style.backgroundColor;
				this.style.backgroundColor = 'yellow';
			};
		oTab.tBodies[0].rows[i].onmouseout = function () 
			{
				this.style.backgroundColor = exColor;
			};
	}
};