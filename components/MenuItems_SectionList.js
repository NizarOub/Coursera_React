import React, {useState} from 'react';

import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad',
    ],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf',
    ],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
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

  const renderItem = ({item}) => <Item name={item.name} />;
  const [showMenu, setShowMenu] = useState(false);
  const renderSectionHeader = ({ section : {title} }) => (
    <Text style={MenuStyles.headerText}>{title} </Text>
  )

  return(
    <View style={MenuStyles.container}>
      {!showMenu && (
      <Text style={MenuStyles.mainText}>         
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
        We would love to hear more about your experience with us! 
      </Text>
      )}
      <Pressable 
          style={MenuStyles.button} 
          onPress={() => { 
          setShowMenu(!showMenu); 
          }}> 
          <Text style={MenuStyles.buttonText}> 
           {showMenu ? 'Home' : 'View Menu'} 
          </Text> 
      </Pressable> 
      { showMenu && (
          <SectionList
            keyExtractor={(item, index) => item + index}
            sections = {menuItemsToDisplay}
            renderItem = {renderItem}
            renderSectionHeader = {renderSectionHeader}
            ItemSeparatorComponent = {Separator}
            ListFooterComponent = {Footer}
          />
      ) }

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
    color: '#EDEFEE',
    fontSize: 20,
  },
  footerText: {
    backgroundColor: '#EE9972',
    color: '#333333',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
})