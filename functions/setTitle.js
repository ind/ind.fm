var setTitle = function(input, prefix)
{
	/*
		setTitle
		Helper method for changing document.title in a stylistically uniform way
		dependencies: capitalize, site
	*/
	input = input || "";
	prefix = prefix || "";
	if(input.length > 0)
	{
		// convert input to string in case we are processing floats, ints, etc.
		input = input.toString();
		// capitalize the title and add a seperator and the site name
		var title = capitalize(input, true) +  " | " + window.site.name;
		// set the title
		window.document.title = title;
	}
	else
	{
		// use the current title
		input = window.document.title;
	}
	// Add prefix if it's supplied
	if(prefix.length > 0)
	{
		// Seperate current input from current prefix by index of close parenthesis character: (prefix) input
		input = input.toString().substr(window.document.title.indexOf(")") + 1).toString();
		// set the title to title plus prefix
		window.document.title = "(" + prefix + ") " + input.split(",").join(" ");
	}
};
