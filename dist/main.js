!(function (t) { const e = {}; function n(i) { if (e[i]) return e[i].exports; const o = e[i] = { i, l: !1, exports: {} }; return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports; }n.m = t, n.c = e, n.d = function (t, e, i) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i }); }, n.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const i = Object.create(null); if (n.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const o in t)n.d(i, o, ((e) => t[e]).bind(null, o)); return i; }, n.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return n.d(e, 'a', e), e; }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, n.p = '', n(n.s = 0); }([function (t, e, n) {
  n.r(e); const i = class {
    constructor() { this.location = document.getElementById('w-location'), this.description = document.getElementById('w-desc'), this.temperature = document.getElementById('w-string'), this.details = document.getElementById('w-details'), this.icon = document.getElementById('w-icon'), this.humidity = document.getElementById('w-humidity'), this.feelsLike = document.getElementById('w-feels-like'), this.pressure = document.getElementById('w-dewpoint'), this.wind = document.getElementById('w-wind'); }

    render(t) { this.location.textContent = t.name, this.description.textContent = t.weather[0].description, this.temperature.textContent = `${t.main.temp}° F`, this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`), this.humidity.textContent = `Relative Himidity: ${t.main.humidity}%`, this.feelsLike.textContent = `Feels like: ${t.main.feels_like}° F`, this.pressure.textContent = `Pressure: ${t.main.pressure} hPa`, this.wind.textContent = `Wind Direction: ${t.wind.deg}° at ${t.wind.speed} m/s`; }

    renderCel(t) { this.location.textContent = t.name, this.description.textContent = t.weather[0].description, this.temperature.textContent = `${t.cel}° C`, this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`), this.humidity.textContent = `Relative Himidity: ${t.main.humidity}%`, this.feelsLike.textContent = `Feels like: ${t.feelsLikeCel}° C`, this.pressure.textContent = `Pressure: ${t.main.pressure} hPa`, this.wind.textContent = `Wind Direction: ${t.wind.deg}° at ${t.wind.speed} m/s`; }
  }; const o = new class {
    constructor() { this.city = '', this.defaultCity = 'Kampala'; }

    getLocationData() { return localStorage.getItem('city') === null ? this.city = this.defaultCity : this.city = localStorage.getItem('city'), { city: this.city }; }

    setLocationData(t) { localStorage.setItem('city', t); }
  }(); const r = o.getLocationData(); const a = new class {
    constructor(t) { this.apiKey = '7434c40835bfb8f326dd28b39c06f014', this.city = t; }

    async getWeather() {
      const t = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`); const e = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`); const n = await t.json(); const i = await e.json(); return {
        name: n.name, main: n.main, weather: n.weather, wind: n.wind, cel: i.main.temp, feelsLikeCel: i.main.feels_like,
      };
    }

    changeLocation(t) { this.city = t; }
  }(r.city); const s = document.getElementById('w-string'); const c = document.getElementById('toggle-temp'); const
    d = new i(); function l() { a.getWeather().then(t => { d.render(t); }).catch(t => t); }document.addEventListener('DOMContentLoaded', l), document.getElementById('w-change-btn').addEventListener('click', () => { const t = document.getElementById('city').value; a.changeLocation(t), o.setLocationData(t), l(), $('#locModal').modal('hide'); }), c.addEventListener('click', () => { s.textContent.substr(-1) === 'F' ? a.getWeather().then(t => { d.renderCel(t); }).catch(t => t) : l(); });
}]));