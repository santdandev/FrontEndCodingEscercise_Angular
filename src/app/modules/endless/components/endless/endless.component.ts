import { Component, OnInit } from '@angular/core';
import { EndlessService } from '../../services/endless.service';
import { UtilityService } from '../../utility/utility.service';
import { Step } from '../../models/step.model';

@Component({
  selector: 'app-endless',
  templateUrl: './endless.component.html',
  styleUrls: ['./endless.component.scss']
})
export class EndlessComponent implements OnInit {
  howItWorks: Step[];
  constructor(private endlessService: EndlessService, private utilityService: UtilityService) { 
    this.howItWorks = [];
  }

  ngOnInit(): void {
    this.getHowItWorks();
  }

  getHowItWorks() {
    this.endlessService.getHowItWorks().subscribe(data => {
      //console.log(data);
      this.howItWorks = this.utilityService.normalizeData(data);
      //console.log(this.howItWorks);
    });
  }
}
