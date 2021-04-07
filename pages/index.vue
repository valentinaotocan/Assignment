<template>
  <div class="body">
    <header>
        <div class="container">
            <ul class="contact">
                <li>Kontaktirajte nas</li>
                <li><a href="mailto:info@vedras.hr">info@vedras.hr</a></li>
                <li><a href="tel:+385 98 9608 920">+385 98 9608 920</a></li>
                <li><a href="/hr">HR</a></li>
            </ul>
            <div class="content">
                <div class="logo">
                    <img src="~assets/slike/logo.svg" alt="">
                </div>
                <h1>ON HOLD</h1>
                <div class="social">
                    <a href="https://www.instagram.com/" target="_blank"><fa :icon="['fab', 'instagram']"/></a>
                    <a href="http://facebook.com/" target="_blank"><fa :icon="['fab', 'facebook']"/></a>
                    <a href="http://linkedin.com/" target="_blank"><fa :icon="['fab', 'linkedin']"/></a>
                </div>
            </div>
        </div>
    </header>
    <section id="one" class="pd">
        <div class="container">
            <div class="box1s1">
                <p>U jeku trenutne situacije sa Co-vid19, naša je “event” branša potpuno zaustavljena. Zaista teško predviđamo
                početak velikih okupljanja i zabava kave priliče ljetu na kakvog smo navikli. Unatoč privremenoj stanci cijele
                event industrije, Vedras ne želi stajati po strani i čekati da se ova pandemija sama od sebe završi, već smo kao
                što to uvijek činimo, krenuli u nove pothvate i pobjede. Ovoga puta predstavljamo nešto sasvim novo, nešto što
                nije povezano sa našim uobičajenim poslovanjem. Predstavljamo nešto što će nam pomoći u borbi protiv ove
                pandemije i učiniti da se svi što prije vratimo normalnom životu.</p>
                <div class="uvd-robots">
                    <img src="~assets/slike/uvd_robots.png" alt=""></div> <br>
                <div class="boston-medical">
                    <img src="~assets/slike/boston_medical.png" alt=""></div>
                <p class="min"> Vedras d.o.o. Vas ovim putem želi informirati o dostupnosti autonomnog UV-dezinfekcijskog robota
                tvrtke Blue Ocean Robotics.</p>
            </div>
            <div class="box2s1">
                <img src="~assets/slike/robots_kill-stroj.png" alt="">
                <div class="stroj bg-color">
                    <p>Ubija 99,99% <br> mikroorganizama.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="two" class="bg-color pd">
        <div class="container">
            <div class="box1s2">
                <h1>Novo u našoj ponudi!</h1>
                <p class="no">Robotska dezinfekcija i sterilizacija prostora s primjenom u:
                <ul>
                    <li>Turizmu (hoteli, apartmani, kuće za odmor, mobilne kućice...)</li> 
                    <li>Industriji (tvornice, skladišta, pogoni...)</li>
                    <li>Javnim mjestima (domovi zdravlja, vrtići, škole, fakulteti, uredi, 
                    zračne luke, kolodvori, fitness dvorane, šoping centri...).</li>
                </ul>
                </p>
                <p>Roboti konstruirani za čišćenje operacijskih sala i laboratorija,
                sada dezinficiraju vaše poslovne i privatne prostore.</p>
                <a href="#" class="bold">Više detalja o UVD Robots</a>
            </div>
            <div class="box2s2">
                <img src="~assets/slike/office.png" alt="">
            </div>
        </div>
    </section>
    <section id="three" class="pd2">
        <div class="container">
            <div class="box1s3">
                <img src="~assets/slike/presentation.jpg" alt="">
            </div>
            <div class="box2s3">
                <div class="wraps3">
                    <h2>#covidfree</h2>
                    <p>Primjenom Ultraljubičastog svjetla, (ultravioletnog, UV-c), UVD-robot uništava strukturu DNA u svim mikroorganizmima.</p>
                    <p>Pružamo uslugu čišćenja velikih i malih prostora, uz pomoć robota, koji u najkraćem mogućem roku i autonomno dezinficiraju zatvorene prostore gdje sigurnost i “osjećaj čistoće” mora biti na prvom mjestu.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="four" class="bg-color">
        <div class="box1s4">
            <img src="~assets/slike/robot_hall.jpg" alt="">
        </div>
        <div class="box2s4">
            <div class="covidfree">
                <p>Želite vašem klijentu pružiti potpuno čist prostor? Kontaktirajte nas odmah, neka vaš prostor bude #covidfree!</p>
            </div>
        </div>
    </section>
    <section id="five" class="pd2">
        <div class="container">
            <div class="box1s5">
                <p class="bb">Naše tehničko osoblje spremno je u najkraćem mogućem roku izvršiti uslugu koja uključuje:</p>
                <ul>
                    <li>dopremu UV-dezinfekcijskog robota</li>
                    <li>mapiranje prostorija predviđenih za dezinfekciju</li>
                    <li>kontrolu rada tijekom dezinfekcije</li>
                    <li>otpremu UV-dezinfekcijskog robota</li>
                </ul>
                <a href="#" class="button">Preuzmi brošuru</a>
            </div>
            <div class="box2s5">
                <img src="~assets/slike/robot_room.jpg" alt="">
            </div>
        </div>
    </section>
    <footer class="bg-color pd">
            <p>Za više informacija pišite nam na mail: <br>
                <a href="mailto:info@vedras.hr">info@vedras.hr</a> ili nazovite broj <a href="tel:+385 98 9608 920">+385 98 9608 920</a>
            </p>
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Vedras',
    meta: [
      { hid: 'description', name: 'description', content: 'Vedras rješenje za trenutne probleme s koronom.'},
      { hid: 'keywords', name: 'keywords', content: 'robot, covid19, dezinfekija, sterilizacija, pandemija, korona virus'}
    ],
  }
}
</script>

