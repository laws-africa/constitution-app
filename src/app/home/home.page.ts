import { Component, OnInit } from '@angular/core';
import * as Topics from "../../assets/data/topics.json"
import * as Cases from "../../assets/data/cases.json"

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  topics: any = (Topics as any).default;
  cases: any = (Cases as any).default;

  featuredTopics: any = [];
  featuredCases: any = [];
  
  constructor() { }

  ngOnInit() {
    this.featuredTopics = this.topics.filter((o) => o.featured === true);
    this.featuredCases = this.cases.filter((o) => o.featured === true);

  }

}
