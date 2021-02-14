import { Component, OnInit } from "@angular/core";
import { Role } from '../_models/role';

@Component({ templateUrl: "roles.component.html" })
export class RolesComponent implements OnInit {
  constructor() {}
  roles;
  ngOnInit() {
    this.roles = this.roleList;
    console.log(this.roles);
  }

  public get roleList(): typeof Role {
    return Role;
  }
}
