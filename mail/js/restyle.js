var restyles = [];

var styleSheet;

var results;
var errors;

function createNewStyles()
{
  var style = document.createElement('style');
  style.type = 'text/css';
  style.title = 'GooglePlusPlusCSS'
  document.getElementsByTagName('head')[0].appendChild(style);
  for (var s = 0; s < document.styleSheets.length; s++)
  {
    if (document.styleSheets[s].title === 'GooglePlusPlusCSS')
    {
      styleSheet = document.styleSheets[s];
      break;
    }
  }

  results = "";
  errors = "";
  for (var i = 0; i < restyles.length; i++)
  {
    for (var j = 0; j < restyles[i].length; j++)
    {
      writeStyles(restyles[i][j].oldStyles, restyles[i][j].addedStyle);
    }
  }
  console.log(results);
  console.log(errors);
}

function replaceStyles(oldStyles, addedStyle)
{
  var result = [];
  for (var s = 0; s < document.styleSheets.length; s++)
  {
    for (var rule = 0; rule < document.styleSheets[s].cssRules.length; rule++)
    {
      var text = document.styleSheets[s].cssRules[rule].cssText;
      var found = true;
      for (var i = 0; i < oldStyles.length; i++)
      {
        if (text.indexOf(oldStyles[i]) == -1)
        {
          found = false;
          break;
        }
        // replace the last element of oldStyles with the new style
        if (i == oldStyles.length - 1)
        {
          text = text.replace(oldStyles[i], addedStyle);
        }
        else
        {
          text = text.replace(oldStyles[i], "");
        }
      }
      if (found)
      {
        result.push(text);
      }
    }
  }
  return result;
}

function writeStyles(oldStyles, addedStyle)
{
  result = replaceStyles(oldStyles, addedStyle);
  if (result.length == 0)
  {
    errors += "Error Replacing styles: " + oldStyles + " with " + addedStyle + "\n";
  }
  else
  {
    for (var i = 0; i < result.length; i++)
    {
      results += result[i] + "\n";
      styleSheet.insertRule(result[i], styleSheet.cssRules.length);
    }
  }
  if (result.length > 1)
  {
    errors += "Multiple rules used for replacing " + oldStyles + " with " + addedStyle + ":\n" + result + "\n";
  }
}

/* This commented function finds the style sheet for the specified name.
 * Paste it into chrome's Javascript console to use it.
 * function findStyles(name) { result = []; for(var s = 0; s < document.styleSheets.length; s++) {for (var rule = 0; rule < document.styleSheets[s].cssRules.length; rule++) { text = document.styleSheets[s].cssRules[rule].cssText; if (text.indexOf(name) != -1) { result.push(text); }}} return result;}
 */

