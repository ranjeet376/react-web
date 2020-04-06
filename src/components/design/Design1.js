import React, { Component } from 'react'
import DesignText from './DesignText'
import DesginImage from './DesginImage'
//import './Design1.css'

export default class Design1 extends Component {
    render() {
        return (
            <div className="design1">
            <div className="container">
                <div className="row">
                   <DesginImage/>
                   <DesignText/>
                </div>
            </div>
            </div>
                
               

                
        )
    }
}

