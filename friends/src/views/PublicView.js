import React from 'react';
import {LoginInfo} from '../components';
class PublicView extends React.Component {
    render() {
        return (
            <div>
            <LoginInfo key="1" parent={this} />
        <div className="public">
            This is public
        </div>
        </div>);
    }
}
export default PublicView;