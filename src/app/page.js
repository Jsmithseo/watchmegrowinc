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
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <Image
                    src="/photo.png"
                    width={600}
                    height={250}
                    alt="Picture of the author"
                      />
                  <Image
                    src="/logo.png"
                    width={400}
                    height={250}
                    alt="Picture of the author"
                       />

                  <div className="lead font-weight-light">
                      {' '}
                    <span>Join us for the youth-centered services soft opening of Watch Me Grow, Inc. on July 29th. We bridge resource gaps, offer culturally sensitive programs, and empower young minds through engaging activities, education, and advocacy. Together, we'll create a nurturing environment for youth to thrive. Don't miss this exciting opportunity to be part of our mission.</span>
                  </div>
                </div>

              <div style={donate} class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h2>Secure Your Donate</h2>
                  <h3>Strengthening The Child, Family and Community</h3>
                    <p>
                      Your generous donations will be used to purchase essential equipment that empowers the youth in our community. With your support, we can provide them with the tools they need to learn, grow, and succeed. Together, let's create a nurturing environment where their potential can flourish.
                    </p>
                    <div class="row">
                    <h4>Donate</h4>
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
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className={styles.tooltipContainer}>
                            <span className={styles.tooltipText}>Watch Me Grow Inc 707-805-9543 </span>
                            <button className={styles.buttonStyles}>Zelle</button>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className={styles.tooltipContainer}>
                          <span className={styles.tooltipText}>@watchmegrowinc </span>
                          <button className={styles.buttonStyles}>Venmo</button>
                        </div>
                      </div>
                    </div>
                    <br>
                    </br>
                   <div class="row">
                    <h4>Sponsor A Room</h4>
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <button className={styles.buttonTwoStyles}>Green  Media/Photography</button>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <button className={styles.buttonTwoStyles}>Orange Room Tech/Dance</button>
                      </div>
                   </div>
                   <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <button className={styles.buttonTwoStyles}>Electric Blue - Music/Creative Writing </button>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <button className={styles.buttonTwoStyles}>Sky Blue - Zen </button>
                      </div>
                   </div>
                   <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <button className={styles.buttonTwoStyles}>Purple - WMG Clothing Close</button>
                      </div>
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <button className={styles.buttonTwoStyles}>Multi Color - Game</button>
                      </div>
                   </div>
                   <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <button className={styles.buttonTwoStyles}>White - Conference /Tutoring </button>
                      </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
