// Root file for the Currency Convertor application

// ipmport 3rd party libraries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import components
// input for amount that should be converted
import ConvertorInput from './components/convertor-input';
// select boxes for origin and destination currencies
import CurrenciesBox from './components/currencies-box';
// component that is used for displaying various values
// it is general component that accepts props.type which it uses for rendering desired component
import ShowValue from './components/show-value';
// error boundary to handle render exceptions
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
            amount : 0,         // amount that should be converted
            fromCurr : null,    // from currency
            toCurr : null,      // to currency
            currenciesList : {},// currencies list for selection listboxes
            stats : {           // statistics data
                amount : 0,
                requests : 0,
                maxCurrCode : 'Not available'
            },
            fatalError : false, // application should not be rendered at all. this error can be reset only with application reload
            error : false,      // lover level error
            errorMessage: ''    // error message
        };
        this.getCurrencies();   // load currencies list for select boxes
        this.getStats();        // get statistic to be displayed

        this.amountSet = this.amountSet.bind(this);
        this.currencySet = this.currencySet.bind(this);
        this.convertAmount = this.convertAmount.bind(this);
    }

    // gets list of available currencies
    getCurrencies() {
        // calls backend server API - no cache, this is called only once
        axios.get(config.getCurrListURL).then((response) => {
            // if status = 200 = OK, set component state
            if (response.data.status === 200) {
                this.setState({currenciesList : response.data.data});
            }
        }).catch((e) => {
            // in this case application should not be rendered, because it is useless
            this.setState({
                fatalError: true,
                errorMessage : config.fatalErrorMessage
            });
            // call error reporting service - not implemented yet
        })
    }

    // gets statistics for initial load of the app
    getStats() {
        // calls backend server API - no cache, this is called only once
        axios.get(config.getStatsURL).then((response) => {
            // if status = 200 = OK, set component state
            if (response.data.status === 200) {
                this.setState({
                    stats : response.data.data
                });
            }
        }).catch((e) => {
            // in this case application can be rendered. even without statistics it can run
            this.setState({
                error : true,
                errorMessage : config.getStatsErrorMessage
            });
            // call error reporting service - not implemented yet
        })
    }

    // is called when user sets amount for conversion
    amountSet(amount) {
        // sets component state var
        this.setState({amount});
        // calls conversion function. If origin and destination currencies are set as well, conversion will proceed
        this.convertAmount(amount, this.state.fromCurr, this.state.toCurr);
        // unset errors - this is after use action, here is should be safe
        this.setState({
            error : false,
            errorMessage : ''
        })
    }

    // is called when user sets origin or destination currency
    currencySet(code, type) {
        switch(type) {
            case 'from' : 
                // sets component state var
                this.setState({fromCurr : code});
                // calls conversion function. If amount and destination currencies are set as well, conversion will proceed
                this.convertAmount(this.state.amount, code, this.state.toCurr);
                break;
            case 'to' :
                // sets component state var
                this.setState({toCurr: code});
                // calls conversion function. If amount and origin currencies are set as well, conversion will proceed
                this.convertAmount(this.state.amount, this.state.fromCurr, code);
                break;
        }
        // unset errors - this is after use action, here is should be safe
        this.setState({
            error : false,
            errorMessage : ''
        })
    }

    // conversion function
    convertAmount(amount, fromCurr, toCurr) {

        // If amount, origin and destination currencies are set then this will proceed
        if (amount && fromCurr && toCurr) {

            // build URL with proper parameters
            const URL = `${config.conversionURL}?amount=${amount}&from=${fromCurr}&to=${toCurr}`;

            // call conversion function on backend
            axios.get(URL).then((response) => {
                if (response.data.status === 200) {
                    this.setState({
                        convertedAmount : response.data.data.convertedData.amount,
                        stats : response.data.data.stats
                    });
                }
            }).catch((e) => {
                // in this case application should not be rendered, because it is useless
                this.setState({
                    fatalError : true,
                    errorMessage : config.convertErrorMessage
                });
                // call error reporting service - not implemented yet
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
                    {/* // if fatalError is set, only error message is displayed */}
                    {this.state.fatalError && <ShowValue label={this.state.errorMessage} type='error' />}
                        {!this.state.fatalError && 
                            <div>
                                {/* // if error is set application will load with error message displayed */}
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
    }
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));