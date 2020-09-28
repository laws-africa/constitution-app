import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConstitutionPage } from './constitution.page';

describe('ConstitutionPage', () => {
  let component: ConstitutionPage;
  let fixture: ComponentFixture<ConstitutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstitutionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConstitutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
