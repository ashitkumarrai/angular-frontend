import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { JobService } from './job.service';
import { JobModel } from './model/JobModel';


interface job{
 
    job: JobModel,
    companyImage: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobPortal';
 


  
  jobs: job[] = []
  job!:job
  imageLink: string | undefined;
  profileImage: string | undefined;
   ids!: Array<number>;

  constructor(private jobService: JobService) {

    this.job = {
      
      job: {
      id: 1,
        title: "",
          description: "",
            location: "",
              jobType: "",
                requirements: [
                  ""
                ],
                  totalCandidatesApplied: 1,
                    employer: {
        user: {
          id: 4,
            username: "",
              firstName: "",
                lastName: "",
                  email: "",
                    contact: "",
                      imageUrl: "",
                        enabled: true,
                          adress: ""
        },
        company: "",
          industry: ""
      },
      candidatesApplied: [
        {
          user: {
            id: 2,
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            imageUrl: null,
            enabled: true,
            adress: ""
          }
        }
      ]
    },
    companyImage: ""
  }
    
    
   jobService.showAllJobs().subscribe({
     next: (res: any) => {
       console.log(res);
       for (var r of res) {
      
        console.log(r)
         this.job = {
           job: r,
           companyImage : `https://ui-avatars.com/api/?name=${r.employer.company[0]+r.employer.company[1]}`
         }
       
         
         console.log(this.jobs)
         this.jobs.push(this.job);
         this.jobs.push(this.job);
         this.jobs.push(this.job);
         this.jobs.push(this.job);
         this.jobs.push(this.job);

         console.log(this.jobs)
      
         
       }

       console.log(this.jobs)
       console.log(this.jobs.length)
       
       this.jobs.map((j) =>
       {
         if (j.job.employer.user.imageUrl == null) {
          j.job.employer.user.imageUrl= `https://ui-avatars.com/api/?name=${j.job.employer.user.firstName[0]+j.job.employer.user.firstName[1]}`
         }
       })
      }
   });
    
   console.log(this.jobs)
   
    
  
    // console.log(this.jobs[0].job.description)

    // console.log([1,2,3,4])
    
    
   
    
    
    //this.imageLink = `https://ui-avatars.com/api/?name=${this.jobs.}`;
    
  }
  
}



