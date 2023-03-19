import React from 'react';
import Username from './username';
import Password from './password';

let element = React.createElement;

export default class Form extends React.Component {
    render() {
        return element('div',{class:'container', id: 'form'},
        element('h3',{id:'header'}, 'Login'),
        element(Username, {}, null),
        element('span', {}, " "),
        element(Password, {}, null),
        element('span', {}, " "),
        element('button', {class:'btn btn-primary'},'Submit')
        );
    };
}