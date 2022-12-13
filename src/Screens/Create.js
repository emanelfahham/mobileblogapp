import React, {useContext, useState} from "react";
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import { Context } from "../Context/BlogContext";

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
        return(
            <View style={styles.card}>
                <Text style={styles.title}>Enter Title:</Text>
                <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
                <Text style={styles.title}>Enter Content:</Text>
                <TextInput multiline style={styles.input} value={content} onChangeText={text => setContent(text)}/>
                <Button 
                    title="Add Post"
                    onPress={()=>{
                        addBlogPost(title, content);
                        navigation.navigate('Index');
                    }}
                />
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
        fontSize:16,
        color:'navy',
        fontWeight:'500'
    },
    input:{
        borderWidth:1,
        borderColor:'rgba(0,0,100,0.2)',
        marginVertical:8
    }
})
export default CreateScreen;