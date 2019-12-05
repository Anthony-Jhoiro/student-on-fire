import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nouveau-topic',
  templateUrl: './nouveau-topic.component.html',
  styleUrls: ['./nouveau-topic.component.scss']
})
export class NouveauTopicComponent implements OnInit {

  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required),
  });

  mdOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  

}
