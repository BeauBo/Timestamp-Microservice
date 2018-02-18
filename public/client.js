
class Timestamp extends React.Component {



  constructor(props){
    super(props);
    var dateFormattingOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    var currentUnix = new Date();
    currentUnix = Math.floor(currentUnix.getTime()/1000);
    var currentNatural = new Date();
    currentNatural = currentNatural.toLocaleDateString('en-us', dateFormattingOptions);
    this.state = {
      unixDate: currentUnix,
      naturalDate: currentNatural
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render (){
    var unixDate = this.state.unixDate;
    var naturalDate = this.state.naturalDate;
    if(unixDate && naturalDate){
      return (
        <div className='timeStamp-container'>
          <div className='row'>
            <div className='col-sm-5'>
              <form className='' onSubmit = {this.handleSubmit}>
                <input type='text' ref={(input) => this.input = input} placeholder='Enter Date...' required />
                <button type='submit' className='btn btn-success'>SHOW</button>
              </form>
            </div>
            <div className='col-sm-7'>
              <ul>
                <li>Unix: <span>{unixDate}</span></li>
                <li>Natural: <span>{naturalDate}</span></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <div className='timeStamp-container'>
          <div className='row'>
            <div className='col-sm-5'>
              <form className='' onSubmit = {this.handleSubmit}>
                <input type='text' ref={(input) => this.input = input} placeholder='Enter Date...' required />
                <button type='submit' className='btn btn-success'>SHOW</button>
              </form>
            </div>
            <div className='col-sm-7'>
              <h3>Invalid Date!</h3>
            </div>
          </div>
        </div>
      );
    }

  }

  handleSubmit(e){
    e.preventDefault();
    var dateVal = this.input.value;
    this.input.value = '';
    fetch('/' + dateVal).then(function(data){
      return data.json();
    }).then (json => {
      this.setState({
        unixDate: json.unix,
        naturalDate: json.natural
      })
    })
  }
}

ReactDOM.render(<Timestamp />, document.getElementById('container'))
