/* 
        dataFetcher function takes a single parameter, (url).

        description: awaits fetching the url, and then it fills the data variable with json data that we can use.

        parameters: url string

        when a function is marked async, that means it returns a promise.
*/

const dataFetcher = async function (url = null) {
	const response = await fetch(url);
	const data = await response.json();

	return data;
};

export default dataFetcher;
