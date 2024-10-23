import { Injectable } from '@nestjs/common';
import { throws } from 'assert';
import { error } from 'console';

@Injectable()
export class AppService {
  findAllDogs(dogs: object[]) {
    return dogs.map((dog : {name : string}) => dog.name);
  }

  findOneDog(body: Array<{id : number, name : string}>, id: number) {
    if(!Array.isArray(body) || body.length === 0){
      return {message: '[ERROR]: The API returns nothing!'}
    }
   let yourDog : {name : string} =  body.find((dogs : {id:number, name : string}) => dogs.id === id)
    return yourDog.name? `Your Dog is ${yourDog.name}`: 'Your dog is not on the list'
  }

  remove_dog(dogs : object[], id : number){
    let index = Array.isArray(dogs) ? dogs.findIndex((dog : {id : Number})=> dog.id === id) : null;
    if(index === -1){
      return {message: 'The dog not exist or it got already deleted from the list.', dogsList : dogs}
    }
    if(!index){
      throw new Error('API ERROR')
    }
    let takedOut = dogs[index]
    dogs.splice(index,1)
    return {message: "Dog removed", Dog : takedOut, remainsDogs : dogs};
  }

  getRandomDog(dogs : object[]): object {
    let arrOfIDS = dogs.map((dog : {id:number}) => {return dog.id})
    let maxValue = Math.max(...arrOfIDS), minValue = Math.min(...arrOfIDS)
    let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    return dogs[randomNumber];
  }
}
