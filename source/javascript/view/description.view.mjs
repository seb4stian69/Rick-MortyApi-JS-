'use strict';

// Service
import { data } from "../model/services/toObjectJson.mjs";

let div = document.getElementById('idDescription')

export class DescriptionView {    

    async init() {
        
        let id = localStorage.getItem('id')

        let br = document.createElement('br')
        let br1 = document.createElement('br')
        let br2 = document.createElement('br')
        let br3 = document.createElement('br')

        const info = await data.getDataCharacterModelById(id)
        
        let name = document.createElement("h1")
        name.innerHTML = `${info.getName()} | [ ${info.getSpecie() }]`

        let img = document.createElement("img")
        img.src = info.getUrl()

        let status = document.createElement('p')
        status.innerHTML = `<b>Status:</b> ${info.getStatus()}`
        let genero = document.createElement('p')
        genero.innerHTML = `- <b>Gender:</b> ${info.getGender()}`
        let origin = document.createElement('p')
        origin.innerHTML = `<b>Origin:</b> ${info.getOrigin()}`
        let location = document.createElement('p')
        location.innerHTML = ` - <b>Location:</b> ${info.getLocation()}`
        let listOfEpisodes = document.createElement('p')
        listOfEpisodes.innerHTML = `<b>List of episodes:</b>\n`

        let list = info.getListOfEpisodes()

        let ul = document.createElement('ol')

        list.forEach(element => {
            
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.innerHTML = element
            a.href = element

            li.append(a)
            ul.append(li)

        });
        

        

        div.append(name,img,br,status,genero,br1,origin,location,br2,listOfEpisodes,ul)

    }

}