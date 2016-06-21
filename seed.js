var mongoose = require('mongoose');
var Vehicle = require('./models/vehicleModel');

var data = [
  {
    name: 'PORSCHE 356',
    nameExt: 'PORSCHE 356 PRÉ-A 1600 SPEEDSTER',
    year: '1954',
    images: [
    '/imgs/tmp-porsche.png',
    '/imgs/tmp-porsche-bg-3.jpg',
    '/imgs/tmp-porsche-6.jpg',
    '/imgs/tmp-porsche-bg-4.jpg',
    '/imgs/tmp-porsche-5.jpg'
   ],
    info: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'James Dean rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ipsum dolor sit amet rem ipsum dolor sit amet.'
    ],
    histImage: ['http://1.bp.blogspot.com/-dP7fOD9ZDXg/UJuamwLA1KI/AAAAAAAAS3I/Ir7c2pAnV8A/s1600/James-Dean-Porsche-356-Speedster.jpg'],
  },
  {
    name: 'Porsche 911',
    nameExt: ' Porche 911 Turbo Coupe',
    year: '1965',
    images: [
    '/imgs/p911White-1.png',
    '/imgs/p911White-2.jpg',
    '/imgs/p911White-3.jpg',
    '/imgs/p911White-4.jpg',
    '/imgs/p911White-5.jpg'
   ],
    info: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Reese Lindel rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ipsum dolor sit amet rem ipsum dolor sit amet.'
    ],
    histImage: ['/imgs/p911White-hist.jpg'],
  },
  {
    name: 'Corvette Coupe',
    nameExt: 'Corvette Coupe 427',
    year: '1965',
    images: [
    '/imgs/red-corv_01.png',
    '/imgs/p911White-2.jpg',
    '/imgs/p911White-3.jpg',
    '/imgs/p911White-4.jpg',
    '/imgs/p911White-5.jpg'
   ],
    info: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer.',
      'Reese Lindel rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ipsum dolor sit amet rem ipsum dolor sit amet.'
    ],
    histImage: ['/imgs/p911White-hist.jpg'],
  }
]

function seedDB(){
  Vehicle.remove({}, function(err, items){
    if(err){
      console.log(err);
    } else {
      console.log('Items Removed');
      data.forEach(function(item){
        Vehicle.create(item, function(err, carItem){
          if(err) {
            console.log(err);
          } else {
            console.log('Created');
            carItem.save();
          }
        })
      })
    }
  })
}

module.exports = seedDB;
