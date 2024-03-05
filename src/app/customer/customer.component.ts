import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute) {
  }
  data=''

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((data)=>{
      this.data=data.get('data')!
    })
  }

}
