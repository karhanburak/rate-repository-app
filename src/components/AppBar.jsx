import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import Text from './Text'; // bizim theme tabanlı Text componentimiz
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 10,
        paddingBottom: 10,
        backgroundColor: theme.colors.primary, // mavi arka plan
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100vw',
    },
    tab: {
        marginRight: 15,
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Link to="/">
                    <Text color="white" fontWeight="bold" style={styles.tab}>
                        Repositories
                    </Text>
                </Link>
                <Link to="/blank">
                    <Text color="white" fontWeight="bold" style={styles.tab}>
                        BlankPage
                    </Text>
                </Link>
                <Link to="/signin">
                    <Text color="white" fontWeight="bold" style={styles.tab}>
                        Sign In
                    </Text>
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;
