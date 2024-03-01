"use strict";

import {GameOfLifeModel} from "./model/model.js";
import {GameOfLifeView} from "./view/view.js";
import {GameOfLifeController} from "./controller/controller.js";
window.addEventListener("load", start);

function start() {
    const width=50;
    const height=50;
   
    const model=new GameOfLifeModel(width,height);
    const view=new GameOfLifeView(model);
    const controller=new GameOfLifeController(model,view);
   
    }