import * as React from 'react';
import Button from '../common/Button.tsx';
import CSS from 'csstype';

type InputFormProps = {
  placeholder: string;
  onClick: () => void
  buttonText: string;
  value: string;
  onChangeValue: () => void,
  onHandleReset: () => void,
  style: CSS.Properties; // TODO update below after updating SearchContainer
}

type InputFormState = {
  inputValue: string;
}

export default class InputForm extends React.Component<InputFormProps, InputFormState> {
  state = {
    inputValue: ''
  };

  render() {
    const {
      placeholder,
      onClick,
      buttonText,
      value,
      onChangeValue,
      onHandleReset,
      style
    } = this.props;

    return (
      <div className="ml-5 mb-3 mt-3" style={style}>
        <input
          value={value}
          style={style.inputStyle}
          className="form-control mb-1"
          placeholder={placeholder}
          onChange={onChangeValue}
          onKeyPress={event => {
            if (event.key === "Enter") {
              onClick();
            }
          }}
        />
        <button className="btn btn-primary mr-1" onClick={onClick}>
          {buttonText}
        </button>
        <Button
          className="btn btn-secondary"
          buttonText="Reset"
          onClick={onHandleReset}
        />
      </div>
    );
  }
}
