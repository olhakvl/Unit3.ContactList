import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function SelectedContact({selectedContactId, setSelectedContactId}){

    const [contact, setContact] = useState({});

    useEffect(() => {
        async function getContactInfo () { 
            try {
                const response = await fetch(
                   `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const jsonResponse = await response.json();
                console.log("Json Response: ", jsonResponse);
                setContact(jsonResponse);
                console.log("Contact: ", contact);
            } catch (error) {
                console.log(error);
            }
        }
        getContactInfo();

    }, [])

    return (
        <div>
            <h2>Selected User Information</h2>
            {/* <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Username: {contact.username}</p>
            <p>Website: {contact.website}</p> */}
            <ContactRow setSelectedContactId={setSelectedContactId} key={contact.id} contact={contact} />
        </div>
    )
}