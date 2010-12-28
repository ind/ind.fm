var capitalize = function(input, mode)
{
	/*
		capitalize
		capitalizes strings by default, phrases optionally (capitalize all strings seperated by space)
	*/
	try
	{
		if(typeof(input) === "string")
		{
			if(mode)
			{
				input = input.split(/ /g);
				output = [];
				for(key in input)
				{
					var value = input[key];
					output.push(value[0].toUpperCase() + value.substr(1));
				}
				return output.join(" ");
			}
			return input[0].toUpperCase() + input.substr(1);
		}
		else
		{
			console.log("Error: non-string input");
			return input;
		}
	}
	catch(e)
	{
		return input;
	}
};
