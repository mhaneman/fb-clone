import React from 'react'
import './Contacts.css'

import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Contact from './Contact'

function Contacts() {
    return (
        <div className='contacts'>
            <div className="contacts__header">
                <div className="contacts__left">
                    <h4>Contacts</h4>
                </div>

                <div className="contacts__right">
                    <VideoCallIcon />
                    <SearchIcon />
                    <MoreHorizIcon />
                </div>
            </div>

            <div className="contacts__list">
                <Contact image="https://wallpapercave.com/wp/AKsyaeQ.jpg" name="Sexy Squidward"/>
                <Contact image="https://wallpapercave.com/wp/AKsyaeQ.jpg" name="Sexy Squidward"/>
                <Contact image="https://wallpapercave.com/wp/AKsyaeQ.jpg" name="Sexy Squidward"/>
                <Contact image="https://wallpapercave.com/wp/AKsyaeQ.jpg" name="Sexy Squidward"/>
                <Contact image="https://wallpapercave.com/wp/AKsyaeQ.jpg" name="Sexy Squidward"/>
                <Contact image="https://wallpapercave.com/wp/AKsyaeQ.jpg" name="Sexy Squidward"/>
                <Contact image="https://wallpapercave.com/wp/AKsyaeQ.jpg" name="Sexy Squidward"/>
                <Contact image="https://wallpapercave.com/wp/AKsyaeQ.jpg" name="Sexy Squidward"/>
            </div>
            
        </div>
    )
}

export default Contacts
