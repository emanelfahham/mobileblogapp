import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const BlogPostItem = ({title, deletePress, detailsBtn}) => {
    return(
        <TouchableOpacity onPress={detailsBtn} style={styles.row}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity onPress={deletePress}>
                <AntIcon name='delete' color={'tomato'} size={30}/>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:'gray',
        justifyContent:'space-between',
        padding:8
    },
    text:{
        fontSize:16
    }
})
export default BlogPostItem;