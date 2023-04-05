import images from './images'

export interface CoffessProps {
  title: string
  description: string
  tag: string[]
  image: any
  id: string | number
}

export const CoffeeInfor: CoffessProps[] = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tag: ['Tradicional'],
    image: images.expresso,
    id: '1'
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tag: ['Tradicional'],
    image: images.american,
    id: '2'
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tag: ['Tradicional'],
    image: images.cremoso,
    id: '3'
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tag: ['gelado', 'Tradicional'],
    image: images.gelado,
    id: '4'
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tag: ['Tradicional', 'com leite'],
    image: images.cafecomleite,
    id: '5'
  },
  {
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tag: ['Tradicional', 'com leite'],
    image: images.latte,
    id: '6'
  },
  {
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tag: ['Tradicional', 'com leite'],
    image: images.capuccino,
    id: '7'
  }, 
  {
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tag: ['Tradicional', 'com leite'],
    image: images.macchiato,
    id: '8'
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tag: ['Tradicional', 'com leite'],
    image: images.mochaccino,
    id: '9'
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tag: ['especial', 'com leite'],
    image: images.chocolate,
    id: '10'
  },
  {
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tag: ['gelado', 'alcoólico', 'especial'],
    image: images.cubano,
    id: '11'
  },
  {
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tag: ['especial'],
    image: images.havaiano,
    id: '12'
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tag: ['especial'],
    image: images.arabe,
    id: '13'
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tag: ['especial', 'alcoólico'],
    image: images.irlandes,
    id: '14'
  }
]
