import { Component, OnInit } from '@angular/core';
import * as Constitution from '../../assets/data/constitution.json';
// import * as TOC from '../../assets/data/toc.json';

@Component({
	selector: 'app-constitution',
	templateUrl: './constitution.page.html',
	styleUrls: ['./constitution.page.scss']
})
export class ConstitutionPage implements OnInit {
	constitution: any = (Constitution as any).default;
	navigate: any;

	constructor() {
	
	}

	ngOnInit() { 	this.sideMenu();}

	sideMenu() {
		let menuList = this.constitution.toc.map((toc, i) => {
			return (
				{
					title: toc.title,
					url: toc.url
					// icon  : "home"
				}
			)
		});

		this.navigate = menuList;
	}
}
