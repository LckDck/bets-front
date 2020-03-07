import React from 'react';
import logo from './logo.svg';
import './App.css';


// import React, { Component } from 'react';
// import { Button, FlatList, Share, Text, View } from 'react-native';
// import PickerSelect from 'react-native-picker-select';
// import { BETS } from '../shared/bets';
// import { DISHES } from '../shared/dishes';

// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             bets: BETS,
//             persons: DISHES,
//             hasErrors: true
//         };
//     }

//     static navigationOptions = {
//         title: 'Ставки'
//     }

//     onNavigateBack(person, betId) {
//         const list = this.state.bets;
//         list[betId].name = person.key;
//         this.checkDuplicates(list);
//         this.setState({ bets: list });
//     }

//     checkDuplicates(list) {
//         list.forEach(item => {
//             item.color = '#000';
//         });
//         var hasError = false;
//         list.forEach(item => {
//             if (item.name == '') {
//                 hasError = true;
//             }
//             list.forEach(otherItem => {
//                 if (item.id != otherItem.id
//                     && item.titleFilled != 'Q'
//                     && otherItem.titleFilled != 'Q'
//                     && item.titleFilled != 'BL'
//                     && otherItem.titleFilled != 'BL'
//                     && item.name != ''
//                     && item.name == otherItem.name
//                 ) {
//                     item.color = '#f00';
//                     otherItem.color = '#f00';
//                     hasError = true;
//                 }
//             });
//         });
//         this.state.hasErrors = hasError;
//     }

//     generateString() {
//         var str = '';
//         this.state.bets.forEach(item => {
//             if (str != '') {
//                 str += '\n';
//             }
//             str += (item.titleFilled == 'Q' || item.titleFilled == 'BL' ? `${item.titleFilled}-${item.name}` : item.name);
//         });
//         return str;
//     }

//     render() {
//         const bets = this.state.bets;
//         const persons = this.state.persons;
//         const personsSelector = this.state.persons.map(item => {
//             return { label: item.name, value: item.key, key: item.id }
//         });

//         const renderMenuItem = ({ item, index }) => {
//             return (
//                 <View style={{ flexDirection: 'row', height: 46 }}>
//                     <View style={{ width: 30, alignContent: 'center', justifyContent: 'center' }}>
//                         <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{bets[index].titleFilled}</Text>
//                     </View>
//                     <View style={{ flex: 1, justifyContent: 'center' }}>
//                         <PickerSelect
//                             style={{
//                                 inputAndroid: {
//                                     color: bets[index].color,
//                                 }
//                             }}
//                             placeholder={{
//                                 label: "Выберите гонщика",
//                                 value: '',
//                                 key: ''
//                             }}
//                             items={personsSelector}
//                             onValueChange={(item, ind) => {
//                                 // -1 тк в селектор попадает и дефолтное значение 
//                                 const person = ind > 0 ? persons[ind - 1] : { key: '' };
//                                 this.onNavigateBack(person, index);
//                             }}
//                         />
//                     </View>
//                 </View>

//             );
//         };

//         return (
//             <View flex={1}>
//                 <FlatList
//                     data={this.state.bets}
//                     extraData={this.state}
//                     renderItem={renderMenuItem}
//                     keyExtractor={item => item.id.toString()}
//                 />
//                 <Button title={"ОТПРАВИТЬ"} disabled={this.state.hasErrors}
//                     onPress={() => {
//                         var string = this.generateString();
//                         Share.share({
//                             message: string,
//                             title: 'Мой прогноз:'
//                         }, {})
//                     }}>
//                 </Button>
//             </View>
//         );
//     }
// }

// export default Menu;
import Select from 'react-select';

const names = ["Маша", "Саша", "Даша"];
const fields = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "BL"];


function App() {
  return (
    <form>

      {fields.map(field =>
      <div>
        <div style={{margin: 10, flexDirection: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
          <label className='label'>{field}</label>
          {/* <select className='picker' key={field}>
        {names.map(item => <option key={item}>{item}</option>)}
      </select> */}
          <Select
            options={[]}
            placeholder={'Выберите гонщика'}
            clearable={false}
            className='picker'
          />
        </div>
        </div>
      )}
      <div className='button-container'>
      <input className='button' type="submit" value="Отправить" />
      </div>
    </form>
  );
}

export default App;



