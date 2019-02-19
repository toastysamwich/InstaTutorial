import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';

export default class Post extends React.Component {
    state = {};

    render() {
        return (
            <View style={styles.post}>
                <View style={styles.topRow}>
                    <Image style={styles.profilePic} source={{uri: 'https://cdn2.stylecraze.com/wp-content/uploads/2018/04/How-To-Do-A-Face-Clean-Up-At-Home-%E2%80%93-In-6-Simple-Steps.jpg'}}/>
                    <Text style={styles.authorName}>Fred</Text>
                </View>
                <Image source={{uri: 'https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}} style={styles.preview} resizeMode={'cover'}/>
                <View style={styles.bottomRow}>
                    <View style={styles.softkeyWrapper}>
                        <View style={styles.softKeyWrapperLeft}>
                            <TouchableOpacity>
                                <Image resizeMode={'contain'} source={require('./../assets/images/like.png')} style={styles.softKey}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'contain'} source={require('./../assets/images/comment.png')} style={[styles.softKey, {
                                    height: 20,
                                    width: 20
                                }]}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.textContent}>
                        <Text style={styles.caption}><Text style={styles.authorEmphasis}>The Verge </Text>{this.props.content.caption}
                        </Text>
                        <Text style={styles.timeAgo}>1 Day ago</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    post: {
        width: '100%',
        marginVertical: 15
    },
    profilePic: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    preview: {
        width: '100%',
        height: 400
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 10
    },
    authorName: {
        fontFamily: 'Open-Sans-SemiBold',
        paddingLeft: 10
    },
    softKey: {
        height: 24,
        width: 24,
        marginRight: 10
    },
    softKeyWrapperLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    softkeyWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    authorEmphasis: {
        fontFamily: 'Open-Sans-SemiBold',
    },
    bottomRow: {
        paddingTop: 20
    },
    textContent: {
        padding: 10
    }
});