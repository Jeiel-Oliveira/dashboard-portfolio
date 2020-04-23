import React, { Component } from 'react'
import axios from 'axios'

import Input from '../components/input'
import Button from '../components/button'
import Card from '../components/card'
import CardInfo from '../components/cardInfo'
import Image from '../components/PokeImage'
import List from '../components/list'

import 'uikit'
import '../css/style.css'

import api from '../routes/mainApi'

export default class SearchPokemon extends Component {

    constructor(props){
        super(props)

        this.state = {
            value: '',
            name: '',
            image: '',
            weight: '',
            exp: '',
            types: [],
            moves: [],
            status: [],            
        }                
    }

    componentDidMount(){
        this.callPokemon('pikachu');
    }

    handleChange = event => {
        this.setState({ value: event.target.value });     
    }

    handleSubmit = async (event, pokemon) => {
        pokemon = this.state.value;

        this.callPokemon(pokemon);

        event.preventDefault();
    }

    callPokemon = async (pokemon) => {
        let data = await api.get(`/${pokemon}`).then(({ data }) => data);

        this.setState ({
            name: data.name,
            image: data.sprites.front_default,
            weight: data.weight,
            exp: data.base_experience,
            types: data.types,
            moves: data.moves.slice(0,4),
            status: data.stats.slice(0,4)
        })
    }

    render() {

        return (            
            <div className="uk-container uk-container-center uk-margin">
                
                <div className="uk-grid uk-margin uk-margin-top">                    

                    <div className="uk-width-4-6@m uk-margin-auto@m uk-width-3-4 uk-child-width-expand">
                        <Input placeholder="pokemon" onChange={this.handleChange} />                                
                    </div>

                    <div className="uk-width-1-6@m uk-width-1-4 uk-text-left">
                        <Button name={"MdSearch"} size={"45px"} onClick={this.handleSubmit} />                    
                    </div>

                </div>                
                                
                <Card>
                    <div className="uk-grid">

                        <div className="uk-width-1-2@s uk-child-width-expand">
                            <Image 
                                src={this.state.image}
                                children={
                                    this.state.types.map((item, index) => (
                                        <div className="type-pokemon" key={index}>{item.type.name}</div>
                                    ))
                                } />                    
                        </div>

                        <div className="uk-width-1-2@s uk-margin-auto-vertical card-info-container">
                            <CardInfo text={this.state.name} />
                            <CardInfo text={this.state.weight + " kg"} />
                            <CardInfo text={this.state.exp + " xp"} />
                        </div>

                    </div>                               
                </Card>

                <div className="uk-grid uk-margin">
                    <div className="uk-width-1-2@m">
                        <List>
                            <h4>Moves</h4>
                            {this.state.moves.map((item, index) => (
                                <li key={index}>{item.move.name}</li>
                            ))}
                        </List>                    
                    </div>                    

                    <div className="uk-width-1-2@m">
                        <List>
                            <h4>Status</h4>
                            {this.state.status.map((item, index) => (
                                <li key={index}>{item.stat.name}: {item.base_stat}</li>
                            ))}
                        </List>                    
                    </div>                    
                </div>                

            </div>
            
            
        )
    } 

}