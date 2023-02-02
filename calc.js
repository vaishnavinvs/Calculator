//  To display content each key is pressed

function displaycontent(content)
{
    calcscreen.value += content
}

// To clear the all content

function allclear()
{
    calcscreen.value = ' '
}

// To evaluate

function evaluateExpr()
{
    calcscreen.value = eval(calcscreen.value)
}

function dlt()
{
    calcscreen.value = calcscreen.value.slice(0,-1)
}