import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Client} from "../../../../shared/models/Client";
import {HttpService} from "../../service/http.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
    selector: 'app-compte-form',
    templateUrl: './compte-form.component.html',
    styleUrls: ['./compte-form.component.scss']
})

export class CompteFormComponent implements OnInit {
    //public client: Client = {} as Client;
    public showPasswordConfirmationMessageInvalid: boolean = false;
    registerClientForm: FormGroup;
    client: Client;

    constructor(private readonly formBuilder: FormBuilder, public router: Router, private httpService: HttpService) {
    }

    ngOnInit(): void {
        this.registerClientForm = this.formBuilder.group({
            nom: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
            prenom: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
            adresse: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
            cp: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
            ville: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
            tel: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
            civilite: ['', Validators.required],
            pays: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
            login: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(4)]]
        });
    }

    onSubmit() {
        this.httpService.PostRegister(this.client).subscribe(result => {
            if (result && result.success) {
                alert("Ça marche tu es enregistré !");
                this.client.nom = this.registerClientForm.get('nom').value;
                this.client.prenom = this.registerClientForm.get('prenom').value;
                this.client.adresse = this.registerClientForm.get('adresse').value;
                this.client.cp = this.registerClientForm.get('cp').value;
                this.client.ville = this.registerClientForm.get('ville').value;
                this.client.tel = this.registerClientForm.get('tel').value;
                this.client.email = this.registerClientForm.get('email').value;
                this.client.civilite = this.registerClientForm.get('civilite').value;
                this.client.pays = this.registerClientForm.get('pays').value;
                this.client.login = this.registerClientForm.get('login').value;
                this.client.password = this.registerClientForm.get('password').value;
                this.router.navigate(['/recapitulatif'], {queryParams: this.client});
            } else {
                alert("Ton enregistrement a échoué !");
            }
        });
    }
}
