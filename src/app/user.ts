export class User {

    constructor(
        public id: number,
        public email: string,
        public cf: string,
        public name: string,
        public surname: string,
        public birthdate: string,
        public password: string,
        public salt: string,
        public creationdate: string,
        public sex: string,
        public groupid: number){
        
    }
}
