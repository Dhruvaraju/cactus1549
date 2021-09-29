import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/github/user.service';

@Component({
  selector: 'app-git-info',
  templateUrl: './git-info.component.html',
  styleUrls: ['./git-info.component.css'],
})
export class GitInfoComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private gitService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
    });
  }

  fetchUserDetails() {
    if (null != this.userForm.get('username')) {
      this.gitService
        .fetchGitUserDetails(this.userForm.get('username').value)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  fetchUserRepos() {
    if (null != this.userForm.get('username')) {
      this.gitService
        .fetchRepos(this.userForm.get('username').value)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
