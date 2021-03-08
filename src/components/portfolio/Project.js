import React, { Component } from 'react';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default class Project extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        let { name, languages, languagesIcons, source, info, picture } = this.props.item;
        return (
            <>
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="Content">
                                <img src={picture} alt=""/>
                                <div className="infosContent">
                                    <div className="head">
                                        <h2>{name}</h2>
                                        <h2 className="stroke">{name}</h2>
                                    </div>
                                    <div className="informations">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Nesciunt eos deserunt temporibus facere iure saepe ea veritatis, 
                                        officia sapiente, sequi vitae fugit tempora quo exercitationem 
                                        inventore explicabo. Quidem dicta similique inventore labore quo 
                                        dolorum odio eveniet ad officia libero autem esse placeat ipsam, sint 
                                        earum fugit at! Minus vero eum animi maiores a quod eligendi, iste 
                                        pariatur nam cumque porro. Quod illo laboriosam sint similique suscipit aut aliquam, 
                                        reiciendis necessitatibus voluptate. Quo sunt iste aut error minus tempore repellendus 
                                        id consequatur sequi perspiciatis corrupti omnis libero similique suscipit corporis.
                                    </div>
                                    <div className="languages">
                                        {languagesIcons.map(icon =>
                                            <i className={icon} key={icon}></i>
                                        )}
                                    </div>
                                    <div className="button" onClick={this.handleInfo}>---</div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="project" onClick={this.handleInfo}>
                    <div className="icons">
                        {languagesIcons.map(icon =>
                            <i className={icon} key={icon}></i>
                            )}
                    </div>
                    <h3 onClick={this.handleInfo}>{name}</h3>
                    <img src={picture} alt=""/>
                </div> 
            </>
        )
    }
}
