import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector : 'app-event',
    styleUrls : ['./event.component.less'],
    templateUrl : './event.component.html'
})

export class EventComponent{
    @Input() value : any;
    @Output() deleteEventInstance: EventEmitter<any> = new EventEmitter<any>();

    handleDeleteEvent(){
        this.deleteEventInstance.emit(this.value);
    }
} 
