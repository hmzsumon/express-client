let ioBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
	// Code specific to development mode
	ioBaseUrl = 'http://localhost:5005';
} else {
	ioBaseUrl = 'https://express-life-9388765cfa58.herokuapp.com';
	// Code specific to production mode
}
export default ioBaseUrl;
