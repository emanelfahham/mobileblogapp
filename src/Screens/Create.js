import React, {useContext} from "react";
import {View, StyleSheet} from 'react-native';
import Form from "../Components/Form";
import { Context } from "../Context/BlogContext";

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);
        return(
            <View style={styles.card}>
               <Form 
                    onSubmit={
                        (title, content)=>{
                        addBlogPost(title, content);
                        navigation.navigate('Index')
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
})
export default CreateScreen;