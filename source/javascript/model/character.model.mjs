'use strict';

export class CharacterModel {

    // Attributes

    #privateID;
    #privateNameCharacter;
    #privateStatus;
    #privateSpecie;
    #privateGender;
    #privateUrlImg;

    #privateOrigin
    #privateLocation

    #privateListOfEpisodes


    // Constructor

    constructor() {
        this.#privateID = 0
        this.#privateNameCharacter = '';
        this.#privateStatus = '';
        this.#privateSpecie = '';
        this.#privateGender = '';
        this.#privateUrlImg = '';
        this.#privateOrigin = '';
        this.#privateLocation  = '';
        this.#privateListOfEpisodes = {};
    }

    // Getters & Setters

    getID(){
        return this.#privateID
    }
    setID(id){
        this.#privateID = id
    }
    getName() {
        return this.#privateNameCharacter;
    }
    setName(name) {
        this.#privateNameCharacter = name;
    }
    getStatus() {
        return this.#privateStatus;
    }
    setStatus(status) {
        this.#privateStatus = status;
    }
    getSpecie(){
        return this.#privateSpecie;
    }    
    setSpecie(specie){
        this.#privateSpecie = specie;
    }
    getGender(){
        return this.#privateGender
    }    
    setGender(gender){
        this.#privateGender=gender
    }
    getUrl(){
        return this.#privateUrlImg;
    }
    setUrl(url){
        this.#privateUrlImg = url;
    }


    setOrigin(_Origin){
        this.#privateOrigin = _Origin
    }

    setLocation(_Location){
        this.#privateLocation = _Location
    }
    setListOfEpisodes(_ListOfEpisodes){
        this.#privateListOfEpisodes = _ListOfEpisodes
    }

    getOrigin(){
        return this.#privateOrigin
    }

    getLocation(){
        return this.#privateLocation
    }
    getListOfEpisodes(){
        return this.#privateListOfEpisodes
    }

    // Metodos accesores

    toString() {
        return `[${this.#privateSpecie}] | ${this.#privateNameCharacter}: ${this.#privateStatus}`;
    }



}