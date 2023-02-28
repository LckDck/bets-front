import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { list } from './list';
import copy from 'copy-to-clipboard';

import Select from 'react-select';

const fields = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "BL", "Q"];

const App = () => {
  const [bets, setBets] = useState({});
  const [fieldsWithError, setFieldsWithError] = useState([]);

  const tryAddValue = (value, field) => {
    let newBets = { ...bets }
    newBets[field] = value;
    setBets(newBets);
    checkDuplicates(newBets);
  }

  const checkDuplicates = (list) => {
    const errors = [];
    const keys = Object.keys(list);

    keys.forEach(key => {
      keys.forEach(otherKey => {
        if (key != otherKey
          && key != 'Q'
          && otherKey != 'Q'
          && key != 'BL'
          && otherKey != 'BL'
          && list[key] !== ''
          && list[key] == list[otherKey]
        ) {
          errors.push(key);
        }
      });
    });
    setFieldsWithError(errors)
    return errors.length > 0
  }

  var os = require('os')

  const generateString = () => {
    var str = '';
    fields.forEach(key => {
      if (str != '') {
        str += "\n";
      }
      str += ((key == 'Q' || key == 'BL') ? `${ key }-${ list[bets[key]].value }` : list[bets[key]].value);
    });
    return str;
  }

  const checkEmpty = () => {
    const moreErrors = [...fieldsWithError]
    fields.forEach(key => {
      if (typeof bets[key] === 'undefined') {
        moreErrors.push(key)
      }
    });
    setFieldsWithError(moreErrors);
    return moreErrors.length > 0
  }

  useEffect(() => {

  }, [bets])

  const btnClick = () => {
    if (checkDuplicates(bets)){
      return;
    }
    if (checkEmpty(bets)) {
      return;
    }
    copy(generateString(), {format: 'text/plain'});
  }

  return (
    <div>

      {fields.map(field =>
        <div>
          <div style={{
            margin: 10,
            backgroundColor: fieldsWithError.indexOf(field) > -1 ? '#ff000055' : 'transparent',
            borderRadius: 10,
            flexDirection: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'center'
          }}>
            <label className='label'>{field}</label>
            <Select
              options={list}
              placeholder={'Выберите гонщика'}
              onChange={(item, index) => tryAddValue(item.id, field)}
              className='picker'
              value={list[bets[field]]}
              isSearchable={false}
            />
          </div>
        </div>
      )}
      <div className='button-container'>
        <button className='button' type="submit" disabled={fieldsWithError.length > 0} onClick={btnClick}>Копировать</button>
      </div>
    </div>
  );
}

export default App;



