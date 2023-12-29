import "./App.css";
import Child from "./Child";

function App() {
  const myComp = Array.from({ length: 10}, (_, index) => (
    <Child key={index} />
  ));

  return (
    <div className="App">
      <div className="main">
        <div className="imgg">
          <img
                src="Images/logo.png"
                alt="Hedy Lamarr"
                className="photo1"
              />
              </div>
            
      <div className="main_grid">

      <div className="grid_left">
       <div className="drop">
        <h3>Dashboard</h3>
        <img
                src="Images/arrow_down.svg"
                alt="Hedy Lamarr"
                className="photo2"
              />
              </div>
        <div className="grid-up">
          <div className="grid_left-inn">
            <div className="flex">
              <p className="dots">Connected to   <a href="#"> Click me</a> </p>
              <p className="esty"> E Esty</p>
            </div>
            <p className="order">ORDERS</p>
            <div className="flex end">
              <p> <span>11</span> open orders </p>
              <p>Last updated 4 min ago</p>
            </div>
            <h6>Order Syncing</h6>
            <p>Order Syncing is enabled </p>
          </div>
      </div>
      <div className="grid-down">
          <div className="grid_left-inn">
            <div className="flex">
              <p className="dots">Connected to <a href="#"> Click me</a> </p>
              <img
                src="Images/shop.png"
                alt="Hedy Lamarr"
                className="photo"
              />
            </div>
            <p>DATA HEALTH</p>
            <div className="flex"> 
            <p> <span>1100</span> Products</p>
            <p><span>11</span> Variants</p>
            <p><span>1</span> Missing SKUs</p>
            </div>
            <p className="para">
              so gut, macht die Haut wirklich weich! werde wieder bestellen 
              so gut, macht die Haut wirklich weich! werde wieder b
              so gut, macht die Haut wirklich weich! werde 
              <a href="#"> Learn more </a>
            </p>
          </div>
          </div>
      
        </div>
        <div className="grid_right">
        <div className="grid_left-inn">
     
          <div className="flex ">
            <div className="flex wrap">
              <p>Orders </p>
              <p className="dots">Order Sync enabled </p>
            </div>

            <p style={{ color: '#085AFC',textDecoration:'underline'}} >view all orders &gt; </p>
          </div>
          <p className="para1">Showing 5 of 11 orders</p>
          {myComp}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
