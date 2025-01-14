import { useNavigate } from "react-router-dom"
import { HeaderPagListaCss, HeaderPagListaDireita, HeaderPagListaMeio } from "./Style"
import logo from "../../../Imagens/image2.png"
import { Button } from '@chakra-ui/react'



export const HeaderPagLista = () =>{
    const navigate = useNavigate()

    function irParaPaginadeDetalhe(){
        navigate("/detalhe")
    }

    return(
            <HeaderPagListaCss>

                <HeaderPagListaMeio>
                    <img src={logo}></img>
                </HeaderPagListaMeio>

                <HeaderPagListaDireita>
                <Button colorScheme='teal' size='lg' onClick={irParaPaginadeDetalhe}>
                    Pokedex
                </Button>
                </HeaderPagListaDireita>
            </HeaderPagListaCss>



    )
}