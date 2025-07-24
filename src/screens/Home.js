import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { Colors } from '../assets/constants/Color';
import { Circle, FullCircle, Maps, RightArrow, Search } from '../assets/images';
import { Label } from '../components/Label';
import { WeekendCard } from '../components/WeekendCard';
import Heading from '../components/Heading';
import { CategoryCard } from '../components/CategoryCard';
import { CategoryCardData } from '../assets/constants/Dummy';
import { OrderCard } from '../components/OrderCard';
import { Input } from '../components/Input';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        {/* Header */}
        <Header title="Hyper" subTitle="Mart" />
        {/* Map Card */}
        <View style={styles.card}>
          <View style={styles.locationRow}>
            <View style={styles.mapContainer}>
              <Maps />
            </View>
            <View>
              <Label label="Bengaluru" />
              <Label style={styles.addressText} label="BTM Layout, 500628" />
            </View>
          </View>
          <RightArrow />
        </View>
        {/* Input */}
        <Input
          placeholder="Search Anything..."
          inputStyle={{
            backgroundColor: Colors.LIGHT_GRAY,
            color: Colors.BLUE_GRAY,
          }}
          placeholderTextColor={Colors.BLUE_GRAY}
          Icon={<Search />}
        />
      </View>

      {/* Weekend Card */}
      <View style={styles.WeekendContainer}>
        <Circle style={styles.circleIcon} />
        <WeekendCard />
      </View>

      {/* Category Heading */}
      <View
        style={[
          styles.locationRow,
          {
            justifyContent: 'space-between',
            marginTop: 20,
            position: 'relative',
            padding: 20,
          },
        ]}
      >
        <FullCircle style={styles.FullCircle} />
        <Heading heading="Categories" />
        <RightArrow />
      </View>
      {/* Category */}
      <View style={{ paddingStart: 20 }}>
        <ScrollView horizontal style={{ height: 110 }}>
          {CategoryCardData.map((items, index) => (
            <CategoryCard
              key={index}
              label={items.label}
              Icon={items.Icon}
              style={{ backgroundColor: items.backgroundColor }}
            />
          ))}
        </ScrollView>
      </View>
      {/*  */}
      <View style={{ padding: 20 }}>
        <Heading heading="Previous Order" />
        <OrderCard />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: Colors.WHITE,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  mapContainer: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: Colors.TEAL_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressText: {
    fontSize: 12,
  },
  WeekendContainer: {
    position: 'relative',
  },
  circleIcon: {
    position: 'absolute',
    bottom: 80,
    right: -10,
    zIndex: 50,
  },
  FullCircle: {
    position: 'absolute',
    left: 20,
    bottom: -15,
  },
});
