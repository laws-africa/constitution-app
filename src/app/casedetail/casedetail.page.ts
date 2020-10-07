import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import * as Data from "../../assets/data/data.json"

@Component({
  selector: 'app-casedetail',
  templateUrl: './casedetail.page.html',
  styleUrls: ['./casedetail.page.scss'],
})
export class CaseDetailPage implements OnInit {
  data: any = (Data as any).default;
  case: { title: '', summary: '', citedCases: [], topics: [] };
  relatedTopics = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const topics: [] = this.data.topics;

    this.relatedTopics = [];
  
    this.route.params.subscribe(params => {
      this.case = this.data.cases.find((caseObject) => caseObject.id === params['id'])
      for(const topicId of this.case.topics) {
        this.relatedTopics.push(topics.find(({id}) => id === topicId));
      }
    });

    console.log(this.relatedTopics);
  }

  previous() {
    this.location.back();
  }

  navigateToDetails(id: any) {
    this.router.navigateByUrl('tabs/topics/detail/' + id);
  }
}
