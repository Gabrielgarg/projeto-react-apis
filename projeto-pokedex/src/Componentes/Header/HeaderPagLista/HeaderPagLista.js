import { useNavigate } from "react-router-dom"
import { HeaderPagListaCss, HeaderPagListaCss2, HeaderPagListaDireita, HeaderPagListaEsquerda, HeaderPagListaMeio } from "./Style"




export const HeaderPagLista = () =>{
    const navigate = useNavigate()

    function irParaPaginadeDetalhe(){
        navigate("/detalhe")
    }

    return(
            <HeaderPagListaCss>
                <HeaderPagListaEsquerda>
                    <div>eai</div>
                </HeaderPagListaEsquerda>

                <HeaderPagListaMeio>
                     Logoadsasddas
                </HeaderPagListaMeio>

                <HeaderPagListaDireita>
                    <button onClick={irParaPaginadeDetalhe}>Pokédex</button>
                </HeaderPagListaDireita>
            </HeaderPagListaCss>



    )
}