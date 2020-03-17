import { Component } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value: boolean;

  constructor(private printer: Printer) {

  }
  printDocument() {
    this.printer.isAvailable().then((onSuccess) => {

        this.showAlert("onSuccess", 'value');

        let options: PrintOptions = {
          name: 'MyDocument',
          orientation: 'landscape',
          duplex: true,
          monochrome: true
        };

        let content = "Hello World";
        this.printer.print(content, options);
    }, (err) => {
        console.log('Error', err);
    });
}


  print() {

    this.printer.isAvailable().then(value => {
      this.showAlert("isAvailable", value);
        this.value = value;
    }).catch(error => {
      this.showAlert("ERROR", error);
    });

    this.printer.check().then(data => {
      this.showAlert('Check', data);
    }, error => {
      this.showAlert('Check Failed', error);
    });
  }

  showAlert(title, message) {
    console.log(title, message);
  }

}
