import { Section } from 'ui/Section';

const HomePage = () => {
  return (
    <>
      <Section>
        <h2>About Phonebook</h2>
        <p>
          Phonebook is a simple web application that allows you to store and
          manage your contact information. No more losing phone numbers or email
          addresses - keep everything organized here!
        </p>
      </Section>

      <Section>
        <h2>Features</h2>
        <ul>
          <li>Add new contacts with a name and phone number.</li>
          <li>View and edit your contact list.</li>
          <li>Delete contacts you no longer need.</li>
        </ul>
      </Section>

      <Section>
        <h2>Getting Started</h2>
        <p>Ready to start using Phonebook? Follow these simple steps:</p>
        <ol>
          <li>Click on "Add Contact" to add a new contact to your list.</li>
          <li>Fill in the name and phone number and click "Add Contact."</li>
          <li>
            Click on "Contact List" to view, edit, or delete your contacts.
          </li>
        </ol>
      </Section>
    </>
  );
};

export default HomePage;
