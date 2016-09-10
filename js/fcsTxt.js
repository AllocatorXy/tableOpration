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
