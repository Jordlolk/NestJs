import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //AppService - Área onde é feita a regra de negócio, quais dados podem ou não serem vistos pelo usuário.
  findAllDogs(dogs: object[]) {
    return dogs.map((dog : {name : string}) => dog.name);
  }
  findOneDog(body: Array<{id : number, name : string}>, id: number) {
    if(!Array.isArray(body) || body.length === 0){
      return {message: '[ERROR]: The API returns nothing!'}
    }
   let yourDog : {name : string} =  body.find((dogs : {id:number, name : string}) => dogs.id === id)
    return yourDog.name? yourDog.name : 'Your dog is not on the list'
  }
  /* getCreate(): number {
    let randomNumber = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    return randomNumber;
  } */
}
