import { createMuiTheme } from '@material-ui/core/styles';

const blue = "#3D405B"
const eggshell = "#F4F1DE"

export default createMuiTheme({
    palette : {
        common: {
            blue : `${blue}`,
            eggshell:`${eggshell}`
        },
        primary: {
            main:`${blue}`,
        },
        secondaryL: {
            main:`${eggshell}`,
        }
        
    },
    overrides: {
       MuiInputLabel: {
           root: {
               color: blue,
               fontSize: "1rem"
           }
       },
       MuiInput: {
           
       }
    }
})