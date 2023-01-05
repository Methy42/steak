/**
 * 
 * @param { HTMLElement } element 
 */
function Manipulator (element) {
  this.manipulator = document.createElement("div"),
  this.manipulator.style = `
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, .3);
    position: absolute;
  `;
  this.manipulator.

  /** @type { HTMLElement } */
  this.joystick = element.querySelector(".joystick");

  this.isMousedown = false;
  this.joystickPostion = [ 35, 35 ];

  document.addEventListener("mousedown", () => {
    this.isMousedown = true;
  });

  document.addEventListener("mouseup", () => {
    this.isMousedown = false;
  });
}