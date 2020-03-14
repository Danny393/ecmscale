/**
 * Skeleton for init App page
 */
import React from 'react'
import PrimarySearchAppBar from '../Header/Appbar.js'
import Parallax from '../Parallax/Parallax.js'
import CenteredGrid from '../GridContent/GridContent.js'


export default class LandingPage extends React.Component {


    render(){


        return (
            <div>
                <PrimarySearchAppBar/>
                <Parallax />
                <CenteredGrid />
                
            </div>
        )
    }




}