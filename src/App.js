import logo from './myrrh_logo.png';
import './App.css';
import "@fontsource/jim-nightshade";
import { useState } from "react";
import StripeCheckout from 'react-stripe-checkout';
import Favicon from 'react-favicon';
import favico from "./favicon.ico";

function App() {
  const [quantity, setQuantity] = useState(1);
  console.log({ quantity})
  return (
    <div className="App">
      <Favicon url={favico} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>Hi, welcome to Myrrhaculous.com.<br/>You have come to the right place for all of your natural, organic health needs.</p>
      <div className="App-content">
        <h2>Jamie's All Natural Organic Tooth Powder</h2>
        <ul>
          <li>Not only is it anti-microbial, it also cleans and whitens teeth</li>
          <li>Myrrh has been used as a medicinal herb for thousands of years.  It is mentioned several times in the Bible, in the writings as old as Psalms and the Song of Solomon.  Of course it is well known as one of the three gifts that Magi brought to Jesus Christ.</li>
          <li>Ingredients: baking soda, myrrh, activated charcoal</li>
        </ul>
        <br/>
        <div className="checkout-details">
          Quantity: <select value={quantity} onChange={evt => setQuantity(Number(evt.target.value))}>
            {
              Array.from({length: 20}, (_, index) => index + 1).map(n => (
                <option value={n}>{n}</option>
              ))
            }
          </select><br/>
          Total Cost: ${quantity * 15} + shipping<br/>
        </div>
        
        <StripeCheckout
          lineItes
          bitcoin
          shippingAddress
          amount={quantity * 15 * 100}
          token={data => alert(`Thanks for your payment\n${JSON.stringify(data)}`)} 
          // label="BUY 😁"
          stripeKey="pk_test_51KcYEaG0RnPll7CdR07DRlWYy4V0hKFw7MAOotcOUpWkAVzHJwdXUWaPtDQcGH1TUu7tNXXOAYYkk35Ip5lAT6cg00owNpfIlZ">
          <button>BUY 😁</button>
        </StripeCheckout>
      </div>
    </div>
  );
}

export default App;
