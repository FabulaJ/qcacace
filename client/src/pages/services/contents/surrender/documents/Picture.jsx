// Libraries
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Avatar, FormLabel, Stack, Typography } from "@mui/material";

// Core
import { FormCntxt } from "core/context/FormCntxt.func"; // Context
import { base64 } from "core/global/function/index.func"; // Function

const Picture = () => {
    const [ picture, setPicture ] = useState('#');
    const { setError, register, setValue, errors } = useContext(FormCntxt);

    useEffect(() => { register('picture'); }, [ register ]);
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
            <Typography gutterBottom>*Applicant 1X1 picature</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                <Stack direction= "row" justifyContent= "center" alignItems= "center" 
                    sx= {{ backgroundColor: '#e0e0e0', width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px' }}>
                    <Avatar src= { picture } variant= "square" sx= {{ width: 'auto', height: '100%' }} />
                    <input type= "file" name= "picture" id= "picture" style= {{ width: '0.1px', height: '0.1px', opacity: 0, overflow: 'hidden', zIndex: -1 }}
                        onChange= { async e => {
                            setError('picture', { message: '' });
                            let file = e.target.files[0];
                            let image = await base64(file);

                            setPicture(image);
                            setValue('picture', JSON.stringify(image));
                        } } />
                </Stack>
                <Stack direction= "row" justifyContent= "flex-end" alignItems= "center" sx= {{ padding: '0 10px' }}>
                    <Stack component= { FormLabel } htmlFor= "picture" direction= "row" justifyContent= "center" alignItems= "center"
                        sx= {{ width: '40px', height: '40px', backgroundColor: '#ffffff', boxShadow: 1, borderRadius: '20px', marginTop: '-20px',
                                    cursor: 'pointer' }}>
                        <FontAwesomeIcon icon= { solid('camera') } />
                    </Stack>
                </Stack>
            </Stack>
            <Typography variant= "body2" sx= {{ color: '#e84118' }} gutterBottom>{ errors.picture?.message }</Typography>
        </Stack>
    );
}

export default Picture;