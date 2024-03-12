import { useState } from "react";

const contacts = [
    { name: "Brian", email: "brian@gmail.com" },
    { name: "Agung", email: "agung@gmail.com" },
    { name: "Iqbal", email: "iqbal@gmail.com" },
];

export function ContactList({ selectedContact, contacts, onSelect }) {
    return (
        <section className="contact-list">
            <ul className="w-full">
                {contacts.map(contact =>
                    <li key={contact.email}>
                        <button
                            className={`text-xs bg-blue-400 rounded p-1 m-2 text-white ${contact === selectedContact ? 'bg-blue-600' : ''}`}
                            onClick={() => { onSelect(contact); }}
                        >
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

export function Chat({ contact }) {
    const [text, setText] = useState('');
    return (
        <section className="chat m-2">
            <textarea
                rows={5}
                value={text}
                placeholder={'Mengobrol dengan ' + contact.name}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <button className="text-xs bg-gray-400 rounded px-2 py-1 m-2 text-blue-800">Kirim ke {contact.email}</button>
        </section>
    );
}

export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <div>
            <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">List Kontak</th>
                        <th className="px-6 py-3">Pesan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ContactList
                                contacts={contacts}
                                selectedContact={to}
                                onSelect={contact => setTo(contact)}
                            />
                        </td>
                        <td>
                            {/* <Chat contact={to} /> */}
                            <Chat key={to.email} contact={to} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
