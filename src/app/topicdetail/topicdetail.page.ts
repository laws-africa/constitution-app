import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private location: Location) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.topic = this.data.topics.find((topic) => topic.id == params['id'])
      this.linkedCases = this.topic.cases;
      console.log(this.linkedCases);
    });
  }

  previous() {
    this.location.back();
  }
}
