function setBackground() 
{
	var date = new Date();
	var ora = date.getHours();
	
	if(ora>=19 || ora<=10)
	{
		document.body.style.backgroundColor = "#111213";
	}
	else
	{
		document.body.style.backgroundColor = '#44063f';
	}  	
}

