// ipmport 3rd party libraries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import components
import ConvertorInput from './components/convertor-input';
import CurrenciesBox from './components/currencies-box';
import ShowValue from './components/show-value';
import ErrorBoundary from './components/error-boundary';

// get styling
import './style/style.css';

// import config
import config from './config/config';

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
            masterError : false,
            error : false,
            errorMessage: ''
        };
        this.getCurrencies();
        this.getStats();

        this.amountSet = this.amountSet.bind(this);
        this.currencySet = this.currencySet.bind(this);
        this.convertAmount = this.convertAmount.bind(this);
    }

    getCurrencies() {
        axios.get(config.getCurrListURL).then((response) => {
            if (response.data.status === 200) {
                this.setState({currenciesList : response.data.data});
            }
        }).catch((e) => {
            this.setState({
                masterError: true,
                errorMessage : config.masterErrorMessage
            });
            // call error reporting service
        })
    }

    getStats() {
        axios.get(config.getStatsURL).then((response) => {
            if (response.data.status === 200) {
                this.setState({
                    stats : response.data.data
                });
            } else {
                throw new Error({
                    message: `Getting bad response from: ${config.getStatsURL}`,
                    error: response.data
                });
            }
        }).catch((e) => {
            this.setState({
                error : true,
                errorMessage : config.getStatsErrorMessage
            });
            // call error reporting service
        })
    }

    amountSet(amount) {
        this.setState({amount});
        this.convertAmount(amount, this.state.fromCurr, this.state.toCurr);
        this.setState({
            error : false,
            errorMessage : ''
        })
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
        this.setState({
            error : false,
            errorMessage : ''
        })
    }

    convertAmount(amount, fromCurr, toCurr) {
        if (amount && fromCurr && toCurr) {

            const URL = `${config.conversionURL}?amount=${amount}&from=${fromCurr}&to=${toCurr}`;

            axios.get(URL).then((response) => {
                if (response.data.status === 200) {
                    this.setState({
                        convertedAmount : response.data.data.convertedData.amount,
                        stats : response.data.data.stats
                    });
                }  else {
                    throw new Error({
                        message: `Getting bad response from: ${config.conversionURL}`,
                        error: response.data
                    });
                }
            }).catch((e) => {
                this.setState({
                    error : true,
                    errorMessage : config.convertErrorMessage
                });
                // call error reporting service
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
                <div>
                    <ErrorBoundary>
                    {this.state.masterError && <ShowValue label={this.state.errorMessage} type='error' />}
                        {!this.state.masterError && 
                            <div>
                                {this.state.error && <ShowValue label={this.state.errorMessage} type='error' />}
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
                                        <ShowValue label='Total amount converted' type='simple1' value={this.state.stats.amount.toFixed(2)} />
                                        <ShowValue label='Total number of conversions' type='simple1' value={this.state.stats.requests} />
                                        <ShowValue label='Most popular destination currency' type='simple2' value={{maxCurrCode: this.state.stats.maxCurrCode, maxCurrName: this.state.currenciesList[this.state.stats.maxCurrCode]}} />
                                    </div>
                                </form>
                            </div>
                        }
                    </ErrorBoundary>
                </div>
            </div>
        );
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Currency Convertor</h1>
                    </div>
                </div>
                
            </div>
        );
    }
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));