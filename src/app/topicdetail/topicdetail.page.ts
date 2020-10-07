import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import * as Data from "../../assets/data/data.json"
@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.page.html',
  styleUrls: ['./topicdetail.page.scss'],
})
export class TopicdetailPage implements OnInit {
  data: any = (Data as any).default;
  topic: { title: '', summary: '', content: '', cases: []};
  linkedCases: [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.topic = this.data.topics.find((topic) => topic.id == params['id'])
      this.linkedCases = this.topic.cases;
      for(const caseId of this.topic.cases) {
        this.linkedCases.push(this.topic.cases.find(({id}) => id === caseId));
      }
    });
  }

  previous() {
    this.location.back();
  }

 
  navigateToDetails(id: any) {
    this.router.navigateByUrl('tabs/cases/detail/' + id);
  }
}
