import React, { Component } from 'react'
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';


class CryptoLists extends Component {
    constructor() {
        super();
        this.state = {coins: []};
    }

    componentDidMount() {
        //API call from Cryptocurrency Market Capitalizations
        axios.get(`https://api.coinmarketcap.com/v1/ticker/?convert=CAD`)
            .then(res => {
                const coins = res.data;
                this.setState({coins});
            });
    }

    //Filter to find different coins
    filter(e){
        this.setState({filter: e.target.value})
    }

    render() {
        let coins = this.state.coins;

        if(this.state.filter){
            coins = coins.filter(coin =>
                coin.name.toLowerCase()
                    .includes(this.state.filter.toLowerCase()))
        }
        return (
            <div>
                <input type="text" placeholder="Search Coin Name..." onChange={this.filter.bind(this)}/>
                <table className="responsive-table striped centered">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th></th>
                            <th>Coin</th>
                            <th>Price</th>                            
                            <th>Market Cap</th>
                            <th>Change in 24H</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>{coins.map(function(coin, key){
                        return (
                            <tr key={key}>
                                <td>{coin.rank}</td>
                                <td>
                                    <img 
                                    src={`https://github.com/cjdowner/cryptocurrency-icons/blob/master/32/icon/${coin.symbol.toLowerCase()}.png?raw=true`}
                                    alt={coin.symbol.toLowerCase()}/>
                                </td>
                                <td>
                                    {coin.name}<br/><span className="orange-text">{coin.symbol}</span>
                                </td>
                                <td>{new Intl.NumberFormat('en-US',{
                                    style: 'currency',
                                    currency: 'CAD'}).format(coin.price_cad)}</td>                                
                                <td>{new Intl.NumberFormat('en-US',{
                                    style: 'currency',
                                    currency: 'CAD'}).format(coin.market_cap_cad)}</td>                                
                                <td><span 
                                    style={coin.percent_change_24h > 0 ? positivePercentage : negativePercentage}>
                                    {coin.percent_change_24h}%                                    
                                    {/* change icon depending on +/- percentage */}
                                    <i className="material-icons" font-size="1.5rem">
                                    {coin.percent_change_24h > 0 ? 'arrow_drop_up' : 'arrow_drop_down'}</i>                                    
                                </span></td>
                                <td><Moment unix format="MMM DD HH:mm" tz="America/Vancouver">{coin.last_updated}</Moment></td>
                            </tr>
                        )
                    })}</tbody>
                </table>
            </div>
        )
    }
}


//Switching text color depending on positive or negative percentage of last 24h of the coin
const positivePercentage = {
    color: 'green'
},
negativePercentage = {
    color: 'red'
};

export default CryptoLists;