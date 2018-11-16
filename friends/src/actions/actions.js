export const FETCHING = 'FETCHING'

export const SUCCESS = 'SUCCESS'

export const FAILURE = 'FAILURE'


export const fetching = () => {
 return {type: FETCHING}
}

export const success = () => {
 return {type: SUCCESS}
}

export const failure = () => {
 return {type: FAILURE}
}