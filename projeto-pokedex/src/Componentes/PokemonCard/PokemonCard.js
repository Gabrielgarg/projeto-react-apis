import { Flex } from "@chakra-ui/react"
import { wrap } from "framer-motion"
import { useState } from "react"
import Card3, { Card } from "./Card3"
import Card2 from "./Card2"
import { CardStyle, DeixarRoll } from "./Style"


export const PokemonCard = (props) =>{


    const {pokemons} =props 
    return(
         <div gap={10}>
            {pokemons.map((pokemon, index) =>{
                return(
                    <Card2 key={index} pokemon = {pokemon} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos}/>
                )
            })}
        </div>

    )
}