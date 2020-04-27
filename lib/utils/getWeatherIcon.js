exports.getWeatherIcon = (weatherDescription) => {
    let currentWeatherIcon = '';
    switch (weatherDescription) {
        // thunderstorm
        case 'thunderstorm with light rain':
            currentWeatherIcon = '⛈';
            break;
        case 'thunderstorm with rain':
            currentWeatherIcon = '⛈';
            break;
        case 'thunderstorm with heavy rain':
            currentWeatherIcon = '⛈';
            break;
        case 'light thunderstorm':
            currentWeatherIcon = '🌩';
            break;
        case 'thunderstorm':
            currentWeatherIcon = '🌩';
            break;
        case 'heavy thunderstorm':
            currentWeatherIcon = '🌩';
            break;
        case 'ragged thunderstorm':
            currentWeatherIcon = '🌩';
            break;
        case 'thunderstorm with light drizzle':
            currentWeatherIcon = '⛈';
            break;
        case 'thunderstorm with drizzle':
            currentWeatherIcon = '⛈';
            break;
        case 'thunderstorm with heavy drizzle':
            currentWeatherIcon = '⛈';
            break;
        // drizzle
        case 'light intensity drizzle	':
            currentWeatherIcon = '🌦';
            break;
        case 'drizzle':
            currentWeatherIcon = '🌦';
            break;
        case 'heavy intensity drizzle':
            currentWeatherIcon = '🌦';
            break;
        case 'light intensity drizzle rain':
            currentWeatherIcon = '🌦';
            break;
        case 'drizzle rain':
            currentWeatherIcon = '🌦';
            break;
        case 'heavy intensity drizzle rain':
            currentWeatherIcon = '🌦';
            break;
        case 'shower rain and drizzle':
            currentWeatherIcon = '🌦';
            break;
        case 'heavy shower rain and drizzle':
            currentWeatherIcon = '🌦';
            break;
        case 'shower drizzle':
            currentWeatherIcon = '🌦';
            break;
        // rain
        case 'light rain':
            currentWeatherIcon = '🌦';
            break;
        case 'moderate rain':
            currentWeatherIcon = '🌧';
            break;
        case 'heavy intensity rain':
            currentWeatherIcon = '🌧';
            break;
        case 'very heavy rain':
            currentWeatherIcon = '🌧';
            break;
        case 'extreme rain':
            currentWeatherIcon = '🌧';
            break;
        case 'freezing rain':
            currentWeatherIcon = '❄️ 🌧';
            break;
        case 'light intensity shower rain':
            currentWeatherIcon = '🌧';
            break;
        case 'shower rain':
            currentWeatherIcon = '🌧';
            break;
        case 'heavy intensity shower rain':
            currentWeatherIcon = '🌧';
            break;
        case 'ragged shower rain':
            currentWeatherIcon = '🌧';
            break;
        // snow
        case 'light snow':
            currentWeatherIcon = '🌨';
            break;
        case 'snow':
            currentWeatherIcon = '🌨';
            break;
        case 'heavy snow':
            currentWeatherIcon = '🌨';
            break;
        case 'sleet':
            currentWeatherIcon = '🌨';
            break;
        case 'light shower sleet':
            currentWeatherIcon = '🌨';
            break;
        case 'shower sleet':
            currentWeatherIcon = '🌨';
            break;
        case 'light rain and snow':
            currentWeatherIcon = '🌨';
            break;
        case 'rain and snow':
            currentWeatherIcon = '🌨 🌧';
            break;
        case 'light shower snow':
            currentWeatherIcon = '🌨';
            break;
        case 'shower snow':
            currentWeatherIcon = '🌨';
            break;
        case 'heavy shower snow':
            currentWeatherIcon = '🌨';
            break;
        // atmosphere
        case 'mist':
            currentWeatherIcon = '🌫';
            break;
        case 'smoke':
            currentWeatherIcon = '🌫';
            break;
        case 'haze':
            currentWeatherIcon = '🌫';
            break;
        case 'sand/ dust wirls':
            currentWeatherIcon = '⏳';
            break;
        case 'fog':
            currentWeatherIcon = '🌫';
            break;
        case 'sand':
            currentWeatherIcon = '⏳';
            break;
        case 'dust':
            currentWeatherIcon = '⏳';
            break;
        case 'volcanic ash':
            currentWeatherIcon = '🌋';
            break;
        case 'squalls':
            currentWeatherIcon = '🌬';
            break;
        case 'tornado':
            currentWeatherIcon = '🌪';
            break;
        // clear
        case 'claer sky':
            currentWeatherIcon = '☀️';
            break;
        // clouds
        case 'few clouds':
            currentWeatherIcon = '🌤';
            break;
        case 'scattered clouds':
            currentWeatherIcon = '🌤';
            break;
        case 'broken clouds':
            currentWeatherIcon = '⛅️';
            break;
        case 'overcast clouds':
            currentWeatherIcon = '☁️';
            break;
        default:
            currentWeatherIcon = '☀️';
            break;
    }
    return currentWeatherIcon;
};
