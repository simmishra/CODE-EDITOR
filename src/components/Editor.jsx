import { Box ,styled} from "@mui/material"
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import {Controlled as ControlledEditor} from 'react-codemirror2'

import { useState } from "react";


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css'


const Heading = styled(Box)({
    backgroundColor:'#1d1e22',
    display:'flex',
    padding:  (9,12),
})

const Header = styled(Box)({
    display:'flex',
    backgroundColor:'#060606',
    color: 'white',
    justifyContent: 'space-between',
    fontWeight:700
})

const Container = styled(Box)({
    flexGrow:1,
    flexBasis:0,
    display:'flex',
    flexDirection:'column',
    paddingLeft:8,
    paddingRight:8
})


const Editor = ({heading,icon,color,value,onChange})=>{

    const [open,setOpen] = useState(true)

    const handleChange =(editor,data,value)=>{
        onChange(value)
    }

    return (
        <Container style={open? null:{flexGrow:0}}>
            <Header>
                <Heading>
                    <Box component='span'
                        style={{
                            background: color,
                            height:20,
                            width:20,
                            display:'flex',
                            placeContent:'center',
                            borderRadius:5,
                            marginRight:5,
                            paddingBottom:2,
                            color:'black'
                        }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon 
                    fontSize='small'
                    style={{alignSelf:'center',cursor:'pointer'}}
                    onClick= {()=>setOpen(prevState =>!prevState)}
                />
            </Header>
            <ControlledEditor 
                className='controlled-editor'
                value = {value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'material',
                    lineNumbers:true,
                }}
            />
                    
        </Container>
    )
}

export default Editor