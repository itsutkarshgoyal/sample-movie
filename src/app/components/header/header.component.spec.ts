import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientModule, BrowserAnimationsModule,FontAwesomeModule,MatSelectModule],
      providers: [
        { provide: Router, useValue: mockRouter}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should  have search by title defined ', () => {
    const navbar = fixture.debugElement.query(By.css('.input-group.rounded'));
    expect(navbar.nativeElement).toBeDefined();
  });
  
  it('should  have rendered dropdown ', () => {
    const dropdown = fixture.debugElement.query(By.css('#moviefilter'));
    expect(dropdown.nativeElement.children[0].innerHTML.length).toBeDefined();
  });

});
