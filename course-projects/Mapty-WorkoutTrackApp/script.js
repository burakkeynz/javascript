'use strict';
//Using the Geolocation API, Displaying a Map Using Leaflet Library
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; //[lat , lng]
    this.distance = distance; //in km
    this.duration = duration; // in min
  }
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //km/h
    this.speed = this.distance / this.duration / 60;
    return this.speed;
  }
}
class App {
  #map;
  #mapZoom = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    //Get user's location position
    this._getPosition();

    //Get data from local storage
    this._getLocalStorage();

    //Event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alter('Could not get your position');
      }
    );
  }
_loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoom); //HTML'de <div id="map"></div> OLMALIDIR

    L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>',
        maxZoom: 15,
      }
    ).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(workout => this._renderWorkoutMarker(workout)); //We cannot call this method at the beginning since we cannot renderWorkoutMarket before we get the local storage to our #workouts map, we have to first getLocalStorage, then loadMap with that storage data
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

 _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts)); //local storage is for small amounts of data, not for large amounts of data. We can use it in this project
    //U can see it in Application-->Storage-->Local Storage part.
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
