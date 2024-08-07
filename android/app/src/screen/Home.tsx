import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native'
import { ImageBackground } from 'react-native';












const Home = ()=>{

    const [indexImage, setIndexImage] = useState(0);
    const [indexQuotes, setQuotesImage] = useState(0);

    const [quotes, setQuotes] = useState(["You are your greatest asset. Put your time, effort, and money into training",
        "Hard work beats talent when talent doesn't work hard",
        "I don't believe in failure. It's not failure if you enjoyed the process",
        "Doing the best at this moment puts you in the best place for the next moment",
        "A king may move a man. But the soul belongs to the man."])

    useEffect(()=>{

        setIndexImage(Math.floor(Math.random()*4))
        setQuotesImage(Math.floor(Math.random()*5))

    })

    //const [images, setImages] = useState([require("../static/baldwin.jpeg"), require("../static/download(1).jpeg"), require("../static/download.jpeg"), require("../static/ronaldo.jpeg")])
    

    


    return(
        
        <View style = {{flex: 1}}>

            {
            indexImage == 0? <ImageBackground style = {{flex: 1,alignItems: 'center', justifyContent: 'center'}} source = {require("../static/bald-win.jpeg")} >
                <Text style = {{fontSize: 30, color: '#ffffff', fontFamily: 'REM Thin', paddingBottom: 20}}>"{quotes[indexQuotes]}"</Text>
            </ImageBackground> : indexImage == 1? <ImageBackground style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}} source = {require("../static/download (1).jpeg")} >
                <Text style = {{fontSize: 30, color: '#ffffff', fontFamily: 'REM Thin' , paddingBottom: 20}}>"{quotes[indexQuotes]}"</Text>
            </ImageBackground> : indexImage == 2? <ImageBackground style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}} source = {require("../static/download.jpeg")} >
                <Text style = {{fontSize: 30, color: '#ffffff', fontFamily: 'REM Thin', paddingBottom: 20}}>"{quotes[indexQuotes]}"</Text>
            </ImageBackground> : indexImage == 3? <ImageBackground style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}} source = {require("../static/ronaldo.jpeg")} >
                <Text style = {{fontSize: 30, color: '#ffffff', fontFamily: 'REM Thin', paddingBottom: 20}}>"{quotes[indexQuotes]}"</Text>
            </ImageBackground>: null
            }

        </View>
    )

}

export default Home;

