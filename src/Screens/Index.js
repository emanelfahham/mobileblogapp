import React, {useContext} from "react";
import {FlatList, StyleSheet, View, Button} from 'react-native';
import { Context } from "../Context/BlogContext";
import BlogPostItem from "../Components/BlogPostItem";

const IndexScreen = () => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    return(
        <View style={styles.card}>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.id}
                renderItem={({item})=>{
                    return(
                        <BlogPostItem 
                            title={item.title}
                            onPress={()=> deleteBlogPost(item.id)}
                        />
                    )
                }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        flex:1,
        paddingTop:16
    }
})

export default IndexScreen;