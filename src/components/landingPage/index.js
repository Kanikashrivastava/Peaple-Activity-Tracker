import React, { Component } from 'react';
import { styles } from './style';
import Header from '../Header';
import UserCard from '../UserCard';

const URL = `https://run.mocky.io/v3/14bad0a1-9ed7-4b24-9be3-a727f835bfef`;

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = async () => {
        fetch(URL).then(response => response.json())
            .then(data =>
                this.setState({
                    userData: data.members
                }))
    }
    render() {
        const { userData } = this.state;
        return (
            <div>
                <Header />
                <div style={styles.cardContainer}>
                    {userData.length ?
                        userData.map((member) =>
                            <UserCard user={member} key={member.id} />
                        ) :
                        <p style={styles.noResultText}>
                            {'No Result found'}
                        </p>}
                </div>
            </div>
        )
    }
}

export default LandingPage;