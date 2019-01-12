import React, { Component } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
class App extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
    }
  }

  render() {
    const { password } = this.state;
    return (
      <div className="App">
        <div className="meter">
          <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
          <PasswordStrengthMeter password={password} />
        </div>
      </div>
    );
  }
}

export default App;
