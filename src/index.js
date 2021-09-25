import './styles/main.css';

import Dog from './dog';
import Duck from './duck';

const dogCardWrapper = document.querySelector('.dog__card__wrapper');
const duckCardWrapper = document.querySelector('.duck__card__wrapper');

const dogArr = [];
const duckArr = [];

const dog1 = new Dog(
  'boomer',
  'https://images.dog.ceo/breeds/samoyed/n02111889_6076.jpg',
  4,
  5
);
const dog2 = new Dog(
  'bob',
  'https://images.dog.ceo/breeds/malinois/n02105162_3925.jpg',
  4,
  3
);
const dog3 = new Dog(
  'brian',
  'https://images.dog.ceo/breeds/clumber/n02101556_2362.jpg',
  4,
  7
);
const dog4 = new Dog(
  'nani',
  'https://images.dog.ceo/breeds/basenji/n02110806_4370.jpg',
  4,
  2
);
const duck1 = new Duck(
  'quack',
  'https://nas-national-prod.s3.amazonaws.com/styles/social_media_photo/s3/editorial-card-images/article/f_nyc-mandarin-duck_holly-mascaro.jpg?itok=hzKmh_Lk',
  2,
  1
);
const duck2 = new Duck(
  'tuck',
  'https://www.cnet.com/a/img/IM7pTt0y8f7YkJTCIQ0EoPLO7B4=/1200x675/2019/01/09/e30a81d2-f4e7-4439-98bf-61e288e16007/gettyimages-1045983738-1.jpg',
  2,
  8
);
const duck3 = new Duck(
  'muack',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*',
  2,
  11
);

dogArr.push(dog1, dog2, dog3, dog4);
duckArr.push(duck1, duck2, duck3);

dogCardWrapper.innerHTML = dogArr
  .map(
    dog => `
      <div className="card">
        <div className="card__content">
          <img class="card__image" src="${dog.image}" alt="Card" />
        </div>
        <div class="card__context">
                <h3 class="card__title">${dog.name}</h3>
                <p class="card__text">
                  ${dog.age} years old
                </p>
                <p>Number of Legs: ${dog.numberOfLegs}</p>
              </div>
    </div>`
  )
  .join('');

duckCardWrapper.innerHTML = duckArr
  .map(
    duck => `
      <div className="card">
        <div className="card__content">
          <img class="card__image" src="${duck.image}" alt="Card" />
        </div>
        <div class="card__context">
                <h3 class="card__title">${duck.name}</h3>
                <p class="card__text">
                  ${duck.age} years old
                </p>
                <p>Number of Legs: ${duck.numberOfLegs}</p>
              </div>
    </div>`
  )
  .join('');
