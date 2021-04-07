<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');

:root {
    --blu-clr:#027FC1;
    --gry-clr: #5C5C5C;
    --fnt: 'Titillium Web', sans-serif;
}

/* MAIN STYLING */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.body {
    font-family: var(--fnt);
    color: var(--gry-clr);
    line-height: 1.5;
    letter-spacing: -.29px;
    overflow-x: hidden;
}

h1, h2 {
    font-weight: 700;
    font-size: 36px;
}

a {
    text-decoration: none;
    color: #fff;
}

a:hover {
    text-decoration: underline;
}

img {
    max-width: 100%;
    height: auto;
}

/* UTILITY CLASSES */
.container {
    max-width: 1100px;
    margin: auto;
    padding: 0 30px;
}

.pd {
    padding-top: 30px;
    padding-bottom: 30px;
}

.pd2 {
    padding-top: 60px;
    padding-bottom: 60px;
}

.box1s1 p, .box1s2 p, .wraps3 p, 
.wraps3 h1,
p.bb {
    margin: 30px 0;
}

.bg-color {
    color: #fff;
    background-color: var(--blu-clr);
}

/* HEADER */
header {
    background: url(~assets/slike/hero.jpg) no-repeat center center/cover;
    height: 373px;
    width: 100%; 
    color: #fff;
}

header .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    position: relative; 
}

.contact {
    display: inline-block;
    list-style: none;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
}

.contact li:first-child {
    font-weight: 700;
}

.contact li:nth-child(2) {
    padding: 0px 15px;
}

.contact li:nth-child(3) {
    padding-right: 70px;
}

.logo img {
    display: block;
    border-bottom: 3px solid #fff;
    padding-left: 70px;
    padding-right: 75px;
    padding-bottom: 30px;
}

.content h1 {
    padding-top: 30px;
}

.social {
    padding-top: 10px;
}

.social a {
    display: inline-block;
    margin: 5px;
    padding: 1px 5px;
    background: #fff;
    border-radius: 50%;
    color: #000;
    text-align: center;     
}

/* SECTION ONE */
#one .container {
    display: flex;
}

.box1s1 {
    flex: 1;
}

.uvd-robots {
    max-width: 303.42px;
}

.boston-medical {
    max-width: 366.81px;
}

.box2s1 {
    flex: 1;
    margin-top: 20px;
}

p.min {
    width: 342px;
}

.stroj {
    height: 170px;
    max-width: 300px;
    font-size: 24px;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: -110px;
    margin-left: 20px;
    z-index: -1;
}

.stroj p {
    text-transform: uppercase;
    padding: 20px;
    font-weight: bold;
}

/* SECTION TWO */
#two .container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 35px;
}

.box1s2 {
    line-height: 32px;
    
}

.box2s2 {
    padding-left: 55px;
}

.box1s2 ul, a.bold {
    font-weight: bold;
}

p.no{
    margin-bottom: 0;
}

.box1s2 ul {
    padding-left: 20px;
} 

/* SECTION THREE */
#three .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
}

.box1s3 img {
    height: 100%;
    object-fit: cover;
}

.box2s3 {
    box-shadow: 0.2px 0.2px 32px 0px rgba(0,0,0,0.14);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
}

.wraps3 {
    padding: 50px 80px;
}

/* SECTION FOUR */
#four {
    display: flex;
}

.box1s4 {
    width: 50%;
}

#four .box1s4 img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.box2s4 {
    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-right: 40px;
    width: 50%;
}

.covidfree {
    padding: 120px 250px 120px 56px;
}

.covidfree p {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -.64px;
    line-height: 55px;
    text-align: left;
}

/* SECTION FIVE */
#five .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.box1s5 {
    box-shadow: 0.2px 0.2px 32px 0px rgba(0,0,0,0.14);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 10px 0px 50px;
    height: 500px;
}

.box2s5 img {
    height: 500px;
    width: 100%;
    object-fit: cover;
}

p.bb {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.64px;
    line-height: 50px;
}

.box1s5 ul {
  font-size: 16px;
  letter-spacing: -0.29px;
  line-height: 36px;
  padding-left: 20px;
}

.button {
    display: inline-block;
    background-color: var(--blu-clr);
    text-transform: uppercase;
    padding: 10.5px 30px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

/* FOOTER */
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 174px;
}

footer p {
  font-size: 36px;
  font-weight: bold;
  letter-spacing: -0.64px;
  line-height: 48px;
  padding: 0 30px;
}

/* MEDIA QUERIES */
@media screen and (max-width: 1400px) {
    .covidfree {
        padding: 120px 80px 120px 56px;
    }
}

@media screen and (max-width: 768px) {
    .contact {
        font-size: 13px;
    }

    .contact li:first-child {
        display: none;
    }

    .contact li:nth-child(3) {
        white-space: nowrap;
        padding-right: 25px;
    }
 
    .logo img {
        min-width: 350px;
    }

    #one .container {
        flex-direction: column;
    }

    p.min {
        width: 100%;
    }

    .stroj {
        margin-top: -90px;
        margin-left: 10px;
    }
    
    .stroj p {
        font-size: 18px;
    }

    #two .container {
        flex-direction: column;
    }

    .box2s2 {
        padding-left: 0;
        padding-top: 30px;
    }
    
    #three .container {
        grid-template-columns: 1fr;
    }

    .wraps3 {
        padding: 50px 20px;
    }

    #four {
        flex-direction: column;
    }

    .box1s4,
    .box2s4 {
        width: 100%;
    }

    .covidfree {
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .covidfree p {
        font-size: 1.6rem;
        line-height: 32px;
        padding-top: 0;
        padding-bottom: 0;
    }

    footer p {
    font-size: 25px;
    line-height: 32px;
    }

    #five .container {
        grid-template-columns: 1fr;
    }

    .box1s5 {
        height: auto;
    }

    .box2s5 img {
        height: auto;
    }
}

@media (max-width:400px) {
    .stroj {
        margin-top: -80px;
        margin-left: 0px;
    }
}

</style>
