import React, { Component } from 'react';
import './PasswordStrengthMeter.css';
import zxcvbn from 'zxcvbn';

class PasswordStrengthMeter extends Component {

  stylePasswordStrengthMeter = (result) => {
    switch (result.score) {
      case 0:
        return 'password-strength-meter-progress-weak';
      case 1:
        return 'password-strength-meter-progress-weak';
      case 2:
        return 'password-strength-meter-progress-fair';
      case 3:
        return 'password-strength-meter-progress-good';
      case 4:
        return 'password-strength-meter-progress-strong';
      default:
        return 'password-strength-meter-progress-weak';
    }
  }

  passwordLabel = (result) => {
    switch (result.score) {
      case 0:
        return 'Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  }

  render() {
    const { password } = this.props;
    const testedResult = zxcvbn(password);
    return (
      <div className="password-strength-meter">
        <progress
          style={{ }}
          className={`password-strength-meter-progress ${this.stylePasswordStrengthMeter(testedResult)}`}
          value={testedResult.score}
          max="4"
        />
        <br />
        <label
          className="password-strength-meter-label"
        >
          {password && (
            <>
              <strong>Password strength:</strong> {this.passwordLabel(testedResult)}
            </>
          )}
        </label>
      </div>
    );
  }
}

export default PasswordStrengthMeter;
