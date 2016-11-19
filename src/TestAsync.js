import React from 'react'
import {
    Text,
    Button,
    View,
    StyleSheet
} from 'react-native'

class TestAsync extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: 'None'
        }
    }

    request() {
        console.log('running fetch!')

        fetch('http://10.0.3.2:8000/test.json')
            .then((response) => response.json())
            .then((json) => json.data[0].kota)
            .then((kota) => {
                console.log('City', kota)
                this.setState({ city: kota });
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.city}</Text>
                <Button
                    title={'Get First City'}
                    onPress={() => this.request()}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default TestAsync

