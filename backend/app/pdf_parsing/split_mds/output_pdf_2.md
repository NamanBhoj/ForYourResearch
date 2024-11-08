## 1 3


---

## 


---

## Introduction

Cross-Reality is a human-computer interaction paradigm that ties together Virtual Reality (VR), Ubiquitous Computing, Tangible and Embodied Interaction and the Internet of Things (IoT). The original concept of cross-reality [37] flourished as a type of mixed reality in which interconnected arrays of sensors and actuators make it possible to merge the physical and the virtual world into a unique environment with bidirectional interactions. That is, actions that take place in the virtual world can have manifestations in the physical world and vice versa. In this vision, virtual is not the opposite of real, but instead it is just one aspect of a single, intertwined reality or embodied virtuality [50]. Cross-reality technology enables mixed reality experiences where the real and virtual worlds reflect into each other, thus providing alternative or complementary representations and flow of actions. The synergy of the physical and the virtual expands the affordances of the counterpart reality for representing the information and supporting its manipulation. Users of a cross-reality environment have the power to switch between real and virtual representations according to their needs, what enables collaboration with co-located users in the same physical space, as well as with remote users in virtual spaces. Cross-reality environments have the potential to excite, inspire, and engage learners in immersive ways: e.g., providing novel visitor experiences in museums [13], and supporting embodied [9] or collaborative learning [38]. Our research is concerned with the application of cross-reality interactions in a specific type of educational technology: Digital Game-Based Learning (DGBL) experiences. DGBL has been considered a successful medium to en- hance motivation, a key factor for effective learning [40]. Studies have shown that digital games can be successfully used in education [15, 45], especially when they are tied to practice. Digital games that provide technology-mediated experiences between the physical and the digital have shown potential to support situated learning through context aware- ness, as in the case of pervasive games [31], or to increase user engagement through

immersive game experiences [16].

The affordances of new multi-device, multisensorial and immersive technologies to enrich learning experiences and support situated, experiential and embodied learning have been already investigated [48]. The role of cross-reality interactions in the design of learning experiences, however, is underinvestigated. Even if modern VR and AR technol- ogy, together with ubiquitous computing and IoT devices, allow to build rich immersive user experiences, cross-reality applications have not yet moved from small-scale projects in research laboratories to real settings [10, 30]. For this to be possible, meaningful scenarios have to be envisioned for different human activities and, to explore such scenarios their problem owners need to be engaged in a people-centered process. Such on-technical people require appropriate tools to address their needs and express their visions for technology [42, 44]. Technical challenges are a major obstacle for the development of novel virtual/ augmented/mixed experiences, and producing a cheap and reliable real technology proto- type is, most of the time, an unrealized dream of many designers [18]. In the educational domain, educators, who are those who could ideate meaningful uses of alternate realities, are not usually engaged in the design process, depriving researchers and designers from getting a better grasp of the interactions between the physical and the virtual world that would improve learning and teaching experiences.




---

## Related work

The related research comes from the areas of cross-reality environments and immersive technologies for education, DGBL and experience prototyping.




---

## Immersive technologies for digital game‑based learning

The term Digital Game-Based Learning (DGBL) refers to the instructional strategies that use digital games to improve the learning process [40]. DGBL has been identified as an enjoyable




---

## Cross‑reality environments for education and DGBL

A cross-reality environment interconnects a virtual and a physical space via a network of sensors and actuators [30]. Through sensors and actuators, actions in the physical world can affect the virtual world, and vice versa. The users of this type of systems, therefore, have the opportunity to interact and collaborate with other co-located or remote users in different sides of the physical/virtual reality. One of the first examples of a cross-reality environment is ShadowLab [30], a system that interconnected the Responsive Environments Group Lab from




---

## Experience prototyping for cross‑reality design

Research has shown that prototyping toolkits are essential to support user creativity and to assist the exploration of a design space through external representations [18, 22]. Our approach seeks to support experience prototyping [8] of cross-reality environments: a design tactic that emphasizes on the experiential qualities of a prototype “to successfully (re)live or convey an experience with a product, space or system” [8]. Experience prototypes help design partici- pants to generate and iterate over ideas by first-hand appreciation, enactment and physical engagement with the technology, rather than just abstract thinking about ideas.


---

## Summary

Works from the literature focus on the technical implementation of a cross-reality architecture or tool, with the goal of either assessing the effectiveness of the proposed system to support specific activities (e.g., teacher training [12] or collaboration [38]) or explore different device configurations [43].

In this work we follow a different approach. Rather than proposing a specific system architecture or a specific educational experience, we aim to gain a better understanding of the potential uses and applications of cross-reality technology in the area of education, and more specifically in DGBL experiences, by integrating end users in this exploration process. We developed a toolkit for supporting educators in the prototyping of cross-reality environments. The overarching idea behind our toolkit is that, by facilitating educators the implementation and testing of cross-reality interactions, they would get first hand experiences on whether this technology could be useful in their daily practice. This, in turn, would result in prototypes that could unveil meaningful design drivers for cross-reality interactions in education. Following this approach, we conducted a workshop in which 36 educators participated ideating and prototyping cross-reality based DGBL experiences. In this paper we report on the results of the workshop and analyze the different uses of the cross-reality technology in the artefacts envisioned.








---

## MyXRGames: A cross‑reality game toolkit

Developing cross-reality environments is often complex and expensive since there are many different technologies involved. To simplify and speed up the design and development of educational games based on cross-reality technology, we developed a toolkit named MyXRGames. The design journey that led to the development of the MyXRGames prototyping toolkit is described in detail in two previous publications [2, 4, 52], including the requirements that were extracted through a user-centered design process, the design drivers, implementations and technical limitations. For the sake of completeness and readability, we include here a short description of the main functionality of the toolkit.

The toolkit provides three editors (Fig. 1) for simplifying the creation of cross-reality game experiences:



a Virtual World Editor, for designing 3D virtual scenes;

a Real World Editor, for setting up interactive objects in the real world;

and an Interaction Rules Editor, for specifying high-level interaction rules among sensors and actuators in the physical environment and digital entities in the virtual world (cross- reality behaviors).



These editors aim to enable users who do not have a high technical profile to create their own cross-reality experiences by interconnecting and personalizing some predefined building




---

## A workshop for designing cross‑reality educational games

Following the implementation of the MyXRGames toolkit, we performed an experimental workshop to investigate cross-reality as a platform for supporting digital games for education. We aimed at exploring and gaining knowledge on the way educators would use this novel technology in their daily practice. For example, we aim at increasing understanding on:



What type of educational experiences based on cross-reality games would educators design?

For which subjects/purposes would they use it?

What type of interactions between the real and virtual world would educators design?

For which activities would educators use the real world and for which the virtual setting?









Fig. 3 Schema of the MyXRGames Toolkit. The set of files generated by the toolkit’s editors is uploaded to the MyXRGames’s Runtime Environment to configure the virtual world and the interactive boxes for the game. The virtual world can be accessed using tabletop, desktop computers or VR headsets




---

## Participants

The participants of the workshop were 36 educators (26 female), teachers of primary (17), secondary (12) and higher (7) education centres in Spain, enrolled in a course on Gamification and Immersive Technologies in a Master Degree on Educational Innovation. Participants’ ages range from 25 to 30 (4), 31–40 (19), 41–50 (11) and 51–55 (2) years old. The participants’ teaching subjects covered a wide range of topics and disciplines, such as history, biology, English language, or physical education, among others. The participants had already been exposed to the learning affordances of virtual, augmented reality and other technologies in previous sessions of the course and other HCI for education courses. Moreover, they had followed courses on current active pedagogical methods and experiences, such as flipped classroom, collaborative learning, gamification, project-based learning or using simulations in the classroom, so they were familiar with the pedagogical approach in which DGBL is framed. Though they had courses on technology in the Master program, none of them was related to programming and the participants had no programming skills.

In the rest of the document, we will use the term “participants” to refer to the educators who participated in the workshop; the term “educators” to refer to the teachers who would use the games ideated in the workshop in their teaching practice; and the terms “player” and “students” to refer to the learners who would play the game.






---

## Apparatus

For the games design task, the participants were provided with:



8 cardboards depicting different examples of environments for representing the virtual and real scenarios of the games (classroom, building interior, woods and a temple) and 2 blank cardboards to draw any other scenario that the participants wanted to work on.

a deck of small cards representing objects, characters and Interactive Boxes,

stickers and coloured pens.



For the implementation of the game prototypes they were provided with:



laptop computers with running installations of the MyXRGames toolkit, and

a set of Interaction Boxes and a tablet to test them.



More specifically, we provided 8 pre-built Interaction Boxes to the workshop participants. Each box included one LED, one button, and different combinations of proximity sensors, rotary potentiometers and sliders. We chose this set of devices to cover different types of activations (manual vs automatic), types of data (binary on/off values or range) and modes of


---

## Data collection

Qualitative data was collected from three different sources. The first was the analysis of the game designs and prototypes produced during the workshop, which each group delivered at the end of the session. These deliverables included the diagrams depicting the game interac- tions, the prototypes implemented and a form describing in detail the game design with its context of use, learning goals, target audience, the type of collaboration between players, and the equipment (e.g., devices) required to play it.

The second source of data was the opinions of the participants about the design activity and the potential of the technology of the cross-reality in education. At the end of the session, the participants provided this information filling in a form with the following questions:



Please tell us about your overall experience of the design activity.

How satisfied are you with the game you ideated? How easy/difficult was it for you to create it?

Please tell us your opinion about the potential use of this technology in education and how it would fit in your teaching practice. Which are, in your opinion, its weakest and strongest points?



Finally, the activity was observed by a member of the research team. The researcher paid special attention to how the games ideated evolved and changed during the design activities, taking notes about their transformations, and the attitudes and opinions of the participants during the process.






---

## Procedure

Before the workshop, and as part of the course on Gamification and Immersive Technologies, participants attended two four-hours lectures devoted to: (i) give an overview of the state of the art of different technologies in the cross-reality spectrum, such as VR and AR, their current impact on education, and future developments, (ii) get familiarized with DGBL by designing examples of digital games for education and training. The goal of the workshop (a third four- hours session) was to apply all the knowledge gained during the previous two weeks to the design of a meaningful cross-reality game-based learning experience that they would incor- porate in their teaching practice. Participation is mandatory since the master is aimed at developing procedural skills and all the evaluation is based on activities performed by participants and put in the context of their current educational duties. During the workshop, participants collaborated in groups of six and were asked to design a cross-reality game around a subject of their choice.

The schedule of the workshop was as follows:



Briefing. During the first 30 minutes a member of the research team introduced the concept of Cross-Reality, the goal and structure of the workshop, and the MyXRGames prototyping toolkit. The toolkit was used to showcase examples of possible interactions between virtual and real objects in these kinds of environments.


---

## Results

In this section we review the results of the workshop, summarizing the main features of the different cross-reality games designed by the participants, their educational value and the technical opportunities and challenges that were addressed and tested thanks to the use of the toolkit. We also recap the feedback obtained from the participants at the end of the session, and the main issues noted while observing their activities. To provide the reader with a better insight of the type of educational experiences envisioned we start the section describing in detail one of the six games designed during the workshop.




---

## “The Feudal Adventure” game

This game aims to help to understand the way feudal societies worked: for instance the social structure, land tenure, or agricultural techniques. The target players are students of the latest courses of primary education (12 years old), and the game was designed to be played outdoors, during a field trip or an excursion, in groups that compete against each other.

The game integrates elements from both the Massive Multiplayer Online Role-Playing Games in virtual worlds, and the live-action role play games in which the players physically portray their characters. The game was designed to be played in an old town or ruins of an old village. The virtual world is used to provide a representation of the village from the past, and specific spots of the real world are matched with areas of the virtual village, i.e. certain buildings remain to the ancient village market. The players would play the role of vassals of a feudal lord, and each of them would be assigned to a job typical of the feudal world: farmer, servant, baker, etc. Players are required to pay the tribute to the lord, and, to this end, they must collect a certain number of objects related to four different types of activities: agriculture, farming, mining and forestry. The players work in groups, according to their occupation, and search for resources in the real and the virtual world, interacting with non-player characters that propose them missions. Each player will have a counterpart avatar in the virtual world that will move across the virtual realm mimicking the player’s visits to the different game locations in the real world. In this way, to access each area of the virtual village the player would have to be physically located at the corresponding area of the town ruins in the physical world. In addition, the occupation assigned to each player will grant them access to certain buildings and restrict some others. Also, each will have certain special abilities that they will have to exploit in order to accomplish the missions proposed.




---

## Summary of results

Table 1 categorizes the six games designed by the participants of the workshop according to eight dimensions: the type of game, the topic, the learning objective, the pedagogical theory driving the design of the game, the physical context where the game is played, the number of players, the type of behavior and the devices used to play the game. The games designed by the participants can be classified as role-play games (“A journey inside a cell” and “Feudal adventure”), escape rooms (“Anne Frank’s diary”), mini-games (“Take the order” and “The Treasure Island”) and adventures (“Time travel”). With regard to their educational purpose, all the games targeted students of primary and secondary school, and their learning topics included History (3), Natural Science (2), English (as a foreign language), and Mathematics. Based on their educational goal, the games could be classified in two groups: those focused on learning about or understanding something (i.e. a period of history or certain event) and those related to applying knowledge (i.e. representing the activities inside a cell or practicing English). The types of pedagogical theories underlying the game designs included situated learning (4), embodied learning (1), and experiential learning (1).

Four of the games were designed to be played in groups and the other two games by two players. In the two-player games, each player was assigned to a different game reality, either physical or virtual, while in the games that required a group gameplay, players moved from one reality to another as the game unfolded.

Virtual reality was used to recreate remote places (as in “Time travel”) that could be even adapted to the student learning process (as in “Take the order”), to represent complex or abstract terms (as in “A journey inside a cell”) or to promote empathy (as in “Anne Frank’s Diary”). Interaction with real places and objects was used to provide multisensorial interaction with real objects (as in “Anne Frank’s Diary”), situated learning (as in “Treasure Island”) and embodied learning activities (as in “Take the order”). Connections between the two realities were exploited to take profit from the learning affordances of the two worlds in an integrated environment. When a situation was difficult or costly to implement in the real world (like different realistic scenarios for “Treasure Island”), virtual reality simulations were encouraged but always connected with physical activities and interactions in the real world (either picking up objects or moving to specific places). Two games required the players to perform physical




---

## Discussion of findings

The workshop allowed to disclose different approaches of using cross-reality environments for supporting educational games.




---

## Affordances of interweaving elements of the virtual and real world

In some designs the virtual world is used as a means to complement the information of the real scenario. For example, in the game “Treasure Hunt” the players had to complete different missions at different locations in a wood. When the players reached one of those locations, they activated an Interaction Box and accessed a 3D virtual representation of the wood where they received instructions for the missions. This would save the educators from having to modify the real environment by attaching signs, posts, or directions on it. Moreover, virtual augmentations are more dynamic than physical ones and can vary depending on the student’s needs.

In other cases, the participants used the Interaction Boxes as a way to link virtual and real objects. This allowed the educators to include in their games situations that originate in one of the two worlds and that can affect the other. For example, in the game “Anne Frank’s Diary” when the players switch on a lamp in the real world, its equivalent counterpart in the virtual one was also switched on, illuminating a hole in a wall where the next tip was located.

In addition to complementing the information available, or providing alternative represen- tations, the participants envisioned interactions that involve the manipulation of physical objects (e.g., “Feudal adventure”), thus employing tangible interaction instead of touching digital objects on a screen. It has been reported in the literature that tangible manipulation enables physical learning and promotes an active engagement in the learning experience [34] exploration and discovery [20] and facilitates the understanding of abstract concepts through concrete representations [1]. According to the designs produced in the workshop, connecting physical interaction or physical elements with digital worlds has been seen by the workshop participants as a desirable design strategy to promote collaboration among students and introduce playfulness and novelty in classical learning dynamics. For example, the search for information about an object in a book was made more attractive in “Time travel” by putting it in the context of a game and having to “send” the chosen object across the two realities.




---

## Cross‑reality facilitates embodied learning through acting out and role play

Participants designed games that exploited enactment in the real world, augmented with virtual content, and role play as an effective way of learning theoretical concepts through bodily experience. The designers of the game “A trip inside a cell” for instance, used the real world to implement a metaphor of a cell, matching locations of the school to the different parts of a cell based on their function. In the game the students moved physically across the school to carry out their missions, interacting with each other according to the role of the cell’s element they represented. In the case of the game “Feudal adventure”, in which the players played the role of habitants of a medieval village, the virtual world was employed with the idea that historical reconstruction of the medieval villages would help students to play their characters. Partici- pants who designed the game stressed on the fact that role-playing allows, not only to learn about complex social historical events, science and mathematics, but also to develop personal skills such as communication, problem-solving, self-awareness, and cooperative work. They realized that cross-reality would enhance role-play, giving educators additional ways to design educational processes and the students new means to learn something new by “creating their own reality.”

In addition to these uses, the analysis of the games also revealed different ways in which participants implemented the educational purpose of the experience and enhanced its play- ability. In many cases, the instructional objective heavily relies on one side of the cross-reality setup. For example, in the games “Anne Frank’s diary” and “Feudal adventure”, learning goals are achieved through exploring and acting in the virtual world. On the contrary, in the games “A trip inside a cell” and “Treasure island” most of the learning occurred as a result of the activities in the real world. In the same way, in some games the primary use of one of the two realities was to enhance the players motivation. For example, in the game “Take the order” one player plays the role of the master and controls the game, whilst the other executes the actions defined by the master. The master interacts from the virtual world, while the other player plays the game in the real world, augmented with projections and interactive objects. The immersive virtual world aims to make the role of the “master” player more attractive and fun than selecting the tasks for the other players using more standard means.




---

## On the role of prototyping toolkit for cross‑reality interactions

The use of the toolkit in the workshop allowed us to reflect on the role of prototyping tools for the dissemination of a technology such as cross-reality that, especially when applied to education, has only recently left the stage of a breakthrough invention. The lack of tools that support experimentation might negatively impact the possibility of cross-reality to jump to a stage where previous implementations are replicated, mashed-up or re- implemented and, thus, increase the understanding of this technology from the lessons learned through practice.




---

## Limitations

The game designs produced during the workshop have not been fully implemented and put into practice and, hence their educational value cannot be demonstrated [3] though this was not the goal of our research. In any case, the designs presented here were produced by groups of experienced educators, who design the learning activities for their students so that the workshop just offered them a new technology to integrate in their daily practice. The goal of this research was not to obtain a set of running cross-reality applications but to gain a better understanding of the possibilities and potential uses of cross-reality technology when put in the hands of educators. At the end, all the participants ideated innovative scenarios of cross-reality games that were well-grounded on current learning theories. The experiences designed addressed specific topics and audiences, but the proposed interactions and the pedagogical strategies behind them might inspire other educators to ideate new cross-reality scenarios that fit their specific educational contexts.






---

## Conclusions

We presented the results of our exploration of the potential uses of cross-reality technology for supporting DGBL experiences from the perspective of end users (educators). A hands-on




---

## Declarations

Conflict of interest The authors declare no conflict of interest. The founding sponsors had no role in the design of the study; in the collection, analysis, or interpretation of data; in the writing of the manuscript, and in the decision to publish the results.






---

## References

Antle AN (2007) The CTI framework: informing the design of tangible systems for children. In: proceed- ings of the first international conference on tangible and embedded interaction(TEI’07), pp 195–202

Barab SA, Ingram-Goble A, Warren, S (2009) Conceptual Play Spaces. Handbook of Research on Effective Electronic Gaming in Education. IGI Global 989–1009. https://doi.org/10.4018/9781599048086.ch057

Barati B, Karana E, Foole M (2017) Experience prototyping of smart material composites in: proceedings of international conference of the DRS special interest group on experiential knowledge pp 50-65

Bellucci A, Aedo I, Díaz P (2017) ECCE Toolkit: Prototyping Sensor-Based Interaction. ECCE Toolkit: Prototyping Sensor-Based Interaction Sensors 17(3):438. https://doi.org/10.3390/s17030438

Benford S, Magerkurth C, Ljungstrand P (2005) Bridging the physical and digital in pervasive gaming. Commun ACM 48:54–57. https://doi.org/10.1145/1047671.1047704

Binder T, De Michelis G, Ehn P, Jacucci G, Linde P, Wagner I (2011) Design things. MIT press

Bordegoni M, Ferrise F, Wendrich R, Barone S (2018) Virtual and mixed prototyping techniques and technologies for consumer product design within a blended learning design environment. In: proceedings of the DESIGN 2018 15th international design conference, pp. 183-192

Buchenau M, Suri JF (2000) Experience prototyping. In: proceedings of the 3rd conference on designing interactive systems: processes, practices, methods, and techniques pp 424-433

Chang JSK, Yeboah G, Doucette A et al (2017) TASC: combining virtual reality with tangible and embodied interactions to support spatial cognition. In: proceedings of the 2017 conference on designing interactive systems, pp. 1239-1251. https://doi.org/10.1145/3064663.3064675

Coleman B (2009) Using sensor inputs to affect virtual and real environments. IEEE Pervasive Computing 8(3):16–23. https://doi.org/10.1109/MPRV.2009.60

Dalgarno B, Lee MJ (2010) What are the learning affordances of 3-D virtual environments? Br J Educ Technol 41(1):10–32

Dalinger T, Thomas KB, Stansberry S, Xiu Y (2020) A mixed reality simulation offers strategic practice for pre-service teachers. Comput Educ 144:103696

Davies CJ, Miller A, Allison C (2012) Virtual time windows: applying cross reality to cultural heritage. In: Proceedings of the Postgraduate Conference on the Convergence of Networking and Telecomunications 101109/DigitalHeritage20136743757

Dede C (1995) The evolution of constructivist learning environments: immersion in distributed, virtual worlds. Educ Technol 35(5):46–52

De Freitas S (2006) Learning in immersive worlds: a review of game-based learning

De Freitas S, Savill-Smith C, Attewell J (2006) Educational games and simulations: case studies from adult learning practice. London Learning and Skills Research Centre

Díaz P, Zarraonandia T, Sánchez-Francisco M, Aedo I, Onorati T (2019) Do low cost virtual reality devices support learning acquisition? A comparative study of two different VR devices. In: In: proceedings of the XX international conference on human computer interaction, pp 1–8

Dow S, Saponas TS, Li Y, Landay JA (2006) External representations in ubiquitous computing design and the implications for design tools. In: proceedings of the 6th conference on designing interactive systems, pp 241–250. https://doi.org/10.1145/1142405.1142443

Dunleavy M, Dede C (2014) Augmented reality teaching and learning. In: Handbook of research on educational communications and technology. Springer, New York, NY, pp 735–745. https://doi.org/10. 1007/978-1-4614-3185-5_59

Ferris K, Bannon L (2002) A load of Ould Boxology! In: proc. Conf. Designing interactive systems, London. ACM press, pp 41–49. https://doi.org/10.1145/778712.778722

Goldin-Meadow S (2009) How gesture promotes learning throughout childhood. Child Dev Perspect 3(2): 106–111. https://doi.org/10.1111/j.1750-8606.2009.00088.x




---

