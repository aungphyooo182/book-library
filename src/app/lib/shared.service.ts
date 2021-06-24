import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {
  public _author;
  public _name;

  getAuthor() {
    // return this._author;
    return localStorage.getItem("author");
  }

  setAuthor(author: string) {
    // this._author = author;
    localStorage.setItem("author", author);
  }

  getName() {
    // return this._name;
    return localStorage.getItem("name");
  }

  setName(name: string) {
    // this._name = name;
    localStorage.setItem("name", name);
  }
}
