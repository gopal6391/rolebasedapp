import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    usersForm: FormGroup
    loading = false;
    currentUser: User;
    userFromApi: User;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.usersForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            role: ['', Validators.required]
        });

        this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            console.log('user---->', user);
            this.usersForm.get("firstName").setValue(user.firstName);
            this.usersForm.get("lastName").setValue(user.lastName);
            this.usersForm.get("role").setValue(user.role);
            this.loading = false;
            this.userFromApi = user;
        });
    }
}