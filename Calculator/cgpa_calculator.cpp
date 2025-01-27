#include <iostream>
#include <vector>
#include <string>

struct Subject {
    int creditHours;
    std::string grade;
};

int gradeToGradePoint(const std::string& grade) {
    if (grade == "A1") return 10;
    if (grade == "A2") return 9;
    if (grade == "B1") return 8;
    if (grade == "B2") return 7;
    if (grade == "C1") return 6;
    if (grade == "C2") return 5;
    if (grade == "D") return 4;
    if (grade == "E1") return 3;
    if (grade == "E2") return 0;
    return 0;
}

float calculateCGPA(const std::vector<Subject>& subjects) {
    float totalPoints = 0;
    int totalCreditHours = 0;

    for (const auto& subject : subjects) {
        int gradePoint = gradeToGradePoint(subject.grade);
        totalPoints += gradePoint * subject.creditHours;
        totalCreditHours += subject.creditHours;
    }

    return totalCreditHours == 0 ? 0 : totalPoints / totalCreditHours;
}

int main() {
    int numSubjects;
    std::cout << "Enter the number of subjects: ";
    std::cin >> numSubjects;

    std::vector<Subject> subjects(numSubjects);

    for (int i = 0; i < numSubjects; ++i) {
        std::cout << "Enter credit hours for subject " << i + 1 << ": ";
        std::cin >> subjects[i].creditHours;

        std::cout << "Enter grade (e.g., A1, B2) for subject " << i + 1 << ": ";
        std::cin >> subjects[i].grade;
    }

    float cgpa = calculateCGPA(subjects);
    std::cout << "Your CGPA is: " << cgpa << std::endl;

    return 0;
}
