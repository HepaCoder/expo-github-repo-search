import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Linking } from 'react-native'

class RepoItem extends React.PureComponent {
    
    render() {
        const { item } = this.props

        return (
            <TouchableWithoutFeedback onPress={() => Linking.openURL(item.html_url)}>
                <View style={styles.container} onTouch >
                    <Text style={styles.fullName}>{item.full_name}</Text>
                    <Text numberOfLines={4} style={styles.description}>{item.description}</Text>
                    <View style={styles.horizontalContainer}>
                        <Text style={[styles.language, { justifyContent: 'flex-start' }]}>Language: {item.language}</Text>
                        <Image source={require('../assets/git_star.png')} style={styles.gitIcon} />
                        <Text style={styles.repoStars}>{item.stargazers_count}</Text>
                        <Image source={require('../assets/git_branch.png')} style={styles.gitIcon} />
                        <Text style={styles.forksCount}>{item.forks_count}</Text>
                    </View>
                </View> 
            </TouchableWithoutFeedback>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        marginTop: 12
    },

    fullName: {
        color: '#1F75FE',
        fontSize: 24,
    },

    description: {
        paddingVertical: 12,
        color: 'black',
        fontSize: 16,
    },

    language: {
        flexGrow: 1,
        fontSize: 16,
        color: '#808080',
    },

    forksCount: {
        fontSize: 16,
        paddingRight: 10,
        color: '#808080'
    },

    repoStars: {
        fontSize: 16,
        paddingRight: 10,
        color: '#808080'
    },

    gitIcon: {
        height: 22,
        width: 22,
        marginHorizontal: 2,
        resizeMode: 'contain'
    },

    horizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 12
    }

})

export default RepoItem;
