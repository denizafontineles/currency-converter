import React from 'react'

class Conversor extends React.Component {
    constructor(props){
        
        super(props)

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.converter = this.converter.bind(this)
    }

    handleChange (event){
        this.setState({moedaA_valor: event.target.value})
    }

    converter(){
        let transformaValor = `${this.props.moedaA}_${this.props.moedaB}` 
        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${transformaValor}&compact=y`

        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let cotacao = json[transformaValor].val
            let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2)
            this.setState({moedaB_valor})            
        })
    }

    render (){

        return(
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={this.handleChange}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )

    }

}

export default Conversor;
