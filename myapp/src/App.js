import './App.css';
import { Component } from 'react'
import picture from './Assets/image1.jpg'

class App extends Component {
  state = {
    show:"false"

  }

  person = {
   Name : "AYOMIKUN S.O",
   profession: "Web Developer",
    Bio: "I spend most of my day, practicing and experimenting with HTML, CSS, and JavaScript; dabbling with React and Nodes.js; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well but alway still learning  everyday. A slight clarification of the above: I’m actually a STATISTICS student cleverly disguised as a web developer. Since it was relatively clear early on that it would be slightly more than difficult to make a living sitting under a tree while solving  statistical problems, I’ve focused my energies on the web, which brings improvement in decision making.profession Web Developer"
   

  }

 

  render() {
    var toggle = e => {
      this.setState({show:!this.state.show})
    }
    const checkIt = this.state.show;
      
    return(
      <>
       <center>
        <button className='Btn' onClick={toggle}>{checkIt ? "Hide Profile" : "Show Profile"}</button>
       </center>
      <div className='centralized'>
      <div style={{marginLeft:"auto", marginRight:"auto", width:"1000px", backgroundColor:"whitesmoke"}}>
      <div style={{width:"500px", backgroundColor:"white"}} >
      </div>
      

        {
          checkIt && (<>
          <center> 
          <img src={picture}
          alt="phot"
          style={{textAlign:"center", width:"150px"}} />
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