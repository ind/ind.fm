var defined = function(input)
{
	/*
		defined
		Simple way to safely check if an item is defined
	*/
	try
	{
		if(typeof(input) === "undefined")
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	catch(e)
	{
		return false;
	}
};
