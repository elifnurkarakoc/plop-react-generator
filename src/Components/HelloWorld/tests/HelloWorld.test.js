import React from 'react';
import { shallow } from 'enzym'; 
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
    beforeEach(()=>{
        helloWorldProps={

        }
    })
   it('should render correctly', () => {
       const component =shallow(<HelloWorld {...helloWorldProps} />)
       expect(component).toMatchSnapshot()
   });
});