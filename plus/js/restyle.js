var style = document.createElement('style');
style.type = 'text/css';
style.title = 'GooglePlusPlusCSS'
document.getElementsByTagName('head')[0].appendChild(style);
var styleSheet;
for (var s = 0; s < document.styleSheets.length; s++)
{
  if (document.styleSheets[s].title === 'GooglePlusPlusCSS')
  {
    styleSheet = document.styleSheets[s];
    break;
  }
}


function injectCSS(name, style)
{
  if (name !== undefined)
  {
    styleSheet.insertRule(name + ' {' + style + '}', styleSheet.cssRules.length);
  }
}

function findStyleName(css)
{
  for (var s = 0; s < document.styleSheets.length; s++)
  {
    for (var rule = 0; rule < document.styleSheets[s].cssRules.length; rule++)
    {
      text = document.styleSheets[s].cssRules[rule].cssText;
      if (text.indexOf(css) != -1)
      {
        return text.replace(/{.*}/, "").trim();
      }
    }
  }
}

/* This commented function finds the style sheet for the specified name.
 * Paste it into chrome's Javascript console to use it.
 * function findStyles(name) { result = []; for(var s = 0; s < document.styleSheets.length; s++) {for (var rule = 0; rule < document.styleSheets[s].cssRules.length; rule++) { text = document.styleSheets[s].cssRules[rule].cssText; if (text.indexOf(name) != -1) { result.push(text); }}} return result;}
 */

