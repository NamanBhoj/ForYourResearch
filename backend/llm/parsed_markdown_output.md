# Bus Inf Syst Eng 62(5):455–461 (2020)

https://doi.org/10.1007/s12599-020-00658-9

# C A T C H WO R D

Virtual Reality

Isabell Wohlgenannt • Alexander Simons • Stefan Stieglitz

Received: 4 December 2019 / Accepted: 22 April 2020 / Published online: 2 July 2020

Ó Springer Fachmedien Wiesbaden GmbH, ein Teil von Springer Nature 2020

# Keywords

Virtual reality, Augmented reality, Mixed reality, Extended reality, Immersive systems

# 1 Introduction

Virtual Reality (VR) has become a trendy IT topic in the past few years. When Steven Spielberg turned Ernest Cline’s popular novel, *Ready Player One*, into a film, VR became known to an audience of millions. Still, few people are aware that core VR technology has been available since the 1960s (e.g., Sutherland 1965), as high equipment costs and insufficient quality have long been barriers to its broad adoption (Valmaggia 2017). Many had already declared VR ‘‘dead’’ (Slater and Sanchez-Vives 2016, p. 1), as VR was ‘‘over-hyped’’ for a long time (Walsh and Pawlowski 2002, p. 298) and stuck in the ‘trough of disillusionment’ of Gartner’s Hype Cycle (see, e.g., Linden and Fenn 2003). However, with the emergence of affordable, consumer-grade VR headsets for gaming and entertainment, VR is experiencing a second spring. VR’s development is far from finished, but since its arrival on Gartner’s ‘slope of enlightenment’ in 2016, VR has become mature enough no longer to be part of Gartner’s Hype Cycle.

Accepted after one revision by Christof Weinhardt.

I. Wohlgenannt A. Simons (&)

Institute of Information Systems, University of Liechtenstein,

Fürst-Franz-Josef-Strasse, 9490 Vaduz, Liechtenstein

e-mail: alexander.simons@uni.li

Simply put, VR simulates a virtual environment that immerses users to the extent that they have the feeling of ‘‘being there’’ (Bowman and McMahan 2007, p. 36). Researchers from several disciplines, including computer science, engineering, and the social sciences (see, e.g., Freina and Ott 2015), have been studying VR technology for several decades, but as Walsh and Pawlowski (2002, p. 297) noted from the viewpoint of Information Systems (IS) research, ‘‘much of the reported research on VR is technological rather than social, leaving only a limited understanding of its behavioral and organizational impacts.’’ As a result, IS researchers’ interest in VR has been increasing (see, e.g., Cavusoglu et al. 2019; Parvinen et al. 2018).

The market for VR technology has been growing along with the technology’s rapid development. Its global market size is estimated to increase from US$ 7.3 bn in 2018 to US$ 120.5 bn in 2026 (Fortune Business Insights 2019). However, a significant part of the VR market share is consumer software, particularly video games, as VR headsets like Facebook’s Oculus Quest and HTC’s VIVE are about to revolutionize gaming and entertainment. Still, companies such as IKEA, Volkswagen, and Takeda have also started to use VR technology, so this article discusses VR’s potential applications from the viewpoint of non-gaming industries. In addition, it reviews the history of VR and distinguishes it from related concepts. Finally, the article provides an overview of VR research and explains why IS researchers are challenged to develop a research agenda.

S. Stieglitz

Department of Computer Science and Applied Cognitive Science, University of Duisburg-Essen, Forsthausweg 2, 47057 Duisburg, Germany# I. Wohlgenannt et al.: Virtual Reality, Bus Inf Syst Eng 62(5):455–461 (2020)

# 2 A Short History of VR

# 3 ‘‘VR’’ and Related Terms

Contemporary VR technology typically involves head-mounted displays (HMDs), usually referred to as VR headsets, that enable users to submerge into a virtual world by blocking out the real world (Brooks 1999). The first HMD, The Sword of Damocles, was developed in the 1960s by Ivan Sutherland, followed by Eric Howlett’s Large Expanse Extra Perspective (LEEP) system in the 1970s (Sherman and Craig 2019). In the 1980s, VPL Research developed several complementary VR devices, such as the EyePhone (an HMD), the AudioSphere (a sound system), and the DataGlove and DataSuit (for measuring movements) (see Raitt 1991). While early VR technology was mainly used for more serious purposes than gaming, including flight simulation and military training, the first HMDs for consumers, such as Sega VR and Nintendo’s Virtual Boy, were developed in the 1990s (Rebenitsch 2015). However, these and other VR systems had low graphic capabilities and often caused motion sickness, so they were not particularly successful. As a result, the CAVE Automatic Virtual Environment was developed to improve quality in terms of resolution and system latency (Cruz-Neira et al. 1993). However, as CAVEs require a dedicated room and expensive projectors, they have not found their way into private households but are used for professional purposes in areas like engineering, military training, science, and medicine (see, e.g., Muhanna 2015). (For more information about early VR hardware, see Sherman and Craig (2019).

About 20 years later, the gaming industry released HMDs like Oculus Rift, HTC VIVE, and PlayStation VR, which triggered VR’s diffusion into private households. Apart from HMDs, modern VR technology typically includes headphones (or other kinds of speakers) for sounds and controllers for haptics, but more sophisticated VR systems may even involve haptic gloves, haptic suits, multi-dimensional treadmills, or other hardware that increases the immersive experience (see, e.g., Mach et al. 2019). The recent release of wireless, fully stand-alone VR systems like Oculus Quest and HTC VIVE Focus, which do not need to be connected to a high-graphics computer, has lowered the hurdles for home use even farther. Accordingly, modern VR technologies represent ‘‘complex technologies that [replace] real-world sensory information with synthetic stimuli such as 3D visual imagery, spatialized sound, and force or tactile feedback’’ (Bowman and McMahan 2007, p. 36). Before VR is defined more precisely, the next section distinguishes VR from related terms and acronyms.

First, the terms ‘‘virtual environment’’ and ‘‘virtual world’’ are often used in the context of VR. A virtual environment consists of ‘‘software representations of real (or imagined) agents, objects and processes; and a human–computer interface for displaying and interacting with these models’’ (Barfield et al. 1995, p. 476), while a virtual world is a specific type of (multi-user) virtual environment that provides ‘‘shared, simulated spaces which are inhabited and shaped by their inhabitants who are represented as avatars’’ (Girvan 2018, p. 1099). Customizable avatars and multi-user interactions have been used to distinguish virtual worlds from VR (see, e.g., Schultze 2010), but several multi-user VR applications are available on the market today that allow users to create and customize individual avatars (e.g., AltspaceVR). Still, virtual environments and virtual worlds typically refer to software that runs on hardware that may or may not be based on VR.

Second, terms like ‘‘mixed reality’’ (MR), ‘‘augmented reality’’ (AR), and ‘‘augmented virtuality’’ (AV), which are used differently in research and practice (see, e.g., Farshid et al. 2018), are occasionally confused with VR. AR refers to the ‘‘real-time combination of digital and physical information through different technological devices’’ (Cabero and Barroso 2016, p. 44), so it adds virtual information to the displayed physical reality, whereas AV refers to a ‘‘virtual world augmented with the mapping of an image or video from the real world in virtual objects’’ (Valente et al. 2016, p. 189). As both AR and AV are located between the physical and virtual realities, albeit to different degrees, they are also referred to as MR, ‘‘a particular subset of Virtual Reality (VR) related technologies that involve the merging of real and virtual worlds’’ (Milgram and Kishino 1994, p. 2). Accordingly, VR typically creates an entirely artificial virtual environment, thus offering full virtualization (Buhl and Winter 2009), whereas AR and AV augment the real world with virtual information and vice versa, and MR is a broader term that combines or merges the virtual and real worlds. (Note, however, that the term ‘‘MR’’ is also increasingly used to refer to the possibility of interaction between digital and real objects; see, e.g., Flavia´n et al. 2019.)

Finally, ‘‘extended reality’’ (XR), which refers to ‘‘all real-and-virtual combined environments and human–machine interactions generated by computer technology and wearables’’ (Fast-Berglund et al. 2018, p. 32), is often used as an umbrella term for all these approaches or to refer to their combined use. Similarly, the notion of ‘‘immersive systems’’ refers to all types of technologies that may ‘‘purposefully change or enhance the user’s perception of reality’’ (Cavusoglu et al. 2019, p. 680). Figure 1 is based on Drascic and Milgram’s (1996) version of the reality-# I. Wohlgenannt et al.: Virtual Reality, Bus Inf Syst Eng 62(5):455–461 (2020)

# 4 What is VR?

Several researchers have characterized VR based on three properties: (tele-)presence, interactivity, and immersion (Walsh and Pawlowski 2002). Presence is typically understood as the feeling of being physically somewhere other than where one actually is (Sanchez-Vives and Slater 2005). Interactivity influences presence and refers to the extent to which users can manipulate their virtual environment in real time (Steuer 1992). While researchers’ understandings of presence and interactivity are largely aligned, the concept of immersion has been described differently in research (Nilsson et al. 2016), so it deserves more attention.

Some researchers have characterized immersion based on technological capabilities that are objectively measurable (Sanchez-Vives and Slater 2005), such as inclusiveness (i.e., the extent to which reality is excluded), extensiveness (i.e., the range of sensory modalities addressed), surrounding (i.e., the size of the field of view), vividness (i.e., the richness, resolution, or quality of the displays), and matching (i.e., the extent to which proprioceptive feedback on body movements is aligned with the displayed information) (Slater and Wilbur 1997). Other researchers have characterized immersion as subjective involvement (see Nilsson et al. 2016), which can take any of several forms, including cognitive immersion (which users feel when they solve complex problems), emotional immersion (which users feel when narrative structures unfold), sensory-motoric immersion (which users feel when they receive feedback on movements), and spatial immersion (which users feel when they perform extensive maneuvers) (see Björk and Holopainen 2005).

As researchers have understood immersion differently, it is difficult to draw sharp lines between the concepts of presence, interactivity, and immersion. As a result, available definitions of VR differ. For example, researchers have defined VR as a “set of technologies that enable people to immersively experience a world beyond reality” (Berg and Vance 2017, p. 1), as a “computer-generated digital environment that can be experienced and interacted with as if that environment was real” (Jerald 2016, p. 9), and as a “real or simulated environment in which a perceiver experiences telepresence” (Steuer 1992, pp. 76-77). However, not all researchers have identified feelings of presence or immersion as characteristics of VR. For example, Suh and Lee (2005) distinguished two broader VR categories (based on Mills and Noyes 1999): immersive VR (i.e., a virtual environment that surrounds a user who is wearing an HMD) and non-immersive VR (i.e., a virtual environment that is displayed on a monitor). On the other hand, it has been argued that virtual environments or worlds displayed on monitors are different from VR, because feelings of presence are largely absent. As Gabriel D. Ofeisch, Emeritus Professor of Educational Technology at Howard University, put it: “As long as you can see the screen, you’re not in virtual reality. When the screen disappears, and you see an imaginary scene … then you are in virtual reality” (as quoted in Pimentel and Teixeira 1993, p. 7). From the viewpoint of IS, several researchers have followed Steuer’s (1992) early definition of VR, but as this definition is broad (Steffen et al. 2019), a common definition of VR is yet to emerge in IS research. Based on the concepts of presence, interactivity, and immersion, VR may be understood as follows: VR leverages immersive technologies to simulate interactive virtual environments or virtual worlds with which users become subjectively involved and in which they feel physically present.

# 5 VR in Practice

Apart from gaming and entertainment, VR is increasingly used in education – often for corporate training but, to some extent, also for university students (Freina and Ott 2015) and in schools. In fact, several companies have started to offer VR applications for use in class, including VR Immersive Education and Google Expeditions (Brown and Green 2016), which cover subjects that include anatomy, geography, history, physics, and chemistry. However, VR is also used in several other fields:# 1. Wohlgenannt et al.: Virtual Reality, Bus Inf Syst Eng 62(5):455–461 (2020)

• Retail IKEA uses VR to onboard new employees, Macy’s uses VR to enhance customers’ shopping experience, and Verizon uses VR to train their store clerks to handle hostage and robbery situations.

• Transportation Deutsche Bahn plans to conduct VR trainings for scenarios that cannot be taught on real trains (e.g., handling fire), Volkswagen uses VR for prototyping, and Tata Motors allows their customers to configure cars in VR.

• Energy E.ON instructs substation workers using VR, Shell uses VR for safety training in deep-water oil projects, and MHI Vestas uses VR technology as a sales tool to showcase offshore wind turbines.

• Consulting Accenture uses VR to assess personnel, PwC conducts diversity and inclusion trainings in VR, and BDO has started to test VR’s applicability to personnel recruitment.

• Insurance Farmers Insurance plans to conduct interpersonal skills trainings in VR, Cigna uses VR to conduct health screenings and deliver health information to customers, and PNB MetLife consults with their customers in VR.

• Healthcare Takeda uses VR for recruitment, Columbia University and Harvard Medical School use VR to train surgeons, and Ivoclar Vivadent suggests the use of VR to distract patients during dental treatments.

• Sports The Dallas Cowboys have started to train their players using VR, Premier League teams use VR to identify soccer talent, and the National Association for Stock Car Auto Racing (NASCAR) uses VR so fans can experience racing events remotely.1

1 More information on the industry examples are available online (accessed 12 April 2020):

- Accenture: https://www.consultancy.uk/news/20232/graduates-to-be-tested-with-vr-during-accenture-uk-recruitment-process.
- BDO: https://www.consultancy.uk/news/21819/bdo-trialling-virtual-reality-game-for-recruitment.
- Cigna: https://www.sapiens.com/blog/3-insurers-benefitting-from-virtual-reality-mini-case-studies/.
- Columbia University and Harvard Medical School: https://vrscout.com/news/healthcare-medical-training-oculus-quest/.
- Dallas Cowboys: http://www.nfl.com/news/story/0ap3000000495959/article/report-cowboys-using-virtual-reality-technology.
- Deutsche Bahn: https://digitalspirit.dbsystel.de/en/improved-learning-with-3d-simulation/.
- English Premier League: https://www.sporttechie.com/new-virtual-reality-technology-help-soccer-scouts-uncover-talent/.
- E.ON: https://www.smart-energy.com/industry-sectors/business-finance-regulation/e-on-trains-substation-workers-with-virtual-reality/.
- Farmers Insurance: https://newsroom.farmers.com/2019-05-01-Farmers-Insurance-R-and-Talespin-Announce-Collaboration-on-Leadership-and-Communication-Skills-Training-with-AI-Powered-Virtual-Human-Technology.
- IKEA: https://virsabi.com/ikea-virtual-reality-for-onboarding-and-training/.

This list is by no means exhaustive, but it covers some of the industries that have made use of VR during the past few years or that plan to use VR in the near future. Other industries, such as real estate, architecture, and tourism, have also started to use VR technology so their customers can visit and inspect places virtually. In addition, VR technology is increasingly used in military training and law enforcement (e.g., to practice de-escalating critical situations), construction and manufacturing (e.g., VR safety trainings), and journalism and media dissemination (e.g., VR as a new media channel). In particular, HR activities like personnel recruitment, assessment, onboarding, and development (e.g., social-skills training, procedural training, and safety training) can benefit from VR support. Other business applications of VR technology target customers (e.g., virtual marketing, shopping, and consulting), rather than employees, and VR may even enable entirely new business processes and procedures (e.g., VR-based prototyping or remote work). Considering the variety of business applications, it is not surprising that some of the biggest VR-hardware providers have started to offer enterprise editions of their devices (e.g., Oculus for Business and HTC VIVE Enterprise). Against this background, the next section explains how IS research is challenged to study the design and use of VR in practice.

# 6 VR in Research

As industry examples of the use of VR have increased, so has researchers’ interest in VR technology. For example, a keyword search of the Business Source Premier and eBook

Footnote 1 continued

- Ivoclar Vivadent: https://blog.ivoclarvivadent.com/lab/en/4-digital-trends-of-the-future.
- Macy’s: https://www.macys.com/ce/virtual-room-designer/index.
- MHI Vestas: https://www.greentechmedia.com/articles/read/renewable-energy-sector-embraces-virtual-reality.
- NASCAR: https://www.cmo.com/features/articles/2018/2/28/3-ways-nascar-is-using-emerging-tech-to-attract-younger-audiences.html#gs.eqg4zn.
- PNB MetLife: https://www.pnbmetlife.com/about-us/convrse/index.html.
- PwC: https://www.businessinsider.com/top-companies-using-virtual-reality-in-the-workplace?IR=T#accentures-employees-connect-using-vr-based-igloos-6.
- Shell: https://www.shell.com/inside-energy/deep-water-safety-training-goes-virtual.html.
- Takeda: https://www.benefitnews.com/news/takedas-new-recruiting-tactic-virtual-reality-office-tours.
- Tata Motors: https://tataelxsi.com/industries/automotive/visualization-digital-marketing/ar-vr.html.
- Verizon: https://vrscout.com/news/verizon-vr-hostage-robbery-training/.
- Volkswagen: https://www.volkswagenag.com/en/news/stories/2018/05/what-does-a-vr-developer-actually-do-mr-kuri.html.# I. Wohlgenannt et al.: Virtual Reality, Bus Inf Syst Eng 62(5):455–461 (2020)

EBSCOhost databases for ‘‘virtual reality’’ revealed more than 13,000 publications, almost half of which were published since 2015. However, the search also confirmed that many of these publications use the term not as it has been characterized previously but to refer to any of the VR-related concepts. The two domains that have published the most VR research are medicine and education. For example, studies have assessed VR technology’s effectiveness in improving surgeons’ operating room performance (e.g., Gallagher et al. 2005; Seymour et al. 2002), and VR-based exposure therapies have been developed for phobias like arachnophobia (i.e., fear of spiders) (e.g., Garcia-Palacios et al. 2002) and glossophobia (i.e., fear of public speaking) (Poeschl and Doering 2012).

As IS research focuses on the intersection of technology and business, studying the professional application of VR technology bears significant potential for IS research. However, although IS researchers have pointed out that VR is ‘‘a technology in need of IS research’’ (Walsh and Pawlowski 2002, p. 297), most IS studies have focused on virtual worlds or environments rather than VR technology (e.g., Chaturvedi et al. 2011; Davis et al. 2009; Pannicke and Zarnekow 2009). Nevertheless, the publication trend is clearly positive; most of the articles that actually deal with VR have been published within the last 5 years, and conferences like the Hawaii International Conference on System Sciences (HICSS) (Parvinen et al. 2018) and journals like the Journal of Management Information Systems (JMIS) (Cavusoglu et al. 2019) have encouraged IS researchers to investigate VR with dedicated tracks and special issues.

Yet, is VR a topic worth studying in IS research or just a buzzword that may disappear from the IS research landscape in a few years? This article argues that VR technology is rapidly becoming more mature and that various companies continue to use it for diverse purposes, so it is likely that VR technology will have a significant effect on individuals, groups, organizations, and society, making it a relevant topic for future research. In fact, IS researchers can meaningfully contribute to understanding and theorizing VR systems, so they are particularly challenged to study the design and use of VR technology:

- Design of VR systems Designing information systems is a core objective of the IS discipline, but only a few researchers have conducted design-oriented studies about VR systems (e.g., Metzger et al. 2017; Walsh 2001). From a design perspective, researchers should evaluate the effectiveness of various approaches to designing VR systems. As the IS community has extensively studied the design of VR-related concepts like virtual worlds (e.g., Chaturvedi et al. 2011), previous work may provide a useful starting point. Still, IS researchers must re-assess the applicability of available design principles and develop new design theory. In particular, VR should be simultaneously studied from both a hardware perspective and a software perspective, which distinguishes design-oriented VR research from research on other technologies and applications, as VR hardware significantly changes how users interact with software and creates subjective feelings, especially feelings of presence, that go beyond other types of technology that IS research has studied. On the other hand, VR hardware has several limitations that design-science researchers must consider. For example, fine finger activities, such as handwriting and typing, are difficult to perform using the coarse controllers that standard VR systems currently provide. In addition, even though modern VR systems have fewer negative effects than earlier systems did in terms of discomfort and motion sickness, the use of HMDs can still be exhausting. However, as VR technology is constantly evolving, these problems could soon be solved.
- Use of VR systems IS researchers have studied VR’s effectiveness in corporate education and training (Muller Queiroz et al. 2018b), in training technical customer service (Metzger et al. 2017), in marketing (Muller Queiroz et al. 2018a), in supporting team-building activities (Winkler 2018), and in increasing users’ intentions to collaborate (Mütterlein et al. 2018). In addition, IS researchers have studied VR-enhanced shopping environments (Peukert et al. 2019) and VR fitting rooms (Yang and Xiong 2019) and have explored VR’s impact on business models (Mütterlein and Hess 2017). Still, considering the usefulness that VR technology continues to demonstrate in industry, IS researchers’ interest in VR remains low. Most of the extant research has been based on isolated case studies, so IS research is challenged to study VR’s adoption and effectiveness more comprehensively and to identify its benefits and drawbacks for various purposes. For example, Steffen et al. (2019) identified VR’s affordances, such as reducing the risks in simulating potentially hazardous situations and depicting the nonexistent through VR. However, VR’s effectiveness in various application contexts remains elusive, as the technology develops much more quickly than the research.

# 7 Conclusions

As VR technology has developed rapidly in recent years, VR has become a trendy topic in IT. This article provides a# I. Wohlgenannt et al.: Virtual Reality, Bus Inf Syst Eng 62(5):455–461 (2020)

short history and conceptualization of VR, distinguishes it from related terms and acronyms, and identifies several areas of application. IS research has not yet sufficiently studied VR technology, so the article discusses two fundamental areas related to the design and use of VR that deserve IS researchers’ attention. While the development of a research agenda is outside the scope of this article, it may still inform and guide future research.

# References

Gallagher AG, Ritter EM, Champion H, Higgins G, Fried MP, Moses G, Smith CD, Satava RM (2005) Virtual reality simulation for the operating room: proficiency-based training as a paradigm shift in surgical skills training. Ann Surg 241(2):364–372

Garcia-Palacios A, Hoffman H, Carlin A, Furness TA III, Botella C (2002) Virtual reality in the treatment of spider phobia: a controlled study. Behav Res Ther 40(9):983–993

Girvan C (2018) What is a virtual world? Definition and classification. Edu Technol Res Dev 66(5):1087–1100

Jerald J (2016) The VR book: human-centered design for virtual reality. Association for Computing Machinery and Morgan & Claypool

Linden A, Fenn J (2003) Understanding Gartner’s hype cycles. Strategic Analysis Report No. R-20-1971. Gartner Inc

Barfield W, Zeltzer D, Sheridan T, Slater M (1995) Presence and performance within virtual environments. In: Barfield W, Furness TA III (eds) Virtual environments and advanced interface design. Oxford University Press, New York, pp 473–513

Berg LP, Vance JM (2017) Industry use of virtual reality in product design and manufacturing: a survey. Virtual Real 21(1):1–17

Bjo¨rk S, Holopainen J (2005) Patterns in game design. Charles River Media, Boston

Bowman DA, McMahan RP (2007) Virtual reality: how much immersion is enough? Comput 40(7):36–43

Brooks FP (1999) What’s real about virtual reality? IEEE Comput Graph Appl 19(6):16–27

Brown A, Green T (2016) Virtual reality: low-cost tools and resources for the classroom. TechTrends 60(5):517–519

Buhl HU, Winter R (2009) Full virtualization – BISE’s contribution to a vision. Bus Inf Syst Eng 1(2):133–136

Cabero J, Barroso J (2016) The educational possibilities of augmented reality. New Approach Edu Res 5(1):44–50

Cavusoglu H, Dennis AR, Parsons J (2019) Special issue: immersive systems. J Manag Inf Syst 36(3):680–682

Chaturvedi AR, Dolk DR, Drnevich PL (2011) Design principles for virtual worlds. Manag Inf Syst Q 35(3):673–684

Cruz-Neira C, Sandin DJ, DeFanti TA (1993) Surround-screen projection-based virtual reality: the design and implementation of the CAVE. In: Proceedings of the 20th annual conference on computer graphics and interactive techniques, Anaheim, pp 135–142

Davis A, Murphy J, Owens D, Khazanchi D, Zigurs I (2009) Avatars, people, and virtual worlds: foundations for research in metaverses. J Assoc Inf Syst 10(2):90–117

Drascic D, Milgram P (1996) Perceptual issues in augmented reality. In: SPIE, the international society for optics and photonics, proceedings, vol 2653: stereoscopic displays and virtual reality systems III, San Jose, pp 123–134

Farshid M, Paschen J, Eriksson T, Kietzmann J (2018) Go boldly! Explore augmented reality (AR), virtual reality (VR), and mixed reality (MR) for business. Bus Horiz 61(5):657–663

Fast-Berglund A˚, Gong L, Li D (2018) Testing and validating extended reality (xR) technologies in manufacturing. Procedia Manuf 25:31–38

Flavia´n C, Iba˜ez-Sa´nchez S, Oru´s C (2019) The impact of virtual, augmented and mixed reality technologies on the customer experience. J Bus Res 100:547–560

Fortune Business Insights (2019) Virtual reality market size, share & industry analysis. https://www.fortunebusinessinsights.com/industry-reports/virtual-reality-market-101378. Accessed 13 Apr 2020

Freina L, Ott M (2015) A literature review on immersive virtual reality in education: state of the art and perspectives.# I. Wohlgenannt et al.: Virtual Reality, Bus Inf Syst Eng 62(5):455–461 (2020)

# References

Poeschl S, Doering N (2012) Virtual training for fear of public speaking – design of an audience for immersive virtual environments. In: Proceedings of the IEEE virtual reality conference 2012, Costa Mesa

Raitt D (1991) The Electronic Library manager’s guide to virtual reality. Electron Libr 9(1):3–5

Rebenitsch L (2015) Managing cybersickness in virtual reality. XRDS Crossroads 22(1):46–51

Sanchez-Vives MV, Slater M (2005) From presence to consciousness through virtual reality. Nat Rev Neurosci 6(4):332–339

Schultze U (2010) Embodiment and presence in virtual worlds: a review. J Inf Technol 25(4):434–449

Seymour NE, Gallagher AG, Roman SA, O’Brien MK, Bansal VK, Andersen DK, Satava RM (2002) Virtual reality training improves operating room performance: results of a randomized, double-blinded study. Ann Surg 236(4):458–464

Sherman WR, Craig AB (2019) Understanding virtual reality: interface, application, and design, 2nd edn. Morgan Kaufmann, Cambridge

Slater M, Sanchez-Vives MV (2016) Enhancing our lives with immersive virtual reality. Front Robot AI 3(74):1–47

Slater M, Wilbur S (1997) A framework for immersive virtual environments (FIVE): speculations on the role of presence in virtual environments. Presence Teleoper Virt Environ 6(6):603–616

Steffen JH, Gaskin JE, Meservy TO, Jenkins JL, Wolman I (2019) Framework of affordances for virtual reality and augmented reality. J Manag Inf Syst 36(3):683–792

Steuer J (1992) Defining virtual reality: dimensions determining telepresence. J Commun 42(4):73–93

Suh K-S, Lee YE (2005) The effects of virtual reality on consumer learning: an empirical investigation. Manag Inf Syst Q 29(4):673–697

Sutherland IE (1965) The ultimate display. In: Proceedings of the international federation for information processing congress, New York, pp 506–508

Valente L, Feijo ´ B, Ribeiro A, Clua E (2016) The concept of pervasive virtuality and its application in digital entertainment systems. In: Proceedings of the 15th international conference on entertainment computing, Vienna, pp 187–198

Valmaggia L (2017) The use of virtual reality in psychosis research and treatment. World Psychiatr 16(3):246–247

Walsh KR (2001) Virtual reality for learning: some design propositions. In: Proceedings of the 7th Americas conference on information systems, Boston, pp 61–66

Walsh KR, Pawlowski SD (2002) Virtual reality: a technology in need of IS research. Commun Assoc Inf Syst 8(20):297–313

Winkler N (2018) Using virtual reality in virtual teams: studying the effects of virtual team building activities. In: Proceedings of the 39th international conference on information systems, San Francisco

Yang S, Xiong G (2019) Try it on! Contingency effects of virtual fitting rooms. J Manag Inf Syst 36(3):789–822