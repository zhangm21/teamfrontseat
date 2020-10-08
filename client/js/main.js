import Diagram from "./diagram.js";
import InputManager from "./inputmanager.js";

//Pretend like this came from a database request.
const testData = [
    {
        class: "prop",
        drawType: "prop_chair",
        name: "chair",
        color: "gray",
        color2: "darkgray", //https://i.redd.it/kngwbr8svar31.jpg
        posX: -4,
        posY: -2.5,
        size: 1.4,
        angle: Math.PI * 0.25
    },
    {
        class: "prop",
        drawType: "prop_chair",
        name: "chair",
        color: "gray",
        color2: "darkgray",
        posX: 4,
        posY: -2.5,
        size: 1.4,
        angle: Math.PI * 0.75
    },
    {
        class: "actor",
        drawType: "actor",
        name: "Jane Doe",
        initials: "JD",
        color: "green",
        color2: "darkgreen",
        posX: 3,
        posY: 0,
        size: 0.75,
        angle: Math.PI
    },
    {
        class: "actor",
        drawType: "actor",
        name: "John Smith",
        initials: "JS",
        color: "blue",
        color2: "darkblue",
        posX: -3,
        posY: 0,
        size: 0.75,
        angle: 0
    }
];

//Bare JSON is easy to feed into Diagram
const diagram = new Diagram("diagram", testData);
diagram.width = window.innerWidth;
diagram.height = window.innerHeight;
diagram.windowX = diagram.width / diagram.scale / 2;
diagram.windowY = diagram.height / diagram.scale / 2;

new InputManager(diagram);

diagram.draw();