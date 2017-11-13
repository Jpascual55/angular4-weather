import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MainComponent, HeaderComponent],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
