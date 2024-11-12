## Start of PDF Naman_Omar 3


---

## 


---

## Abstract

Eye tracking is becoming increasingly available in head-mounted virtual reality displays with various headsets with inte- grated eye trackers already commercially available. The applications of eye tracking in virtual reality are highly diversified and span multiple disciplines. As a result, the number of peer-reviewed publications that study eye tracking applications has surged in recent years. We performed a broad review to comprehensively search academic literature databases with the aim of assessing the extent of published research dealing with applications of eye tracking in virtual reality, and highlighting challenges, limitations and areas for future research.



Keywords Eye tracking · Virtual reality





Introduction

Catering the stimulus to the user’s actions, such as head movement, eye movement, and hand movement, is the core principle of virtual reality (VR). Head-mounted display (HMD)-based VR depends on the ability to track head movements and render visual scene motion contingent on head movement. This advance was made possible by improvements in head tracking technology. Moving forward, similar improvements in HMD-based eye tracking technology will allow for fundamental advances in VR applications based on eye movement.

Consumer VR HMDs have significantly advanced in recent years in terms of tracking, latency, refresh rate, resolution and optics (Koulieris et al. 2019) with major consumer platforms (HTC Vive, Oculus Rift, Sony VR) already having presented second or third generation HMDs. Eye tracking technology has been commercially available for decades on desktop displays, but in recent years, a number



 Isayas Berhe Adhanom iadhanom@nevada.unr.edu

Paul MacNeilage pmacneilage@unr.edu

Eelke Folmer efolmer@unr.edu



1	University of Nevada Reno, 1664 N Virginia St, Reno, NV 89557, USA

of commercially available solutions have been developed that facilitate eye tracking on consumer VR HMDs. As a result, research and development surrounding eye tracking in HMDs has accelerated and expanded in recent years.

A number of literature reviews have provided an overview of general eye tracking applications (Duchowski 2002) and gaze-based interaction (Duchowski 2018) without focusing on VR. Additionally, there are several reviews, that we highlight in this review, that focus on specific applications of eye tracking in VR, including reviews by Rappa et al. (2019), Souchet et al. (2021), Lutz et al. (2017), Harris et al. (2019), and Souchet et al. (2021). However, to the best of our knowledge, no reviews exist that exclusively aim to provide a broad overview of eye tracking applications for VR HMDs. We believe that interest in this area is growing rapidly, given the large number of studies that utilize eye tracking in a VR setting. It is therefore timely to provide a broad overview of the applications, challenges and limitations of eye tracking in VR.

This paper provides a broad review of current and seminal literature of applications of eye tracking in VR and identifies limitations, challenges and areas for future research. The rest of this paper is organized as follows: Sect. 2 discusses background concepts about eye movements and eye movement tracking methods in VR that will help the reader to understand the concepts discussed in later sections. Section 3 presents the applications of eye tracking in VR by organizing them into seven broad application areas. Finally,




---

## 1 3


---

## Eye tracking data quality

Issues with eye tracker data quality are arguably the biggest technological challenges for eye tracking in VR. Table 1 shows the manufacturer reported data quality specifications for the currently most used HMD-based eye trackers.

Spatial Precision: Applications that use small fixational eye movements, like tremors, drifts and microsaccades require high-precision eye trackers. Andersson et al. (2010) point out that for such tasks the eye tracker should have an RMS precision value that is lower than 0.03◦. Table 1 shows that not all manufacturers of VR-based eye trackers report the precision value of the eye trackers, and those that have reported precision values seem to have precision values that are worse than the recommended range needed to detect small fixational movements.

Spatial Accuracy: Table 1 shows that the most popular HMD-based eye trackers report accuracy values between 0.5◦ and 1.1◦. However, manufacturer reported specifications could be misleading, as these metrics are often measured under ideal conditions and do not reflect the accuracy under realistic usage scenarios (Adhanom et al. 2020a).

Additionally, most current HMD-based eye trackers have the highest accuracy and precision in a small central region of the FOV. Outside this region, accuracy and precision drop substantially. For example, the HTC Vive Pro Eye reports accuracy values of 0.5◦ - 1.1◦ within the central 20◦ of the FOV. Outside this region, the accuracy is not guaranteed. This limits researchers or developers from using the whole FOV for eye tracking-based experiences.









Table 1 Current widely used HMD-based eye trackers and their manufacturer specifications. Note that the manufacturer specifications are calculated under ideal conditions and may be hard to reproduce in realistic settings



Pupil Labs	1◦





Varjo VR-1	1◦

200 Hz

Varjo VR-3	Sub-degree accuracy	Not reported	200 Hz	Not reported




---

## Calibration



The time consuming and repetitive nature of the calibration procedure could be an obstacle for the wide adoption of eye tracking and could make eye tracking unattractive for applications that require instant use.

Moreover, some users, such as children and users with attentional deficits, have diﬃculty completing the calibration procedure as they lose interest in the procedure after a few targets have been shown resulting in an unsuccessful calibration procedure (Blignaut 2017). Alternative eye tracking procedures have been explored to address the issues with the calibration procedure, the most common of which use smooth pursuit eye movements to dynamically calibrate the eye tracker without explicitly asking the user to look at point targets (Blignaut 2017; Drewes et al. 2019). Although these methods require less time and can be performed without the user being aware of the calibration procedure, they generally produce lower quality eye tracking data. As a result, these calibration methods are not in use in any HMD- based eye tracker we are aware of (Drewes et al. 2019).

After the calibration procedure, changes in lighting, eye geometry and the relative position of the eye tracking camera with respect to the user’s eyes could cause calibration errors. The latter is the main cause of calibration error in HMD-based eye trackers, as small movements of the VR headset due to the user’s movements could cause calibration errors. All these factors together cause the calibration to decay—the calibration error and spatial accuracy of the eye tracker worsens over time. We call this decay drift. Drift is a common cause of low quality eye tracking with some eye trackers showing calibration drift of about 30% in the first 4 minutes and 30 seconds after calibration (Ehinger et al. 2019). Calibration errors are hard to deal with due to their dynamic nature. However, the severity of calibration errors could be reduced by making sure the HMD does not move relative to the head after calibration and repeating the calibration procedure multiple times during long sessions. Further research is still needed to develop calibration procedures that are easy, comfortable, and robust to drift.





Data privacy and security challenges

With eye tracking becoming ubiquitous in new HMDs, there has been growing concern about the privacy of eye tracking data collected on these devices. Kröger et al. (2020) and Steil et al. (2019) explained that eye tracking data contain rich information content that could be used to infer a vast amount of personal information about the user including: the user’s interest in a scene; the user’s cognitive load and cognitive state; various mental disorders including Alzheimer’s, Parkinson’s and schizophrenia; the user’s




---

## Improving rendering efficiency



Foveated Rendering renders the areas of the display that lie at the user’s center of eye gaze with the highest resolution and degrades the resolution with increasing eccentricity (Patney et al. 2016; Guenter et al. 2012). This leads to improvements in rendering performance and rendering quality, and has been shown to achieve up to 50-70% in performance savings (Weier et al. 2017). Popular implementations of foveated rendering include those of Guenter et al. (2012) and Patney et al. (2016).

Compression of the peripheral parts of the scene, however, could introduce various perceptible artifacts such as tunnel vision, aliasing and flicker that could distract users and reduce immersion (Patney et al. 2016). To address these artifacts, Guenter et al. (2012) used three gaze centered concentric circles with resolution degrading progressively towards the periphery. Whereas Turner et al. (2018) propose a technique to reduce motion induced flicker in the periphery using phase-alignment—aligning the rendered pixel grid to the virtual scene content during rasterization and upsampling.




---

## Reducing transmission load



Streaming immersive omnidirectional video (ODV), also known as 360◦ video, to VR devices is a growing trend. When ODV is viewed in VR, it allows the user to look around a scene from a central point of view and provides a more immersive visual experience than traditional 2D video playback. However, streaming ODV across content

delivery networks and displaying it in a VR device are challenging in part due to the large resolution requirement of the video. Foveated rendering could be used to reduce computational rendering cost once the streaming content is available in the user device. However, streaming the content from where it is stored to the end user’s device is in itself a big challenge. As discussed above, viewers can only watch a small part of the streaming content due to the physiological constraints of the human eye. As a result, gaze-contingent (foveated) transmission techniques have been proposed to minimize the amount of data transmitted to the user’s device (Lungaro et al. 2018; Romero-Rondón et al. 2018; Ozcinar et al. 2019). These techniques gener- ally aim to reduce the amount of data transferred to the user’s device using gaze-adaptive streaming. An exemplar gaze-adaptive streaming technique is that of Lungaro et al. (2018) where user’s eye gaze is continuously tracked and gaze positions are transmitted to a Foveal Cloud Server, which, in return, transmits the content with high visual quality around the users’ fixations points while lowering the bandwidth required to encode the content everywhere else. Evaluation of the technique showed that it could lower the bandwidth requirement for streaming VR con- tent by up to 83%.






---

## Reducing discomfort due to depth conflicts



Conventional stereoscopic 3D near-eye displays, like those used in VR HMDs, create 3D sensation by showing each eye a distinct 2D image where each image is rendered with slight differences to create binocular disparity. Binocular disparity is a critical stimulus to vergence, which is a critical depth cue. However, the distance between the user’s eyes and the image is fixed by the location of the display screen. As a result, although the 3D imagery is displayed at various depths, the eyes are always focused at a single depth. Thus, the display does not depict correct retinal blur which leads to the inability of the eyes to focus or accommodate correctly, causing loss of accommodation—another critical depth cue. This mismatch is called vergence-accommodation conflict (VAC) and is a source of visual discomfort including eye strain, blurred vision and headaches (Kramida 2016; Shibata et al. 2011; Hoﬀman et al. 2008).

Matsuda et al. (2017) provide a review of several “accommodation-supporting” displays that have been proposed to address VAC, including varifocal displays, monovision displays, accommodation-invariant (EDOF) displays, multifocal displays, retinal scanning displays, light field displays and holographic displays. Out of these approaches, varifocal displays utilize eye tracking to mitigate VAC. Varifocal displays use eye tracking to




---

## Reducing VR sickness



The potential of gaze-contingent displays to reduce the incidence of VR sickness has also been explored. Adhanom et al. (2020b) explored the utility of foveated field-of-view (FOV) restriction to reduce VR sickness. FOV restriction (tunneling) is a popular technique to reduce visually induced motion sickness (Fernandes and Feiner 2016) that involves blocking the peripheral view of users by a restrictor to minimize optical flow in the peripheral parts of the retina which are sensitive to it. Most current implementations of FOV restriction do not respond to eye gaze and could reduce immersion and the sense of presence. Foveated FOV restriction (Adhanom et al. 2020b), however, implements a restrictor that moves with the user’s eye gaze that would allow the users to see a bigger part of the visual scene while still blocking their peripheral vision. This allows greater visual exploration of the environment when compared to fixed FOV restrictors.




---

## Summary



Eye tracking in VR in the clinical context is used for diagnostic, therapeutic, and interactive purposes. Neuro- ophthalmic diagnosis is traditionally conducted in a very rudimentary manner at the patient’s bedside. Development of uniform HMD-based diagnostic tools with precise stimulus control to elicit specific and relevant eye movements, e.g., pursuit, saccades, nystagmus, etc., along with automated analysis of the resulting eye movements holds great promise. Clinical applications could also benefit from the development of more usable applications that are easy to comprehend and use for the patient as well as the clinician practitioner. This has the potential to allow patients to self- diagnose or self-treat neurological disease and provide

clinicians with easy-to-use tools.

Most current clinical applications of VR and eye tracking use consumer hardware that may not be appropriate for clinical use. For example, Lutz et al. (2017) mention that most HMDs have to be modified by removing, enclosing or replacing their textile foam and Velcro components in order to comply with clinical hygiene regulations. Most HMDs and their eye tracking components also cannot withstand clinical disinfection procedures. Thus, there is still work to be done to produce clinical grade HMDs.

In conclusion, as the data quality of eye trackers, and the VR hardware and software continue to improve, we expect the clinical applications of eye tracked VR to continue to grow.

Challenges and limitations

In this section, we discuss the inherent challenges and limitations of eye tracking and how these challenges aﬀect eye tracking in VR.

Technological limitations




---

## Selection and manipulation



Manipulation, one of the fundamental tasks in both physical and virtual environments, refers to interaction tasks that involve selecting and manipulating virtual objects in a virtual environment (VE). These could be distilled into basic tasks that include pointing at, selecting, positioning, rotating and scaling virtual objects (LaViola Jr et al. 2017).

Selection According to Bowman et al. (2001), a selection technique has to provide means to indicate an object, a mechanism to confirm its selection (confirmation of selection) and some form of feedback to guide the user during the selection task. Indication of an object can be accomplished through object touching, pointing, occlusion/ framing or indirect selection. Eye gaze-based object indication is accomplished with pointing, whereas eye gaze- based confirmation of selection is accomplished through dwell and other bi-modal mechanisms (Bowman et al. 2001).




---

## Virtual locomotion (travel)



Virtual locomotion is the act of navigating VEs in VR. Designing eﬃcient and universally accessible locomotion techniques presents considerable challenges (Al Zayer et al. 2020). Eye movements have been used to develop virtual locomotion interfaces that map eye movements to the control





Fig. 2 A gaze-interactive user interface overlayed over a virtual environment. Image courtesy of Zhang et al. (2019)




---

## System control



LaViola Jr et al. (2017) defines system control as an interaction task in which commands are issued to: (1) request the system to perform a particular function; (2) change the mode of interaction, or (3) change the system state. System control allows a user to control the flow of tasks in the system.

Perhaps the simplest form of eye gaze-based control mechanism is using blink as a binary input modality similar to a switch. Two example applications of blink- based control are the study by Xiao et al. (2019) that presented a technique where users can issue commands to the system, to control a VR-based music-on-demand system, by blinking in synchrony with a target button from several flashing buttons; and the study by Kumar and Sharma (2016) that proposed a technique where users could control a game using various blink commands including blink, double blink and wink eye movements. Requiring users to alter their natural blink rate, however, can cause eye strain, dry eyes and eye fatigue in users (Hirzle et al. 2020). Subjective results from the study by Kumar and Sharma (2016) also indicate that frequent blinking and winking leads to eye fatigue in users. Blink- based interfaces tend to be inaccurate because voluntary (intentional) blinks are hard to distinguish from natural blinks and thus require users to perform extended blinks. Extended blinks, however, have obvious disadvantages like slowing down the flow of interaction and blocking the user’s sight for the duration of the extended blink. Consequently, eye gaze-based system control applications mostly rely on the point-and-select paradigm discussed in Sect. 3.2.1.

Symbolic input—the input of characters and numbers—

is an important and fundamental system control task. Symbolic input in VR remains to be challenging due to the fact that users’ eyes are obstructed from the physical world making the use of conventional text input devices, like physical keyboards, challenging, if not impossible.






---

## Representation



Users in CVEs are generally represented as virtual avatars. Natural looking and personalized avatars have been shown to improve immersion and presence in VR and to aid better communication between users Waltemate et al. (2018). Rendering the human face accurately, however, is still a particularly challenging problem. This stems from the extreme sensitivity of humans to rendering artifacts in photo-realistic facial renderings which leads to the Uncanny Valley problem (Mori et al. 2012). Previous studies show that avatars with realistic eye gazes look more natural and realistic (Garau et al. 2003); therefore, virtual avatars that have human face models should be modeled with realistic eye movements or eye movements that are consistent with




---

## Communication



According to Burgoon et al. (1994), social human communication encompasses verbal and non-verbal communication, references to objects and references to the environment. The eyes play an important role in non- verbal communication (Steptoe et al. 2010) and in providing references to objects and the environment. Deictic gestures

are one of the most fundamental forms of communication that allow users to indicate objects they are referencing (Mayer et al. 2020). Although the typical deictic gesture in humans is performed through pointing by extending the arm and the index finger, previous work has shown that pointing in VR has limited accuracy (Mayer et al. 2018). As a result, eye gaze has been used as a natural way of providing deictic references (i.e., indicating where your partner is looking at) in CVEs (D’Angelo and Gergle 2016). Among others, the study by Pejsa et al. (2017) is a good example, where the authors developed a gaze model that would allow virtual agents to signal their conversational footing, i.e., signaling who in the group are the speakers, addressees, by-standers, and over-hearers.




---

## Interaction



In CVEs, interaction techniques are aimed at allowing the cooperative manipulation of objects or interaction elements in the VE. Cooperative manipulation (Co-manipulation) refers to the situation where two or more users interact cooperatively on the same object at the same time. Eye gaze-based interaction, among other methods, has been used in unimodal or multimodal fashion to allow CVE users to select or manipulate objects cooperatively. The recent work by Piumsomboon et al. (2017) is a sample application of eye tracking for cooperative manipulation. The authors present a collaborative system combining both VR and AR that supports bi-modal eye gaze-based interaction. In this system, collaborating users could use their eye gaze to select objects and cooperatively manipulate them with their hands. The technique also allows collaborating parties to gaze at the same target object to trigger an action.




---

## Measuring cognitive skills



Traditionally, the interview procedure-based think-aloud protocol has been the most frequently used technique to understand cognitive processes during learning (Lai et al. 2013; Xie et al. 2021). However, as discussed above, this method could be subjective and suﬀers from validity issues. Eye movement tracking allows researchers to identify and measure the aspects of the learning environment that influence cognitive skill acquisition. Previous studies show that temporal characteristics of fixation, such as fixation duration, are associated with cognitive eﬀort (Renshaw et al. 2009). According to Kiili et al. (2014), longer fixation

duration might indicate increased cognitive eﬀort suggesting that participants are engaging in analysis and problem- solving. Whereas shorter fixation duration might suggest that participants might be glossing over content because of their diﬃculty interpreting and comprehending it. Moreover, a review by Souchet et al. (2021) identifies that cognitive load can be measured with pupil diameter in learning tasks.




---

## Measuring affective skills



VR simulations have been successfully used to teach interpersonal, communicative and other aﬀective skills. Aﬀect refers to feelings, emotions and moods. The most common current methods of assessing aﬀect and aﬀective skill acquisition in simulated learning environments are self-reported measures that usually interrupt the learning experience to collect verbal or questionnaire-based responses from participants, or methods that collect data after the experiment, which may produce unreliable or biased results as discussed above (Tichon et al. 2014). Tichon et al. (2014) underscore the importance of uninterrupted and continuous measures of aﬀect, and introduce a technique that measures the anxiety of pilot trainees in a flight simulation using eye movements and pupillometry. The results of the study indicate that fixation duration and saccade rate corresponded reliably to pilot self-reports of anxiety which suggests eye tracking-based measures could serve as reliable measures of aﬀective skill acquisition during simulated training.




---

## Measuring visual attention



Visual attention refers to the ability of the human visual system to selectively process only relevant areas of interest from the visual scenes (Borji et al. 2019). Modeling users’ visual attention in VEs allows us to understand how people explore VEs and what elements of the VE attract their attention. Previous studies indicate that experts and novices show diﬀerent visual attention patterns in learning tasks (Duchowski 2018). However, previous research findings have been inconsistent when looking at the average fixation duration exhibited by experts and novices. Some studies show that experts tend to exhibit shorter average fixation duration; they make better use of visual elements outside their foveal region and make use of a larger visual span area (Duchowski 2018). A meta-analytic review by Mann et al. (1998) also showed that experts used fewer fixations of longer duration compared to no experts. The review points out that experts’ eye movements are moderated by several factors including the task type and the environment. However, a study conducted outside VR by Eivazi et al. (2017) has found the opposite results showing that experts in a neurosurgery task showed longer fixation duration compared to novices. Moreover, a study by Harris et al.




---

## Assessing learning outcomes



Eye tracking could be used to analyze learning outcomes and learning performance in VR-based training scenarios (Tichon et al. 2014). Previous studies (Rappa et al. 2019) have found that average fixation duration and number of revisits can predict the learning outcomes or the eﬀectiveness of VR-based training. Identifying and predicting learning outcomes could allow participants to identify their areas of strengths and weaknesses in the given learning task. Additionally, a visual behavior known as the quiet eye has been shown to be a characteristic of high levels of expertise, particularly in tasks that require motor skills (Vickers 2000). Quiet eye is the final gaze fixation prior to the execution of a movement towards a target. However, in a study of quiet eye in virtual reality, Harris et al. (2021b) found that the quiet eye had little to no impact in skill execution.




---

## Measuring immersion



Immersion refers to the objective level of sensory fidelity provided by a VR system, whereas presence is defined as the subjective sensation of being there in a scene depicted by a medium, usually virtual in nature (Bowman and McMahan 2007; Barfield et al. 1995). In simulated learning environments, it is widely believed that better immersion leads to better learning outcomes (Jensen and Konradsen 2018). Previous studies show that eye movements correlate with the immersiveness of virtual environments and could be used to measure immersion in virtual environments (Jensen and Konradsen 2018). Results from a study by Jennett et al. (2008) indicate that the participants’ number of fixations per second significantly decreased overtime in an immersive condition and significantly increased overtime in a non- immersive condition. These results indicate that participants were more concentrated in the immersive condition, while they were more distracted in the non-immersive condition.




---

## Measuring usability



Usability is often associated with ease of use and is an important part of user experience. Usability deals with measuring the aspects of the virtual environment that make it easy to use, understandable and engaging (Kiili et al. 2014). The design aspects of the environment and the

elements within it could aﬀect the cognitive performance of the participant (Kiili et al. 2014). Thus, simulated learning environments should be designed with optimal task performance in mind. Eye tracking could help in identifying factors that aﬀect usability and be an objective measure of usability in VEs (Kiili et al. 2014). In particular, average fixation duration and gaze points within areas of interest indicate which elements of the scene attract the user’s attention and are correlated with virtual environment design features (Renshaw et al. 2009).




---

## Diagnostic applications



The potential of using eye movements to identify markers of psychiatric, neurological and ophthalmic disorders is well researched (Trillenberg et al. 2004; Clark et al. 2019).




---

## Therapeutic applications



In the clinical context, eye tracking in VR has been used for neuropsychological, physical and ophthalmic therapeutic interventions (Lutz et al. 2017). In therapeutic applications, eye tracking is commonly used as an objective measure of the patient’s symptoms. The objective metric could then be used to assess the progress of treatment or to personalize the treatment experience to the patient.

Eye tracking has been used as an objective metric in the VR-based treatment of Generalized anxiety disorder (GAD) and various phobic disorders. GAD is a mental health condition marked by excessive, exaggerated and consistent

anxiety and worry about everyday life events. Phobias are similar to anxiety disorders, but the anxiety is specific to an object or situation. The treatments for those disorders commonly require patients to confront the situations they fear through a process known as exposure therapy. Although exposure therapy has been proven to be highly eﬀective, recreating the feared situations in real life is challenging and could put the patient in danger, for example, exposing a person who has fear of heights in an actual elevated space. VR, on the other hand, can provide a safe simulated environment for exposure therapy. Various studies have demonstrated that persons with psychological disorders show attentional biases and different eye movement patterns when they are exposed to the situation they fear. Consequently, eye tracking has been an integral part of virtual reality exposure therapy (VRET). For example, in a VR-based therapy for social phobia, Grillon et al. (2006) used eye tracking movement tracking to objectively assess eye gaze avoidance, a persistent symptom in social phobia. VR-based applications have a demonstrated potential for treatment of various psychiatric and neurological disorders. However, the treatment tasks should be managed eﬀectively to keep the user engaged and to ensure that the task is within the user’s capability. Bian et al. (2019) discusses that a task that is too difficult for the patient could be overwhelming and cause anxiety while a task that does not fully utilize the patient’s capability might cause boredom. Eye tracking in VR can be used to provide real-time data to assess the performance and engagement of patients and create a feedback loop to dynamically update the treatment experience in response to the user’s engagement and

performance.




---

## Interactive applications in a clinical context



Various clinical applications of VR require the user to interact with the environment. Many patients, however, might not have the physical ability (e.g., patients with motor disabilities) to use a hand-held VR control device. Previous studies have shown the suitability of eye tracking- based interaction interfaces for clinical VR applications. Eye tracking-based interaction is mainly used to increase the immersiveness of the VR experience to illicit a stronger sense of virtual presence in patients.

Al-Ghamdi et al. (2020) evaluated the effectiveness of VR-based therapy at reducing the pain experienced by patients with severe burn wounds during non-surgical wound debridement procedures. However, the injuries prevent most patients from using conventional VR controllers to interact with the virtual environment. Thus, they investigated whether eye tracking-based interaction can enhance the analgesic effectiveness of the VR-based distraction for pain management. The results of the study indicate that




---

