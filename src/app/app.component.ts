import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Form';
  regForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    contact : new FormControl('',[Validators.required])
});
onSubmit() {
  alert("Form validated and submitted successfully!");
  alert(JSON.stringify(this.regForm.value))
  console.log(JSON.stringify(this.regForm.value));
  
}


}
