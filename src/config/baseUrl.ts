let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
	// Code specific to development mode
	baseUrl = 'http://localhost:5005/api/v1';
	console.log('Running in development mode');
} else {
	baseUrl = 'https://express-life-9388765cfa58.herokuapp.com/api/v1';
	// Code specific to production mode
	console.log('Running in production mode');
}
console.log('baseUrl', baseUrl);
export default baseUrl;
