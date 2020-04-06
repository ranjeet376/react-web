import React, { Component } from 'react'
import apple from '../image/apple.png'

export default class DesginImage extends Component {
    render() {
        return (
            
                 <div className="col-md-4">
                        <img src={apple} className="apple" style={{ height: '500px'}}/>
                    </div>
            
        )
    }
}
