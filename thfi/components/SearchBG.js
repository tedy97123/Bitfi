import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {useEffect,useState} from 'react';
import styled from 'styled-components';


const Box = styled.div`
    position:flex;
    z-index: 0;
    top: 0;
`
function getWindowDimensions(){
    const {innerWidth: width , innerHeight: height} = window;
    return {
        width,
        height,
    };
}
function SearchBG(){
    const [width,setWidth] = useState (0);
    const [height,setHeight] = useState(0);

    useEffect(() => {
        const {width,height} = getWindowDimensions();

        setWidth(width);

        setHeight(height);
    }, []);


    useEffect(() => {
        function handleResize() {
            const {width, height} = getWindowDimensions();
            
            setWidth(width);

            setHeight(height);
        }
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[])

if (width && height ){
    return (
        <Box>
            <Image
            src="/blue.svg"
            width={width}
            height={height}
            overflow=""
            alt="logo"
            /> 
        </Box>
        )
    }
return null;
}
export default SearchBG;