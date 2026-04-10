import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ActionPill({ color = '#FFD700', isSolid = false, style, ...rest }) {
    return (
        <View style={[styles.pillContainer, isSolid && styles.pillSolidGrey, style]} {...rest}>
            {!isSolid && (
                <>
                    <View style={[styles.pillDot, { backgroundColor: color }]} />
                    <View style={styles.pillTextLine} />
                    <View style={styles.plusIconPlaceholder} />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    pillContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginRight: 10,
        width: 130,
        justifyContent: 'space-between',
    },
    pillSolidGrey: {
        width: 80,
        backgroundColor: '#777777',
    },
    pillDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    pillTextLine: {
        width: 40,
        height: 2,
        backgroundColor: '#999999',
    },
    plusIconPlaceholder: {
        width: 12,
        height: 12,
        borderWidth: 1,
        borderColor: '#555555',
    },
});