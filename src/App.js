import logo from './Assets/airbnb.png';
import './App.css';

// all filters
import Artic from './Assets/Artic.jpg'
import Beach from "./Assets/Beach.jpg";
import Cabins from "./Assets/Cabins.jpg";
import Caves from "./Assets/Caves.jpg";
import Design from "./Assets/Design.jpg";
import Farms from "./Assets/Farms.jpg";
import Island from "./Assets/Islands.jpg";
import Omg from "./Assets/Omg.jpg";
import Parks from "./Assets/Parks.jpg";
import Shared from "./Assets/Shared.jpg";
import Tropical from "./Assets/Tropical.jpg";

function App() {
  return (
    <div>
      <div className='topnav'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <img width="110" src={logo} alt="logo" />
            </div>
            <div className='col-md-9'></div>
          </div>
        </div>

        <hr />

        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='container'>
                <div id='myCarousel' className='carousel slide' data-ride='carousel'>
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                    <li data-target="#myCarousel" data-slide-to="6"></li>
                    <li data-target="#myCarousel" data-slide-to="7"></li>
                    <li data-target="#myCarousel" data-slide-to="8"></li>
                    <li data-target="#myCarousel" data-slide-to="9"></li>
                    <li data-target="#myCarousel" data-slide-to="10"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="item active">
                      <img src={Artic} alt="Artic" />
                    </div>
                    <div class="item active">
                    <img src={Beach} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Cabins} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Caves} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Design} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Farms} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Island} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Omg} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Parks} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Shared} alt="Los Angeles" />
                  </div>
                  <div class="item active">
                    <img src={Tropical} alt="Los Angeles" />
                  </div>
                   


                  </div>
                  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
