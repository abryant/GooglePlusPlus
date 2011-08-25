var styles =
[
  // Class that defines padding on notification list elements
  {
  oldStyle:
    "border-top-width: 1px; " +
    "border-top-style: solid; " +
    "border-top-color: rgb(221, 223, 231); " +
    "cursor: pointer; " +
    "padding-top: 10px; padding-right: 19px; padding-bottom: 10px; padding-left: 9px; " +
    "outline-style: none; " +
    "outline-width: initial; " +
    "outline-color: initial;",
  addedStyle:
    "padding: 2px 4px 2px 1px !important;"
  }
]

for (i in styles)
{
  addStyle(styles[i].oldStyle, styles[i].addedStyle);
}

