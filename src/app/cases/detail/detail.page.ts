import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Data from '../../../assets/data/data.json';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: any = (Data as any).default;
  case: { title: '', summary: '', citedCases: [], topics: [] };
  relatedTopics = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              private location: Location) { }

  ngOnInit() {
    const topics: [] = this.data.topics;

    // this.relatedTopics = [];

    this.route.params.subscribe(params => {
      this.case = this.data.cases.find((caseObject) => caseObject.id === params['id']);

      for (const topicId of this.case.topics) {
        const topic = topics.find(({id}) => id === topicId)
        if(topic) this.relatedTopics.push(topic);
      }
    });
  }


  previous() {
    this.location.back();
  }
}