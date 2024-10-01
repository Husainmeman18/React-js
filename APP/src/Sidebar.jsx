import React from 'react'
import "./Side.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faUserGear,faRightToBracket,faCircleInfo,faPhone,faEnvelope,faMessage,faBookmark,faShareNodes} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({isToggled}) {
    return (
        <aside className={`sidebar ${isToggled ? "slidenew":""}`}>
        <div className="functions">
            <div class="rows">
                <FontAwesomeIcon icon={faHouse} color='white'/>
                <h4 className="nameplate">Dashboard</h4>
            </div>
            <div class="rows">
             <FontAwesomeIcon icon={faUserGear} color='white'/>
                <h4 className="nameplate">Account Settings</h4>
            </div>
            <div class="rows">
            <FontAwesomeIcon icon={faRightToBracket} color='white'/>
                <h4 className="nameplate">Login</h4>
            </div>
            <div class="rows">
            <FontAwesomeIcon icon={faUserGear} color='white'/>
                <h4 className="nameplate">Register</h4>
            </div>
            <div class="rows">
            <FontAwesomeIcon icon={faCircleInfo} color='white'/>
                <h4 className="nameplate">Error</h4>
            </div>
            <div class="rows">
            <FontAwesomeIcon icon={faPhone} color='white'/>
                <h4 className="nameplate">CRM</h4>
            </div>
            <div class="rows">
            <FontAwesomeIcon icon={faEnvelope} color='white'/>
                <h4 className="nameplate">Email</h4>
            </div>
            <div class="rows">
            <FontAwesomeIcon icon={faMessage} color='white'/>
                <h4 className="nameplate">Chat</h4>
            </div>
            <div class="rows">
            <FontAwesomeIcon icon={faBookmark} color='white'/>
                <h4 className="nameplate">Events</h4>
            </div>
            <div class="rows">
            <FontAwesomeIcon icon={faShareNodes} color='white'/>
                <h4 className="nameplate">Social</h4>
            </div>
        </div></aside>
    )
}
