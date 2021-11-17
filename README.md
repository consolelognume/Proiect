# Proiect


Componența echipei: 
- Dorobanțu Andrei-Denis
- Dorobanțu Nicoleta-Mariana
- Duca Elena-Alexandra

Tehnologii utilizate:
- React.js
- Node.js

Descrierea proiectului:

Aplicația trebuie să permită crearea unui cont prin care utilizatorul poate să partajeze o experiență, după ce a folosit un mijloc de transport în comun. Pentru utilizatorii anonimi, aplicația va permite căutarea și vizualizarea intrărilor în platforma.

Aplicația va fi compusă din trei module:
- Modulul Utilizator
- Modulul de Partajare
- Modulul de Căutare 

Modulul Utilizator
- Creare cont utilizator pe baza unor câmpuri sau cu ajutorul unui API extern (GMAIL, Facebook, Linkedin)
- Modificarea sau dezactivarea contului
- Resetarea parolei

Modulul de Partajare
- Crearea unei experiențe presupune completarea următoarelor câmpuri:
    - Punctul de plecare (A)
    - Punctul de sosire (B)
- Mijlocul de transport folosit: bus, metro, tram, etc.
- Ora plecare
- Durata călătoriei
- Gradul de aglomerare al mijlocului de transport
- Observații
- Nivelul de satisfacție (smiley faces)
- Modificarea intrărilor specifice utilizatorului
- Listarea tuturor experiențelor create de un utilizator
- Ștergerea unei experiențe

Modulul de Căutare 
- Modulul de căutare va trebui să permită utilizatorului introducerea unor cuvinte cheie, după care vor fi afișate rezultatele, sub formă de listă.
- Modulul va trebui să returneze rezultate relevante în funcție de locație, mijlocul de transport folosit sau destinație

Viziunea echipei:

  În cadrul Modulului Utilizator se vor stoca într-o bază de date toate conturile create prin intermediul interfeței de Log In/Register. Vom implementa un buton pentru opțiunea „Am uitat parola”, cu scopul resetării acesteia. Vom crea și câte un buton corespunzător creării unui cont/logării prin intermediul GMAIL, Facebook și Linkedin.
Va exista și un buton „Continuă ca anonim” care îi va permite utilizatorului anonim accesul la lista de recenzii, fără posibilitatea de a adăuga o recenzie nouă.

Cazul utilizatorului anonim:
  Utilizatorul vizualizează toate experiențele și are acces la un motor de căutare bazat pe cuvinte cheie care întoarce un set relevant de recenzii.

Cazul utilizatorului înregistrat:
  Pe lângă avantajele unui utilizator anonim, utilizatorul înregistrat dispune de opțiunea „Adaugă recenzie”, care îl va duce la un formular ce poate fi completat cu informațiile relevante.                       
  Utilizatorul are acces la toate recenziile sale (buton „Recenziile mele”), unde va putea modifica sau șterge orice recenzie.      
  Utilizatorul dispune de un meniu „Contul Meu”, în cadrul căruia poate modifica sau dezactiva contul.


