restyles.push(
[
  // Remove the top-padding from historical conversation elements
  {
    oldStyles:
    [
      "{ padding-top: 12px; }"
    ],
    addedStyle:
      "{ padding-top: 3px !important; }"
  },

  // Remove the bottom-padding from historical conversation elements
  {
    oldStyles:
    [
      "{ padding-bottom: 12px; }"
    ],
    addedStyle:
      "{ padding-bottom: 3px !important; }"
  },

  // Decrease the top-padding of the picture to the left of a conversation element
  {
    oldStyles:
    [
      "cursor: pointer; ",
      "float: left; ",
      "padding-top: 12px; ", "padding-right: 12px; ", "padding-bottom: 0px; ", "padding-left: 0px;"
    ],
    addedStyle:
      "padding-top: 3px !important;"
  },

  // Decrease the height of the star to the right hand side of a conversation element
  {
    oldStyles:
    [
      "display: inline-block; ",
      "height: 19px; ",
      "text-align: center; ",
      "width: 19px; ",
      "padding-top: 2px; ", "padding-right: 2px; ", "padding-bottom: 2px; ", "padding-left: 2px;"
    ],
    addedStyle:
      "height: 16px !important;"
  }
]
);

