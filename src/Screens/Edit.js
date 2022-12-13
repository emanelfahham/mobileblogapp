import React, {useContext} from "react";
import { View, StyleSheet} from 'react-native';
import Form from "../Components/Form";
import { Context } from "../Context/BlogContext";


const EditScreen = ({route, navigation}) => {
    const {id} = route.params;
    const {state, editBlogPost} = useContext(Context)
    const blogPost = state.find((blogPost)=> blogPost.id === id)
    return(
        <View style={styles.card}>
            <Form
                initialValue={{title: blogPost.title, content: blogPost.content}}
                onSubmit={(title, content)=>{
                    editBlogPost(id, title, content);
                    navigation.pop();
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
    }
})

export default EditScreen;