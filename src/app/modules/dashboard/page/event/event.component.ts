import { EventService } from '../../service/event.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.less'],
})
export class EventComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {}
  eventForm: any;
  isUpdate: boolean;
  id: any;
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    if (this.id) {
      this.isUpdate = true;
      this.eventService
        .getById(this.id)
        .subscribe((res) => this.createForm(res));
    } else {
      this.createForm({});
    }
  }

  createForm(data) {
    this.eventForm = this.fb.group({
      city: [data.city || '', [Validators.required]],
      start_date: [
        (data.start_date && formatDate(data.start_date, 'yyyy-MM-dd', 'en')) ||
          '',
        [Validators.required],
      ],
      end_date: [
        (data.end_date && formatDate(data.end_date, 'yyyy-MM-dd', 'en')) || '',
        [Validators.required],
      ],
      price: [
        data.price || '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      status: [data.status || '', [Validators.required]],
      color: [data.color || '', [Validators.required]],
    });
  }

  get city() {
    return this.eventForm.get('city');
  }
  get start_date() {
    return this.eventForm.get('start_date');
  }
  get end_date() {
    return this.eventForm.get('end_date');
  }

  get price() {
    return this.eventForm.get('price');
  }
  get color() {
    return this.eventForm.get('color');
  }
  get status() {
    return this.eventForm.get('status');
  }

  onSubmit() {
    console.log(this.eventForm);
    if (this.isUpdate) {
      this.eventService
        .update(this.id, this.eventForm.value)
        .subscribe((res) => {
          console.log('updated', res);
          this.router.navigate(['dashboard']);
        });
    } else {
      this.eventService.create(this.eventForm.value).subscribe((res) => {
        console.log('updated', res);
        this.router.navigate(['dashboard']);
      });
    }
  }
}
