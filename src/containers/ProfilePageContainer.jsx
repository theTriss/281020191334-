import React, {useEffect} from 'react';
import ProfilePage from '../components/ProfilePage';
import {connect} from 'react-redux';
import {addCommentTC, setCommentsTC} from '../redux/reducers/app-reducer';
import {getComments} from '../redux/selectors/app-selector';

const ProfilePageContainer = (props) => {

    useEffect(() => {
        props.setCommentsTC(props.comments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ProfilePage {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        comments: getComments(state)
    }
}

export default connect(mapStateToProps, {addCommentTC, setCommentsTC})(ProfilePageContainer);