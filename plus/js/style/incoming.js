var styles =
[
  // Holds "Shared by X" sections in incoming
  {
    oldStyles:
    [
      "margin-bottom: 15px;", "margin-left: -60px;", "margin-right: -44px;",
      "padding-top: 10px;", "padding-right: 15px;", "padding-bottom: 10px;", "padding-left: 15px;",
      "background-color: rgb(245, 245, 245);"
    ],
    addedStyle:
      "margin-right: 0 !important;" +
      "margin-bottom: 5px !important;" +
      "padding: 3px 10px 5px 10px !important;"
  },

  // Holds the "Add to circles" and "Mute this post" section in incoming
  {
    oldStyles:
    [
      "{ float: right; padding-top: 2px; }"
    ],
    addedStyle:
      "{ padding-top: 0px !important; }"
  },

  // Holds "Mute this post" in incoming
  {
    oldStyles:
    [
      "vertical-align: top;",
      "padding-bottom: 12px;",
      "padding-left: 3px;"
    ],
    addedStyle:
      "vertical-align: middle !important;"
  }
]

for (i in styles)
{
  writeStyles(styles[i].oldStyles, styles[i].addedStyle);
}

