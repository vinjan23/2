import React from 'react';


import althea from "../assets/img/althea.png";
import archway from "../assets/img/archway.png";
import blockx from "../assets/img/blockx.png";
import bonus from "../assets/img/bonus.png";
import cascadia from "../assets/img/cascadia.png";
import composable from "../assets/img/composable.png";
import elys from "../assets/img/elys.png";
import ojo from "../assets/img/ojo.png";
import sge from "../assets/img/sge.png";


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
                        <p>My validator on various testnets  </p>                        
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
   <a href="https://explorer.vinjan.xyz/althea-testnet/staking/altheavaloper1dxrrcxyr5vc2mr9q8j9f2l670kkp736dsrkmna" target="_blank">
   <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
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
    <a href="https://explorer.vinjan.xyz/archway-testnet/staking/archwayvaloper1lg68f0x669kd4ga50mtc320lkp53ddkzzp4tvs" target="_blank">
   <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
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
    <a href="https://explorer.vinjan.xyz/blockx/staking/blockxvaloper186zgnljr70pjru6unkstp9n4y099zqyzz43u3y" target="_blank">
   <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
  </a> 
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>bonus</h3>
   <a href="https://explorer.vinjan.xyz/bonusblock/staking/bonusvaloper12maezlndx2zh4turertywjgm47xx7erhm2nmtm" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={bonus} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/Bonusblock" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/bonusblock/staking/bonusvaloper12maezlndx2zh4turertywjgm47xx7erhm2nmtm" target="_blank">
   <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
  </a> 
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>cascadia</h3>
   <a href="https://explorer.vinjan.xyz/cascadia-testnet/staking/cascadiavaloper1zccclw862uthjqcvem0hlh6fp9nvwjgeh5e6wa" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={cascadia} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/Cascadia" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/cascadia-testnet/staking/cascadiavaloper1zccclw862uthjqcvem0hlh6fp9nvwjgeh5e6wa" target="_blank">
   <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
  </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>composable</h3>
   <a href="https://explorer.vinjan.xyz/composable-testnet/staking/banksyvaloper172gvyhdgy3wuh2rrkcm9g0u0qvrl8t5fww29dm" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={composable} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/Composable" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/composable-testnet/staking/banksyvaloper172gvyhdgy3wuh2rrkcm9g0u0qvrl8t5fww29dm" target="_blank">
   <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
  </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>elys</h3>
   <a href="https://explorer.vinjan.xyz/elystestnet-1/staking/elysvaloper1jf02c7l9ezy30eflx0kgp54d0tpsj2zzhvmf30" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={elys} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/Elys" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/elystestnet-1/staking/elysvaloper1jf02c7l9ezy30eflx0kgp54d0tpsj2zzhvmf30" target="_blank">
   <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
  </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>ojo</h3>
   <a href="https://explorer.vinjan.xyz/ojo/staking/ojovaloper1yh4gytj3ktj2x444ndgdngquxt9lpnz3un89pz" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={ojo} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/Ojo" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/ojo/staking/ojovaloper1yh4gytj3ktj2x444ndgdngquxt9lpnz3un89pz" target="_blank">
   <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>EXPLORER</h5>
  </a>
  </div>
</div>

<div className="item">
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   <h3 style={{marginBottom: '10px'}}>sge</h3>
   <a href="https://explorer.vinjan.xyz/sge/staking/sgevaloper1zr60al8za2hxhejgdz034hdmsy9ee6elzpw6fe" target="_blank">
     <div style={{borderRadius: '50%', width: '150px', height: '150px', overflow: 'hidden'}}>
        <img src={sge} alt="Image" style={{width: '100%', height: '100%'}} />
      </div>
       </a>
   <a href="https://github.com/vinjan23/Testnet.Guide/tree/main/SGE" target="_blank">
      <h5 style={{margin: 0, fontSize: '20px', color: '#FFFFFF'}}>SERVICE</h5>
    </a>
    <a href="https://explorer.vinjan.xyz/sge/staking/sgevaloper1zr60al8za2hxhejgdz034hdmsy9ee6elzpw6fe" target="_blank">
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
