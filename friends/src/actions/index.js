export const ADD = "ADD";



export const add = (n,a,e,i) =>{
  return {
    type:ADD,
    name:n,
    age:a,
    email:e,
    id:i
  }
}
