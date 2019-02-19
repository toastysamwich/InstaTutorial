import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

import Header from './../components/Header';
import Stories from './../components/Stories';
import Post from './../components/Post';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        posts: [
            {
                key: '1',
                caption: 'I love React Native!'
            },
            {
                key: '2',
                caption: 'New post!'
            },
        ]
    };

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Stories/>
                <FlatList
                    data={this.state.posts}
                    renderItem={(post) => <Post content={post.item}/>}
                    style={{width: '100%', marginTop: 20}}
                    contentContainerStyle={{paddingBottom: 250}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});
