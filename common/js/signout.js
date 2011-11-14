// utility function to decode HTML entities ('&amp;' -> '&' etc)
function htmlDecode(input)
{
  var e = document.createElement('div');
  e.innerHTML = input;
  result = e.childNodes[0].nodeValue;
  e.removeChild(e.firstChild);
  return result;
}

function addSignOut()
{
  // gbg is the container for the top-right panel
  // the OL element inside it is where we need to add the sign out button
  // the last element in the OL is the furthest right in the panel, which is where we want to add it
  var gbg = document.getElementById("gbg")
  if (gbg != null)
  {
    var target;
    for (i = gbg.childNodes.length - 1; i >= 0; --i)
    {
      if (gbg.childNodes[i].tagName == "OL")
      {
        target = gbg.childNodes[i];
        break;
      }
    }
    // Creates a Seperator Item on this list
    var cell = document.createElement('li');
    cell.className = 'gbt gbtb';

    // And the separator itself
    var span = document.createElement('span');
    span.className = 'gbts';

    cell.appendChild(span);
    target.appendChild(cell);

    var linkAddress = "";
    for (j = 0; j < target.childNodes.length; j++)
    {
      if (target.childNodes[j].tagName == "NOSCRIPT")
      {
        linkAddress = /href="([^"]*)"/.exec(target.childNodes[j].textContent)[1];
        break;
      }
    }

    // And now for the logout button
    var cell = document.createElement('li'); cell.className = 'gbt';
    var link = document.createElement('a'); link.className = 'gbgt';
    //link.href = 'https://www.google.com/accounts/Logout?service=profiles';
    link.href = htmlDecode(linkAddress);

    var span = document.createElement('span');
    span.className = 'gbtb2';
    link.appendChild(span);

    var span = document.createElement('span');
    span.className = 'gbts';
    span.textContent = 'Sign out';
    link.appendChild(span);

    cell.appendChild(link);
    target.appendChild(cell);

    document.body.removeEventListener("DOMNodeInserted", handleSignoutInsertionEvent, false);
  }
}
var timeout = setTimeout('addSignOut();', 0);

function handleSignoutInsertionEvent()
{
  if (timeout != null)
  {
    clearTimeout(timeout);
  }
  timeout = setTimeout('addSignOut();', 0);
}

document.body.addEventListener("DOMNodeInserted", handleSignoutInsertionEvent, false);

