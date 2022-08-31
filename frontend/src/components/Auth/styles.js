import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({

    root:{
        '& .MuiTextField-root': theme.spacing(1)
    },

    paper:{
        marginTop:theme.spacing(8),
        display:'flex',
        flexDirection:'column',
        alignItems:"center",
        padding:theme.spacing(2)
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(3)
    },
    submit:{
        margin:theme.spacing(3,0,2)
    }

})
    

)