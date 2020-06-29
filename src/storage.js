class Storage {
  constructor() {
    this.city = '';
    this.defaultCity = 'Kampala';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    return {
      city: this.city,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}

export default Storage;