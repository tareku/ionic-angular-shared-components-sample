import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondTestPage } from './second-test.page';

describe('SecondTestPage', () => {
  let component: SecondTestPage;
  let fixture: ComponentFixture<SecondTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
