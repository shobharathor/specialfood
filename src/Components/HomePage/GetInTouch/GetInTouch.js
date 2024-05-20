import "./getintouch.css";

export default function GetInTouch() {
  return (
    <section className="getintouch">
      <div className="getLeft">
        <img
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="getintouch"
        />
      </div>

      <div className="getRight">
        <p className="getBig">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </p>
        <p className="getSmall">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <button className="getBtn">Get in Touch</button>
      </div>
    </section>
  );
}