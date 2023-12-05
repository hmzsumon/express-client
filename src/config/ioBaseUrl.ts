let ioBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
	// Code specific to development mode
	ioBaseUrl = 'http://localhost:5005';
} else {
	ioBaseUrl = 'https://expresslife-d28360a1553b.herokuapp.com';
	// Code specific to production mode
}
export default ioBaseUrl;
