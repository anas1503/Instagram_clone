import React from 'react'
import logo from '../assets/download.jpg'
import Pic2 from '../assets/self.jpg'
import Pic3 from '../assets/pp.jpg'
import Pic4 from '../assets/B&W.jpg'
import Pic6 from '../assets/me.jpg'
import Pic7 from '../assets/dp.jpg'
import Story from './Story'
import Pic8 from '../assets/anas.jpg'

const Stories = () => {
    return (
        <div className="stories" id="status">

            <Story url={logo} />
            <Story url={Pic2} />
            <Story url={Pic8} />
            <Story url={Pic3} />
            <Story url={Pic6} />
            <Story url={Pic8} />
            <Story url={Pic2} />
            <Story url={Pic4} />
            <Story url={Pic2} />
            <Story url={Pic3} />
            <Story url={Pic4} />
            <Story url={Pic6} />
            <Story url={Pic7} />
            {/* <Story url={Pic8} /> */}


        </div>

    )
}

export default Stories;