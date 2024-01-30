let ioBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
	// Code specific to development mode
	ioBaseUrl = 'http://localhost:5005';
} else {
	ioBaseUrl = 'https://express-api1-be08a1c77321.herokuapp.com/';
	// Code specific to production mode
}
export default ioBaseUrl;
