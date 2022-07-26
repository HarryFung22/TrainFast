import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View>
            <Text>Home Page</Text>
            <Button 
              onPress = {() => navigation.navigate("Details")} 
              title = "Go to Details" 
            />
        </View>
    )
}

export default Home;