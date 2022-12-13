import React, {useContext, useEffect} from "react";
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Context } from "../Context/BlogContext";
import BlogPostItem from "../Components/BlogPostItem";

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context);
    useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
         <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
      ),
    });
  }, [navigation]);
    return(
        <View style={styles.card}>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.id}
                renderItem={({item})=>{
                    return(
                        <BlogPostItem
                            detailsBtn={()=>navigation.navigate('Show',{
                                id:item.id
                            })} 
                            title={item.title}
                            deletePress={()=> deleteBlogPost(item.id)}
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
        padding:16
    }
})

export default IndexScreen;