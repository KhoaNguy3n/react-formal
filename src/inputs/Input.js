import React from 'react';

class Input extends React.Component {
  static propTypes = {
    value: React.PropTypes.any,
    onChange: React.PropTypes.func,
    tagName: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func,
    ]),
  };
  render() {
    let {
        tagName: Tag = 'input'
      , value
      , onChange
      , ...props } = this.props

    delete props.errors;
    delete props.invalid;

    if (value === null)
      value = '';

    return (
      <Tag
        {...props}
        value={value}
        onInput={e => this.props.onChange(e.target.value)}
        onChange={() => {}}
      />
    );
  }
}

export default Input;
