styles =
[
  /* Navigation links */
  {
  oldStyle:
    "color: rgb(51, 51, 51); " +
    "cursor: pointer; " +
    "display: block; " +
    "font-size: 13px; " +
    "height: 26px; " +
    "line-height: 26px; " +
    "overflow-x: hidden; " +
    "overflow-y: hidden; " +
    "padding-top: 0px; " +
    "padding-right: 10px; " +
    "padding-bottom: 0px; " +
    "padding-left: 10px; " +
    "text-overflow: ellipsis; " +
    "white-space: nowrap;",
  addedStyle:
    "height: 18px !important;" +
    "line-height: 18px !important;"
  }

]

for (i in styles)
{
  name = findStyleName(styles[i].oldStyle);
  injectCSS(name, styles[i].addedStyle);
}

