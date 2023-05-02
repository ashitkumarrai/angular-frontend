interface User{
    
    //             "username": "Brijesh",
    //             "firstName": "Brijesh",
    //             "lastName": "Yadav",
    //             "email": "byadav2751@gmail.com",
    //             "contact": "9112589991",
    //             "imageUrl": null,
    //             "enabled": true,
    //             "adress": "pune"


    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    contact: string
    imageUrl: string | null
    enabled: boolean
    adress: string
    
}
export interface JobModel{
    //
    
    
    

    id: number
    title: string
    description: string
    location: string
    jobType: string
    requirements: string[]
    totalCandidatesApplied: number
    employer: {
        user: User
        company: string
        industry: string
        
    }

    candidatesApplied: [
        {
            user: User
        }
    ]


}