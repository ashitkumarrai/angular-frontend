export interface UserModel{

    
     username: string
     password:string
    firstName: string
    lastName: string
     email: string
    contact:string
    imageUrl: string|null
     adress: string
    



}

export interface CandidateModel{
    user: UserModel;
}