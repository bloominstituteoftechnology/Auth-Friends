export const FETCHING = 'FETCHING'

export const SUCCESS = 'SUCCESS'

export const FAILURE = 'FAILURE'


export const fetching = () => {
 return {type: FETCHING, payload: null}
}

export const success = () => {
 return {type: SUCCESS, payload: null}
}

export const failure = () => {
 return {type: FAILURE, payload: null}
}