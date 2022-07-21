"use strict";

// Services
import { DescriptionView } from "../view/description.view.mjs";

let ID = ''

class DescriptionController {

    #privateDescription;
    #id;

    constructor() {
        this.#privateDescription = new DescriptionView();
        this.#id = ''
    }

    setId(id){
        this.#id = id
    }
    getId(){
        return this.#id
    }
    
    goToDescription(id){

        localStorage.setItem("id",id)
                
    }

    init(){
        this.#privateDescription.init()
    }

}

export const description = new DescriptionController();
description.init()