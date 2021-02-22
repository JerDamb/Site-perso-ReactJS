import React, { Component } from 'react'

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
            <div className="project" onClick={this.handleInfo}>
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                        )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt=""/>
            </div>
            
        )
    }
}
