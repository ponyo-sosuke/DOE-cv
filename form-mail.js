// verifier si mail valide
function verifierMail(mail) {
    if ((mail.indexOf("@")>=0)&&(mail.indexOf(".")>=0)) {
      console.log(mail + " semble valide");
      return true;
    } else {
      console.log(mail + " n'est pas valide");
      alert("Mail invalide !");
      return false;
    }
  }

// noms met une majuscule

function nomPropre(mot) {
    var m=mot.charAt(0).toUpperCase() + mot.substring(1).toLowerCase();
    console.log(m);
    return m;
  }

