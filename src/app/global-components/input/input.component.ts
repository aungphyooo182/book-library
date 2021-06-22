import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";
import { FormControl, AbstractControl } from "@angular/forms";
import { InputStore } from "./input.store";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent {
  @Input() multiline = false;
  @Input() type: "text" | "number" | "password" | "email" = "text";
  @Input() control: FormControl | AbstractControl;
  @Input() hint;
  @Input() class;
  @Input() readonly;
  @Input() rows;
  @Input() value = "";
  @Input() numberOnly = false;
  @Output() blurEvent = new EventEmitter<any>();
  @Output() keyUpEvent = new EventEmitter<any>();
  constructor(private store: InputStore) {}

  public navigationKeys = [
    "Backspace",
    "Delete",
    "Tab",
    "Escape",
    "Enter",
    "ArrowLeft",
    "ArrowRight",
  ];

  onBlur($event) {
    console.log("this is blur");
    // this.blurEvent.emit($event);
  }

  keyUp($event) {
    this.keyUpEvent.emit($event.key);
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(e: KeyboardEvent) {
    console.log(e.key);
    if (this.numberOnly) {
      if (
        // Allow: Delete, Backspace, Tab, Escape, Enter, etc
        this.navigationKeys.indexOf(e.key) > -1 ||
        (e.key === "a" && e.ctrlKey === true) || // Allow: Ctrl+A
        (e.key === "c" && e.ctrlKey === true) || // Allow: Ctrl+C
        (e.key === "v" && e.ctrlKey === true) || // Allow: Ctrl+V
        (e.key === "x" && e.ctrlKey === true) || // Allow: Ctrl+X
        (e.key === "a" && e.metaKey === true) || // Cmd+A (Mac)
        (e.key === "c" && e.metaKey === true) || // Cmd+C (Mac)
        (e.key === "v" && e.metaKey === true) || // Cmd+V (Mac)
        (e.key === "x" && e.metaKey === true) // Cmd+X (Mac)
      ) {
        return; // let it happen, don't do anything
      }
      // Ensure that it is a number and stop the keypress
      // if (e.key === ' ' || isNaN(Number(e.key))) {
      if (isNaN(Number(e.key))) {
        e.preventDefault();
      }
    } else {
      //   console.log("you right");
      // return;
      if (e.key == "Enter") e.preventDefault();
    }
  }

  @HostListener("paste", ["$event"])
  onPaste(event: ClipboardEvent) {
    if (this.numberOnly) {
      event.preventDefault();
      const pastedInput: string = event.clipboardData
        .getData("text/plain")
        .replace(/\D/g, ""); // get a digit-only string
      document.execCommand("insertText", false, pastedInput);
    }
  }
}
