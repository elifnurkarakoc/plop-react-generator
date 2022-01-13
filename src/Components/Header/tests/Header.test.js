import React from 'react';
import { shallow } from 'enzym'; 
import Header from './Header';

describe('Header', () => {
    beforeEach(()=>{
        HeaderProps={

        }
    })
   it('should render correctly', () => {
       const component =shallow(<Header {...HeaderProps} />)
       expect(component).toMatchSnapshot()
   });
});