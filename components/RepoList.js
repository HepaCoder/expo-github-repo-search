import React, { useState, useEffect} from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import RepoItem from './RepoItem'

const RepoList = ({ query, theme }) => {
    const [page, setPage] = useState(1)
    const [items, setItems] = useState([])
    const [endReached, setEndReached] = useState(false)
    const [loading, setLoading] = useState(false)

    const { colors } = theme

    useEffect(() => {
        if (query)
            fetchData()
    }, [query, page])

    useEffect(() => {
        setEndReached(false)
        setPage(1)
    }, [query])

    async function fetchData() {
        setLoading(true)
        fetch(`https://api.github.com/search/repositories?sort=stars&&q=${query}&&page=${page}&&per_page=50`, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                if (data.items != undefined)
                    (page == 1) ? setItems(data.items) : setItems([...items, ...data.items])
                else {
                    setEndReached(true)
                }
                setLoading(false)
            }
            ).catch(err => {
                console.log(err)
            })
    }

    let loadMoreData = () => {
        if (!loading && !endReached)
            setPage(page => (page + 1))
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={items}
                ItemSeparatorComponent={() => <Divider width={0.6} />}
                keyExtractor={(item, indx) => item.id.toString()}
                renderItem={({ item }) => <RepoItem item={item} />}
                extraData={query}
                style={styles.list}
                onEndReached={loadMoreData}
                onEndReachedThreshold={1}
                ListFooterComponent={() =>
                    (loading) ? <ActivityIndicator animating={true} size="large" style={{ opacity: 1 }} color={colors.primary} /> : null}
            />
        </View>
    )
}


const styles = StyleSheet.create({

    list: {
        marginTop: 10,
        paddingHorizontal: 12,
    },

    divider: {
        height: 0.5
    },
});

export default RepoList
