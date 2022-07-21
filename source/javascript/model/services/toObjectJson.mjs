import { Config } from "../../config.mjs";
import { CharacterModel } from "../character.model.mjs";
import { RickAndMortyService } from "./rick-and-morty.service.mjs";


// Datos del servicio

class ObjectData {

    async getDataCharacterModel(){
        
        const data = new RickAndMortyService(Config.RickAndMortyAPI_URL)
        const json = await data.getCharacters()
        const results = json.results

        let characters = new Array

        results.forEach( element => {
            
            let iteratorCharacter = new CharacterModel()

            iteratorCharacter.setID(element.id)
            iteratorCharacter.setName(element.name)
            iteratorCharacter.setStatus(element.status)
            iteratorCharacter.setSpecie(element.species)
            iteratorCharacter.setUrl(element.image)

            characters.push(iteratorCharacter)

        });

        return characters

    }

    async getDataCharacterModelById(id){
        
        const data = new RickAndMortyService(Config.RickAndMortyAPI_URL)
        const json = await data.getCharactersById(id)
        
        let dataFind = new CharacterModel()

        dataFind.setName(json.name)
        dataFind.setStatus(json.status)
        dataFind.setSpecie(json.species)
        dataFind.setUrl(json.image)
        dataFind.setGender(json.gender)
        dataFind.setOrigin(json.origin.name)
        dataFind.setLocation(json.location.name)
        dataFind.setListOfEpisodes(json.episode)

        return dataFind

    }

}

export const data = new ObjectData()

