import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {LoginService} from "./login.service";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'kiel-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    registerForm: FormGroup;
    showPassword = false;
    showConfPassword = false;
    selectedIndex = 0;
    showLoginPassword = false;

    constructor(private fb: FormBuilder,
                private loginService: LoginService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.createRegisterForm();
    }

    createRegisterForm() {
        this.registerForm = this.fb.group({
            emailId: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required]),
            confirmPassword: new FormControl(null, [Validators.required]),
            firstName: new FormControl("", [Validators.required]),
            lastName: new FormControl("", [Validators.required]),
            phNo: new FormControl("", [Validators.minLength(10), Validators.maxLength(10)])
        })
    }


    registerUser() {
        let user: User = {
            firstName: this.registerForm.controls["firstName"].value,
            lastName: this.registerForm.controls["lastName"].value,
            email: this.registerForm.controls["emailId"].value,
            password: this.registerForm.controls["password"].value,
            phNo: this.registerForm.controls["phNo"].value,
            role: 'USER'
        };
        if (this.registerForm.valid) {
            this.loginService.registerUser(user).subscribe(res => {
                this.snackBar.open(res.message, res.code, {
                    duration: 2000
                });
            }, (error) => {
                this.snackBar.open(error, "500", {
                    duration: 2000
                });
            })

        }

    }

    resetRegisterForm() {
        this.registerForm.reset();
    }
}
