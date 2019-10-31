import { reset } from 'redux-form';

const SET_COMMENTS = 'SET_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';

const initialState = {
    comments: [
        {
            id: 1,
            name: 'Самуил',
            date: '13 октября 2011',
            comment: 'Привет, Верунь! Ниче себе ты крутая. Фотка класс!!!!'
        },
        {
            id: 2,
            name: 'Лилия Семёновна',
            date: '14 октября 2011',
            comment: 'Вероника, здравствуйте! есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр органики алмазов и торговли бриллиантами?'
        },
        {
            id: 3,
            name: 'Лилия Семёновна',
            date: '14 октября 2011',
            comment: 'Вероника, здравствуйте! есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
        }
    ]
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            }
        default:
            return {
                ...state
            }
    }
}

const addComment = (comment) => ({type: ADD_COMMENT, comment});
const setComments = (comments) => ({type: SET_COMMENTS, comments});

export const addCommentTC = (comment) => async (dispatch) => {
    const userComments = JSON.parse(localStorage.getItem('comments'));
    localStorage.setItem('comments', JSON.stringify([...userComments, {id: userComments.length + 1, ...comment}]));
    dispatch(addComment({id: userComments.length + 1, ...comment}))
    dispatch(reset('comment'));
}

export const setCommentsTC = (comments) => async (dispatch) => {
    const userComments = JSON.parse(localStorage.getItem('comments'));
    userComments ? dispatch(setComments(userComments)) : localStorage.setItem('comments', JSON.stringify(comments));
}

export default appReducer;