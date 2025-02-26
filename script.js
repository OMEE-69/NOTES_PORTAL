const notes = [
    { title: 'Semiconductor Numericals', link: 'https://drive.google.com/file/d/1O0E0cCL2xf64-vrWbAWBECusK2KauVPa/view?usp=drivesdk' },
    { title: 'Quantum Numericals', link: 'https://drive.google.com/file/d/1OnTf0pnV9BQPiylDXfpcF98J5Ig5ryWK/view?usp=drivesdk' },
    { title: 'Maths Question Bank', link: 'https://drive.google.com/file/d/1OpewODcNjT80PvHqADtdUqoY-xiHRWs9/view?usp=drivesdk' }
];

function getNotes() {
    return notes;
}

function addNote(title, link) {
    if (title && link) {
        notes.push({ title, link });
    }
}

// Example usage:
console.log(getNotes()); // Fetch notes
addNote('New Note', 'https://example.com'); // Add a new note
console.log(getNotes()); // Fetch updated notes
