import React, { Component } from 'react'

import Input from '../components/input'
import Button from '../components/button'
import Card from '../components/card'
import CardInfo from '../components/cardInfo'
import Image from '../components/PokeImage'
import List from '../components/list'

import 'uikit'
import '../css/style.css'

export default class SearchPokemon extends Component {

    render() {
        return (            
            <div className="uk-container uk-container-center uk-margin">
                
                <div className="uk-grid uk-margin uk-margin-top">                    

                    <div className="uk-width-4-6@m uk-margin-auto@m uk-width-3-4 uk-child-width-expand">
                        <Input placeholder="pokemon" />                                
                    </div>

                    <div className="uk-width-1-6@m uk-width-1-4 uk-text-center">
                        <Button name={"MdSearch"} size={"45px"} />                    
                    </div>

                </div>                
                                
                <Card>
                    <div className="uk-grid">

                        <div className="uk-width-1-2@s uk-child-width-expand">
                            <Image />                    
                        </div>

                        <div className="uk-width-1-2@s uk-margin-auto-vertical card-info-container">
                            <CardInfo text={"Charmander"} />
                            <CardInfo text={"30 kg"} />
                            <CardInfo text={"115 xp base"} />
                        </div>

                    </div>                               
                </Card>

                <div className="uk-grid uk-margin">
                    <div className="uk-width-1-2@m">
                        <List>
                            <h4>Moves</h4>
                            <li>move 1</li>
                            <li>move 2</li>
                            <li>move 3</li>
                            <li>move 4</li>
                        </List>                    
                    </div>                    

                    <div className="uk-width-1-2@m">
                        <List>
                            <h4>Status</h4>
                            <li>status 1</li>
                            <li>status 2</li>
                            <li>status 3</li>
                            <li>status 4</li>
                        </List>                    
                    </div>                    
                </div>                

            </div>
            
            
        )
    } 

}