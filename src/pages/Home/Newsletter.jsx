const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter-section">
      <h1 className="section-title">join our newsletter</h1>
      <p className="section-subtitle">
        subribe to stay in touch and be informed about our daily offers and
        activities.
      </p>
      <div className="newletter-input">
        <form action="">
          <input
            type="email"
            name="letterEmail"
            id="letterEmail"
            placeholder="e.g mzeegunga@gmail.com"
          />
          <input type="submit" value="join" />
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
