// Grade to Grade Point Mapping based on the provided grading system
function gradeToGradePoint(grade) {
    switch (grade.toUpperCase()) {
        case 'A+': return 10;
        case 'A': return 9;
        case 'B+': return 8;
        case 'B': return 7;
        case 'C+': return 6;
        case 'C': return 5;
        case 'D': return 4;
        case 'D45': return 4.5; // Special case for "D" with 45 marks only
        case 'F': return 0;
        case 'I': return 0;
        case 'W': return 0;
        default: return 0;
    }
}

// Function to generate input fields based on the selected number of subjects
function generateSubjects() {
    const subjectCount = parseInt(document.getElementById('subject-count').value);
    const subjectsDiv = document.getElementById('subjects');
    subjectsDiv.innerHTML = ''; // Clear any previous subjects

    for (let i = 1; i <= subjectCount; i++) {
        const subjectDiv = document.createElement('div');
        subjectDiv.classList.add('subject');
        subjectDiv.innerHTML = `
            <label>Subject ${i}:</label>
            <input type="number" placeholder="Credit Hours" id="credits-${i}" min="1" required>
            <input type="text" placeholder="Grade (e.g., A+, B)" id="grade-${i}" maxlength="2" required>
        `;
        subjectsDiv.appendChild(subjectDiv);
    }
}

function calculateCGPA() {
    let totalPoints = 0;
    let totalCredits = 0;
    const subjectCount = parseInt(document.getElementById('subject-count').value);

    for (let i = 1; i <= subjectCount; i++) {
        const credits = parseFloat(document.getElementById(`credits-${i}`).value);
        const grade = document.getElementById(`grade-${i}`).value;

        if (!isNaN(credits) && grade) {
            let gradePoint;

            // Special handling for "D" with 45 marks only
            if (grade.toUpperCase() === 'D' && confirm("Did you score exactly 45 marks in this subject?")) {
                gradePoint = 4.5;
            } else {
                gradePoint = gradeToGradePoint(grade);
            }

            totalPoints += credits * gradePoint;
            totalCredits += credits;
        }
    }

    const cgpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;
}
