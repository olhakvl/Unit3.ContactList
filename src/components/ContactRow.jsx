// if you have Eslint installed
// import PropTypes from 'prop-types';

export default function ContactRow({setSelectedContactId, contact}) {
  return (
    <tr onClick={() => {
      setSelectedContactId(contact.id);
    }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

//  if you have Eelint installed - use it to get rid of the red lines
// ContactRow.propTypes = {
//   contact: PropTypes.object.isRequired,
// }