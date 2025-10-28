import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {DrawerContentScrollView,DrawerItemList,DrawerContentComponentProps} from '@react-navigation/drawer';
import {View,Text,Image,StyleSheet,TouchableOpacity, Platform,StatusBar,} from 'react-native';
import { Home, Info, Phone, LogOut } from 'lucide-react-native';

const COLORS = {
  primary: '#330C2F',
  secondary: '#FFA704',
  neutral: '#8A817C',
  bg: '#FBF7F4',
  white: '#FFFFFF',
};

const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0;

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerPosition: 'left',
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.white,
          drawerActiveTintColor: COLORS.primary,
          drawerInactiveTintColor: COLORS.neutral,
          drawerActiveBackgroundColor: '#FFE5A6',
          drawerLabelStyle: { fontSize: 16, fontWeight: '600' },
          drawerStyle: { backgroundColor: COLORS.bg },
          drawerItemStyle: { borderRadius: 8, marginHorizontal: 8 },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: 'Home Page',
            drawerIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            title: 'About Us',
            drawerIcon: ({ color, size }) => <Info color={color} size={size} />,
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            title: 'Contact Us',
            drawerIcon: ({ color, size }) => <Phone color={color} size={size} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const handleLogout = () => {
    console.log('Logout pressed');
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0, paddingHorizontal: 0, backgroundColor: COLORS.bg }}
      >
        {/* Header / Avatar */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Image
              source={{
                uri: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png',
              }}
              style={styles.avatar}
            />
            <Text style={styles.username}>Mariam Ibrahim</Text>
            <Text style={styles.subtitle}>Planora</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Drawer Items */}
        <View style={{ paddingHorizontal: 8 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* Logout button at bottom */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout} activeOpacity={0.85}>
          <LogOut size={20} color={COLORS.white} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: COLORS.primary,
  },
  header: {
    backgroundColor: COLORS.primary,
    marginHorizontal: -16,
    paddingHorizontal: 16,
    paddingTop: STATUS_BAR_HEIGHT + 60,
    paddingBottom: 36,
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.white,
  },
  username: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: '#EBDDF0',
    fontSize: 12,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E2DD',
    marginVertical: 12,
    width: '100%',
  },
  logoutContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E8E2DD',
    backgroundColor: COLORS.bg,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  logoutText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
