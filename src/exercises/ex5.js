// src/exercises/ex5.js

export function hoverHandler(interactionResult, isHovering) {
  if (isHovering) {
    interactionResult.setTextContent('You are hovering over the area!');
  } else {
    interactionResult.setTextContent('Hover over the area.');
  }
}
