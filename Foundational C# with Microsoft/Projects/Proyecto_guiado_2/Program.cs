/* 
  Estamos desarrollando una aplicación Student Grading 
  que automatiza el cálculo de las calificaciones 
  para los alumnos de una clase. 
*/
/* 
  OUTPUT ESPERADO

  Student         Grade

  Sophia:         92.2    A-
  Andrew:         89.6    B+
  Emma:           85.6    B
  Logan:          91.2    A-
*/
/*
  97 - 100   A+
  93 - 96    A
  90 - 92    A-
  87 - 89    B+
  83 - 86    B
  80 - 82    B-
  77 - 79    C+
  73 - 76    C
  70 - 72    C-
  67 - 69    D+
  63 - 66    D
  60 - 62    D-
  0  - 59    F
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


// Impresion de los resultados
Console.WriteLine();
Console.WriteLine("Student\t\tGrade"); 
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


  // Conteo de la cantidad de notas que posee el alumno
  int gradedAssignments = 0;
  // Calculo de la nota global del alumno
  double globalScore = 0;
  foreach (int note in notes) {
    gradedAssignments++;
    if (gradedAssignments <= examAssignments) globalScore += note; 
    else globalScore += note / 10;
  }  
  globalScore = (double) globalScore / examAssignments;


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

  
  Console.WriteLine($"{currentStudent}:\t\t{Math.Round(globalScore, 2)}\t{grade}");
}

Console.WriteLine();





