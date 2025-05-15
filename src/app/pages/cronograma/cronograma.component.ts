import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent {
  provas = [
    {
      id: 1,
      horario: '09:10 a 9:20',
      bateria: '1ª bateria - iniciante feminino - Prova 1',
      equipes: [
        'inimigas da força',
        'Voadapta',
        'Na força do amor próprio',
        'Burpee-se Quem Puder',
        'Crossfake'
      ],
      rounds: '3 ROUNDS',
      movimentos: [
        '21 THRUSTER - peso 20 KG',
        '21 STEP BOX',
        '15 DEVIL PRESS - 10 kg'
      ],
      cap: '10:00',
      aviso:''
    },
    {
      id: 2,
      horario: '09:25 a 9:35',
      bateria: '2ª bateria - iniciante feminino - Prova 1',
      equipes: ['Dores de Elite', 'Turbo Wod', 'tal mãe tal filha', 'O coach obrigou'],
      rounds: '3 ROUNDS',
      movimentos: [
        '15 THRUSTER - 30 KG',
        '15 STEP BOX',
        '10 DEVIL PRESS - 15 kg'
      ],
      cap: '10:00',

      aviso:'Por favor atletas da categoria iniciante masculino, ir para a area de aquecimento'
    },
     {
      id: 3,
      horario: '09:45 a 9:55',
      bateria: '1ª bateria - iniciante masculino - Prova 1',
      equipes: ['CROSSCREDOS', 'TORSILAX E PRÉ TREINO', 'Irmãos da Guerra', 'Zezé de Camargo & Luciano', 'Rafael e: "Vai que dá certo"'],
      rounds: '3 ROUNDS',
      movimentos: [
        '15 THRUSTER - 30 KG',
        '15 STEP BOX',
        '10 DEVIL PRESS - 15 kg'
      ],
      cap: '10:00',

      aviso:'Por favor atletas da categoria scale feminino, ir para a area de aquecimento'
    },
     {
      id: 4,
      horario: '10:05 a 10:15',
      bateria: '1ª bateria - Scale feminino - Prova 1',
      equipes: ['Kamyla', 'Ananda', 'Mayara', 'Talita'],
      rounds: '3 ROUNDS',
      movimentos: [
        '21 RELEASE PUSH UP',
        '15 BOX JUMP OVER',
        '9 SNATCH'
      ],
      cap: '10:00',

      aviso:'Por favor atletas da categoria Scale masculino, ir para a area de aquecimento'
    },
     {
      id: 5,
      horario: '10:25 a 10:35',
      bateria: '1ª bateria - Scale masculino - Prova 1',
      equipes: ['João Pedro', 'Marcos', 'Carlos',],
      rounds: '3 ROUNDS',
      movimentos: [
        '21 RELEASE PUSH UP',
        '15 BOX JUMP OVER',
        '9 SNATCH'
      ],
      cap: '10:00',

      aviso:''
    },
    {
      id: 6,
      horario: '10:40 a 10:50',
      bateria: '1ª bateria - Scale masculino - Prova 1',
      equipes: ['Erivelton', 'Francisco', 'Marcelo',],
      rounds: '3 ROUNDS',
      movimentos: [
        '21 RELEASE PUSH UP',
        '15 BOX JUMP OVER',
        '9 SNATCH'
      ],
      cap: '10:00',

      aviso:'Por favor atletas da categoria iniciante feminino, ir para a area de aquecimento'
    },

     {
      id: 7,
      horario: '11:00 a 11:10',
      bateria: '1ª bateria - Iniciante feminino - Prova 2',
      equipes: ['Inimigas da força', 'Voadapta', 'Na força do amor próprio','Burpee=se Quem Puder', 'Crossfake'],
      rounds: '2 ROUNDS',
      movimentos: [
        '30 Deadlift',
        '30 Burpee over bar',
        '30 kipping knee raise',
        'Maximo de devil press'
      ],
      cap: '10:00',

      aviso:''
    },

     {
      id: 8,
      horario: '11:15 a 11:25	',
      bateria: '2ª bateria - Iniciante feminino - Prova 2',
      equipes: ['Dores de Elite ', 'Turbo Wod', 'Tal mãe tal filha','O coach obrigou'],
      rounds: '2 ROUNDS',
      movimentos: [
        '30 Deadlift',
        '30 Burpee over bar',
        '30 kipping knee raise',
        'Maximo de devil press'
      ],
      cap: '10:00',

      aviso:'Por favor atletas da categoria iniciante masculino, ir para a area de aquecimento'
    },

     {
      id: 9,
      horario: '11:35 a 11:45',
      bateria: '1ª bateria - Iniciante masculino - Prova 2',
      equipes: ['CROSSCREDOS','TORSILAX E PRÉ TREINO ', 'Irmãos da Guerra', 'Zezé de Camargo & Luciano','Rafael e: "Vai que dá certo"'],
      rounds: '2 ROUNDS',
      movimentos: [
        '30 Deadlift',
        '30 Burpee over bar',
        '30 kipping knee raise',
        'Maximo de devil press'
      ],
      cap: '10:00',

      aviso:'Por favor atletas da categoria Scale feminino, ir para a area de aquecimento'
    },

     {
      id: 10,
      horario: '11:55 a 12:05',
      bateria: '1ª bateria - scale feminino - Prova 2',
      equipes: ['Kamyla','Ananda ', 'Mayara','Talita'],
      rounds: '2 ROUNDS',
      movimentos: [
        '15 Deadlift',
        '15 Burpee over bar',
        '15 kipping knee raise',
        'Maximo de devil press'
      ],
      cap: '10:00',

      aviso:'Por favor atletas da categoria Scale masculino, ir para a area de aquecimento'
    },

     {
      id: 11,
      horario: '12:15 a 12:25',
      bateria: '1ª bateria - scale masculino - Prova 2',
      equipes: ['João Pedro','Marcos ', 'Carlos'],
      rounds: '2 ROUNDS',
      movimentos: [
        '15 Deadlift',
        '15 Burpee over bar',
        '15 kipping knee raise',
        'Maximo de devil press'
      ],
      cap: '10:00',

      aviso:''
    },

     {
      id: 12,
      horario: '12:30 a 12:40',
      bateria: '2ª bateria - scale masculino - Prova 2',
      equipes: ['Erivelton','Francisco ', 'Marcelo'],
      rounds: '2 ROUNDS',
      movimentos: [
        '15 Deadlift',
        '15 Burpee over bar',
        '15 kipping knee raise',
        'Maximo de devil press'
      ],
      cap: '10:00',

      aviso:'Atenção pessoal, vamos fazer um intervalo de 1 hora e retornamos as 13:40 com a 3° prova da categoria inicante feminina'
    },

    //prova 3

      {
      id: 13,
      horario: '13:40 a 13:50',
      bateria: '1ª bateria - Iniciante feminino - Prova 3',
      equipes: ['Inimigas da força', 'Voadapta', 'Na força do amor próprio','Burpee=se Quem Puder', 'Crossfake'],
      rounds: 'Max de ROUNDS',
      movimentos: [
        '6 Shutter run',
        '20 Power clean',
      ],
      cap: '8:00',

      aviso:''
    },

     {
      id: 14,
      horario: '13:55 a 14:05',
      bateria: '2ª bateria - Iniciante feminino - Prova 3',
      equipes: ['Dores de Elite ', 'Turbo Wod', 'Tal mãe tal filha','O coach obrigou'],
     rounds: 'Max de ROUNDS',
       movimentos: [
        '6 Shutter run',
        '20 Power clean',
      ],
      cap: '8:00',

      aviso:'Por favor atletas da categoria iniciante masculino, ir para a area de aquecimento'
    },

     {
      id: 15,
      horario: '14:15 a 14:25	',
      bateria: '1ª bateria - Iniciante masculino - Prova 3',
      equipes: ['CROSSCREDOS','TORSILAX E PRÉ TREINO ', 'Irmãos da Guerra', 'Zezé de Camargo & Luciano','Rafael e: "Vai que dá certo"'],
      rounds: 'Max de ROUNDS',
       movimentos: [
        '6 Shutter run',
        '20 Power clean',
      ],
      cap: '8:00',

      aviso:'Por favor atletas da categoria Scale feminino, ir para a area de aquecimento'
    },

     {
      id: 16,
      horario: '14:35 a 14:45',
      bateria: '1ª bateria - scale feminino - Prova 3',
      equipes: ['Kamyla','Ananda ', 'Mayara','Talita'],
      rounds: 'Max de ROUNDS',
       movimentos: [
        '6 Shutter run',
        '20 Clean and jerk',
      ],
      cap: '8:00',

      aviso:'Por favor atletas da categoria Scale masculino, ir para a area de aquecimento'
    },

     {
      id: 17,
      horario: '14:55 a 15:05',
      bateria: '1ª bateria - scale masculino - Prova 3',
      equipes: ['João Pedro','Marcos ', 'Carlos'],
      rounds: '3 ROUNDS',
      movimentos: [
        'Buy in 7 wall walk',
        '30 D.U (60 S.U)',
        '10 clean and jerk',
       'Buy out 7 wall walk'
      ],
      cap: '10:00',

      aviso:''
    },

     {
      id: 18,
      horario: '15:10 a 15:20',
      bateria: '2ª bateria - scale masculino - Prova 3',
      equipes: ['Erivelton','Francisco ', 'Marcelo'],
      rounds: '3 ROUNDS',
       movimentos: [
        'Buy in 7 wall walk',
        '30 D.U (60 S.U)',
        '10 clean and jerk',
       'Buy out 7 wall walk'
      ],
      cap: '10:00',

      aviso:'Atenção categoria iniciante feminino ir para area de aquecimento, logo o termino da prova, iniciaremos a prova de PR de voces'
    },

    //prova 4

     {
      id: 19,
      horario: '15:30 a 15:36',
      bateria: '1ª bateria - Iniciante feminino - Prova 4',
      equipes: ['Inimigas da força', 'Voadapta', 'Na força do amor próprio','Burpee=se Quem Puder', 'Crossfake'],
      rounds: 'Prova de PR',
      movimentos: [
        '1 clean + 1 front (sem solta a barra) '
      ],
      cap: '4:00',

      aviso:''
    },

     {
      id: 20,
      horario: '15:41 a 15:47',
      bateria: '2ª bateria - Iniciante feminino - Prova 4',
      equipes: ['Dores de Elite ', 'Turbo Wod', 'Tal mãe tal filha','O coach obrigou'],
     rounds: 'Prova de PR',
      movimentos: [
        '1 clean + 1 front (sem solta a barra) '
      ],
      cap: '4:00',

      aviso:'Por favor atletas da categoria iniciante masculino, ir para a area de aquecimento'
    },

     {
      id: 21,
      horario: '15:57 a 16:03	',
      bateria: '1ª bateria - Iniciante masculino - Prova 4',
      equipes: ['CROSSCREDOS','TORSILAX E PRÉ TREINO ', 'Irmãos da Guerra', 'Zezé de Camargo & Luciano','Rafael e: "Vai que dá certo"'],
      rounds: 'Prova de PR',
      movimentos: [
        '1 clean + 1 front (sem solta a barra) '
      ],
      cap: '4:00',
      aviso:'Por favor atletas da categoria Scale feminino, ir para a area de aquecimento'
    },

     {
      id: 22,
      horario: '16:13 a 16:19',
      bateria: '1ª bateria - scale feminino - Prova 4',
      equipes: ['Kamyla','Ananda ', 'Mayara','Talita'],
      rounds: 'Prova de PR',
      movimentos: [
        '1 clean + 1 hang clean + 1 front (sem solta a barra) '
      ],
      cap: '6:00',

      aviso:'Por favor atletas da categoria Scale masculino, ir para a area de aquecimento'
    },

     {
      id: 23,
      horario: '16:29 a 16:35',
      bateria: '1ª bateria - scale masculino - Prova 4',
      equipes: ['João Pedro','Marcos ', 'Carlos'],
     rounds: 'Prova de PR',
      movimentos: [
        '1 clean + 1 hang clean + 1 front (sem solta a barra) '
      ],
      cap: '6:00',

      aviso:''
    },

     {
      id: 24,
      horario: '16:40 a 16:46',
      bateria: '2ª bateria - scale masculino - Prova 4',
      equipes: ['Erivelton','Francisco ', 'Marcelo'],
     rounds: 'Prova de PR',
      movimentos: [
        '1 clean + 1 hang clean + 1 front (sem solta a barra) '
      ],
      cap: '6:00',

      aviso:'Fim do campeonato, agradeçer a participação so atletas e do publico.'
    }

    
  ];
}
