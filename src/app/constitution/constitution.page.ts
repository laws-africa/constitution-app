import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as Constitution from '../../assets/data/constitution.json';

@Component({
	selector: 'app-constitution',
	templateUrl: './constitution.page.html',
	styleUrls: ['./constitution.page.scss']
})
export class ConstitutionPage implements OnInit, AfterViewInit {
	constitution: any = (Constitution as any).default;
	navigate: any;
	newContent: any;
	@ViewChild('akn') aknView: ElementRef;

	constructor(private sanitized: DomSanitizer, private route: ActivatedRoute,  private location: Location) {
		this.newContent = this.sanitized.bypassSecurityTrustHtml(this.constitution.body);
	}

	ngOnInit() {
		this.sideMenu();
	}

	ngAfterContentChecked() {
		this.route.params.subscribe(params => {
				if (params.id) { 
					this.scroll(params.id);
				}	
			
		});
	}

	ngAfterViewInit() {

		// handle clicking on anchors
		this.aknView.nativeElement.querySelectorAll('a[href^="#"]').forEach(a => {
			a.addEventListener('click', e => {
				e.preventDefault();
				this.scroll(e.target.getAttribute('href').slice(1));		
			});
		});
	}

	scroll(id) {

		let el = document.getElementById(id);
		console.log(el);
		if(el) {
			el.scrollIntoView();
		}
	}

	sideMenu() {
		let menuList = this.constitution.toc.map((toc, i) => {
			return (
				{
					title: toc.title,
					id: toc.id,
					children: toc.children
				}
			)
		});
		this.navigate = menuList;
	}

	previous() {
    this.location.back();
  }
}
