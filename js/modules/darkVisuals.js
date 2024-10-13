export { fixGreenItemsInDarkMode, fixGreyItemsInDarkMode, runGreyItemsUpdateInterval };

const NEW_GREEN_STYLE = "color:lightgreen";
const NEW_GREY_STYLE = "color:#7aceff; border-radius: 2px; padding-left:2px; padding-right:2px;";

const fixGreenItemsInDarkMode = (subTreeDiv) => {
  if (!subTreeDiv) {
    subTreeDiv = document;
  }

  let greenNodes = subTreeDiv.querySelectorAll(`${!subTreeDiv ? "body.satDark .scContentTreeContainer" : ""} .scContentTreeNodeNormal > [style="color:green"]`);
  greenNodes.forEach((element) => {
    element.style = NEW_GREEN_STYLE;
  });
};

const fixGreyItemsInDarkMode = (subTreeDiv) => {
  if (!subTreeDiv) {
    subTreeDiv = document;
  }

  let greyNodes = subTreeDiv.querySelectorAll(`${!subTreeDiv ? "body.satDark .scContentTreeContainer" : ""} .scContentTreeNodeNormal > [style='color:#666666']`);
  greyNodes.forEach((element) => {
    element.style = NEW_GREY_STYLE;
  });
};

const runGreyItemsUpdateInterval = (subTreeDiv) => {
  const interval = setInterval(() => {
    if (!subTreeDiv) {
      subTreeDiv = document;
    }

    let greyNodes = subTreeDiv.querySelectorAll(`${!subTreeDiv ? "body.satDark .scContentTreeContainer" : ""} .scContentTreeNodeNormal > [style='color:#666666']`);
    if (greyNodes.length > 0) {
      clearInterval(interval);
    }
    greyNodes.forEach((element) => {
      element.style = NEW_GREY_STYLE;
    });
  }, 200);
};
