import React, {useContext, useEffect} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Context } from "../Context/BlogContext";


const ShowScreen = ({route, navigation}) => {
    const {state} = useContext(Context);
    const {id} = route.params;
    const blogPost = state.find((blogPost)=> blogPost.id === id)
    useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
         <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: id})}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
      ),
    });
  }, [navigation]);    
    return(
        <View style={styles.card}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        flex:1,
        padding:16
    },
    title:{
        fontSize:18,
        textDecorationLine: "underline"
    }
})

export default ShowScreen;