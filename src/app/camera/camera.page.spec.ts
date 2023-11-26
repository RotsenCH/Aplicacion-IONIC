import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraPage } from './camera.page';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


describe('CameraPage', () => {
  let component: CameraPage;
  let fixture: ComponentFixture<CameraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CameraPage],
      imports:[IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();
    
    
    TestBed.createComponent(CameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
