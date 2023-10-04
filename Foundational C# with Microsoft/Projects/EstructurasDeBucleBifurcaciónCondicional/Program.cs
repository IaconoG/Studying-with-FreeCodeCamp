// the ourAnimals array will store the following: 
string? animalSpecies = "";
string? animalID = "";
string? animalAge = "";
string? animalPhysicalDescription = "";
string? animalPersonalityDescription = "";
string? animalNickname = "";

// variables that support data entry
int maxPets = 8;
string? readResult = "";
string? menuSelection = "";

// array used to store runtime data, there is no persisted data
string[,] ourAnimals = new string[maxPets, 6];

// TODO: Convert the if-elseif-else construct to a switch statement

// create some initial ourAnimals array entries
for (int i = 0; i < maxPets; i++) {
  switch (i) {
    case 0:
      animalSpecies = "dog";
      animalID = "d1";
      animalAge = "2";
      animalPhysicalDescription = "medium sized cream colored female golden retriever weighing about 65 pounds. housebroken.";
      animalPersonalityDescription = "loves to have her belly rubbed and likes to chase her tail. gives lots of kisses.";
      animalNickname = "lola";
      break;
    case 1:
      animalSpecies = "dog";
      animalID = "d2";
      animalAge = "9";
      animalPhysicalDescription = "large reddish-brown male golden retriever weighing about 85 pounds. housebroken.";
      animalPersonalityDescription = "loves to have his ears rubbed when he greets you at the door, or at any time! loves to lean-in and give doggy hugs.";
      animalNickname = "loki";
      break;
    case 2:
      animalSpecies = "cat";
      animalID = "c3";
      animalAge = "1";
      animalPhysicalDescription = "small white female weighing about 8 pounds. litter box trained.";
      animalPersonalityDescription = "friendly";
      animalNickname = "Puss";
      break;
    case 3:
      animalSpecies = "cat";
      animalID = "c4";
      animalAge = "?";
      animalPhysicalDescription = "";
      animalPersonalityDescription = "";
      animalNickname = "";
      break;
    default:
      animalSpecies = "";
      animalID = "";
      animalAge = "";
      animalPhysicalDescription = "";
      animalPersonalityDescription = "";
      animalNickname = "";
      break;
  }
  ourAnimals[i, 0] = "ID #: " + animalID;
  ourAnimals[i, 1] = "Species: " + animalSpecies;
  ourAnimals[i, 2] = "Age: " + animalAge;
  ourAnimals[i, 3] = "Nickname: " + animalNickname;
  ourAnimals[i, 4] = "Physical description: " + animalPhysicalDescription;
  ourAnimals[i, 5] = "Personality: " + animalPersonalityDescription;
}

// display the top-level menu options

do {
  Console.Clear();
  Console.WriteLine("Welcome to the Contoso PetFriends app. Your main menu options are:");
  Console.WriteLine(" 1. List all of our current pet information");
  Console.WriteLine(" 2. Add a new animal friend to the ourAnimals array");
  Console.WriteLine(" 3. Ensure animal ages and physical descriptions are complete");
  Console.WriteLine(" 4. Ensure animal nicknames and personality descriptions are complete");
  Console.WriteLine(" 5. Edit an animal’s age");
  Console.WriteLine(" 6. Edit an animal’s personality description");
  Console.WriteLine(" 7. Display all cats with a specified characteristic");
  Console.WriteLine(" 8. Display all dogs with a specified characteristic");
  Console.WriteLine();
  Console.WriteLine("Enter your selection number (or type Exit to exit the program)");

  readResult = Console.ReadLine();
  if (readResult != null) {
      menuSelection = readResult.ToLower();
  }

  Console.WriteLine($"You selected menu option {menuSelection}.");
  Console.WriteLine("Press the Enter key to continue");

  // pause code execution
  readResult = Console.ReadLine();
  Console.Clear();
  string tipoAnimal = "";
  string? idToFind = "";
  int cont = 0;
  switch (menuSelection) {
    case "1": // List all pet information
      Console.WriteLine("1) Listado de todos los animales:");

      for (int i = 0; i < ourAnimals.GetLength(0); i++) {
        if (ourAnimals[i,0] != "ID #: ") {
          for (int j = 0; j < ourAnimals.GetLength(1); j++) {
            Console.WriteLine($"\t {ourAnimals[i, j]}");  
          }
          Console.WriteLine("");
        }
        
      }
      break;
    case "2": // Add new pet
      string anotherPet = "y";
      int petCount = 0;
      
      for (int i = 0; i < maxPets; i++) {
        if (ourAnimals[i, 0] != "ID #: ") {
            petCount += 1;
        }
      }
      
      if (petCount < maxPets) {
        Console.WriteLine($"We currently have {petCount} pets that need homes. We can manage {(maxPets - petCount)} more.");
        Console.WriteLine("Press the Enter key to continue.");
        readResult = Console.ReadLine();

        console.WriteLine("Do you want to enter info for another pet (y/n)");
        do {
            readResult = Console.ReadLine();
            if (readResult != null) {
                anotherPet = readResult.ToLower();
            }
        } while (anotherPet != "y" && anotherPet != "n");

        if (anotherPet == "y") {
          petCount++;
          Console.WriteLine("2) Agregar nuevo animal");
          string [,] newPet = new string[1, 6];

          Console.WriteLine("Ingrese los datos del nuevo animal:");

          Console.Write("Species: ");
          readResult = Console.ReadLine();
          animalSpecies = readResult;

          // build the animal the ID number - for example C1, C2, D3 (for Cat 1, Cat 2, Dog 3)
          animalID = animalSpecies.Substring(0, 1) + (petCount + 1).ToString();
          Console.Write($"ID #: {animalID}");

          Console.Write("Age: ");
          readResult = Console.ReadLine();
          animalAge = readResult;

          Console.Write("Nickname: ");
          readResult = Console.ReadLine();
          animalNickname = readResult;

          Console.Write("Physical description: ");
          readResult = Console.ReadLine();
          animalPersonalityDescription = readResult;

          Console.Write("Personality: ");
          readResult = Console.ReadLine();
          animalPersonalityDescription = readResult;

          ourAnimals[petCount, 0] = animalID;
          ourAnimals[petCount, 1] = animalSpecies;
          ourAnimals[petCount, 2] = animalAge;
          ourAnimals[petCount, 3] = animalNickname;
          ourAnimals[petCount, 4] = animalPhysicalDescription;
          ourAnimals[petCount, 5] = animalPersonalityDescription;
        }
      }
      break;
    case "3": 
      Console.WriteLine("3) Comprobar si la edad y la descripcion fisica del animal estan completas");
      for (int i = 0; i < ourAnimals.GetLength(0); i++) {
        Console.Clear();
        while (ourAnimals[i,2] == "") {
          Console.Write("Para continuar se debe ingresar el age del animal: ");
          ourAnimals[i,2] = Console.ReadLine();
        }
        while (ourAnimals[i,4] == "") {
          Console.Write("Para continuar se debe ingresar la physical descriptions del animal: ");
          ourAnimals[i,4] = Console.ReadLine();
        }
      }
      break;
    case "4":
      Console.WriteLine("4) Comprobar si el apodo y la descripcion de la pesonalidad del animal estan completas");
      for (int i = 0; i < ourAnimals.GetLength(0); i++) {
        Console.Clear();
        while (ourAnimals[i,3] == "") {
          Console.Write("Para continuar se debe ingresar el nickname del animal: ");
          ourAnimals[i,3] = Console.ReadLine();
        }
        while (ourAnimals[i,5] == "") {
          Console.Write("Para continuar se debe ingresar la personality description del animal: ");
          ourAnimals[i,5] = Console.ReadLine();
        }
      }
      break;
    case "5":
      Console.WriteLine("5) Editar la edad de un animal");
      Console.Write("Ingrese el id del animal a editar: ");
      idToFind = Console.ReadLine();
      cont = 0;
      while ( (ourAnimals[cont,0] == idToFind) && (cont > ourAnimals.GetLength(0)) ) {
        cont++;
      }
      if (ourAnimals[cont,0] == idToFind) {
        Console.Write($"Ingrese la nueva edad del animal {ourAnimals[cont,3]}:");
        ourAnimals[cont,2] = Console.ReadLine();
      } else {
        Console.WriteLine($"No existe un animal con el id '{idToFind}'");
      }
      break;
    case "6":
      Console.WriteLine("6) Editar la personalidad del animal");
      Console.Write("Ingrese el id del animal a editar: ");
      idToFind = Console.ReadLine();
      cont = 0;
      while ( (ourAnimals[cont,0] == idToFind) && (cont > ourAnimals.GetLength(0)) ) {
        cont++;
      }
      if (ourAnimals[cont,0] == idToFind) {
        Console.Write($"Ingrese la nueva personalidad del animal {ourAnimals[cont,3]}:");
        ourAnimals[cont,5] = Console.ReadLine();
      } else {
        Console.WriteLine($"No existe un animal con el id '{idToFind}'");
      }
      break;
    case "7":
      tipoAnimal = "gato";
      MostrarAnimalesConCaracteristica(tipoAnimal, menuSelection);
      break;
    case "8":
      tipoAnimal = "perro";
      MostrarAnimalesConCaracteristica(tipoAnimal, menuSelection);
      break;
    default:
      break;
  }


  // pause code execution
  Console.WriteLine("Press the Enter key to continue");
  readResult = Console.ReadLine();
} while (menuSelection != "exit");


void MostrarAnimalesConCaracteristica(string tipoAnimal, string menuSelection) {
  Console.WriteLine($"{menuSelection}) Listado de todos los {tipoAnimal}s con cierta caracteristica");
  Console.Write($"Ingrese la caracteristica de los {tipoAnimal}s: ");
  string? caract = Console.ReadLine();

  Console.WriteLine($"\nListado de {tipoAnimal}s con caracteristica '{caract}'");
  for (int i = 0; i < ourAnimals.GetLength(0); i++) {
      if (ourAnimals[i,1] == tipoAnimal) {
        if (ourAnimals[i,1] == caract) {
          Console.WriteLine($"\t - {ourAnimals[i,3]}");
        }
      }
  }
}