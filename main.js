import React from 'react';
import Form from './components/form';



let create = React.createElement;

export default class Main extends React.Component {
    render() {
        return(
            create('div',{id:'login-form'},
                create(Form,{},null)
                )
            )
    }
}