import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }

  submitStory = () => {
    db.collection('User Stories').add({
      title: this.state.title,
      author: this.state.author,
      storyText: this.state.storyText,
    });
    this.setState({
      title: '',
      author: '',
      storyText: '',
    });
    ToastAndroid.show("Story Submitted Successfully ✅✅",ToastAndroid.SHORT)
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
          <Text style={styles.header}>Story Hub App</Text>
        

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
          value={this.state.title}
          onChangeText={(text) => this.setState({ title: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the name of the author here"
          value={this.state.author}
          onChangeText={(text) => this.setState({ To: text })}
        />

        <TextInput
          style={styles.storyBox}
             placeholder={'Write your story here'} multiline={true}
          value={this.state.storyText}
          onChangeText={(text) => this.setState({ Complaint: text })}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>
          Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  header: {
    backgroundColor: 'blue',
    border: 'dashed',
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'blue',
    width: '50%',
    height: 40,
    border: 'dashed',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});
