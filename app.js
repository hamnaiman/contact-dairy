const contacts = []; // Array to store contacts

function saveContact() {
    const name = document.getElementById('contactName').value;
    const number = document.getElementById('contactNumber').value;
    
    if (name && number) {
        const contact = { name, number };
        contacts.push(contact);
        updateContactList();
        
        // Clear input fields
        document.getElementById('contactName').value = '';
        document.getElementById('contactNumber').value = '';
        
        // Transition to view contacts page
        showPage('viewContactsPage');
    }
}

function updateContactList() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; // Clear existing list
    
    contacts.forEach((contact, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.number}</td>
            <td class="action-buttons">
                <button onclick="editContact(${index})">Edit</button>
                <button class="delete" onclick="deleteContact(${index})">Delete</button>
            </td>
        `;
        
        contactList.appendChild(tr);
    });
}

function editContact(index) {
    const contact = contacts[index];
    
    document.getElementById('contactName').value = contact.name;
    document.getElementById('contactNumber').value = contact.number;
    
    // Remove the contact from the list
    contacts.splice(index, 1);
    updateContactList();
    
    showPage('addContactPage'); // Switch to the add contact page
}

function deleteContact(index) {
    contacts.splice(index, 1);
    updateContactList();
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
            page.style.opacity = 1;
            page.style.visibility = 'visible';
        } else {
            page.classList.add('hidden');
            page.style.opacity = 0;
            page.style.visibility = 'hidden';
        }
    });
}
