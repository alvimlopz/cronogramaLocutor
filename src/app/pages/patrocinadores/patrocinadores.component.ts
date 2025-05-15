import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patrocinadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.scss']
})
export class PatrocinadoresComponent {
  textoIntroducao: string = `
    Vamos tirar um momento pra agradecer os nossos patrocinadores, porque sem o apoio deles, esse evento simplesmente não seria possível.
    São eles que acreditam no esporte e fazem tudo isso acontecer!
  `;

  agradecimentoFinal: string = `
    Valorize quem apoia o esporte! Visita os estandes, confere os produtos e aproveita o campeonato!
  `;

  patrocinadoresOficiais: string[] = [
    'Drogaria Rede Center: aferindo pressão e glicemia gratuitamente. Cuide da sua saúde.',
    'Dudu Suplementos: degustação de pasta de amendoim e pré-treinos top! Passa lá!',
    'Fitness Wear e Basílio Store: roupas esportivas de qualidade e muito estilo.',
    'Futura Construções, Realizar Móveis e Decor Pisos: soluções incríveis pra renovar seu lar.',
    'Wordnet: conectando o evento com internet de alta velocidade.',
    'Pacheco Auto Escola: tá na hora de tirar sua CNH? Fala com eles!',
    'Doce da Bibi: tem açaí, salgados e doces maravilhosos ali na entrada.',
    'Meninas Personalizados: produtos criativos e feitos com carinho.',
    'Bravecor Seguros: proteção certa pra sua casa, carro e mais.',
    'Revisa Cred: empréstimo consignado fácil e rápido.',
    'Aliria Teles Estética: saúde e beleza com tecnologia avançada.',
    'Trans RP: transporte com agilidade e confiança.',
    'AGM Dryice: soluções com gelo seco e tecnologia.',
    'Solar Flex: cortinas, persianas e toldos sob medida.',
    'Faculdade Unialfa EAD: graduação e pós 100% online e acessível.'
  ];

  parceirosPremiacao: string[] = [
    'Doces da Bibi',
    'LR Suplementos',
    'An-Fit RUN',
    'Coraggio Loja de Sapatos Femininos',
    'Ananda Letícia Dermopigmentação',
    'Bruna Borges Nutricionista',
    'Flow Loja de Roupas Fitness',
    'KR Boutique (bolsas e acessórios)',
    'Wilson Lucas Nutricionista',
    'MG Detalhamento Automotivo',
    'By Zen Fit'
  ];
}
