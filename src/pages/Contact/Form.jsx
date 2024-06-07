const Form = () => {
  return (
    <div className="contact-form">
      <form action="#" className="form">
        <div className="form-input">
          <label htmlFor="contactName">full name</label>
          <input
            type="text"
            name="contactName"
            id="contactName"
            placeholder="e.g Manase Gunga"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="contactEmail">email address</label>
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            placeholder="e.g mzeegunga@gmail.com"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="contactSubject">subject</label>
          <input
            type="text"
            name="contactSubject"
            id="contactSubject"
            placeholder="e.g making inquiry of my booking"
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="contactMessage">message</label>
          <textarea
            name="contactMessage"
            id="contactMessage"
            rows={3}
            placeholder="Enter your message here"
            required
          ></textarea>
        </div>
        <div className="">
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default Form;
