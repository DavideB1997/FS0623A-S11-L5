export const GET_SEARCH = 'GET_SEARCH';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const ADD_TO_MUSICPLAYER = 'ADD_TO_MUSICPLAYER';

const baseEndPoint =
	'https://striveschool-api.herokuapp.com/api/deezer/search?q=';
const limit = '&limit=10';

export const addToFavouriteAction = (songId) => ({
	type: ADD_TO_FAVOURITE,
	payload: songId,
});

export const removeFromFavouriteAction = (songId) => ({
	type: REMOVE_FROM_FAVOURITE,
	payload: songId,
});

export const addToMusicPlayerAction = (song) => ({
	type: ADD_TO_MUSICPLAYER,
	payload: song,
});

export const getSearchAction = (query) => {
	return async (dispatch) => {
		try {
			const response = await fetch(baseEndPoint + query + limit);
			if (response.ok) {
				const { data } = await response.json();

				dispatch({
					type: GET_SEARCH,
					payload: data,
				});
			} else {
				alert('Error fetching data!');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
