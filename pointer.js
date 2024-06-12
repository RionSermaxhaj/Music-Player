// import { Application, Graphics } from 'pixi.js';

// (async () => {
//     // Create a new application
//     const app = new Application();

//     // Initialize the application
//     await app.init({ antialias: true, background: '#1099bb', resizeTo: window });

//     // Append the application canvas to the document body
//     document.body.appendChild(app.view);

//     // Create the circle
//     const circle = app.stage.addChild(
//         new Graphics().drawCircle(0, 0, 8).beginFill(0xffffff).lineStyle(1, 0x111111, 0.87).endFill()
//     );

//     circle.position.set(app.screen.width / 2, app.screen.height / 2);

//     // Enable interactivity
//     app.stage.interactive = true;

//     // Follow the pointer
//     app.stage.on('pointermove', (e) => {
//         circle.position.copyFrom(e.data.global);
//     });
// })();
import { Application, Graphics } from "pixi.js";

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ antialias: true, background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.body.appendChild(app.view);

  // Create the circle
  const circle = app.stage.addChild(
    new Graphics()
      .drawCircle(0, 0, 8)
      .beginFill(0xffffff)
      .lineStyle(1, 0x111111, 0.87)
      .endFill()
  );

  circle.position.set(app.screen.width / 2, app.screen.height / 2);

  // Enable interactivity
  app.stage.interactive = true;

  // Follow the pointer
  app.stage.on("pointermove", (e) => {
    circle.position.copyFrom(e.data.global);
  });
})();
