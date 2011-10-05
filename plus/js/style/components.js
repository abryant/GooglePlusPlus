restyles.push(
[
  // Buttons
  {
    oldStyles:
    [
      "border-top-left-radius: 2px 2px;", "border-top-right-radius: 2px 2px;",
      "border-bottom-right-radius: 2px 2px;", "border-bottom-left-radius: 2px 2px;",
      "cursor: default;",
      "font-size: 11px;",
      "font-weight: bold;",
      "text-align: center;",
      "margin-right: 16px;",
      "height: 27px;",
      "line-height: 27px;",
      "min-width: 54px;",
      "outline-width: 0px;",
      "outline-style: initial;",
      "outline-color: initial;",
      "padding-top: 0px;", "padding-right: 8px;", "padding-bottom: 0px;", "padding-left: 8px;"
    ],
    addedStyle:
      "height: 17px !important;" +
      "line-height: 17px !important;" +
      "min-width: 34px !important;" +
      "padding: 0 5px !important;" +
      "margin-right: 8px !important;"
  },

  // Camera image for upload a photo button
  {
    oldStyles:
    [
      "background-image: url(https://ssl.gstatic.com/s2/oz/images/photos/upload.png);",
      "height: 23px;",
      "width: 30px;",
      "display: inline-block;"
    ],
    addedStyle:
      "width: 20px !important;" +
      "height: 16px !important;" +
      "background-size: contain;" +
      "background-repeat: no-repeat;"
  },

  // Comment text area
  {
    oldStyles:
    [
      "background-image: initial;",
      "background-attachment: initial;",
      "background-origin: initial;",
      "background-clip: initial;",
      "background-color: white;",
      "border-top-width: 1px;", "border-right-width: 1px;", "border-bottom-width: 1px;", "border-left-width: 1px;",
      "border-top-style: solid;", "border-right-style: solid;", "border-bottom-style: solid;", "border-left-style: solid;",
      "border-right-color: rgb(204, 204, 204);", "border-bottom-color: rgb(204, 204, 204);",
      "border-left-color: rgb(204, 204, 204);", "border-top-color: rgb(153, 153, 153);",
      "padding-top: 6px;", "padding-right: 6px;", "padding-bottom: 0px;", "padding-left: 6px;",
      "min-height: 3.9em;",
      "background-position: initial initial;",
      "background-repeat: initial initial;"
    ],
    addedStyle:
      "padding: 2px 2px 0 2px !important;" +
      "min-height: 3em !important;"
  },

  // Popup to display who has +1'd or shared something
  {
    oldStyles:
    [
      "-webkit-box-shadow: rgba(0, 0, 0, 0.199219) 0px 1px 3px;",
      "box-shadow: rgba(0, 0, 0, 0.199219) 0px 1px 3px;",
      "background-color: rgb(255, 255, 255);",
      "border-top-width: 1px;", "border-right-width: 1px;", "border-bottom-width: 1px;", "border-left-width: 1px;",
      "border-top-style: solid;", "border-right-style: solid;", "border-bottom-style: solid;", "border-left-style: solid;",
      "border-color: initial;",
      "border-top-color: rgb(187, 187, 187);", "border-right-color: rgb(187, 187, 187);",
      "border-bottom-color: rgb(168, 168, 168);", "border-left-color: rgb(187, 187, 187);",
      "padding-top: 16px;", "padding-right: 16px;", "padding-bottom: 16px;", "padding-left: 16px;",
      "position: absolute;",
      "z-index: 1201 !important;"
    ],
    addedStyle:
      "padding: 5px !important;"
  },

  // Container for the title of a +N popup
  {
    oldStyles:
    [
      "font-weight: bold;",
      "margin-bottom: 10px;",
      "padding-top: 0px;", "padding-right: 20px;", "padding-bottom: 0px;", "padding-left: 0px;"
    ],
    addedStyle:
      "margin-bottom: 2px !important;"
  },

  // Container for a share popup
  {
    oldStyles:
    [
      "background-color: rgb(255, 255, 255);",
      "box-shadow: rgba(0, 0, 0, 0.199219) 0px 4px 16px;",
      "-webkit-box-shadow: rgba(0, 0, 0, 0.199219) 0px 4px 16px;",
      "border-top-style: solid;", "border-right-style: solid;", "border-bottom-style: solid;", "border-left-style: solid;",
      "border-top-width: 1px;", "border-right-width: 1px;", "border-bottom-width: 1px;", "border-left-width: 1px;",
      "border-top-color: rgb(172, 172, 172);", "border-right-color: rgb(172, 172, 172);",
      "border-left-color: rgb(172, 172, 172);", "border-bottom-color: rgb(153, 153, 153);",
      "color: rgb(0, 0, 0);",
      "outline-width: 0px;",
      "outline-style: initial;",
      "outline-color: initial;",
      "padding-top: 35px;", "padding-right: 40px;", "padding-bottom: 35px;", "padding-left: 40px;",
      "position: absolute;",
      "top: 0px;",
      "width: 450px;",
      "z-index: 1101;"
    ],
    addedStyle:
      "padding: 10px 10px !important;"
  },

  // Border element at the bottom of a share popup
  // TODO: is this required
  {
    oldStyles:
    [
      "background-color: rgb(255, 255, 255);",
      "font-size: 13px;",
      "padding-top: 25px;",
      "text-align: right;"
    ],
    addedStyle:
      "padding-top: 0px !important;"
  },
  
  // Close button on "+N" and "N shares" popups
  {
    oldStyles:
    [
      "cursor: pointer;",
      "height: 9px;",
      "padding-top: 10px;", "padding-right: 10px;", "padding-bottom: 10px;", "padding-left: 10px;",
      "position: absolute;",
      "right: 0px;",
      "text-align: center;",
      "top: 0px;",
      "width: 9px;"
    ],
    addedStyle:
      "padding: 5px !important"
  },

  // Close button on invite popup
  {
    oldStyles:
    [
      "background-image: url(https://ssl.gstatic.com/s2/oz/images/dialogx.png);",
      "background-attachment: initial;",
      "background-origin: initial;",
      "background-clip: initial;",
      "background-color: initial;",
      "cursor: pointer;",
      "height: 15px;",
      "position: absolute;",
      "right: -20px;",
      "top: -16px;",
      "width: 15px;",
      "background-position: initial initial;",
      "background-repeat: no-repeat no-repeat;"
    ],
    addedStyle:
      "top: 0px !important;" +
      "right: 0px !important;"
  }
]
);

