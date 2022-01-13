import React from 'react';
import { shallow } from 'enzym'; 
import Button from './Button';

describe('Button', () => {
    beforeEach(()=>{
        buttonProps={

        }
    })
   it('should render correctly', () => {
       const component =shallow(<Button {...buttonProps} />)
       expect(component).toMatchSnapshot()
   });
});