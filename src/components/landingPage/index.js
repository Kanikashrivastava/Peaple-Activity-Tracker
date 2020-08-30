import React, { Component } from 'react';
import { styles } from './style';
import Header from '../Header';
import UserCard from '../UserCard';
import data from '../../API/Test.json';

class LandingPage extends Component {
    render() {
        const { members } = data;
        return (
            <div>
                <Header />
                <div style={styles.cardContainer}>
                    {members.map((member) => <UserCard user={member} key={member.id} />)}
                </div>
            </div>
        )
    }
}

export default LandingPage;