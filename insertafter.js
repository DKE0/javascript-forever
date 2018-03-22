function insertAfter(newElement, afterElement)
{
    var parent = afterElement.parentNode;
	if (parent.lastChild === afterElement) parent.appendChild(newElement);
	else parent.insertBefore(newElement, afterElement.nextSibling);
}
