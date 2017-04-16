import { Component, OnInit } from '@angular/core';
import {MemberService} from "../member.service";

@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  posts : Object;

  constructor(private memberService:MemberService) { }

  ngOnInit() {
    this.memberService.getMembers().subscribe( (posts) => {
    });
  }

}
