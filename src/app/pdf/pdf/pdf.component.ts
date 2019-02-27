import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from '../pdf-service.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  constructor(private pdfService: PdfServiceService) {}

  ngOnInit() {}

  teste() {
    this.pdfService.geraPdf().subscribe(res => {
      console.log(res.data);

      this.baixarRelatorio(res);
      this.exibirRelatorio(res);
    });
  }

  exibirRelatorio(res) {
    window.open('data:application/pdf;base64, ' + res.data);
  }

  baixarRelatorio(res) {
    const linkSource = 'data:application/pdf;base64,' + res.data;
    const downloadLink = document.createElement('a');
    const fileName = 'relatorio_cidades.pdf';

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
