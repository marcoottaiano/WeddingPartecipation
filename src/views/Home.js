import React, { useState, useEffect } from 'react'
import Map from '../components/Map'
import Header from '../components/Header'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { cloneDeep } from 'lodash';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

function Home(props) {

  const [form, setForm] = useState({
    name: null,
    surname: null,
    phone: null,
    confirmation: null,
    menu: null,
    notes: null
  });
  const firestore = getFirestore();


  function handleOnChange(evt) {
    const newState = cloneDeep(form);
    if (evt.target.name !== 'phone' || (evt.target.name === 'phone' && evt.target.value.length <= 10)) {
      newState[evt.target.name] = evt.target.value;
    }
    setForm(newState)
  }

  function handleRadioChange(name, value) {
    const newState = cloneDeep(form);
    newState[name] = value;
    setForm(newState);
  }

  useEffect(() => { console.log(form); }, [form]);

  async function handleOnSubmit(evt) {
    await addDoc(collection(firestore, "partecipations"), form);
  }

  function goToLogin() {
    props.login();
  }

  return (
    <>
      <body>
        <section id='landing-section'>
          <Header />
          <div className='bg-overlay' />
          <div className='title-container'>
            <h1 className='title mb-4'>
              <div>
                <span>I</span>
                <span>l</span>
                <span>a</span>
                <span>r</span>
                <span>i</span>
                <span>a</span>
              </div>
              <span>&</span>
              <div>
                <span>L</span>
                <span>e</span>
                <span>o</span>
                <span>n</span>
                <span>a</span>
                <span>r</span>
                <span>d</span>
                <span>o</span>
              </div>
            </h1>
            <h2 className='subtitle mt-4'>
              <span>8 G</span>
              <span>i</span>
              <span>u</span>
              <span>g</span>
              <span>n</span>
              <span>o 2</span>
              <span>0</span>
              <span>2</span>
              <span>4</span>
            </h2>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-gear" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
          </svg> */}
        </section>
        <section id='invite-section'>
          <div className='bg-overlay' />
          <div className='text-container'>
            <h1>
              Ci sposiamo!
            </h1>
            <h2>
              Siamo lieti di invitarvi al nostro matrimonio
              l'8 giugno 2024 presso Antica Villa Castelli a Gubbio.
            </h2>
            <h2>
              La cerimonia inizierà alle ore 11:30.
              Seguiranno i festeggiamenti!
            </h2>
          </div>

        </section>
        <section id='location-section'>
          <h1>Come arrivare</h1>
          <hr className='divider' />
          <div className='map-box'>
            <p>Antica Villa Castelli si trova a pochi minuti dal centro storico di Gubbio ed é facilmente raggiungibile in macchina.</p>
            <Map />
          </div>
        </section>
        <section id='accomodation-section'>
          <h1>Pernottamento</h1>
          <hr className='divider' />
          <div className='accomodation-box'>
            <p className='description'>
              Per chi ha necessità di pernottamento vi proponiamo le seguenti strutture convezionate
            </p>
            <ul>
              <li>
                <a href='https://www.relaisducale.com/'>
                  <img src="https://www.relaisducale.com/wp-content/uploads/2019/03/relais-ducale-hotel-slider02.jpg" />
                  <h3>Hotel Relais Ducale</h3>
                  <p>Un hotel 4 stelle nel centro storico di Gubbio, dove convivono tradizione e comfort moderno.
                  </p>
                </a>
              </li>
              <li>
                <a href='https://www.hotelbosone.com/'>
                  <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/e9/13/45/retro-dell-albergo-da.jpg?w=700&h=-1&s=1" />
                  <h3>Hotel Bosone Palace</h3>
                  <p>All'Hotel Bosone Palace il soggiorno nel centro storico di Gubbio diventa arte dell'accoglienza.</p>
                </a>
              </li>
              <li>
                <a href='https://www.tenutadifassia.it/'>
                  <img src="https://www.tenutadifassia.it/wp-content/uploads/elementor/thumbs/agriturismo-tenuta-di-fassia-3-_-q4imo1oluapqolb9w5v2838gropr1wbaxulh10b0jk.jpeg" />
                  <h3>Tenuta di Fassia</h3>
                  <p>Un viaggio in armonia con la natura, dove apprezzerete pace assoluta ed esperienze indimenticabili.</p>
                </a>
              </li>
              <li>
                <a href='https://fontechiara.umbria.it/'>
                  <img src="https://fontechiara.umbria.it/wp-content/uploads/2021/05/fonte-chiara-struttura2-1-1024x537.jpg" />
                  <h3>Agriturismo Fonte Chiara</h3>
                  <p>Un angolo tranquillo e incontaminato, adagiato sulle  colline umbre.</p>
                </a>
              </li>
            </ul>
            <p className='description'>
              Vi invitiamo a prenotare il pernottamento <span>entro il 31 Gennaio</span> per assicurarvi le tariffe agevolate. Basterá indicare che siete ospiti al nostro matrimonio al momento della prenotazione.
            </p>
          </div>
        </section>
        <section id='travel-section'>
          <h1>Il nostro viaggio</h1>
          <div className='card'>
            <p>
              Quello che conta veramente é festeggiare questo momento speciale insieme a chi amiamo.<br />La destinazione del nostro viaggio di nozze, peró, é molto lontana: se volete potete aiutarci a raggiungerla!<br />
              IBAN IT58K0100501613000000003095<br />
              Intestato a Leonardo Lispi
            </p>
          </div>
        </section>
        <section id='rsvp-section'>
          <h1>Conferma la tua presenza</h1>
          <hr className='divider' />
          <form>
            <div className='input-container'>
              <FloatingLabel
                label="Nome"
                className="floating-field">
                <Form.Control
                  type="text"
                  placeholder=""
                  name='name'
                  className='text-capitalize'
                  onChange={handleOnChange}
                  value={form.name}
                />
              </FloatingLabel>
              <FloatingLabel
                label="Cognome"
                className="floating-field">
                <Form.Control
                  type="text"
                  placeholder=""
                  name='surname'
                  className='text-capitalize'
                  onChange={handleOnChange}
                  value={form.surname}
                />
              </FloatingLabel>
              <FloatingLabel
                label="Numero di telefono"
                className="floating-field">
                <Form.Control
                  type="number"
                  placeholder=""
                  name='phone'
                  onChange={handleOnChange}
                  value={form.phone}
                />
              </FloatingLabel>
            </div>
            <div className='input-container'>
              <Form.Check
                type='radio'
                label={`Ci saró con piacere`}
                name='confirmation'
                onChange={() => handleRadioChange('confirmation', true)}
              />
              <Form.Check
                type='radio'
                label={`Mi dispiace, non potró essere presente`}
                name='confirmation'
                onChange={() => handleRadioChange('confirmation', false)}
              />
            </div>
            <h3 className='mt-3'>Menù:</h3>
            <div className='input-container'>
              <Form.Check
                type='radio'
                label={`Tradizionale`}
                name='menu'
                onChange={() => handleRadioChange('menu', 'Tradizionale')}
              />
              <Form.Check
                type='radio'
                label={`Vegetariano`}
                name='menu'
                onChange={() => handleRadioChange('menu', 'Vegetariano')}
              />
            </div>
            <h3 className='mt-3 text-center'>In caso di intolleranze e/o allergie fatecelo sapere nel box di seguito:</h3>
            <FloatingLabel
              label=""
              className="floating-field textarea"
            >
              <Form.Control
                as="textarea"
                placeholder="Note"
                rows={4}
                className='text-capitalize'
                name='notes'
                onChange={handleOnChange}
                value={form.notes}
              />
            </FloatingLabel>
            <Button
              variant='primary'
              className='button-text mt-4 mb-4'
              size='lg'
              disabled={!form.name || !form.surname || !form.phone || form.confirmation === null || form.menu === null}
              onClick={handleOnSubmit}
            >
              Invia
            </Button>
          </form>
        </section>
        <div className='admin' onClick={goToLogin}>
          Admin
        </div>
      </body>
    </>

  )
}

export default Home