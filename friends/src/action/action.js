import axios from 'axios';
export const FETCHING = 'FETCHING';
export  const FETCHED = 'FETCHED';
export  const ERR = 'ERR';
export const POST = 'POST';


export const fetch = (chars) => {
	return dispatch=> {
dispatch({type:FETCHING});
	axios.get(`http://localhost:5000/api/friends`)
		.then(({data}) => {
			dispatch({type:FETCHED,payload:data});
		})
		.catch(err => {
			dispatch({type:ERR});
		});
	};
};

export const post = (data) => {
return dispatch=> {
axios.post(`http://localhost:5000/api/friends`, {
	name:data.name,
	age:data.age,
	email:data.email,
	})
	.then(({data}) => {
	dispatch({type:POST,payload:data})	
	})
	.catch(({error}) => {
	dispatch({type:ERR})	
	})
}
}