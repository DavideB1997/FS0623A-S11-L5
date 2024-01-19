export const GET_SEARCH = 'GET_SEARCH';

const baseEndPoint = 'https://deezerdevs-deezer.p.rapidapi.com/';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c93046165fmshe7abc1c7340997fp1b467djsn71ea54a2484d',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
	},
};

export const getSearchAction = (query) => {
	return async (dispatch) => {
		try {
			const response = await fetch(baseEndPoint + query, options);
			if (response.ok) {
				const { data } = await response.json();

				dispatch({
					type: GET_SEARCH,
					payload: data,
				});
				console.log('daje');
			} else {
				alert('Error fetching data!');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
