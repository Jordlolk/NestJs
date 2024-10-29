import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    database : object[]
    databaseCop : object[] = []
    idForBD : number = 0
    getClearDB(){
        if(this.databaseCop.length <= 0){
            return "Já está limpo"
        }else{
            this.databaseCop = []
            return {message : "BD apagado", BD : this.databaseCop}
        }
    }
    getInsertInBD(data : any){
        let length = this.databaseCop.length
        let nomes = data.map((nomes : string) => nomes)
        nomes.forEach((users : string) => {
            this.idForBD += 1
            this.databaseCop.push({nome : users, id : this.idForBD})
        });
        return {message : 'Inserido com sucesso', ultimoUser: this.databaseCop[length], BD : this.databaseCop}
    }
}
