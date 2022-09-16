import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public title = 'welcome to test component';
  public myId = "testId";
  public isDisabled =false;
  public name = "";
  public greating ="";
  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value:any){
    console.log(value);
  }
  
  onClick(event:any){
    console.log(event)
    this.greating="Hello From Rohit"
  }

}
