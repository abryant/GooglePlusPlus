// gbg is the container for the top-right panel
// the OL element inside it is where we need to add the sign out button
// the last element in the OL is the furthest right in the panel, which is where we want to add it
gbg = document.getElementById("gbg")
for (i = gbg.childNodes.length - 1; i >= 0; --i)
{
  if (gbg.childNodes[i].tagName == "OL")
  {
    var target = gbg.childNodes[i];

	// Creates a Seperator Item on this list
    var cell = document.createElement('li');
	cell.className = 'gbt gbtb';

	// And the separator itself
	var span = document.createElement('span');
	span.className = 'gbts';

	cell.appendChild(span);
	target.appendChild(cell);

	// And now for the logout button
	var cell = document.createElement('li'); cell.className = 'gbt';
	var link = document.createElement('a'); link.className = 'gbgt';
	link.href = 'https://www.google.com/accounts/Logout?service=profiles';

	var span = document.createElement('span');
	span.className = 'gbtb2';
	link.appendChild(span);

	var span = document.createElement('span');
	span.className = 'gbts';
	span.textContent = 'Sign out';
    link.appendChild(span);

	cell.appendChild(link);
	target.appendChild(cell);

	break;
  }
}

