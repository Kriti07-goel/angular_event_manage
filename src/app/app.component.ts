import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  @ViewChild(ModalDirective) modal: ModalDirective;

  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();

  addNewEvent() {
    const newEvent: any = {
      time: this.timeInput.value,
      subject: this.subjectInput.value,
      location: this.locationInput.value,
      description: this.descriptionInput.value
    };
  
    this.events.push(newEvent);
    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');
  
    this.modal.hide();
  }
  syncWithCalendar(){

  }
  events: Array<any> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
    {time: '09:00', subject: 'Call with HRs'},
    {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
  ];
  deleteEvent(event : any){
    console.log(event);
    const indexVal = this.events.findIndex(e1 => e1==event);
    console.log(indexVal);
    this.events.splice(indexVal,1);
    console.log(this.events);
    console.log("inside");
  };

}
