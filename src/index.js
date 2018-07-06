// ipmport 3rd party libraries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import components
import ConvertorInput from './components/convertor-input';
import CurrenciesBox from './components/currencies-box';
import ShowValue from './components/show-value';

import './style/style.css';

// main component of the application
class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            amount : 0,
            fromCurr : null,
            toCurr : null,
            currenciesList : {},
            stats : {
                amount : 0,
                requests : 0,
                maxCurrCode : 'Not available'
            },
            error : null
        };
        this.getCurrencies();
        this.getStats();

        this.amountSet = this.amountSet.bind(this);
        this.currencySet = this.currencySet.bind(this);
        this.convertAmount = this.convertAmount.bind(this);
    }

    getCurrencies() {
        axios.get('http://localhost:3000/getCurrencies').then((response) => {
            if (response.data.success) {
                this.setState({currenciesList : response.data.data});
            }
        }).catch((e) => {
            console.log('message:',e.message);
        })
    }

    getStats() {
        axios.get('http://localhost:3000/stats').then((response) => {
            if (response.data.success) {
                this.setState({
                    stats : response.data.data
                });
            } else {
                // # co s timhle
                console.log('statselse:', response.data.success);
            }
        }).catch((e) => {
            console.log('message:',e);
        })
    }

    amountSet(amount) {
        this.setState({amount});
        this.convertAmount(amount, this.state.fromCurr, this.state.toCurr);
    }

    currencySet(code, type) {
        switch(type) {
            case 'from' : 
                this.setState({fromCurr : code});
                this.convertAmount(this.state.amount, code, this.state.toCurr);
                break;
            case 'to' :
                this.setState({toCurr: code});
                this.convertAmount(this.state.amount, this.state.fromCurr, code);
                break;
        }
    }

    convertAmount(amount, fromCurr, toCurr) {
        if (amount && fromCurr && toCurr) {
            const URL = `http://localhost:3000/convert?amount=${amount}&from=${fromCurr}&to=${toCurr}`;
            axios.get(URL).then((response) => {
                if (response.data.success) {
                    this.setState({
                        convertedAmount : response.data.data.convertedData.amount,
                        stats : response.data.data.stats
                    });
                } else {
                    this.setState({error : 'Something went wrong'});
                }
            }).catch((e) => {
                this.setState({error : 'Something went wrong'});
            })
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Currency Convertor</h1>
                    </div>
                </div>
                <form>
                    <div class="form-group">
                        <label for="FormControlInput">Amount for conversion</label>
                        <ConvertorInput onAmountChange={this.amountSet} />
                    </div>
                    <div class="form-group">
                        <label for="FormControlFromCurrSelect">Amount currency</label>
                        <CurrenciesBox currencies={this.state.currenciesList} boxType='from' onSelect={this.currencySet} />
                    </div>
                    <div class="form-group">
                        <label for="FormControlFromCurrSelect">Destination currency</label>
                        <CurrenciesBox currencies={this.state.currenciesList} boxType='to' onSelect={this.currencySet} />
                    </div>
                    <hr />  
                    <div className="form-row">
                        <ShowValue label='Converted Amount' type='simple' value={this.state.convertedAmount} />
                    </div>
                    <hr />  
                    <div className="form-row stats">
                            <ShowValue label='Total amount converted' type='simple1' value={this.state.stats.amount} />
                        
                            <ShowValue label='Total number of conversions' type='simple1' value={this.state.stats.requests} />
                        {/* </div> */}
                        {/* <div className="form-group col-sm-4"> */}
                            <ShowValue label='Most popular destination currency' type='simple2' value={{maxCurrCode: this.state.stats.maxCurrCode, maxCurrName: this.state.currenciesList[this.state.stats.maxCurrCode]}} />
                        {/* </div> */}
                    </div>
                    
                </form>
                
            </div>
        );
    }

}









// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// <div class="row">
//                 <div class="col-md-12">
//                 <form class="card p-2" onSubmit={(event) => {event.preventDefault()}}>
// </form>
// </div>
// </div>





{/* <div className="row">
                <div className="col-sm-12">
                    <h1>Currency Convertor</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <label>Conversion amount</label>
                <ConvertorInput onAmountChange={this.amountSet} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                <label>Amount currency</label>
                <CurrenciesBox currencies={this.state.currenciesList} boxType='from' onSelect={this.currencySet} />
                </div>
                <div className="col-sm-6">
                <label>Destination currency</label>
                <CurrenciesBox currencies={this.state.currenciesList} boxType='to' onSelect={this.currencySet} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <ShowValue label='Converted Amount' type='simple' value={this.state.convertedAmount} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                <ShowValue label='Total amount converted' type='simple' value={this.state.stats.amount} />
                </div>
                <div className="col-sm-4">
                <ShowValue label='Total number of conversions' type='simple' value={this.state.stats.requests} />
                </div>
                <div className="col-sm-4">
                <ShowValue label='Most popular destination currency' type='simple1' value={{maxCurrCode: this.state.stats.maxCurrCode, maxCurrName: this.state.currenciesList[this.state.stats.maxCurrCode]}} />
                </div>
            </div> */}