import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
describe("Home Page", () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  describe('Nav Bar', ()=>{
    it('renders the nav bar', ()=>{
      const div = document.createElement('div');
      ReactDOM.render(<NavBar />, div);
    })
  })
});
