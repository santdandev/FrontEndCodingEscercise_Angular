import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  
  constructor() { }

  normalizeData(data) {
    return this.sortSteps(this.extractContent(data));
  }

  private sortSteps(data) {
    const dataAry = [...data];
    dataAry.sort((stepA, stepB) => {
      if (stepA.number > stepB.number )
        return 1;
      if (stepA.number < stepB.number)
        return -1;
      return 0;
    });
    return dataAry;
  }
  private extractContent(data) {
    const dataAry = [...data];
    dataAry.forEach(step => {
      step && step.versionContent && step.versionContent.sort((versionA, versionB) => {
        if (versionA.effectiveData > versionB.effectiveData )
          return -1;
        if (versionA.effectiveData < versionB.effectiveData)
          return 1;
        return 0;
      });
    });
  
    return dataAry.map(step => ({
      number: step.stepNumber<10?`0${step.stepNumber}`:step.stepNumber, title: step.versionContent[0].title, body: step.versionContent[0].body
    }));
  }
}
