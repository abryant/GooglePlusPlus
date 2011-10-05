var styles =
[
  // Holds a comment
  // removing the 47px of left padding here puts the profile picture in the space to the left of the whole comment
  {
    oldStyles:
    [
      "border-bottom-width: 1px;", "border-bottom-style: dotted;", "border-bottom-color: rgb(204, 204, 204);",
      "border-left-width: 1px;", "border-left-style: solid;", "border-left-color: transparent;",
      "vertical-align: top;",
      "margin-bottom: -1px;",
      "padding-top: 7px;", "padding-right: 8px;", "padding-bottom: 7px;", "padding-left: 47px;"
    ],
    addedStyle:
      "padding: 3px !important; " +
      "min-height: 32px;" // to stop a comment from being smaller than a profile picture
  },

  // HACK: Holds each of the elements inside comments,
  // specifically, the line (and components) with the time and the number of +1s on them.
  // Since this line does not have any styles on it by default, the best we can
  // do is style elements underneath the comments.
  // Luckily all we're changing are the min-height and vertical-align properties,
  // which will only visually affect the line we need it to.
  {
    oldStyles:
    [
      "{ border-bottom-width: 1px; border-bottom-style: dotted; border-bottom-color: rgb(204, 204, 204); border-left-width: 1px; border-left-style: solid; border-left-color: transparent; vertical-align: top; margin-bottom: -1px; padding-top: 7px; padding-right: 8px; padding-bottom: 7px; padding-left: 47px; }"
    ],
    addedStyle:
      " * { min-height: 15px !important; vertical-align: top !important; }"
  },

  // Holds the N comment(s) button
  {
    oldStyles:
    [
      "background-color: rgb(251, 251, 251);",
      "border-bottom-width: 1px;", "border-bottom-style: solid;", "border-bottom-color: rgb(227, 227, 227);",
      "cursor: pointer;",
      "padding-top: 8px;", "padding-right: 8px;", "padding-bottom: 8px;", "padding-left: 8px;"
    ],
    addedStyle:
      "padding: 3px !important;"
  },

  // Holds a collapsed comment's text
  //   This needs to be N * [line height on comment text] to not cut things off mid-line
  //   So if we change the line height to 1.3, we must update this to be 6 * 1.3
  {
    oldStyles:
    [
      "max-height: 8.4em;",
      "overflow-x: hidden;", "overflow-y: hidden;"
    ],
    addedStyle:
      "max-height: 7.8em !important;"
  }

]

for (i in styles)
{
  writeStyles(styles[i].oldStyles, styles[i].addedStyle);
}

