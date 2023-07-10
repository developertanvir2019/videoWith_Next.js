import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    <style>
        {`
      .mapouter {
        position: relative;
        text-align: right;
        width: 100%;
        height: 400px;
      }
      .gmap_canvas {
        overflow: hidden;
        background: none!important;
        width: 100%;
        height: 400px;
      }
      .gmap_iframe {
        height: 400px!important;
      }
    `}
    </style>
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://maps.google.com/maps?width=650&amp;height=400&amp;hl=en&amp;q=savar,Dhaka , Bangladesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

            {/* <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=650&amp;height=400&amp;hl=en&amp;q=savar,Dhaka , Bangladesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://thepasswordgame.com/">The Password Game</a>
                </div>
            </div> */}


        </>
    );
};

export default Contact;