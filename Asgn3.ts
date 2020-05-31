import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { UpcomingEventsData } from '../../+state/dashboard.model';

/** Displays the upcoming events. */
@Component({
  selector: 'app-upcoming-card',
  templateUrl: './upcoming-card.component.html',
  styleUrls: ['./upcoming-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingCardComponent implements OnInit {

  // --------------- INPUTS AND OUTPUTS ------------------

  /** Upcoming events. */
  @Input() events: UpcomingEventsData;

  // --------------- LOCAL UI STATE ----------------------
  header_text:string = "Upcoming Events";
  date_1:string="TODAY";
  date_2:string="TOMORROW";

  constructor() { }

  ngOnInit() {
    console.log(this.events);
  }
  

  // --------------- DATA BINDING FUNCTIONS --------------
convertTime1(timestamp){
  let converted = new Date(timestamp*1000); //convert to milisecond.
  console.log("converted time", converted.toDateString());

  var currentHour = converted.getHours();
  if (currentHour > 12){
    return currentHour-12 + " pm";
  }

  if (currentHour<12){
    return currentHour+" am";
  }

  else{
    return currentHour+" pm";
  }

}

convertTime2(timestamp){
  let converted = new Date(timestamp*1000); //convert to milisecond.
  console.log("converted time", converted.toDateString());

  var currentHour = converted.getHours();
  if (currentHour > 12){
    return currentHour-12;
  }

  if (currentHour<12){
    return currentHour;
  }

  else{
    return currentHour;
  }

}

  // --------------- EVENT BINDING FUNCTIONS -------------


  // --------------- OTHER -------------------------------
}
