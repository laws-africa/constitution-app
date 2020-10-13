import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Data from '../../assets/data/data.json';

@Component({
  selector: 'app-casedetail',
  templateUrl: './casedetail.page.html',
  styleUrls: ['./casedetail.page.scss'],
})
export class CaseDetailPage implements OnInit {
  data: any = (Data as any).default;
  case: { title: '', summary: '', citedCases: [], topics: [] };
  relatedTopics = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              private location: Location) { }

  ngOnInit() {
    const topics: [] = this.data.topics;

    this.relatedTopics = [];

    this.route.params.subscribe(params => {
      this.case = this.data.cases.find((caseObject) => caseObject.id === params.id);

      for (const topicId of this.case.topics) {
        this.relatedTopics.push(topics.find(({id}) => id === topicId));
      }
    });
  }

  navigateToDetails(id: any) {
    this.navCtrl.navigateForward('tabs/topics/detail/' + id);
  }
}
