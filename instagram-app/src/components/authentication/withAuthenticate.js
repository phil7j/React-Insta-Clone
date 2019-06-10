import React, { Component } from 'react'



const withAuthenticate = PostsPage => Login =>
 class extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    }

       componentDidMount() {
            if (localStorage.getItem('username')){
                this.setState({
                    loggedIn: true
                })
            }else {
                this.setState({
                    loggedIn: false
                })
            }
        }


    render() {
        return (
            <div>
                {this.state.loggedIn ? <PostsPage data={this.props.data} /> : <Login />}

            </div>
        )
    }
}

export default withAuthenticate
