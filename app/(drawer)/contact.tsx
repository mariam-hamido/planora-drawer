import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Contact Us</Text>
      <Text style={styles.subText}>
        Don&apos;t hesitate to contact us whether you have a suggestion on our improvement,
        a complaint to discuss, or an issue to solve.
      </Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.contactBox}>
          <Ionicons name="call-outline" size={28} color={styles.iconPrimary.color} />
          <Text style={styles.contactTitle}>Call us</Text>
          <Text style={styles.contactInfo}>Mon–Fri · 9–17</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactBox}>
          <Ionicons name="mail-outline" size={28} color={styles.iconPrimary.color} />
          <Text style={styles.contactTitle}>Email us</Text>
          <Text style={styles.contactInfo}>Mon–Fri · 9–17</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Contact us on Social Media</Text>

      <View style={styles.socialCard}>
        <View style={styles.socialRow}>
          <FontAwesome name="instagram" size={24} color={styles.iconPrimary.color} />
          <View style={styles.socialInfo}>
            <Text style={styles.socialName}>Instagram</Text>
            <Text style={styles.socialSub}>4.6k Followers · 118 Posts</Text>
          </View>
          <Ionicons name="share-outline" size={22} color={styles.iconSecondary.color} />
        </View>
      </View>

      <View style={styles.socialCard}>
        <View style={styles.socialRow}>
          <FontAwesome name="telegram" size={24} color={styles.iconPrimary.color} />
          <View style={styles.socialInfo}>
            <Text style={styles.socialName}>Telegram</Text>
            <Text style={styles.socialSub}>1.3k Followers · 85 Posts</Text>
          </View>
          <Ionicons name="share-outline" size={22} color={styles.iconSecondary.color} />
        </View>
      </View>

      <View style={styles.socialCard}>
        <View style={styles.socialRow}>
          <FontAwesome name="facebook" size={24} color={styles.iconPrimary.color} />
          <View style={styles.socialInfo}>
            <Text style={styles.socialName}>Facebook</Text>
            <Text style={styles.socialSub}>3.8k Followers · 136 Posts</Text>
          </View>
          <Ionicons name="share-outline" size={22} color={styles.iconSecondary.color} />
        </View>
      </View>

      <View style={styles.socialCard}>
        <View style={styles.socialRow}>
          <MaterialCommunityIcons name="whatsapp" size={24} color={styles.iconPrimary.color} />
          <View style={styles.socialInfo}>
            <Text style={styles.socialName}>WhatsApp</Text>
            
          </View>
          <Ionicons name="share-outline" size={22} color={styles.iconSecondary.color} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F4', 
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#330C2F',
    marginBottom: 8,
  },
  subText: {
    color: '#8A817C',
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  contactBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#FBF7F4',
  },
  contactTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 8,
    color: '#330C2F',
  },
  contactInfo: {
    fontSize: 12,
    color: '#8A817C',
    marginTop: 4,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#330C2F',
    marginBottom: 12,
  },
  socialCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#FFA704', 
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialInfo: {
    flex: 1,
    marginLeft: 10,
  },
  socialName: {
    fontWeight: '600',
    fontSize: 15,
    color: '#330C2F',
  },
  socialSub: {
    fontSize: 12,
    color: '#8A817C',
  },
  iconPrimary: {
    color: '#330C2F',
  },
  iconSecondary: {
    color: '#FFA704',
  },
});
