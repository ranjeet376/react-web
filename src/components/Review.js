import React, { Component } from 'react'
import star from '../STAR.png'
import Quotation from '../Quotation.png'

export default class Review extends Component {
    render() {
        return (
            <div className="review-main">
                <p className="mini-title">REVIEWS</p>
                <p className="title">GOOD REVIEW FROM GOOD PEOPLE</p>

                <img className="Quotation" src={Quotation}/>
                <p className="review-text">Far far away,behind the word mountains,far from the countries Vokalia and <br/>Consonantia,there live
                 the blind texts.Seoarated they live in Bookmarksgrove right<br/> at the coast of the semantics,
                 a large language ocean.   
                </p>
                <img className="star" src={star}/>
                <p className="review-garry">Garry Alexander</p>
                <p className="mini-title gary">@garry</p>
            </div>
        )
    }
}
