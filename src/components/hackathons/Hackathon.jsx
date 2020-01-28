import React, { Component } from 'react';
import { Link as Pink } from "react-scroll";
import { Link } from 'react-router-dom';

import Contact from "../../components/home/contact/Contact";

import Circles from "../../assets/hackathon/circles.png"
import Arrow from "../../assets/arrow.svg";
import Fb from "../../assets/fb.svg";
import Insta from "../../assets/insta.svg";

import TCS50 from "../../assets/hackathon/tcs50.png";
import SC from "../../assets/hackathon/sc.png";
import Genesys from "../../assets/hackathon/genesys.png";
import TVS from "../../assets/hackathon/tvs.png";
import PayPal from "../../assets/hackathon/paypal.png";

import "./Hackathon.css"

import { connect } from 'react-redux';
import { setHackathonList } from '../../actions/Thunks/thunk';

class Hackathon extends Component {

    componentDidMount() {
        this.props.setHackathonList();
    }

    render() {
        const match = this.props.match;
        let hackthonElements = [];
        if (this.props.hackathons) {
            for (let i = 0; i < this.props.hackathons.length; ++i) {
                let setBg = {
                    backgroundImage: `url(${this.props.hackathons[i].poster})`
                };
                hackthonElements.push(
                    <Link to={`/hackathon/${this.props.hackathons[i]._id}`} className="my-card-link col-md-3 inlay" style={setBg}>
                        <div class="name"><h4>{this.props.hackathons[i].title}</h4></div>
                    </Link>
                );
            }
        }

        return (
            <div className="hacklist-page">

                <div class="circles"><img src={Circles} alt="" id="circle-img" /></div>

                <div class="">
                    <div class="hacktitle-wrapper">
                        <div class="hacktitle-inner-wrapper">
                            <div class="hackathon-title">Hackathons</div>
                            <div class="subheading">Our goal is to expose the student community to actual industry and Societal problems and equip them to solve it using cutting edge technologies. We firmly believe this will smoothen their transition from academics to industry.</div>
                        </div>
                    </div>

                    <div className="sponsors-group-wrapper">
                        <div className="sponsors-group">
                            <img src = {TCS50} className="img-fluid sponsor" />
                            <img src = {SC} className="img-fluid sponsor" />
                            <img src = {Genesys} className="img-fluid sponsor" />
                            <img src = {TVS} className="img-fluid sponsor" />
                            <img src = {PayPal} className="img-fluid sponsor" />
                        </div>
                    </div>
                    <div class="row scroller"><Pink activeClass="active" to="hacklist" spy={true} smooth={true} duration={800} offset={-30}><img src={Arrow} alt="" /></Pink></div>
                </div>
                <div class="container">
                    <div class="row justify-content-center" id="hacklist"><h1 class="hackathon-title">Hackathons</h1></div>
                    <div class="row align-items-center justify-content-center">{hackthonElements}</div>
                </div>
                <Contact></Contact>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        hackathons: state.hackathon.hackathons
    }
}

export default connect(mapStateToProps, { setHackathonList })(Hackathon);
