import React from 'react'
import {Grid, Table, Button} from 'react-bootstrap'

const headers = ['First Name', 'Last Name', 'E-mail'];
let data = [['Jan', 'Kowalski', 'example@gmail.com'],
    ['Tomasz', 'Dudek', 'tdkontakt@gmail.com'],
    ['Robert', 'Kolodziejski', 'biuro@firma.pl'],
    ['Krzysztof', 'Dobrzynski', 'krzysiekdobrzynski@wp.pl'],
    ['Lukasz', 'Grudziadz', 'lukaszgrudziadz@onet.pl'],
    ['Dariusz', 'Haller', 'darek@interia.pl']];


export default class Admin extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            headers: headers,
            data: data,
            descending: false,
            sortby: null
        };
    }

    _sort= (e)=>{
        let column = e.target.cellIndex;
        let data = this.state.data.slice();
        let descending = this.state.sortby === column && !this.state.descending;

        this.setState({
            data: data.sort(function (a, b) {
                return descending ? (a[column] > b[column] ? 1 : -1) : (a[column] < b[column] ? 1 : -1);
            }),
            sortby: column,
            descending: descending
        })
    };



    render() {

        return (
            <Grid>
            <section id="admin">
            <Table striped bordered condensed hover>
                <thead onClick={this._sort}>
                <tr>{headers.map(function (title, index) {
                    if (this.state.sortby === index) {
                        title += this.state.descending ? ' \u2191' : ' \u2193'
                    }
                    return <th key={index}>{title}</th>
                }, this)}</tr>
                </thead>

                <tbody>{this.state.data.map(function (row, index) {
                    return <tr key={index}>{row.map(function (cell, idx) {
                        return <td key={idx}>{cell}</td>
                    }, this)}</tr>
                }, this)}</tbody>
            </Table>
            </section>
            </Grid>)
    }
}








