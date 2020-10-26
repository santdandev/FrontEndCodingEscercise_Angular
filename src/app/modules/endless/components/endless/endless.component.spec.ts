import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EndlessComponent } from './endless.component';
import { EndlessService } from '../../services/endless.service';
import { UtilityService } from '../../utility/utility.service';
import { By } from '@angular/platform-browser';

import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";

describe('EndlessComponent', () => {
  let component: EndlessComponent;
  let fixture: ComponentFixture<EndlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ EndlessComponent ],
      providers: [EndlessService, UtilityService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    let spy_getHowItWorks = spyOn(component,"getHowItWorks").and.returnValue();
    component.ngOnInit();
    expect(component.howItWorks).toEqual([]);
  });


  it('should call getPostDetails and get response as empty array', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(EndlessService);
    let spy_getHowItWorks = spyOn(service,"getHowItWorks").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getHowItWorks();
    tick(100);
    expect(component.howItWorks).toEqual([]);
  }));

  it('should call getHowItWorks and get response as array', fakeAsync(() => {
    const respData = [{"id":"d11b10ba-1cd8-48f8-93eb-454b716fd5a0","stepNumber":"2","versionContent":[{"title":"Request A Delivery","body":"Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.","effectiveDate":"2019-05-04T03:04:05.000Z"},{"title":"We Deliver","body":"Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.","effectiveDate":"2019-04-04T05:04:05.000Z"}]},{"id":"dce2554e-00dc-45c1-99c1-93a554d7eba7","stepNumber":"4","versionContent":[{"title":"Request Another Delivery","body":"Get your next gaming fix by updating your profile then initiating your next shipment.","effectiveDate":"2019-05-20T03:04:05.000Z"}]},{"id":"422e6b50-9c5a-43d5-90cb-839f4678cb75","stepNumber":"3","versionContent":[{"title":"Keep What You Like","body":"Tell us “no” by returning any unwanted products in the enclosed packaging.","effectiveDate":"2019-04-04T03:04:05.000Z"},{"title":"Keep What You Want","body":"Tell us “no thanks” by returning any unwanted products in the enclosed packaging.","effectiveDate":"2019-04-04T05:04:05.000Z"},{"title":"Keep Everything","body":"Tell us “no thanks” by returning any unwanted products in the enclosed packaging.","effectiveDate":"2019-02-04T08:04:05.000Z"}]},{"id":"d9a439d0-8dbf-4bab-8e08-626f8194a075","stepNumber":"1","versionContent":[{"title":"Fill Out a Profile","body":"We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.","effectiveDate":"2019-05-20T03:04:05.000Z"}]}];
    const normalizedData = [
      {number: "01", title: "Fill Out a Profile", body: "We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front."},
      {number: "02", title: "Request A Delivery", body: "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way."},
      {number: "03", title: "Keep What You Like", body: "Tell us “no” by returning any unwanted products in the enclosed packaging."},
      {number: "04", title: "Request Another Delivery", body: "Get your next gaming fix by updating your profile then initiating your next shipment."}
    ];

    const service = fixture.debugElement.injector.get(EndlessService);
    let spy_getHowItWorks = spyOn(service,"getHowItWorks").and.callFake(() => {
      return Rx.of(respData).pipe(delay(4000));
    });

    component.getHowItWorks();
    tick(4000);
    expect(component.howItWorks).toEqual(normalizedData);

    fixture.detectChanges();
    const compiled = fixture.debugElement;
    expect(compiled.queryAll(By.css('.group-item')).length).toBe(4);
  })) 
});
