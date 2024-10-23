import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
export let path = 'user'
@Controller(path)
export class UserController {
    private body : object
    constructor(private readonly UserService : UserService){}

    @Get()
    createUsers(){
        this.UserService.createUsers('Pedro')
        this.UserService.createUsers('Carlos')
        this.UserService.createUsers('Zeca-Urubu')
        this.UserService.createUsers('Popai')
        return {message: "Usuários criados", novosUsers : this.UserService.showAll()}
    }
}
