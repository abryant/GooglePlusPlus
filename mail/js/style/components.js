restyles.push(
[
  // Make buttons smaller
  {
    oldStyles:
    [
      "border-top-left-radius: 2px 2px; ", "border-top-right-radius: 2px 2px; ",
      "border-bottom-right-radius: 2px 2px; ", "border-bottom-left-radius: 2px 2px; ",
      "cursor: default; ",
      "font-size: 11px; font-weight: bold; ",
      "text-align: center; ",
      "margin-right: 16px; ",
      "height: 27px; ",
      "line-height: 27px; ",
      "min-width: 54px; ",
      "outline-width: 0px; outline-style: initial; outline-color: initial; ",
      "padding-top: 0px; padding-right: 8px; padding-bottom: 0px; padding-left: 8px;"
    ],
    addedStyle:
      "height: 20px !important; " +
      "line-height: 20px !important; " +
      "padding: 0 5px !important;"
  },

  // Fix the positioning of the magnifying glass icon in the search dialog
  {
    oldStyles:
    [
      "background-image: url(https://mail.google.com/mail/u/0/pimages/2/search_white.png); ",
      "height: 20px; ",
      "left: 17px; ",
      "position: relative; ",
      "top: 5px; ",
      "width: 20px;"
    ],
    addedStyle:
      "top: 1px !important;"
  },

  // Fix the padding on buttons in the search dialog
  {
    oldStyles:
    [
      "overflow-x: hidden; ", "overflow-y: hidden; ",
      "position: relative; ",
      "padding-top: 0px; ", "padding-right: 18px; ", "padding-bottom: 0px; ", "padding-left: 6px;"
    ],
    addedStyle:
      "padding: 0 14px 0 4px !important;"
  },

  // Fix the positioning of the drop down arrows on the buttons in the search dialog
  {
    oldStyles:
    [
      "position: absolute; ",
      "right: 5px; ",
      "top: 12px;"
    ],
    addedStyle:
      "top: 9px !important;"
  }
]
);

