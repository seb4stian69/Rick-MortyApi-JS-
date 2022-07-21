'use strict';

import {description} from "../controller/description.controller.mjs"
import { data as Characters } from "../model/services/toObjectJson.mjs";

let img

export class IndexView {

    #privateBody;

    constructor() {
        document.title = "Rick and morty | API";
        this.#privateBody = document.querySelector('body');
    }

    async init() {

        let data = await Characters.getDataCharacterModel()
        
        data.forEach( element => {
            
            let div = document.createElement('div')
            div.classList = 'characterDiv'
            
            let p = document.createElement('h2')
            img = document.createElement('img')

            img.addEventListener( "click" ,

                function() {
                    window.open("description.html")
                    description.goToDescription(element.getID())
                    description.init()
                }
        
            )

            p.innerHTML = element.toString()
            img.src = element.getUrl()

            div.append(p,img)

            this.#privateBody.append(div)

        });

    }

}

