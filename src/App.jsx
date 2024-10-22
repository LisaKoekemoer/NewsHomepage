import './App.css';
import logo from './images/logo.svg';
import webThree from './images/image-web-3-desktop.jpg'
import retroPC from './images/image-retro-pcs.jpg';
import laptops from './images/image-top-laptops.jpg';
import gamingGrowth from './images/image-gaming-growth.jpg';

function App() {
  return (
    <>
    <div className='newsHomepage-content'>

      {/* Logo & Navigation */}
      <div className='header'>
        <img src={logo} alt="" />
        <div className='navigation'>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Category</li>
          </ul>
        </div>
      </div>

      {/* News Section 1 */}
      <div className='newsSection1'>
        <div className='section1a'>
            <img src={webThree} alt="" />
          <div className='section1a-content'>
            <div className='Web30'>
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className='Web30-info'>
              <p>
                We dive into the next evolution of the web that claims to put
                 the power of the platforms back into the hands of the people. 
                 But is it really fulfilling its promise?
              </p>
              <button>
                READ MORE 
              </button>
            </div>
          </div>
        </div>

        <div className='article-preview-container'>
          <h1>New</h1>
          <div className='article-preview'>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div className='article-preview'>
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <hr />
          <div className='article-preview'>
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>

      </div>

      {/* News Section 1 */}
      <div className='newsSection2'>
        <div className='article-preview2'>
          <img src={retroPC} alt="" />
          <div className='artPrev2Con'>
            <h4>01</h4>
            <h6>Reviving Retro PCs</h6>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className='article-preview2'>
          <img src={laptops} alt="" />
          <div className='artPrev2Con'>
            <h4>02</h4>
            <h6>Top 10 Laptops of 2022</h6>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className='article-preview2'>
          <img src={gamingGrowth} alt="" />
          <div className='artPrev2Con'>
            <h4>03</h4>
            <h6>The Growth of Gaming</h6>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>

    </div>

    </>
  );
}

export default App;
