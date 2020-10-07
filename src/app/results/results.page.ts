import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import * as Data from "../../assets/data/data.json"

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  data: any = (Data as any).default;
  cases: [];
  topics: [];
  term: String = "";
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.term = params['term'];

      this.cases = this.data.cases.filter((x) => x.title.toLowerCase().includes(params['term'])|| (x.summary ? x.summary.includes(params["term"]) : null))
      this.topics = this.data.topics.filter((x) => x.title.toLowerCase().includes(params['term']) || (x.summary ? x.summary.includes(params["term"]) : null))

    });
  }

  previous() {
    this.location.back();
  }

  navigateTopicToDetails(id: any) {
    this.router.navigateByUrl('tabs/topics/detail/' + id);
  }

  navigateCaseToDetails(id: any) {
    this.router.navigateByUrl('tabs/case/detail/' + id);
  }
}
