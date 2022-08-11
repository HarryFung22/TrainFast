import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import discoverData from '../assets/data/discoverData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import { SafeAreaView } from 'react-native-safe-area-context';
import profile from '../assets/images/person.png';
import { FlatList, TouchableOpacity  } from 'react-native-gesture-handler';


Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {

    const renderDiscoverItem = ({item}) => {
        return (
            <TouchableOpacity
            onPress={() => navigation.navigate('Details', {
                item: item,
            })}
            >
                <ImageBackground
                  source={item.image}
                  style={[styles.discoverItem, {marginLeft: item.id === 'discover-1' ? 20:0}]}
                  imageStyle={styles.discoverItemImage}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name = "location-pin" size={18} color={colors.white}/>
                        <Text style={styles.discoverItemWorkoutText}>{item.workoutType}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return(
        <View style = {styles.container}>
            <ScrollView>
                <SafeAreaView>
                    <View style = {styles.menuWrapper}>
                        <Feather name = "menu" size={32} color={colors.black} style={styles.menuIcon} />
                        <Image source={profile} style={styles.profileImage} />
                    </View>
                </SafeAreaView> 

                
                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoryText, {color: colors.blue}]}>All</Text>
                        <Text style={styles.discoverCategoryText}>Recommended</Text>
                        <Text style={styles.discoverCategoryText}>Abs</Text>
                        <Text style={styles.discoverCategoryText}>Arms</Text>
                    </View>

                    <View style={styles.discoverItemsWrapper}>
                        <FlatList 
                          data={discoverData}
                          renderItem={renderDiscoverItem}
                          keyExtractor={(item) => item.id}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                        />
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },
    discoverWrapper: {
        //marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        marginHorizontal: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 32,
    },
    discoverCategoriesWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20,
    },
    discoverCategoryText: {
        marginRight: 30,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.gray,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    },
    discoverItemWorkoutText: {
        marginLeft: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.white,
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    discoverItemsWrapper: {
        paddingVertical: 20,
    }
})

export default Home;