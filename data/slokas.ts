export interface Sloka {
  id: string;
  title: string;
  badge?: string;
  sanskrit: string;
  transliteration: string;
  audioFile?: string; // set in data/audio.ts (SLOKA_AUDIO) or inline below per sloka
}

export interface AgeGroup {
  id: string;
  label: string;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
  reciteCount: string;
  note?: string;
  slokas: Sloka[];
}

export const ageGroups: AgeGroup[] = [
  {
    id: "g1",
    label: "3–5 years",
    emoji: "🌱",
    title: "3 to 5 years",
    subtitle: "Short, simple slokas — focus on joyful recitation, not length",
    color: "#E3A94F",
    reciteCount: "Recite any 2 slokas from the list",
    note: "For this age group, parents are allowed to sit alongside to support confidence, and should be visible in the video.",
    slokas: [
      {
        id: "g1-guru-brahma",
        title: "Guru Brahma",
        badge: "Guru sloka (short)",
        sanskrit: `गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।
गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः ॥`,
        transliteration: `gururbrahmā gururviṣṇuḥ gururdevo maheśvaraḥ
guruḥ sākṣāt parabrahma tasmai śrī-gurave namaḥ`,
      },
      {
        id: "g1-dakshinamoorthy",
        title: "Dakshinamoorthy Sloka",
        badge: "Guru Purnima special",
        sanskrit: `गुरवे सर्वलोकानां भिषजे भवरोगिणाम् ।
निधये सर्वविद्यानां दक्षिणामूर्तये नमः ॥`,
        transliteration: `gurave sarva-lokānāṁ bhiṣaje bhava-rogiṇām
nidhaye sarva-vidyānāṁ dakṣiṇāmūrtaye namaḥ`,
      },
      {
        id: "g1-gurureva-gati",
        title: "Gurureva Gati",
        badge: "Guru sloka",
        sanskrit: `गुरुरेव गतिः गुरुमेव भजे गुरुणैव सहास्मि नमो गुरवे ।
न गुरोः परमं शिशुरस्मि गुरोः मतिरस्ति गुरौ मम पाहि गुरो ॥`,
        transliteration: `gurureva gatiḥ gurumeva bhaje guruṇaiva sahāsmi namo gurave
na guroḥ paramaṁ śiśurasmi guroḥ matirasti gurau mama pāhi guro`,
      },
      {
        id: "g1-akhanda-mandalakaram",
        title: "Akhanda Mandalakaram",
        badge: "Guru sloka",
        sanskrit: `अखण्ड-मण्डलाकारम् व्याप्तम् येन चराचरम् ।
तत्पदम् दर्शितम् येन तस्मै श्री गुरवे नमः ॥`,
        transliteration: `akhaṇḍa-maṇḍalākāram vyāptam yena carācaram
tat-padam darśitam yena tasmai śrī gurave namaḥ`,
      },
      {
        id: "g1-agnyana-timiranthasya",
        title: "Agnyana Timiranthasya",
        badge: "Guru sloka",
        sanskrit: `अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया ।
चक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः ॥`,
        transliteration: `ajñāna-timirāndhasya jñānāñjana-śalākayā
cakṣur-unmīlitaṁ yena tasmai śrī-gurave namaḥ`,
      },
    ],
  },
  {
    id: "g2",
    label: "6–10 years",
    emoji: "🌿",
    title: "6 to 10 years",
    subtitle: "Slightly longer slokas — focus on pronunciation and rhythm",
    color: "#C8862B",
    reciteCount: "Recite any 1 sloka from the list",
    note: "At this age, encourage steady pace and clear word breaks over speed. If a parent needs to sit beside the child for any special reason, prior permission must be requested by raising the reason with the team, which will be discussed and responded to. If approved, the parent should be visible in the video.",
    slokas: [
      {
        id: "g2-shankaracharya-varyam",
        title: "Sri Shankaracharya Varyam",
        badge: "Sri Shankaracharya Stavah",
        sanskrit: `॥ श्रीशङ्कराचार्यस्तवः ॥
श्रीशङ्कराचार्यवर्यं सर्वलोकैकवन्द्यं भजे देशिकेन्द्रम्
धर्मप्रचारेऽतिदक्षं योगिगोविन्दपादाप्तसन्यासदीक्षम् ।
दुर्वादिगर्वापनोदं पद्मपादादिशिष्यालिसंसेव्यपादम् ॥1॥ (श्रीशङ्कराचार्यवर्यं)

शङ्काद्रिदम्भोलिलीलं किङ्कराशेषशिष्यालि सन्त्राणशीलम् ।
बालार्कनीकाशचेलं बोधिताशेषवेदान्त गूढार्थजालम् ॥2॥ (श्रीशङ्कराचार्यवर्यं)

रुद्राक्षमालाविभूषं चन्द्रमौलीश्वराराधनावाप्ततोषम् ।
विद्राविताशेषदोषं भद्रपूगप्रदं भक्तलोकस्य नित्यम् ॥3॥ (श्रीशङ्कराचार्यवर्यं)

पापाटवीचित्रभानुं ज्ञानदीपेन हार्दं तमो वारयन्तम् ।
द्वैपायनप्रीतिभाजं सर्वतापापहामोघबोधप्रदं तम् ॥4॥ (श्रीशङ्कराचार्यवर्यं)

राजाधिराजाभिपूज्यं रम्यशृङ्गाद्रिवासैकलोलं यतीड्यम् ।
राकेन्दुसङ्काशवक्त्रं रत्नगर्भेभवक्त्राङ्घ्रिपूजानुरक्तम् ॥5॥ (श्रीशङ्कराचार्यवर्यं)

श्रीभारतीतीर्थगीतं शङ्करार्यस्तवं यः पठेद्भक्तियुक्तः ।
सोऽवाप्नुयात्सर्वमिष्टं शङ्कराचार्यवर्यप्रसादेन तूर्णम् ॥6॥ (श्रीशङ्कराचार्यवर्यं)`,
        transliteration: `śrī śaṅkarācārya-varyaṁ sarva-lokaika-vandyaṁ bhaje deśikendram
dharma-pracāre'ti-dakṣaṁ yogi-govinda-pādāpta-sanyāsa-dīkṣam
durvādi-garvāpanodaṁ padmapādādi-śiṣyāli-saṁsevya-pādam ॥1॥ (śrī śaṅkarācārya-varyaṁ)

śaṅkādri-dambholi-līlaṁ kiṅkarāśeṣa-śiṣyāli santrāṇa-śīlam
bālārka-nīkāśa-celaṁ bodhitāśeṣa-vedānta gūḍhārtha-jālam ॥2॥ (śrī śaṅkarācārya-varyaṁ)

rudrākṣa-mālā-vibhūṣaṁ candramaulīśvarārādhanāvāpta-toṣam
vidrāvitāśeṣa-doṣaṁ bhadra-pūga-pradaṁ bhakta-lokasya nityam ॥3॥ (śrī śaṅkarācārya-varyaṁ)

pāpāṭavī-citra-bhānuṁ jñāna-dīpena hārdaṁ tamo vārayantam
dvaipāyana-prīti-bhājaṁ sarva-tāpāpahāmogha-bodha-pradaṁ tam ॥4॥ (śrī śaṅkarācārya-varyaṁ)

rājādhirājābhipūjyaṁ ramya-śṛṅgādri-vāsaika-lolaṁ yatīḍyam
rākendu-saṅkāśa-vaktraṁ ratna-garbhebha-vaktrāṅghri-pūjānuraktam ॥5॥ (śrī śaṅkarācārya-varyaṁ)

śrī-bhāratī-tīrtha-gītaṁ śaṅkarārya-stavaṁ yaḥ paṭhed bhakti-yuktaḥ
so'vāpnuyāt sarvam iṣṭaṁ śaṅkarācārya-varya-prasādena tūrṇam ॥6॥ (śrī śaṅkarācārya-varyaṁ)`,
      },
      {
        id: "g2-dakshinamurti-pancharatnam",
        title: "Sri Dakshinamurti Pancharatnam",
        badge: "Sri Dakshinamurti Pancharatnam",
        sanskrit: `1

Mudrāṁ bhadrārtha-dātrīṁ sa-paraśu-hariṇā bāhubhir bāhum ekaṁ
Jānv-āsaktaṁ dadhāno bhujaga-vara-samābaddha-kakṣyo vaṭādhaḥ |
Āsīnaś candra-khaṇḍa-pratighaṭita-jaṭā-kṣīra-gauras tri-netro
Dadyād ādyaḥ prasanno mama mudam atulāṁ Dakṣiṇāmūrtir īśaḥ || 1 ||

2

Bhasma-vyāpāṇḍurāṅgaḥ śaśi-śakala-dharo jñāna-mudrākṣa-mālā-
Vīṇā-pustair virājat-kara-kamala-dharaḥ yoga-paṭṭābhirāmaḥ |
Vyākhyā-pīṭhe niṣaṇṇo muni-vara-nikaraiḥ sevitaḥ suprasanno
Dadyād ādyaḥ prasanno mama mudam atulāṁ Dakṣiṇāmūrtir īśaḥ || 2 ||

3

Vyālambī-nīla-jūṭaḥ nava-kamala-dala-spardhi-netraḥ prasannaḥ
Vyākhyā-mudrāṁ karābjair dadhad apara-karaiḥ pustakaṁ bījapūram |
Baddhvā nāgādhi-rājaṁ kaṭi-taṭa-vilasaj-jaṭilaḥ śānta-mūrtiḥ
Dadyād ādyaḥ prasanno mama mudam atulāṁ Dakṣiṇāmūrtir īśaḥ || 3 ||

4

Mudrā-pustaka-vahni-nāga-vilasad-bāhuṁ prasannānanaṁ
Muktā-hāra-vibhūṣaṇaṁ śaśi-kalā-bhāsvat-kirīṭojjvalam |
Ajñānāpahatiṁ janasya kurute yaḥ sadgurur maunataḥ
Dadyād ādyaḥ prasanno mama mudam atulāṁ Dakṣiṇāmūrtir īśaḥ || 4 ||

5

Sphāṭika-rajata-varṇaṁ mauktikīm akṣa-mālāṁ
Amṛta-kalaśa-vidyāṁ jñāna-mudrāṁ karāgre |
Dadhatam uraga-kakṣaṁ candra-cūḍaṁ tri-netraṁ
Vividha-bhūṣaṇa-yuktaṁ Dakṣiṇāmūrtim īḍe || 5 || `,
        transliteration: `mudrāṁ bhadrārtha-dātrīṁ sa-paraśu-hariṇā bāhubhir-bāhu-mekaṁ
jānvāsaktaṁ dadhāno bhujaga-vara-samā-baddha-kakṣyo vata-adhaḥ
āsīnaś-candrakhaṇḍa-pratiṣṭhita-jaṭā-kṣīra-gauraś-tri-netro
dadyād-ādyaḥ prasanno mama muda-matulāṁ dakṣiṇā-mūrti-rīśaḥ ॥1॥

bhasma-vyāpā-ṇḍu-rāṅgaḥ śaśi-śakala-dharo jñāna-mudrā-kṣa-mālā-
vīṇā-pustair-virājet-kara-kamala-dharaḥ yoga-pattā-bhirāmaḥ
vyākhyā-pīṭhe niṣaṇṇo muni-vara-nikara-iḥ sevitaḥ su-prasanno
dadyād-ādyaḥ prasanno mama muda-matulāṁ dakṣiṇā-mūrti-rīśaḥ ॥2॥

vyālambi-nīla-jūtaḥ nava-kamala-dala-spardhi-nettraḥ prasannaḥ
vyākhyā-mudrāṁ karābjai-rdhadha-para-karai-ḥ pustaka-ṁ bīja-pūram
baddh-vā nāgā-dhirājaṁ kati-taṭa-vilasa-jjatilaḥ śānta-mūrtiḥ
dadyād-ādyaḥ prasanno mama muda-matulāṁ dakṣiṇā-mūrti-rīśaḥ ॥3॥

mudrā-pustaka-vahni-nāga-vilasad-bāhuṁ prasannāna-naṁ
muktā-hāra-vibhūṣaṇaṁ śaśi-kalā-bhāsvat-kirīṭ-ojjvalam
ajñānā-paha-ti-ṁ janasya kuruute yaḥ sad-gurur-maunataḥ
dadyād-ādyaḥ prasanno mama muda-matulāṁ dakṣiṇā-mūrti-rīśaḥ ॥4॥

sphāṭika-rajata-varṇaṁ mauktikī-makṣa-mālāṁ
amṛta-kalaśa-vidyāṁ jñāna-mudrāṁ karāgre
dhadhat-muraga-kakṣaṁ candra-cūḍaṁ tri-netraṁ
vividha-bhūṣaṇa-yuktaṁ dakṣiṇā-mūrti-mīḍe ॥5॥`,
      },
      {
        id: "g2-bhagavannama-bhodendra-pancharatnam",
        title: "Sri Bhagavannama Bhodendra Pancharatnam",
        badge: "Sri Bhagavannama Bhodendra Pancharatnam",
        sanskrit: `१.जय जय श्रीभगवन्नामभोदेन्द्र गुरो प्रभो ।
नामसिद्धान्तनिरत करुणासागर प्रभो ॥

रामनामप्रचारार्थं देहं धारितवानसि ।
भक्तानां तारकं नाम दत्त्वा त्रातुं कलौ युगे ॥

२.भज रामं भज कृष्णं भज रे पाण्डुरङ्गकम् ।
इति लोकान् समादिश्य नाममार्गं प्रदर्शयन् ॥

अज्ञानतिमिरं हन्तुं नामदीपं प्रकाशितम् ।
बोधेन्द्रगुरुवर्यं तं प्रणमामि मुहुर्मुहुः ॥

३.नामसंकीर्तनानन्दलहरीमग्नमानसम् ।
भक्ताभीष्टप्रदातारं दयानिधिमनुत्तमम् ॥

गोविन्देति सदोच्चारप्रेमबाष्पविलोचनम् ।
बोधेन्द्रं सद्गुरुं वन्दे भक्तानुग्रहकारकम् ॥

४.कलौ केवलनामैव मुक्तिदं इति निश्चयम् ।
शास्त्रयुक्त्या समादाय लोकानां हितकाम्यया ॥

रामनामरसं पीत्वा ब्रह्मानन्दं प्रपेदिवान् ।
तं बोधेन्द्रमहं वन्दे काञ्चीकामकोटिगुरुम् ॥

५.भगवन्नामसिद्धान्तस्थापनाचार्यसत्तमम् ।
भक्तिसंप्रदायदीपं शरण्यं करुणानिधिम् ॥

गोविन्दनामसङ्कीर्तनप्रेमवारिनिधिं गुरुम् ।
श्रीभोदेन्द्रं नमस्यामि मोक्षमार्गप्रदर्शकम् ॥ `,
        transliteration: `1

Jaya jaya Śrī-Bhagavannāma-Bodhendra guro prabho |
Nāma-siddhānta-nirata karuṇā-sāgara prabho ||

Rāma-nāma-pracārārthaṁ dehaṁ dhāritavān asi |
Bhaktānāṁ tārakaṁ nāma dattvā trātuṁ kalau yuge ||

2

Bhaja Rāmaṁ bhaja Kṛṣṇaṁ bhaja re Pāṇḍuraṅgakam |
Iti lokān samādiśya nāma-mārgaṁ pradarśayan ||

Ajñāna-timiraṁ hantuṁ nāma-dīpaṁ prakāśitam |
Bodhendra-guru-varyaṁ taṁ praṇamāmi muhur muhuḥ ||

3

Nāma-saṅkīrtanānanda-laharī-magna-mānasam |
Bhaktābhīṣṭa-pradātāraṁ dayānidhim anuttamam ||

Govindeti sadoccāra-prema-bāṣpa-vilocanam |
Bodhendraṁ sad-guruṁ vande bhaktānugraha-kārakam ||

4

Kalau kevala-nāmaiva muktidaṁ iti niścayam |
Śāstra-yuktyā samādāya lokānāṁ hita-kāmyayā ||

Rāma-nāma-rasaṁ pītvā brahmānandaṁ prapedivān |
Taṁ Bodhendram ahaṁ vande Kāñcī-Kāmakoṭi-gurum ||

5

Bhagavannāma-siddhānta-sthāpanācārya-sattamam |
Bhakti-sampradāya-dīpaṁ śaraṇyaṁ karuṇā-nidhim ||

Govinda-nāma-saṅkīrtana-prema-vāri-nidhiṁ gurum |
Śrī-Bhodendraṁ namasyāmi mokṣa-mārga-pradarśakam ||`,
      },
      {
        id: "g2-shirdi-sai-pancharatnam",
        title: "Sri Shirdi Sai Pancharatnam",
        badge: "Sri Shirdi Sai Pancharatnam",
        sanskrit: `१.प्रत्यक्षा दैवतं त्वं हि सर्वेषां साईनाथ ।
शरणं ते जगन्नाथ श्रीशिरडीपुरेश्वर ॥

भक्ताभीष्टप्रदं देवं सच्चिदानन्दरूपिणम् ।
दत्तात्रेयावतारं त्वां साईनाथं नमाम्यहम् ॥

२.करुणासागरं देवं भक्तानुग्रहकारकम् ।
सर्वरोगहरं वन्दे साईनाथं दयानिधिम् ॥

अनाथनाथं दीनबन्धुं भक्तरक्षणतत्परम् ।
शिरडीवासिनं देवं साईनाथं नमाम्यहम् ॥

३.नित्यं स्मरामि देवेशं साईनाथं जगद्गुरुम् ।
भक्तहृत्पद्मवासं तं भवरोगविनाशनम् ॥

ज्ञानवैराग्यदातारं भक्तिसौख्यप्रदायकम् ।
सर्वमङ्गलदातारं साईनाथं नमाम्यहम् ॥

४.यस्य दर्शनमात्रेण नश्यन्ति व्याधिकोटयः ।
पापानि विलयं यान्ति साईनाथं नमाम्यहम् ॥

सर्वसंकटनाशाय सर्वसौभाग्यदायकम् ।
भुक्तिमुक्तिप्रदातारं साईनाथं नमाम्यहम् ॥

५.श्रीसच्चिदानन्दसद्गुरुं साईनाथं दयानिधिम् ।
भक्तानुग्रहकर्तारं शिरडीवासिनं भजे ॥

त्वमेव माता च पिता त्वमेव
त्वमेव बन्धुश्च सखा त्वमेव ।
त्वमेव विद्या द्रविणं त्वमेव
त्वमेव सर्वं मम साईदेव ॥ `,
        transliteration: `1

Pratyakṣā daivataṁ tvaṁ hi sarveṣāṁ Sāyinātha |
Śaraṇaṁ te Jagannātha Śrī-Śirḍī-pureśvara ||

Bhaktābhīṣṭa-pradaṁ devaṁ sac-cid-ānanda-rūpiṇam |
Dattātreyāvatāraṁ tvāṁ Sāyināthaṁ namāmy aham ||

2

Karuṇā-sāgaraṁ devaṁ bhaktānugraha-kārakam |
Sarva-roga-haraṁ vande Sāyināthaṁ dayānidhim ||

Anātha-nāthaṁ dīna-bandhuṁ bhakta-rakṣaṇa-tatparam |
Śirḍī-vāsinaṁ devaṁ Sāyināthaṁ namāmy aham ||

3

Nityaṁ smarāmi deveśaṁ Sāyināthaṁ jagad-gurum |
Bhakta-hṛt-padma-vāsaṁ taṁ bhava-roga-vināśanam ||

Jñāna-vairāgya-dātāraṁ bhakti-saukhya-pradāyakam |
Sarva-maṅgala-dātāraṁ Sāyināthaṁ namāmy aham ||

4

Yasya darśana-mātreṇa naśyanti vyādhi-koṭayaḥ |
Pāpāni vilayaṁ yānti Sāyināthaṁ namāmy aham ||

Sarva-saṅkaṭa-nāśāya sarva-saubhāgya-dāyakam |
Bhukti-mukti-pradātāraṁ Sāyināthaṁ namāmy aham ||

5

Śrī-sac-cid-ānanda-sad-guruṁ Sāyināthaṁ dayānidhim |
Bhaktānugraha-kartāraṁ Śirḍī-vāsinaṁ bhaje ||

Tvam eva mātā ca pitā tvam eva
Tvam eva bandhuś ca sakhā tvam eva |
Tvam eva vidyā draviṇaṁ tvam eva
Tvam eva sarvaṁ mama Sāyideva ||`,
      },
      {
        id: "g2-maha-periyava-panchakam",
        title: "Sri Maha periyava panchakam",
        badge: "Sri Maha periyava panchakam",
        sanskrit: `शिवगुरु नन्दन शङ्कर शोभित
काम पदाङ्गकित पीठपथे
नृपजन वन्दित विश्व मनोहर
सर्व कलाधर पूततनो
श्रुतिमत पोषक दुर्मत शिक्षक
सज्जन रक्षक कल्पतरो
जयजयहे शशि शेखर देशिक
काञ्ची मठेश्वर पालयमाम् ॥१॥

श्रीधर शशिधर वेद विकल्पन
दोष निवारण धीरमते
रघुपति पूजित लिङ्ग समर्च्चन
जात मनोहर शीलतनो
बहुविध पण्डित मण्डल मण्डित
संसति पूजित वेदनिधे
जयजयहे शशि शेखर देशिक
काञ्ची मठेश्वर पालयमाम् ॥२॥

हिमगिरि संभव दिव्य सरिद्वर
शोभिशिरोवर भक्ति निधे
निज सकलागम शास्त्र विमर्शक
पण्डित मण्डल वन्द्यतनो
भूतजन रञ्जक दुर्जन मानस
दोष निवारक वाक्यरथे
जयजयहे शशि शेखर देशिक
काञ्ची मठेश्वर पालयमाम् ॥३॥

मधुसम भाषण दुर्मत शोषण
सज्जन पोषण धीरमते
शुक मुनि तातज सूत्र विमर्शक
शङ्कर बोधित भाष्यरथे
निगम सुलक्षण रक्षण पण्डित
भास्वर मण्डल पोषकहे
जयजयहे शशि शेखर देशिक
काञ्ची मठेश्वर पालयमाम् ॥४॥

रतिपति सुन्दर रूपमनोहर
पुतजन मानस सारसहे
तुहिन धराध्रि सुपुत्रयाबि मोहित
काम कलेश्वर पूजकहे
कनकधराधर कार्मुक नन्दित
कामकला दृढ भक्तनिधे
जयजयहे शशि शेखर देशिक
काञ्ची मठेश्वर पालयमाम् ॥५॥`,
        transliteration: `śiva-guru nandan śaṅkar śobhit
kāma padāṅgkit pīṭhpathe
nṛpajan vandit viśva manohār
sarv kalādhār pūttano
śrutimatt poṣak durmat śikṣak
sajjan rakṣak kalpatro
jayjayahe śaśi śekhar deśik
kāñchī maṭheśvar pālayamām ॥1॥

śrīdhār śaśidhār ved vikalpan
doṣ nivāraṇ dhīrmte
raghupati pūjit liṅg samarchān
jāt manohār śīltno
bahuvdh pānditt mandal manditt
sanstti pūjit vednidhе
jayjayahe śaśi śekhar deśik
kāñchī maṭheśvar pālayamām ॥2॥

himgiri sambhav divy saridvār
śobhiśirovār bhakti nidhе
nij sakalāgam śāstr vimarśak
pānditt mandal vandytno
bhūtjan rañjak durjan māns
doṣ nivārak vākyrathe
jayjayahe śaśi śekhar deśik
kāñchī maṭheśvar pālayamām ॥3॥

madhusam bhāṣaṇ durmat śoṣaṇ
sajjan poṣaṇ dhīrmte
śuk muni tātaj sūtr vimarśak
śaṅkar bodhit bhāṣyrathe
nigam sulakṣaṇ rakṣaṇ pānditt
bhāsvār mandal poṣkhe
jayjayahe śaśi śekhar deśik
kāñchī maṭheśvar pālayamām ॥4॥

rtipti sundar rūpmanohār
putjan māns sārshe
tuhin dharādhri suputryābі mohit
kām kaleśvār pūjkhe
kankdhārādhār kārmuk nanditt
kāmklā dṛḍh bhaktnidhe
jayjayahe śaśi śekhar deśik
kāñchī maṭheśvar pālayamām ॥5॥`,
      },

    ],
  },
  {
    id: "g3",
    label: "11–14 years",
    emoji: "🌳",
    title: "11 to 14 years",
    subtitle: "Longer, more advanced verses — focus on clarity and intonation",
    color: "#7A1F2B",
    reciteCount: "Recite any 1 sloka from the list",
    note: "Older children are encouraged to also understand and share the meaning of their chosen verse briefly, if comfortable.",
    slokas: [
      {
        id: "g3-dakshinamurti-stotram",
        title: "Sri Dakshinamurti stotram",
        badge: "Sri Dakshinamurti stotram",
        sanskrit: `
मौनव्याख्या प्रकटित परब्रह्मतत्त्वं युवानं
वर्षिष्ठांते वसद् ऋषिगणौः आवृतं ब्रह्मनिष्ठैः ।
आचार्येन्द्रं करकलित चिन्मुद्रमानंदमूर्तिं
स्वात्मारामं मुदितवदनं दक्षिणामूर्तिमीडे ॥

विश्वं दर्पणदृश्यमाननगरीतुल्यं निजान्तर्गतं
पश्यन्नात्मनि मायया बहिरिवोद्भूतं यथा निद्रया ।
यः साक्षात्कुरुते प्रबोधसमये स्वात्मानमेवाद्वयं
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥१॥

बीजस्याऽन्तरिवाङ्कुरो जगदिदं प्राङ्गनिर्विकल्पं पुनः
मायाकल्पितदेशकालकलना वैचित्र्यचित्रीकृतम् ।
मायावीव विजृम्भयत्यपि महायोगीव यः स्वेच्छया
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥२॥

यस्यैव स्फुरणं सदात्मकमसत्कल्पार्थकं भासते
साक्षात्तत्त्वमसीति वेदवचसा यो बोधयत्याश्रितान् ।
यत्साक्षात्करणाद्भवेन्न पुनरावृत्तिर्भवाम्भोनिधौ
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥३॥

नानाच्छिद्रघटोदरस्थितमहादीपप्रभा भास्वरं
ज्ञानं यस्य तु चक्षुरादिकरणद्वारा वहिः स्पन्दते ।
जानामीति तमेव भान्तमनुभात्येतत्समस्तं जगत्
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥४॥

देहं प्राणमपीन्द्रियाण्यपि चलां बुद्धिं च शून्यं विदुः
स्त्रीबालान्धजडोपमास्त्वहमिति भ्रान्ता भृशं वादिनः ।
मायाशक्तिविलासकल्पितमहाव्यामोहसंहारिणो
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥५॥

राहुग्रस्तदिवाकरेन्दुसदृशो मायासमाच्छादनात्
सन्मात्रः करणोपसंहरणतो योऽभूत्सुषुप्तः पुमान् ।
प्रागस्वाप्समिति प्रबोधसमये यः प्रत्यभिज्ञायते
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥६॥

बाल्यादिष्वपि जाग्रदादिषु तथा सर्वास्ववस्थास्वपि
व्यावृत्तास्वनुवर्तमानमहमित्यन्तः स्फुरन्तं सदा ।
स्वात्मानं प्रकटीकरोति भजतां यो मुद्रयाभद्रया
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥७॥

विश्वं पश्यति कार्यकारणतया स्वस्वामिसम्बन्धतः
शिष्याचार्यतया तथैव पितृपुत्राद्यात्मना भेदतः ।
स्वप्ने जाग्रति वा य एष पुरुषो मायापरिभ्रामितः
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥८॥

भूरम्भांस्यनलोऽनिलोऽम्बरमहर्नाथो हिमांशु पुमान्
इत्याभाति चराचरात्मकमिदं यस्यैव मूर्त्यष्टकम्
नान्यत् किञ्चन विद्यते विमृशतां यस्मात्परस्माद्विभोः
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥९॥

सर्वात्मत्वमिति स्फुटीकृतमिदं यस्मादमुष्मिन् स्तवे
तेनास्य श्रवणात्तदर्थमननाद्ध्यानाच्च संकीर्तनात् ।
सर्वात्मत्वमहाविभूतिसहितं स्यादीश्वरत्वं स्वतः
सिद्ध्येत्तत्पुनरष्टधा परिणतं चैश्वर्यमव्याहतम् ॥१०॥

॥ इति श्रीमच्छङ्कराचार्यविरचितं दक्षिणामुर्तिस्तोत्रं सम्पूर्णम् ॥`,
        transliteration: `Dhyāna Śloka

Mauna-vyākhyā prakaṭita parabrahma-tattvaṁ yuvānaṁ
Varṣiṣṭhānte vasad ṛṣi-gaṇair āvṛtaṁ brahma-niṣṭhaiḥ |
Ācāryendraṁ kara-kalita cin-mudram ānanda-mūrtiṁ
Svātmārāmaṁ mudita-vadanaṁ Dakṣiṇāmūrtim īḍe ||

Verse 1

Viśvaṁ darpaṇa-dṛśyamāna-nagarī-tulyaṁ nijāntargataṁ
Paśyann ātmani māyayā bahir ivodbhūtaṁ yathā nidrayā |
Yaḥ sākṣāt kurute prabodha-samaye svātmānam evādvayaṁ
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 1 ||

Verse 2

Bījasyāntar ivāṅkuro jagad idaṁ prāṅ-nirvikalpaṁ punaḥ
Māyā-kalpita-deśa-kāla-kalanā-vaicitrya-citrīkṛtam |
Māyāvīva vijṛmbhayaty api mahā-yogīva yaḥ svecchayā
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 2 ||

Verse 3

Yasyaiva sphuraṇaṁ sadātmakam asat-kalpārthakaṁ bhāsate
Sākṣāt tattvam asīti veda-vacasā yo bodhayaty āśritān |
Yat-sākṣāt-karaṇād bhaven na punar āvṛttir bhavāmbhonidhau
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 3 ||

Verse 4

Nānā-cchidra-ghaṭodara-sthita-mahā-dīpa-prabhā-bhāsvaraṁ
Jñānaṁ yasya tu cakṣur-ādi-karaṇa-dvārā bahiḥ spandate |
Jānāmīti tam eva bhāntam anubhāty etat samastaṁ jagat
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 4 ||

Verse 5

Dehaṁ prāṇam apīndriyāṇy api calāṁ buddhiṁ ca śūnyaṁ viduḥ
Strī-bālāndha-jaḍopamās tv aham iti bhrāntā bhṛśaṁ vādinaḥ |
Māyā-śakti-vilāsa-kalpita-mahā-vyāmoha-saṁhāriṇe
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 5 ||

Verse 6

Rāhu-grasta-divākarendu-sadṛśo māyā-samācchādanāt
San-mātraḥ karaṇopasaṁharaṇato yo'bhūt suṣuptaḥ pumān |
Prāg asvāpsam iti prabodha-samaye yaḥ pratyabhijñāyate
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 6 ||

Verse 7

Bālyādiṣv api jāgradādiṣu tathā sarvāsv avasthāsv api
Vyāvṛttāsv anuvartamānam aham ity antaḥ sphurantaṁ sadā |
Svātmānaṁ prakaṭīkaroti bhajatāṁ yo mudrayā bhadrayā
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 7 ||

Verse 8

Viśvaṁ paśyati kārya-kāraṇatayā sva-svāmi-sambandhataḥ
Śiṣyācāryatayā tathaiva pitṛ-putrādy-ātmanā bhedataḥ |
Svapne jāgrati vā ya eṣa puruṣo māyā-paribhrāmitaḥ
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 8 ||

Verse 9

Bhūr ambhāṁsy analo'nilo'mbaram ahar-nātho himāṁśuḥ pumān
Ity ābhāti carācarātmakam idaṁ yasyaiva mūrtyaṣṭakam |
Nānyat kiñcana vidyate vimṛśatāṁ yasmāt parasmād vibhoḥ
Tasmai śrī-guru-mūrtaye nama idaṁ śrī-Dakṣiṇāmūrtaye || 9 ||

Verse 10 (Phalaśruti)

Sarvātmatvam iti sphuṭīkṛtam idaṁ yasmād amuṣmin stave
Tenāsya śravaṇāt tad-artha-mananād dhyānāc ca saṅkīrtanāt |
Sarvātmatva-mahā-vibhūti-sahitaṁ syād īśvaratvaṁ svataḥ
Siddhyet tat punar aṣṭadhā pariṇataṁ caiśvaryam avyāhatam || 10 ||`,
      },
      {
        id: "g3-totakashtakam",
        title: "Totakashtakam",
        badge: "Totakashtakam",
        sanskrit: ` विदिताखिलशास्त्रसुधाजलधे महितोपनिषत् कथितार्थनिधे ।
        हृदये कलये विमलं चरणं भव शंकर देशिक मे शरणम् ॥ १॥
        
        करुणावरुणालय पालय मां भवसागरदुःखविदूनहृदम् ।
        रचयाखिलदर्शनतत्त्वविदं भव शंकर देशिक मे शरणम् ॥ २॥
        
        भवता जनता सुहिता भविता निजबोधविचारण चारुमते ।
        कलयेश्वरजीवविवेकविदं भव शंकर देशिक मे शरणम् ॥ ३॥
        
        भव एव भवानिति मे नितरां समजायत चेतसि कौतुकिता ।
        मम वारय मोहमहाजलधिं भव शंकर देशिक मे शरणम् ॥ ४॥
        
        सुकृतेऽधिकृते बहुधा भवतो भविता समदर्शनलालसता ।
        अतिदीनमिमं परिपालय मां भव शंकर देशिक मे शरणम् ॥ ५॥
        
        जगतीमवितुं कलिताकृतयो विचरन्ति महामहसश्छलतः ।
        अहिमांशुरिवात्र विभासि गुरो भव शंकर देशिक मे शरणम् ॥ ६॥
        
        गुरुपुंगव पुंगवकेतन ते समतामयतां नहि कोऽपि सुधीः ।
        शरणागतवत्सल तत्त्वनिधे भव शंकर देशिक मे शरणम् ॥ ७॥
        
        विदिता न मया विशदैककला न च किंचन काञ्चनमस्ति गुरो ।
        द्रुतमेव विधेहि कृपां सहजां भव शंकर देशिक मे शरणम् ॥ ८॥
        
        इति श्रीमत्तोटकाचार्यविरचितं श्रीशङ्करदेशिकाष्टकं सम्पूर्णम् `,
        transliteration: `1

Viditākhila-śāstra-sudhā-jaladhe
Mahitopaniṣat-kathitārtha-nidhe |
Hṛdaye kalaye vimalaṁ caraṇaṁ
Bhava Śaṅkara Deśika me śaraṇam || 1 ||

2

Karuṇā-varuṇālaya pālaya māṁ
Bhava-sāgara-duḥkha-vidūna-hṛdam |
Racayākhila-darśana-tattva-vidaṁ
Bhava Śaṅkara Deśika me śaraṇam || 2 ||

3

Bhavatā janatā suhitā bhavitā
Nija-bodha-vicāra-cāru-mate |
Kalayeśvara-jīva-viveka-vidaṁ
Bhava Śaṅkara Deśika me śaraṇam || 3 ||

4

Bhava eva bhavān iti me nitarāṁ
Samajāyata cetasi kautukitā |
Mama vāraya moha-mahā-jaladhiṁ
Bhava Śaṅkara Deśika me śaraṇam || 4 ||

5

Sukṛte'dhikṛte bahudhā bhavato
Bhavitā samadarśana-lālasatā |
Ati-dīnam imaṁ paripālaya māṁ
Bhava Śaṅkara Deśika me śaraṇam || 5 ||

6

Jagatīm avituṁ kalitākṛtayo
Vicaranti mahā-mahasaś chalataḥ |
Ahimāṁśur ivātra vibhāsi guro
Bhava Śaṅkara Deśika me śaraṇam || 6 ||

7

Guru-puṅgava puṅgava-ketana te
Samatāmayatāṁ nahi ko'pi sudhīḥ |
Śaraṇāgata-vatsala tattva-nidhe
Bhava Śaṅkara Deśika me śaraṇam || 7 ||

8

Viditā na mayā viśadaika-kalā
Na ca kiñcana kāñcanam asti guro |
Drutam eva vidhehi kṛpāṁ sahajāṁ
Bhava Śaṅkara Deśika me śaraṇam || 8 ||`,
      },
      {
        id: "g3-guru-ashtakam",
        title: "Sri Guru Ashtakam",
        badge: "Sri Guru Ashtakam",
        sanskrit: `शरीरं सुरुपं तथा वा कलत्रं |
            यशश्चारू चित्रं धनं मेरुतुल्यम् ।
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे |
           ततः किं ततः किं ततः किं ततः किम् ॥ 1 ॥

           कलत्रं धनं पुत्रपौत्रादि सर्वं |
           गृहं बान्धवाः सर्वमेतद्धि जातम् ।
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे |
           ततः किं ततः किं ततः किं ततः किम् ॥ 2 ॥

           षडंगादिवेदो मुखे शास्त्रविद्या |
           कवित्वादि गद्यं सुपद्यं करोति । 
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे |
           ततः किं ततः किं ततः किं ततः किम् ॥ 3 ॥

           विदेशेषु मान्यः स्वदेशेषु धन्यः |
           सदाचारवृत्तेषु मत्तो न चान्यः । 
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे |
           ततः किं ततः किं ततः किं ततः किम् ॥ 4 ॥

           क्षमामण्डले भूपभूपालवृन्दैः |
           सदा सेवितं यस्य पादारविन्दम् ।
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे |
           ततः किं ततः किं ततः किं ततः किम् ॥ 5 ॥

           यशो मे गतं दिक्षु दानप्रतापात् |
           जगद्वस्तु सर्वं करे सत्प्रसादात् । 
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे |
           ततः किं ततः किं ततः किं ततः किम् ॥ 6 ॥

           न भोगे न योगे न वा वाजिराजौ |
           न कान्तासुखे नैव वित्तेषु चित्तम् । 
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे |
           ततः किं ततः किं ततः किं ततः किम् ॥ 7 ॥

           अरण्ये न वा स्वस्य गेहे न कार्ये |
           न देहे मनो वर्तते मे त्वनर्घ्ये । 
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे |
           ततः किं ततः किं ततः किं ततः किम् ॥ 8 ॥

           अनर्घ्याणि रत्नादि मुक्तानि सम्यक्
           समालिंगिता कामिनी यामिनीषु ।
           मनश्चेन्न लग्नं गुरोरंघ्रिपद्मे
           ततः किं ततः किं ततः किं ततः किम् ॥

           गुरोरष्टकं यः पठेत्पुण्यदेही
           यतिर्भूपतिर्ब्रह्मचारी च गेही ।
           लभेत् वांछितार्थ पदं ब्रह्मसंज्ञं
           गुरोरुक्तवाक्ये मनो यस्य लग्नम् ॥
          
           - श्री शङ्कराचार्य कृतं!`,
        transliteration: `1

Śarīraṁ surūpaṁ tathā vā kalatraṁ
Yaśaś cāru citraṁ dhanaṁ Meru-tulyam |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim || 1 ||

2

Kalatraṁ dhanaṁ putra-pautrādi sarvaṁ
Gṛhaṁ bāndhavāḥ sarvam etad dhi jātam |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim || 2 ||

3

Ṣaḍaṅgādi-vedo mukhe śāstra-vidyā
Kavitvādi gadyaṁ supadyaṁ karoti |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim || 3 ||

4

Videśeṣu mānyaḥ svadeśeṣu dhanyaḥ
Sadācāra-vṛtteṣu matto na cānyaḥ |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim || 4 ||

5

Kṣamā-maṇḍale bhūpa-bhūpāla-vṛndaiḥ
Sadā sevitaṁ yasya pādāravindam |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim || 5 ||

6

Yaśo me gataṁ dikṣu dāna-pratāpāt
Jagad-vastu sarvaṁ kare sat-prasādāt |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim || 6 ||

7

Na bhoge na yoge na vā vāji-rājau
Na kāntā-sukhe naiva vitteṣu cittam |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim || 7 ||

8

Araṇye na vā svasya gehe na kārye
Na dehe mano vartate me tv anarghye |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim || 8 ||

Additional Verse

Anarghyāṇi ratnādi muktāni samyak
Samāliṅgitā kāminī yāminīṣu |
Manaś cen na lagnaṁ guror aṅghri-padme
Tataḥ kiṁ tataḥ kiṁ tataḥ kiṁ tataḥ kim ||

Phalaśruti

Guror aṣṭakaṁ yaḥ paṭhet puṇya-dehī
Yatir bhūpatir brahmacārī ca gehī |
Labhet vāñchitārtha-padaṁ brahma-saṁjñaṁ
Guror ukta-vākye mano yasya lagnam ||`,
      },
      {
        id: "g3-guru-paduka-stotram",
        title: "Sri Guru paduka stotram",
        badge: "Sri Guru paduka stotram",
        sanskrit: ` अनन्तसंसार-समुद्रतार-
नौकायिताभ्यां गुरुभक्तिदाभ्याम् ।
वैराग्यसाम्राज्यद-पूजनाभ्यां
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 1 ॥

कवित्ववाराशि-निशाकराभ्यां
दौर्भाग्य-दावाम्बुद-मालिकाभ्याम् ।
दूरीकृतानम्र-विपत्तिताभ्यां
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 2 ॥

नता ययोः श्रीपतितां समीयुः
कदाचिदप्याशु दरिद्रवर्याः ।
मूकाश्च वाचस्पतितां हि ताभ्यां
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 3 ॥

नालीकनीकाश-पदाहृताभ्यां
नानाविमोहादि-निवारिकाभ्याम् ।
नमज्जनाभीष्ट-ततिप्रदाभ्यां
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 4 ॥

नृपालिमौलि-व्रजरत्नकान्ति-
सरिद्विराजज्झष-कन्यकाभ्याम् ।
नृपत्वदाभ्यां नतलोकपङ्क्तेः
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 5 ॥

पापान्धकारार्क-परम्पराभ्यां
तापत्रयाहीन्द्र-खगेश्वराभ्याम् ।
जाड्याब्धि-संशोषण-वाडवाभ्याम्
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 6 ॥

शमादिषट्कप्रद-वैभवाभ्यां
समाधिदान-व्रतदीक्षिताभ्याम् ।
रमाधवाङ्घ्रि-स्थिरभक्तिदाभ्यां
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 7 ॥

स्वार्चापराणा-मखिलेष्टदाभ्यां
स्वाहासहायाक्ष-धुरन्धराभ्याम् ।
स्वान्ताच्छभाव-प्रदपूजनाभ्यां
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 8 ॥

कामादिसर्प-व्रजगारुडाभ्यां
विवेकवैराग्य-निधिप्रदाभ्याम् ।
बोधप्रदाभ्यां द्रुतमोक्षदाभ्यां
नमो नमः श्रीगुरुपादुकाभ्याम् ॥ 9 ॥`,
        transliteration: ` 1

Ananta-saṁsāra-samudra-tāra-
Naukāyitābhyāṁ guru-bhakti-dābhyām |
Vairāgya-sāmrājya-da-pūjanābhyāṁ
Namo namaḥ śrī-guru-pādukābhyām || 1 ||

2

Kavitva-vārāśi-niśākarābhyāṁ
Daurbhāgya-dāvāmbuda-mālikābhyām |
Dūrīkṛtānamra-vipattitābhyāṁ
Namo namaḥ śrī-guru-pādukābhyām || 2 ||

3

Natā yayoḥ śrī-patitāṁ samīyuḥ
Kadācid apy āśu daridra-varyāḥ |
Mūkāś ca vācaspatitāṁ hi tābhyāṁ
Namo namaḥ śrī-guru-pādukābhyām || 3 ||

4

Nālīka-nīkāśa-padāhṛtābhyāṁ
Nānā-vimohādi-nivārikābhyām |
Namaj-janābhīṣṭa-tati-pradābhyāṁ
Namo namaḥ śrī-guru-pādukābhyām || 4 ||

5

Nṛpāli-mauli-vraja-ratna-kānti-
Sarid-virājad-jhaṣa-kanyakābhyām |
Nṛpatva-dābhyāṁ nata-loka-paṅkteḥ
Namo namaḥ śrī-guru-pādukābhyām || 5 ||

6

Pāpāndhakārārka-paramparābhyāṁ
Tāpatrayāhīndra-khageśvarābhyām |
Jāḍyābdhi-saṁśoṣaṇa-vāḍavābhyām
Namo namaḥ śrī-guru-pādukābhyām || 6 ||

7

Śamādi-ṣaṭka-prada-vaibhavābhyāṁ
Samādhi-dāna-vrata-dīkṣitābhyām |
Ramādhavāṅghri-sthira-bhakti-dābhyāṁ
Namo namaḥ śrī-guru-pādukābhyām || 7 ||

8

Svārcāparāṇām akhileṣṭa-dābhyāṁ
Svāhā-sahāyākṣa-dhurandharābhyām |
Svāntāccha-bhāva-prada-pūjanābhyāṁ
Namo namaḥ śrī-guru-pādukābhyām || 8 ||

9

Kāmādi-sarpa-vraja-gāruḍābhyāṁ
Viveka-vairāgya-nidhi-pradābhyām |
Bodha-pradābhyāṁ druta-mokṣa-dābhyāṁ
Namo namaḥ śrī-guru-pādukābhyām || 9 ||`,
      },
      {
        id: "g3-shirdi-sainatha-ashtakam",
        title: "Sri Shirdi Sainatha ashtakam",
        badge: "Sri Shirdi Sainatha ashtakam",
        sanskrit: ` पत्रिग्राम समुद्भूतं द्वारकामायि वासिनं
भक्ताभीष्टप्रदं देवं सायिनाथं नमाम्यहम् ॥ 1 ॥

महोन्नत कुलेजातं क्षीराम्बुधि समे शुभे
द्विजराजं तमोघ्नं तं सायिनाथं नमाम्यहम् ॥ 2 ॥

जगदुद्धारणार्थं यो नररूपधरो विभुः
योगिनं च महात्मानं सायिनाथं नमाम्यहम् ॥ 3 ॥

साक्षात्कारे जये लाभे स्वात्मारामो गुरोर्मुखात्
निर्मलं मम गात्रं च सायिनाथं नमाम्यहम् ॥ 4 ॥

यस्य दर्शन मात्रेण नश्यन्ति व्याधि कोटयः
सर्वे पापाः प्रणश्यन्ति सायिनाथं नमाम्यहम् ॥ 5 ॥

नरसिंहादि शिष्याणां ददौ योऽनुग्रहं गुरुः
भवबन्धापहर्तारं सायिनाथं नमाम्यहम् ॥ 6 ॥

धनाढ्यान् च दरिद्रान्यः समदृष्ट्येव पश्यति
करुणासागरं देवं सायिनाथं नमाम्यहम् ॥ 7 ॥

समाधिस्थोपि यो भक्त्या समतीर्थार्थदानतः
अचिन्त्य महिमानन्तं सायिनाथं नमाम्यहम् ॥ 8 ॥

इथी श्री सायिनाथ अष्टकम् ||

`,
        transliteration: ` 1

Patrigrāma samudbhūtaṁ Dvārakāmāyi vāsinam
Bhaktābhīṣṭa-pradaṁ devaṁ Sāyināthaṁ namāmy aham || 1 ||

2

Mahonnata kule jātaṁ kṣīrāmbudhi same śubhe
Dvijarājaṁ tamoghnaṁ taṁ Sāyināthaṁ namāmy aham || 2 ||

3

Jagad-uddhāraṇārthaṁ yo nara-rūpa-dharo vibhuḥ
Yoginaṁ ca mahātmānaṁ Sāyināthaṁ namāmy aham || 3 ||

4

Sākṣātkāre jaye lābhe svātmārāmo guror mukhāt
Nirmalaṁ mama gātraṁ ca Sāyināthaṁ namāmy aham || 4 ||

5

Yasya darśana-mātreṇa naśyanti vyādhi-koṭayaḥ
Sarve pāpāḥ praṇaśyanti Sāyināthaṁ namāmy aham || 5 ||

6

Narasiṁhādi śiṣyāṇāṁ dadau yo'nugrahaṁ guruḥ
Bhava-bandhāpahartāraṁ Sāyināthaṁ namāmy aham || 6 ||

7

Dhanāḍhyān ca daridrān yaḥ sama-dṛṣṭy eva paśyati
Karuṇā-sāgaraṁ devaṁ Sāyināthaṁ namāmy aham || 7 ||

8

Samādhisthopi yo bhaktyā samatīrthārtha-dānataḥ
Acintya-mahimānantaṁ Sāyināthaṁ namāmy aham || 8 ||

Iti Śrī Sāyinātha Aṣṭakam.`,
      },
    ],
  },
];
