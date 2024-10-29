import { Injectable } from '@nestjs/common';
export let exportUsers : string[] = []
@Injectable()
export class UserService {
    private users : string[] = []
    sayHelloUser(){
        return "Hello User!"
    }

    createUsers(name : string){
        this.users.push(name)
    }
    
    showAll(){
        if(this.users.length >= 1){
            exportUsers = this.users
        }
        return this.users
    }
}
