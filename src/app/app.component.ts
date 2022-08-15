import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teamgenerator';
  newMember = "";
  members: string[] = [];
  errorMsg: string="";
  noTeams: number | "" ="";
  teams: string[][]=[]
  newProject =""
  startDate: any|""=""
  endDate: any|""=""
  FE=""
  UI=""
  BE=""
  today= new Date()
  feTeam: {name?: string, role?: string,startDateofCurrenProject?: any|string, endDateofCurrenProject?: any|string}[]=[]
  beTeam: {name?: string, role?: string,startDateofCurrenProject?: any|string, endDateofCurrenProject?: any|string}[]=[]
  uiTeam: {name?: string, role?: string,startDateofCurrenProject?: any|string, endDateofCurrenProject?: any|string}[]=[]
  newUI: number=0
  newFE: number=0
  newBE: number=0
  developers: {name?: string, role?: string,startDateofCurrenProject?: any|string, endDateofCurrenProject?: any|string}[]=[
    {name:"Bolu Oye",
    role:"UI",
    startDateofCurrenProject:"2022-05-04T19:34:25.663Z",
    endDateofCurrenProject:"2022-08-02T19:34:25.663Z"
   },
   {name:"Megan Doe",
  role:"UI",
  
},  

{name:"Timmy Top",
    role:"FE",
    startDateofCurrenProject:"2022-07-04T19:34:25.663Z",
    endDateofCurrenProject:"2022-11-02T19:34:25.663Z"
  },
  {name:"Zedd Skrillex",
  role:"FE",
  startDateofCurrenProject:"2022-04-04T19:34:25.663Z",
  endDateofCurrenProject:"2022-09-02T19:34:25.663Z"
 },
{name:"Martin Diplo",
role:"BE",
startDateofCurrenProject:"2022-08-04T19:34:25.663Z",
endDateofCurrenProject:"2022-12-02T19:34:25.663Z"
},
{name:"Akani Ade",
role:"BE",
startDateofCurrenProject:"2022-06-04T19:34:25.663Z",
endDateofCurrenProject:"2022-09-02T19:34:25.663Z"
}
]


  
  constructor( public testService: TestService){
   
  }

  onProjectNameChange(prop:string){
    this.newProject= prop
    console.log(this.newProject)
  }

  onSDChange(prop:string){
    
    this.startDate= new Date(prop)
    console.log(this.startDate)
    
    }

  onEDChange(propp:string){
    this.endDate= new Date(propp)
    console.log(this.endDate)
  }

  onFEChange(prop:string){
    this.FE= prop
    this.newFE=0
    console.log(this.FE)
  }

  
  onBEChange(prop:string){
    this.BE= prop
    this.newBE=0
    console.log(this.BE)
  }

  
  onUIChange(prop:string){
    this.UI= prop
    this.newUI=0
    console.log(this.UI)
  }
  
  checkAvailaibility=()=>{
    this.uiTeam=[]
    this.beTeam=[]
    this.feTeam=[]

    this.errorMsg=""
    
    for (let i of this.developers){
        let convertedEndDate= new Date(i.endDateofCurrenProject)
        let convertedStartDate=new Date(i.startDateofCurrenProject)
        if(this.endDate==""){
          this.errorMsg="Input the End Date of your project"
        }

        if(this.startDate==""){
          this.errorMsg="Input the Start Date of your project"
        }
        if(i.endDateofCurrenProject===undefined){
          if(i.role=="UI"){
            this.uiTeam.push(i)
          }else if(i.role=="BE"){
            this.beTeam.push(i)

          }else{
            this.feTeam.push(i)

          }
        }else if(((convertedEndDate <= this.startDate)||(convertedStartDate>= this.endDate))){
          if(i.role=="UI"){
            this.uiTeam.push(i)
          }else if(i.role=="BE"){
            this.beTeam.push(i)

          }else{
            this.feTeam.push(i)
          }
        }
       
      }
      

      if(this.feTeam.length<Number(this.FE)){
        this.newFE= Number(this.FE)- this.feTeam.length
      }else{
        this.feTeam= this.feTeam.slice(0,Number(this.FE))
      }

      if(this.beTeam.length<Number(this.BE)){
        this.newBE= Number(this.BE)- this.beTeam.length 
      }else{
                this.beTeam= this.beTeam.slice(0,Number(this.BE))
      }
      if(this.uiTeam.length<Number(this.UI)){
        this.newUI= Number(this.UI)- this.uiTeam.length
      } else{
        this.uiTeam= this.uiTeam.slice(0,Number(this.UI))
      }
     
    console.log(this.uiTeam,this.beTeam,this.feTeam)
    console.log(this.newUI,this.newBE,this.newFE) 
  }
  
 
  // addMember() {
  //   if(!this.newMember){
  //     this.errorMsg="Name cannot be empty"
  //     return
  //   }
  //   this.members.push(this.newMember)
  //   this.errorMsg=""
  //   this.newMember="";
  // }

  // onInput(member:string){
  //   this.newMember=member 
  // } 

  // onInputt(noofTeam: string){
  //   this.noTeams = Number (noofTeam)
  //   console.log(this.noTeams)
  // } 

  // generateTeams () {
  //   if(!this.noTeams || this.noTeams<=0 ){ 
  //     this.errorMsg="Invalid Input"
  //     return
  //   }
  //   if (this.noTeams>this.members.length){
  //     this.errorMsg="Not enough members"
  //     return
  //   }
  //   this.errorMsg=""
  //   const copyMembers= [...this.members]
  // while(copyMembers.length){
  //   for (let i=0; i <this.noTeams; i++){
  //     const randomIndex= Math.floor(Math.random() * copyMembers.length)
  //     const splicedMember=copyMembers.splice(randomIndex,1)[0]
  //     if(!splicedMember)break
  //     if(this.teams[i]){
  //       this.teams[i].push(splicedMember)
  //     }else{
  //       this.teams[i]= [splicedMember]
  //     }
  //    }
  // }
  // this.members=[]
  // this.noTeams=""
  // }


}
 