var styles =
[
  // The element surrounding a whole post (including comments etc.)
  {
  oldStyle:
    "background-color: rgb(255, 255, 255); " +
    "border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: transparent; " +
    "border-left-width: 1px; border-left-style: solid; border-left-color: transparent; " +
    "border-top-width: 1px; border-top-style: solid; border-top-color: rgb(238, 238, 238); " +
    "clear: both; " +
    "font-size: 13px; " +
    "line-height: 1.4; " +
    "outline-style: none; outline-width: initial; outline-color: initial; " +
    "padding-top: 16px; padding-right: 21px; padding-bottom: 16px; padding-left: 21px; " +
    "position: relative; " +
    "box-sizing: border-box; " +
    "word-wrap: break-word;",
  addedStyle:
    "font-size: 11px !important; " +
    "line-height: 1.3 !important; " +
    "padding: 8px !important;"
  },

  // Holds the "+1 - Comment - Share" buttons
  {
  oldStyle:
    "color: rgb(51, 102, 204); " +
    "height: 15px; " +
    "padding-bottom: 12px;",
  addedStyle:
    "padding-bottom: 3px !important;"
  },

  // Holds the content of a post (within some wide margins by default)
  {
  oldStyle:
    "margin-left: 60px; " +
    "margin-right: 44px; " +
    "vertical-align: top;",
  addedStyle:
    "margin-right: 0px !important;"
  },

  // Holds the text of a post
  {
  oldStyle:
    "overflow-x: hidden; " +
    "overflow-y: hidden; " +
    "padding-bottom: 12px; padding-top: 3px; " +
    "text-overflow: ellipsis;",
  addedStyle:
    "padding-bottom: 3px !important; " +
    "padding-top: 1px !important; " +
    "white-space: normal;"
  },

  // The menu button at the top right of a post
  {
  oldStyle:
    "background-image: url(https://ssl.gstatic.com/s2/oz/images/stream/options_default.png); " +
    "cursor: pointer; " +
    "float: right; " +
    "height: 13px; " +
    "margin-right: -44px; " +
    "width: 13px;",
  addedStyle:
    "margin-right: 0 !important;"
  }

]

for (i in styles)
{
  addStyle(styles[i].oldStyle, styles[i].addedStyle);
}

