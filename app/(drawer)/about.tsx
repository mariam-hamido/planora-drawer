import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function AboutScreen() {
  const team = [
  { id: 1, name: 'Mostafa Hawash', role: 'Frontend Developer', img: require('../../assets/images/moustafa.jpeg') },
  { id: 2, name: 'Mahmoud Abu Attiya', role: 'Frontend Developer', img: require('../../assets/images/mahmoud.jpeg') },
  { id: 3, name: 'Nadeen Ahmed', role: 'Frontend Developer', img: require('../../assets/images/nadeen.jpeg') },
  { id: 4, name: 'Mohamed Ahmed', role: 'Frontend Developer', img: require('../../assets/images/mohamed.jpeg') },
  { id: 5, name: 'Mariam Ibrahim', role: 'Frontend Developer', img: require('../../assets/images/mariem.jpeg') },
  { id: 6, name: 'Islam Adel', role: 'Frontend Developer', img: require('../../assets/images/islam.jpeg') },
];


  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>About Planora</Text>
      <Text style={styles.subText}>
        Planora is a creative project built with passion and teamwork. 
        Our goal is to simplify event planning, enhance user experience, 
        and create a seamless digital solution for modern users.
      </Text>

      <Text style={styles.sectionTitle}>Meet Our Team</Text>

      <View style={styles.teamGrid}>
        {team.map((member) => (
          <View key={member.id} style={styles.card}>
            <Image source={member.img} style={styles.avatar} />
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.role}>{member.role}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F4', // خلفية المساعدة
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#330C2F',
    marginBottom: 10,
  },
  subText: {
    color: '#8A817C',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 30,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: '#330C2F',
    marginBottom: 16,
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#FBF7F4',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FFA704',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#330C2F',
  },
  role: {
    fontSize: 13,
    color: '#8A817C',
    marginTop: 4,
  },
});

