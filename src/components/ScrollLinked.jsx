"use client"

import { motion, useScroll } from "framer-motion"

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />
            <Content />
        </>
    )
}

/**
 * ==============   Utils   ================
 */

function Content() {
    return (
        <>
            <article
                style={{
                    maxWidth: 500,
                    padding: "150px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                }}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac rhoncus quam.
                </p>
                <p>
                    

Adoro te devote, latens Deitas,
Quæ sub his figuris vere latitas;
Tibi se cor meum totum subjicit,
Quia te contemplans totum deficit.

Visus, tactus, gustus in te fallitur,
Sed auditu solo tuto creditur.
Credo quidquid dixit Dei Filius;
Nil hoc verbo veritátis verius.

In cruce latebat sola Deitas,
At hic latet simul et Humanitas,
Ambo tamen credens atque confitens,
Peto quod petivit latro pœnitens.

Plagas, sicut Thomas, non intueor:
Deum tamen meum te confiteor.
Fac me tibi semper magis credere,
In te spem habere, te diligere.

O memoriale mortis Domini!
Panis vivus, vitam præstans homini!
Præsta meæ menti de te vívere,
Et te illi semper dulce sapere.

Pie Pelicane, Jesu Domine,
Me immundum munda tuo sanguine:
Cujus una stilla salvum facere
Totum mundum quit ab omni scelere.

Jesu, quem velatum nunc aspicio,
Oro, fiat illud quod tam sitio:
Ut te revelata cernens facie,
Visu sim beátus tuæ gloriæ. Amen.

                </p>
                <h2>Sub-header</h2>
                <p>
                   

Kyrie, eleison, Kyrie, eleison.
Kyrie, eleison, Iesu, audi nos Iesu, exaudi nos.
Pater de caelis, Deus, Miserere nobis.
Fili, Redemptor mundi, Deus, Miserere nobis.
Spiritus Sancte, Deus, Miserere nobis.
Sancta Trinitas, unus Deus, Miserere nobis.

Iesu, Fili Dei vivi, Miserere nobis.
Iesu, splendor Patris, Miserere nobis.
Iesu, candor lucis aeternae, Miserere nobis.
Iesu, rex gloriae, Miserere nobis.
Iesu, sol iustitiae, Miserere nobis.
Iesu, Fili Mariae Virginis, Miserere nobis.
Iesu, amabilis, Miserere nobis.
Iesu, admirabilis, Miserere nobis.
Iesu, Deus fortis, Miserere nobis.
Iesu, pater futuri saeculi, Miserere nobis.
Iesu, magni consilii angele, Miserere nobis.
Iesu potentissime, Miserere nobis.
Iesu patientissime, Miserere nobis.
Iesu oboedientissime, Miserere nobis.
Iesu, mitis et humilis corde, Miserere nobis.
Iesu, amator castitatis, Miserere nobis.
Iesu, amator noster, Miserere nobis.
Iesu, Deus pacis, Miserere nobis.
Iesu, auctor vitae, Miserere nobis.
Iesu, exemplar virtutum, Miserere nobis.
Iesu, zelator animarum, Miserere nobis.
Iesu, Deus noster, Miserere nobis.
Iesu, refugium nostrum, Miserere nobis.
Iesu, pater pauperum, Miserere nobis.
Iesu, thesaure fidelium, Miserere nobis.
Iesu, bone pastor, Miserere nobis.
Iesu, lux vera, Miserere nobis.
Iesu, sapientia aeterna, Miserere nobis.
Iesu, bonitas infinita, Miserere nobis.
Iesu, via et vita nostra, Miserere nobis.
Iesu, gaudium Angelorum, Miserere nobis.
Iesu, rex Patriarcharum, Miserere nobis.
Iesu, magister Apostolorum, Miserere nobis.
Iesu, doctor Evangelistarum, Miserere nobis.
Iesu, fortitudo Martyrum, Miserere nobis.
Iesu, lumen Confessorum, Miserere nobis.
Iesu, puritas Virginum, Miserere nobis.
Iesu, corona Sanctorum omnium, Miserere nobis.

Propitius esto, Parce nobis, Iesu.
Propitius esto, Exaudi nos, Iesu.

Ab omni malo, Libera nos, Iesu.
Ab omni peccato, Libera nos, Iesu.
Ab ira tua, Libera nos, Iesu.
Ab insidiis diaboli, Libera nos, Iesu.
A spiritu fornicationis, Libera nos, Iesu.
A morte perpetua, Libera nos, Iesu.
A neglectu inspirationum tuarum, Libera nos, Iesu.
Per mysterium sanctae Incarnationis tuae, Libera nos, Iesu.
Per nativitatem tuam, Libera nos, Iesu.
Per infantiam tuam, Libera nos, Iesu.
Per divinissimam vitam tuam, Libera nos, Iesu.
Per labores tuos, Libera nos, Iesu.
Per agoniam et passionem tuam, Libera nos, Iesu.
Per crucem et derelictionem tuam, Libera nos, Iesu.
Per languores tuos, Libera nos, Iesu.
Per mortem et sepulturam tuam, Libera nos, Iesu.
Per resurrectionem tuam, Libera nos, Iesu.
Per ascensionem tuam, Libera nos, Iesu.
Per sanctissimae Eucharistiae institutionem tuam, Libera nos, Iesu.
Per gaudia tua, Libera nos, Iesu.
Per gloriam tuam, Libera nos, Iesu.

Agnus Dei, qui tollis peccata mundi, Parce nobis, Domine.
Agnus Dei, qui tollis peccata mundi, Exaudi nos, Iesu.
Agnus Dei, qui tollis peccata mundi, Miserere nobis, Iesu.

Iesu, audi nos, Iesu, exaudi nos.

Oremus.
Domine Iesu Christe, qui dixisti: Petite et accipietis; quaerite et invenietis; pulsate et aperietur vobis; quaesumus, da nobis petentibus divinissimi tui amoris affectum, ut te toto corde, ore et opere diligamus et a tua numquam laude cessemus. Sancti Nominis tui, Domine, timorem pariter et amorem fac nos habere perpetuum, quia numquam tua gubernatione destituis, quos in soliditate, tuae dilectionis instituis. Qui vivis et regnas in saecula saeculorum. Amen.

                </p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac rhoncus quam.
                </p>
                <p>
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                </p>
                <h2>Sub-header</h2>
                <p>
                    In eget sodales arcu, consectetur efficitur metus. Duis
                    efficitur tincidunt odio, sit amet laoreet massa fringilla
                    eu.
                </p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
            </article>
        </>
    )
}
