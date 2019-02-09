package com.example.eduskuntatulokset.service;

import com.example.eduskuntatulokset.models.Answers;
import org.springframework.stereotype.Service;
import weka.classifiers.meta.FilteredClassifier;
import weka.core.SerializationHelper;

import java.util.HashMap;

@Service
public class ClassificationService {

   /* private final static String classificationModel = "";
    private static FilteredClassifier classifier;

    {
        try {
            classifier = (FilteredClassifier) SerializationHelper.read(classificationModel);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/


    public static String classify(Answers answers) throws Exception {

       /* // initialize list containing all the attributes
        ArrayList<Attribute> attributes = new ArrayList<>();

        // initialize list containing all the nominal class values
        ArrayList<String> classVal = new ArrayList<>();
        classVal.add("Ei valittu");
        classVal.add("Valittu");

        // vaalipiiri
        ArrayList<String> vaalipiiri = new ArrayList<>();
        vaalipiiri.add("08 Kaakkois-Suomen vaalipiiri");
        vaalipiiri.add("12 Oulun vaalipiiri");
        vaalipiiri.add("07 Pirkanmaan vaalipiiri");
        vaalipiiri.add("13 Lapin vaalipiiri");
        vaalipiiri.add("11 Keski-Suomen vaalipiiri");
        vaalipiiri.add("10 Vaasan vaalipiiri");
        vaalipiiri.add("02 Uudenmaan vaalipiiri");
        vaalipiiri.add("01 Helsingin vaalipiiri");
        vaalipiiri.add("03 Varsinais-Suomen vaalipiiri");
        vaalipiiri.add("04 Satakunnan vaalipiiri");
        vaalipiiri.add("06 Hämeen vaalipiiri");
        vaalipiiri.add("09 Savo-Karjalan vaalipiiri");
        vaalipiiri.add("05 Ahvenanmaan maakunnan vaalipiiri");
        attributes.add(new Attribute("vaalipiiri", vaalipiiri));

        // ika
        attributes.add(new Attribute("ikä"));

        // sukupuoli
        ArrayList<String> sukupuoli = new ArrayList<>();
        sukupuoli.add("F");
        sukupuoli.add("M");
        sukupuoli.add("null");
        attributes.add(new Attribute("sukupuoli", sukupuoli));

        // toimin tällä hetkellä kansanedustajana
        attributes.add(new Attribute("Toimin tällä hetkellä kansanedustajana."));

        // kotikunta
        ArrayList<String> kotikunta = new ArrayList<>(Arrays.asList("Imatra", "Oulu", "Pirkkala", "Kemijärvi", "Jyväskylä", "Siikajoki", "Tampere", "Kotka", "Kokkola", "Kajaani", "null",
                "Sipoo", "Kirkkonummi", "Espoo", "Utsjoki", "Helsinki", "Mustasaari", "Somero", "Pälkäne", "Mikkeli", "Kankaanpää", "Jämsä", "\'Helsinki \'",
                "Ylöjärvi", "Tuusula", "Forssa", "Rauma", "Lohja", "Vaasa", "Loimaa", "Kauniainen", "Siikalatva", "Valtimo", "Janakkala", "Turku", "Raasepori",
                "Loviisa", "Riihimäki", "Hamina", "Vihti", "Rovaniemi", "Outokumpu", "Nousiainen", "Vantaa", "Hyvinkää", "Lappeenranta", "Uusikaupunki", "Hämeenlinna",
                "Nokia", "Kangasala", "Kempele", "Kaarina", "Loppi", "Kärsämäki", "Kuopio", "Savonlinna", "Kerava", "Närpiö", "Kristiinankaupunki", "Porvoo", "Joensuu",
                "Kouvola", "Hanko", "Luoto", "\'Bryssel / Espoo\'", "Järvenpää", "Iisalmi", "Kemi", "\'Sipoo Sibbo\'", "Masku", "Kittilä", "Lapinlahti", "Pori", "Lahti", "Uusikaarlepyy", "Kuusamo",
                "Espoo / Kotka", "Enontekiö", "Juva", "\'Liperi \'", "Seinäjoki", "Naantali", "Keuruu", "Nurmijärvi", "Aura", "Tornio", "Leppävirta", "Sastamala", "Viitasaari", "Virrat", "Kalajoki",
                "Äänekoski", "Lappajärvi", "Inari", "Mäntyharju", "Kokemäki", "Kauhajoki", "Huittinen", "Nakkila", "Marttila", "Kiuruvesi", "Laukaa", "Pietarsaari", "Ulvila", "Pieksämäki", "Mäntsälä",
                "Salo", "Lieto", "Kannus", "Eurajoki", "Asikkala", "Vimpeli", "Sievi", "Saarijärvi", "Ilomantsi", "\'Ruovesi \'", "Köyliö", "Karstula", "Hollola", "Raahe", "Savitaipale", "Varkaus", "Pyhäjoki",
                "Paltamo", "Siuntio", "Orimattila", "Rääkkylä", "Liminka", "Oulainen", "Tervola", "Pelkosenniemi", "Ilmajoki", "Akaa", "Kiiminki", "Kemiönsaari", "Kivijärvi", "Kurikka", "Pornainen",
                "Ruokolahti", "Eura", "Sysmä", "Nastola", "Parainen", "Valkeakoski", "Karkkila", "Pielavesi", "Keitele", "#NIMI ?", "Lieksa", "Hattula", "Suomussalmi", "Inkoo", "Heinola", "Taivalkoski",
                "Juuka", "Pomarkku", "Kuhmo", "Petäjävesi", "Vesilahti", "Ruovesi", "Teuva", "Suonenjoki", "Sauvo", "Taipalsaari", "Siilinjärvi", "Parikkala", "Lempäälä", "Sotkamo", "Simo", "Orivesi",
                "Jämijärvi", "Kustavi", "Kaustinen", "Rautalampi", "Luvia", "Virolahti", "Pyhäjärvi", "Kauhava", "Vieremä", "Konnevesi", "Iitti", "Kihniö", "Raisio", "Lapua", "Pihtipudas", "Muurame",
                "Hausjärvi", "Honkajoki", "Kangasniemi", "Parkano", "Pukkila", "Jokioinen", "Pyhtää", "Multia", "Hartola", "Pyhäntä", "Salo / Perniö", "Pertunmaa", "lappeenranta", "Toholampi", "Tammela",
                "Ylivieska", "Vöyri", "-", "Savukoski", "Helsingfors", "Hankasalmi", "422", "Tohmajärvi", "Alavus", "Rautavaara", "Alajärvi", "Muhos", "Uurainen", "Askola", "Mänttä - Vilppula", "Lapinjärvi",
                "Utajärvi", "Muonio", "Kitee", "Mynämäki", "Oripää", "Harjavalta", "Nurmes", "Punkalaidun", "Lestijärvi", "\'Borgå \'", "\'Pedersören kunta\'", "Laihia", "Maalahti", "Hirvensalmi", "Hämeenkyrö",
                "Ii", "\'Kotka \'", "Laitila", "Haapavesi", "Liperi", "Kolari", "\'Varkaus/Las Palmas\'", "Padasjoki", "Paimio", "Salla", "Jalasjärvi", "Ähtäri", "Kärkölä", "Åbo", "Kontiolahti", "\'Kerava \'", "Keminmaa",
                "Rantasalmi", "Rautjärvi", "Siikainen", "Sodankylä", "Toivakka", "Pello", "Heinävesi", "Tervo", "Juupajoki", "Ð’Ò‘Jyväskylä", "Säkylä", "Esbo", "Veteli", "Juankoski", "Tyrnävä", "Merikarvia",
                "\'Lahti (asuu osin Hämeenlinnassa)\'", "Botkyrka", "Kemi / Helsinki", "Luhanka", "Haapajärvi", "Nivala", "Korsnäs", "Kruunupyy"));
        attributes.add(new Attribute("kotikunta", kotikunta));

        // äidinkieli
        ArrayList<String> aidinkieli = new ArrayList<>(Arrays.asList("\'suomi \'", "null", "\'ruotsi \'", "muu"));
        attributes.add(new Attribute("Äidinkieli", aidinkieli));

        // tyonantaja
        ArrayList<String> tyonantaja = new ArrayList<>(Arrays.asList("\'julkinen \'", "\'ei työelämässä\'", "\'yksityinen \'", "null"));
        attributes.add(new Attribute("Työnantaja", tyonantaja));

        // ammattiasema
        ArrayList<String> ammattiasema = new ArrayList<>(Arrays.asList("\'korkeakoulututkintoa vaativa tehtävä \'", "\'asiantuntijatehtävä \'", "\'työntekijä \'", "\'maanviljelijä \'", "\'johtava asema \'", "\'yrittäjä \'", "null", "\'joku muu\'", "\'opiskelija \'", "\'eläkeläinen \'", "\'toimihenkilö \'", "\'taiteilija \'"));
        attributes.add(new Attribute("Ammattiasema", ammattiasema));

        // koulutus
        ArrayList<String> koulutus = new ArrayList<>(Arrays.asList("\'korkeakoulututkinto \'", "\'ammattitutkinto \'", "null", "\'ylioppilas \'", "\'joku muu\'", "\'peruskoulu \'"));
        attributes.add(new Attribute("Koulutus", koulutus));

        // uskonnollinen yhteisö
        ArrayList<String> uskonto = new ArrayList<>(Arrays.asList("\'evankelis-luterilainen kirkko \'", "\'ei kuulu kirkkoon tai muuhun uskonnolliseen yhteisöön\'", "null", "\'muu uskonnollinen yhteisö \'", "\'muu kristillinen kirkko tai yhteisö \'", "\'ortodoksinen kirkko \'"));
        attributes.add(new Attribute("Uskonnollinen yhteisö", uskonto));

        // poliittisen puolueen jäsen
        ArrayList<String> jasen = new ArrayList<>(Arrays.asList("\'kyllä \'", "null", "ei"));
        attributes.add(new Attribute("Poliittisen puolueen jäsen", jasen));

        // käytän vaaleihin rahaa
        ArrayList<String> raha = new ArrayList<>(Arrays.asList("\'10 000-20 000 euroa\'", "\'alle 1 000 euroa\'", "\'5 000-10 000 euroa\'", "\'1 000-5 000 euroa\'", "null", "\'20 000-50 000 euroa\'", "\'yli 50 000 euroa\'"));
        attributes.add(new Attribute("Käytän vaaleihin rahaa", raha));

        // vuositulot
        ArrayList<String> vuositulot = new ArrayList<>(Arrays.asList("\'30 000-50 000 euroa\'", "\'20 000-30 000 euroa\'", "null", "\'50 000-70 000 euroa\'", "\'alle 20 000 euroa\'", "\'70 000-100 000 euroa\'", "\'yli 100 000 euroa\'"));
        attributes.add(new Attribute("Vuositulot", vuositulot));

        ArrayList<String> ans = new ArrayList<>(Arrays.asList("\'jokseenkin samaa mieltä\'", "\'jokseenkin eri mieltä\'", "\'täysin eri mieltä\'", "\'täysin samaa mieltä\'", "null", "\'ohita kysymys\'"));
        attributes.add(new Attribute("127|Suomessa on liian helppo elää sosiaaliturvan varassa", ans));
        attributes.add(new Attribute("128|Kaupan ja muiden liikkeiden aukioloajat on vapautettava.", ans));
        attributes.add(new Attribute("129|Suomessa on siirryttävä perustuloon joka korvaisi nykyisen sosiaaliturvan vähimmäistason.", ans));
        attributes.add(new Attribute("130|Työntekijälle on turvattava lailla minimityöaika.", ans));
        attributes.add(new Attribute("131|Ansiosidonnaisen työttömyysturvan kestoa pitää lyhentää.", ans));
        attributes.add(new Attribute("132|Euron ulkopuolella Suomi pärjäisi paremmin.", ans));
        attributes.add(new Attribute("134|Valtion ja kuntien taloutta on tasapainotettava ensisijaisesti leikkaamalla menoja.", ans));
        attributes.add(new Attribute("135|Lapsilisiä on korotettava ja laitettava verolle.", ans));
        attributes.add(new Attribute("136|Suomella ei ole varaa nykyisen laajuisiin sosiaali- ja terveyspalveluihin.", ans));
        attributes.add(new Attribute("137|Nato-jäsenyys vahvistaisi Suomen turvallisuuspoliittista asemaa.", ans));
        attributes.add(new Attribute("138|Suomeen tarvitaan enemmän poliiseja.", ans));
        attributes.add(new Attribute("140|Venäjän etupiiripolitiikka on uhka Suomelle.", ans));
        attributes.add(new Attribute("141|Verkkovalvonnassa valtion turvallisuus on tärkeämpää kuin kansalaisten yksityisyyden suoja.", ans));
        attributes.add(new Attribute("142|Suomen on osallistuttava Isisin vastaiseen taisteluun kouluttamalla Irakin hallituksen joukkoja.", ans));
        attributes.add(new Attribute("143|Parantumattomasti sairaalla on oltava oikeus avustettuun kuolemaan.", ans));
        attributes.add(new Attribute("144|Terveys- ja sosiaalipalvelut on tuotettava ensijaisesti julkisina palveluina.", ans));
        attributes.add(new Attribute("145|Viranomaisten pitää puuttua lapsiperheiden ongelmiin nykyistä herkemmin.", ans));
        attributes.add(new Attribute("146|Vanhuksen ja hänen omaistensa vastuuta hoitokustannuksista on lisättävä.", ans));
        attributes.add(new Attribute("148|Ilmastonmuutoksen hillitseminen pitää asettaa teollisuuden kilpailukyvyn edelle.", ans));
        attributes.add(new Attribute("150|Suomen pitää ottaa suurempi vastuu EU:n alueelle tulevista turvapaikanhakijoista.", ans));
        attributes.add(new Attribute("151|On aika luopua ajatuksesta että koko Suomi on pidettävä asuttuna.", ans));

        ArrayList<String> ans1 = new ArrayList<>(Arrays.asList("Kyllä", "Ei", "null", "Tyhjä"));
        attributes.add(new Attribute("201|Suomen Nato-jäsenyydestä on järjestettävä kansanäänestys.", ans1));
        attributes.add(new Attribute("244|Hyväksytään periaatepäätös uuden ydinvoimalaitosyksikön rakentamisesta.", ans1));
        attributes.add(new Attribute("45|Tuloveroa alennetaan tasaisesti kaikissa tuloluokissa talouden elvyttämiseksi.", ans1));
        attributes.add(new Attribute("246|Edellisen eduskunnan hyväksymä lainmuutos samaa sukupuolta olevien avioliiton sallimisesta peruutetaan.", ans1));
        attributes.add(new Attribute("247|Mietojen viinien ja vahvojen oluiden myynti ruokakaupassa sallitaan.", ans1));
        attributes.add(new Attribute("248|Ruotsin kielen opiskelu muutetaan vapaaehtoiseksi.", ans1));

        attributes.add(new Attribute("class", classVal));

        Instances dataset = new Instances("Hackathon", attributes, 0);
        dataset.setClassIndex(dataset.numAttributes() - 1);

        DenseInstance denseInstance = new DenseInstance(43);

        dataset.add(denseInstance);

        double predictedValue = classifier.classifyInstance(dataset.firstInstance());
*/
        HashMap<Integer, String> res = new HashMap<>();
        res.put(1, "Sinut on valittu");
        res.put(2, "Sinut ei ole valittu");

        return Math.random() < 0.5 ? res.get(1) : res.get(2);
    }
}
