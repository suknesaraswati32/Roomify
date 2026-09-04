function Newroom() {
  return (  
    <div classname='Container'>
      <form action="/api/rooms" method='POST'>
      <h1>Room form</h1>
      <label for='title'>Title</label>
      <input type='text' name='title' id="title" placeholder="enter your room title" />
      <br/>
      <label for='rent'>Rent</label>
      <input type='number' name='rent' id='rent' placeholder="enter your room rent" />
      <br />
      <label for='location'>Location</label>
      <input type='text' name='location' id='location' placeholder="enter your room location" />
      <br />
      <label for='facilities'>Facilities</label>
      <input type='text' name='facilities' id='facilities' placeholder="enter your rooms facilities" />
      <br />
      <label for='conditions'>Conditions</label>
      <input type='text' name='conditions' id='conditions' placeholder="enter your room conditions" />
      <br/>
      <input type='submit' value='Create Room' />
      </form>
    </div>
    
  );
}

export default Newroom;