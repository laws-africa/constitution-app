import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import * as Topics from "../../assets/data/topics.json"
@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.page.html',
  styleUrls: ['./topicdetail.page.scss'],
})
export class TopicdetailPage implements OnInit {
  topics: any = (Topics as any).default;
  topic: {};

  constructor(private route: ActivatedRoute, private location: Location) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.topic = this.topics.find((topic) => topic.id == params['id'])
    });
  }

  previous() {
    this.location.back();
  }
}
