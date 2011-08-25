var styles =
[
  // Holds the "+1 - Comment - Share" buttons
  {
  oldStyle:
    "color: rgb(51, 102, 204); " +
    "height: 15px; " +
    "padding-bottom: 12px;",
  addedStyle:
    "padding-bottom: 3px !important; " +
    "display: inline-block; " +
    "margin-right: 10px;"
  },

  // Holds the content of a post, and the +1, comment, share buttons and statistics
  {
  oldStyle:
    "{ margin-bottom: -1px; position: relative; }",
  addedStyle:
    "{ white-space: nowrap; " +
    "overflow: hidden; " +
    "text-overflow: ellipsis; }"
  },

  // Holds the group containing the "+N" and "N shares" elements
  {
  oldStyle:
    "border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(227, 227, 227); " +
    "border-top-width: 1px; border-top-style: solid; border-top-color: rgb(227, 227, 227); " +
    "padding-top: 5px; padding-right: 7px; padding-bottom: 5px; padding-left: 7px;",
  addedStyle:
    "padding: 2px !important; " +
    "overflow: hidden; " +
    "text-overflow: ellipsis; " +
    "white-space: nowrap; " +
    "display: inline-block; " +
    "border: none !important;"
  },

  // Holds a "+N" or an "N shares" element
  {
  oldStyle:
    "color: rgb(153, 153, 153); " +
    "height: 15px; " +
    "max-height: 15px; " +
    "overflow-x: hidden; overflow-y: hidden; " +
    "padding-top: 2px; padding-right: 0px; padding-bottom: 2px; padding-left: 0px; " +
    "text-overflow: ellipsis; " +
    "white-space: nowrap;",
  addedStyle:
    "padding: 1px 0 !important; " +
    "display: inline-block; " +
    "margin-right: 5px;"
  }
]

for (i in styles)
{
  addStyle(styles[i].oldStyle, styles[i].addedStyle);
}

