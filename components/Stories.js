import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';

class Story extends React.Component {
    render() {
        return (
            <View style={styles.storyWrapper}>
                <Image style={styles.storyImage} source={{uri: this.props.content.image}} />
                <Text style={styles.storyText}>{this.props.content.name}</Text>
            </View>
        )
    }
}

export default class Stories extends React.Component {
    state = {
        stories: [
            {
                image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/scooby-fred.jpg',
                name: 'Fred',
                key: '1'
            },
            {
                image: 'https://www.cutislaserclinics.com/wp-content/uploads/2018/02/Achieve-a-Youthful-V-Shape-Face.jpg',
                name: 'Mary',
                key: '2'
            },
        ]
    };

    componentDidMount() {
    }

    render() {
        return (
            <FlatList
                horizontal
                data={this.state.stories}
                renderItem={(story) => <Story content={story.item} />}
                contentContainerStyle={styles.storiesContentContainer}
                keyExtractor={(item, index) => item.key}
                style={styles.container}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    storiesContentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    storyImage: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    storyText: {
        fontWeight: 'bold',
        fontSize: 11,
        paddingTop: 5,
        fontFamily: 'Open-Sans-Regular'
    },
    storyWrapper: {
        alignItems: 'center',
        marginRight: 10,
    }
});