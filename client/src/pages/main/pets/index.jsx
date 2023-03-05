// Libraries
import { Box, Container, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useContext } from "react";

// Core
import { ListCntxt } from "core/context/ListCntxt.func"; // Context
import { useGet } from "core/global/function/index.func"; // Function
import { top } from "core/api/index.func"; // API

// Constants
import { petcontainer, petdesc, petfemale, petimage, petmale, petseries, pettag, subtitle, title } from "./index.style"; // Styles

const Index = () => {
    const { list, setList } = useContext(ListCntxt);
    const { isFetching: fetching } = useGet({ key: ['top_pets'], fetch: top({ limit: 3, is_adopt: 0 }), options: { refetchOnWindowFocus: true }, onSuccess: (data) => setList(data) });
    
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= 'stretch' spacing= { 2 }>
            <Stack direction= "column" justifyContent= 'center' alignitems= "center">
                <Typography sx= { subtitle }>Our Pets</Typography>
                <Typography sx= { title }>Waiting for Adoption</Typography>
            </Stack>
            <Stack sx= {{ width: '100%' }}>
                <Container maxWidth= "lg">
                    <Grid container direction= "row" justifyContent= "center" alignItems= "flex-start">
                        { list.length > 0 ?
                                list?.map((data, index) => (
                                    <Grid item xs= { 12 } md= { 6 } key= { index } sx= {{ padding: '10px 8px' }}>
                                        <Stack direction= {{ xs: 'column', sm: 'row' }} justifyContent= "flex-start" alignItems= "flex-start" sx= { petcontainer } spacing= { 2 }>
                                            <Stack direction= "row" justifyContent= {{ xs: 'center', sm: 'flex-start' }} alignItems= "center" sx= {{ width: { xs: '100%', sm: '40%', md: '45%' } }}>
                                                { !fetching ?
                                                    <Box sx= { petimage }><img src= { JSON.parse(data.photo) } alt= "pet" width= "100%"  height= "auto" /></Box> :
                                                    <Skeleton variant= "rounded" sx= {{ width: '100%', height: '200px', borderRadius: '20px' }} /> }
                                            </Stack>
                                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ width: { xs: '100%', sm: '60%', md: '55%' } }}>
                                                { !fetching ? <Typography sx= { petseries }>#{ data.series_no }</Typography> : <Skeleton variant= "text" sx= {{ fontSize: '1.4rem', width: { xs: '30%' } }} /> }
                                                <Stack direction= "row" justifyContent= "space-between" alignItems= "center" spacing= { 1 } sx= {{ width: '100%', overflow: 'hidden' }}>
                                                    { !fetching ? <Typography sx= { petdesc }>{ data.stage }</Typography> : <Skeleton variant= "text" sx= {{ fontSize: '1.6rem', width: '50%' }} /> }
                                                    { !fetching ? 
                                                        <Typography sx= { data.gender === 'male' ? petmale : petfemale }>
                                                            <FontAwesomeIcon icon= { data.gender === 'male' ? solid('mars') : solid('venus') } />
                                                        </Typography> : 
                                                        <Skeleton variant= "rounded" sx= {{ width: '20px', height: '20px' }} /> }
                                                </Stack>
                                                { !fetching ? <Typography variant= "caption">{ data.coat }</Typography> : <Skeleton variant= "text" sx= {{ fontSize: '1.4rem', width: { xs: '30%' } }} /> }
                                                <Typography>
                                                    { !fetching ? (JSON.parse(data.tags)).map((tag, index) => (
                                                        <span key= { index } style= { pettag }>#{(tag.name).toLowerCase()}</span>
                                                    )) : <Skeleton variant= "text" sx= {{ fiontSize: '1rem' }} /> }
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                )) :
                            <Grid item xs= { 12 } md= { 6 }>
                                <Stack direction= "row" justifyContent= "center" alignItems= "center">
                                    <Typography sx= {{ width: '100%', textAlign: 'center' }}>No record/s found.</Typography>
                                </Stack>
                            </Grid> }
                    </Grid>
                </Container>
            </Stack>
        </Stack>
    );
}

export default Index;