import React from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'



export default function Home() {

  const button = {
    color: "white",
    height: "40px",
      backgroundColor: "#4CAF50",
      textTransform: "uppercase",
      width: "inherit",
      border: "outset",
      font: "avenir"
    
  };

  const donate = {

      backgroundColor: "#F6F1F1",
     
  };

  return (

    <div class="container">
      <div class="row">
        <div  class="col-lg-6 col-md-8 col-sm-12  col-xs-12">

        <Image
        src="/photo.png"
        width={600}
        height={250}
        alt="Picture of the author"
      />
          <br></br>
          <br></br>
          <Image
        src="/logo.png"
        width={400}
        height={250}
        alt="Picture of the author"
      />

          <p className="lead font-weight-light">
            {' '}
<span>Join us for the youth-centered services soft opening of Watch Me Grow, Inc. on July 29th. We bridge resource gaps, offer culturally sensitive programs, and empower young minds through engaging activities, education, and advocacy. Together, we'll create a nurturing environment for youth to thrive. Don't miss this exciting opportunity to be part of our mission.</span>
           
        
          </p>
          <div className="iframe">
            {/* <iframe width="560" height="315"
              src={'https://www.youtube.com/embed/YSEz2p56i9Q'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            
            <div>

    </div>
        
          </div>
        </div>
        <div style={donate} class="col-lg-6  col-md-4  col-sm-12 col-xs-12">
        <h2 className="display-4">Secure Your Donate</h2>
          <span className="h3">Strengthening The Child, Family and Community</span>
          <br></br>
          <br></br>

          <p>
Your generous donations will be used to purchase essential equipment that empowers the youth in our community. With your support, we can provide them with the tools they need to learn, grow, and succeed. Together, let's create a nurturing environment where their potential can flourish.</p>

          <br></br>
          <br></br>
          
          <h4 className={styles.buttonContainer}>Donate</h4>
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-xs-12">
            <div className={styles.tooltipContainer}>
            <span className={styles.tooltipText}>@watchmegrowinc </span>
             <button className={styles.buttonStyles}>Paypal</button>
          </div>
            </div>

            <div class="col-lg-6 col-sm-12 col-xs-12">
          <div className={styles.tooltipContainer}>
            <span className={styles.tooltipText}>$watchmegrowinc </span>
             <button className={styles.buttonStyles}>Cash App</button>
          </div>
          </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-12 col-xs-12">
          <div className={styles.tooltipContainer}>
            <span className={styles.tooltipText}>Watch Me Grow Inc 707-805-9543 </span>
             <button className={styles.buttonStyles}>Zelle</button>
          </div>
          </div>
            <div class="col-lg-6 col-sm-12 col-xs-12">
          <div className={styles.tooltipContainer}>
            <span className={styles.tooltipText}>@watchmegrowinc </span>
             <button className={styles.buttonStyles}>Venmo</button>
          </div>
          </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <h4>Sponsor A Room</h4>

          <div className={styles.tooltipContainer}>
             <button className={styles.buttonTwoStyles}> Green Room Media Room/Photography</button>
          </div>
          <div className={styles.tooltipContainer}>
             <button className={styles.buttonTwoStyles}>Orange Room Tech Room/Dance</button>
          </div>
          <div className={styles.tooltipContainer}>
             <button className={styles.buttonTwoStyles}>Electric Blue - Music/Creative Writing </button>
          </div>
          <div className={styles.tooltipContainer}>
             <button className={styles.buttonTwoStyles}>Sky Blue - Zen </button>
          </div>
          <div className={styles.tooltipContainer}>
             <button className={styles.buttonTwoStyles}>Purple - WMG Clothing Close</button>
          </div>
          <div className={styles.tooltipContainer}>
             <button className={styles.buttonTwoStyles}>Multi Color - Game</button>
          </div>
          <div className={styles.tooltipContainer}>
             <button className={styles.buttonTwoStyles}>White - Conference /Tutoring </button>
          </div>

        </div>
      </div>
      <br></br>
      <br></br>

    </div>
  );
}
