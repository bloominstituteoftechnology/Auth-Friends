// import React from "react";
// import { connect } from "react-redux";

// import { CharacterList } from "../components";
// // import actions
// import { fetchCharacters } from "../actions";

// class CharacterListView extends React.Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     // call our action
//     this.props.fetchCharacters();
//   }

//   render() {
//     if (this.props.fetching) {
//       // return something here to indicate that you are fetching data
//       <h3>Go strap yourself in, I'm going to make the jump to light speed.</h3>;
//     }
//     return (
//       <div className="CharactersList_wrapper">
//         <CharacterList characters={this.props.characters} />;
//       </div>
//     );
//   }
// }

// // our mapStateToProps needs to have two properties inherited from state
// // the characters and the fetching boolean

// const mapStateToProps = state => {
//   return {
//     characters: state.charsReducer.characters,
//     fetching: state.charsReducer.fetching
//   };
// };
// export default connect(
//   mapStateToProps,
//   { fetchCharacters }
//   // {
//   //   /* action creators go here */
//   // }
// )(CharacterListView);
