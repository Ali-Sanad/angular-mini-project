import { Fields } from '../../shared/form-data';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {
    this.fields = [
      {
        id: 0,
        school: this.school,
        sectionName: '',
        className: '',
        Grades: '',
      },
    ];
  }

  ngOnInit(): void {}
  schoolList: any = [
    'Cairo English School',
    'British international schools in Cairo',
    'Saint Georges college',
  ];
  websiteGrade: any = [1, 2, 3];
  fields = [];
  school: '';

  @Output() classesFields = new EventEmitter<Fields>();

  submit(f) {
    this.fields[0].school = this.school;
    // to send data to another component
    for (let item of this.fields) {
      this.classesFields.emit(item);
    }
  }
  //function for add anothor row to enter data
  addClass(e) {
    e.stopPropagation();
    e.preventDefault();
    this.fields[0].school = this.school;
    this.fields.push({
      id: this.fields.length + 1,
      school: this.school,
      sectionName: '',
      className: '',
      Grades: '',
    });
  }

  deleteRow(i) {
    this.fields.splice(i, 1);
  }
  //cancel all  user's actions
  cancelAction(f) {
    f.reset();
    this.fields = [];
    this.fields.push({
      id: 0,
      school: this.school,
      sectionName: '',
      className: '',
      Grades: '',
    });
  }
}
