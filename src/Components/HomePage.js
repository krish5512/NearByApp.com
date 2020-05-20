import React from 'react';
import FirebaseData from './FirebaseData';
import Footer from './Footer';


class HomePage extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            showData : false
        }
    }

    changeShowState = () => {
        this.setState(()=> {
            return{
                showData : !this.state.showData
        }
        })
    }
    render()
    {
        return(
            <div>
            <p className="fbData">Check here for more around you : <button className="btn1" onClick={this.changeShowState}>{this.state.showData === false ?<p> Click Me</p> :<p> Close</p>}</button></p>             {
        this.state.showData ? <FirebaseData /> : null
            }
            <Footer />
            </div>
        )
    }
}

export default HomePage;