/* =========================================================
   DONNÉES DES NIVEAUX ET FORMULES
   ========================================================= */
var levelsData = {

  petite: {
    fr: {
      name: "Petite section",
      subtitle: "Maternelle — éveil aux langues",
      description: "Un premier contact tout en douceur avec le français et l'anglais, à travers des chansons, des jeux et des histoires simples.",
      formulas: [
        { name: "1 séance / semaine", desc: "4 séances par mois", oldPrice: 150, price: 99, save: 51,
          features: ["Français et Anglais", "Chansons, jeux et comptines", "Séances courtes et adaptées"] },
        { name: "2 séances / semaine", desc: "8 séances par mois", oldPrice: 260, price: 179, save: 81, featured: true,
          features: ["Français ET Anglais", "Chansons, jeux et comptines", "Rythme renforcé pour progresser vite"] },
        { name: "3 séances / semaine", desc: "12 séances par mois", oldPrice: 360, price: 249, save: 111,
          features: ["Français ET Anglais approfondi", "Activités variées chaque jour", "Suivi rapproché"] }
      ]
    },
    en: {
      name: "Early preschool",
      subtitle: "Preschool — language awareness",
      description: "A gentle first contact with French and English, through songs, games and simple stories.",
      formulas: [
        { name: "1 session / week", desc: "4 sessions per month", oldPrice: 150, price: 99, save: 51,
          features: ["French and English", "Songs, games and rhymes", "Short, age-appropriate sessions"] },
        { name: "2 sessions / week", desc: "8 sessions per month", oldPrice: 260, price: 179, save: 81, featured: true,
          features: ["French AND English", "Songs, games and rhymes", "Faster pace of progress"] },
        { name: "3 sessions / week", desc: "12 sessions per month", oldPrice: 360, price: 249, save: 111,
          features: ["In-depth French AND English", "Varied activities every day", "Close follow-up"] }
      ]
    },
    ar: {
      name: "القسم الصغير",
      subtitle: "الروض — التعرف على اللغات",
      description: "تواصل أول لطيف مع الفرنسية والإنجليزية، من خلال الأغاني والألعاب والقصص البسيطة.",
      formulas: [
        { name: "حصة واحدة / أسبوعيًا", desc: "4 حصص شهريًا", oldPrice: 150, price: 99, save: 51,
          features: ["الفرنسية والإنجليزية", "أغاني وألعاب وأناشيد", "حصص قصيرة ومناسبة للسن"] },
        { name: "حصتان / أسبوعيًا", desc: "8 حصص شهريًا", oldPrice: 260, price: 179, save: 81, featured: true,
          features: ["الفرنسية والإنجليزية معًا", "أغاني وألعاب وأناشيد", "وتيرة معززة للتقدم بسرعة"] },
        { name: "3 حصص / أسبوعيًا", desc: "12 حصة شهريًا", oldPrice: 360, price: 249, save: 111,
          features: ["فرنسية وإنجليزية معمّقة", "أنشطة متنوعة كل يوم", "متابعة عن قرب"] }
      ]
    }
  },

  grande: {
    fr: {
      name: "Grande section",
      subtitle: "Maternelle — premiers pas",
      description: "Les premiers mots, les premières phrases : une base solide avant l'entrée au primaire.",
      formulas: [
        { name: "1 séance / semaine", desc: "4 séances par mois", oldPrice: 220, price: 149, save: 71,
          features: ["Français ET Anglais", "Vocabulaire et premières phrases", "Activités ludiques chaque semaine"] },
        { name: "2 séances / semaine", desc: "8 séances par mois", oldPrice: 390, price: 269, save: 121, featured: true,
          features: ["Français ET Anglais", "Vocabulaire enrichi", "Suivi personnalisé"] },
        { name: "3 séances / semaine", desc: "12 séances par mois", oldPrice: 540, price: 379, save: 161,
          features: ["Français ET Anglais avancé", "Préparation à l'entrée au primaire", "Rapport mensuel aux parents"] }
      ]
    },
    en: {
      name: "Final preschool year",
      subtitle: "Preschool — first steps",
      description: "First words, first sentences: a solid foundation before starting primary school.",
      formulas: [
        { name: "1 session / week", desc: "4 sessions per month", oldPrice: 220, price: 149, save: 71,
          features: ["French AND English", "Vocabulary and first sentences", "Fun activities every week"] },
        { name: "2 sessions / week", desc: "8 sessions per month", oldPrice: 390, price: 269, save: 121, featured: true,
          features: ["French AND English", "Enriched vocabulary", "Personalized follow-up"] },
        { name: "3 sessions / week", desc: "12 sessions per month", oldPrice: 540, price: 379, save: 161,
          features: ["Advanced French AND English", "Ready for primary school", "Monthly report for parents"] }
      ]
    },
    ar: {
      name: "القسم الكبير",
      subtitle: "الروض — الخطوات الأولى",
      description: "الكلمات الأولى والجمل الأولى: أساس متين قبل الدخول إلى الابتدائي.",
      formulas: [
        { name: "حصة واحدة / أسبوعيًا", desc: "4 حصص شهريًا", oldPrice: 220, price: 149, save: 71,
          features: ["الفرنسية والإنجليزية معًا", "المفردات والجمل الأولى", "أنشطة ترفيهية كل أسبوع"] },
        { name: "حصتان / أسبوعيًا", desc: "8 حصص شهريًا", oldPrice: 390, price: 269, save: 121, featured: true,
          features: ["الفرنسية والإنجليزية معًا", "مفردات غنية", "متابعة شخصية"] },
        { name: "3 حصص / أسبوعيًا", desc: "12 حصة شهريًا", oldPrice: 540, price: 379, save: 161,
          features: ["فرنسية وإنجليزية متقدمة", "تحضير للدخول إلى الابتدائي", "تقرير شهري للآباء"] }
      ]
    }
  },

  primaire13: {
    fr: {
      name: "Primaire — 1ère à 3ème",
      subtitle: "Bases solides en français et anglais",
      description: "Lecture, écriture, grammaire : on construit des bases solides pour la suite de la scolarité.",
      formulas: [
        { name: "1 séance / semaine", desc: "4 séances par mois", oldPrice: 280, price: 199, save: 81,
          features: ["Français ET Anglais", "Lecture, écriture et grammaire", "Suivi des devoirs"] },
        { name: "2 séances / semaine", desc: "8 séances par mois", oldPrice: 500, price: 359, save: 141, featured: true,
          features: ["Français ET Anglais", "Lecture, écriture et grammaire", "Suivi des devoirs + rapport mensuel"] },
        { name: "3 séances / semaine", desc: "12 séances par mois", oldPrice: 700, price: 499, save: 201,
          features: ["Français ET Anglais renforcé", "Ateliers de conversation", "Suivi hebdomadaire détaillé"] }
      ]
    },
    en: {
      name: "Primary — grades 1 to 3",
      subtitle: "Solid foundations in French and English",
      description: "Reading, writing, grammar: building solid foundations for the rest of school life.",
      formulas: [
        { name: "1 session / week", desc: "4 sessions per month", oldPrice: 280, price: 199, save: 81,
          features: ["French AND English", "Reading, writing and grammar", "Homework support"] },
        { name: "2 sessions / week", desc: "8 sessions per month", oldPrice: 500, price: 359, save: 141, featured: true,
          features: ["French AND English", "Reading, writing and grammar", "Homework support + monthly report"] },
        { name: "3 sessions / week", desc: "12 sessions per month", oldPrice: 700, price: 499, save: 201,
          features: ["Reinforced French AND English", "Conversation workshops", "Detailed weekly follow-up"] }
      ]
    },
    ar: {
      name: "الابتدائي — من 1 إلى 3",
      subtitle: "أسس متينة في الفرنسية والإنجليزية",
      description: "القراءة والكتابة والقواعد: نبني أسسًا متينة لبقية المسار الدراسي.",
      formulas: [
        { name: "حصة واحدة / أسبوعيًا", desc: "4 حصص شهريًا", oldPrice: 280, price: 199, save: 81,
          features: ["الفرنسية والإنجليزية معًا", "القراءة والكتابة والقواعد", "متابعة الواجبات"] },
        { name: "حصتان / أسبوعيًا", desc: "8 حصص شهريًا", oldPrice: 500, price: 359, save: 141, featured: true,
          features: ["الفرنسية والإنجليزية معًا", "القراءة والكتابة والقواعد", "متابعة الواجبات + تقرير شهري"] },
        { name: "3 حصص / أسبوعيًا", desc: "12 حصة شهريًا", oldPrice: 700, price: 499, save: 201,
          features: ["فرنسية وإنجليزية معززة", "ورشات المحادثة", "متابعة أسبوعية مفصلة"] }
      ]
    }
  },

  primaire46: {
    fr: {
      name: "Primaire — 4ème à 6ème",
      subtitle: "Niveau avancé et préparation aux examens",
      description: "On consolide les acquis et on prépare sereinement les examens de fin d'année.",
      formulas: [
        { name: "1 séance / semaine", desc: "4 séances par mois", oldPrice: 350, price: 249, save: 101,
          features: ["Français ET Anglais avancé", "Préparation aux examens", "Rapport mensuel aux parents"] },
        { name: "2 séances / semaine", desc: "8 séances par mois", oldPrice: 630, price: 449, save: 181, featured: true,
          features: ["Français ET Anglais avancé", "Préparation aux examens", "Suivi personnalisé + devoirs"] },
        { name: "3 séances / semaine", desc: "12 séances par mois", oldPrice: 890, price: 629, save: 261,
          features: ["Français ET Anglais niveau expert", "Préparation intensive aux examens", "Suivi hebdomadaire détaillé"] }
      ]
    },
    en: {
      name: "Primary — grades 4 to 6",
      subtitle: "Advanced level and exam preparation",
      description: "We consolidate what's been learned and calmly prepare for the end-of-year exams.",
      formulas: [
        { name: "1 session / week", desc: "4 sessions per month", oldPrice: 350, price: 249, save: 101,
          features: ["Advanced French AND English", "Exam preparation", "Monthly report for parents"] },
        { name: "2 sessions / week", desc: "8 sessions per month", oldPrice: 630, price: 449, save: 181, featured: true,
          features: ["Advanced French AND English", "Exam preparation", "Personalized follow-up + homework"] },
        { name: "3 sessions / week", desc: "12 sessions per month", oldPrice: 890, price: 629, save: 261,
          features: ["Expert-level French AND English", "Intensive exam preparation", "Detailed weekly follow-up"] }
      ]
    },
    ar: {
      name: "الابتدائي — من 4 إلى 6",
      subtitle: "مستوى متقدم والتحضير للامتحانات",
      description: "نعزز المكتسبات ونحضّر بهدوء لامتحانات نهاية السنة.",
      formulas: [
        { name: "حصة واحدة / أسبوعيًا", desc: "4 حصص شهريًا", oldPrice: 350, price: 249, save: 101,
          features: ["فرنسية وإنجليزية متقدمة", "التحضير للامتحانات", "تقرير شهري للآباء"] },
        { name: "حصتان / أسبوعيًا", desc: "8 حصص شهريًا", oldPrice: 630, price: 449, save: 181, featured: true,
          features: ["فرنسية وإنجليزية متقدمة", "التحضير للامتحانات", "متابعة شخصية + الواجبات"] },
        { name: "3 حصص / أسبوعيًا", desc: "12 حصة شهريًا", oldPrice: 890, price: 629, save: 261,
          features: ["فرنسية وإنجليزية بمستوى خبير", "تحضير مكثف للامتحانات", "متابعة أسبوعية مفصلة"] }
      ]
    }
  }
};

var CHECK_ICON = '<svg class="icon" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>';
var STAR_ICON = '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.2l7.1-.6L12 2z"/></svg>';

function getLevelFromQuery() {
  var params = new URLSearchParams(window.location.search);
  var level = params.get('level');
  return levelsData[level] ? level : 'petite';
}

/* =========================================================
   RENDU DE LA PAGE NIVEAU
   ========================================================= */
window.renderLevelPage = function (lang) {
  var level = getLevelFromQuery();
  var dict = (typeof translations !== 'undefined') ? translations[lang] : null;
  var data = levelsData[level][lang] || levelsData[level].fr;

  var elName = document.getElementById('levelName');
  var elSubtitle = document.getElementById('levelSubtitle');
  var elDesc = document.getElementById('levelDesc');
  if (!elName || !elSubtitle || !elDesc) return;

  elName.textContent = data.name;
  elSubtitle.textContent = data.subtitle;
  elDesc.textContent = data.description;
  document.title = data.name + " — Meryem El-Mahdi";

  var badgeLabel = dict ? dict['pricing.badge'] : 'Le plus choisi';
  var perMonth = dict ? dict['pricing.per_month'] : '/mois';
  var chooseLabel = dict ? dict['pricing.choose'] : 'Choisir cette formule';
  var saveLabel = (lang === 'ar') ? 'توفرون' : (lang === 'en' ? 'You save' : 'Vous économisez');

  var container = document.getElementById('formulasContainer');
  if (!container) return;
  container.innerHTML = '';

  data.formulas.forEach(function (f) {
    var card = document.createElement('div');
    card.className = 'price-card' + (f.featured ? ' featured' : '');

    var featuresHtml = f.features.map(function (feat) {
      return '<li>' + CHECK_ICON + '<span>' + feat + '</span></li>';
    }).join('');

    card.innerHTML =
      (f.featured ? '<span class="badge">' + STAR_ICON + '<span>' + badgeLabel + '</span></span>' : '') +
      '<h4>' + f.name + '</h4>' +
      '<p class="desc">' + f.desc + '</p>' +
      '<span class="old-price">' + f.oldPrice + ' DH</span>' +
      '<div class="price">' + f.price + ' <small>DH<span>' + perMonth + '</span></small></div>' +
      '<span class="save">' + saveLabel + ' ' + f.save + ' DH</span>' +
      '<ul>' + featuresHtml + '</ul>' +
      '<a href="index.html#contact" class="btn btn-primary">' + chooseLabel + '</a>';

    container.appendChild(card);
  });
};
