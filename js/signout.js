// gbg is the container for the top-right panel
// the OL element inside it is where we need to add the sign out button
// the last element in the OL is the furthest right in the panel, which is where we want to add it
gbg = document.getElementById("gbg")
for (i = 0; i < gbg.childNodes.length; i++)
{
  if (gbg.childNodes[i].tagName == "OL")
  {
    gbg.childNodes[i].innerHTML += '<li class="gbt gbtb"><span class=gbts></span></li>' + // Separator
                                   '<li class=gbt>' + // Sign out button
                                     '<a class=gbgt href="https://www.google.com/accounts/Logout?service=profiles">' +
                                       '<span class=gbtb2></span>' +
                                       '<span class=gbts>Sign out</span>' +
                                     '</a>' +
                                   '</li>'
  }
}

