$(document).ready(function()
{
	$("button").click(function()
	{
		//$("div").append(" world!"); // inserts content at the end of the selected element
		//$("div").prepend(" world!"); // inserts content at the start of the selected element
		//$("div").after(" <div>world!</div>"); // inserts content after the selected element
		$("div").before(" <div>world!</div>"); // inserts content before the selected element
	});
});