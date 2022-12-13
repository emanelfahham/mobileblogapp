import React, {useState} from "react";
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

const Form = ({onSubmit, initialValue = {title: '', 
        content: ''}}) => {
    const [title, setTitle] = useState(initialValue.title);
    const [content, setContent] = useState(initialValue.content)
    return(
        <View>
            <Text style={styles.title}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
            <Text style={styles.title}>Enter Content:</Text>
            <TextInput multiline style={styles.input} value={content} onChangeText={text => setContent(text)}/>
            <Button 
                title="Submit"
                onPress={()=> onSubmit(title, content)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
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

export default Form;