## ABSTRACT

The paper investigates how users want to transfer 3D virtual objects between a standard desktop monitor and an augmented reality head-mounted display setup during a Cross Reality session. An elicitation study with 20 participants was conducted to gather their preferred interactions and input modalities to select 3D virtual objects and trigger the transition. Participants were allowed to propose interactions belonging to various input modalities or a combination of interactions that utilize multiple input modalities. We labeled the observed data and analyzed the resulting 1200 input observations to derive a set of recommended interactions. We found that mid-air hand gestures Drag, Tap, and Grab were the most commonly proposed interactions and should be considered as the primary interaction for CR virtual objects transition assisted with other interactions and input modalities as the supplementary base on different user scenarios.







Permission to make digital or hard copies of all or part of this work for personal or classroom use is granted without fee provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. Copyrights for components of this work owned by others than the author(s) must be honored. Abstracting with credit is permitted. To copy otherwise, or republish, to post on servers or to redistribute to lists, requires prior specific permission and/or a fee. Request permissions from permissions@acm.org.

AVI 2024, June 03–07, 2024, Arenzano, Genoa, Italy

© 2024 Copyright held by the owner/author(s). Publication rights licensed to ACM.

ACM ISBN 979-8-4007-1764-2/24/06

https://doi.org/10.1145/3656650.3656698


---

## CCS CONCEPTS

Human-centered computing → User interface design; User centered design; Gestural input; Empirical studies in HCI; Mixed / augmented reality; Interaction techniques; User stud- ies.


---

## KEYWORDS

Cross Reality, Elicitation Study, Augmented Reality, Mixed Reality

ACM Reference Format:

Nanjia Wang, Daniel Zielasko, and Frank Maurer. 2024. User Preferences for Interactive 3D Object Transitions in Cross Reality - An Elicitation Study. In International Conference on Advanced Visual Interfaces 2024 (AVI 2024), June 03–07, 2024, Arenzano, Genoa, Italy. ACM, New York, NY, USA, 9 pages. https://doi.org/10.1145/3656650.3656698




---

## INTRODUCTION

In recent years an increasing number of researchers have started using benefits brought by systems that connect multiple stages on the reality-virtuality continuum (RVC) by design [22]. Cross Reality (CR) is a technology that seamlessly connects different stages on the RVC and is defined as a technology that supports transition between or concurrent usage of multiple systems on the RVC. CR is, for example, beneficial in data analysis, when part of the analysis workflow is more productive and effective with a standard monitor device (SMD), due to higher readability and increased ergonomics than in currently commercially available HMDs [29]. In addition, users can interact with SMD using input modalities they are famil- iar with, such as mouse, keyboard, and touchscreen. However, the



AVI 2024, June 03–07, 2024, Arenzano, Genoa, Italy	Wang, et al.





SMD lacks stereoscopic presentation, leading to lower immersion and fewer depth cues [12, 32], are less engaging, and less intuitive when interacting with 3D virtual objects [28], all characteristics that might be beneficial in other steps of the analysis workflow. This is the reason why DeskVR was conceptualized [47], a scenario in which the display device had to be switched during the workflow. Modern video pass-through displays now enable an even smoother integration of different stages along the continuum. Next to the user transitioning between different stages of the RVC [13, 31], a central challenge of CR applications to be productive is finding effortless interactions for the transition of context and virtual objects be- tween stages [43]. Although researchers have been utilizing novel interaction techniques, such as head and body gesture interaction, eye gaze interaction, voice interaction, non-verbal vocal input, and brain-computer interfaces, Jankowski et al. state that novel input modalities will not replace the mouse, keyboards, and touchscreens as the major input modality for interacting with standard monitor devices [9, 17, 37, 46]. On the other hand, a review of interaction techniques for immersive environments done by Spittle et al. states that freehand interaction, gaze-based input, hardware-based input, and speech interaction occur most frequently in research using HMDs [38]. Although VR and AR HMDs both focus on providing natural and intuitive interaction, the most prevalent input modality varies slightly for those two stages. Anthes et al. state that con- trollers are the most widely utilized input devices for VR HMDs, followed by navigation and tracking technology [2]. Hand gesture interaction enabled by an optical hand tracker is the most common input modality for AR HMDs. When users are working with a CR application that support virtual object transition, they will interact with devices and interfaces that belong to at least two points along the RVC. Given the heterogeneity of devices and interaction, as pointed out above, picking the right subset is not a trivial task. The available CR transitions, for instance, are mostly based on technol- ogy capabilities, not user preference. Researchers and developers may utilize the input modality most commonly implemented in a space on the RVC to trigger the transition of the virtual object be- tween that space to another due to the easiness of implementation and other practical reasons. However, this may sacrifice usability and reduce user experience since previous elicitation studies point out that researchers and developers often have different concep- tual models than users. With this work, we aim to address this challenge in the context of object transitions in CR and raise the research question: How do users want to transfer 3D virtual objects between a standard monitor and an augmented re- ality head-mounted display during a Cross Reality session? We accomplish this by conducting wizard-of-oz elicitation studies inspired by Chopra et al. [8]. All participants sat or stood in front of a computer monitor during the study wearing Microsoft Hololens 2 (Figure 1). They could see the visual effect of virtual objects tran- sitioning between the computer monitor and Hololens 2 while the investigator was explaining the task. Participants also saw the vi- sual effect of transitioning while they made the proposal. However, the visual effect of transition is controlled by the investigator. Sec- tion 2 provides an overview of the existing studies and literature on the CR transition of virtual objects. Section 3 introduces the study’s design, including participants’ demographics, referents, and procedures. Section 4 presents the result of the study with an initial

analysis of the result. Finally, Section 5 further analyzes the result and discusses the insights we have found.




---

## RELATED WORK

Elicitation studies are conducted to gain insights that contribute to user-centered design [5, 7, 8, 21]. They are a qualitative research method aimed at uncovering and documenting user experiences, perceptions, emotions, and opinions pertaining to VR/AR tech- nologies, applications, or content. They involve structured data collection techniques to elicit valuable insights from participants. These studies typically involve various data collection techniques such as interviews, surveys, observations, or think-aloud protocols. Current prototypes that support the transition of virtual objects from one reality to another are based on designers’ intuition. No elicitation study has been conducted to gather empirical data on users’ preferences for selecting and transitioning virtual objects along the RVC.




---

## Cross Reality Transition of Virtual Objects

Researchers had the idea to bridge different points along the RVC to overcome the limitation of technologies at each point for decades. With the advancement of network and display technologies, there is an increased number of publications investigating the capability of CR. CR is the technology focusing on the transition between or concurrent usage of technologies on different points along the RVC. Wang et al. propose a design space for single-user CR applications stating that the transition of environment and transition of virtual objects are two essential subfields of CR [43].

The research idea of moving virtual objects from one point to another along the RVC was initially proposed and explored by Ki- jima and Ojika [19]. They built a prototype supporting the CAD model transition from an SMD workstation to a Projective Head Mounted Display (PHMD). Many researchers also investigate using AR devices to extend content displayed on SMD [20]. Riegler et al. and Wang et al. suggest that a user can benefit from CR applica- tions that support the transition of virtual objects [32, 42]. Roo et al. proposed OneReality, a six-level CR system in which the user can progressively transition from the physical space to the virtual space by incrementally increasing the immersion level [33]. The system focuses on the transition of environment, while the virtual objects in the system are created to associate with the real physi- cal object the user is interacting with at Level 0. The transition of the virtual object happens simultaneously with the transition of the environment’s immersion level. However, the paper does not cover the interactions that trigger the transition. Schwajda et al. proposed transformation initialization using mid-air hand gesture, target layout in 3D space, and transformation parameters as three influential areas to be considered to seamlessly transition infor- mation from a 2D display to AR [36]. In that study, when the user selects a visualization and pulls the controller away from the 2D display, a copy of the visualization will first spawn in AR space in a 2D form that aligns with the 2D visualization shown in the 2D display. Then the 2D visualization in AR space will transform into a 3D visualization. Benko et al. look into the transition of virtual content between standard monitor devices and HMDs. The tran- sition of virtual objects was triggered by multi-model interaction







combined with mid-air and on-screen gestures. In their system, those gestures were captured by a multi-touch surface and data gloves [6]. Cools proposed a CR prototype framework that allows users to transition virtual objects from desktop to AR space using bimanual and batched techniques. Both techniques utilize a mouse to select virtual objects on the desktop and hand gestures to mark position in AR space to trigger the transition of virtual objects from desktop to AR space. On the contrary, when transitioning virtual objects from AR space to the desktop, the user needs to use hand gestures to select the virtual object and then use the mouse to select a position on the desktop [10].




---

## User Elicitation Studies

Many studies have investigated how end-users would prefer to interact with devices along the RVC using a single form of input modalities, such as a mouse and keyboard, on-screen or mid-air hand gestures, full body gestures, eye gazing, and brain-computer interface [7, 34]. Our study aims to elicit the user’s preference for transitioning 3D virtual objects between SMD and HMD with input modalities they can imagine. Multi-model refers to multiple input modalities users use to interact with computer systems. The wizard- of-oz technique is commonly utilized in multi-model elicitation studies [5, 21, 27]. A wizard-of-oz study is a research method where the experimenter simulates the functionality of a technology or system behind the scenes to create the illusion that an automated system is functioning as intended. This approach is commonly used to gather user feedback and test user interactions with a system before it is fully developed or automated.

Peshkova conducted an elicitation study on how users want to control UAVs using voice commands and gestures using a com- bination of wizard-of-oz study, online survey, and interview [30]. They use online surveys, video interviews, and in-person elicitation studies to conclude a set of gesture and voice interactions to control UVAs. Some multi-model elicitation studies collect the number of occurrences of users’ inputs as a result. Morris ran a wizard-of-oz elicitation on gesture and voice interaction to controlled TVs for web browsing [23]. He found that participants considered both ges- ture and voice to be effective for accomplishing the task. However, very few participants proposed multimodal interactions. Nebeling et al. reproduce the study designed by Morris and test the set of interactions concluded from the elicitation study results with a mul- timodal web browser they designed to compare the difference [27]. They found this method could be used to obtain reproducible and implementable user-defined interaction sets. Many multi-model elicitation studies use two ways of interaction and aim to find the way of interaction by asking users to pick which method they want to use for each referent [16, 30]. However, Chopra et al. looked into the overall preference between gestures and voice commands on all tasks [8]. Studies should include an extra step to check preference by asking users which input modalities they prefer. Kettebekov et al. conducted gestural elicitation but discussed the emergence of speech and multi-modal interaction [18]. Williams et al. investi- gated how users preferred manipulating virtual objects while wear- ing AR HMD using gesture and speech [44]. Tsandilas reviewed methods commonly used to assess consensus among proposals in gesture elicitation [39]. The agreement rate equation visited in

the review that is proposed by Findlater et al. was used to find consensus among proposals in this elicitation study [3, 4, 14, 15]. Villarreal-Narvaez et al. also conducted a systematic review of gesture elicitation studies and found that the average number of participants is 25 and the average number of referents is 20. The re- view also states that 51% of elicitation studies report the agreement rate proposed by Findlater et al [41].




---

## ELICITATION STUDY

To answer our research question, how users prefer transitioning 3D virtual objects between an SMD and AR HMDs, an elicitation study was conducted. Our elicitation study is inspired by Wobbrock et al.’s elicitation methodology and Wizard of Oz experiments [11, 45]. Since there is no adequate evidence on which interaction techniques are more intuitive and effortless for CR virtual objects transition, our study participants could propose any interactions associated with any input modalities they could think of. Participants were encouraged to propose a combination of interactions associated with multiple input modalities if the proposals were considered intuitive and effortless.




---

## Apparatus

Since the study investigates how users want to transition 3D virtual objects between the SMD and AR devices, we include an Acer T231H computer monitor as the SMD and a Microsoft Hololens 2 to display holographic contents in AR space. Holographic contents are virtual, graphical components that users can only see through the HMD. This study used twelve low-poly 3D virtual objects. All virtual objects are fully opaque and similar in size, but each one is different in shape and color. We used the wizard-of-oz approach to remove the gulf of execution so that the system accepts all inputs from participants no matter what input modality or combination of input modalities participants use to create the interaction inputs [11]. Each front-end component on the screen-based and holographic GUI was mapped to either the keyboard key or clickable button so that the researcher could use a mouse and keyboard to trigger the transition. Every time the user proposed an interaction for virtual objects transition, we manually triggered the transition so that it gave participants an illusion that the interaction they proposed triggered the transition successfully. The participants’ interactions and semi-structured interviews were video and audio-captured by two 1080p Logitech StreamCam mounted on two tripods from different angles.




---

## Referents and Rounds

We derived a list of five scenarios based on prototypes proposed in previous studies and considered to be frequently implemented in CR applications that support virtual object transition, as listed in Table 1 [1, 32, 35, 36]. It is important to note that twenty combinations of tasks are derived since we want to investigate what interaction users prefer to perform for each scenario while they are sitting or standing and while they are transitioning one 3D virtual object from a group of 3D virtual objects or transitioning multiple 3D virtual objects within a group of 3D virtual objects. While the user’s posture is not at the center of our research questions, we do acknowledge





Table 1: All possible 20 combinations of tasks.







that it potentially has a significant impact on how users interact [47]. Therefore, we put the participants in both scenarios.




---

## Procedure

At the beginning of each session, participants were informed of the purpose of the study. Then, participants were primed with a short introduction to commercially available input modalities and technologies. The introduction included input modalities includ- ing but not limited to mouse and keyboard, voice, hand and body gesture, motion controller, and eye gaze. A list of input devices such as a mouse, keyboard, game controller, VR controller, voice capture device, and gesture capture device was also shown to in- crease affordance in front of the participants. Participants were taught how to use the devices. Those input devices remained in front of participants during the study for affordance. Participants were informed that they could design special input devices using the rubber, stylus, or any input devices shown on the desk. Par- ticipants were encouraged to propose interactions based on input modalities introduced by the researcher or any input modalities they could imagine as long as the interaction they proposed was convenient and effective. They were also informed that they could propose interactions that combine multiple input modalities. Fi- nally, they also were encouraged to propose any interaction they could imagine or had seen in science fiction movies.

Participants were fitted with the headset to ensure they were comfortable and that all 3D virtual objects were visible. Participants were told they were working with 3D virtual objects on the stan- dard monitor using a mouse and keyboard. Participants were then presented with a list of five referents shown in Table 1 with four different combinations of conditions. Participants first worked on referent one, and the rest were done in random order for all condi- tions since referent one is considered the base case. Four referents are followed by the referent one, and the permutation equals 24 (Table 1). Thus, each participant proposed tasks two to four in all conditions in a unique order.

At the beginning of each referent, the investigator describes the details of the scenario with a demonstration of the transition. After participants proposed three interactions for each referent, they were asked to rank their proposals based on their preferences. We asked participants to propose three interactions for each referent because it is a typical number used by elicitation studies when applying the production techniques to reduce legacy bias [25]. Participants were allowed to ask any clarification questions. After completing all 20 tasks, we conducted semi-structured interviews to collect feedback on participants’ experiences and potential use cases. At the end of the study, participants were asked to fill out a questionnaire regard- ing their age, educational/occupational background, and previous experience with computers, HMD, and interaction techniques.


---

## Participants

Twenty-four volunteers participated in the main study based on the permutation of referent order. Four participants were dropped due to technical and recording issues. Ten participants were female, 9 participants were male, and 1 participant classified themselves as non-binary. Participants were recruited using website advertise- ments, email lists, word of mouth, and snowball sampling. Twelve participants were in the age range of 18 to 25, 3 participants were in the age range of 26 to 30, 4 participants were in the age range from 31 to 35, and 1 participant was in the age range above 40. Ten participants came from a Computer Science or Software Engineer- ing background, and others from Chemical Engineering, Petroleum Engineering, Health Science, and Business. All participants use a computer with a traditional mouse and keyboard daily, and 16 out of 20 participants spend 5 to 10 hours daily interacting with com- puters. The majority of participants have some level of experience with game controllers, VR/AR devices, multi-touch interaction, and voice interaction. However more than half of the participants have no experience with mid-air gesture interaction, and most have no experience with eye gaze input. 75 percent of participants have experience with game controllers, and 80 percent have experience in VR.




---

## RESULT AND ANALYSIS


---

## Analysis

Proposals made by 20 participants were recorded, and each partici- pant was asked to propose three interactions for each referent. As a result, we collected 1200 interactions (20 participants x 20 referents x 3 proposals). All 1200 interaction inputs with participants’ voice descriptions were recorded on video. We used open coding inspired by grounded theory to create labels for input modalities and inter- actions by watching the video and audio recordings several times [26]. We identified key recurring behaviors. We developed two sets of codes, one focusing on input modalities and the other focusing on interactions in one input modality or combination of multiple input modalities.

For each proposal made by participants, we record every unique atomic interaction to remove the side effects caused by an atomic in- teraction being used multiple times within a single proposal. A final set of atomic interactions was generated that contains all unique atomic interactions that may or may not be repeated. The number of occurrences of each unique atomic interaction was also recorded. A set of input modalities was also generated using a similar approach by adding and counting each unique input modality proposed by each participant for a single referent. For example, a participant was asked to transition three virtual objects from the computer monitor to AR space. The participant "used the index finger of the







right hand to tap on three virtual objects one by one and then drag them to the AR space." The unique atomic interactions extracted from the proposal are Tap and Drag. Although Tap was used three times in the proposal, the occurrences of both Tap and Drag in the proposed interaction were one.

The study aims to find the consensus between users or con- sistency among the interaction method users proposed on each referent. After counting the number of occurrences of each elicited interaction for all referents, the overall agreement rate among all proposals of a referent was calculated using the equation proposed by Vatavu and Wobbrock to determine the level of consensus among proposals (Equation 1) [40]. In this equation, P is the set of all atomic interactions being proposed for referent r, |𝑃 | is the size of the set,

𝑃𝑖 is subsets of identical atomic interactions from P, and |𝑃𝑖 | is the size of the subset. Compared with the agreement rate used by Chen et al. and Chopra et al., this modified agreement rate determines the consensus among all proposed atomic interactions and input modalities instead of the one proposed by most participants. This agreement calculation method also accounts for the possibility of 0 agreement, where no one agrees with others.



∑︁ 1 |𝑃𝑖 | (|𝑃𝑖 | − 1)

Table 3: Result table of the top-ranked consensus atomic interaction set, top-ranked consensus input modality set, and overall agreement rate for all referents. This table only contains atomic interactions from the proposal ranked first by each participant for each referent.





Table 2: Result table of consensus atomic interaction set, consensus input modality set, and overall agreement rate for



2

𝑃 ⫅𝑃

(1)

all referents. Both input modalities and input modalities are



AR =

𝑖

1 |𝑃 | (|𝑃 | − 1)

ranked by the frequency they are proposed in descending order. Most frequently proposed are bold. (Note: HG: Hand gesture, VE: Voice, MC: Motion controller)



Another essential goal of this study is establishing a consen- sus interaction set. In this study, the interactions that pass the consensus threshold were also identified and could be considered supplemental interactions. Morris et al. initially proposed The term consensus threshold when they introduced the consensus-distinct ratio to calculate the percent of the distinct proposals made for each referent [24]. To determine the set of consensus atomic interactions for each referent, we redefine the consensus threshold to be the av- erage occurrence of each distinct atomic interaction in the final set (Equation 2). In this equation, P is the set of all atomic interactions for referent r, |𝑃 | is the size of the set, 𝑈 is the set of unique atomic interactions for referent r, and |𝑈 | is the size of the set.










---

## Result

𝐶𝑜𝑛𝑠𝑒𝑛𝑠𝑢𝑠𝑇ℎ𝑟𝑒𝑠ℎ𝑜𝑙𝑑 = |𝑈 |

|𝑃 |



(2)

We also analyzed the atomic interactions and input modalities ranked top by each participant on each referent using the same method. Based on the margin proposed by Vatavu and Webbrock, The participants have a medium overall agreement rate on top-



Vatavu and Webbrock recalculated the agreement rate using Equa- tion 1 on 18 previous studies and defined margins for interpreting the magnitude of the overall agreement [40]. The margin proposed by Vatavu and Webbrock indicates that in our study, participants have a medium overall agreement on proposed atomic interactions and a medium to a high overall agreement on proposed input modal- ities for each referent (Table 2). The analysis resulted in overall agreement rates that were high enough to conclude an atomic inter- action set. We created a table containing sets of consensus atomic interactions, input modality, and over-agreement rate for all 20 referents. All atomic interactions and input modalities that passed the consensus threshold were recorded in the table.

ranked favorite interactions and high to very high agreement on top-ranked input modalities for all referents (Table 3) [40].


---

## DISCUSSION AND DESIGN RECOMMENDATIONS

The CR transition of virtual objects usually involves selecting the virtual object and triggering the transition. Thus, participants usu- ally need to make a proposal consisting of multiple atomic interac- tions to accomplish the task. In addition, the overall agreement rate of an open elicitation study tends to be lower since participants do not have any constraints on the proposal they make. Due to these two reasons, we decided to record all atomic interactions that pass



AVI 2024, June 03–07, 2024, Arenzano, Genoa, Italy	Wang, et al.





the consensus threshold in the consensus set even though the over- all agreement rate of proposed atomic interaction and top-ranked atomic interaction falls into the medium agreement interval (Table 2 and 3).




---

## Primary Input Modality

Based on the analysis results, we can conclude that hand gesture is the most natural and effective input modality for transitioning 3D virtual objects between computer monitors and XR spaces since it is the most proposed input modality for all referents with very high agreement on average. This finding aligns with the CR prototype proposed by David et al., where hand gesture is used to transition heart visualization from a large multi-touch display to AR space [1]. Based on the feedback we collected during the study, users prefer to use hand gestures in most cases. As commented by one participant," I like using hand gesture [over controller] since it’s convenient and intuitive." Another participant commented, "...if originally working with mouse and keyboard, I don’t want to pick up another device, I just want to make my hand stay free." Across all referents, we observed that most participants (60% to 96%) proposed hand gesture interaction first among all three proposals, indicating that hand gestures are an intuitive input modality for the CR virtual object transition. Since 80 percent of participants have experienced VR technologies, legacy bias could potentially influence the result. However, over half of the participants have never experienced mid- air hand gestures, indicating limited influence on consensus input modality from legacy bias. Based on data analysis and observation, we suggest hand gestures should be considered the primary input modality for CR applications supporting the transition of 3D virtual objects.

Inspired by the prototype proposed by Cools et al., we thought the Traditional Controller, such as mouse and keyboard, could be used as a supplementary input modality. Since all participants use the mouse and keyboard daily for five to ten hours, we thought this legacy bias might make participants who sat in front of the monitor with a keyboard and mouse within arm’s reach tend to include them as part of the proposal. Surprisingly, the Traditional Controller did not pass the consensus threshold for any referents, even those referents while participants sat.




---

## Primary Atomic Interaction Set

Drag, Tap, and Grab are the three most commonly seen atomic interactions in Table 2 and Table 3 across all referents. Tap and Grab are two hand gestures that were frequently used to select the virtual object at the initial stage of the CR transition. However, Tap could also terminate the CR transition. For example, when participants were asked to transition the virtual object from AR space to a customized position on the standard monitor, some par- ticipants terminated the transition by tapping a specific position on the monitor. Drag is the highest occurrence interaction overall since Drag is an interaction belonging to input modalities such as hand gesture, traditional controller, and motion controller input modality. The hand gesture Drag was usually used after partici- pants selected the virtual object using Grab or Tap to move the virtual object and execute the CR transition. Since Drag, Tap, and Grab are most commonly proposed and always ranked top among

atomic interactions, we suggest Drag combined with Tap or Grab should be considered as the primary interaction for CR applications supporting the transition of 3D virtual objects.

The importance of supplemental atomic interactions is not neg- ligible. From Table 2, we can see many atomic interactions other than primary atomic interactions, such as Select, Throw, Voice, Circle, Swipe, and Press Button. These atomic interactions can be combined with three primary atomic interactions discussed in the paragraph in specific postures or scenarios to make the transition of 3D virtual objects between SMD and AR spaces more efficient and effective.






---

## Interaction for Sitting and Standing

Voice was more frequently proposed when participants stood away from the monitor. Voice was included in the consensus atomic in- teraction set in 9 out of 10 referents where participants stood. From observation and interview, we found that participants tend to select 3D virtual objects using Voice by calling the name of virtual objects since they consider it more convenient and precise than using a motion controller or hand gesture. However, some participants were concerned about the extra effort to remember all names or codes of virtual objects that stored in the system to select virtual objects using voice commands. In most proposals that involve using voice commands to select virtual objects, a keyword such as "select" and the name of the virtual objects are always included. Typical examples are "Select A, B, C" or "A, B, C," where "A," "B," and "C" represent the names of the virtual objects. Some participants also mentioned that triggering transition while standing using Voice is more effortless since the user would not need to hold any devices or walk toward the monitor. However, Voice was proposed to trigger the transition to a fixed position on SMD or AR spaces because participants thought "it is very hard to use voice to define a cus- tomized position." For referents that ask participants to transition the virtual object(s) from the standard monitor to a fixed position in AR space, the keyword "out" occurs most frequently. For referents that ask participants to transition the virtual object(s) from the AR space to a fixed position on the standard monitor, voice command has a low level of convergence. Participants used "Back," "Return," "Clear," "Go," "Put," "Monitor," "Screen," and "Inside" as part of their voice commands.

Select is defined as using a cursor or pointer aiming at a 3D virtual object, then pressing the button or pulling the trigger to choose it. Most Select was done on the motion controller (17 out of 20) instead of the traditional controller, such as a mouse or game controller with the joystick. While standing, the occurrence of the motion controller is higher than the traditional controller in all ten referents. While sitting, participants picked the traditional controller over the motion controller only in 3 referents (referents 3, 11, and 13). This indicates that Select using a motion controller could be considered a supplemental interaction whether the user is sitting or standing. We expected more participants to propose Select using the mouse while they sat close to the monitor since all participants interacted with a PC or laptop daily for 5 to 10 hours. We think the fact that 80 percent of participants have experienced VR, in which motion controllers are most commonly used, might have offset the influence of daily computer usage.







We suggest in the tasks where the user stands away from com- puter monitors, developers could combine voice commands or mo- tion controllers with hand gesture Drag to transition 3D virtual objects between SMD and AR space. The developer could also uti- lize voice commands to trigger transition while the user sits in front of the monitor, either combining with voice commands, Grab, or Tap for object selection.




---

## Transitioning 3D virtual objects to monitor

The hand gesture Throw is the most proposed atomic interaction and the most proposed favorite atomic interaction for Referents 4, 9, 14, and 19, which covers all tasks that asked participants to select 1 or 3 out of 12 virtual objects and transition them from AR space to the standard monitor at a fixed position while standing. No matter what interaction participants used, the virtual object(s) always disappeared from AR spaces and appeared on the monitor at a fixed position. This means participants would not need to define the ending position precisely. In addition, "Throw" is included in the list of supplemental atomic interaction and supplemental atomic top-ranked interaction for tasks 4 and 14, which were tasks that asked participants to select 1 or 3 out of 12 virtual objects and transition them from AR space to the standard monitor at a fixed position while sitting. This evidence suggests that Throw should be considered part of the primary interaction for transitioning virtual objects from HMD to the monitor to a fixed position. Using Throw is intuitive since the user could refer to actions such as throwing objects into bins in the physical world. It is also effortless since the user would not need to approach the monitor or point at a position on it using the peripheral device or virtual assistance such as a computer-generated ray pointer. Since Throw is the gesture that only triggers the transition, it needs to be combined with either Grab or Tap to be a complete interaction for CR virtual object transition.

Like Throw, Swipe is a hand gesture included in the list of sup- plemental atomic interactions and top-ranked atomic interactions for tasks 9 and 19, where participants were asked to transition a group of 3D virtual objects from AR space to SMD. Although Swipe was not proposed as frequently compared with Throw, some partic- ipants found this hand gesture intuitive to transition virtual objects back to the monitor. One participant thought, Swipe is similar to wiping the board, and I think all virtual object(s) in front of me will be cleared [in AR space] and go back to the monitor if I swipe once." Throw is a hand gesture that needs to be combined with Tap or Grab. When multiple virtual objects need to be transitioned from the AR space to the monitor, the user could select all of them and Throw once or Throw virtual objects back to the monitor individually. In comparison, some participants consider Swipe to be a hand gesture that reset the AR space. Thus, Swipe could be used specifically to transition all virtual objects to monitor at once since this single hand gesture is more effortless compared with performing Tap or Grab with Throw multiple times.




---

## Grouping

A grouping method could make the whole process more efficient when transitioning a group of 3D virtual objects between SMD and AR space. Although Swipe discussed in the previous paragraph is

a good example, it only applies to a very specific scenario. Most participants proposed atomic interactions such as Tap, Grab, Voice, and Select to highlight 3D virtual objects one by one as the method of grouping before triggering the transition. Circle is within atomic interaction consensus set for only 3 out of 10 referents involving grouping. However, we suggest that the developer consider using Circle as a mid-air or on-screen gesture when grouping is needed since it groups multiple virtual objects by performing the gesture only once, which we think is more efficient.




---

## Duplication

Duplication is another type of task that might need special supple- mental atomic interaction since the user may be unable to refer to intuitive and natural interaction to duplicate in the physical world. Thus, participants propose interaction based on their previ- ous experience making duplicates in other computing systems. As a result, the traditional controller became the only input modality that passed the consensus threshold for Referent 3. In addition, Select and Press Button passed the consensus threshold as a supplemental atomic interaction for Referents 3, 8, 13, and 18. These referents re- quired participants to duplicate virtual object(s) from the standard monitor to the AR space. Participants made proposals while sitting for Referents 3 and 13 and standing for Referents 8 and 18. It is also essential to note that more participants proposed the traditional controller than the motion controller for Referents 3 and 13. Con- cluding from the data and observation, the combination of Select and Press Button with mouse and keyboard could be considered as supplemental interaction for duplication while sitting in front of the monitor. While sitting close to the monitor, Select is achieved using the mouse cursor, while Press Button could be achieved by pressing a virtual button on GUI utilizing the mouse or pressing physical keyboard buttons as a shortcut. In contrast, while users are standing, which is further away from the monitor, Select and Press Button should be considered as supplemental interaction with the motion controller, such as the VR controller. Select is achieved by pointing the ray pointer of the controller to the virtual object(s) and pulling the trigger. While Press Button could be achieved by using the VR controller to select a virtual button on a GUI in AR space or pressing a physical button designated for duplication on the controller. We observed that sometimes, when participants use the motion controller to duplicate the virtual object(s), the order of proposing Select and Press Button is reversed. Some participants chose to Press Button and enter the "Duplication Mode" and then Select virtual object(s). Those participants expect virtual object(s) to be selected after entering the duplication mode automatically duplicated, and the duplicate would appear in the AR space.

Voice could also be used in duplication tasks. Voice could be used solely for completing duplication of 3D virtual objects from monitor to AR space. The developer could use the voice command mentioned previously for object selection with a voice command that triggers the transition. For referents that ask participants to duplicate the virtual object(s) from the standard monitor to the AR space, the keywords "copy," "duplicate," and "clone" were proposed frequently. Since those three words share a similar meaning, the designer could use those as a part of a supplemental interaction for CR duplication.








---

## Monomodality or Multimodality Interaction

From the data, we observed that 1.7% to 25% of proposals included interactions belonging to more than one input modality for each referent. An average of 11.3% of proposals had interactions with more than one input modality for each referent, with a standard deviation of 6.3%. The data indicate that the majority of participants prefer transitioning virtual objects between the standard monitor and AR space using interactions belonging to one input modality. Although at the beginning of the study, participants were informed that they were allowed to make proposals containing atomic inter- actions belonging to multiple input modalities, participants might forget multimodal interaction as an available option since some participants explicitly asked during the study if they were allowed to combine interactions from more than one input modality.

More monomodal interactions were proposed for simple tran- sition tasks, such as the transition of one virtual object between SMD and AR space. However, more participants proposed multi- modal interaction when they stood or were asked to transition multiple virtual objects. Some participants were concerned about the accuracy of hand gestures and motion controllers when they selected the virtual objects or a specific position on the SMD and suggested that voice could make the selection more reliable from a distance. However, many participants who proposed voice found it hard to define a customized position in the AR space. These feedbacks indicate that utilizing multimodal interaction in some CR transition scenarios has promising potential since it can offset drawbacks brought by monomodal interactions and offer users a more seamless transition.








---

## LIMITATION

Our study has some limitations. First, participants were asked to propose three interactions for each referent, which generated addi- tional disagreement and potentially led to a low overall agreement rate using Equation 1. This indicates the consensus we found among participants is conservative. In addition, we focused on collecting quantitative data, which was then used for data analysis. Although quantitative data provides strong evidence to support our results, collecting more qualitative data, such as why participants prefer one interaction over the other when ranking them, is valuable. Some participants shared their reasoning on ranking preference, which was helpful supplementary evidence and can be used with data and observation to justify our findings and discussion.

Legacy bias may introduce a significant effect on elicitation results[7]. In this study, we utilized two of Morris et al.’s proposed techniques to reduce legacy bias: priming and production [25]. The technique we opted out of is pairing. Pairing is a technique that encourages multiple participants to collaborate on proposing interactions together. This could decrease the probability that par- ticipants make a proposal only based on their unique experiences. However, if one participant in the pairing group dominates the con- version, the proposals can also be biased toward the understanding of the dominant participant. Another drawback of pairing is it will significantly increase the time for each proposal since participants need to discuss and convince each other before proposing.


---

## CONCLUSION

In this elicitation study, we defined five key tasks of single-user CR transition of virtual objects and derived 20 referents. A study was conducted with 20 participants who were video and audio captured while they proposed interactions for each task. Partici- pants were generally excited about the work and expected to try more CR prototypes in the near future. The elicitation data was analyzed through an open-coding approach. A quantitative analy- sis was performed on atomic interaction participants proposed for each referent to measure user preference. An agreement rate was calculated for each referent on the most proposed interaction, the most proposed input modality, the most proposed favorite interac- tion, and the most proposed favorite input modality. The consensus threshold was also calculated to define each referent’s supplemen- tal interaction and input modality. Finally, the quantitative results were further discussed to derive a set of guidelines for designing interaction to execute the virtual object(s) transition between the standard monitor and AR HMDs. The guideline also applies to CR applications transitioning between the standard monitor and VR HMDs supporting video pass-through.




---

## REFERENCES

David Aigner, Nanjia Wang, David Kielmayer, Jurgen Steiner, Julian Hochpochler, Christoph Heinzl, Daniel Roth, Frank Maurer, and Christoph Anthes. 2023. Car- diac Visualisation Along the RV-Continuum – A High-Fidelity Pilot Study. In 1st Joint Workshop on Cross Reality at IEEE International Symposium on Mixed and Augmented Reality (ISMAR).

Christoph Anthes, Rubén Jesús García-Hernández, Markus Wiedemann, and Dieter Kranzlmüller. 2016. State of the art of virtual reality technology. In 2016 IEEE Aerospace Conference. 1–19. https://doi.org/10.1109/AERO.2016.7500674

Christopher R. Austin, Barrett Ens, Kadek Ananta Satriadi, and Bernhard Jenny. 2020. Elicitation study investigating hand and foot gesture interaction for im- mersive maps in augmented reality. Cartography and Geographic Information Science 47, 3 (2020), 214–228. https://doi.org/10.1080/15230406.2019.1696232

arXiv:https://doi.org/10.1080/15230406.2019.1696232

Patrick Bader, Huy Viet Le, Julian Strotzer, and Niels Henze. 2017. Exploring Interactions with Smart Windows for Sunlight Control (CHI EA ’17). Association for Computing Machinery, New York, NY, USA, 2373–2380. https://doi.org/10. 1145/3027063.3053242

Ceylan Beşevli, Oğuz Turan Buruk, Merve Erkaya, and Oğuzhan Özcan. 2018. Investigating the Effects of Legacy Bias: User Elicited Gestures from the End Users Perspective (DIS ’18 Companion). Association for Computing Machinery,

New York, NY, USA, 277–281. https://doi.org/10.1145/3197391.3205449

H. Benko, E.W. Ishak, and S. Feiner. 2005. Cross-dimensional gestural interaction techniques for hybrid immersive environments. In IEEE Proceedings. VR 2005.

Virtual Reality, 2005. 209–216. https://doi.org/10.1109/VR.2005.1492776

Edwin Chan, Teddy Seyed, Wolfgang Stuerzlinger, Xing-Dong Yang, and Frank Maurer. 2016. User Elicitation on Single-Hand Microgestures. In Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems (San Jose, California, USA) (CHI ’16). Association for Computing Machinery, New York, NY,

USA, 3403–3414. https://doi.org/10.1145/2858036.2858589

Shreya Chopra and Frank Maurer. 2020. Evaluating User Preferences for Aug- mented Reality Interactions with the Internet of Things. In Proceedings of the International Conference on Advanced Visual Interfaces (Salerno, Italy) (AVI ’20). Association for Computing Machinery, New York, NY, USA, Article 20, 9 pages. https://doi.org/10.1145/3399715.3399716

Leigh Clark, Philip Doyle, Diego Garaialde, Emer Gilmartin, Stephan Schlögl, Jens Edlund, Matthew Aylett, João Cabral, Cosmin Munteanu, Justin Ed- wards, and Benjamin R Cowan. 2019. The State of Speech in HCI: Trends, Themes and Challenges. Interacting with Computers 31, 4 (09 2019), 349–371. https://doi.org/10.1093/iwc/iwz016 arXiv:https://academic.oup.com/iwc/article- pdf/31/4/349/33525046/iwz016.pdf

Robbe Cools, Matt Gottsacker, Adalberto Simeone, Gerd Bruder, Greg Welch, and Steven Feiner. 2022. Towards a Desktop-AR Prototyping Framework: Prototyping Cross-Reality Between Desktops and Augmented Reality. In 2022 IEEE Interna- tional Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct). 175–182. https://doi.org/10.1109/ISMAR-Adjunct57072.2022.00040

Nils Dahlbäck, Arne Jönsson, and Lars Ahrenberg. 1993. Wizard of Oz studies: why and how. In Proceedings of the 1st international conference on Intelligent user







interfaces. 193–200.

Niklas Elmqvist, Andrew Vande Moere, Hans-Christian Jetter, Daniel Cernea, Harald Reiterer, and TJ Jankun-Kelly. 2011. Fluid interaction for information visualization. Information Visualization 10, 4 (2011), 327–340. https://doi.org/10. 1177/1473871611413180 arXiv:https://doi.org/10.1177/1473871611413180

Nico Feld, Pauline Bimberg, Benjamin Weyers, and Daniel Zielasko. 2023. Keep it simple? Evaluation of Transitions in Virtual Reality. Proc. of ACM CHI Conference Extended Abstracts on Human Factors in Computing Systems (2023). https://doi. org/10.1145/3544549.3585811

Leah Findlater, Ben Lee, and Jacob Wobbrock. 2012. Beyond QWERTY: Augment- ing Touch Screen Keyboards with Multi-Touch Gestures for Non-Alphanumeric Input. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (Austin, Texas, USA) (CHI ’12). Association for Computing Machinery,

New York, NY, USA, 2679–2682. https://doi.org/10.1145/2207676.2208660

Glebys Gonzalez, Naveen Madapana, Rahul Taneja, Lingsong Zhang, Richard Rodgers, and Juan P. Wachs. 2018. Looking Beyond the Gesture: Vocabulary Acceptability Criteria for Gesture Elicitation Studies. Proceedings of the Human Factors and Ergonomics Society Annual Meeting 62, 1 (2018), 997–1001. https://doi. org/10.1177/1541931218621230 arXiv:https://doi.org/10.1177/1541931218621230

A. G. Hauptmann. 1989. Speech and Gestures for Graphic Image Manipulation.

SIGCHI Bull. 20, SI (mar 1989), 241–245. https://doi.org/10.1145/67450.67496

Jacek Jankowski and Martin Hachet. 2013. A Survey of Interaction Techniques for Interactive 3D Environments. In Eurographics 2013 - State of the Art Reports,

M. Sbert and L. Szirmay-Kalos (Eds.). The Eurographics Association. https:

//doi.org/10.2312/conf/EG2013/stars/065-093

Sanshzar Kettebekov and Rajeev Sharma. 2001. Toward Natural Gesture/Speech Control of a Large Display. In Proceedings of the 8th IFIP International Confer- ence on Engineering for Human-Computer Interaction (EHCI ’01). Springer-Verlag, Berlin, Heidelberg, 221–234.

Ryugo Kijima and Takeo Ojika. 1997. Transition between virtual environment and workstation environment with projective head mounted display. Proceedings of IEEE 1997 Annual International Symposium on Virtual Reality (1997), 130–137.

Ricardo Langner, Marc Satkowski, Wolfgang Büschel, and Raimund Dachselt. 2021. MARVIS: Combining Mobile Devices and Augmented Reality for Visual Data Analysis. In Proceedings of the 2021 ACM Conference on Human Factors in Computing Systems (Yokohama, Japan). ACM, New York, NY, USA, 17 pages. https://doi.org/10.1145/3411764.3445593

Sang-Su Lee, Jeonghun Chae, Hyunjeong Kim, Youn-kyung Lim, and Kun-pyo Lee. 2013. Towards More Natural Digital Content Manipulation via User Freehand Ges- tural Interaction in a Living Room (UbiComp ’13). Association for Computing Ma- chinery, New York, NY, USA, 617–626. https://doi.org/10.1145/2493432.2493480

Paul Milgram, Haruo Takemura, Akira Utsumi, and Fumio Kishino. 1994. Aug- mented reality: A class of displays on the reality-virtuality continuum. Telema- nipulator and Telepresence Technologies 2351 (January 1994). https://doi.org/10. 1117/12.197321

Meredith Ringel Morris. 2012. Web on the Wall: Insights from a Multimodal Interaction Elicitation Study. In Proceedings of the 2012 ACM International Con- ference on Interactive Tabletops and Surfaces (Cambridge, Massachusetts, USA) (ITS ’12). Association for Computing Machinery, New York, NY, USA, 95–104. https://doi.org/10.1145/2396636.2396651

Meredith Ringel Morris. 2012. Web on the Wall: Insights from a Multimodal Interaction Elicitation Study. In Proceedings of the 2012 ACM International Con- ference on Interactive Tabletops and Surfaces (Cambridge, Massachusetts, USA) (ITS ’12). Association for Computing Machinery, New York, NY, USA, 95–104. https://doi.org/10.1145/2396636.2396651

Meredith Ringel Morris, Andreea Danielescu, Steven Drucker, Danyel Fisher, Bongshin Lee, m. c. schraefel, and Jacob O. Wobbrock. 2014. Reducing Legacy Bias in Gesture Elicitation Studies. Interactions 21, 3 (may 2014), 40–45. https:

//doi.org/10.1145/2591689

Michael Muller. 2012. Grounded Theory Methods. https://mixed-news.com/en/ how-bad-is-the-video-passthrough-on-the-quest-pro/

Michael Nebeling, Alexander Huber, David Ott, and Moira C. Norrie. 2014. Web on the Wall Reloaded: Implementation, Replication and Refinement of User-Defined Interaction Sets. In Proceedings of the Ninth ACM International Conference on Interactive Tabletops and Surfaces (Dresden, Germany) (ITS ’14). Association for Computing Machinery, New York, NY, USA, 15–24. https://doi.org/10.1145/ 2669485.2669497

Tao Ni, G.S. Schmidt, O.G. Staadt, M.A. Livingston, R. Ball, and R. May. 2006. A Survey of Large High-Resolution Display Technologies, Techniques, and Applications. In IEEE Virtual Reality Conference (VR 2006). 223–236.  https:

//doi.org/10.1109/VR.2006.20

Leonardo Pavanatto, Chris North, Doug A. Bowman, Carmen Badea, and Richard Stoakley. 2021. Do we still need physical monitors? An evaluation of the usability of AR virtual monitors for productivity work. In 2021 IEEE Virtual Reality and 3D User Interfaces (VR). 759–767. https://doi.org/10.1109/VR50410.2021.00103

Ekaterina Peshkova, Martin Hitz, and David Ahlström. 2017. Exploring User- Defined Gestures and Voice Commands to Control an Unmanned Aerial Vehicle. In Intelligent Technologies for Interactive Entertainment, Vol. 178. Springer. https:

//doi.org/10.1007/978-3-319-49616-0_5

Fabian Pointecker, Judith Friedl, Daniel Schwajda, Hans-Christian Jetter, and Christoph Anthes. 2022. Bridging the Gap Across Realities: Visual Transitions Between Virtual and Augmented Reality. In 2022 IEEE International Symposium on Mixed and Augmented Reality (ISMAR). 827–836. https://doi.org/10.1109/ ISMAR55827.2022.00101

Andreas Riegler, Christoph Anthes, Hans-Christian Jetter, Christoph Heinzl, Clemens Holzmann, Herbert Jodlbauer, Manuel Brunner, Stefan Auer, Judith Friedl, Bernhard Fröhler, Christina Leitner, Fabian Pointecker, Daniel Schwajda, and Shailesh Tripathi. 2020. Cross-Virtuality Visualization, Interaction and Collaboration. In Proceedings of the 1st ACM International Workshop on Cross- Reality Interaction (Lisbon, Portugal). ACM.

Joan Sol Roo and Martin Hachet. 2017. One Reality: Augmenting How the Physical World is Experienced by Combining Multiple Mixed Reality Modalities (UIST ’17). Association for Computing Machinery, New York, NY, USA, 787–795. https://doi.org/10.1145/3126594.3126638

Jaime Ruiz, Yang Li, and Edward Lank. 2011. User-Defined Motion Gestures for Mobile Interaction (CHI ’11). Association for Computing Machinery, New York,

NY, USA, 197–206. https://doi.org/10.1145/1978942.1978971

Daniel Schwajda, Judith Friedl, Fabian Pointecker, Hans-Christian Jetter, and Christoph Anthes. 2023. Transforming graph data visualisations from 2D displays into augmented reality 3D space: A quantitative study. Frontiers in Virtual Reality 4 (2023). https://doi.org/10.3389/frvir.2023.1155628

Daniel Schwajda, Fabian Pointecker, Leopold Böss, and Christoph Anthes. 2021. Transforming Graph-based Data Visualisations from Planar Displays into Aug- mented Reality 3D Space. In ISS’21 Workshop Proceedings: "Transitional Inter- faces in Mixed and Cross-Reality: A new frontier?", Hans-Christian Jetter, Jan- Henrik Schröder, Jan Gugenheimer, Mark Billinghurst, Christoph Anthes, Mo- hamed Khamis, and Tiare Feuchtner (Eds.). https://doi.org/10.18148/kops/352-2- 1kugqssauin8a2

Mara G. Silva and Doug A. Bowman. 2009. Body-Based Interaction for Desktop Games. In CHI ’09 Extended Abstracts on Human Factors in Computing Systems (Boston, MA, USA) (CHI EA ’09). Association for Computing Machinery, New York, NY, USA, 4249–4254. https://doi.org/10.1145/1520340.1520648

Becky Spittle, Maite Frutos-Pascual, Chris Creed, and Ian Williams. 2022. A Review of Interaction Techniques for Immersive Environments. IEEE Transactions on Visualization and Computer Graphics (2022), 1–1. https://doi.org/10.1109/ TVCG.2022.3174805

Theophanis Tsandilas. 2018. Fallacies of Agreement: A Critical Review of Con- sensus Assessment Methods for Gesture Elicitation. ACM Trans. Comput.-Hum.

Interact. 25, 3, Article 18 (jun 2018), 49 pages. https://doi.org/10.1145/3182168

Radu-Daniel Vatavu and Jacob O. Wobbrock. 2015. Formalizing Agreement Anal- ysis for Elicitation Studies: New Measures, Significance Test, and Toolkit. In Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems (Seoul, Republic of Korea) (CHI ’15). Association for Computing Machin- ery, New York, NY, USA, 1325–1334. https://doi.org/10.1145/2702123.2702223

Santiago Villarreal-Narvaez, Jean Vanderdonckt, Radu-Daniel Vatavu, and Ja- cob O. Wobbrock. 2020. A Systematic Review of Gesture Elicitation Studies: What Can We Learn from 216 Studies?. In Proceedings of the 2020 ACM De- signing Interactive Systems Conference (Eindhoven, Netherlands) (DIS ’20). As- sociation for Computing Machinery, New York, NY, USA, 855–872.  https:

//doi.org/10.1145/3357236.3395511

Nanjia Wang, A. Aminbeidokhti, and F. Maurer. 2020. Individual and Collab- orative Cross-reality Immersive Analytics - Initial Ideas. In Proceedings of the 1st ACM International Workshop on Cross-Reality Interaction (Lisbon, Portugal). ACM.

Nanjia Wang and Frank Maurer. 2022. A Design Space for Single-User Cross- Reality Applications. In Proceedings of the 2022 International Conference on Ad- vanced Visual Interfaces (Frascati, Rome, Italy) (AVI 2022). Association for Com- puting Machinery, New York, NY, USA, Article 31, 5 pages. https://doi.org/10. 1145/3531073.3531116

Adam S. Williams, Jason Garcia, and Francisco Ortega. 2020. Understanding Multimodal User Gesture and Speech Behavior for Object Manipulation in Aug- mented Reality Using Elicitation. IEEE Transactions on Visualization and Computer Graphics 26, 12 (2020), 3479–3489. https://doi.org/10.1109/TVCG.2020.3023566

Jacob O. Wobbrock, Meredith Ringel Morris, and Andrew D. Wilson. 2009. User- Defined Gestures for Surface Computing. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (Boston, MA, USA) (CHI ’09). Association for Computing Machinery, New York, NY, USA, 1083–1092. https://doi.org/10. 1145/1518701.1518866

Daniel Zielasko, Neha Neha, Benjamin Weyers, and Torsten W. Kuhlen. 2017. A Reliable Non-Verbal Vocal Input Metaphor for Clicking. In Proc. of IEEE 3D User Interfaces (2017), 40–49. https://doi.org/10.1109/3DUI.2017.7893316

Daniel Zielasko, Benjamin Weyers, Martin Bellgardt, Sebastian Pick, Alexander Meißner, Tom Vierjahn, and Torsten W. Kuhlen. 2017. Remain Seated: Towards Fully-Immersive Desktop VR. In Proc. of IEEE 3rd Workshop on Everyday Virtual Reality. 1–6. https://doi.org/10.1109/WEVR.2017.7957707


---

