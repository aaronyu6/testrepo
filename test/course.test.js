import React from 'react';
import ReactDom from 'react-dom';
import {Course} from '../src/course';

describe('course', ()=>{
 it('first time',()=>{
     function abc(){
         let a=1;
         let b=1;
         return a+b;
     }
     expect(abc()).toEqual(2);

 });
 it('display course name from prop',()=>{
    //render the component, expect container's text equal prop
     let container=document.createElement('div');
     let courseProp={coursename:"course name abc"};
     let courseComp=<Course courseProp={courseProp}/>;
     ReactDom.render(courseComp,container);
     expect(container.textContent).toMatch('course name abc');
 });
});