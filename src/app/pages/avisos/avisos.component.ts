import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avisos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent {
  chamadasAtletas: string[] = [
    'Atenção, categoria “Scale Feminino”, favor se dirigir à área de aquecimento. Em 20 minutos iniciamos a vez de vocês!',
    'Atenção atletas da próxima bateria, preparem-se! Bora aquecer e vir com tudo!',
    'Pessoal, vamos respeitar o tempo de aquecimento! Cada minuto conta antes do WOD!',
    'Atenção atletas, peguem seus pertences e deixem a arena por favor. Vocês deram um show!',
    'Show, meus amigos! Que comecem os desafios! Boa sorte a todos os atletas — que vocês deem o melhor de si, superem seus limites e curtam cada segundo dessa experiência. Vamo pra cima, Bull Games!'
  ];

  avisosIntervalo: string[] = [
    'Teremos agora um intervalo de 10 minutos. Aproveita pra hidratar, comer algo e visitar nossos estandes!',
    'Pausa rápida de 10 minutinhos! Já já voltamos com mais pancadaria boa de CrossFit!'
  ];

  frasesPublico: string[] = [
    'Faz barulho aí pro seu box! Bora mostrar quem tem a torcida mais animada!',
    'Vamos lá, galera! Essa energia da arquibancada é o que faz os atletas irem além!',
    'Grita, bate palma, incentiva! Aqui é CrossFit, aqui é superação!',
    'Tá bonito de ver! É atleta suando na arena e torcida vibrando fora dela!'
  ];

  frasesMotivacionais: string[] = [
    'Não importa se é sua primeira ou milésima competição. Só de estar aqui, você já é gigante!',
    'Cada repetição aqui é conquista. Cada gota de suor, uma vitória!',
    'O Bull Games é isso: garra, força e comunidade! Vamo que vamo!'
  ];
}
