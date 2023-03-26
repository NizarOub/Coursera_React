import React from 'react';

import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
          { name: 'Hummus', price: '$5.00' },
          { name: 'Moutabal', price: '$5.00' },
          { name: 'Falafel', price: '$7.50' },
          { name: 'Marinated Olives', price: '$5.00' },
          { name: 'Kofta', price: '$5.00' },
          { name: 'Eggplant Salad', price: '$8.50' },
        ],
      },
      {
        title: 'Main Dishes',
        data: [
          { name: 'Lentil Burger', price: '$10.00' },
          { name: 'Smoked Salmon', price: '$14.00' },
          { name: 'Kofta Burger', price: '$11.00' },
          { name: 'Turkish Kebab', price: '$15.50' },
        ],
      },
      {
        title: 'Sides',
        data: [
          { name: 'Fries', price: '$3.00', id: '11K' },
          { name: 'Buttered Rice', price: '$3.00' },
          { name: 'Bread Sticks', price: '$3.00' },
          { name: 'Pita Pocket', price: '$3.00' },
          { name: 'Lentil Soup', price: '$3.75' },
          { name: 'Greek Salad', price: '$6.00' },
          { name: 'Rice Pilaf', price: '$4.00' },
        ],
      },
      {
        title: 'Desserts',
        data: [
          { name: 'Baklava', price: '$3.00' },
          { name: 'Tartufo', price: '$3.00' },
          { name: 'Tiramisu', price: '$5.00' },
          { name: 'Panna Cotta', price: '$5.00' },
        ],
      },
];

const Separator = () => <View style={MenuStyles.separator}/>
const Header = () => <Text style={MenuStyles.headerText}> View Menu </Text>
const Footer = () => <Text style={MenuStyles.footerText}>All rights reserved by Little Lemon, 2022 {' '}</Text>


const Item = ({name, price}) => {
  return(
    <View style={MenuStyles.innerContainer}> 
      <Text style={MenuStyles.mainText}>{name}</Text>
      <Text style={MenuStyles.mainText}>{price}</Text>
    </View>
  )
}

const MenuItems = () => {

  const renderItem = ({item}) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section : {title} }) => (
    <Text style={MenuStyles.headerText}>{title} </Text>
  )

  return(
    <View style={MenuStyles.container}>
        <SectionList
            keyExtractor={(item, index) => item + index}
            sections = {menuItemsToDisplay}
            renderItem = {renderItem}
            renderSectionHeader = {renderSectionHeader}
            ItemSeparatorComponent = {Separator}
            ListFooterComponent = {Footer}
        />
    </View>
  )
}
export default MenuItems;

const MenuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    backgroundColor: '#F4CE14',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  mainText: {
    color: '#F4CE14',
    fontSize: 32,
  },
  footerText: {
    backgroundColor: '#EE9972',
    color: '#333333',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  }
})