import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from '../pdf-service.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor(private pdfService: PdfServiceService) { }

  ngOnInit() {
  }

  teste() {
    this.pdfService.geraPdf().subscribe(res => {
      console.log(res.data);

      let file = new Blob([res.data], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    })
  }
}
