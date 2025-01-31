import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
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
        backgroundColor: colors.background,
        paddingTop: 20
    },
    listContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    row: {
        justifyContent: 'space-between'
    },
    productCard: {
        width: '48%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color: colors.background,
        textAlign: 'center'
    },
    productPrice: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 10
    },
    buyButton: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center'
    },
    buyButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default ProductScreen;