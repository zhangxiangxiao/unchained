'use strict';

const API_URL = 'https://countries-api-836d.onrender.com/countries/name/';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', API_URL + `${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    const neighbor = data.borders[0];
    if (!neighbor) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', API_URL + `${neighbor}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryData('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000); */

const getJSON = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Country not found ${response.status}`);
  }
  return await response.json();
};

const getCountryData = (country) => {
  getJSON(API_URL + `${country}`)
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) throw new Error('No neighbor found');
      return fetch(API_URL + `${neighbor}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], 'neighbour'))
    .catch((err) => renderError(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));
};

// btn.addEventListener('click', () => {
//   getCountryData('australia');
// });

/* const whereAmI = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!response.ok) {
      throw new Error(`Problem getting location data ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country}`);
    getCountryData(data.country);
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);
  }
};
whereAmI(52.508, 13.381); */

/* console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then((res) => console.log(res));

Promise.resolve('Resolve promise 2').then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end'); */

/* // const lotteryPromise = new Promise((resolve, reject) => {
//   console.log('Lottery draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You win');
//     } else {
//       reject(new Error('You lost'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then((x) => console.log(x));
Promise.reject(new Error('Problem')).catch((x) => console.error(x)); */

/* navigator.geolocation.getCurrentPosition((position) => {
  const { latitude: lat, longitude: lng } = position.coords;
  console.log(lat, lng);
});

console.log('Getting position'); */

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/* getPosition().then((position) => console.log(position));

const whereAmI = () => {
  getPosition()
    .then((position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Problem getting location data ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(data.country);
    })
    .catch((err) => console.error(err));
};

btn.addEventListener('click', whereAmI); */

/* const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      document.querySelector('.images').append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

createImage('img/img-1.jpg')
  .then((img) => {
    console.log('Image 1 loaded');
    img.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then((img) => {
    console.log('Image 2 loaded');
    img.style.display = 'none';
  })
  .catch((err) => console.error(err)); */

const whereAmI = async () => {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;
    const responseGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    const dataGeo = await responseGeo.json();
    console.log(dataGeo);
    console.log(`You are in ${dataGeo.city}, ${dataGeo.country}`);
    const response = await fetch(API_URL + `${dataGeo.country}`);
    const data = await response.json();
    console.log(data[0]);
    renderCountry(data[0]);
    const neighbor = data[0].borders[0];
    if (!neighbor) throw new Error('No neighbor found');
    const response2 = await fetch(API_URL + `${neighbor}`);
    const data2 = await response2.json();
    console.log(data2[0]);
    renderCountry(data2[0], 'neighbour');
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);
  } finally {
    countriesContainer.style.opacity = 1;
  }
};

btn.addEventListener('click', whereAmI);

/* (async () => {
  try {
    const response = await fetch(API_URL + 'usa');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})(); */

/* const get3Countries = async (c1, c2, c3) => {
  try {
    const [data1] = await getJSON(API_URL + c1);
    const [data2] = await getJSON(API_URL + c2);
    const [data3] = await getJSON(API_URL + c3);
    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.error(err);
  }
};

get3Countries('usa', 'canada', 'mexico'); */

/* // Promise.race
(async () => {
  const res = await Promise.race([
    getJSON(API_URL + 'usa'),
    getJSON(API_URL + 'canada'),
    getJSON(API_URL + 'mexico'),
  ]);
  console.log(res[0]);
})();

const timeout = (sec) =>
  new Promise((_, reject) =>
    setTimeout(() => {
      reject(new Error('Request took too long'));
    }, sec * 1000)
  );

Promise.race([getJSON(API_URL + 'usa'), timeout(0.1)])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); */

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      document.querySelector('.images').append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

const loadNPause = async () => {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

loadNPause();

const loadAll = async (imgArr) => {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
