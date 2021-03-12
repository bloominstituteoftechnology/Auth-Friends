import { makeStyles } from "@material-ui/core/styles";



//Replacing inline styling on refactoring
const useStyles = makeStyles({
    root: {
      minWidth: "40%",
      maxWidth: "45%",
      minHeight: "42.5%",
      borderRadius: "50%",
      margin: "3rem 2.5%",
      textAlign: "center",
            boxShadow: "0 0 3rem orangered",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    nav: {
      color: "black",
      marginTop: "5rem",
      backgroundColor: "#f8d568",
      padding: "1.5rem",
      
    },
    addButton: {
      margin: "4rem 2rem",
    },
    cardContent: {
      backgroundColor: "#222",
      opacity: "0.8",
    },
    h2: {
      margin: "6rem 2rem",
      marginBottom: "1rem",
      color: "white",
      textShadow: "0 0 1.5rem orangered",
    },
    h1: {
      fontSize: "3rem",
      padding: "0 5rem",
      color: "white",
      textShadow: "0 0 1.5rem orangered",
    },
    popButton: {
      backgroundColor: "red",
      color: "white",
      marginBottom: "6rem",
      maxWidth: "35%",
      maxHeight: "20%",
      boxShadow: "0 0 1.5rem orangered",
    },
    cardActions: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#222",
      opacity: "0.8",
    },
    appBar: {
        boxShadow: "0 0 1.5rem black",
        backgroundColor: 'white',
        color: "black",
        opacity: '0.9'
      }
  });

  export default useStyles