export const submitUser = user => {
  axios
    .post("http://localhost:5000/api/login", user)
    .then(rez => {
      localStorage.setItem("token", rez.data.payload);
      props.history.push("/users");
    })
    .catch(rez => console.error(rez));
};

export const grabUsers = _ => {
  axize()
    .get("http://localhost:5000/api/friends")
    .then(res => setList(res.data))
    .catch(err => console.error(err));
};

export const addUser = user => {
  axize()
    .post("http://localhost:5000/api/friends", user)
    .then(rez => setList(rez.data))
    .catch(err => console.error(err));
};

export const updateUser = user => {
  axize()
    .put(`http://localhost:5000/api/friends/${user.id}`, user)
    .then(res => setList(res.data))
    .catch(err => console.error(err));
};

export const delUser = id => {
  axize()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(rez => setList(rez.data))
    .catch(err => console.error(err));
};
