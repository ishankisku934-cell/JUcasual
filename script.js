let selectedLetter = 1;

// Function to select letter type
function selectLetter(letterNumber) {
    selectedLetter = letterNumber;
    
    // Update UI to show selected letter
    document.getElementById('letter1-option').classList.remove('active');
    document.getElementById('letter2-option').classList.remove('active');
    document.getElementById(`letter${letterNumber}-option`).classList.add('active');
    
    // If preview already exists, regenerate it with new letter format
    if (document.getElementById('letterPreviewContent')) {
        generatePreview();
    }
}

// Function to format date as DD/MM/YYYY
function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

// Function to generate the letter preview
function generatePreview() {
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const regNumber = document.getElementById('regNumber').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const department = document.getElementById('department').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const appDate = document.getElementById('appDate').value;
    
    // Validate required fields
    if (!fullName || !regNumber || !rollNumber || !department) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }
    
    // Validate registration number format
    const regPattern = /^[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    if (!regPattern.test(regNumber)) {
        alert('Registration number should be in format: 20EE1234 (2 digits, 2 letters, 4 digits)');
        return;
    }
    
    // Show loading indicator
    document.getElementById('loadingIndicator').style.display = 'block';
    document.getElementById('previewContent').innerHTML = '';
    
    // Simulate processing time
    setTimeout(() => {
        // Generate the appropriate letter based on selection
        const letterContent = selectedLetter === 1 ? 
            generateLetter1(fullName, regNumber, rollNumber, department, contactNumber, appDate) :
            generateLetter2(fullName, regNumber, rollNumber, department, contactNumber, appDate);
        
        // Display the preview
        document.getElementById('previewContent').innerHTML = letterContent;
        document.getElementById('loadingIndicator').style.display = 'none';
        
        // Scroll to preview section
        document.querySelector('.preview-container').scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

// Function to generate Letter 1 (Only 2026 Session)
function generateLetter1(fullName, regNumber, rollNumber, department, contactNumber, appDate) {
    const formattedDate = formatDate(appDate);
    
    return `
        <div class="letter-preview" id="letterPreviewContent">
            <div class="letter-header">
                <h2>JADAVPUR UNIVERSITY</h2>
                <p>Kolkata – 700032</p>
            </div>
            
            <div class="address-block">
                <p>To<br>
                The Registrar<br>
                Jadavpur University<br>
                Kolkata – 700032</p>
                
                <p style="margin-top: 15px;">Through<br>
                The Head of the Department<br>
                ${department}<br>
                Jadavpur University</p>
            </div>
            
            <p class="subject-line">Subject: Application for Grant of Casual Admission for the Academic Session 2026</p>
            
            <p>Respected Sir,</p>
            
            <p>I respectfully submit that I was first admitted to Jadavpur University in the academic session 2020–2021. I intend to apply for casual admission for the academic session 2026 as per the rules and regulations of the University.</p>
            
            <p>I therefore request you kindly to permit me to take casual admission for the said academic session and allow me to complete the necessary academic formalities.</p>
            
            <p>My particulars are given below for your kind reference:</p>
            
            <p>Registration Number: ${regNumber} (2020–21)<br>
            Roll Number: ${rollNumber}<br>
            Department: ${department}</p>
            
            <p>This application is being forwarded through the Head of the Department for your kind consideration and approval.</p>
            
            <p>I shall remain obliged if my request is considered favourably.</p>
            
            <p>Thanking you.</p>
            
            <div class="signature-block">
                <p>Yours faithfully,</p>
                <div class="signature-line"></div>
                <p>[Signature]</p>
                <p><strong>${fullName}</strong><br>
                ${department}<br>
                Jadavpur University</p>
            </div>
            
            ${contactNumber || formattedDate ? `
            <div class="footer-info">
                ${contactNumber ? `<p>Contact: ${contactNumber}</p>` : ''}
                ${formattedDate ? `<p>Date: ${formattedDate}</p>` : ''}
            </div>
            ` : ''}
        </div>
    `;
}

// Function to generate Letter 2 (2025 & 2026 Sessions)
function generateLetter2(fullName, regNumber, rollNumber, department, contactNumber, appDate) {
    const formattedDate = formatDate(appDate);
    
    return `
        <div class="letter-preview" id="letterPreviewContent">
            <div class="letter-header">
                <h2>JADAVPUR UNIVERSITY</h2>
                <p>Kolkata – 700032</p>
            </div>
            
            <div class="address-block">
                <p>To<br>
                The Registrar<br>
                Jadavpur University<br>
                Kolkata – 700032</p>
                
                <p style="margin-top: 15px;">Through<br>
                The Head of the Department<br>
                ${department}<br>
                Jadavpur University</p>
            </div>
            
            <p class="subject-line">Subject: Application for Grant of Casual Admission for the Academic Sessions 2025 and 2026</p>
            
            <p>Respected Sir,</p>
            
            <p>I respectfully state that I was first admitted to Jadavpur University in the academic session 2020–2021. I now seek permission to apply for casual admission for the academic sessions 2025 and 2026, in accordance with the University norms.</p>
            
            <p>I therefore request you kindly to allow me to take casual admission for the above-mentioned academic sessions and to complete all required academic formalities as prescribed.</p>
            
            <p>My academic details are furnished below for your reference:</p>
            
            <p>Registration Number: ${regNumber} (2020–21)<br>
            Roll Number: ${rollNumber}<br>
            Department: ${department}</p>
            
            <p>This application is submitted through the Head of the Department for your necessary approval.</p>
            
            <p>I shall be grateful if my request is considered.</p>
            
            <p>Thanking you.</p>
            
            <div class="signature-block">
                <p>Yours faithfully,</p>
                <div class="signature-line"></div>
                <p>[Signature]</p>
                <p><strong>${fullName}</strong><br>
                ${department}<br>
                Jadavpur University</p>
            </div>
            
            ${contactNumber || formattedDate ? `
            <div class="footer-info">
                ${contactNumber ? `<p>Contact: ${contactNumber}</p>` : ''}
                ${formattedDate ? `<p>Date: ${formattedDate}</p>` : ''}
            </div>
            ` : ''}
        </div>
    `;
}

// Print Dialog Functions
function showPrintDialog() {
    const previewContent = document.getElementById('letterPreviewContent');
    
    if (!previewContent) {
        alert('Please generate a preview first by clicking "Generate Preview"');
        return;
    }
    
    document.getElementById('printDialog').style.display = 'flex';
}

function closePrintDialog() {
    document.getElementById('printDialog').style.display = 'none';
}

function openPrintPreview() {
    // This is the FIX: Instead of opening a new window (which fails on mobile),
    // we simply close the dialog and call the browser's print function.
    // The CSS @media print rule will handle hiding the rest of the page.
    closePrintDialog();
    window.print();
}

// Set default date to today
document.getElementById('appDate').valueAsDate = new Date();

// PRE-FILL DATA (Remove this before final release if you want blank fields)
window.onload = function() {
    document.getElementById('fullName').value = "John Kumar Das";
    document.getElementById('regNumber').value = "20EE1234";
    document.getElementById('rollNumber').value = "EE-2020-45";
    document.getElementById('department').value = "Department of Electrical Engineering";
    document.getElementById('contactNumber').value = "9876543210";
};
