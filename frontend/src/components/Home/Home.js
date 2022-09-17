import {  Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core";
import useStyles from './styles';
import React, { useState} from "react";
import { useDispatch} from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';


import { getPostsBySearch} from '../../actions/posts'

import Pagination from '../Pagination'
import Posts from '../Posts/Posts'
import Form from '../Forms/Form';

function useQuery() {
    return new URLSearchParams(useLocation().search)
}



const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])
    const classes = useStyles();
    const dispatch = useDispatch(); 

    const query = useQuery()
    const navigate = useNavigate()
    const page = query.get('page') || 1
    const seachQuery = query.get('searchQuery')

    const searchPost = ()=>{
        if(search.trim()||tags){
            dispatch(getPostsBySearch({search, tags:tags.join(',')}))
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        }else{
            navigate('/')
        }
    }

    const handleChipAdd = (tag)=>{
        setTags([...tags, tag])
    }
    
    const handleChipDelete = (chipToDelete)=>{
        setTags(tags.filter((tag)=>tag!==chipToDelete))
    }

    const handleKeyPress = (e)=>{
        if (e.keyCode===13){
            searchPost();
        }
    }

    return (
            <Grow in>
                <Container maxWidth="xl" >
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}  className={classes.gridContainer}>
                        <Grid item xs={12} sm={6} md={9}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                                <TextField name='search' label='Search for memories' variant='outlined' fullWidth value={search} onChange={(e)=>{setSearch(e.target.value)}} onKeyDown={handleKeyPress} />
                                <ChipInput value={tags} label='Search Tags' variant='outlined' onAdd={(chip)=>handleChipAdd(chip)} onDelete={(chip)=>handleChipDelete(chip)} />
                                <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                            </AppBar>
                            

                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            {(!seachQuery && !tags.length) && (
                                <Paper className={classes.pagination} elevation={6}>
                                    <Pagination  page={page}/>
                                </Paper>
                            )}


                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
                
}

export default Home;