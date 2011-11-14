var buttonHolderName = 'G-Ni';
var iconHolderName = 'asa';

function insertAfter(referenceNode, newNode)
{
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var timeout = setTimeout('updateLabels(); timeout = null;', 0);

document.body.addEventListener("DOMNodeInserted", function(e)
{
  if (timeout !== undefined && timeout != null)
  {
    clearTimeout(timeout);
    timeout = null;
  }
  timeout = setTimeout('updateLabels(); timeout = null;', 0);
}, false);

var updating = false;

function updateLabels()
{
  if (updating)
  {
    return;
  }
  updating = true;
  var buttonHolders = document.getElementsByClassName(buttonHolderName);
  for (i = 0; i < buttonHolders.length; i++)
  {
    for (j = 0; j < buttonHolders[i].children.length; j++)
    {
      var b = buttonHolders[i].children[j];
      var name = b.getAttribute('title');
      if (name === undefined || name == null)
      {
        name = b.getAttribute('aria-label');
      }
      if (name === undefined || name == null)
      {
        continue;
      }
      for (k = 0; k < b.children.length; k++)
      {
        var child = b.children[k];
        if (child.tagName === 'DIV' && child.className.indexOf(iconHolderName) != -1 &&
            (child.nextSibling == null || child.nextSibling.nodeName != '#text'))
        {
          var textNode = document.createTextNode(name);
          insertAfter(child, textNode);
          child.style.paddingRight = '2px';
          break;
        }
      }
    }
  }
  updating = false;
}

