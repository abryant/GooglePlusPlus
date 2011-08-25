var styles =
[
  // Header bar
  {
  oldStyle:
    "background-image: initial; " +
    "background-attachment: initial; " +
    "background-origin: initial; " +
    "background-clip: initial; " +
    "background-color: transparent; " +
    "height: 60px; " +
    "padding-top: 13px; padding-right: 0px; padding-bottom: 0px; padding-left: 10px; " +
    "box-sizing: border-box; " +
    "background-position: initial initial; " +
    "background-repeat: initial initial;",
  addedStyle:
    "height: 45px !important;" +
    "padding: 5px 0 0 10px !important;"
  },

  // Header bar container
  {
  oldStyle:
    "background-image: initial; " +
    "background-attachment: initial; " +
    "background-origin: initial; " +
    "background-clip: initial; " +
    "background-color: rgb(241, 241, 241); " +
    "border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(210, 210, 210); " +
    "border-top-width: 1px; border-top-style: solid; border-top-color: rgb(210, 210, 210); " +
    "clear: both; " +
    "min-width: 960px; " +
    "height: 60px; " +
    "position: relative; " +
    "width: 100%; " +
    "background-position: initial initial; " +
    "background-repeat: initial initial;",
  addedStyle:
    "height: 45px !important;"
  },

  // Element behind the header bar when it is floating
  {
  oldStyle:
    "{ height: 60px; }",
  addedStyle:
    "{ height: 45px; !important; }"
  }
]

for (i in styles)
{
  addStyle(styles[i].oldStyle, styles[i].addedStyle);
}

