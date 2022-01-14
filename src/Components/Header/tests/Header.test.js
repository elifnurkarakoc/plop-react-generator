import React from 'react';
import { shallow } from 'enzym'; 
import Header from './Header';

describe('Header', () => {
    beforeEach(()=>{
        headerProps={

        }
    })
   it('should render correctly', () => {
       const component =shallow(<Header {...headerProps} />)
       expect(component).toMatchSnapshot()
   });
});