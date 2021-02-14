import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];
    headElements = ['ID', 'First Name', 'Last Name', 'Role', 'Username', 'Created Date'];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            console.log(users);
            this.loading = false;
            this.users = users;
        });
    }

    deleteUser(index) {
        console.log(index)
        this.users.splice(index,1);
        console.log(this.users);
    }
}