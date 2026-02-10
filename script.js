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
    closePrintDialog();
    
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const regNumber = document.getElementById('regNumber').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const department = document.getElementById('department').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const appDate = document.getElementById('appDate').value;
    const formattedDate = formatDate(appDate);
    
    // Generate the appropriate letter for printing
    const letterContent = selectedLetter === 1 ? 
        generatePrintLetter1(fullName, regNumber, rollNumber, department, contactNumber, appDate) :
        generatePrintLetter2(fullName, regNumber, rollNumber, department, contactNumber, appDate);
    
    // Open print preview in new window
    const printWindow = window.open('', '_blank');
    
    // We construct the entire HTML string for the new window
    const windowContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>JU Casual Admission Letter - Print Preview</title>
            <style>
                @page {
                    size: A4;
                    margin: 2.5cm 2cm;
                }
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: 'Times New Roman', Times, serif;
                    line-height: 1.5;
                    font-size: 12pt;
                    color: #000;
                    background-color: white;
                    max-width: 210mm;
                    margin: 0 auto;
                    padding: 10mm; /* Screen padding */
                }
                .print-header {
                    text-align: center;
                    margin-bottom: 25px;
                }
                .print-header h1 {
                    font-size: 18pt;
                    margin-bottom: 5px;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .print-header p {
                    font-size: 11pt;
                }
                .address-block {
                    margin-bottom: 20px;
                    line-height: 1.4;
                }
                .subject-line {
                    font-weight: bold;
                    margin: 20px 0 15px 0;
                    font-size: 12pt;
                    text-decoration: underline;
                }
                .content {
                    text-align: justify;
                    line-height: 1.6;
                    margin-bottom: 15px;
                }
                .details {
                    margin: 15px 0;
                    line-height: 1.4;
                    margin-left: 20px;
                }
                .signature-block {
                    margin-top: 50px;
                    text-align: right;
                    page-break-inside: avoid;
                }
                .signature-line {
                    border-top: 1px solid #000;
                    width: 220px;
                    margin: 30px 0 5px auto;
                    padding-top: 3px;
                }
                .footer-info {
                    margin-top: 30px;
                    font-size: 10pt;
                    color: #666;
                    border-top: 1px dashed #ddd;
                    padding-top: 10px;
                }
                .print-controls {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: #f0f0f0;
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                }
                .btn {
                    background-color: #0c3b6c;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    font-size: 11pt;
                    border-radius: 4px;
                    cursor: pointer;
                    font-family: sans-serif;
                }
                .btn:hover { background-color: #1e5ba6; }
                
                @media print {
                    body {
                        padding: 0;
                    }
                    .print-controls { display: none !important; }
                }
            </style>
        </head>
        <body>
            <div class="print-controls">
                <button class="btn" onclick="window.print()">Print Letter / Save PDF</button>
            </div>
            ${letterContent}
        </body>
        </html>
    `;

    // Write content to new window
    printWindow.document.write(windowContent);
    printWindow.document.close(); // Important for loading to finish
    printWindow.focus();
}

// Function to generate Letter 1 for printing (Only 2026 Session)
function generatePrintLetter1(fullName, regNumber, rollNumber, department, contactNumber, appDate) {
    const formattedDate = formatDate(appDate);
    
    return `
        <div class="print-header">
            <h1>JADAVPUR UNIVERSITY</h1>
            <p>Kolkata – 700032</p>
        </div>
        
        <div class="address-block">
            <p>To<br>
            The Registrar<br>
            Jadavpur University<br>
            Kolkata – 700032</p>
            
            <p style="margin-top: 12px;">Through<br>
            The Head of the Department<br>
            ${department}<br>
            Jadavpur University</p>
        </div>
        
        <p class="subject-line">Subject: Application for Grant of Casual Admission for the Academic Session 2026</p>
        
        <div class="content">
            <p>Respected Sir,</p>
            
            <p>I respectfully submit that I was first admitted to Jadavpur University in the academic session 2020–2021. I intend to apply for casual admission for the academic session 2026 as per the rules and regulations of the University.</p>
            
            <p>I therefore request you kindly to permit me to take casual admission for the said academic session and allow me to complete the necessary academic formalities.</p>
        </div>
        
        <div class="details">
            <p>My particulars are given below for your kind reference:</p>
            <p><strong>Registration Number:</strong> ${regNumber} (2020–21)<br>
            <strong>Roll Number:</strong> ${rollNumber}<br>
            <strong>Department:</strong> ${department}</p>
        </div>
        
        <div class="content">
            <p>This application is being forwarded through the Head of the Department for your kind consideration and approval.</p>
            
            <p>I shall remain obliged if my request is considered favourably.</p>
            
            <p>Thanking you.</p>
        </div>
        
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
    `;
}

// Function to generate Letter 2 for printing (2025 & 2026 Sessions)
function generatePrintLetter2(fullName, regNumber, rollNumber, department, contactNumber, appDate) {
    const formattedDate = formatDate(appDate);
    
    return `
        <div class="print-header">
            <h1>JADAVPUR UNIVERSITY</h1>
            <p>Kolkata – 700032</p>
        </div>
        
        <div class="address-block">
            <p>To<br>
            The Registrar<br>
            Jadavpur University<br>
            Kolkata – 700032</p>
            
            <p style="margin-top: 12px;">Through<br>
            The Head of the Department<br>
            ${department}<br>
            Jadavpur University</p>
        </div>
        
        <p class="subject-line">Subject: Application for Grant of Casual Admission for the Academic Sessions 2025 and 2026</p>
        
        <div class="content">
            <p>Respected Sir,</p>
            
            <p>I respectfully state that I was first admitted to Jadavpur University in the academic session 2020–2021. I now seek permission to apply for casual admission for the academic sessions 2025 and 2026, in accordance with the University norms.</p>
            
            <p>I therefore request you kindly to allow me to take casual admission for the above-mentioned academic sessions and to complete all required academic formalities as prescribed.</p>
        </div>
        
        <div class="details">
            <p>My academic details are furnished below for your reference:</p>
            <p><strong>Registration Number:</strong> ${regNumber} (2020–21)<br>
            <strong>Roll Number:</strong> ${rollNumber}<br>
            <strong>Department:</strong> ${department}</p>
        </div>
        
        <div class="content">
            <p>This application is submitted through the Head of the Department for your necessary approval.</p>
            
            <p>I shall be grateful if my request is considered.</p>
            
            <p>Thanking you.</p>
        </div>
        
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
    `;
}

// Initialize: Set default date to today
document.getElementById('appDate').valueAsDate = new Date();

// PRE-FILL DATA FOR TESTING (You can delete this section in production)
window.onload = function() {
    document.getElementById('fullName').value = "John Kumar Das";
    document.getElementById('regNumber').value = "20EE1234";
    document.getElementById('rollNumber').value = "EE-2020-45";
    document.getElementById('department').value = "Department of Electrical Engineering";
    document.getElementById('contactNumber').value = "9876543210";
};
