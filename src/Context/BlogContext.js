import createDataContext from "./createDataContext";

const blogPostReducer = (state, action) =>{
    switch (action.type) {
        case 'add_blogPost':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content:action.payload.content
                }
            ]
        case 'delete_blogPost':
            return state.filter((blogPost)=> blogPost.id !== action.payload)
        case 'edit_blogPost':
            return state.map((blogPost)=> 
           { return blogPost.id === action.payload.id ? action.payload : blogPost}
            )    
        default:
            return state;
    }
}
const addBlogPost = (dispatch) => {
    return (title, content) =>{
        dispatch({type: 'add_blogPost', payload: {title, content}});
    }    
}
const editBlogPost = (dispatch) => {
    return (id, title, content) =>{
        dispatch({type: 'edit_blogPost', payload: {id, title, content}})
    }
}
const deleteBlogPost = (dispatch) => {
    return (id) =>{
        dispatch({type: 'delete_blogPost', payload: id})
    }
}
    export const {Context, Provider} = createDataContext(
        blogPostReducer,       //context provider//
        {addBlogPost, deleteBlogPost, editBlogPost},         //actions//      
        [{title: 'Test Post', content:'Test content', id: 1}]                     //inital state//
    )