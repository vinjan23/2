import React from 'react';


import althea from "../assets/img/althea.png";
import archway from "../assets/img/archway.png";
import blockx from "../assets/img/blockx.png";
import bonus from "../assets/img/bonus.png";
import c4e from "../assets/img/c4e.png";
import cascadia from "../assets/img/cascadia.png";
import composable from "../assets/img/composable.png";
import elys from "../assets/img/elys.png";
import ojo from "../assets/img/ojo.png";


import source from "../assets/img/source.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testnet" id="testnet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                            
                        <h2 class="archive-container"> Testnet <span class="spinner-grow spinner-grow-sm text-success" role="status"></span></h2>
                        <p>here's my history running as a node validator on various testnets below! </p>                        
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        
<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>althea</h3>
   <a href="https://explorer.vinjan.xyz/althea-testnet/staking/altheavaloper1dxrrcxyr5vc2mr9q8j9f2l670kkp736dsrkmna" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={althea} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/Althea" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>archway</h3>
   <a href="https://explorer.vinjan.xyz/archway-testnet/staking/archwayvaloper1lg68f0x669kd4ga50mtc320lkp53ddkzzp4tvs" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={archway} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/Archway" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>blockx</h3>
   <a href="https://explorer.vinjan.xyz/blockx/staking/blockxvaloper186zgnljr70pjru6unkstp9n4y099zqyzz43u3y" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={blockx} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/Blockxd" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
  </div>
</div>

                      </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
  
}
