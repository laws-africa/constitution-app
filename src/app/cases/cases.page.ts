import { Component, OnInit } from '@angular/core';
import * as Data from "../../assets/data/data.json"

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage implements OnInit {
  data: any = (Data as any).default;
  cases: [];

  constructor() { }

  ngOnInit() {
    this.cases = this.data.cases;
  }

}
