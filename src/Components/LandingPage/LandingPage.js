/**
 * Skeleton for init App page
 */
import React from 'react'
import PrimarySearchAppBar from '../Header/Appbar.js'
import Parallax_ from '../Parallax/Parallax_.js'
import CenteredGrid from '../GridContent/GridContent.js'
import HeroBanner from '../HeroBanner/HeroBanner.js'


export default class LandingPage extends React.Component {


    render(){


        return (
            <div>
                <PrimarySearchAppBar/>
                <Parallax_ />
                <HeroBanner />
                <CenteredGrid />
                
                
            </div>
        )
    }




}