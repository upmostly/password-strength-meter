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
        <h1>
          React Password Strength Meter
        </h1>
        <p>
          Type in the password input below and watch the password strength meter respond based on the strength of the password you're entering.
        </p>
        <br />
        <div className="meter">
          <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
          <PasswordStrengthMeter password={password} />
        </div>
        <div className="code-example">
          <code>
            {`<PasswordStrengthMeter password={'Password12345'} />`}
          </code>
        </div>
      </div>
    );
  }
}

export default App;
