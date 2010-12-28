var setTitle = function(input, prefix)
{
	/*
		setTitle
		Helper method for changing document.title in a stylistically uniform way
		dependencies: capitalize, site
	*/
	// Define functions inputs
	input = input || "";
	prefix = prefix || "";
	// Convert to string by concatentating empty string
	input += "";
	prefix += "";
	if(input.length > 0)
	{
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
