import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'generic-store';
  items = ['paul', 'dayana', 'emily'] 

  power = 10;
  public addItem(title: string){
    this.items.push(title)
  }

  public deleteItem(index: number){
    // delete this.items[index]
    this.items.splice(index,1);
  }

  
}
