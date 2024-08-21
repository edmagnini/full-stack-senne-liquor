import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { style } from "./styles";

export  function Button({...rest}){
    return(
        <TouchableOpacity {...rest} 
            style={style.button} 
            activeOpacity={0.6} 
        >
            {rest.loading?<ActivityIndicator color={'#FFF'}/>:<Text style={[style.textButton]}>{rest.text}</Text>}
        </TouchableOpacity>
    );
}