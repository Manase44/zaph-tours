import honeymoon1 from '../assets/honeymoon/honeymoon1.jpg'
import honeymoon2 from '../assets/honeymoon/honeymoon2.jpg'
import honeymoon3 from '../assets/honeymoon/honeymoon3.jpg'
import honeymoon4 from '../assets/honeymoon/honeymoon4.jpg'
import family1 from '../assets/family/family1.jpg'
import family2 from '../assets/family/family2.jpg'
import family3 from '../assets/family/family3.jpg'
import family4 from '../assets/family/family4.jpg'
import museum from '../assets/cultural tours/museum.jpeg'
import vascodagamma from '../assets/cultural tours/vascodagamma.jpeg'
import maasai from '../assets/cultural tours/masai.jpg'
import fortjesus from '../assets/cultural tours/fortjesus.jpeg'
import dolphin from '../assets/beach/dolphin.jpg'
import sking from '../assets/beach/sking.jpg'
import swimming from '../assets/beach/swimming.jpg'
import view from '../assets/beach/view.jpg'
import wildlife1 from '../assets/wildlife/wildlife1.jpg'
import wildlife2 from '../assets/wildlife/wildlife2.jpg'
import wildlife3 from '../assets/wildlife/wildlife3.jpg'
import wildlife4 from '../assets/wildlife/wildlife4.jpg'


const tripsData = [
  {
    id: 1,
    name: "honeymoon",
    gallery: [
      {
        name: "4 days in accacia lodge",
        image:honeymoon1,
        price:  5000,
      },
      {
        name: "Naivasha campsite",
        image:honeymoon2,
        price: 5500
      },
      {
        name :"Kempinski masai mara",
        image:honeymoon3,
        price: 2000
      },
      {
        name: "mathew ranges",
        image : honeymoon4,
        price: 6500
      },
    ],
  },
  {
    id: 2,
    name: "family",
    gallery: [
      {
        name: "Hiking at Mt. Longonot",
        image:family1,
        price:  1500,
      },
      {
        name: "Watamu beach resort",
        image:family2,
        price: 3500
      },
      {
        name :"Ngong' forest camping",
        image:family3,
        price: 2000
      },
      {
        name: "sagana goarges hiking",
        image : family4,
        price: 500
      },
    ],
  },
  {
    id: 3,
    name: "adventure",
    gallery: [
      {
        name: "visiting nairobi museum",
        image:museum,
        price:  150,
      },
      {
        name: "a visit to vasco da gamma pillar",
        image:vascodagamma,
        price:100
      },
      {
        name :"Feel maasai culture at amboseli",
        image:maasai,
        price: 1200
      },
      {
        name: "visit old town mombasa",
        image : fortjesus,
        price: 200
      },
    ],
  },
  {
    id: 4,
    name: "cultural tours",
    gallery: [
      {
        name: "visiting nairobi museum",
        image:museum,
        price:  150,
      },
      {
        name: "a visit to vasco da gamma pillar",
        image:vascodagamma,
        price:100
      },
      {
        name :"Feel maasai culture at amboseli",
        image:maasai,
        price: 1200
      },
      {
        name: "visit old town mombasa",
        image : fortjesus,
        price: 200
      },
    ],
  },
  {
    id: 5,
    name: "wildlife safaris",
    gallery: [
      {
        name: "nice elephant views in tsavo",
        image:wildlife1,
        price:  1700,
      },
      {
        name: "zebras in nairobi park",
        image:wildlife2,
        price:500
      },
      {
        name :"lions in maasai mara",
        image:wildlife4,
        price: 2000
      },
      {
        name: "rare white rhinos in homabay",
        image : wildlife3,
        price: 1700
      },
    ],
  },
  {
    id: 6,
    name: "eco tours",
    gallery: [
      {
        name: "dolphin views in kilifi",
        image:dolphin,
        price:  1000,
      },
      {
        name: "beach sking in malindi",
        image:sking,
        price:7500
      },
      {
        name :"swimming at diani beach",
        image:swimming,
        price: 100
      },
      {
        name: "beach viewing at baobam beach",
        image : view,
        price: 1200
      },
    ],
  },
  {
    id: 7,
    name: "luxury vacations",
    gallery: [
      {
        name: "7-days at Hemingways Hotel",
        image:dolphin,
        price:  1000,
      },
      {
        name: "4-days at Sarova mara game camp",
        image:sking,
        price:7500
      },
      {
        name :"2-days at peponi hotel",
        image:swimming,
        price: 100
      },
      {
        name: "3-days at campi ya kanzi",
        image : view,
        price: 1200
      },
    ],
  },
  {
    id: 8,
    name: "beach holidays",
    gallery: [
      {
        name: "dolphin views in kilifi",
        image:dolphin,
        price:  1000,
      },
      {
        name: "beach sking in malindi",
        image:sking,
        price:7500
      },
      {
        name :"swimming at diani beach",
        image:swimming,
        price: 100
      },
      {
        name: "beach viewing at baobam beach",
        image : view,
        price: 1200
      },
    ],
  },
  {
    id: 9,
    name: "wellness retreats",
    gallery: [
      {
        name: "dolphin views in kilifi",
        image:dolphin,
        price:  1000,
      },
      {
        name: "beach sking in malindi",
        image:sking,
        price:7500
      },
      {
        name :"swimming at diani beach",
        image:swimming,
        price: 100
      },
      {
        name: "beach viewing at baobam beach",
        image : view,
        price: 1200
      },
    ],
  },
  {
    id: 10,
    name: "culinary tours",
    gallery: [
      {
        name: "dolphin views in kilifi",
        image:dolphin,
        price:  1000,
      },
      {
        name: "beach sking in malindi",
        image:sking,
        price:7500
      },
      {
        name :"swimming at diani beach",
        image:swimming,
        price: 100
      },
      {
        name: "beach viewing at baobam beach",
        image : view,
        price: 1200
      },
    ],
  }
];

export default tripsData;