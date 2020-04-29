import React, { Component } from 'react';
import './Login.css'


export default class Login extends Component {


  render() {
    return (
      <div>
        <head>
          <title>myworld</title>
        </head>

        <header>
          <table className = "header">
            <tr>
              <td>
                <div>
                  <h4> MyWorld.com </h4>
                </div>
              </td>
              <td>
                <div className ="signup">
                  <h4> Sign Up </h4>
                </div>
              </td>
            </tr>
          </table>
        </header>

        <div className="body">
          <h2 className="boader">Login to your account</h2>
          <form>
            <div>Enter your Username:</div>
            <input type="text" />
            <br /><br />
            <div>Enter your Password:</div>
            <input type="text" />
            <br /><br />
            <button>Continue</button>
          </form>

        </div>

        <footer>
          <div className="footer"> <h3>About us</h3> </div>
        </footer>
      </div>
    );
  }
}