import { Component, OnInit } from '@angular/core';
import * as Data from "../../assets/data/data.json";
import * as Cases from "../../assets/data/cases.json"
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any = (Data as any).default;

  featuredTopics: any = [];
  featuredCases: any = [];
  highlights: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.featuredTopics = this.data.topics.filter((o) => o.featured === true);
    this.featuredCases = this.data.cases.filter((o) => o.featured === true);
    this.highlights = this.data.topics.filter((o) => o.highlighted === true)
  }

  search(event) {
    console.log(event.target.value)
    this.router.navigateByUrl('/tabs/results/' + event.target.value);
  }

  navigationToCaseDetails(id) {
    this.router.navigateByUrl('/tabs/cases/detail/' + id);
  }

  navigationToTopicDetails(id) {
    this.router.navigateByUrl('/tabs/topics/detail/' + id);

  }
}
