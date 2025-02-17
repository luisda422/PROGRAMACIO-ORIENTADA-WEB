function updateProfile() {
    const nameInput = document.getElementById('newName').value;
    const titleInput = document.getElementById('newTitle').value;
    if (nameInput) {
        document.getElementById('name').innerText = nameInput;
    }
    if (titleInput) {
        document.getElementById('title').innerText = titleInput;
    }
}

function addExperience() {
    const company = document.getElementById('expCompany').value;
    const position = document.getElementById('expPosition').value;
    const years = document.getElementById('expYears').value;
    if (company && position && years) {
        const experienceSection = document.getElementById('experienceSection');
        const newExp = document.createElement('div');
        newExp.className = 'item';
        newExp.innerHTML = `<h3>${company}</h3><p>${position} - ${years}</p>`;
        experienceSection.appendChild(newExp);
    }
}

function addEducation() {
    const institution = document.getElementById('eduInstitution').value;
    const degree = document.getElementById('eduDegree').value;
    const years = document.getElementById('eduYears').value;
    if (institution && degree && years) {
        const educationSection = document.getElementById('educationSection');
        const newEdu = document.createElement('div');
        newEdu.className = 'item';
        newEdu.innerHTML = `<h3>${institution}</h3><p>${degree} - ${years}</p>`;
        educationSection.appendChild(newEdu);
    }
}