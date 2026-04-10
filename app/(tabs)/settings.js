import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ActionPill from '../../components/ActionPill';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5A189A" />

            {/* Cabeçalho */}
            <View style={styles.header}>
                <View style={styles.profileCircleOutline} />
            </View>

            <ScrollView style={styles.mainScroll} contentContainerStyle={styles.scrollContent}>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <ActionPill color="#FFD700" accessible={true} accessibilityLabel="Botão amarelo" />
                    <ActionPill color="#00B4D8" />
                    <ActionPill isSolid={true} />
                </ScrollView>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollAvatars}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <View key={item} style={styles.avatarGroup}>
                            <View style={styles.avatarCircle} />
                            <View style={styles.avatarTextLine} />
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.cardContainer} />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000000' },
    header: { backgroundColor: '#5A189A', height: 100, paddingTop: 40, paddingHorizontal: 20 },
    profileCircleOutline: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#9D4EDD' },
    mainScroll: { flex: 1 },
    scrollContent: { paddingTop: 20, paddingHorizontal: 20 },
    horizontalScroll: { marginBottom: 30 },
    horizontalScrollAvatars: { marginBottom: 30 },
    avatarGroup: { alignItems: 'center', marginRight: 15 },
    avatarCircle: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#444444', marginBottom: 10 },
    avatarTextLine: { width: 50, height: 6, backgroundColor: '#AAAAAA', borderRadius: 3 },
    cardContainer: { width: '100%', height: 70, backgroundColor: '#333333', borderRadius: 15 },
});