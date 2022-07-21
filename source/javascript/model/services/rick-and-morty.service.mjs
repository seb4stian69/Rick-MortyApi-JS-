export class RickAndMortyService {
    
    #privateUrl;

    constructor(url) {
        this.#privateUrl = url;
    }

    getCharacters() {
        return fetch(`${this.#privateUrl}/character`).then(response => response.json());
    }

    getCharactersById(id){
        return fetch(`${this.#privateUrl}/character/${id}`).then(response => response.json());
    }

}