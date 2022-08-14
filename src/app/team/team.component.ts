import { Component, OnInit,Input } from '@angular/core';
// import { TestService } from '../test.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() members: string[]=[];
  @Input() index=0;
  @Input() Tun:any;
  currentDate=new Date ()
 
  constructor() { }

  ngOnInit(){
    this.Tun.prinSum(this.index)
    
  }

}
