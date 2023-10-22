let ioBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
	// Code specific to development mode
	ioBaseUrl = 'http://localhost:5005';
} else {
	ioBaseUrl = 'https://express-life-api-b43b2de765f9.herokuapp.com';
	// Code specific to production mode
}
export default ioBaseUrl;
