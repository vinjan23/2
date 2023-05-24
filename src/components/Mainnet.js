import React from 'react';


import arkhadian from "../assets/img/arkhadian.png";
import eightball from "../assets/img/eightball.png";
import decentr from "../assets/img/decentr.png";
import gitopia from "../assets/img/gitopia.png";
import realio from "../assets/img/realio.png";
import planq from "../assets/img/planq.png";
import terp from "../assets/img/terp.png";

import source from "../assets/img/source.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Mainnet = () => {
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
    <section className="Mainnet" id="Mainnet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                            
                        <h2 class="archive-container"> Mainnet <span class="spinner-grow spinner-grow-sm text-success" role="status"></span></h2>
                        <p>This my validator on various mainnet below! </p>                        
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        
<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>arkhadian</h3>
   <a href="https://explorer.vinjan.xyz/arkhadian-mainnet/staking/arkhvaloper1caclqqep2jprjn0evwyt3jkn6q3zxx4c80rzcj" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={arkhadian} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Mainnet/tree/main/Arkh" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/arkhadian-mainnet/staking/arkhvaloper1caclqqep2jprjn0evwyt3jkn6q3zxx4c80rzcj" target="_blank">
    <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
    </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>8 Ball</h3>
   <a href="https://explorer.vinjan.xyz/8ball-mainnet/staking/8ballvaloper1jf02c7l9ezy30eflx0kgp54d0tpsj2zz3zmn8h" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={eightball} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Mainnet/tree/main/8ball" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/arkhadian-mainnet/staking/8ballvaloper1jf02c7l9ezy30eflx0kgp54d0tpsj2zz3zmn8h" target="_blank">
    <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
    </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>decentr</h3>
   <a href="https://explorer.vinjan.xyz/decentr-mainnet/staking/decentrvaloper18yze7cvnep7d2yj3cs4zfpvd4juphxrw3djwsz" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={decentr} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Mainnet/tree/main/Decentr" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/arkhadian-mainnet/staking/decentrvaloper18yze7cvnep7d2yj3cs4zfpvd4juphxrw3djwsz" target="_blank">
    <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
    </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>gitopia</h3>
   <a href="https://explorer.vinjan.xyz/gitopia-mainnet/staking/gitopiavaloper1rca4acwwccvakhgzleyl4j6vry4z36ypcu682c" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={gitopia} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Mainnet/tree/main/Gitopia" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/arkhadian-mainnet/staking/gitopiavaloper1rca4acwwccvakhgzleyl4j6vry4z36ypcu682c" target="_blank">
    <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
    </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>realio</h3>
   <a href="https://explorer.vinjan.xyz/realio-mainnet/staking/realiovaloper1csj5g5j4r682apvjckdk3qldkup4y07472gtkh" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={realio} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Mainnet/tree/main/Realio" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/arkhadian-mainnet/staking/realiovaloper1csj5g5j4r682apvjckdk3qldkup4y07472gtkh" target="_blank">
    <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
    </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>planq</h3>
   <a href="https://explorer.vinjan.xyz/planq-mainnet/staking/plqvaloper1csj5g5j4r682apvjckdk3qldkup4y0745djamf" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={planq} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Mainnet/tree/main/Planq" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/arkhadian-mainnet/staking/plqvaloper1csj5g5j4r682apvjckdk3qldkup4y0745djamf" target="_blank">
    <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
    </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>terp</h3>
   <a href="https://explorer.vinjan.xyz/terp-mainnet/staking/terpvaloper1zj70sat2fevu68hstfl0le5e0c5efg5mjk823u" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={terp} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Mainnet/tree/main/Terp" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/terp-mainnet/staking/terpvaloper1zj70sat2fevu68hstfl0le5e0c5efg5mjk823u" target="_blank">
    <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
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
