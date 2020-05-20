import React from 'react';
import firebaseConfig from './firebaseConfig';
import firebase from 'firebase';

class FirebaseData extends React.Component {

    constructor(props)
    {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
      super(props);
      this.state={
        users: [],
        key : []
      };
     
    }
    componentDidMount(){
        this.getUser();
      }
    componentDidUpdate(prevProps,prevState)
{
  if(prevState !== this.state)
  {
    this.writeUser();
  }
}

    writeUser = () => {
        firebase.database().ref("/").set(this.state);
        console.log("Data is saved");
      }

    getUser = () => {
        let ref = firebase.database().ref("/");
        let keyref = firebase.database().ref("/key");
        ref.on("value",snapshot => {
          const state = snapshot.val();
          this.setState(state);
        })
        keyref.on("value",snapshot => {
          const keyval = snapshot.val();
          this.setState(() => {
            return{
              key : keyval
          }
          })
        })
      }

    handleSubmit = event => {
        event.preventDefault();
        let name = this.refs.name.value;
        let type = this.refs.type.value;
        let address = this.refs.address.value;
        let owner = this.refs.owner.value;
        let phone = this.refs.phone.value;
        let keyval = this.refs.key.value;
        console.log(this.state.key === parseInt(keyval))
        const uid = new Date().getTime().toString();
        const {users} = this.state;
        if(this.state.key === parseInt(keyval)){
        users.push({uid,name,type,address,owner,phone});
      this.setState({users});
      alert("Shop Added Successfully")
        }
        else
        {
          alert("Invalid Key")
        }
      this.refs.name.value="";
      this.refs.type.value="";
      this.refs.address.value="";
      this.refs.owner.value="";
      this.refs.phone.value="";
        this.refs.key.value="";
    }
    render()
    {
        const {users} = this.state;
        return (
            <div className="secondDiv">
            <p>Available Shops are : </p>
            <div className="row" >
            {
                users.map(user => (
                  <div >
                    <div key={user.uid} className="card">
                    <h5>Shop Details</h5>
                    <p>{user.name}</p>
                    <p>{user.type}</p>
                    <p>{user.address}</p>
                    <p>{user.owner}</p>
                    <p>{user.phone}</p>                    
                    </div>
                    </div>
                ))
            }                  
            </div>
            <br />
            <div>
            <form onSubmit={this.handleSubmit} className="fbForm">
            <p>Still not found what you are looking for, no worries you can add your shop from below :</p>
            <input type = "hidden" ref="userId" />
            <br/>
            <label>Shop Name : </label>
            <input type="text" ref="name" required/><br/><br/>
            <label>Shop Type : </label>
            <input type="text" ref="type" required/><br/><br/>
            <label>Address : </label>
            <input type="text" ref="address" required/><br/><br/>
            <label>Owned By: </label>
            <input type="text" ref="owner" required/><br/><br/>
            <label>Phone Number : </label>
            <input type="tel" ref="phone" maxlength="10" pattern= "^[0–9]$" required/><br/><br/>
            <label>Enter Verification Key : </label>
            <input type="number" ref="key" maxLength="6" required/><br/><br/>
            <button className="btn1">Submit</button>
            <br/>
            <br />
            </form>  
            </div>           
            </div>
        )
    }
  }

export default FirebaseData;







