import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Select from './Select';
import Footer from './Footer';

import Logo from '../img/logo.png'

class Index extends Component {

    state = {
        currency: '',
        data: [],
        query: [],
        amount: '',
        from: '',
        to: '',
        total: '',
        showResult: false
    }
    componentDidMount() {
        axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.from}`)
            .then(res => this.setState({ query: res.data }))
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, showResult: false, data: [] })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.from}`)
        //     .then(res => this.setState({ data: res.data.rates }))
        //     .then(this.calculateResult());
        this.getData()
    }

    getData = () => {
        axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.from}`)
            .then(res => this.setState({ data: res.data.rates }))
            .then(this.calculateResult());
    }


    calculateResult = () => {
        const baseValue = this.state.amount;
        const countValue = this.state.data[this.state.to];
        this.setState({ total: ((baseValue * countValue).toFixed(2)), showResult: true })

        console.log(baseValue, countValue)
    }

    render() {
        console.log(this.state.query)
        let calculate;
        const displayAmount = this.state.amount;
        const displayFrom = this.state.from;
        const displayTo = this.state.to;
        const displayTotal = this.state.total;

        if (this.state.showResult && !isNaN(this.state.total)) {
            calculate = (
                <div className="converter__display">
                    <h3>{displayAmount}  {displayFrom}</h3>
                    <h1>{displayTotal}</h1> <h2>  {displayTo}</h2>
                </div>
            )
        }
        return (
            <Fragment>
                <div className="converter">
                    <div className="container">

                        <img src={Logo} alt="" className="converter__logo" />
                        <p></p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="converter__amount">
                                <label htmlFor="value" className="converter__amount-label">Amount</label>
                                <input type="text" name="amount" autoComplete="off" onChange={this.handleChange} value={this.state.amount} className="converter__amount-input" />
                            </div>



                            <div className="converter__options">
                                <div className="converter__select">
                                    <label htmlFor="selectFrom" className="converter__amount-label-2">From</label>
                                    <Select name="selectFrom" action={this.handleChange} option="from" value={this.state.from} className="converter__select" />
                                </div>

                                <div className="converter__select">
                                    <label htmlFor="selectTo" className="converter__amount-label-2">To</label>
                                    <Select name="selectTo" action={this.handleChange} option="to" value={this.state.to} />
                                </div>
                            </div>
                            <button type="submit" className="converter__button">Convert</button>

                            {calculate}
                        </form>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Index;
