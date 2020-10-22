import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as Data from '../../../assets/data/data.json';
import { filter, pairwise } from 'rxjs/operators';
import * as Constitution from '../../../assets/data/constitution.json';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: any = (Data as any).default;
  constitutionData: any = (Constitution as any).default
  topic: { title: '', summary: '', content: '', cases: [], references: [] };
  linkedCases: any[] = [];
  linkedReferences: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private location: Location) { }

  getObject(array, key, value) {
    var o;
    array.some(function iter(a) {
      if (a[key] === value) {
        o = a;
        return true;
      }
      return Array.isArray(a.children) && a.children.some(iter);
    });
    return o;
  }


  ngOnInit() {
    console.log(this.router.getCurrentNavigation());

    this.route.params.subscribe(params => {
      this.topic = this.data.topics.find((topic) => topic.id === params.id);
      console.log(this.topic.references)
      this.linkedReferences = [];
      this.linkedCases = [];

      for (const reference of this.topic.references) {

        const linkedReference = this.getObject(this.constitutionData.toc, "id", reference);
        console.log(linkedReference)
        this.linkedReferences.push(linkedReference);
      }
      for (const caseId of this.topic.cases) {
        const linkedCase = this.data.cases.find((c) => c.id === caseId);
        this.linkedCases.push(linkedCase);
      }
    });
  }

  previous() {
    this.location.back();
  }
}
