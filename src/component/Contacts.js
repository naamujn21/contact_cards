import axios from "axios";
import "../styles.css";
import { useEffect, useState } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [bool, setBool] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  useEffect(async () => {
    await axios
      .get(
        "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
      )
      .then((res) => {
        console.log(res.data.results);
        setContacts(res.data.results);
      });
  }, []);

  const Contacts = contacts.map((contact) => {
    return (
      <div
        className="col-sm-3 "
        onClick={() => {
          handleClick(contact);
        }}
      >
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              {contact.gender} {contact.location.country}
            </p>

            <h5 className="card-title">
              {contact.name.title} {contact.name.first} {contact.name.last}
            </h5>
            <p className="card-text">{contact.email}</p>
          </div>
        </div>
      </div>
    );
  });
  function handleClick(contact) {
    setBool(true);

    const name = `${contact.name.title} ${contact.name.first} ${contact.name.last}`;
    const location = `${contact.location.street.number} ${contact.location.street.name} ${contact.location.city} ${contact.location.country} ${contact.location.postcode}`;
    setName(name);
    setLocation(location);
    setImgUrl(contact.picture.medium);
    if (contact.gender == "female") {
      setGender("Female");
    } else {
      setGender("Male");
    }
  }

  if (bool) {
    return (
      <div className="row">
        <div className="col-sm-12 gap" style={{ border: "1px solid black" }}>
          <img src={imgUrl} />
          <h1>{name}</h1>
          <b>{location}</b>
          <p>{gender}</p>
        </div>
        {Contacts}
      </div>
    );
  } else {
    return <div className="row">{Contacts} </div>;
  }
}

export default Contacts;
