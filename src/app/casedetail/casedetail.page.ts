import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import * as Cases from "../../assets/data/cases.json"

@Component({
  selector: 'app-casedetail',
  templateUrl: './casedetail.page.html',
  styleUrls: ['./casedetail.page.scss'],
})
export class CaseDetailPage implements OnInit {
  cases: any = (Cases as any).default;
  case: { title: '', summary: ''};

  constructor(private route: ActivatedRoute, private location: Location) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.case = this.cases.find((caseObject) => caseObject.id === params['id'])
    });
  }

  previous() {
    this.location.back();
  }
}
