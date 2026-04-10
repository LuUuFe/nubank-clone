import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ActionPill from '../../components/ActionPill';

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5A189A" />

            {/* Cabeçalho Roxo Completo */}
            <View style={styles.header}>
                <View style={styles.headerTopArea}>
                    <View style={styles.profileCircleOutline} />
                    <View style={styles.headerIconsContainer}>
                        <View style={styles.iconPlaceholderSmall} />
                        <View style={styles.iconPlaceholderSmall} />
                    </View>
                </View>
            </View>

            {/* Barra Branca Sobreposta (Pesquisa/Bandeira) */}
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <View style={styles.flagIconPlaceholder} />
                </View>
            </View>

            {/* Conteúdo Principal Scrollável */}
            <ScrollView style={styles.mainScroll} contentContainerStyle={styles.scrollContent}>

                <View style={styles.sectionMargin} />

                {/* Linha Fina Cinza Superior */}
                <View style={styles.thinGreyLine} />

                {/* Primeira Rolagem Horizontal (Usando nosso Componente Reutilizável) */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <ActionPill color="#FFD700" />
                    <ActionPill color="#00B4D8" />
                    <ActionPill isSolid={true} />
                </ScrollView>

                {/* Segunda Rolagem Horizontal (Círculos / Avatares) */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollAvatars}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <View key={item} style={styles.avatarGroup}>
                            <View style={styles.avatarCircle} />
                            <View style={styles.avatarTextLine} />
                        </View>
                    ))}
                </ScrollView>

                {/* Cartões Verticais */}
                <View style={styles.cardContainer}>
                    <View style={styles.cardRightChevron} />
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.cardRefreshIcon} />
                </View>

                {/* Indicadores de Paginação */}
                <View style={styles.paginationContainer}>
                    <View style={[styles.dot, styles.dotActive]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>

                {/* Barra Cinza Inferior */}
                <View style={styles.bottomGreyBar}>
                    <View style={styles.cardRightChevron} />
                </View>

                {/* Espaço para o menu flutuante não cobrir o conteúdo */}
                <View style={styles.bottomPadding} />

            </ScrollView>

            {/* Menu de Navegação Inferior Flutuante Original */}
            <View style={styles.floatingBottomNavContainer}>
                <View style={styles.floatingBottomNav}>
                    <View style={styles.navActiveItem}>
                        <View style={styles.navArrowsPlaceholder} />
                    </View>
                    <View style={styles.navIconPlaceholderText}><View style={styles.dollarSign} /></View>
                    <View style={styles.navIconPlaceholderBag} />
                    <View style={styles.navIconPlaceholderPhone}>
                        <View style={styles.notificationDot} />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

// Todos os estilos da versão "Pixel Perfect" restaurados
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000000' },
    header: { backgroundColor: '#5A189A', height: 140, paddingTop: 20, paddingHorizontal: 20 },
    headerTopArea: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
    profileCircleOutline: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#9D4EDD' },
    headerIconsContainer: { flexDirection: 'row', gap: 15 },
    iconPlaceholderSmall: { width: 20, height: 20, backgroundColor: '#FFFFFF', borderRadius: 4 },

    searchBarContainer: { position: 'absolute', top: 110, width: '100%', alignItems: 'center', zIndex: 10 },
    searchBar: { width: '90%', height: 55, backgroundColor: '#FFFFFF', borderRadius: 12, justifyContent: 'center', paddingHorizontal: 20 },
    flagIconPlaceholder: { width: 24, height: 24, backgroundColor: '#5A189A', borderRadius: 4, transform: [{ skewY: '-15deg' }] },

    mainScroll: { flex: 1, backgroundColor: '#000000' },
    scrollContent: { paddingTop: 40, paddingHorizontal: 20 },
    sectionMargin: { height: 20 },
    thinGreyLine: { width: '100%', height: 15, backgroundColor: '#CCCCCC', borderRadius: 8, marginBottom: 30 },

    horizontalScroll: { marginBottom: 30 },
    horizontalScrollAvatars: { marginBottom: 30 },
    avatarGroup: { alignItems: 'center', marginRight: 15 },
    avatarCircle: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#444444', marginBottom: 10 },
    avatarTextLine: { width: 50, height: 6, backgroundColor: '#AAAAAA', borderRadius: 3 },

    cardContainer: { width: '100%', height: 70, backgroundColor: '#333333', borderRadius: 15, marginBottom: 15, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 20 },
    cardRightChevron: { width: 10, height: 10, borderTopWidth: 2, borderRightWidth: 2, borderColor: '#9D4EDD', transform: [{ rotate: '45deg' }] },
    cardRefreshIcon: { width: 20, height: 20, borderWidth: 2, borderColor: '#9D4EDD', borderRadius: 10, borderStyle: 'dashed' },

    paginationContainer: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 20 },
    dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#555555' },
    dotActive: { backgroundColor: '#FFFFFF' },

    bottomGreyBar: { width: '100%', height: 25, backgroundColor: '#CCCCCC', borderRadius: 4, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 10 },
    bottomPadding: { height: 100 },

    floatingBottomNavContainer: { position: 'absolute', bottom: 30, width: '100%', alignItems: 'center' },
    floatingBottomNav: { flexDirection: 'row', backgroundColor: '#111111', borderRadius: 30, paddingHorizontal: 20, paddingVertical: 10, width: '80%', justifyContent: 'space-between', alignItems: 'center' },
    navActiveItem: { backgroundColor: '#5A189A', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 },
    navArrowsPlaceholder: { width: 16, height: 16, backgroundColor: '#FFFFFF' },
    navIconPlaceholderText: { justifyContent: 'center', alignItems: 'center' },
    dollarSign: { width: 10, height: 15, backgroundColor: '#AAAAAA' },
    navIconPlaceholderBag: { width: 18, height: 20, borderWidth: 2, borderColor: '#AAAAAA', borderTopLeftRadius: 5, borderTopRightRadius: 5 },
    navIconPlaceholderPhone: { width: 14, height: 22, borderWidth: 2, borderColor: '#AAAAAA', borderRadius: 4, position: 'relative' },
    notificationDot: { position: 'absolute', top: -5, right: -5, width: 8, height: 8, borderRadius: 4, backgroundColor: '#9D4EDD' }
});