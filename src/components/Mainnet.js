import React from 'react';


import goracle from "../assets/img/goracle.png";
import muon from "../assets/img/muon.png";
import shardeum from "../assets/img/shardeum.png";
import nibiru from "../assets/img/nibiru.png";
import sao from "../assets/img/blockx-picsay.png";
import wormholes from "../assets/wormholess.png";
import goa from "../assets/img/terra.png";
import arkhadian from "../assets/img/Arkhadiann.png";
import ojo from "../assets/img/ojo.png";
import bonusblock from "../assets/img/bonusblock.png";
import sge from "../assets/img/sge.png";
import elys from "../assets/img/elys.jpg";
import terp from "../assets/img/terp.jpg";
import cascadia from "../assets/img/cascadia.png";
import elixir from "../assets/img/elixir.png";
import impact from "../assets/img/impact.png";
import c4e from "../assets/img/c4e.png";


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
                            
                        <h2 class="archive-container"> Node History <span class="spinner-grow spinner-grow-sm text-success" role="status"></span></h2>
                        <p>here's my history running as a node validator on various testnets below! </p>                        
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        
<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>Chain 4 Energy</h3>
   <a href="#" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={c4e} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://explorer.sychonix.me/elys/staking/elysvaloper1fwa706sz0yryfr3efsj5k97rwt5swjxflrn4eq" target="_blank">
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
