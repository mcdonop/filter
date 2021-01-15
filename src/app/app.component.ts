import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface OptionType {
  value: any;
  viewValue: string;
}

interface OperatorType {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-filter';
  jobId: any;


  jobIdOperator: string = '=';
  jobStates: number[] = [];
  jobNames: string[] = [];
  dateTime: string = "";
  leftDateTimeOperator: string = ">=";
  rightDateTimeOperator: string = "<=";

  jobStatesControl: FormControl = new FormControl();
  jobNamesControl: FormControl = new FormControl();
  dateTimeControl: FormControl = new FormControl();

  jobIdOperators: OperatorType[] = [
    {value: "="},
    {value: ">"},
    {value: ">="},
    {value: "<"},
    {value: "<="},
    {value: "<>"}
  ];

  leftDateTimeOperators: OperatorType[] = [
    {value: "="},
    {value: ">"},
    {value: ">="},
    {value: "<"},
    {value: "<="}
  ];

  rightDateTimeOperators: OperatorType[] = [
    {value: "="},
    {value: ">"},
    {value: "<"},
    {value: "<"},
    {value: "<="}
  ];

  jobStateOptions: OptionType[] = [];
  jobNameOptions: OptionType[] = [];
  dateTimeOptions: OptionType[] = [];

  constructor() {
    this.loadOptions();
  }

  loadOptions(): void {
    this.jobStateOptions = [
      {value: 0, viewValue: "noveuea"},
      {value: 1, viewValue: "queued"},
      {value: 2, viewValue: "running"}
    ];
    this.jobNameOptions = [
      {value: "my-job" , viewValue: "my-job"},
      {value: "make-a-payment", viewValue: "make-a-payment"},
      {value: "open-credit-card-account", viewValue: "open-credit-card-account"}
    ];
    this.dateTimeOptions = [
      {value: "create" , viewValue: "create"},
      {value: "last-modified", viewValue: "last-modified"}
    ];
  }

}
