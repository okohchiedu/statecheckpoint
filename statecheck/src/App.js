import { Component, useEffect } from 'react'
import picture from './Assets/chrisEvan.png';
import './App.css';

class App extends Component {
  state = {
    show:"false"

  }

  person = {
   Name : "Chris Evan",
   profession: "Super Actor",
    Bio: "The Captain America star Chris Evan, who was recently labeled as the sexiest man alive, is next on the list of best actors of 2022. This American actor rose to popularity with the Marvel movies and has done various other movies like Playing It Cool, Fantastic Four etc. His net worth is around $110 million."
   

  }

 
// Rendering  the Component
  render() {
    var toggle = e => {
      this.setState({show:!this.state.show})
    }
    const checkIt = this.state.show;
      


    // Return
    return(
      <>
       <center>
        <button className='Btn' onClick={toggle}>{checkIt ? "Hide Profile" : "Show Profile"}</button>
       </center>
      <div className='centralized'>
      <div style={{marginLeft:"auto", marginRight:"auto", width:"1000px", backgroundColor:"whitesmoke"}}>
      <div style={{width:"500px", backgroundColor:"Blue"}} >
      </div>
      

        {
          checkIt && (<>
          <center> 
          <img src={picture}
          alt="phot"
          style={{textAlign:"center", width:"300px"}} />
          </center>
          {this.person.name}
          <h2>{this.person.profession}</h2> 
          <p className='biop'><span className='bio'>Bio</span><br/>{this.person.Bio}</p>
          </>)
        }
      </div>
      </div>
      </>
    )
  }
}

export default App;
