import React, { Component } from 'react'
import IUserSearch from '../interface/UserSearchInterface';
import IuserSearch from '../interface/UserSearchInterface';

interface IUserSearchState{
    current_search_str:string;
    searched_str:string;
}

export default class UserSearch extends Component<IuserSearch, IUserSearchState> {
    constructor(props:IUserSearch){
        super(props)
        this.state = {
            current_search_str: '',
            searched_str: '',
        };
    }

    onCheangeText(val: React.ChangeEvent<HTMLInputElement>):void{
        console.log(val.currentTarget.value);
        this.setState({current_search_str: val.currentTarget.value});
    }
    onButtonClicked():void{
        this.setState({searched_str: this.state.current_search_str});
    }

    render() {
        //Destructor
        const { limitation, username } = this.props;
        return (
            <div>
                <h2>Welcome, to website {username}</h2>
                <h2>UserSearch.tsx linked</h2>
                <span>You can scearch {limitation} time for today.</span>
                <br/><br/>
                <input type="text" onChange={this.onCheangeText.bind(this)}/>
                <button type="button" onClick={this.onButtonClicked.bind(this)}>Search</button>
                <p>{this.state.searched_str}</p>
            </div>
        )
    }
}
