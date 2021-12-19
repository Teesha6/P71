import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        
          <Text style={styles.headerText}>Complaints</Text>
          <Text style={styles.headerText}>Click on the text</Text>
        

        <Text style={styles.displayText} onPress={() => Linking.openURL('https://www.webstepbook.com/supplements/labsection/section4-complaint/solution/letter.php?fname=WhiteHatJr&lname=&gender=she&sentences=1')}>
          1) HATE IT
        </Text>
        <Text style={styles.displayText} onPress={() => Linking.openURL('https://www.webstepbook.com/supplements/labsection/section4-complaint/solution/letter.php?fname=WhiteHat&lname=Jr&gender=she&sentences=1')}>
        2) TERRIBLE
        </Text>

  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightgreen',
    flex: 1,
    fontFamily: 'comic sans ms',
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'blue',
    border: 'dashed',
  },
  displayText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 20,
    padding: 15,
  },
});
