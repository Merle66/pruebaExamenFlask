import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlaskApiService } from '../../services/flask-api.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss'],
  providers: [FlaskApiService]
})

export class ExamenComponent implements OnInit {
  textareaContent: string = '';
  json: any = false;
  imagen: any;
  result: any;

  texto = '';

  constructor(private http: HttpClient, private flask_api: FlaskApiService) { }

  ngOnInit(): void {
    this.flask_api.getAll().subscribe((res) =>
    {
      console.log('Res ', res)
    });
  }

  introducirTabla(){

    this.flask_api.analizarSentimiento(this.texto).subscribe((res) =>
    {
      console.log('Res ', res);
      console.log('Res',res.analisis.carita);
      this.texto='Sentimiento: '+res.analisis.carita+'\nResultado: '+res.analisis.sentimiento+'\nTexto: '+res.analisis.texto;

    });
  }
}
@Component({
  selector: 'app-tabla-examen',
  templateUrl: './tabla-examen.component.html', 
  styleUrls: ['./tabla-examen.component.scss']
})
export class TablaExamenComponent implements OnInit {
    elements: any = [];
    headElements = ['ID','Texto', 'Resultado', 'Carita',];
  
    ngOnInit() {
      for (let i = 1; i <= 15; i++) {
        this.elements.push({
          id: i,
          first: 'Texto ' + i,
          last: 'Resultado ' + res.analisis.carita,
          handle: 'Carita ' + i
        });
      }
    }
  }