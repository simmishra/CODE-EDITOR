import Editor from "./Editor";

import { useContext,useState } from "react";

import {Box,styled} from '@mui/material'

import { DataContext } from "../context/DataProvider";


const Container = styled(Box)({
    backgroundColor:'#060606',
    display:'flex',
    height: '54vh'
})


const Code = () =>{

    const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext);

    return(
        <Container>
            <Editor 
                heading = 'HTML'
                icon= '/'
                color='#ff3c41'
                value={html}
                onChange={setHtml}
            />
            <Editor 
                heading = 'CSS'
                icon='*'
                color='#0ebeff'
                value={css}
                onChange={setCss}
            />
            <Editor 
                heading = 'JavaScript'
                icon = '()'
                color='#fcd000'
                value={js}
                onChange={setJs}
            />
        </Container>
    )
}

export default Code;