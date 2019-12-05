import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  @Input() openConnexion: boolean;

  exampleForm = new FormGroup({
    identifiant: new FormControl('', Validators.required),
    motDePasse: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

}
