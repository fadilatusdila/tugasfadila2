import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Belanja extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 180}}>
                    <FontAwesome5 name='search-dollar' color='#F4E2F8' size={250} />
                    <Text>Belum Ada Produk</Text>
                </View>
            </View>
        );
    }
}

export default Belanja;