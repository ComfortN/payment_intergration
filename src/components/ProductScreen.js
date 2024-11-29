import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';


const ProductScreen = ({ navigation }) => {
    const products = [
        {
            id: 1,
            name: 'Leaf Bridal Jewelry Set',
            price: 1999.99,
            description: 'Complete your bridal look with our exquisite Leaf Bridal Jewelry Set. Featuring a stunning necklace, earrings, bracelet, and ring, this set is adorned with clear cubic zirconia stones, designed to complement any wedding dress beautifully.',
            image: require('../../assets/rosegold.jpeg')
        },
        {
            id: 2,
            name: 'Crystal Pearl Earrings',
            price: 97.99,
            description: 'Elegant crystal and pearl drop earrings, perfect for adding a touch of sophistication to any outfit. Delicate and timeless design that complements both casual and formal wear.',
            image: require('../../assets/pearl-earings.jpeg')
        },
        {
            id: 3,
            name: 'Vintage Charm Bracelet',
            price: 12.99,
            description: 'A stunning vintage-inspired charm bracelet with intricate detailing. Features multiple delicate charms and a classic silver finish, perfect for adding a nostalgic touch to your jewelry collection.',
            image: require('../../assets/charm-bracelet.jpeg')
        },
        {
            id: 4,
            name: 'Gold Minimalist Necklace',
            price: 800.99,
            description: 'Sleek and modern gold-toned necklace with a simple pendant. Versatile design that easily transitions from day to night, making it a must-have in any jewelry collection.',
            image: require('../../assets/gold-necklace.jpeg')
        }
        ];


        const renderProduct = ({ item }) => (
            <View style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>R{item.price}</Text>
                {/* <Text style={styles.productDescription}>{item.description}</Text> */}
                <TouchableOpacity 
                    style={styles.buyButton}
                    onPress={() => navigation.navigate('Checkout', { product: item })}
                >
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        );

    
        return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer}
            />
        </View>
        );
    };
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background
        },
        listContainer: {
            padding: 10
        },
        row: {
            flex: 1,
            justifyContent: 'space-around'
        },
        productCard: {
            width: '45%',
            padding: 10,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: '#818D8B'
        },
        productImage: {
            width: 150,
            height: 150,
            resizeMode: 'contain'
        },
        productName: {
            fontSize: 16,
            fontWeight: 'bold',
            marginVertical: 10,
            color: colors.textPrimary,
            textAlign: 'center'
        },
        productPrice: {
            fontSize: 14,
            color: colors.textSecondary
        },
        productDescription: {
            textAlign: 'center',
            marginVertical: 10,
            color: colors.primary,
            fontSize: 12
        },
        buyButton: {
            backgroundColor: colors.primary,
            padding: 10,
            paddingHorizontal: 20,
            borderRadius: 5
        },
        buyButtonText: {
            color: 'white',
            textAlign: 'center',
            fontSize: 12
        }
    });     
    export default ProductScreen;