import Banner from './Banner.jsx';
import Filter from './Filter.jsx';

class App extends React.Component{
    render(){
      return(
          <div>
              <Banner title="Tours Medellin" />
              <Filter />
          </div>
      ); 
    }
  }
  
  export default App;