"use strict";

// Views
import { IndexView } from "../view/index.view.mjs";


class IndexController {

    #privateView;

    constructor() {
        this.#privateView = new IndexView();
    }

    async init() {
        await this.#privateView.init();
    }

}

export const index = new IndexController();
index.init();