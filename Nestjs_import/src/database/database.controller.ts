import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { UserService } from 'src/user/user.service';

@Controller('database')
export class DatabaseController {
    bd : string[]
    constructor(private readonly databaseService : DatabaseService, private readonly userSV : UserService){}
    @Get()
    getUserHello(){
    this.bd = this.userSV.showAll()
    return this.userSV.showAll()
    }
    @Get('BD')
    getBD(){
        return this.databaseService.getInsertInBD(this.bd)
    }
}
