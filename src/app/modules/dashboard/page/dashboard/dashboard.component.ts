import { EventService } from '../../service/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  events: any;
  data = {
    city: false,
    start_date: false,
    end_date: false,
    price: false,
    status: false,
    color: false,
  };
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eventService.get().subscribe((res) => {
      this.events = res;
    });
  }

  sortToggle(sortBy) {
    this.data[sortBy] = !this.data[sortBy];
    this.eventService
      .geSort(sortBy, this.data[sortBy] ? 'asc' : 'desc')
      .subscribe((res) => {
        this.events = res;
      });
  }

  edit(event) {
    console.log(event);
    this.router.navigate(['/dashboard', 'event', event._id]);
  }
  delete(event) {
    this.eventService
      .delete(event._id)
      .pipe(mergeMap((res) => this.eventService.get()))
      .subscribe((res) => {
        this.events = res;
      });
  }
  create() {
    this.router.navigate(['/dashboard', 'create']);
  }
}
