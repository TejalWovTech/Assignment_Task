import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
//local import
import R from '../../R';
import horizontalScale from '../../../res/Scale';
import {RootView, SimpleButton, SimpleTextInput} from '../../components/index';
import {connect} from 'react-redux';

import {
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
} from '../redux/action/action';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      errorName: false,
      errorLastName: false,
      empDetails: [],
      id: '',
    };
  }

  componentDidMount() {
    this.props.getEmployee();
    this.setState({empDetails: this.props.getEmpdata});
  }
  //textfield validation
  validation() {
    if (this.state.firstName == '') {
      this.setState({errorName: true});
    } else if (this.state.lastName == '') {
      this.setState({errorLastName: true});
    } else {
      this.addEmp();
    }
  }
  //add emp function
  addEmp = () => {
    let id = 0;
    const newData = {
      id: id + 1,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    console.log(newData);
    this.props.addEmployee(newData);
    this.setState({empDetails: [...this.state.empDetails, newData]});
    this.clearData();
  };

  clearData = () => {
    this.setState({
      firstName: '',
      lastName: '',
      errorName: '',
      errorLastName: '',
    });
  };
  //update emp function
  updateEmp = () => {
    const newData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      id: this.state.id,
    };
    let test = this.state.empDetails;
    test.splice(this.state.id, 1);
    let x = [...test, newData];
    this.setState({empDetails: x});

    this.props.editEmployee(x);
    this.clearData();
  };

  //delete emp function
  deleteEmp = (item, index) => {
    console.log('index', index);
    // this.props.deleteEmployee(index);
    let test = this.state.empDetails;
    test.splice(index, 1);
    this.setState({empDetails: test});
    this.props.deleteEmployee(test);
  };

  //edit emp function
  editEmp = (item, index) => {
    this.setState({
      id: index,
      firstName: item.firstName,
      lastName: item.lastName,
    });
  };

  render() {
    return (
      <RootView customStyle={styles.View}>
        <View style={styles.customViewStyle}>
          <SimpleTextInput
            placeholder="Enter User Name"
            placeholderTextColor={R.colors.maroon}
            onChangeText={firstName => this.setState({firstName})}
            textInputStyle={styles.textInputStyle}
            value={this.state.firstName}
          />
          {this.state.errorName ? (
            <Text style={styles.errorText}>Pleasr Enter username</Text>
          ) : null}
        </View>
        <View style={{marginTop: '5%'}}>
          <SimpleTextInput
            placeholder="Enter Last Name"
            placeholderTextColor={R.colors.maroon}
            onChangeText={lastName => this.setState({lastName})}
            textInputStyle={styles.textInputStyle}
            value={this.state.lastName}
          />
          {this.state.errorLastName ? (
            <Text style={styles.errorText}>Pleasr Enter password</Text>
          ) : null}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <SimpleButton
            title="ADD"
            customTxtStyle={styles.customTxtStyle}
            customStyle={styles.customStyle}
            onPress={() => this.validation()}
          />
          <SimpleButton
            title="UPDATE"
            customTxtStyle={styles.customTxtStyle}
            customStyle={styles.customStyle}
            onPress={() => this.updateEmp()}
          />
        </View>
        <FlatList
          data={this.state.empDetails}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: '10%'}}
          renderItem={({item, index}) => (
            <View style={styles.row}>
              <Text style={styles.text}>{item.firstName}</Text>
              <Text style={styles.text}>{item.lastName}</Text>
              <SimpleButton
                title="DELETE"
                customTxtStyle={styles.deleteTxtStyle}
                customStyle={styles.deleteButton}
                onPress={() => this.deleteEmp(item, index)}
              />
              <SimpleButton
                title="EDIT"
                customTxtStyle={styles.deleteTxtStyle}
                customStyle={styles.deleteButton}
                onPress={() => this.editEmp(item, index)}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </RootView>
    );
  }
}

const mapStateToProps = state => {
  console.log('initial state', state.allData.data);
  return {
    getEmpdata: state.allData.data,
  };
};

export default connect(mapStateToProps, {
  addEmployee,
  getEmployee,
  editEmployee,
  deleteEmployee,
})(Dashboard);

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
  },
  text: {
    fontSize: horizontalScale(16),
    fontWeight: 'bold',
    width: '15%',
  },
  textInputStyle: {
    alignSelf: 'center',
    marginTop: '5%',
    borderWidth: 0.5,
    height: horizontalScale(40),
  },
  customStyle: {
    backgroundColor: R.colors.maroon,
    marginTop: horizontalScale(30),
    alignSelf: 'center',
    width: horizontalScale(100),
  },
  deleteButton: {
    backgroundColor: R.colors.maroon,
    alignItems: 'center',
    width: horizontalScale(80),
    height: horizontalScale(30),
  },
  customViewStyle: {
    marginTop: '5%',
    alignSelf: 'center',
  },
  customTxtStyle: {
    color: '#fff',
  },
  deleteTxtStyle: {
    color: '#fff',
    fontSize: horizontalScale(10),
  },
  errorText: {
    fontSize: horizontalScale(12),
    color: '#FF1493',
    marginHorizontal: '5%',
    alignSelf: 'center',
  },
});
