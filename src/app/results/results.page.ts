import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import * as Data from "../../assets/data/data.json";
import * as Constitution from '../../assets/data/constitution.json';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  data: any = (Data as any).default;
  constitution: any = (Constitution as any).default;
  searchableProvisions: {title: string, content: string, id: string}[];
  cases: [];
  topics: [];
  provisions: {title: string, content: string, id: string}[];
  term = '';

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    this.setupConstitutionSearch();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.term = params.term;
      const needle = this.term.toLocaleLowerCase();

      this.cases = this.data.cases.filter((x) => x.title.toLowerCase().includes(needle) || (x.summary ? x.summary.includes(needle) : null));
      this.topics = this.data.topics.filter((x) => x.title.toLowerCase().includes(needle) || (x.summary ? x.summary.includes(needle) : null));
      this.provisions = this.searchableProvisions.filter((x) => x.title.includes(needle) || x.content.includes(needle));
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

  /**
   * Setup a list of provisions that we can search, which are all the sections of the constitution
   */
  setupConstitutionSearch() {
    // everything that can contain searchable text
    const selector = '.akn-p, .akn-listIntroduction, .akn-intro, .akn-wrapUp';
    const body = new DOMParser().parseFromString(this.constitution.body, 'text/html');
    this.searchableProvisions = [];

    body.querySelectorAll('.akn-section').forEach(section => {
      // gather text content
      const text = [];
      section.querySelectorAll(selector).forEach(elem => {
        text.push(elem.textContent);
      });

      this.searchableProvisions.push({
        title: section.querySelector('h3').textContent.toLocaleLowerCase(),
        content: text.join(' ').toLocaleLowerCase(),
        id: section.id
      });
    });
  }
}
