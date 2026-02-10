let selectedLetter = 1;

// Function to select letter type
function selectLetter(num) {
    selectedLetter = num;
    document.getElementById('letter1-option').classList.remove('active');
    document.getElementById('letter2-option').classList.remove('active');
    document.getElementById('letter' + num + '-option').classList.add('active');
    
    // If preview is already visible, update it immediately
    const previewBox = document.getElementById('previewContent');
    if(previewBox.innerHTML.includes('JADAVPUR UNIVERSITY')) {
        generatePreview();
    }
}

// Helper to format date
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Main Generate Function
function generatePreview() {
    // 1. Get Values
    const fullName = document.getElementById('fullName').value;
    const regNumber = document.getElementById('regNumber').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const department = document.getElementById('department').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const appDate = document.getElementById('appDate').value;

    // 2. Validation
    if (!fullName || !regNumber || !rollNumber || !department) {
        alert("Please fill all required fields marked with *");
        return;
    }

    // 3. Show Loading
    document.getElementById('loadingIndicator').style.display = 'block';
    document.getElementById('previewContent').style.opacity = '0.5';

    // 4. Generate Content (Small delay for effect)
    setTimeout(() => {
        let letterBody = '';
        const fDate = formatDate(appDate);

        // Common Header
        const header = `
            <div style="text-align:center; margin-bottom: 30px;">
                <h2 style="margin:0; text-transform:uppercase; font-size:18pt;">JADAVPUR UNIVERSITY</h2>
                <p style="margin:5px 0 0 0;">Kolkata – 700032</p>
            </div>
            <div style="margin-bottom: 20px;">
                <p>To<br>The Registrar<br>Jadavpur University<br>Kolkata – 700032</p>
                <p style="margin-top: 15px;">Through<br>The Head of the Department<br>${department}<br>Jadavpur University</p>
            </div>
        `;

        // Letter Specific Content
        if (selectedLetter === 1) {
            letterBody = `
                <p style="font-weight:bold; text-decoration:underline; margin: 20px 0;">Subject: Application for Grant of Casual Admission for the Academic Session 2026</p>
                <p>Respected Sir,</p>
                <p style="text-align:justify;">I respectfully submit that I was first admitted to Jadavpur University in the academic session 2020–2021. I intend to apply for casual admission for the academic session 2026 as per the rules and regulations of the University.</p>
                <p style="text-align:justify;">I therefore request you kindly to permit me to take casual admission for the said academic session and allow me to complete the necessary academic formalities.</p>
            `;
        } else {
            letterBody = `
                <p style="font-weight:bold; text-decoration:underline; margin: 20px 0;">Subject: Application for Grant of Casual Admission for the Academic Sessions 2025 and 2026</p>
                <p>Respected Sir,</p>
                <p style="text-align:justify;">I respectfully state that I was first admitted to Jadavpur University in the academic session 2020–2021. I now seek permission to apply for casual admission for the academic sessions 2025 and 2026, in accordance with the University norms.</p>
                <p style="text-align:justify;">I therefore request you kindly to allow me to take casual admission for the above-mentioned academic sessions and to complete all required academic formalities as prescribed.</p>
            `;
        }

        // Common Footer
        const footer = `
            <div style="margin: 20px 0 0 20px;">
                <p><strong>My Particulars:</strong></p>
                <p>Registration No: ${regNumber}<br>Roll No: ${rollNumber}<br>Department: ${department}</p>
            </div>
            <p style="margin-top:15px;">I shall remain obliged if my request is considered favourably.</p>
            <p>Thanking you,</p>
            <div style="margin-top: 40px; text-align: right;">
                <p>Yours faithfully,</p>
                <br><br>
                <p>_______________________<br>(Signature)</p>
                <p><strong>${fullName}</strong></p>
            </div>
            <div style="margin-top: 30px; font-size: 10pt; color: #555; border-top: 1px dashed #999; padding-top:10px;">
                ${contactNumber ? 'Contact: ' + contactNumber : ''} 
                ${fDate ? '<span style="float:right;">Date: ' + fDate + '</span>' : ''}
            </div>
        `;

        // 5. Inject HTML
        const finalHTML = `<div class="letter-content">${header}${letterBody}${footer}</div>`;
        
        document.getElementById('previewContent').innerHTML = finalHTML;
        document.getElementById('loadingIndicator').style.display = 'none';
        document.getElementById('previewContent').style.opacity = '1';
        
        // Show the Print Button
        document.getElementById('printActions').style.display = 'flex';
        
        // Scroll to preview
        document.querySelector('.preview-card').scrollIntoView({behavior: 'smooth'});

    }, 500);
}

// Set default date to today
document.getElementById('appDate').valueAsDate = new Date();
