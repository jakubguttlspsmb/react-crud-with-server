import "./MainPage.css";
import Content from "../../components/MainPage/Content";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="MainContainer">
      <div className="Header">
        <p className="">Výtejte v domově důchodců</p>
      </div>
      <div className="SecondContainer">
        <h2>
          Vítejte na webové stránce našeho Domova pro seniory se závislostmi
        </h2>
        <p className="TextSmall">
          Jsme rádi, že jste zavítali na stránku našeho Domova pro seniory,
          specializujícího se na poskytování péče pro seniory se závislostmi.
          <br />
          Naším posláním je nabídnout bezpečné a podpůrné prostředí, kde naši
          klienti mohou žít důstojně, s respektem a péčí, kterou si zaslouží.
          <br />
          Věříme, že každý člověk si zaslouží šanci na kvalitní život bez ohledu
          na svou minulost.
        </p>
        <h3 className="TextSmall">Naše služby jsou zaměřeny na:</h3>
        <p className="TextSmall">
          <b>Komplexní péči:</b> Nabízíme lékařskou, psychologickou a sociální
          podporu, přizpůsobenou individuálním potřebám každého obyvatele.
          <br />
          <b>Bezpečné prostředí:</b> Zajišťujeme bezpečné a pohodlné prostředí,
          kde se naši obyvatelé mohou cítit jako doma.
          <br />
          <b> Podporu a rehabilitaci:</b> Poskytujeme programy a aktivity
          zaměřené na rehabilitaci a zlepšení kvality života.
          <h4>Proč si vybrat právě nás?</h4>
          <b>Odborný personál:</b> Naši zaměstnanci jsou kvalifikovaní
          profesionálové s bohatými zkušenostmi v oblasti péče o seniory se
          závislostmi.
          <br />
          <b>Individuální přístup:</b> Každý obyvatel je pro nás jedinečný, a
          proto přistupujeme ke každému individuálně, s respektem k jeho
          potřebám a přáním.
          <br />
          <b>Komunita a podpora:</b> Podporujeme budování komunity a poskytujeme
          příležitosti k sociálnímu zapojení a vzájemné podpoře mezi obyvateli.
        </p>
      </div>
      <div className="ThirdContainer">
        <Link className="Text" to={"/createduch"}>
          <p>chcete si zde ulozit svého důchodce</p>
        </Link>
        <Link className="Text" to={"/duchs"}>
          <p>Tvoje úschovna důchodců</p>
        </Link>
      </div>
      <div>
        <p>
          Děkujeme, že jste si našli čas navštívit naši stránku. Pokud máte
          jakékoliv dotazy nebo byste rádi získali více informací, neváhejte nás
          kontaktovat. Jsme tu pro vás a vaše blízké. S úctou, Tým Domova pro
          seniory se závislostmi
        </p>
      </div>
    </div>
  );
}
