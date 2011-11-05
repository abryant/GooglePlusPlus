var barHolderName = ':ro';
var buttonHolderName = 'VP5otc-HT6HAf';
var iconHolderName = 'QkhFhe';

function insertAfter(referenceNode, newNode)
{
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var ro = document.getElementById(barHolderName);
if (ro !== null)
{
  ro.addEventListener("DOMNodeInserted", function(e)
  {
    updateLabels();
  }, false);
}

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

