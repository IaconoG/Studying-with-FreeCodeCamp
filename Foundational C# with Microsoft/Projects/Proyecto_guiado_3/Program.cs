/* 
This C# console application is designed to:
- Use arrays to store student names and assignment scores.
- Use a `foreach` statement to iterate through the student names as an outer program loop.
- Use an `if` statement within the outer loop to identify the current student name and access that student's assignment scores.
- Use a `foreach` statement within the outer loop to iterate though the assignment scores array and sum the values.
- Use an algorithm within the outer loop to calculate the average exam score for each student.
- Use an `if-elseif-else` construct within the outer loop to evaluate the average exam score and assign a letter grade automatically.
- Integrate extra credit scores when calculating the student's final score and letter grade as follows:
    - detects extra credit assignments based on the number of elements in the student's scores array.
    - divides the values of extra credit assignments by 10 before adding extra credit scores to the sum of exam scores.
- use the following report format to report student grades: 

Student         Exam Score      Overall Grade   Extra Credit

Sophia          92.2            95.88   A       92 (3.68 pts)

*/

// initialize variables - graded assignments
const int examAssignments = 5;

// Array de alumnos 
string[] studentNames = new string[] { "Sophia", "Andrew", "Emma", "Logan", "Becky", "Chris", "Eric", "Gregor" };

// Array de notas de cada alumno
int[] notesSophia = new int[] { 90, 86, 87, 98, 100, 94, 90 };
int[] notesAndrew = new int[] { 92, 89, 81, 96, 90, 89 };
int[] notesEmma = new int[] { 90, 85, 87, 98, 68, 89, 89, 89 };
int[] notesLogan = new int[] { 90, 95, 87, 88, 96, 96 };
int[] notesBecky = new int[] { 92, 91, 90, 91, 92, 92, 92 };
int[] notesChris = new int[] { 84, 86, 88, 90, 92, 94, 96, 98 };
int[] notesEric = new int[] { 80, 90, 100, 80, 90, 100, 80, 90 };
int[] notesGregor = new int[] { 91, 91, 91, 91, 91, 91, 91 };   

int[] studentScores = new int[10];

// display the header row for scores/grades
Console.Clear();
// Impresion de los resultados
Console.WriteLine("Student\t\tExame Score\tOverral\tGrade\tExtra Credit"); 
foreach (string currentStudent in studentNames) {
  int[] notes; // Array de notas de cada alumno

  // Consulta sobre que alumno se esta iterando
  if (currentStudent == "Sophia") notes = notesSophia;
  else if (currentStudent == "Andrew") notes = notesAndrew;
  else if (currentStudent == "Emma") notes = notesEmma;
  else if (currentStudent == "Logan") notes = notesLogan;
  else if (currentStudent == "Becky") notes = notesBecky;
  else if (currentStudent == "Chris") notes = notesChris;
  else if (currentStudent == "Eric") notes = notesEric;
  else if (currentStudent == "Gregor") notes = notesGregor;
  else continue;



  // Conteo de la cantidad de notas y creditos que posee el alumno
  int gradedAssignments = 0;
  int extraCreditAssignments = 0;

  // Sumatoria de la nota y el credito extra global del alumno
  int sumExamScores = 0;
  int sumExtraCreditScores = 0;

  // Calculo de la nota global del alumno
  double globalScore = 0;
  double examScore = 0;
  double extraCredit = 0;


  foreach (int note in notes) {
    gradedAssignments++;

    if (gradedAssignments <= examAssignments) sumExamScores += note; 
    else {
      extraCreditAssignments++;
      sumExtraCreditScores += note;
    }
  }  

  examScore = (double) sumExamScores / examAssignments;
  extraCredit =  Math.Round( (double) sumExtraCreditScores / extraCreditAssignments, 2);

  globalScore = Math.Round( (double) ( sumExamScores + ( (decimal) sumExtraCreditScores / 10 ) ) / examAssignments , 2);


  // Asignacion de la grado  segun la nota globla
  string grade = "";
  if (globalScore >= 97) grade = "A+";
  else if (globalScore >= 93) grade = "A";
  else if (globalScore >= 90) grade = "A-";
  else if (globalScore >= 87) grade = "B+";
  else if (globalScore >= 83) grade = "B";
  else if (globalScore >= 80) grade = "B-";
  else if (globalScore >= 77) grade = "C+";
  else if (globalScore >= 73) grade = "C";
  else if (globalScore >= 70) grade = "C-";
  else if (globalScore >= 67) grade = "D+";
  else if (globalScore >= 63) grade = "D";
  else if (globalScore >= 60) grade = "D-";
  else grade = "F";

  Console.WriteLine($"{currentStudent}:\t\t{examScore}\t\t{globalScore}\t{grade}\t{extraCredit} ({Math.Round(globalScore - examScore, 2)} pts)");
}

Console.WriteLine();





