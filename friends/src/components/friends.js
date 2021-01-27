import React from "react";
// import {useTransition, animated} from 'react-spring'

// const [items, set] = useState([...])
// const transitions = useTransition(items, item => item.key, {
// from: { transform: 'translate3d(0,-40px,0)' },
// enter: { transform: 'translate3d(0,0px,0)' },
// leave: { transform: 'translate3d(0,-40px,0)' },
// })
// return (transitions.map(({ item, props, key }) =>
// <animated.div key={key} style={props}>{item.text}</animated.div>
// ))

export function friend({ friend }) {
  return (
    <div className="friendCard">
      <h1>Name:{friend.name}</h1>
      <h4>Age:{friend.age}</h4>
      <h4>Email:{friend.email}</h4>
      <h4>ID:{friend.id}</h4>
    </div>
  );
}
export default friend;
