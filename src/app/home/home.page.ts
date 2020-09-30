import { Component, OnInit } from '@angular/core';
import * as Date from "../../../backend/JSON/data.json";
import * as Cases from "../../assets/data/cases.json"

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any = (Date as any).default;
  cases: any = (Cases as any).default;

  featuredTopics: any = [];
  featuredCases: any = [];
  
  constructor() { }

  ngOnInit() {
    console.log(this.data)
    this.featuredTopics = this.data.topics.filter((o) => o.featured === true);
    this.featuredCases = this.data.cases.filter((o) => o.featured === true);

  }

}
