import React from 'react';
import proptypes from 'prop-types';

import { Form, Input } from './styles';

import { Search } from '../../assets/icons';

const AddressInput = ({ setText, resetInput, onClick }) => {
  const changeText = event => {
    resetInput();
    setText(event.target.value);
  };

  return (
    <Form>
      <Input
        placeholder={'Digite aqui seu endereço'}
        onChange={changeText}
        // onFocus={resetInput()}
      />
      <Search onClick={onClick} />
    </Form>
  );
};

AddressInput.propTypes = {
  setText: proptypes.func,
  onClick: proptypes.func,
  resetInput: proptypes.func
};

export default AddressInput;
